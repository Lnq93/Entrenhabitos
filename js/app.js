/**
 * Entrenhábitos - Controlador Principal de Aplicación y Reactividad
 * Conecta UI, State Store y Motor de Reglas Adaptativo
 */

import { AppState } from './store.js';
import { BARRIERS_CATALOG, INTERVENTIONS_CATALOG } from './demo_data.js';
import { RulesEngine } from './rules_engine.js';

class AppController {
  constructor() {
    this.currentRole = 'mobile'; // 'mobile' | 'split' | 'student' | 'coach'
    this.currentStudentTab = 'onboarding'; // 'onboarding' | 'plan' | 'checkin' | 'adaptive' | 'progress'
    this.selectedCheckinStatus = 'ideal';
    this.selectedBarrierId = null;
    this.timerInterval = null;
    this.timerSeconds = 0;
    this.inspectedCoachStudentId = 'alumno_martin';
    this.currentWizardStep = 1;
    this.isWizardMode = true;
    this.pushTimeout = null;
  }

  init() {
    if (typeof window !== 'undefined' && (window.location.search.includes('platform=android_apk') || window.ENTRENHABITOS_ANDROID_APK)) {
      document.body.classList.add('native-android-apk');
    }
    this.bindEvents();
    this.startCheckinTimer();
    this.switchRole('mobile');

    // Suscripción a cambios del Store reactivo
    AppState.subscribe((event) => {
      this.render();
      if (event.action === 'checkin-submitted') {
        this.switchStudentTab('adaptive');
      }
    });

    // Listener de CustomEvent del DOM para sincronización bidireccional
    window.addEventListener('entrenhabitos:state-updated', () => {
      this.render();
    });

    console.log('✅ Entrenhábitos App v2.0 (Simulador Móvil + Coach + Animaciones) inicializada con éxito.');
  }

  /**
   * Vincula eventos del DOM
   */
  bindEvents() {
    // 1. Selector de Modos / Roles (App Celular, Dual, Alumno Web, Coach)
    const roleBtns = document.querySelectorAll('.role-switcher .role-btn');
    roleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const role = btn.getAttribute('data-role');
        this.switchRole(role);
      });
    });

    // 2. Selector global de perfil de alumno (con Skeleton Shimmer realista)
    const selectProfile = document.getElementById('global-profile-select');
    if (selectProfile) {
      selectProfile.addEventListener('change', (e) => {
        AppState.setActiveProfile(e.target.value);
        this.inspectedCoachStudentId = e.target.value;
        this.triggerSkeletonShimmer('#phone-viewport-scroll');
        this.triggerSkeletonShimmer('#coach-student-dossier');
        const active = AppState.getActiveProfile();
        this.showToast(`Perfil activo: ${active.nombre}`);
        this.showPhonePushNotification({
          icon: active.avatar || '👤',
          sender: 'ENTRENHÁBITOS • PERFIL SINCRONIZADO',
          title: `Hola ${active.nombre.split(' ')[0]}`,
          text: `Arquetipo activo: ${active.arquetipo}. Tu Plan Dual está listo.`,
          theme: 'cyan-theme'
        });
      });
    }

    // 3. Botón de Reinicio Demo
    const btnResetDemo = document.getElementById('btn-reset-demo');
    if (btnResetDemo) {
      btnResetDemo.addEventListener('click', () => {
        AppState.resetDemoData();
        this.inspectedCoachStudentId = 'alumno_martin';
        this.setWizardStep(1);
        this.showToast('↺ Datos de los 4 perfiles restaurados al estado inicial');
      });
    }

    // 4. Sub-navegación de pestañas del Alumno (Web + Barra Inferior del Celular + Botones de Salto Rápido)
    const allTabButtons = document.querySelectorAll('.student-subnav .tab-btn, .phone-bottom-nav .phone-nav-item, .quick-jump-tab');
    allTabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (tab) {
          this.switchStudentTab(tab);
        }
      });
    });

    // 4b. Botón SOS "Escudo 18m" en la cabecera de la App Celular
    const btnPhoneSos = document.getElementById('btn-phone-quick-sos');
    if (btnPhoneSos) {
      btnPhoneSos.addEventListener('click', () => {
        this.runScenarioSimulation('lack_of_time');
      });
    }

    // 4c. Botones del Centro de Simulación Interactiva en 1 Clic
    const simBtns = document.querySelectorAll('.sim-scenario-btn');
    simBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const simType = btn.getAttribute('data-sim');
        this.runScenarioSimulation(simType);
      });
    });

    // 4d. Cerrar Notificación Push del Celular
    const btnClosePush = document.getElementById('btn-close-push');
    if (btnClosePush) {
      btnClosePush.addEventListener('click', () => {
        const banner = document.getElementById('phone-push-notification');
        if (banner) banner.classList.remove('visible');
      });
    }

    // 4e. Botón del Coach para enviar rescate empático directo al celular
    const btnCoachNudge = document.getElementById('btn-coach-send-nudge');
    if (btnCoachNudge) {
      btnCoachNudge.addEventListener('click', () => {
        const inspected = AppState.getProfileById(this.inspectedCoachStudentId) || AppState.getActiveProfile();
        if (inspected && AppState.getActiveProfile().id !== inspected.id) {
          AppState.setActiveProfile(inspected.id);
        }
        if (this.currentRole === 'coach') {
          this.switchRole('split');
        }
        this.showPhonePushNotification({
          icon: '💬',
          sender: 'MENSAJE DIRECTO DE TU COACH',
          title: `¡Hola ${inspected.nombre.split(' ')[0]}! Cero culpa hoy`,
          text: 'Vi que fue una semana intensa. Activá tu Versión Mínima de 15 min hoy y mantenemos la racha viva 💪.',
          theme: 'cyan-theme'
        });
        this.showToast(`📲 Mensaje empático enviado al celular de ${inspected.nombre}`);
      });
    }

    // 4f. Controles del Cajón Móvil de Simulación (para uso nativo dentro del Celular / APK Android)
    const btnToggleSimDrawer = document.getElementById('btn-phone-toggle-sim-drawer');
    const inlineSimDrawer = document.getElementById('phone-inline-sim-drawer');
    if (btnToggleSimDrawer && inlineSimDrawer) {
      btnToggleSimDrawer.addEventListener('click', () => {
        const isHidden = inlineSimDrawer.style.display === 'none';
        inlineSimDrawer.style.display = isHidden ? 'block' : 'none';
      });
    }

    const inlineProfileSelect = document.getElementById('phone-inline-profile-select');
    if (inlineProfileSelect) {
      inlineProfileSelect.addEventListener('change', (e) => {
        AppState.setActiveProfile(e.target.value);
        this.inspectedCoachStudentId = e.target.value;
        this.triggerSkeletonShimmer('#phone-viewport-scroll');
        const active = AppState.getActiveProfile();
        this.showToast(`Perfil activo: ${active.nombre}`);
      });
    }

    const btnPhoneCoach = document.getElementById('btn-phone-switch-to-coach');
    if (btnPhoneCoach) {
      btnPhoneCoach.addEventListener('click', () => {
        this.switchRole('coach');
        if (inlineSimDrawer) inlineSimDrawer.style.display = 'none';
      });
    }

    const btnCoachBackMobile = document.getElementById('btn-coach-back-to-mobile');
    if (btnCoachBackMobile) {
      btnCoachBackMobile.addEventListener('click', () => {
        this.switchRole('mobile');
      });
    }

    const btnPhoneReset = document.getElementById('btn-phone-reset-demo');
    if (btnPhoneReset) {
      btnPhoneReset.addEventListener('click', () => {
        AppState.resetDemoData();
        this.inspectedCoachStudentId = 'alumno_martin';
        this.setWizardStep(1);
        this.showToast('↺ Demo reiniciado');
      });
    }

    // 4g. Controles del Wizard de Onboarding Paso a Paso
    this.bindWizardEvents();

    // 5. Botones táctiles de estado de Check-in
    const checkinBtns = document.querySelectorAll('.checkin-btn');
    checkinBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        checkinBtns.forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedCheckinStatus = btn.getAttribute('data-status');
        this.toggleBarrierPanel();
      });
    });

    // 6. Chips de selección de barreras
    const barrierChips = document.querySelectorAll('.barrier-chip');
    barrierChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        barrierChips.forEach((c) => c.classList.remove('selected'));
        chip.classList.add('selected');
        this.selectedBarrierId = chip.getAttribute('data-barrier');
      });
    });

    // 7. Sliders y Widgets Interactivos de Dificultad y Batería de Energía
    const sliderDiff = document.getElementById('input-difficulty');
    const diffVal = document.getElementById('difficulty-val');
    if (sliderDiff && diffVal) {
      sliderDiff.addEventListener('input', (e) => {
        this.syncDifficultyWidget(Number(e.target.value));
      });
    }

    const diffCells = document.querySelectorAll('#interactive-difficulty-cells .level-cell');
    diffCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const val = Number(cell.getAttribute('data-val'));
        if (sliderDiff) sliderDiff.value = String(val);
        this.syncDifficultyWidget(val);
      });
    });

    const sliderEnergy = document.getElementById('input-energy');
    const energyVal = document.getElementById('energy-val');
    if (sliderEnergy && energyVal) {
      sliderEnergy.addEventListener('input', (e) => {
        this.syncEnergyBatteryWidget(Number(e.target.value));
      });
    }

    const batteryCells = document.querySelectorAll('#interactive-energy-battery .battery-cell');
    batteryCells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const val = Number(cell.getAttribute('data-val'));
        if (sliderEnergy) sliderEnergy.value = String(val);
        this.syncEnergyBatteryWidget(val);
      });
    });

    // 8. Envío del Formulario de Check-in (<1 min)
    const checkinForm = document.getElementById('checkin-form');
    if (checkinForm) {
      checkinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCheckinSubmit();
      });
    }

    // 9. Feedback Loop en Motor Adaptativo
    const feedbackBtns = document.querySelectorAll('.feedback-btn');
    feedbackBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        feedbackBtns.forEach((b) => {
          b.classList.remove('active-positive', 'active-negative');
        });
        const helped = btn.getAttribute('data-helped');
        if (helped === 'si' || helped === 'parcial') {
          btn.classList.add('active-positive');
        } else {
          btn.classList.add('active-negative');
        }

        const profile = AppState.getActiveProfile();
        const pending = AppState.pendingIntervention;
        const intId = pending ? pending.id : 'INT_01';
        AppState.evaluateIntervention(intId, helped, profile.id);
        this.showToast('✅ ¡Gracias! El sistema calibró tu preferencia para futuras intervenciones.');
      });
    });

    // Botón Aceptar Recomendación
    const btnAcceptRec = document.getElementById('btn-accept-rec');
    if (btnAcceptRec) {
      btnAcceptRec.addEventListener('click', () => {
        this.showToast('🎯 Intervención activada. Tu compromiso es ejecutarla sin sobreexigencia.');
      });
    }

    const btnDismissRec = document.getElementById('btn-dismiss-rec');
    if (btnDismissRec) {
      btnDismissRec.addEventListener('click', () => {
        this.switchStudentTab('plan');
      });
    }

    // 10. Formulario de Onboarding
    const onboardingForm = document.getElementById('onboarding-form');
    if (onboardingForm) {
      onboardingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleOnboardingSubmit();
      });
    }

    // Botón aplicar plan desde diagnóstico
    const btnApplyPlan = document.getElementById('btn-apply-onboarding-plan');
    if (btnApplyPlan) {
      btnApplyPlan.addEventListener('click', () => {
        this.switchStudentTab('plan');
        this.showToast('📅 Plan Semanal Dual asignado y activado.');
      });
    }

    // 11. Formulario de Agendamiento 1-a-1
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleBookingSubmit();
      });
    }
  }

  /**
   * Cambia el modo / rol principal (mobile, split, student, coach)
   */
  switchRole(role) {
    this.currentRole = role;
    const roleBtns = document.querySelectorAll('.role-switcher .role-btn');
    roleBtns.forEach((btn) => {
      const isMatch = btn.getAttribute('data-role') === role;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    const viewStudent = document.getElementById('view-student');
    const viewCoach = document.getElementById('view-coach');

    document.body.classList.remove('mode-mobile', 'mode-split', 'mode-student-web', 'mode-coach');

    if (role === 'mobile') {
      document.body.classList.add('mode-mobile');
      if (viewStudent) viewStudent.classList.add('active');
      if (viewCoach) viewCoach.classList.remove('active');
    } else if (role === 'split') {
      document.body.classList.add('mode-split');
      if (viewStudent) viewStudent.classList.add('active');
      if (viewCoach) viewCoach.classList.add('active');
    } else if (role === 'student') {
      document.body.classList.add('mode-student-web');
      if (viewStudent) viewStudent.classList.add('active');
      if (viewCoach) viewCoach.classList.remove('active');
    } else {
      document.body.classList.add('mode-coach');
      if (viewCoach) viewCoach.classList.add('active');
      if (viewStudent) viewStudent.classList.remove('active');
    }

    this.render();
  }

  /**
   * Ejecuta un escenario de simulación interactivo en 1 clic
   */
  runScenarioSimulation(simType) {
    const profile = AppState.getActiveProfile();
    if (!profile) return;
    this.inspectedCoachStudentId = profile.id;

    const todayStr = new Date().toISOString().split('T')[0];

    if (simType === 'open_split_mode') {
      this.switchRole('split');
      this.showToast('📱+📋 Modo Dual activado: Celular Alumno + Panel Coach en vivo');
      return;
    }

    if (simType === 'lack_of_time') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'minima',
        barrierId: 'B1_TIME',
        difficulty: 4,
        energyLevel: 3,
        durationSeg: 18,
        notes: 'Simulación: Salí tarde del trabajo y activé la Versión Mínima de 18m'
      });
      this.switchStudentTab('adaptive');
      this.showPhonePushNotification({
        icon: '🛡️',
        sender: 'ESCUDO DÍA DIFÍCIL • ACTIVO',
        title: '¡Hábito salvado en 18 minutos!',
        text: '18 min hoy > 0 min. Tu racha semanal sigue al 100% sin culpa.',
        theme: 'amber-theme'
      });
      this.showToast('⏰ Simulado: Día con poco tiempo → Versión Mínima activada y racha salvada');
    } else if (simType === 'low_energy') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'minima',
        barrierId: 'B2_ENERGY',
        difficulty: 4,
        energyLevel: 1,
        durationSeg: 16,
        notes: 'Simulación: Batería mental baja → Micro-meta de 2 min completada'
      });
      this.switchStudentTab('adaptive');
      this.showPhonePushNotification({
        icon: '🔋',
        sender: 'REGLA DE LOS 2 MINUTOS • FOGG B=MAP',
        title: 'Batería baja detectada: Cero presión',
        text: 'Solo cumplí el ritual de entrada de 2 min. La identidad se protege sin agotarte.',
        theme: 'amber-theme'
      });
      this.showToast('🔋 Simulado: Baja energía → Regla de los 2 Minutos activada');
    } else if (simType === 'missed_guilt') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'missed',
        barrierId: 'B5_GUILT_ALL_OR_NOTHING',
        difficulty: 5,
        energyLevel: 2,
        durationSeg: 21,
        notes: 'Simulación: No pude asistir hoy, evitando caer en el Todo o Nada'
      });
      this.switchStudentTab('adaptive');
      this.showPhonePushNotification({
        icon: '🤝',
        sender: 'PROTOCOLO NEVER MISS TWICE',
        title: 'Un tropiezo no borra tu progreso',
        text: 'Cero castigo ni compensación doble. Tu próxima sesión ya está ajustada.',
        theme: 'cyan-theme'
      });
      this.showToast('🛡️ Simulado: Sesión perdida → Protocolo "Never Miss Twice" sin culpa activado');
    } else if (simType === 'completed_ideal') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'ideal',
        barrierId: null,
        difficulty: 2,
        energyLevel: 4,
        durationSeg: 14,
        notes: 'Simulación: Sesión ideal de 60 minutos completada con éxito'
      });
      this.switchStudentTab('progress');
      this.showPhonePushNotification({
        icon: '🔥',
        sender: 'ENTRENHÁBITOS • SESIÓN COMPLETA',
        title: '¡Rutina Ideal de 60 min Registrada!',
        text: `Adherencia actual: ${AppState.getActiveProfile().scoreAdherencia}%. ¡Excelente constancia!`,
        theme: ''
      });
      this.showToast('🟢 Simulado: ¡Sesión Ideal completada! Adherencia actualizada');
    } else if (simType === 'schedule_1on1') {
      const req = AppState.scheduleInterview({
        profileId: profile.id,
        date: todayStr,
        time: '19:00',
        notes: 'Quiero revisar cómo sostener la rutina en semanas de cierre laboral.'
      });
      this.switchStudentTab('progress');
      this.showPhonePushNotification({
        icon: '📅',
        sender: 'AGENDA 1-A-1 • COACH NOTIFICADO',
        title: `Sesión confirmada (${req.hora} hs)`,
        text: 'Tu ficha de barreras y métricas ya fue enviada al Panel del Coach.',
        theme: 'cyan-theme'
      });
      this.showToast(`📅 Turno 1-a-1 agendado (${req.fecha} ${req.hora} hs) y enviado al Panel Coach`);
    }
  }

  /**
   * Vincula la navegación paso a paso del Wizard de Onboarding
   */
  bindWizardEvents() {
    const form = document.getElementById('onboarding-form');
    const stepDots = document.querySelectorAll('.wizard-step-dot');
    const btnPrev = document.getElementById('btn-wizard-prev');
    const btnNext = document.getElementById('btn-wizard-next');
    const btnToggleMode = document.getElementById('btn-toggle-wizard-mode');

    stepDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const step = Number(dot.getAttribute('data-step'));
        if (!this.isWizardMode) {
          this.toggleWizardMode(true);
        }
        this.setWizardStep(step);
      });
    });

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (this.currentWizardStep > 1) {
          this.setWizardStep(this.currentWizardStep - 1);
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (this.currentWizardStep < 5) {
          this.setWizardStep(this.currentWizardStep + 1);
        } else {
          this.handleOnboardingSubmit();
        }
      });
    }

    if (btnToggleMode) {
      btnToggleMode.addEventListener('click', () => {
        this.toggleWizardMode(!this.isWizardMode);
      });
    }

    // Resaltar opción seleccionada y avanzar suavemente en modo Wizard
    if (form) {
      const radios = form.querySelectorAll('input[type="radio"]');
      radios.forEach((radio) => {
        radio.addEventListener('change', () => {
          const group = radio.closest('.question-group');
          if (group) {
            group.querySelectorAll('.option-label').forEach((lbl) => lbl.classList.remove('selected'));
            const parentLabel = radio.closest('.option-label');
            if (parentLabel) parentLabel.classList.add('selected');

            const stepNum = Number(group.getAttribute('data-question-step'));
            if (this.isWizardMode && stepNum && stepNum < 5) {
              setTimeout(() => {
                this.setWizardStep(stepNum + 1);
              }, 240);
            }
          }
        });
      });
    }
  }

  toggleWizardMode(forceWizard) {
    this.isWizardMode = typeof forceWizard === 'boolean' ? forceWizard : !this.isWizardMode;
    const form = document.getElementById('onboarding-form');
    const btnToggle = document.getElementById('btn-toggle-wizard-mode');
    const stepLabel = document.getElementById('wizard-step-label');

    if (form) {
      form.classList.toggle('wizard-mode-active', this.isWizardMode);
    }
    if (btnToggle) {
      btnToggle.textContent = this.isWizardMode ? 'Ver las 5 juntas' : 'Modo Paso a Paso';
    }
    if (!this.isWizardMode && stepLabel) {
      stepLabel.textContent = 'Vista Completa (5/5)';
    } else {
      this.setWizardStep(this.currentWizardStep);
    }
  }

  setWizardStep(step) {
    this.currentWizardStep = Math.max(1, Math.min(5, step));
    const groups = document.querySelectorAll('#onboarding-form .question-group');
    groups.forEach((g) => {
      const s = Number(g.getAttribute('data-question-step'));
      g.classList.toggle('active-wizard-step', s === this.currentWizardStep);
    });

    const dots = document.querySelectorAll('.wizard-step-dot');
    dots.forEach((d) => {
      const s = Number(d.getAttribute('data-step'));
      d.classList.toggle('active', s === this.currentWizardStep);
      d.classList.toggle('completed', s < this.currentWizardStep);
    });

    const fill = document.getElementById('wizard-progress-bar-fill');
    if (fill) {
      fill.style.width = `${this.currentWizardStep * 20}%`;
    }

    const label = document.getElementById('wizard-step-label');
    if (label && this.isWizardMode) {
      label.textContent = `Pregunta ${this.currentWizardStep} de 5`;
    }

    const btnPrev = document.getElementById('btn-wizard-prev');
    const btnNext = document.getElementById('btn-wizard-next');
    if (btnPrev) btnPrev.disabled = this.currentWizardStep <= 1;
    if (btnNext) {
      btnNext.textContent = this.currentWizardStep === 5 ? '⚡ Calcular Diagnóstico' : 'Siguiente pregunta →';
    }
  }

  /**
   * Sincroniza el selector visual de dificultad (1 a 5)
   */
  syncDifficultyWidget(val) {
    const diffVal = document.getElementById('difficulty-val');
    if (diffVal) diffVal.textContent = `${val} / 5`;

    const cells = document.querySelectorAll('#interactive-difficulty-cells .level-cell');
    cells.forEach((c) => {
      const cellVal = Number(c.getAttribute('data-val'));
      c.classList.toggle('active', cellVal <= val);
      c.classList.toggle('high-friction', val >= 4 && cellVal <= val);
    });
  }

  /**
   * Sincroniza la batería interactiva de energía (1 a 5)
   */
  syncEnergyBatteryWidget(val) {
    const energyVal = document.getElementById('energy-val');
    if (energyVal) {
      energyVal.textContent = `${val} / 5`;
      energyVal.style.color = val <= 2 ? 'var(--coral-light)' : (val === 3 ? 'var(--amber-light)' : 'var(--lime-bright)');
    }

    const container = document.getElementById('interactive-energy-battery');
    if (container) {
      container.className = `battery-cells-container level-${val}`;
      const cells = container.querySelectorAll('.battery-cell');
      cells.forEach((c) => {
        const cellVal = Number(c.getAttribute('data-val'));
        c.classList.toggle('active', cellVal <= val);
      });
    }
  }

  /**
   * Dispara efecto Skeleton Shimmer en contenedores al cambiar datos
   */
  triggerSkeletonShimmer(selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.classList.remove('is-skeleton-shimmer');
    void el.offsetWidth;
    el.classList.add('is-skeleton-shimmer');
    setTimeout(() => {
      el.classList.remove('is-skeleton-shimmer');
    }, 450);
  }

  /**
   * Muestra una notificación Push / WhatsApp simulada dentro de la pantalla del celular
   */
  showPhonePushNotification({ icon = '💬', sender = 'ENTRENHÁBITOS', title = '', text = '', theme = '' }) {
    const banner = document.getElementById('phone-push-notification');
    if (!banner) return;

    const iconEl = document.getElementById('push-banner-icon');
    const senderEl = document.getElementById('push-banner-sender');
    const titleEl = document.getElementById('push-banner-title');
    const textEl = document.getElementById('push-banner-text');

    if (iconEl) iconEl.textContent = icon;
    if (senderEl) senderEl.textContent = sender;
    if (titleEl) titleEl.textContent = title;
    if (textEl) textEl.textContent = text;

    banner.className = `phone-push-banner visible ${theme}`;

    if (this.pushTimeout) clearTimeout(this.pushTimeout);
    this.pushTimeout = setTimeout(() => {
      banner.classList.remove('visible');
    }, 5200);
  }

  /**
   * Cambia la pestaña activa dentro de la Vista Alumno (tanto Web como App Celular)
   */
  switchStudentTab(tabName) {
    this.currentStudentTab = tabName;
    const tabBtns = document.querySelectorAll('.student-subnav .tab-btn, .phone-bottom-nav .phone-nav-item');
    tabBtns.forEach((btn) => {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const sections = [
      { id: 'tab-student-onboarding', name: 'onboarding' },
      { id: 'tab-student-plan', name: 'plan' },
      { id: 'tab-student-checkin', name: 'checkin' },
      { id: 'tab-student-adaptive', name: 'adaptive' },
      { id: 'tab-student-progress', name: 'progress' }
    ];

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        el.style.display = sec.name === tabName ? 'block' : 'none';
      }
    });

    const phoneViewport = document.getElementById('phone-viewport-scroll');
    if (phoneViewport) {
      phoneViewport.scrollTop = 0;
    }

    if (tabName === 'checkin') {
      this.resetCheckinTimer();
    }

    this.render();
  }

  /**
   * Alterna visibilidad del panel de barreras según el botón de check-in seleccionado
   */
  toggleBarrierPanel() {
    const barrierPanel = document.getElementById('barrier-selection-panel');
    if (!barrierPanel) return;

    if (this.selectedCheckinStatus === 'minima' || this.selectedCheckinStatus === 'missed') {
      barrierPanel.classList.add('active');
      // Si no hay ninguna seleccionada, preseleccionar la primera por defecto
      if (!this.selectedBarrierId) {
        const firstChip = barrierPanel.querySelector('.barrier-chip');
        if (firstChip) {
          firstChip.classList.add('selected');
          this.selectedBarrierId = firstChip.getAttribute('data-barrier');
        }
      }
    } else {
      barrierPanel.classList.remove('active');
      this.selectedBarrierId = null;
      const chips = barrierPanel.querySelectorAll('.barrier-chip');
      chips.forEach((c) => c.classList.remove('selected'));
    }
  }

  /**
   * Cronómetro de usabilidad del check-in
   */
  startCheckinTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const timerDisplay = document.getElementById('checkin-timer-display');
      if (timerDisplay) {
        const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
        const secs = String(this.timerSeconds % 60).padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  resetCheckinTimer() {
    this.timerSeconds = 0;
  }

  /**
   * Procesa el envío del check-in
   */
  handleCheckinSubmit() {
    try {
      const profile = AppState.getActiveProfile();
      if (!profile) return;

      const difficulty = Number(document.getElementById('input-difficulty')?.value || 3);
      const energy = Number(document.getElementById('input-energy')?.value || 3);
      const notes = document.getElementById('checkin-notes')?.value || '';

      if ((this.selectedCheckinStatus === 'minima' || this.selectedCheckinStatus === 'missed') && !this.selectedBarrierId) {
        this.selectedBarrierId = 'B1_TIME'; // Fallback preventivo
      }

      const checkInData = {
        profileId: profile.id,
        status: this.selectedCheckinStatus,
        barrierId: this.selectedBarrierId,
        difficulty,
        energyLevel: energy,
        durationSeg: Math.max(5, this.timerSeconds),
        notes,
        date: new Date().toISOString().split('T')[0]
      };

      const result = AppState.submitCheckIn(checkInData);

      this.showToast('✅ Check-in guardado con éxito');
      this.switchStudentTab('adaptive');
    } catch (err) {
      alert(`Error al registrar check-in: ${err.message}`);
    }
  }

  /**
   * Procesa el formulario de onboarding (con Skeleton Loading realista antes del reveal)
   */
  handleOnboardingSubmit() {
    const form = document.getElementById('onboarding-form');
    if (!form) return;

    const formData = new FormData(form);
    const answers = {
      q_historial: formData.get('q_historial'),
      q_motivo_abandono: formData.get('q_motivo_abandono'),
      q_reaccion_fallo: formData.get('q_reaccion_fallo'),
      q_disponibilidad: formData.get('q_disponibilidad'),
      q_version_minima: formData.get('q_version_minima')
    };

    const skeletonEl = document.getElementById('onboarding-skeleton-loader');
    const contentEl = document.getElementById('onboarding-diagnosis-content');

    if (skeletonEl && contentEl) {
      skeletonEl.style.display = 'flex';
      contentEl.style.display = 'none';
      setTimeout(() => {
        skeletonEl.style.display = 'none';
        contentEl.style.display = 'block';
        contentEl.classList.add('stagger-animate');
      }, 420);
    }

    const profile = AppState.getActiveProfile();
    const diag = AppState.completeOnboarding(profile.id, answers);

    this.showPhonePushNotification({
      icon: '🎯',
      sender: 'DIAGNÓSTICO CONDUCTUAL LISTO',
      title: `Arquetipo: ${diag.arquetipo}`,
      text: `Frecuencia calibrada en ${diag.frecuenciaRecomendada} días/sem con Escudo Mínimo activo.`,
      theme: ''
    });

    this.showToast('⚡ Diagnóstico conductual generado correctamente');
    this.render();
  }

  /**
   * Procesa el agendamiento de entrevista 1-a-1
   */
  handleBookingSubmit() {
    const date = document.getElementById('booking-date')?.value;
    const time = document.getElementById('booking-time')?.value;
    const notes = document.getElementById('booking-notes')?.value;

    if (!date) {
      alert('Por favor seleccioná una fecha para la entrevista.');
      return;
    }

    const profile = AppState.getActiveProfile();
    const req = AppState.scheduleInterview({
      profileId: profile.id,
      date,
      time,
      notes
    });

    this.showToast(`📅 Sesión 1-a-1 agendada para el ${req.fecha} a las ${req.hora} hs.`);
    document.getElementById('booking-notes').value = '';
    this.render();
  }

  /**
   * Toast flotante para feedback visual
   */
  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 300ms ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /**
   * Renderizado general de toda la aplicación
   */
  render() {
    const activeProfile = AppState.getActiveProfile();
    if (!activeProfile) return;

    // 1. Sincronizar Cabecera Global y Cabecera de App Celular
    const select = document.getElementById('global-profile-select');
    if (select && select.value !== activeProfile.id) {
      select.value = activeProfile.id;
    }

    const inlineSelect = document.getElementById('phone-inline-profile-select');
    if (inlineSelect && inlineSelect.value !== activeProfile.id) {
      inlineSelect.value = activeProfile.id;
    }

    const streakText = document.getElementById('header-streak-text');
    if (streakText) {
      streakText.textContent = `${activeProfile.rachaActualSemanas || 0} semanas`;
    }

    const phoneAvatar = document.getElementById('phone-header-avatar');
    const phoneName = document.getElementById('phone-header-name');
    const phoneArch = document.getElementById('phone-header-archetype');
    if (phoneAvatar) phoneAvatar.textContent = activeProfile.avatar || '👤';
    if (phoneName) phoneName.textContent = activeProfile.nombre;
    if (phoneArch) phoneArch.textContent = activeProfile.arquetipo || 'Evaluación Pendiente';

    // 2. Renderizar Vista Alumno
    this.renderOnboardingTab(activeProfile);
    this.renderPlanTab(activeProfile);
    this.renderAdaptiveTab(activeProfile);
    this.renderProgressTab(activeProfile);

    // 3. Renderizar Espejo en Vivo del Panel de Simulación
    this.renderSimulationMirror(activeProfile);

    // 4. Renderizar Vista Coach
    this.renderCoachView();
  }

  /**
   * Renderiza el espejo en vivo del Coach en el Centro de Simulación
   */
  renderSimulationMirror(profile) {
    const mirrorEl = document.getElementById('sim-coach-mini-mirror');
    if (!mirrorEl) return;

    const r = profile.alertaRiesgo || 'verde';
    const riskPill = r === 'rojo'
      ? '<span class="badge badge-risk-rojo">🔴 Crítico / Intervenir</span>'
      : (r === 'amarillo' ? '<span class="badge badge-risk-amarillo">🟡 Riesgo Medio</span>' : '<span class="badge badge-risk-verde">🟢 Adherencia Saludable</span>');

    const tps = RulesEngine.generateInterviewTalkingPoints(profile);
    const topTp = tps[1] || tps[0];

    mirrorEl.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.6rem;">
        <span style="font-weight: 800; color: var(--text-primary);">📡 Telemetría en Vivo del Alumno (${profile.nombre}):</span>
        ${riskPill}
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.5rem; margin-bottom: 0.65rem;">
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Adherencia</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--lime-bright);">${profile.scoreAdherencia}%</div>
        </div>
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Salvadas (Mínima)</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--amber-light);">${profile.tasaSalvatajeMinima}%</div>
        </div>
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Retorno (MTTR)</div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary);">${profile.mttrDias} d</div>
        </div>
        <div style="background: var(--bg-card); padding: 0.5rem 0.7rem; border-radius: var(--radius-sm);">
          <div style="font-size: 0.7rem; color: var(--text-muted);">Ideales / Mínimas / Faltas</div>
          <div style="font-size: 1rem; font-weight: 800; color: var(--text-primary);">${profile.idealCount} / ${profile.minimaCount} / ${profile.missedCount}</div>
        </div>
      </div>
      <div style="border-left: 3px solid var(--cyan-primary); padding-left: 0.65rem; font-size: 0.8rem;">
        <strong style="color: var(--cyan-primary);">🎯 Insight automático para el Coach:</strong> ${topTp ? `${topTp.tema} — <em>${topTp.sugerenciaCoach}</em>` : 'Listo para seguimiento.'}
      </div>
    `;
  }

  /**
   * Renderiza Pestaña Onboarding
   */
  renderOnboardingTab(profile) {
    const badge = document.getElementById('onboarding-status-badge');
    if (badge) {
      if (profile.planSemanal && profile.arquetipo && profile.id !== 'alumno_sofia') {
        badge.className = 'badge badge-risk-verde';
        badge.textContent = 'Calibrado y Activo';
      } else {
        badge.className = 'badge badge-risk-amarillo';
        badge.textContent = 'Pendiente de Evaluación';
      }
    }

    const titleEl = document.getElementById('diag-archetype-title');
    const descEl = document.getElementById('diag-archetype-desc');
    const hypoEl = document.getElementById('diag-hypothesis-text');
    const stratEl = document.getElementById('diag-strategy-text');
    const freqEl = document.getElementById('diag-frecuencia-badge');

    if (titleEl) titleEl.textContent = profile.arquetipo || 'Pendiente de Diagnóstico';
    if (descEl) descEl.textContent = profile.profesion ? `${profile.profesion} • ${profile.edad} años` : 'Completa el cuestionario';
    if (hypoEl) hypoEl.textContent = profile.hipotesis || 'Completá las 5 preguntas para formular tu hipótesis de trabajo conductual.';
    if (stratEl) stratEl.textContent = profile.objetivos || 'Validación obligatoria de la Versión Mínima como éxito total del día.';
    if (freqEl) freqEl.textContent = `${profile.planSemanal?.frecuenciaObjetivo || 3} días / sem`;
  }

  /**
   * Renderiza Pestaña Mi Plan Dual (con Morphing Elástico y Contador de Minutos Animado)
   */
  renderPlanTab(profile) {
    const freqBadge = document.getElementById('plan-frequency-badge');
    const plan = profile.planSemanal || AppState.obtenerPlanPorDefecto(3);

    if (freqBadge) {
      freqBadge.textContent = `Frecuencia: ${plan.frecuenciaObjetivo} días / semana`;
    }

    const grid = document.getElementById('weekly-plan-cards-grid');
    if (!grid) return;

    grid.innerHTML = '';

    (plan.dias || []).forEach((d, idx) => {
      const card = document.createElement('div');
      card.className = 'day-card stagger-animate';
      card.style.animationDelay = `${idx * 65}ms`;
      const dayId = `day_${idx}`;

      card.innerHTML = `
        <div class="day-card-header">
          <div>
            <span class="day-name">${d.dia}</span>
            <span class="day-tag" style="margin-left: 0.35rem;">${d.nombreSesion || 'Entrenamiento'}</span>
          </div>
          <span class="day-duration-pill" id="${dayId}_duration_pill">⏱️ ${d.ideal.duracionMin} min</span>
        </div>

        <div class="dual-tabs">
          <button type="button" class="dual-tab-btn active ideal-tab" data-target="${dayId}_ideal">
            🟢 Versión Ideal (${d.ideal.duracionMin}m)
          </button>
          <button type="button" class="dual-tab-btn minima-tab" data-target="${dayId}_minima">
            🛡️ Versión Mínima (${d.minima.duracionMin}m)
          </button>
        </div>

        <div class="day-content">
          <!-- Versión Ideal -->
          <div id="${dayId}_ideal" class="version-block">
            <span class="version-badge ideal">Versión Completa • 100% Hábito</span>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">${d.ideal.titulo}</h4>
            <ul class="exercise-list">
              ${d.ideal.ejercicios.map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
            <button type="button" class="btn btn-secondary btn-sm btn-quick-complete-ideal" style="width: 100%; margin-top: 0.85rem;">
              ✅ Registrar Rutina Ideal (${d.ideal.duracionMin}m)
            </button>
          </div>

          <!-- Versión Mínima (Día Difícil) -->
          <div id="${dayId}_minima" class="version-block" style="display: none;">
            <span class="version-badge minima">🛡️ Escudo Día Difícil • 100% Hábito Salvado</span>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--amber-light); margin-bottom: 0.5rem;">${d.minima.titulo}</h4>
            <ul class="exercise-list minima">
              ${d.minima.ejercicios.map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.65rem;">
              ⚡ <em>Ejecutar estos ${d.minima.duracionMin} min protege tu continuidad semanal sin culpa.</em>
            </p>
            <button type="button" class="btn btn-primary btn-sm btn-quick-complete-minima" style="width: 100%; margin-top: 0.75rem; background: linear-gradient(135deg, #fbbf24, #f59e0b);">
              🛡️ Activar y Registrar Escudo (${d.minima.duracionMin}m)
            </button>
          </div>
        </div>
      `;

      // Eventos de toggle para las pestañas de versión dual dentro del día con animación de conteo
      const idealBtn = card.querySelector('.ideal-tab');
      const minimaBtn = card.querySelector('.minima-tab');
      const idealBlock = card.querySelector(`#${dayId}_ideal`);
      const minimaBlock = card.querySelector(`#${dayId}_minima`);
      const durPill = card.querySelector(`#${dayId}_duration_pill`);

      idealBtn.addEventListener('click', () => {
        idealBtn.classList.add('active');
        minimaBtn.classList.remove('active');
        card.classList.remove('minima-mode-active');
        idealBlock.style.display = 'block';
        minimaBlock.style.display = 'none';
        this.animateDurationCounter(durPill, d.minima.duracionMin, d.ideal.duracionMin);
      });

      minimaBtn.addEventListener('click', () => {
        minimaBtn.classList.add('active');
        idealBtn.classList.remove('active');
        card.classList.add('minima-mode-active', 'rescue-pulse-active');
        setTimeout(() => card.classList.remove('rescue-pulse-active'), 800);
        minimaBlock.style.display = 'block';
        idealBlock.style.display = 'none';
        this.animateDurationCounter(durPill, d.ideal.duracionMin, d.minima.duracionMin);
      });

      const btnQuickIdeal = card.querySelector('.btn-quick-complete-ideal');
      if (btnQuickIdeal) {
        btnQuickIdeal.addEventListener('click', () => {
          this.runScenarioSimulation('completed_ideal');
        });
      }

      const btnQuickMinima = card.querySelector('.btn-quick-complete-minima');
      if (btnQuickMinima) {
        btnQuickMinima.addEventListener('click', () => {
          this.runScenarioSimulation('lack_of_time');
        });
      }

      grid.appendChild(card);
    });
  }

  /**
   * Anima el cambio numérico de minutos (ej: 60 min -> 18 min)
   */
  animateDurationCounter(el, fromVal, toVal) {
    if (!el) return;
    const steps = 10;
    const diff = toVal - fromVal;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const current = Math.round(fromVal + (diff * currentStep) / steps);
      el.textContent = `⏱️ ${current} min`;
      if (currentStep >= steps) {
        clearInterval(interval);
        el.textContent = `⏱️ ${toVal} min`;
      }
    }, 22);
  }

  /**
   * Renderiza Pestaña de Recomendaciones Adaptativas
   */
  renderAdaptiveTab(profile) {
    const pending = AppState.pendingIntervention;
    const ruleBadge = document.getElementById('rec-rule-id-badge');
    const titleEl = document.getElementById('rec-title');
    const ratEl = document.getElementById('rec-rationale');
    const stepsList = document.getElementById('rec-action-steps');
    const durationBadge = document.getElementById('rec-duration-badge');

    if (pending) {
      if (ruleBadge) ruleBadge.textContent = pending.ruleId || 'RULE_TIME_01';
      if (titleEl) titleEl.textContent = pending.title || 'Recomendación Adaptativa Activa';
      if (ratEl) ratEl.innerHTML = `<strong>¿Por qué esta sugerencia?</strong> ${pending.rationale || 'Adaptación inmediata a tu nivel de energía y tiempo.'}`;
      if (durationBadge) durationBadge.textContent = pending.durationMin ? `⏱️ ${pending.durationMin} min de rescate` : '⚡ Acción Inmediata';

      if (stepsList) {
        if (pending.details && pending.details.length > 0) {
          stepsList.innerHTML = pending.details.map((d) => `<li>${d}</li>`).join('');
        } else {
          stepsList.innerHTML = `
            <li>Realizá 2 series de sentadillas en copa o prensa</li>
            <li>Realizá 2 series de remo en polea o mancuerna</li>
            <li>1 serie de plancha abdominal (45 segundos)</li>
          `;
        }
      }
    } else {
      // Estado cuando no hay intervención pendiente
      if (ruleBadge) ruleBadge.textContent = 'EN ESPERA DE REGISTRO';
      if (titleEl) titleEl.textContent = 'Tu sistema adaptativo está listo para intervenir';
      if (ratEl) ratEl.innerHTML = 'Cuando registres una sesión mínima o no puedas entrenar por una barrera cotidiana, el motor generará aquí tu intervención personalizada.';
      if (durationBadge) durationBadge.textContent = '⏱️ Monitoreo activo';
      if (stepsList) {
        stepsList.innerHTML = `
          <li>Elaboración de plan B ante falta de tiempo</li>
          <li>Micro-meta de entrada ante fatiga mental</li>
          <li>Protocolo "Never Miss Twice" ante tropiezos</li>
        `;
      }
    }
  }

  /**
   * Renderiza Pestaña de Progreso del Alumno y Agendamiento 1-a-1 (con Anillo SVG Animado y Continuidad)
   */
  renderProgressTab(profile) {
    // Badges y Métricas
    const riskBadge = document.getElementById('student-risk-badge');
    if (riskBadge) {
      const r = profile.alertaRiesgo || 'verde';
      riskBadge.className = `badge badge-risk-${r}`;
      riskBadge.textContent = r === 'rojo' ? '🔴 Riesgo Alto' : (r === 'amarillo' ? '🟡 Riesgo Medio' : '🟢 Riesgo Bajo');
    }

    const adhScore = profile.scoreAdherencia ?? 0;
    const salvatajeScore = profile.tasaSalvatajeMinima ?? 0;

    const adhVal = document.getElementById('metric-adherence-val');
    const salVal = document.getElementById('metric-salvataje-val');
    const mttrVal = document.getElementById('metric-mttr-val');
    const rachaVal = document.getElementById('metric-racha-val');

    if (adhVal) adhVal.textContent = `${adhScore}%`;
    if (salVal) salVal.textContent = `${salvatajeScore}%`;
    if (mttrVal) mttrVal.textContent = `${profile.mttrDias ?? 1.0} d`;
    if (rachaVal) rachaVal.textContent = `${profile.rachaActualSemanas ?? 0} sem`;

    // Renderizar Visualización Analítica: Anillo SVG Dual + Línea de Continuidad "Never Miss Twice"
    const visualContainer = document.getElementById('progress-visual-analytics');
    if (visualContainer) {
      const radiusOuter = 42;
      const circumOuter = 2 * Math.PI * radiusOuter;
      const offsetOuter = circumOuter - (adhScore / 100) * circumOuter;

      const radiusInner = 30;
      const circumInner = 2 * Math.PI * radiusInner;
      const offsetInner = circumInner - (salvatajeScore / 100) * circumInner;

      const checkins = profile.historialCheckins || [];
      const recentNodes = checkins.slice(-6).map((chk, idx) => {
        const icon = chk.estado === 'ideal' ? '🟢' : (chk.estado === 'minima' ? '🛡️' : '🔄');
        const label = chk.estado === 'ideal' ? 'Ideal' : (chk.estado === 'minima' ? 'Mínima' : 'Pausa');
        const shortDate = (chk.fecha || '').slice(5) || `S${idx + 1}`;
        return `
          <div class="timeline-node ${chk.estado}" title="${chk.fecha}: ${label}">
            <span style="font-size: 1rem;">${icon}</span>
            <span style="font-size: 0.65rem; font-weight: 800; color: var(--text-primary);">${label}</span>
            <span style="font-size: 0.6rem; color: var(--text-muted);">${shortDate}</span>
          </div>
        `;
      }).join('');

      visualContainer.innerHTML = `
        <div class="svg-ring-card">
          <div class="svg-ring-wrapper">
            <svg class="adherence-svg-ring" viewBox="0 0 100 100">
              <circle class="ring-bg" cx="50" cy="50" r="${radiusOuter}"></circle>
              <circle class="ring-bg" cx="50" cy="50" r="${radiusInner}" style="stroke-width: 6;"></circle>
              <circle class="ring-fill-total" cx="50" cy="50" r="${radiusOuter}"
                stroke-dasharray="${circumOuter.toFixed(1)}"
                stroke-dashoffset="${offsetOuter.toFixed(1)}"></circle>
              <circle class="ring-fill-rescue" cx="50" cy="50" r="${radiusInner}"
                stroke-dasharray="${circumInner.toFixed(1)}"
                stroke-dashoffset="${offsetInner.toFixed(1)}"></circle>
            </svg>
            <div>
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">Anillo Dual de Hábito</div>
              <div style="font-size: 1.45rem; font-weight: 800; color: var(--lime-bright); line-height: 1.15;">${adhScore}% Total</div>
              <div style="font-size: 0.75rem; color: var(--amber-light); font-weight: 700; margin-top: 0.2rem;">🛡️ ${salvatajeScore}% Salvado por Mínima</div>
            </div>
          </div>
        </div>

        <div class="continuity-timeline-card">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; flex-wrap: wrap;">
            <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--text-primary);">
              🔗 Huella de Continuidad ("Never Miss Twice")
            </span>
            <span class="badge badge-cyan" style="font-size: 0.65rem;">${profile.idealCount || 0} Ideales • ${profile.minimaCount || 0} Escudos</span>
          </div>
          <div class="timeline-nodes-row">
            ${recentNodes || '<span style="font-size: 0.8rem; color: var(--text-muted);">Registrá tu primera sesión para activar la línea de continuidad.</span>'}
          </div>
        </div>
      `;
    }

    // Historial de Checkins
    const tbody = document.getElementById('student-checkins-history-tbody');
    if (tbody) {
      tbody.innerHTML = '';
      const checkins = profile.historialCheckins || [];
      if (checkins.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">Sin registros aún. ¡Realizá tu primer check-in!</td></tr>';
      } else {
        checkins.slice().reverse().forEach((chk) => {
          const tr = document.createElement('tr');
          const isIdeal = chk.estado === 'ideal';
          const isMinima = chk.estado === 'minima';
          const statusBadge = isIdeal
            ? '<span class="badge badge-risk-verde">🟢 Ideal</span>'
            : (isMinima ? '<span class="badge badge-risk-amarillo">🟡 Mínima</span>' : '<span class="badge badge-risk-rojo">🔴 No Entrenó</span>');

          const bObj = BARRIERS_CATALOG[chk.barrera] || (chk.barrera ? { name: chk.barrera } : { name: '-' });
          const intObj = INTERVENTIONS_CATALOG[chk.intervencion] || (chk.intervencion ? { title: chk.intervencion } : { title: '-' });
          const helpedBadge = chk.feedbackIntervencion === 'si'
            ? '<span style="color: var(--lime-bright);">👍 Sí</span>'
            : (chk.feedbackIntervencion === 'no' ? '<span style="color: var(--coral-light);">👎 No</span>' : (chk.feedbackIntervencion === 'parcial' ? '<span style="color: var(--amber-light);">🤔 A medias</span>' : '<span style="color: var(--text-muted);">-</span>'));

          tr.innerHTML = `
            <td>${chk.fecha}</td>
            <td>${statusBadge}</td>
            <td>${chk.tiempoRealMin || (isIdeal ? 60 : isMinima ? 18 : 0)} min</td>
            <td>${bObj.name}</td>
            <td>${intObj.title}</td>
            <td>${helpedBadge}</td>
          `;
          tbody.appendChild(tr);
        });
      }
    }

    // Ficha de Telemetría Precargada para el Agendamiento 1-a-1
    const telemetryBox = document.getElementById('booking-telemetry-preview');
    if (telemetryBox) {
      const topBarrier = profile.barrerasFrecuentes?.[0]?.name || 'Ninguna registrada';
      telemetryBox.innerHTML = `
        <div style="margin-bottom: 0.5rem;"><strong>Alumno:</strong> ${profile.nombre} (${profile.arquetipo || 'Perfil General'})</div>
        <div style="margin-bottom: 0.5rem;"><strong>Adherencia acumulada:</strong> ${profile.scoreAdherencia}% (${profile.totalCheckins || 0} sesiones registradas)</div>
        <div style="margin-bottom: 0.5rem;"><strong>Tasa de Salvataje por Versión Mínima:</strong> ${profile.tasaSalvatajeMinima}% de los entrenamientos</div>
        <div style="margin-bottom: 0.5rem;"><strong>Tiempo medio de retorno (MTTR):</strong> ${profile.mttrDias} días</div>
        <div style="margin-bottom: 0.5rem;"><strong>Gatillador más frecuente:</strong> ${topBarrier}</div>
        <div style="font-size: 0.8rem; color: #38bdf8; margin-top: 0.75rem;">
          ℹ️ <em>Esta telemetría se adjuntará automáticamente a la cita en el panel del coach para optimizar la llamada.</em>
        </div>
      `;
    }
  }

  /**
   * Renderiza el Panel Profesional del Coach
   */
  renderCoachView() {
    const profiles = AppState.getProfiles();

    // 1. Métricas agregadas de cohorte
    const totalStudentsEl = document.getElementById('coach-total-students');
    const riskDistEl = document.getElementById('coach-risk-distribution');
    const salvatajeCohortEl = document.getElementById('coach-salvataje-cohort');
    const mttrCohortEl = document.getElementById('coach-mttr-cohort');

    let verdeCount = 0;
    let amarilloCount = 0;
    let rojoCount = 0;
    let sumSalvataje = 0;
    let sumMttr = 0;

    profiles.forEach((p) => {
      if (p.alertaRiesgo === 'rojo') rojoCount++;
      else if (p.alertaRiesgo === 'amarillo') amarilloCount++;
      else verdeCount++;

      sumSalvataje += (p.tasaSalvatajeMinima || 0);
      sumMttr += (p.mttrDias || 1.0);
    });

    const avgSalvataje = profiles.length > 0 ? Math.round(sumSalvataje / profiles.length) : 0;
    const avgMttr = profiles.length > 0 ? (sumMttr / profiles.length).toFixed(1) : '1.0';

    if (totalStudentsEl) totalStudentsEl.textContent = profiles.length;
    if (riskDistEl) riskDistEl.innerHTML = `🟢 ${verdeCount} &nbsp; 🟡 ${amarilloCount} &nbsp; 🔴 ${rojoCount}`;
    if (salvatajeCohortEl) salvatajeCohortEl.textContent = `${avgSalvataje}%`;
    if (mttrCohortEl) mttrCohortEl.textContent = `${avgMttr} d`;

    // 2. Tabla de Cohorte
    const tbody = document.getElementById('coach-cohort-tbody');
    if (tbody) {
      tbody.innerHTML = '';
      profiles.forEach((p) => {
        const tr = document.createElement('tr');
        const rBadge = p.alertaRiesgo === 'rojo'
          ? '<span class="badge badge-risk-rojo">🔴 Crítico</span>'
          : (p.alertaRiesgo === 'amarillo' ? '<span class="badge badge-risk-amarillo">🟡 Alerta</span>' : '<span class="badge badge-risk-verde">🟢 Óptimo</span>');

        tr.innerHTML = `
          <td>
            <div class="student-name-cell">
              <span>${p.avatar || '👤'}</span>
              <div>
                <div>${p.nombre}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${p.profesion || 'Asesorado'}</div>
              </div>
            </div>
          </td>
          <td>${p.arquetipo || 'Sin diagnóstico'}</td>
          <td>${rBadge}</td>
          <td><strong>${p.scoreAdherencia}%</strong></td>
          <td><span style="color: var(--amber-light); font-weight: 700;">${p.tasaSalvatajeMinima}%</span></td>
          <td>${p.mttrDias} d</td>
          <td>
            <button class="btn btn-secondary btn-sm btn-inspect-student" data-id="${p.id}">
              🔍 Ficha
            </button>
          </td>
        `;

        const btnInspect = tr.querySelector('.btn-inspect-student');
        btnInspect.addEventListener('click', () => {
          this.inspectedCoachStudentId = p.id;
          this.renderCoachStudentDossier(p);
          this.showToast(`Inspeccionando a ${p.nombre}`);
        });

        tbody.appendChild(tr);
      });
    }

    // 3. Renderizar el expediente del alumno inspeccionado
    const inspectedProfile = AppState.getProfileById(this.inspectedCoachStudentId) || profiles[0];
    if (inspectedProfile) {
      this.renderCoachStudentDossier(inspectedProfile);
    }
  }

  /**
   * Renderiza el expediente detallado del alumno en el Panel Coach
   */
  renderCoachStudentDossier(profile) {
    const avatarEl = document.getElementById('coach-detail-avatar');
    const nameEl = document.getElementById('coach-detail-name');
    const subtitleEl = document.getElementById('coach-detail-subtitle');
    const riskBadgeEl = document.getElementById('coach-detail-risk-badge');
    const hypoEl = document.getElementById('coach-detail-hypothesis');

    if (avatarEl) avatarEl.textContent = profile.avatar || '👤';
    if (nameEl) nameEl.textContent = profile.nombre;
    if (subtitleEl) subtitleEl.textContent = `${profile.edad || 30} años • ${profile.profesion || 'Profesional'} • Arquetipo: ${profile.arquetipo || 'General'}`;

    if (riskBadgeEl) {
      const r = profile.alertaRiesgo || 'verde';
      riskBadgeEl.className = `badge badge-risk-${r}`;
      riskBadgeEl.textContent = r === 'rojo' ? '🔴 Riesgo Alto / Deserción' : (r === 'amarillo' ? '🟡 Riesgo Medio / Atención' : '🟢 Riesgo Bajo / Adherencia Saludable');
    }

    if (hypoEl) hypoEl.textContent = profile.hipotesis || 'Sin hipótesis diagnóstica registrada.';

    // Métricas Ideales vs Mínimas vs No realizadas
    const statIdeales = document.getElementById('coach-stat-ideales');
    const statMinimas = document.getElementById('coach-stat-minimas');
    const statMissed = document.getElementById('coach-stat-missed');

    if (statIdeales) statIdeales.textContent = profile.idealCount ?? 0;
    if (statMinimas) statMinimas.textContent = profile.minimaCount ?? 0;
    if (statMissed) statMissed.textContent = profile.missedCount ?? 0;

    // Generador Automático de Puntos para la Entrevista 1-a-1
    const talkingPointsList = document.getElementById('coach-talking-points-list');
    if (talkingPointsList) {
      talkingPointsList.innerHTML = '';
      const talkingPoints = RulesEngine.generateInterviewTalkingPoints(profile);

      talkingPoints.forEach((tp) => {
        const item = document.createElement('div');
        item.className = 'talking-point-item';
        item.innerHTML = `
          <div class="tp-category">${tp.categoria}</div>
          <div class="tp-title">${tp.tema}</div>
          <div class="tp-detail">${tp.detalle}</div>
          <div class="tp-suggestion">💬 <strong>Sugerencia para el Coach:</strong> ${tp.sugerenciaCoach}</div>
        `;
        talkingPointsList.appendChild(item);
      });
    }

    // Bandeja de Entrevistas Solicitadas por este alumno
    const tray = document.getElementById('coach-interviews-tray');
    if (tray) {
      const allRequests = AppState.getInterviewRequests();
      const studentRequests = allRequests.filter((r) => r.profileId === profile.id);

      if (studentRequests.length === 0) {
        tray.innerHTML = '<div style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">No hay sesiones 1-a-1 agendadas pendientes para este alumno.</div>';
      } else {
        tray.innerHTML = `
          <table class="cohort-table">
            <thead>
              <tr>
                <th>Fecha y Hora</th>
                <th>Estado</th>
                <th>Inquietudes del Alumno</th>
                <th>Gatillador Principal</th>
              </tr>
            </thead>
            <tbody>
              ${studentRequests.map((req) => `
                <tr>
                  <td><strong>${req.fecha}</strong> a las ${req.hora} hs</td>
                  <td><span class="badge badge-risk-verde">Confirmada</span></td>
                  <td>${req.notas || 'Revisión periódica'}</td>
                  <td><span class="badge badge-cyan">${req.resumenTelemetrico?.topBarrera || 'General'}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }
    }
  }
}

// Inicialización automática cuando el DOM está listo (con guarda para evitar doble inicialización)
function bootEntrenhabitosApp() {
  if (window.appController) return;
  const app = new AppController();
  window.appController = app;
  app.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootEntrenhabitosApp);
} else {
  bootEntrenhabitosApp();
}
