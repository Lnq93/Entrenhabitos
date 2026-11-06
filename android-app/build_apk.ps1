$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$AndroidDir = $PSScriptRoot
$BuildDir = Join-Path $AndroidDir "build"
$AssetsDir = Join-Path $AndroidDir "assets"

$SdkDir = "$env:LOCALAPPDATA\Android\Sdk"
$BuildTools = Join-Path $SdkDir "build-tools\34.0.0"
$AndroidJar = Join-Path $SdkDir "platforms\android-34\android.jar"

$JavaHome = $env:JAVA_HOME.TrimEnd('\')
$Javac = Join-Path $JavaHome "bin\javac.exe"
$JarTool = Join-Path $JavaHome "bin\jar.exe"
$Keytool = Join-Path $JavaHome "bin\keytool.exe"

$Aapt2 = Join-Path $BuildTools "aapt2.exe"
$D8 = Join-Path $BuildTools "d8.bat"
$Zipalign = Join-Path $BuildTools "zipalign.exe"
$Apksigner = Join-Path $BuildTools "apksigner.bat"

Write-Host "1. Regenerando js/bundle.js y android-app/assets/index.html autocontenido..." -ForegroundColor Cyan
node (Join-Path $AndroidDir "prepare_assets.mjs")

Write-Host "2. Preparando directorios de compilación..." -ForegroundColor Cyan
if (Test-Path $BuildDir) { Remove-Item $BuildDir -Recurse -Force }

New-Item -ItemType Directory -Path "$BuildDir\gen", "$BuildDir\obj", "$BuildDir\dex" -Force | Out-Null

Write-Host "3. Compilando recursos con aapt2..." -ForegroundColor Cyan
& $Aapt2 compile --dir (Join-Path $AndroidDir "res") -o "$BuildDir\resources.zip"

& $Aapt2 link `
  -I $AndroidJar `
  --manifest (Join-Path $AndroidDir "AndroidManifest.xml") `
  -A $AssetsDir `
  --java "$BuildDir\gen" `
  -o "$BuildDir\unaligned.apk" `
  "$BuildDir\resources.zip"

Write-Host "4. Compilando código Java (MainActivity + R.java) con JDK 17..." -ForegroundColor Cyan
$JavaFiles = @(
  (Join-Path $AndroidDir "src\com\entrenhabitos\prototipo\MainActivity.java"),
  (Join-Path $BuildDir "gen\com\entrenhabitos\app\R.java")
)
& $Javac -encoding UTF-8 --release 11 -classpath $AndroidJar -d "$BuildDir\obj" $JavaFiles

Write-Host "5. Convirtiendo bytecode a Dalvik Executable (classes.dex) con d8..." -ForegroundColor Cyan
$ClassFiles = Get-ChildItem -Path "$BuildDir\obj" -Filter "*.class" -Recurse | ForEach-Object { $_.FullName }
& $D8 --lib $AndroidJar --output "$BuildDir\dex" $ClassFiles

Write-Host "6. Empaquetando classes.dex dentro del APK..." -ForegroundColor Cyan
Push-Location "$BuildDir\dex"
& $JarTool uf "$BuildDir\unaligned.apk" "classes.dex"
Pop-Location

Write-Host "7. Alineando APK con zipalign..." -ForegroundColor Cyan
& $Zipalign -f -p 4 "$BuildDir\unaligned.apk" "$BuildDir\aligned.apk"

Write-Host "8. Firmando APK con llave persistente (entrenhabitos-release.keystore)..." -ForegroundColor Cyan
$Keystore = Join-Path $AndroidDir "entrenhabitos-release.keystore"
if (-not (Test-Path $Keystore)) {
  & $Keytool -genkeypair -v `
    -keystore $Keystore `
    -storepass android `
    -alias entrenhabitoskey `
    -keypass android `
    -keyalg RSA `
    -keysize 2048 `
    -validity 10000 `
    -dname "CN=Entrenhabitos, OU=Mobile, O=Entrenhabitos, L=BuenosAires, S=BA, C=AR" | Out-Null
}

$FinalApk = Join-Path $RootDir "Entrenhabitos-Prototipo.apk"
& $Apksigner sign `
  --ks $Keystore `
  --ks-pass pass:android `
  --key-pass pass:android `
  --out $FinalApk `
  "$BuildDir\aligned.apk"

& $Apksigner verify --verbose $FinalApk
$ApkInfo = Get-Item $FinalApk
Write-Host "✅ APK Android generado y verificado con éxito: $($ApkInfo.FullName) ($([math]::Round($ApkInfo.Length / 1024, 1)) KB)" -ForegroundColor Green
