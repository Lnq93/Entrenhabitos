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
  }

  init() {
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

    console.log('✅ Entrenhábitos App (Simulador Móvil + Coach) inicializada con éxito.');
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

    // 2. Selector global de perfil de alumno
    const selectProfile = document.getElementById('global-profile-select');
    if (selectProfile) {
      selectProfile.addEventListener('change', (e) => {
        AppState.setActiveProfile(e.target.value);
        this.inspectedCoachStudentId = e.target.value;
        this.showToast(`Perfil activo: ${AppState.getActiveProfile().nombre}`);
      });
    }

    // 3. Botón de Reinicio Demo
    const btnResetDemo = document.getElementById('btn-reset-demo');
    if (btnResetDemo) {
      btnResetDemo.addEventListener('click', () => {
        AppState.resetDemoData();
        this.inspectedCoachStudentId = 'alumno_martin';
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

    // 4b. Botón SOS "Día Difícil (18m)" en la cabecera de la App Celular
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

    // 7. Sliders de dificultad y energía
    const sliderDiff = document.getElementById('input-difficulty');
    const diffVal = document.getElementById('difficulty-val');
    if (sliderDiff && diffVal) {
      sliderDiff.addEventListener('input', (e) => {
        diffVal.textContent = `${e.target.value} / 5`;
      });
    }

    const sliderEnergy = document.getElementById('input-energy');
    const energyVal = document.getElementById('energy-val');
    if (sliderEnergy && energyVal) {
      sliderEnergy.addEventListener('input', (e) => {
        energyVal.textContent = `${e.target.value} / 5`;
      });
    }

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
        notes: 'Simulación: Salí tarde del trabajo y activé la Versión Mínima de 18m',
        date: todayStr
      });
      this.switchStudentTab('adaptive');
      this.showToast('⏰ Simulado: Día con poco tiempo → Versión Mínima activada y racha salvada');
    } else if (simType === 'low_energy') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'minima',
        barrierId: 'B2_ENERGY',
        difficulty: 4,
        energyLevel: 1,
        durationSeg: 16,
        notes: 'Simulación: Batería mental baja → Micro-meta de 2 min completada',
        date: todayStr
      });
      this.switchStudentTab('adaptive');
      this.showToast('🔋 Simulado: Baja energía → Regla de los 2 Minutos activada');
    } else if (simType === 'missed_guilt') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'missed',
        barrierId: 'B5_GUILT_ALL_OR_NOTHING',
        difficulty: 5,
        energyLevel: 2,
        durationSeg: 21,
        notes: 'Simulación: No pude asistir hoy, evitando caer en el Todo o Nada',
        date: todayStr
      });
      this.switchStudentTab('adaptive');
      this.showToast('🛡️ Simulado: Sesión perdida → Protocolo "Never Miss Twice" sin culpa activado');
    } else if (simType === 'completed_ideal') {
      AppState.submitCheckIn({
        profileId: profile.id,
        status: 'ideal',
        barrierId: null,
        difficulty: 2,
        energyLevel: 4,
        durationSeg: 14,
        notes: 'Simulación: Sesión ideal de 60 minutos completada con éxito',
        date: todayStr
      });
      this.switchStudentTab('progress');
      this.showToast('🟢 Simulado: ¡Sesión Ideal completada! Adherencia actualizada');
    } else if (simType === 'schedule_1on1') {
      const req = AppState.scheduleInterview({
        profileId: profile.id,
        date: todayStr,
        time: '19:00',
        notes: 'Quiero revisar cómo sostener la rutina en semanas de cierre laboral.'
      });
      this.switchStudentTab('progress');
      this.showToast(`📅 Turno 1-a-1 agendado (${req.fecha} ${req.hora} hs) y enviado al Panel Coach`);
    }
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
   * Procesa el formulario de onboarding
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

    const profile = AppState.getActiveProfile();
    AppState.completeOnboarding(profile.id, answers);

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
   * Renderiza Pestaña Mi Plan Dual
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
      card.className = 'day-card';
      const dayId = `day_${idx}`;

      card.innerHTML = `
        <div class="day-card-header">
          <span class="day-name">${d.dia}</span>
          <span class="day-tag">${d.nombreSesion || 'Entrenamiento'}</span>
        </div>

        <div class="dual-tabs">
          <button type="button" class="dual-tab-btn active ideal-tab" data-target="${dayId}_ideal">
            🟢 Versión Ideal (${d.ideal.duracionMin}m)
          </button>
          <button type="button" class="dual-tab-btn minima-tab" data-target="${dayId}_minima">
            🟡 Versión Mínima (${d.minima.duracionMin}m)
          </button>
        </div>

        <div class="day-content">
          <!-- Versión Ideal -->
          <div id="${dayId}_ideal" class="version-block">
            <span class="version-badge ideal">Versión Completa</span>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">${d.ideal.titulo}</h4>
            <ul class="exercise-list">
              ${d.ideal.ejercicios.map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
          </div>

          <!-- Versión Mínima (Día Difícil) -->
          <div id="${dayId}_minima" class="version-block" style="display: none;">
            <span class="version-badge minima">Día Difícil (Rescate)</span>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--amber-light); margin-bottom: 0.5rem;">${d.minima.titulo}</h4>
            <ul class="exercise-list minima">
              ${d.minima.ejercicios.map((ex) => `<li>${ex}</li>`).join('')}
            </ul>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.75rem;">
              ⚡ <em>Completar esta versión preserva el 100% de tu hábito en días complicados.</em>
            </p>
          </div>
        </div>
      `;

      // Eventos de toggle para las pestañas de versión dual dentro del día
      const idealBtn = card.querySelector('.ideal-tab');
      const minimaBtn = card.querySelector('.minima-tab');
      const idealBlock = card.querySelector(`#${dayId}_ideal`);
      const minimaBlock = card.querySelector(`#${dayId}_minima`);

      idealBtn.addEventListener('click', () => {
        idealBtn.classList.add('active');
        minimaBtn.classList.remove('active');
        idealBlock.style.display = 'block';
        minimaBlock.style.display = 'none';
      });

      minimaBtn.addEventListener('click', () => {
        minimaBtn.classList.add('active');
        idealBtn.classList.remove('active');
        minimaBlock.style.display = 'block';
        idealBlock.style.display = 'none';
      });

      grid.appendChild(card);
    });
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
   * Renderiza Pestaña de Progreso del Alumno y Agendamiento 1-a-1
   */
  renderProgressTab(profile) {
    // Badges y Métricas
    const riskBadge = document.getElementById('student-risk-badge');
    if (riskBadge) {
      const r = profile.alertaRiesgo || 'verde';
      riskBadge.className = `badge badge-risk-${r}`;
      riskBadge.textContent = r === 'rojo' ? '🔴 Riesgo Alto' : (r === 'amarillo' ? '🟡 Riesgo Medio' : '🟢 Riesgo Bajo');
    }

    const adhVal = document.getElementById('metric-adherence-val');
    const salVal = document.getElementById('metric-salvataje-val');
    const mttrVal = document.getElementById('metric-mttr-val');
    const rachaVal = document.getElementById('metric-racha-val');

    if (adhVal) adhVal.textContent = `${profile.scoreAdherencia ?? 0}%`;
    if (salVal) salVal.textContent = `${profile.tasaSalvatajeMinima ?? 0}%`;
    if (mttrVal) mttrVal.textContent = `${profile.mttrDias ?? 1.0} d`;
    if (rachaVal) rachaVal.textContent = `${profile.rachaActualSemanas ?? 0} sem`;

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
