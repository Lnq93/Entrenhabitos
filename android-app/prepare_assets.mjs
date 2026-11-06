import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(__dirname, 'assets');

// 1. Regenerar js/bundle.js desde los módulos ES6 fuente
const sourceFiles = ['js/demo_data.js', 'js/rules_engine.js', 'js/store.js', 'js/app.js'];
let bundleOut = '(function() {\n"use strict";\n';

for (const relPath of sourceFiles) {
  let code = fs.readFileSync(path.join(rootDir, relPath), 'utf8');
  code = code.replace(/^import\s+[\s\S]*?from\s+['"].*?['"];?\s*$/gm, '');
  code = code.replace(/^export\s+(const|let|var|class|function)\s+/gm, '$1 ');
  code = code.replace(/^export\s+\{[\s\S]*?\};?\s*$/gm, '');
  bundleOut += `\n// === ${relPath} ===\n${code}\n`;
}
bundleOut += '\n})();\n';

const bundlePath = path.join(rootDir, 'js', 'bundle.js');
fs.writeFileSync(bundlePath, bundleOut, 'utf8');
console.log(`✅ js/bundle.js actualizado (${Buffer.byteLength(bundleOut)} bytes)`);

// 2. Generar android-app/assets/index.html 100% autocontenido (CSS + JS inline)
// Esto evita el bug de aapt2 en Windows donde subcarpetas en assets/ se empaquetan con '\' en vez de '/'
if (fs.existsSync(assetsDir)) {
  fs.rmSync(assetsDir, { recursive: true, force: true });
}
fs.mkdirSync(assetsDir, { recursive: true });

const htmlRaw = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const cssRaw = fs.readFileSync(path.join(rootDir, 'css', 'styles.css'), 'utf8');

let apkHtml = htmlRaw
  .replace('<link rel="manifest" href="manifest.webmanifest">', '')
  .replace('<link rel="stylesheet" href="css/styles.css">', () => `<style>\n${cssRaw}\n</style>`)
  .replace('<body class="mode-mobile">', '<body class="mode-mobile native-android-apk">')
  .replace('<script src="js/bundle.js"></script>', () => `<script>\nwindow.ENTRENHABITOS_ANDROID_APK = true;\n${bundleOut}\n</script>`);

const apkHtmlPath = path.join(assetsDir, 'index.html');
fs.writeFileSync(apkHtmlPath, apkHtml, 'utf8');
console.log(`✅ android-app/assets/index.html autocontenido generado (${Buffer.byteLength(apkHtml)} bytes)`);
