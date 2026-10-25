/* ==========================================================================
   FOXER - CLON INTERACTIVO DE DUOLINGO PARA EL SABER 11 (ICFES)
   Incluye:
   - Sistema de Registro e Inicio de Sesión Multi-Usuario (LocalStorage + IndexedDB)
   - Base de Datos Oficial de 125+ Preguntas Reales (25 por cada una de las 5 Áreas)
   - Explorador y Creador de Preguntas en la Base de Datos
   - Sintetizador de Sonidos Web Audio API
   ========================================================================== */

// ================= 1. GENERADOR SVG DEL ZORRO FOXER (CON BUZO AZUL Y LÁPIZ) =================
function getFoxerSVG(pose = 'normal') {
  const isHappy = pose === 'happy' || pose === 'victory';
  const isSad = pose === 'sad';
  const isCool = pose === 'cool';

  const eyesMarkup = isCool
    ? `<rect x="30" y="42" width="18" height="11" rx="3" fill="#0F172A" stroke="#FFC800" stroke-width="1.5"/>
       <rect x="52" y="42" width="18" height="11" rx="3" fill="#0F172A" stroke="#FFC800" stroke-width="1.5"/>
       <line x1="48" y1="46" x2="52" y2="46" stroke="#FFC800" stroke-width="2"/>`
    : isHappy
    ? `<path d="M33 48 Q39 41 45 48" stroke="#0F172A" stroke-width="3.5" fill="none" stroke-linecap="round"/>
       <path d="M55 48 Q61 41 67 48" stroke="#0F172A" stroke-width="3.5" fill="none" stroke-linecap="round"/>`
    : isSad
    ? `<circle cx="39" cy="48" r="4" fill="#0F172A"/>
       <circle cx="61" cy="48" r="4" fill="#0F172A"/>
       <line x1="33" y1="41" x2="44" y2="44" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round"/>
       <line x1="67" y1="41" x2="56" y2="44" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round"/>`
    : `<circle cx="39" cy="47" r="4.5" fill="#0F172A"/>
       <circle cx="61" cy="47" r="4.5" fill="#0F172A"/>
       <circle cx="40.5" cy="45.5" r="1.6" fill="#FFFFFF"/>
       <circle cx="62.5" cy="45.5" r="1.6" fill="#FFFFFF"/>`;

  const mouthMarkup = isSad
    ? `<path d="M45 64 Q50 60 55 64" stroke="#0F172A" stroke-width="2.5" fill="none" stroke-linecap="round"/>`
    : `<path d="M44 61 Q50 67 56 61" stroke="#0F172A" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;

  return `
  <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="64" rx="34" ry="22" fill="#0F172A"/>
    <polygon points="20,42 14,12 38,28" fill="#FF6B00" stroke="#CC5200" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="22,36 18,18 33,28" fill="#FFF3E8"/>
    <polygon points="80,42 86,12 62,28" fill="#FF6B00" stroke="#CC5200" stroke-width="2" stroke-linejoin="round"/>
    <polygon points="78,36 82,18 67,28" fill="#FFF3E8"/>
    <path d="M22 94 C22 70 78 70 78 94 Z" fill="#1E3A8A" stroke="#0F172A" stroke-width="2.5"/>
    <line x1="43" y1="73" x2="43" y2="87" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="57" y1="73" x2="57" y2="87" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="50" cy="85" r="5" fill="#FF6B00"/>
    <path d="M22 48 C22 26 78 26 78 48 C82 62 66 72 50 72 C34 72 18 62 22 48 Z" fill="#FF6B00" stroke="#CC5200" stroke-width="2"/>
    <path d="M22 50 Q35 52 50 68 Q30 71 22 56 Z" fill="#FFFFFF"/>
    <path d="M78 50 Q65 52 50 68 Q70 71 78 56 Z" fill="#FFFFFF"/>
    ${eyesMarkup}
    <ellipse cx="50" cy="56" rx="5" ry="3.6" fill="#0F172A"/>
    ${mouthMarkup}
    <g transform="translate(68, 62) rotate(25)">
      <rect x="0" y="0" width="7" height="22" rx="1.5" fill="#FFC800" stroke="#0F172A" stroke-width="1.8"/>
      <rect x="0" y="0" width="7" height="5" fill="#FF4B4B" stroke="#0F172A" stroke-width="1.5"/>
      <polygon points="0,22 7,22 3.5,29" fill="#FDE68A" stroke="#0F172A" stroke-width="1.5"/>
      <polygon points="2.2,26 4.8,26 3.5,29" fill="#0F172A"/>
    </g>
  </svg>`;
}

function hydrateFoxerFallbacks() {
  document.querySelectorAll('.foxer-svg-fallback').forEach(el => {
    const pose = el.getAttribute('data-fox-pose') || 'normal';
    el.innerHTML = getFoxerSVG(pose);
  });
}

// ================= 2. SINTETIZADOR DE SONIDOS WEB AUDIO API (ESTILO DUOLINGO) =================
const SoundFX = {
  ctx: null,
  enabled: true,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playTone(freq, type, duration, startTimeOffset = 0, gainVal = 0.18) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime + startTimeOffset;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(gainVal, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  },

  playClick() {
    this.playTone(520, 'sine', 0.07, 0, 0.1);
  },

  playCorrect() {
    this.playTone(587.33, 'triangle', 0.14, 0, 0.22);
    this.playTone(880.00, 'triangle', 0.32, 0.11, 0.25);
    this.playTone(1174.66, 'sine', 0.30, 0.11, 0.12);
  },

  playWrong() {
    this.playTone(220.0, 'sawtooth', 0.18, 0, 0.15);
    this.playTone(164.81, 'sawtooth', 0.34, 0.15, 0.18);
  },

  playFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, idx) => {
      this.playTone(n, 'triangle', 0.28, idx * 0.11, 0.22);
    });
    this.playTone(1318.51, 'sine', 0.55, 0.44, 0.24);
  }
};

// ================= 3. METADATOS DE LOS 5 MUNDOS + CONEXIÓN CON LA BASE DE DATOS =================
const CUSTOM_QUESTIONS_KEY = 'foxer_custom_questions_v2';

const SUBJECTS_DATA = {
  lectura: {
    id: 'lectura',
    short: 'LEC',
    emoji: '📖',
    name: 'Lectura Crítica',
    color: '#FF6B00',
    shadow: '#CC5200',
    unitBadge: 'MUNDO 1 • LECTURA CRÍTICA (25 PREGUNTAS)',
    unitTitle: 'Comprensión, Inferencia y Pensamiento Crítico',
    competency: 'Identificar contenidos locales, comprender el sentido global y evaluar críticamente textos.',
    nodesMeta: [
      { title: 'Sentido Local', icon: '⭐' },
      { title: 'Inferencia Global', icon: '🔍' },
      { title: 'Argumentación y Falacias', icon: '🧠' },
      { title: 'Textos Filosóficos', icon: '🏛️' },
      { title: 'Jefe Lectura Intertextual', icon: '👑' }
    ],
    guideTips: [
      {
        title: '1. Lee primero la pregunta antes del texto largo',
        text: 'En el Saber 11 el tiempo es oro. Leer el enunciado primero activa tu radar mental para encontrar exactamente la frase o intención que el ICFES te está pidiendo.'
      },
      {
        title: '2. Cuidado con las opciones extremas ("Siempre", "Nunca", "Todos")',
        text: 'En Lectura Crítica, las opciones que generalizan de forma absoluta suelen ser trampas si el autor matizó su postura en el texto.'
      },
      {
        title: '3. Diferencia entre lo que dice el autor y lo que cita de otros',
        text: 'Fíjate en los verbos introductorios: "Según algunos críticos..." no es la opinión del autor, sino la postura que el autor va a discutir.'
      }
    ]
  },

  matematicas: {
    id: 'matematicas',
    short: 'MAT',
    emoji: '📐',
    name: 'Matemáticas',
    color: '#1CB0F6',
    shadow: '#1899D6',
    unitBadge: 'MUNDO 2 • MATEMÁTICAS (25 PREGUNTAS)',
    unitTitle: 'Razonamiento Cuantitativo, Álgebra y Probabilidad',
    competency: 'Interpretación de datos, formulación de modelos matemáticos y validación de procedimientos.',
    nodesMeta: [
      { title: 'Porcentajes y Razones', icon: '📊' },
      { title: 'Probabilidad y Estadística', icon: '🎲' },
      { title: 'Geometría y Pitágoras', icon: '📐' },
      { title: 'Álgebra y Funciones', icon: '📈' },
      { title: 'Jefe Matemáticas ICFES', icon: '👑' }
    ],
    guideTips: [
      {
        title: '1. El 10% es tu mejor amigo para calcular rápido',
        text: 'Para hallar cualquier porcentaje sin calculadora, saca primero el 10% (corriendo la coma un lugar a la izquierda) y luego multiplica o divide. Ej: 15% de 80 = 8 (10%) + 4 (5%) = 12.'
      },
      {
        title: '2. Descarta valores absurdos usando estimación',
        text: 'Antes de operar con decimales largos, redondea los números y mira qué orden de magnitud tiene sentido.'
      },
      {
        title: '3. Probabilidad = Casos Favorables / Casos Totales',
        text: 'Casi todos los problemas de probabilidad del Saber 11 salen contando con cuidado el total del denominador.'
      }
    ]
  },

  ciencias: {
    id: 'ciencias',
    short: 'CIE',
    emoji: '🧪',
    name: 'Ciencias Naturales',
    color: '#58CC02',
    shadow: '#58A700',
    unitBadge: 'MUNDO 3 • CIENCIAS NATURALES (25 PREGUNTAS)',
    unitTitle: 'Biología, Química, Física e Indagación Científica',
    competency: 'Uso comprensivo del conocimiento científico, explicación de fenómenos e indagación experimental.',
    nodesMeta: [
      { title: 'Célula y Genética', icon: '🧬' },
      { title: 'Ecosistemas y Evolución', icon: '🌿' },
      { title: 'Química y Reacciones', icon: '⚗️' },
      { title: 'Física: Fuerza y Energía', icon: '⚡' },
      { title: 'Jefe Indagación Científica', icon: '👑' }
    ],
    guideTips: [
      {
        title: '1. Identifica Variables Independiente y Dependiente',
        text: 'En preguntas de experimentos: la variable INDEPENDIENTE es la que el científico manipula (eje X) y la DEPENDIENTE es el efecto que se mide (eje Y).'
      },
      {
        title: '2. Ley de Conservación de la Materia y Energía',
        text: 'En química y física, los átomos y la energía nunca desaparecen de la nada: solo se transforman o reorganizan.'
      },
      {
        title: '3. Cadenas Tróficas y Flujo de Energía',
        text: 'Recuerda que si desaparece un depredador, la población de su presa directa aumenta a corto plazo y agota a los productores.'
      }
    ]
  },

  sociales: {
    id: 'sociales',
    short: 'SOC',
    emoji: '🌎',
    name: 'Sociales y Ciudadanas',
    color: '#CE82FF',
    shadow: '#A559D9',
    unitBadge: 'MUNDO 4 • SOCIALES Y CIUDADANAS (25 PREGUNTAS)',
    unitTitle: 'Constitución de 1991, Multiperspectivismo y Pensamiento Social',
    competency: 'Pensamiento social, interpretación y análisis de perspectivas, y pensamiento reflexivo y sistémico.',
    nodesMeta: [
      { title: 'Derechos y Tutela', icon: '⚖️' },
      { title: 'Multiperspectivismo', icon: '🗣️' },
      { title: 'Ramas y Control', icon: '🏛️' },
      { title: 'Historia de Colombia', icon: '📜' },
      { title: 'Jefe Geografía y Economía', icon: '👑' }
    ],
    guideTips: [
      {
        title: '1. Domina los Mecanismos de Participación y Protección',
        text: 'La Acción de Tutela protege derechos FUNDAMENTALES (vida, salud, educación, dignidad) de forma inmediata. La Acción Popular protege derechos COLECTIVOS (medio ambiente, espacio público).'
      },
      {
        title: '2. Análisis de Perspectivas (Actores en Conflicto)',
        text: 'Cuando el ICFES presenta un conflicto (ej. minería vs. campesinos), no te pide tu opinión personal, sino identificar qué interés económico, ambiental o cultural defiende cada actor.'
      },
      {
        title: '3. Órganos de Control: Contraloría vs. Procuraduría',
        text: 'Contraloría vigila las CUENTAS y dineros públicos; Procuraduría vigila la conducta disciplinaria de los servidores públicos.'
      }
    ]
  },

  ingles: {
    id: 'ingles',
    short: 'ING',
    emoji: '🇬🇧',
    name: 'Inglés',
    color: '#FF4B4B',
    shadow: '#EA2B2B',
    unitBadge: 'MUNDO 5 • ENGLISH SABER 11 (25 PREGUNTAS)',
    unitTitle: 'Avisos, Conversaciones, Gramática y Reading Comprehension',
    competency: 'Competencia comunicativa en lengua inglesa (Partes 1 a 7 de la prueba oficial ICFES).',
    nodesMeta: [
      { title: 'Parte 1: Avisos', icon: '🪧' },
      { title: 'Parte 2: Definiciones', icon: '🔤' },
      { title: 'Parte 3: Diálogos', icon: '💬' },
      { title: 'Parte 4: Gramática', icon: '📝' },
      { title: 'Jefe Reading B1+', icon: '👑' }
    ],
    guideTips: [
      {
        title: '1. Parte 1 (Avisos): Busca palabras clave del lugar',
        text: 'Si el aviso dice "Flight", "Gate" o "Seatbelt", piensa en "On an airplane / In an airport". Si dice "Quiet", "Books", es "In a library".'
      },
      {
        title: '2. Parte 3 (Conversaciones): Fíjate en el tiempo verbal',
        text: 'Si la pregunta empieza con "Have you...?" o "Would you like...?", la respuesta natural debe ser coherente con ese auxiliar.'
      },
      {
        title: '3. Condicionales y Conectores',
        text: 'Repasa conectores clave como "Although" (aunque), "However" (sin embargo) y colocaciones como "make friends".'
      }
    ]
  }
};

// Función para obtener todas las preguntas de un área (25 oficiales + personalizadas guardadas en BD)
function getQuestionsForSubject(subjectId) {
  const baseList = (window.FOXER_QUESTIONS_DB && window.FOXER_QUESTIONS_DB[subjectId]) || [];
  let customMap = {};
  try {
    const raw = localStorage.getItem(CUSTOM_QUESTIONS_KEY);
    if (raw) customMap = JSON.parse(raw);
  } catch (e) {}
  const customList = customMap[subjectId] || [];
  return [...baseList, ...customList];
}

function getTotalQuestionsCount() {
  return Object.keys(SUBJECTS_DATA).reduce((acc, key) => acc + getQuestionsForSubject(key).length, 0);
}

// Frases motivacionales de la mascota Zorro FOXER en el camino
const FOXER_PATH_QUOTES = [
  '¡Cada nodo tiene 5 preguntas únicas del banco de +125 preguntas!',
  '¡Recuerda leer la pregunta antes del texto largo!',
  '¡Abre los cofres dorados del camino para ganar Gemas extra!',
  '¡Tu progreso está guardado en tu cuenta personal FOXER!'
];

const CUNNING_RANKS = [
  { minXP: 0, title: 'Zorro Explorador (Nv. 1)' },
  { minXP: 100, title: 'Zorro Astuto (Nv. 2)' },
  { minXP: 250, title: 'Zorro Estratega (Nv. 3)' },
  { minXP: 450, title: 'Zorro Sabio ICFES (Nv. 4)' },
  { minXP: 700, title: 'Zorro Leyenda 500/500 (Nv. 5)' }
];

const BASE_COMPETITORS = [
  { name: 'Valentina R. (Bot)', avatar: '🦊', xp: 340 },
  { name: 'Sebastián M. (Bot)', avatar: '🦉', xp: 260 },
  { name: 'Camila G. (Bot)', avatar: '🦁', xp: 185 },
  { name: 'Mateo T. (Bot)', avatar: '🐼', xp: 110 },
  { name: 'Natalia P. (Bot)', avatar: '🐯', xp: 45 }
];

// ================= 4. MOTOR DE BASE DE DATOS DE USUARIOS Y SESIONES (INDEXEDDB + LOCALSTORAGE) =================
const ACCOUNTS_STORAGE_KEY = 'foxer_users_database_v2';
const ACTIVE_SESSION_KEY = 'foxer_active_user_id_v2';

// Helper inteligente que busca el archivo PHP tanto en /php/ como en la carpeta raíz
async function fetchPhpEndpoint(fileName, payload) {
  const paths = [`php/${fileName}`, fileName];
  let lastError = null;

  for (const path of paths) {
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.status === 404) continue;
      const text = await response.text();
      // Si el servidor devolvió el código PHP sin ejecutar (ej: abrieron con Live Server en vez de XAMPP/Apache)
      if (text.trim().startsWith('<?php')) {
        throw new Error('PHP_NOT_EXECUTED');
      }
      return JSON.parse(text);
    } catch (err) {
      lastError = err;
      if (err.message === 'PHP_NOT_EXECUTED') throw err;
    }
  }
  throw lastError || new Error('No se encontró el archivo PHP');
}

function createFreshUserProgress(fullname, username, password, school = '', goal = '400+') {
  const safeName = String(fullname || 'Estudiante').trim();
  const safeUser = String(username || 'usuario').toLowerCase().trim();
  const safeSchool = String(school || '').trim() || 'I.E.D. Simón Bolívar';
  return {
    id: safeUser,
    username: safeName,
    loginId: safeUser,
    password: password,
    school: safeSchool,
    goal: goal || '400+',
    createdAt: new Date().toISOString().slice(0, 10),
    lastLoginDate: new Date().toISOString().slice(0, 10),
    xp: 50,
    gems: 100,
    hearts: 5,
    streak: 1,
    soundEnabled: true,
    currentSubject: 'lectura',
    bestDuelScore: 0,
    perfectLessons: 0,
    maxComboReached: 1,
    unlockedNodes: {
      lectura: 0,
      matematicas: 0,
      ciencias: 0,
      sociales: 0,
      ingles: 0
    },
    openedChests: {},
    quests: {
      xpEarnedToday: 0,
      perfectLessonsToday: 0,
      comboFiveReached: false,
      claimed: { q1: false, q2: false, q3: false }
    }
  };
}

// Espejo en IndexedDB para persistencia avanzada en navegador
const FoxerIndexedDB = {
  dbName: 'FoxerSaber11Database',
  version: 1,

  open() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) return resolve(null);
      const req = indexedDB.open(this.dbName, this.version);
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('users')) {
          db.createObjectStore('users', { keyPath: 'id' });
        }
      };
      req.onsuccess = e => resolve(e.target.result);
      req.onerror = () => resolve(null);
    });
  },

  async saveUserRecord(userObj) {
    const db = await this.open();
    if (!db) return;
    try {
      const tx = db.transaction('users', 'readwrite');
      tx.objectStore('users').put(userObj);
    } catch (e) {}
  }
};

function getAllAccountsMap() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch (e) {
    return {};
  }
}

function saveAllAccountsMap(map) {
  try {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(map));
  } catch (e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

let state = null; // Apunta al usuario actualmente autenticado

function loadActiveSessionOrShowAuth() {
  const accounts = getAllAccountsMap();
  const activeId = localStorage.getItem(ACTIVE_SESSION_KEY);

  if (activeId && accounts[activeId]) {
    state = accounts[activeId];
    updateDailyStreakOnLogin(state);
    saveState();
    hideAuthPortal();
    renderAll();
  } else {
    showAuthPortal();
  }
}

function updateDailyStreakOnLogin(userObj) {
  const today = new Date().toISOString().slice(0, 10);
  if (userObj.lastLoginDate !== today) {
    const yesterdayDate = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (userObj.lastLoginDate === yesterdayDate) {
      userObj.streak = (userObj.streak || 1) + 1;
    } else if (!userObj.streak) {
      userObj.streak = 1;
    }
    userObj.lastLoginDate = today;
  }
}

function saveState() {
  if (!state || !state.id) return;
  const accounts = getAllAccountsMap();
  accounts[state.id] = state;
  saveAllAccountsMap(accounts);
  localStorage.setItem(ACTIVE_SESSION_KEY, state.id);
  FoxerIndexedDB.saveUserRecord(state);

  // Sincronizar puntos XP y nivel con la tabla `usuarios` en MySQL
  const cunning = getCunningInfo(state.xp || 50);
  fetchPhpEndpoint('actualizar_progreso.php', {
    id: state.mysqlId || state.id,
    correo: state.loginId,
    puntos: state.xp || 50,
    nivel: cunning.levelNum || 1
  }).catch(() => {});
}

// ================= 5. LÓGICA DEL PORTAL DE REGISTRO E INICIO DE SESIÓN =================
function showAuthPortal() {
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('app-layout').classList.add('hidden');
  document.getElementById('lesson-screen').classList.add('hidden');
  renderSavedAccountsList();
  hydrateFoxerFallbacks();
}

function hideAuthPortal() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-layout').classList.remove('hidden');
}

function renderSavedAccountsList() {
  const accounts = Object.values(getAllAccountsMap());
  const box = document.getElementById('saved-accounts-box');
  const listEl = document.getElementById('saved-accounts-list');

  if (accounts.length === 0) {
    box.classList.add('hidden');
    return;
  }

  box.classList.remove('hidden');
  listEl.innerHTML = accounts
    .map(
      acc => `
      <div class="saved-account-item" onclick="quickSelectAccount('${acc.id}')">
        <div class="saved-acc-meta">
          <span style="font-size: 1.5rem;">🦊</span>
          <div>
            <div class="saved-acc-name">${acc.username}</div>
            <div class="saved-acc-sub">@${acc.loginId} • ⚡ ${acc.xp} XP • 🔥 Racha ${acc.streak}d</div>
          </div>
        </div>
        <span class="btn-3d btn-orange btn-sm">ENTRAR →</span>
      </div>
    `
    )
    .join('');
}

window.quickSelectAccount = function (accountId) {
  SoundFX.playClick();
  const accounts = getAllAccountsMap();
  const acc = accounts[accountId];
  if (!acc) return;

  // Rellenar usuario en el formulario de login o iniciar directamente si está en el mismo dispositivo
  state = acc;
  updateDailyStreakOnLogin(state);
  saveState();
  SoundFX.playCorrect();
  hideAuthPortal();
  renderAll();
  showToast(`🦊 ¡Bienvenido de nuevo, ${state.username}!`);
};

async function handleRegisterSubmit(e) {
  e.preventDefault();
  const fullname = document.getElementById('reg-fullname').value.trim();
  const username = document.getElementById('reg-username').value.trim().toLowerCase();
  const password = document.getElementById('reg-password').value;
  const school = document.getElementById('reg-school').value.trim() || 'I.E.D. Simón Bolívar';
  const goal = document.getElementById('reg-goal').value;
  const errEl = document.getElementById('register-error-msg');

  errEl.classList.add('hidden');

  if (fullname.length < 2) {
    errEl.textContent = '⚠️ Por favor escribe tu nombre o apodo.';
    errEl.classList.remove('hidden');
    return;
  }
  if (username.length < 3) {
    errEl.textContent = '⚠️ El usuario o correo debe tener al menos 3 caracteres.';
    errEl.classList.remove('hidden');
    return;
  }
  if (password.length < 4) {
    errEl.textContent = '⚠️ La contraseña debe tener al menos 4 caracteres.';
    errEl.classList.remove('hidden');
    return;
  }

  try {
    const data = await fetchPhpEndpoint('registrar.php', {
      nombre: fullname,
      correo: username,
      password: password,
      contraseña: password,
      institucion: school,
      grado: 11
    });

    if (data && data.success) {
      const newUser = createFreshUserProgress(fullname, username, password, school, goal);
      newUser.mysqlId = data.usuario.id;
      newUser.id = String(data.usuario.id);
      state = newUser;
      saveState();

      SoundFX.playFanfare();
      hideAuthPortal();
      renderAll();
      showToast(`🎉 ¡Guardado en MySQL (ID #${data.usuario.id})! Bienvenido, ${state.username}`);
    } else {
      errEl.textContent = '⚠️ ' + (data && data.message ? data.message : 'Error desconocido al registrar en MySQL.');
      errEl.classList.remove('hidden');
      SoundFX.playWrong();
    }
  } catch (error) {
    if (error.message === 'PHP_NOT_EXECUTED' || window.location.protocol === 'file:') {
      errEl.textContent = '⚠️ Estás abriendo la página sin servidor PHP (file:// o Live Server). Ábrela desde http://localhost/ para que PHP guarde en MySQL.';
    } else {
      errEl.textContent = '❌ No se pudo conectar con registrar.php. Verifica que Apache (XAMPP) esté encendido.';
    }
    errEl.classList.remove('hidden');
    SoundFX.playWrong();
  }
}

async function handleLoginSubmit(e) {
  e.preventDefault();
  const identifier = document.getElementById('login-identifier').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error-msg');

  errEl.classList.add('hidden');

  try {
    const data = await fetchPhpEndpoint('login.php', {
      correo: identifier,
      password: password,
      contraseña: password
    });

    if (data && data.success) {
      const accounts = getAllAccountsMap();
      const userKey = String(data.usuario.id);

      if (accounts[userKey]) {
        state = accounts[userKey];
        state.mysqlId = data.usuario.id;
        state.username = data.usuario.nombre || state.username;
      } else {
        state = createFreshUserProgress(
          data.usuario.nombre,
          data.usuario.correo,
          password,
          data.usuario.institucion || 'I.E.D. Simón Bolívar',
          '400+'
        );
        state.mysqlId = data.usuario.id;
        state.id = userKey;
        state.xp = parseInt(data.usuario.puntos, 10) || 50;
      }

      updateDailyStreakOnLogin(state);
      saveState();

      SoundFX.playCorrect();
      hideAuthPortal();
      renderAll();
      showToast(`🦊 ¡Qué alegría verte de nuevo, ${state.username}!`);
    } else {
      errEl.textContent = '❌ ' + (data && data.message ? data.message : 'Credenciales incorrectas.');
      errEl.classList.remove('hidden');
      SoundFX.playWrong();
    }
  } catch (error) {
    if (error.message === 'PHP_NOT_EXECUTED' || window.location.protocol === 'file:') {
      errEl.textContent = '⚠️ Abre el proyecto desde http://localhost/ en XAMPP para usar el login con MySQL.';
    } else {
      errEl.textContent = '❌ Error de conexión con login.php.';
    }
    errEl.classList.remove('hidden');
    SoundFX.playWrong();
  }
}

function handleGuestAccess() {
  SoundFX.playClick();
  const accounts = getAllAccountsMap();
  if (!accounts['invitado_foxer']) {
    accounts['invitado_foxer'] = createFreshUserProgress(
      'Estudiante Invitado',
      'invitado_foxer',
      '1234',
      'Modo Demo',
      '400+'
    );
    accounts['invitado_foxer'].unlockedNodes.lectura = 1;
    saveAllAccountsMap(accounts);
  }
  state = accounts['invitado_foxer'];
  saveState();
  SoundFX.playCorrect();
  hideAuthPortal();
  renderAll();
  showToast('🦊 Entraste en Modo Invitado. ¡Puedes crear tu cuenta propia cuando quieras!');
}

function logoutCurrentAccount() {
  SoundFX.playClick();
  localStorage.removeItem(ACTIVE_SESSION_KEY);
  state = null;
  showAuthPortal();
}

// ================= 6. UTILIDADES UI Y NOTIFICACIONES =================
function showToast(msg) {
  const container = document.getElementById('toast-container');
  const item = document.createElement('div');
  item.className = 'toast-item';
  item.textContent = msg;
  container.appendChild(item);
  setTimeout(() => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(10px)';
    item.style.transition = 'all 0.25s ease';
    setTimeout(() => item.remove(), 260);
  }, 2900);
}

function getCunningInfo(xp) {
  let currentRank = CUNNING_RANKS[0];
  let nextRank = CUNNING_RANKS[1];
  let levelNum = 1;

  for (let i = 0; i < CUNNING_RANKS.length; i++) {
    if (xp >= CUNNING_RANKS[i].minXP) {
      currentRank = CUNNING_RANKS[i];
      nextRank = CUNNING_RANKS[i + 1] || null;
      levelNum = i + 1;
    }
  }

  let pct = 100;
  let remaining = 0;
  if (nextRank) {
    const span = nextRank.minXP - currentRank.minXP;
    const progress = xp - currentRank.minXP;
    pct = Math.min(100, Math.max(8, Math.round((progress / span) * 100)));
    remaining = nextRank.minXP - xp;
  }

  return { levelNum, title: currentRank.title, pct, remaining, hasNext: !!nextRank };
}

// ================= 7. RENDERIZADO DE LA INTERFAZ PRINCIPAL =================
function renderAll() {
  if (!state) return;
  SoundFX.enabled = state.soundEnabled;
  updateSoundButton();
  renderSidebarSessionChip();
  renderTopHUD();
  renderSubjectHeaderAndPath();
  renderRightWidgets();
  renderDuelsView();
  renderLeaguesView();
  renderQuestsView();
  renderDatabaseView();
  renderProfileView();
  hydrateFoxerFallbacks();
}

function renderSidebarSessionChip() {
  document.getElementById('sidebar-username-lbl').textContent = `🦊 ${state.username}`;
  document.getElementById('sidebar-goal-lbl').textContent = `Meta ICFES: ${state.goal || '400+'}`;
}

function updateSoundButton() {
  const btn = document.getElementById('btn-sound-toggle');
  if (!btn) return;
  btn.textContent = state.soundEnabled ? '🔊 SONIDO: ACTIVADO' : '🔇 SONIDO: SILENCIADO';
}

function renderTopHUD() {
  const subj = SUBJECTS_DATA[state.currentSubject] || SUBJECTS_DATA.lectura;
  document.getElementById('hud-subject-emoji').textContent = subj.emoji;
  document.getElementById('hud-subject-short').textContent = subj.short;
  document.getElementById('hud-streak-val').textContent = state.streak;
  document.getElementById('hud-gems-val').textContent = state.gems;
  document.getElementById('hud-xp-val').textContent = `${state.xp} XP`;
  document.getElementById('hud-hearts-val').textContent = state.hearts;
}

function renderSubjectHeaderAndPath() {
  const subj = SUBJECTS_DATA[state.currentSubject] || SUBJECTS_DATA.lectura;
  const totalSubjQuestions = getQuestionsForSubject(subj.id).length;

  document.documentElement.style.setProperty('--unit-color', subj.color);
  document.documentElement.style.setProperty('--unit-shadow', subj.shadow);

  document.querySelectorAll('.subject-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subject === state.currentSubject);
  });

  document.getElementById('unit-badge-title').textContent = `MUNDO • ${subj.name.toUpperCase()} (${totalSubjQuestions} PREGUNTAS EN BD)`;
  document.getElementById('unit-main-title').textContent = `${subj.emoji} ${subj.unitTitle}`;
  document.getElementById('unit-competency-desc').textContent = subj.competency;

  const pathContainer = document.getElementById('path-container');
  pathContainer.innerHTML = '';

  const currentUnlockedIdx = state.unlockedNodes[subj.id] || 0;
  const zigZagOffsets = [0, -58, -80, -35, 35, 75, 0];

  let stepCounter = 0;

  subj.nodesMeta.forEach((nodeMeta, idx) => {
    const row = document.createElement('div');
    row.className = 'path-row';

    const offset = zigZagOffsets[stepCounter % zigZagOffsets.length];
    stepCounter++;

    const isCompleted = idx < currentUnlockedIdx;
    const isCurrent = idx === currentUnlockedIdx;
    const isLocked = idx > currentUnlockedIdx;

    const nodeWrap = document.createElement('div');
    nodeWrap.className = 'node-wrapper';
    nodeWrap.style.transform = `translateX(${offset}px)`;

    if (isCurrent) {
      const bubble = document.createElement('div');
      bubble.className = 'start-bubble';
      bubble.textContent = '¡EMPEZAR!';
      nodeWrap.appendChild(bubble);
    }

    const ring = document.createElement('div');
    ring.className = `node-ring ${isCurrent ? 'current-ring' : ''}`;

    const btn = document.createElement('button');
    btn.className = `path-node-btn ${isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'}`;
    btn.innerHTML = isCompleted ? '✓' : isLocked ? '🔒' : nodeMeta.icon;
    btn.title = `${nodeMeta.title} (5 preguntas únicas de este nivel)`;

    btn.addEventListener('click', () => {
      SoundFX.playClick();
      startLesson(subj.id, idx, false);
    });

    ring.appendChild(btn);
    nodeWrap.appendChild(ring);

    const lbl = document.createElement('span');
    lbl.className = 'node-label-pill';
    lbl.textContent = `${idx + 1}. ${nodeMeta.title}`;
    nodeWrap.appendChild(lbl);

    row.appendChild(nodeWrap);

    if (idx === 1 || idx === 3) {
      const companion = document.createElement('div');
      const sideClass = idx === 1 ? 'side-right' : 'side-left';
      companion.className = `path-mascot-companion ${sideClass}`;
      const quoteText = FOXER_PATH_QUOTES[(idx + subj.name.length) % FOXER_PATH_QUOTES.length];

      companion.innerHTML = `
        <div class="companion-avatar">
          <img src="logo-zorro.png" alt="Zorro FOXER" class="foxer-img-logo" style="width:76px;height:76px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <div class="foxer-svg-fallback" style="display:none;" data-fox-pose="${idx === 1 ? 'happy' : 'cool'}"></div>
        </div>
        <div class="companion-bubble">${quoteText}</div>
      `;
      companion.addEventListener('click', () => {
        SoundFX.playCorrect();
        showToast(`🦊 FOXER: "¡Vamos por ese ${state.goal} en el Saber 11, ${state.username}!"`);
      });
      row.appendChild(companion);
    }

    pathContainer.appendChild(row);

    // Cofres de Tesoro intercalados
    if (idx === 1 || idx === 3) {
      const chestKey = `${subj.id}-${idx}`;
      const isOpened = !!state.openedChests[chestKey];
      const canOpen = currentUnlockedIdx > idx && !isOpened;

      const chestRow = document.createElement('div');
      chestRow.className = 'path-row';

      const chestWrap = document.createElement('div');
      chestWrap.className = 'node-wrapper';
      const chestOffset = zigZagOffsets[stepCounter % zigZagOffsets.length];
      stepCounter++;
      chestWrap.style.transform = `translateX(${chestOffset}px)`;

      const chestBtn = document.createElement('button');
      chestBtn.className = `chest-node-btn ${isOpened ? 'opened' : canOpen ? 'ready' : ''}`;
      chestBtn.innerHTML = isOpened ? '💎' : '🎁';

      chestBtn.addEventListener('click', () => {
        if (isOpened) {
          SoundFX.playClick();
          showToast('💎 Ya reclamaste el tesoro de este cofre.');
          return;
        }
        if (canOpen) {
          state.openedChests[chestKey] = true;
          state.gems += 30;
          state.xp += 25;
          state.quests.xpEarnedToday += 25;
          saveState();
          SoundFX.playFanfare();
          showToast('🎁 ¡Cofre abierto! Ganaste +30 Gemas 💎 y +25 XP ⚡');
          renderAll();
        } else {
          SoundFX.playClick();
          showToast('🔒 Completa el nivel anterior para abrir este cofre (+30 💎).');
        }
      });

      const chestLbl = document.createElement('span');
      chestLbl.className = 'node-label-pill';
      chestLbl.textContent = isOpened ? 'Tesoro reclamado' : 'Cofre de Astucia';

      chestWrap.appendChild(chestBtn);
      chestWrap.appendChild(chestLbl);
      chestRow.appendChild(chestWrap);
      pathContainer.appendChild(chestRow);
    }
  });
}

// ================= 8. WIDGETS DE LA COLUMNA DERECHA Y LIGA MULTI-USUARIO =================
function getLeaderboardList() {
  const list = BASE_COMPETITORS.map(c => ({ ...c, isPlayer: false }));
  const allAccounts = Object.values(getAllAccountsMap());

  allAccounts.forEach(acc => {
    const isCurrent = state && acc.id === state.id;
    list.push({
      name: isCurrent ? `${acc.username} (Tú)` : `${acc.username} (${acc.school || 'FOXER'})`,
      avatar: isCurrent ? '🦊' : '🎓',
      xp: acc.xp,
      isPlayer: isCurrent
    });
  });

  list.sort((a, b) => b.xp - a.xp);
  return list;
}

function renderRightWidgets() {
  const cunning = getCunningInfo(state.xp);
  document.getElementById('widget-cunning-lvl').textContent = `Nv. ${cunning.levelNum}`;
  document.getElementById('widget-cunning-title').textContent = cunning.title;
  document.getElementById('widget-cunning-bar').style.width = `${cunning.pct}%`;
  document.getElementById('widget-cunning-next').textContent = cunning.hasNext
    ? `Faltan ${cunning.remaining} XP para el siguiente rango`
    : '¡Alcanzaste el rango máximo de Astucia ICFES!';

  const boardContainer = document.getElementById('widget-leaderboard');
  const sorted = getLeaderboardList();
  boardContainer.innerHTML = sorted
    .slice(0, 6)
    .map((item, i) => `
      <div class="leader-row ${item.isPlayer ? 'is-player' : ''}">
        <div class="leader-left">
          <span class="leader-rank ${i < 3 ? `rank-${i + 1}` : ''}">${i + 1}</span>
          <span class="leader-avatar">${item.avatar}</span>
          <span class="leader-name">${item.name}</span>
        </div>
        <span class="leader-xp">${item.xp} XP</span>
      </div>
    `)
    .join('');

  const questsData = getDailyQuestsProgress();
  const widgetQuests = document.getElementById('widget-quests');
  widgetQuests.innerHTML = questsData
    .map(q => `
      <div class="quest-mini-item">
        <div class="quest-mini-icon">${q.icon}</div>
        <div class="quest-mini-info">
          <div class="quest-mini-top">
            <span>${q.title}</span>
            <span>${q.current} / ${q.target}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill ${q.pct >= 100 ? 'green-fill' : 'orange-fill'}" style="width: ${q.pct}%;"></div>
          </div>
        </div>
      </div>
    `)
    .join('');
}

function getDailyQuestsProgress() {
  const q1Curr = Math.min(50, state.quests.xpEarnedToday);
  const q2Curr = Math.min(1, state.quests.perfectLessonsToday);
  const q3Curr = Math.min(5, state.maxComboReached);

  return [
    {
      id: 'q1',
      icon: '⚡',
      title: 'Gana 50 XP de Astucia',
      desc: 'Responde preguntas en cualquier área del Saber 11.',
      current: q1Curr,
      target: 50,
      pct: Math.round((q1Curr / 50) * 100),
      rewardGems: 25,
      claimed: !!state.quests.claimed.q1
    },
    {
      id: 'q2',
      icon: '🎯',
      title: 'Haz 1 simulacro perfecto',
      desc: 'Termina un nodo del mapa con 100% de precisión.',
      current: q2Curr,
      target: 1,
      pct: Math.round((q2Curr / 1) * 100),
      rewardGems: 40,
      claimed: !!state.quests.claimed.q2
    },
    {
      id: 'q3',
      icon: '🔥',
      title: 'Acierta 5 preguntas seguidas',
      desc: 'Alcanza una racha de 5 aciertos consecutivos.',
      current: q3Curr,
      target: 5,
      pct: Math.round((q3Curr / 5) * 100),
      rewardGems: 35,
      claimed: !!state.quests.claimed.q3
    }
  ];
}

// ================= 9. VISTAS SECUNDARIAS Y EXPLORADOR DE BASE DE DATOS (125+ PREGUNTAS) =================
function renderDuelsView() {
  const totalCount = getTotalQuestionsCount();
  document.getElementById('duel-best-score').textContent = state.bestDuelScore;
  document.getElementById('duel-total-db-count').textContent = totalCount;

  const grid = document.getElementById('duel-subject-grid');
  grid.innerHTML = Object.values(SUBJECTS_DATA)
    .map(s => {
      const count = getQuestionsForSubject(s.id).length;
      return `
      <div class="duel-area-card">
        <div style="font-size: 2rem;">${s.emoji}</div>
        <h4>${s.name}</h4>
        <p style="font-size: 0.84rem; color: var(--text-muted); flex: 1;">
          Sorteo aleatorio de 10 preguntas del banco de <strong>${count} preguntas</strong> de ${s.name}.
        </p>
        <button class="btn-3d btn-outline-gray btn-sm" onclick="startMarathonSubject('${s.id}')">
          ⚡ MARATÓN DE 10 PREGUNTAS
        </button>
      </div>
    `;
    })
    .join('');
}

function renderLeaguesView() {
  const container = document.getElementById('league-full-container');
  const sorted = getLeaderboardList();
  container.innerHTML = sorted
    .map((item, idx) => `
      <div class="quest-card-large" style="${item.isPlayer ? 'border-color: var(--fox-orange); background: var(--fox-orange-light);' : ''}">
        <div class="leader-left" style="gap: 16px;">
          <span class="leader-rank ${idx < 3 ? `rank-${idx + 1}` : ''}" style="width: 34px; height: 34px; font-size: 0.95rem;">${idx + 1}</span>
          <span style="font-size: 1.8rem;">${item.avatar}</span>
          <div>
            <div style="font-size: 1.05rem; font-weight: 900;">${item.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${idx < 3 ? '🔥 En zona de ascenso' : 'División Zorro Dorado'}</div>
          </div>
        </div>
        <div style="font-size: 1.15rem; font-weight: 900; color: var(--fox-orange);">${item.xp} XP</div>
      </div>
    `)
    .join('');
}

function renderQuestsView() {
  const container = document.getElementById('quests-full-container');
  const quests = getDailyQuestsProgress();
  container.innerHTML = quests
    .map(q => {
      const canClaim = q.pct >= 100 && !q.claimed;
      return `
        <div class="quest-card-large">
          <div style="font-size: 2.3rem;">${q.icon}</div>
          <div style="flex: 1;">
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <h3 style="font-size: 1.08rem;">${q.title}</h3>
              <span style="font-weight:900; color:var(--fox-orange);">${q.current} / ${q.target}</span>
            </div>
            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 10px;">${q.desc}</p>
            <div class="progress-track">
              <div class="progress-fill ${q.pct >= 100 ? 'green-fill' : 'orange-fill'}" style="width: ${q.pct}%;"></div>
            </div>
          </div>
          <div>
            ${
              q.claimed
                ? `<span class="btn-3d btn-disabled btn-sm">✓ RECLAMADO</span>`
                : canClaim
                ? `<button class="btn-3d btn-green btn-sm" onclick="claimQuestReward('${q.id}', ${q.rewardGems})">🎁 RECLAMAR +${q.rewardGems} 💎</button>`
                : `<span class="btn-3d btn-outline-gray btn-sm">💎 +${q.rewardGems}</span>`
            }
          </div>
        </div>
      `;
    })
    .join('');
}

window.claimQuestReward = function (questId, gemsAmount) {
  if (state.quests.claimed[questId]) return;
  state.quests.claimed[questId] = true;
  state.gems += gemsAmount;
  saveState();
  SoundFX.playFanfare();
  showToast(`🎉 ¡Misión cumplida! Recibiste +${gemsAmount} Gemas 💎`);
  renderAll();
};

// Renderizado del Explorador de Base de Datos (125+ preguntas)
function renderDatabaseView() {
  const totalCount = getTotalQuestionsCount();
  const counterEl = document.getElementById('db-total-counter');
  if (counterEl) counterEl.textContent = totalCount;

  const stripEl = document.getElementById('db-stats-strip');
  if (stripEl) {
    stripEl.innerHTML = Object.values(SUBJECTS_DATA)
      .map(s => {
        const c = getQuestionsForSubject(s.id).length;
        return `
        <div class="db-stat-pill">
          <div class="count">${s.emoji} ${c}</div>
          <span class="lbl">${s.name}</span>
        </div>
      `;
      })
      .join('');
  }

  filterAndRenderDatabaseList();
}

function filterAndRenderDatabaseList() {
  const listEl = document.getElementById('db-questions-list');
  if (!listEl) return;

  const subjFilter = document.getElementById('db-filter-subject').value;
  const searchQuery = (document.getElementById('db-search-input').value || '').trim().toLowerCase();

  let allItems = [];
  Object.values(SUBJECTS_DATA).forEach(s => {
    if (subjFilter !== 'all' && subjFilter !== s.id) return;
    const qs = getQuestionsForSubject(s.id);
    qs.forEach(q => {
      allItems.push({ ...q, subjectName: s.name, subjectEmoji: s.emoji });
    });
  });

  if (searchQuery) {
    allItems = allItems.filter(
      item =>
        (item.id && item.id.toLowerCase().includes(searchQuery)) ||
        (item.comp && item.comp.toLowerCase().includes(searchQuery)) ||
        (item.context && item.context.toLowerCase().includes(searchQuery)) ||
        (item.stem && item.stem.toLowerCase().includes(searchQuery))
    );
  }

  const letters = ['A', 'B', 'C', 'D'];
  listEl.innerHTML = allItems
    .map(
      item => `
      <div class="db-question-card">
        <div class="db-q-top">
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span class="question-area-tag">${item.subjectEmoji} ${item.subjectName}</span>
            <span class="question-comp-tag">${item.comp}</span>
          </div>
          <span class="question-id-tag">${item.id || 'CUSTOM'} • Nodo ${(item.node || 0) + 1}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 6px;">${item.context}</p>
        <p style="font-size: 0.96rem; font-weight: 900; color: var(--navy-dark); margin-bottom: 8px;">${item.stem}</p>
        <div style="font-size: 0.84rem; color: var(--duo-green-text); font-weight: 800;">
          ✓ Respuesta Correcta (${letters[item.correct]}): ${item.options[item.correct]}
        </div>
      </div>
    `
    )
    .join('');
}

function openAddQuestionModal() {
  SoundFX.playClick();
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = '➕ Agregar Nueva Pregunta a la Base de Datos';

  const body = document.getElementById('modal-body-content');
  body.innerHTML = `
    <form id="form-add-custom-q" style="display:flex; flex-direction:column; gap:10px;">
      <div class="input-row-2">
        <div class="input-group">
          <label>Área del ICFES</label>
          <select id="cq-subject" class="input-duo">
            <option value="lectura">📖 Lectura Crítica</option>
            <option value="matematicas">📐 Matemáticas</option>
            <option value="ciencias">🧪 Ciencias Naturales</option>
            <option value="sociales">🌎 Sociales y Ciudadanas</option>
            <option value="ingles">🇬🇧 Inglés</option>
          </select>
        </div>
        <div class="input-group">
          <label>Nodo del Camino (1 al 5)</label>
          <select id="cq-node" class="input-duo">
            <option value="0">Nodo 1</option>
            <option value="1">Nodo 2</option>
            <option value="2">Nodo 3</option>
            <option value="3">Nodo 4</option>
            <option value="4">Nodo 5 (Jefe)</option>
          </select>
        </div>
      </div>
      <div class="input-group">
        <label>Competencia Evaluada</label>
        <input type="text" id="cq-comp" class="input-duo" placeholder="Ej: Razonamiento Cuantitativo" required />
      </div>
      <div class="input-group">
        <label>Contexto o Lectura de la Pregunta</label>
        <textarea id="cq-context" class="input-duo" rows="2" placeholder="Escribe el texto o situación problema..." required></textarea>
      </div>
      <div class="input-group">
        <label>Enunciado / Pregunta</label>
        <input type="text" id="cq-stem" class="input-duo" placeholder="¿Cuál es la pregunta?" required />
      </div>
      <div class="input-row-2">
        <input type="text" id="cq-opt0" class="input-duo" placeholder="Opción A" required />
        <input type="text" id="cq-opt1" class="input-duo" placeholder="Opción B" required />
      </div>
      <div class="input-row-2">
        <input type="text" id="cq-opt2" class="input-duo" placeholder="Opción C" required />
        <input type="text" id="cq-opt3" class="input-duo" placeholder="Opción D" required />
      </div>
      <div class="input-row-2">
        <div class="input-group">
          <label>Opción Correcta</label>
          <select id="cq-correct" class="input-duo">
            <option value="0">Opción A</option>
            <option value="1">Opción B</option>
            <option value="2">Opción C</option>
            <option value="3">Opción D</option>
          </select>
        </div>
        <div class="input-group">
          <label>Explicación Pedagógica</label>
          <input type="text" id="cq-exp" class="input-duo" placeholder="¿Por qué es correcta?" required />
        </div>
      </div>
    </form>
  `;

  const footer = document.getElementById('modal-footer-actions');
  footer.innerHTML = `
    <button class="btn-3d btn-outline-gray" onclick="closeModal()">CANCELAR</button>
    <button class="btn-3d btn-green" onclick="saveCustomQuestionFromModal()">💾 GUARDAR EN BASE DE DATOS</button>
  `;
  overlay.classList.remove('hidden');
}

window.saveCustomQuestionFromModal = function () {
  const subj = document.getElementById('cq-subject').value;
  const node = parseInt(document.getElementById('cq-node').value, 10) || 0;
  const comp = document.getElementById('cq-comp').value.trim();
  const context = document.getElementById('cq-context').value.trim();
  const stem = document.getElementById('cq-stem').value.trim();
  const opt0 = document.getElementById('cq-opt0').value.trim();
  const opt1 = document.getElementById('cq-opt1').value.trim();
  const opt2 = document.getElementById('cq-opt2').value.trim();
  const opt3 = document.getElementById('cq-opt3').value.trim();
  const correct = parseInt(document.getElementById('cq-correct').value, 10) || 0;
  const explanation = document.getElementById('cq-exp').value.trim();

  if (!comp || !context || !stem || !opt0 || !opt1 || !opt2 || !opt3 || !explanation) {
    showToast('⚠️ Completa todos los campos de la pregunta.');
    return;
  }

  let customMap = {};
  try {
    const raw = localStorage.getItem(CUSTOM_QUESTIONS_KEY);
    if (raw) customMap = JSON.parse(raw);
  } catch (e) {}

  if (!customMap[subj]) customMap[subj] = [];
  const newId = `${subj.slice(0, 3).toUpperCase()}-${26 + customMap[subj].length}`;

  customMap[subj].push({
    id: newId,
    node,
    comp,
    context,
    stem,
    options: [opt0, opt1, opt2, opt3],
    correct,
    explanation
  });

  localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(customMap));
  SoundFX.playFanfare();
  closeModal();
  renderAll();
  showToast(`✅ Pregunta ${newId} guardada en la Base de Datos.`);
};

function renderProfileView() {
  const cunning = getCunningInfo(state.xp);
  document.getElementById('profile-username').textContent = state.username;
  document.getElementById('profile-user-details').textContent = `@${state.loginId} • ${state.school} • Meta ICFES: ${state.goal}`;
  document.getElementById('profile-cunning-rank').textContent = `🦊 Nivel de Astucia: ${cunning.title}`;
  document.getElementById('prof-stat-streak').textContent = state.streak;
  document.getElementById('prof-stat-xp').textContent = state.xp;
  document.getElementById('prof-stat-gems').textContent = state.gems;

  const totalUnlocked = Object.values(state.unlockedNodes).reduce((acc, v) => acc + v, 0);
  document.getElementById('prof-stat-nodes').textContent = `${totalUnlocked} / 25`;

  const achievements = [
    {
      icon: '🔥',
      title: 'Astucia en Llamas',
      desc: 'Mantén tu racha activa estudiando en FOXER.',
      unlocked: state.streak >= 1
    },
    {
      icon: '🎯',
      title: 'Francotirador Saber 11',
      desc: 'Completa un simulacro sin cometer ningún error (100%).',
      unlocked: state.perfectLessons >= 1
    },
    {
      icon: '⚡',
      title: 'Zorro Centurión',
      desc: 'Supera los 150 puntos XP de Astucia.',
      unlocked: state.xp >= 150
    },
    {
      icon: '👑',
      title: 'Explorador Multidisciplinar',
      desc: 'Avanza al menos 1 nivel en 3 áreas distintas del ICFES.',
      unlocked: Object.values(state.unlockedNodes).filter(v => v >= 1).length >= 3
    }
  ];

  const achContainer = document.getElementById('achievements-container');
  achContainer.innerHTML = achievements
    .map(a => `
      <div class="achievement-card ${a.unlocked ? 'unlocked' : ''}">
        <div class="ach-medal">${a.icon}</div>
        <div>
          <h4 style="font-size: 0.96rem;">${a.title}</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">${a.desc}</p>
        </div>
      </div>
    `)
    .join('');
}

// ================= 10. MOTOR DE LA PANTALLA DE JUEGO / SIMULACRO =================
let activeSession = null;

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

window.startMarathonSubject = function (subjectId) {
  SoundFX.playClick();
  startLesson(subjectId, 0, false, 10);
};

window.startLesson = function (subjectId, nodeIndex = 0, isDuelMode = false, customCount = 5) {
  if (state.hearts <= 0 && !isDuelMode) {
    openHeartsModal();
    return;
  }

  let pool = [];
  if (isDuelMode) {
    // Mezclar las 125+ preguntas de las 5 áreas del Saber 11
    Object.values(SUBJECTS_DATA).forEach(subj => {
      const qs = getQuestionsForSubject(subj.id);
      qs.forEach(q => {
        pool.push({ ...q, subjectName: subj.name, subjectEmoji: subj.emoji, subjectId: subj.id });
      });
    });
    pool = shuffleArray(pool).slice(0, 12);
  } else {
    const subj = SUBJECTS_DATA[subjectId];
    const allSubjQuestions = getQuestionsForSubject(subjectId).map(q => ({
      ...q,
      subjectName: subj.name,
      subjectEmoji: subj.emoji,
      subjectId: subj.id
    }));

    if (customCount > 5) {
      // Maratón aleatorio de 10 preguntas del área
      pool = shuffleArray(allSubjQuestions).slice(0, customCount);
    } else {
      // Cada nodo (0 al 4) tiene sus propias 5 preguntas exclusivas dentro de las 25 del área
      const nodeSpecific = allSubjQuestions.filter(q => q.node === nodeIndex);
      if (nodeSpecific.length >= 5) {
        pool = nodeSpecific.slice(0, 5);
      } else {
        const startSlice = (nodeIndex * 5) % Math.max(1, allSubjQuestions.length);
        pool = allSubjQuestions.slice(startSlice, startSlice + 5);
      }
    }
  }

  activeSession = {
    subjectId,
    nodeIndex,
    isDuelMode,
    questions: pool,
    currentIndex: 0,
    selectedOption: null,
    hasChecked: false,
    correctCount: 0,
    answeredCount: 0,
    combo: 0,
    timeLeft: 90,
    timerId: null
  };

  document.getElementById('app-layout').classList.add('hidden');
  document.getElementById('lesson-screen').classList.remove('hidden');
  document.getElementById('lesson-question-stage').classList.remove('hidden');
  document.getElementById('lesson-victory-stage').classList.add('hidden');
  document.getElementById('lesson-footer').classList.remove('hidden');

  const timerPill = document.getElementById('lesson-timer-pill');
  if (isDuelMode) {
    timerPill.classList.remove('hidden');
    document.getElementById('lesson-timer-val').textContent = activeSession.timeLeft;
    activeSession.timerId = setInterval(() => {
      activeSession.timeLeft--;
      document.getElementById('lesson-timer-val').textContent = activeSession.timeLeft;
      if (activeSession.timeLeft <= 0) {
        clearInterval(activeSession.timerId);
        finishLesson();
      }
    }, 1000);
  } else {
    timerPill.classList.add('hidden');
  }

  renderCurrentQuestion();
};

function renderCurrentQuestion() {
  if (!activeSession) return;
  const q = activeSession.questions[activeSession.currentIndex];
  activeSession.selectedOption = null;
  activeSession.hasChecked = false;

  const pct = Math.round((activeSession.currentIndex / activeSession.questions.length) * 100);
  const progressBar = document.getElementById('lesson-progress-bar');
  progressBar.style.width = `${pct}%`;
  progressBar.classList.toggle('on-fire', activeSession.combo >= 2);

  const comboBadge = document.getElementById('combo-badge');
  if (activeSession.combo >= 2) {
    comboBadge.textContent = `🔥 ¡${activeSession.combo} SEGUIDAS!`;
    comboBadge.classList.remove('hidden');
  } else {
    comboBadge.classList.add('hidden');
  }

  document.getElementById('lesson-hearts-count').textContent = state.hearts;

  document.getElementById('q-area-tag').textContent = `${q.subjectEmoji} ${q.subjectName.toUpperCase()}`;
  document.getElementById('q-comp-tag').textContent = q.comp;
  document.getElementById('q-id-tag').textContent = `#${q.id || 'ICFES'}`;
  document.getElementById('q-context-box').textContent = q.context;
  document.getElementById('q-stem-text').textContent = q.stem;

  const foxFallback = document.querySelector('#lesson-fox-avatar .foxer-svg-fallback');
  if (foxFallback) {
    foxFallback.setAttribute('data-fox-pose', 'thinking');
    foxFallback.innerHTML = getFoxerSVG('thinking');
  }

  const letters = ['A', 'B', 'C', 'D'];
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-card-btn';
    btn.dataset.index = idx;
    btn.innerHTML = `
      <span class="option-key-box">${idx + 1}</span>
      <div>
        <span class="option-letter-badge">${letters[idx]}.</span>
        <span>${optText}</span>
      </div>
    `;
    btn.addEventListener('click', () => selectOption(idx));
    optionsContainer.appendChild(btn);
  });

  const footer = document.getElementById('lesson-footer');
  footer.className = 'lesson-footer';
  document.getElementById('footer-normal-controls').classList.remove('hidden');
  document.getElementById('footer-feedback-panel').classList.add('hidden');

  const checkBtn = document.getElementById('btn-check-answer');
  checkBtn.disabled = true;
  checkBtn.className = 'btn-3d btn-disabled';
}

function selectOption(idx) {
  if (!activeSession || activeSession.hasChecked) return;
  SoundFX.playClick();
  activeSession.selectedOption = idx;

  document.querySelectorAll('.option-card-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === idx);
  });

  const checkBtn = document.getElementById('btn-check-answer');
  checkBtn.disabled = false;
  checkBtn.className = 'btn-3d btn-green';
}

function checkCurrentAnswer() {
  if (!activeSession || activeSession.hasChecked || activeSession.selectedOption === null) return;
  activeSession.hasChecked = true;
  activeSession.answeredCount++;

  const q = activeSession.questions[activeSession.currentIndex];
  const chosen = activeSession.selectedOption;
  const isCorrect = chosen === q.correct;
  const letters = ['A', 'B', 'C', 'D'];

  document.querySelectorAll('.option-card-btn').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add('correct-choice');
    } else if (idx === chosen && !isCorrect) {
      btn.classList.add('wrong-choice');
    }
  });

  const footer = document.getElementById('lesson-footer');
  const normalControls = document.getElementById('footer-normal-controls');
  const feedbackPanel = document.getElementById('footer-feedback-panel');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackExplanation = document.getElementById('feedback-explanation');
  const continueBtn = document.getElementById('btn-continue-question');
  const foxFallback = document.querySelector('#lesson-fox-avatar .foxer-svg-fallback');

  normalControls.classList.add('hidden');
  feedbackPanel.classList.remove('hidden');

  if (isCorrect) {
    SoundFX.playCorrect();
    activeSession.correctCount++;
    activeSession.combo++;
    if (activeSession.combo > state.maxComboReached) {
      state.maxComboReached = activeSession.combo;
    }
    if (activeSession.combo >= 5) {
      state.quests.comboFiveReached = true;
    }

    footer.className = 'lesson-footer feedback-correct';
    feedbackIcon.textContent = '✓';
    const praiseList = ['¡Excelente astucia!', '¡Lectura impecable!', '¡Nivel Saber 11 superior!', '¡Justo en el blanco!'];
    feedbackTitle.textContent = praiseList[activeSession.combo % praiseList.length];
    feedbackExplanation.innerHTML = `<strong>¿Por qué es la ${letters[q.correct]}?</strong> ${q.explanation}`;
    continueBtn.className = 'btn-3d btn-green';

    if (foxFallback) {
      foxFallback.setAttribute('data-fox-pose', 'happy');
      foxFallback.innerHTML = getFoxerSVG('happy');
    }
  } else {
    SoundFX.playWrong();
    activeSession.combo = 0;
    if (!activeSession.isDuelMode && state.hearts > 0) {
      state.hearts--;
      saveState();
    }
    document.getElementById('lesson-hearts-count').textContent = state.hearts;

    footer.className = 'lesson-footer feedback-wrong';
    feedbackIcon.textContent = '✕';
    feedbackTitle.textContent = `Respuesta correcta: Opción ${letters[q.correct]}`;
    feedbackExplanation.innerHTML = `<strong>Explicación Pedagógica FOXER:</strong> ${q.explanation}`;
    continueBtn.className = 'btn-3d btn-red';

    if (foxFallback) {
      foxFallback.setAttribute('data-fox-pose', 'sad');
      foxFallback.innerHTML = getFoxerSVG('sad');
    }
  }

  const progressBar = document.getElementById('lesson-progress-bar');
  progressBar.classList.toggle('on-fire', activeSession.combo >= 2);
  const comboBadge = document.getElementById('combo-badge');
  if (activeSession.combo >= 2) {
    comboBadge.textContent = `🔥 ¡${activeSession.combo} SEGUIDAS!`;
    comboBadge.classList.remove('hidden');
  } else {
    comboBadge.classList.add('hidden');
  }
}

function nextQuestionOrFinish() {
  if (!activeSession) return;

  if (!activeSession.isDuelMode && state.hearts <= 0) {
    quitLesson();
    openHeartsModal();
    return;
  }

  activeSession.currentIndex++;
  if (activeSession.currentIndex >= activeSession.questions.length) {
    finishLesson();
  } else {
    renderCurrentQuestion();
  }
}

function skipCurrentQuestion() {
  if (!activeSession || activeSession.hasChecked) return;
  SoundFX.playClick();
  activeSession.combo = 0;
  activeSession.answeredCount++;
  activeSession.currentIndex++;
  if (activeSession.currentIndex >= activeSession.questions.length) {
    finishLesson();
  } else {
    renderCurrentQuestion();
  }
}

function finishLesson() {
  if (!activeSession) return;
  if (activeSession.timerId) clearInterval(activeSession.timerId);

  SoundFX.playFanfare();

  const progressBar = document.getElementById('lesson-progress-bar');
  progressBar.style.width = '100%';

  const totalQ = Math.max(1, activeSession.questions.length);
  const accuracy = Math.round((activeSession.correctCount / totalQ) * 100);
  const xpEarned = activeSession.correctCount * (activeSession.isDuelMode ? 15 : 12) + (accuracy === 100 ? 15 : 0);
  const gemsEarned = activeSession.correctCount * 3 + (accuracy === 100 ? 10 : 0);

  state.xp += xpEarned;
  state.gems += gemsEarned;
  state.quests.xpEarnedToday += xpEarned;

  if (accuracy === 100 && activeSession.correctCount > 0) {
    state.perfectLessons++;
    state.quests.perfectLessonsToday++;
  }

  if (activeSession.isDuelMode) {
    if (activeSession.correctCount > state.bestDuelScore) {
      state.bestDuelScore = activeSession.correctCount;
    }
  } else {
    const currUnlocked = state.unlockedNodes[activeSession.subjectId] || 0;
    if (activeSession.nodeIndex >= currUnlocked && currUnlocked < 5) {
      state.unlockedNodes[activeSession.subjectId] = currUnlocked + 1;
    }
  }

  saveState();

  document.getElementById('lesson-question-stage').classList.add('hidden');
  document.getElementById('lesson-footer').classList.add('hidden');
  const victoryStage = document.getElementById('lesson-victory-stage');
  victoryStage.classList.remove('hidden');

  document.getElementById('victory-heading').textContent =
    accuracy === 100
      ? '¡Simulacro Perfecto! ¡Astucia Imparable!'
      : '¡Lección completada con astucia!';
  document.getElementById('victory-subheading').textContent = activeSession.isDuelMode
    ? `Lograste ${activeSession.correctCount} aciertos en el Duelo Contrarreloj.`
    : `Progreso guardado en la cuenta de ${state.username}.`;

  document.getElementById('victory-xp').textContent = `+${xpEarned}`;
  document.getElementById('victory-accuracy').textContent = `${accuracy}%`;
  document.getElementById('victory-gems').textContent = `+${gemsEarned}`;

  hydrateFoxerFallbacks();
}

function quitLesson() {
  if (activeSession && activeSession.timerId) {
    clearInterval(activeSession.timerId);
  }
  activeSession = null;
  document.getElementById('lesson-screen').classList.add('hidden');
  document.getElementById('app-layout').classList.remove('hidden');
  renderAll();
}

// ================= 11. MODALES (GUÍA DE LA UNIDAD Y RECARGA DE VIDAS) =================
function openUnitGuideModal() {
  SoundFX.playClick();
  const subj = SUBJECTS_DATA[state.currentSubject];
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = `📘 Guía Estratégica: ${subj.name}`;

  const body = document.getElementById('modal-body-content');
  body.innerHTML = `
    <p style="margin-bottom: 16px; color: var(--text-muted);">
      Domina los secretos que evalúa el ICFES en <strong>${subj.name}</strong> con los trucos del Zorro FOXER:
    </p>
    ${subj.guideTips
      .map(
        t => `
      <div class="guide-tip-box">
        <h4>${t.title}</h4>
        <p style="font-size: 0.9rem;">${t.text}</p>
      </div>
    `
      )
      .join('')}
  `;

  const footer = document.getElementById('modal-footer-actions');
  footer.innerHTML = `<button class="btn-3d btn-orange" onclick="closeModal()">¡LISTO PARA PRACTICAR!</button>`;
  overlay.classList.remove('hidden');
}

function openHeartsModal() {
  SoundFX.playClick();
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = '❤️ Tus Vidas de Concentración';

  const body = document.getElementById('modal-body-content');
  body.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <div style="font-size: 3rem; margin-bottom: 8px;">${'❤️'.repeat(state.hearts)}${'🤍'.repeat(5 - state.hearts)}</div>
      <h3 style="margin-bottom: 6px;">Tienes ${state.hearts} de 5 vidas disponibles</h3>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 20px;">
        Cada error en un simulacro resta 1 corazón para entrenarte a leer con calma como en el examen real. ¡Recárgalas cuando quieras!
      </p>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <button class="btn-3d btn-green" onclick="refillHeartsFree()">
          ⚡ RECARGAR 5 VIDAS GRATIS (MODO ESTUDIO)
        </button>
        <button class="btn-3d btn-orange" onclick="refillHeartsWithGems()">
          💎 RECARGAR CON 30 GEMAS (Tienes ${state.gems} 💎)
        </button>
      </div>
    </div>
  `;

  const footer = document.getElementById('modal-footer-actions');
  footer.innerHTML = `<button class="btn-3d btn-outline-gray" onclick="closeModal()">CERRAR</button>`;
  overlay.classList.remove('hidden');
}

window.refillHeartsFree = function () {
  state.hearts = 5;
  saveState();
  SoundFX.playFanfare();
  showToast('❤️ ¡Vidas recargadas al máximo (5/5)!');
  closeModal();
  renderAll();
};

window.refillHeartsWithGems = function () {
  if (state.hearts >= 5) {
    showToast('❤️ ¡Ya tienes todas tus vidas llenas!');
    closeModal();
    return;
  }
  if (state.gems < 30) {
    showToast('💎 No tienes suficientes gemas, ¡usa la recarga gratuita de estudio!');
    return;
  }
  state.gems -= 30;
  state.hearts = 5;
  saveState();
  SoundFX.playFanfare();
  showToast('❤️ ¡Vidas restauradas con tus Gemas!');
  closeModal();
  renderAll();
};

window.closeModal = function () {
  document.getElementById('modal-overlay').classList.add('hidden');
};

// ================= 12. EVENT LISTENERS INICIALES =================
document.addEventListener('DOMContentLoaded', () => {
  hydrateFoxerFallbacks();
  loadActiveSessionOrShowAuth();

  // Tabs Login vs Registro
  const tabLogin = document.getElementById('tab-btn-login');
  const tabRegister = document.getElementById('tab-btn-register');
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');

  tabLogin.addEventListener('click', () => {
    SoundFX.playClick();
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    formLogin.classList.remove('hidden');
    formRegister.classList.add('hidden');
  });

  tabRegister.addEventListener('click', () => {
    SoundFX.playClick();
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    formRegister.classList.remove('hidden');
    formLogin.classList.add('hidden');
  });

  formLogin.addEventListener('submit', handleLoginSubmit);
  formRegister.addEventListener('submit', handleRegisterSubmit);
  document.getElementById('btn-guest-access').addEventListener('click', handleGuestAccess);

  // Cerrar sesión / Cambiar cuenta
  document.getElementById('btn-logout-sidebar').addEventListener('click', logoutCurrentAccount);
  document.getElementById('btn-switch-account').addEventListener('click', logoutCurrentAccount);

  // Navegación Barra Lateral Izquierda
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      SoundFX.playClick();
      switchMainView(btn.dataset.view);
    });
  });

  document.querySelectorAll('.link-btn[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => {
      SoundFX.playClick();
      switchMainView(btn.dataset.goto);
    });
  });

  document.getElementById('brand-home-btn').addEventListener('click', () => {
    SoundFX.playClick();
    switchMainView('learn');
  });

  // Selector de las 5 Áreas del ICFES
  document.querySelectorAll('.subject-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      SoundFX.playClick();
      state.currentSubject = tab.dataset.subject;
      saveState();
      renderAll();
    });
  });

  // Sonido ON/OFF
  document.getElementById('btn-sound-toggle').addEventListener('click', () => {
    if (!state) return;
    state.soundEnabled = !state.soundEnabled;
    SoundFX.enabled = state.soundEnabled;
    saveState();
    updateSoundButton();
    if (state.soundEnabled) SoundFX.playCorrect();
  });

  // Guía de Unidad y Vidas
  document.getElementById('btn-open-guide').addEventListener('click', openUnitGuideModal);
  document.getElementById('btn-hearts-modal').addEventListener('click', openHeartsModal);
  document.getElementById('btn-close-modal').addEventListener('click', closeModal);

  // Explorador de Base de Datos y Agregar Pregunta
  document.getElementById('db-filter-subject').addEventListener('change', filterAndRenderDatabaseList);
  document.getElementById('db-search-input').addEventListener('input', filterAndRenderDatabaseList);
  document.getElementById('btn-open-add-question').addEventListener('click', openAddQuestionModal);

  // Duelo Contrarreloj
  document.getElementById('btn-start-duel').addEventListener('click', () => {
    SoundFX.playClick();
    startLesson(state.currentSubject, 0, true);
  });

  // Controles de Lección
  document.getElementById('btn-quit-lesson').addEventListener('click', () => {
    SoundFX.playClick();
    quitLesson();
  });
  document.getElementById('btn-check-answer').addEventListener('click', checkCurrentAnswer);
  document.getElementById('btn-continue-question').addEventListener('click', nextQuestionOrFinish);
  document.getElementById('btn-skip-question').addEventListener('click', skipCurrentQuestion);
  document.getElementById('btn-victory-continue').addEventListener('click', () => {
    SoundFX.playClick();
    quitLesson();
  });

  // Editar nombre en Perfil
  document.getElementById('btn-edit-name').addEventListener('click', () => {
    const newName = prompt('Ingresa tu nombre o apodo de aspirante Saber 11:', state.username);
    if (newName && newName.trim().length > 0) {
      state.username = newName.trim().slice(0, 24);
      saveState();
      renderAll();
      showToast(`🦊 ¡Perfil actualizado, ${state.username}!`);
    }
  });

  // Exportar copia de seguridad JSON de la cuenta
  document.getElementById('btn-export-account').addEventListener('click', () => {
    if (!state) return;
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cuenta_foxer_${state.loginId}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('💾 Copia de seguridad descargada.');
  });

  // Reiniciar progreso de la cuenta actual
  document.getElementById('btn-reset-progress').addEventListener('click', () => {
    if (!state) return;
    if (confirm(`¿Quieres reiniciar a cero las estadísticas y nodos de la cuenta "${state.username}"?`)) {
      state = createFreshUserProgress(state.username, state.loginId, state.password, state.school, state.goal);
      saveState();
      renderAll();
      showToast('🔄 Progreso de tu cuenta reiniciado.');
    }
  });

  // Atajos de teclado 1-4 y Enter
  window.addEventListener('keydown', e => {
    if (!activeSession) return;
    const victoryHidden = document.getElementById('lesson-victory-stage').classList.contains('hidden');
    if (!victoryHidden) {
      if (e.key === 'Enter') {
        e.preventDefault();
        quitLesson();
      }
      return;
    }

    if (['1', '2', '3', '4'].includes(e.key) && !activeSession.hasChecked) {
      const idx = parseInt(e.key, 10) - 1;
      selectOption(idx);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (!activeSession.hasChecked && activeSession.selectedOption !== null) {
        checkCurrentAnswer();
      } else if (activeSession.hasChecked) {
        nextQuestionOrFinish();
      }
    } else if (e.key === 'Escape') {
      quitLesson();
    }
  });
});

function switchMainView(viewName) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === `view-${viewName}`);
  });
}