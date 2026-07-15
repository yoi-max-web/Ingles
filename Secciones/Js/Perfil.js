// ============================================================
//  Secciones/Js/Perfil.js
//  ✅ Lee la sesión guardada y rellena el perfil con datos reales
//     del usuario: nombre, email, edad, avatar con inicial
// ============================================================

// ── Leer sesión desde localStorage ───────────────────────────
function getSession() {
  try {
    const raw = localStorage.getItem('egglish_session');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// ── Si no hay sesión → redirigir a login ─────────────────────
const session = getSession();
if (!session) {
  window.location.replace('/entrar.html');
}

// ── Generar avatar con inicial del nombre ─────────────────────
function getAvatarColor(name) {
  const colors = [
    '#1cb0f6', '#58cc02', '#f5a623', '#ff4b4b',
    '#9b59b6', '#e67e22', '#2ecc71', '#e74c3c'
  ];
  const index = (name?.charCodeAt(0) || 0) % colors.length;
  return colors[index];
}

// ── Generar username a partir del nombre ──────────────────────
function generateUsername(name) {
  if (!name) return '@usuario';
  return '@' + name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar tildes
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

// ── Fecha de registro (se guarda al crear cuenta) ─────────────
function getJoinDate() {
  const raw = localStorage.getItem('egglish_join_date');
  if (raw) return raw;
  // Si no existe, guardar la fecha actual
  const now = new Date();
  const formatted = `📅 Se unió en ${now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`;
  localStorage.setItem('egglish_join_date', formatted);
  return formatted;
}

// ── Rellenar el perfil con datos reales ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (!session) return;

  const { name, email, age } = session;

  // ── 1. AVATAR ─────────────────────────────────────────────
  const avatarImg     = document.querySelector('.avatar-img');
  const avatarWrapper = document.querySelector('.avatar-wrapper');

  if (avatarImg && name) {
    // Reemplazar la imagen del pollito por un avatar con inicial
    const initial = name.charAt(0).toUpperCase();
    const color   = getAvatarColor(name);

    // Crear elemento de inicial
    const avatarDiv = document.createElement('div');
    avatarDiv.id = 'user-avatar-initial';
    avatarDiv.style.cssText = `
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: ${color};
      border: 4px solid #1cb0f6;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.8rem;
      font-weight: 900;
      color: white;
      font-family: 'Nunito', sans-serif;
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    `;
    avatarDiv.textContent = initial;

    // Sustituir la imagen por el div con inicial
    avatarImg.replaceWith(avatarDiv);
  }

  // ── 2. NOMBRE ─────────────────────────────────────────────
  const nameEl = document.querySelector('.profile-name');
  if (nameEl) nameEl.textContent = name || 'Usuario';

  // ── 3. USERNAME ───────────────────────────────────────────
  const usernameEl = document.querySelector('.profile-username');
  if (usernameEl) usernameEl.textContent = generateUsername(name);

  // ── 4. FECHA DE REGISTRO ──────────────────────────────────
  const joinedEl = document.querySelector('.profile-joined');
  if (joinedEl) joinedEl.textContent = getJoinDate();

  // ── 5. EMAIL en sección de info (opcional, si existe el elemento) ──
  const emailEl = document.getElementById('profile-email');
  if (emailEl) emailEl.textContent = email || '';

  // ── 6. EDAD en sección de info (opcional) ─────────────────
  const ageEl = document.getElementById('profile-age');
  if (ageEl && age) ageEl.textContent = `${age} años`;

  // ── 7. NAVBAR: mostrar nombre y botón cerrar sesión ────────
  adaptNavbar(name, email);

  // ── 8. Hamburger menu ─────────────────────────────────────
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu      = document.getElementById('nav-menu');
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') &&
          !navMenu.contains(e.target) &&
          !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
});

// ── Adaptar navbar con nombre del usuario ─────────────────────
function adaptNavbar(name, email) {
  const authDiv = document.querySelector('.navbar-auth');
  if (!authDiv) return;

  // Solo mostrar botón de cerrar sesión (sin saludo 'Hola <nombre>')
  authDiv.innerHTML = `
    <button id="btn-logout" style="
      font-weight:800; color:#fff; background:#ef4444; border:none;
      padding:10px 18px; border-radius:12px; cursor:pointer;
      font-family:'Nunito',sans-serif; box-shadow:0 4px 0 #b91c1c;
      font-size:0.9rem;">
      Cerrar sesión
    </button>`;

  document.getElementById('btn-logout').addEventListener('click', async () => {
    localStorage.removeItem('egglish_session');

    // Si Firebase está activo, hacer signOut también
    try {
      const FB_CDN = 'https://www.gstatic.com/firebasejs/10.12.2';
      const { getAuth, signOut } = await import(`${FB_CDN}/firebase-auth.js`);
      const auth = getAuth();
      if (auth.currentUser) await signOut(auth);
    } catch (_) { /* ignorar si Firebase no está activo */ }

    window.location.href = '/index.html';
  });
}