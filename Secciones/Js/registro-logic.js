// ============================================================
//  Secciones/Js/registro-logic.js
//  ✅ Corregido:
//  - Elimina el onsubmit inline que bloqueaba el formulario
//  - Redirige a perfil.html (no a index.html) tras crear cuenta
//  - Añade validación de contraseña en tiempo real y bloqueo
//    de envío hasta cumplir todos los requisitos
// ============================================================

import { registerUser, isLoggedIn, validatePassword } from './auth.js';

const EYE_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
`;
const EYE_OFF_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
`;

// Si ya hay sesión activa → ir directo al perfil
if (isLoggedIn()) {
  window.location.replace('/Secciones/perfil.html');
}

// ── Feedback inline de error ──────────────────────────────────
function setFormError(msg) {
  let el = document.getElementById('egglish-reg-error');
  if (!el) {
    el = document.createElement('p');
    el.id = 'egglish-reg-error';
    el.style.cssText = `
      color: #ef4444; font-weight: 700; font-size: 14px;
      text-align: center; margin: 4px 0 0 0;
      font-family: 'Nunito', sans-serif;
    `;
    const btn = document.querySelector('.signup-form button[type="submit"]');
    if (btn) btn.parentNode.insertBefore(el, btn);
    else document.querySelector('.signup-form')?.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = msg ? 'block' : 'none';
}

function setButtonLoading(loading, passwordInput = null) {
  const btn = document.querySelector('.signup-form button[type="submit"]');
  if (!btn) return;
  const passwordValidation = passwordInput ? validatePassword(passwordInput.value) : { isValid: true };
  btn.disabled = loading || !passwordValidation.isValid;
  btn.textContent = loading ? 'CREANDO CUENTA...' : 'Crear cuenta';
  btn.style.opacity = loading || !passwordValidation.isValid ? '0.7' : '1';
}

function injectShake() {
  if (document.getElementById('egglish-shake-style')) return;
  const s = document.createElement('style');
  s.id = 'egglish-shake-style';
  s.textContent = `@keyframes egglish-shake{
    0%,100%{transform:translateX(0)}
    20%,60%{transform:translateX(-8px)}
    40%,80%{transform:translateX(8px)}
  }`;
  document.head.appendChild(s);
}

function updatePasswordStrengthUI(passwordInput) {
  const validation = validatePassword(passwordInput.value);
  const bar = document.getElementById('password-strength-bar');
  const text = document.getElementById('password-strength-text');
  const hint = document.getElementById('password-strength-hint');
  const items = document.querySelectorAll('#password-requirements li');
  const btn = document.querySelector('.signup-form button[type="submit"]');

  let strength = { label: 'Muy débil', color: '#ef4444', width: '0%' };
  if (validation.score >= 5) {
    strength = { label: 'Muy fuerte', color: '#16a34a', width: '100%' };
  } else if (validation.score === 4) {
    strength = { label: 'Fuerte', color: '#22c55e', width: '80%' };
  } else if (validation.score === 3) {
    strength = { label: 'Media', color: '#f59e0b', width: '60%' };
  } else if (validation.score === 2) {
    strength = { label: 'Débil', color: '#f97316', width: '40%' };
  }

  if (bar) {
    bar.style.width = passwordInput.value ? strength.width : '0%';
    bar.style.backgroundColor = strength.color;
  }

  if (text) {
    text.textContent = passwordInput.value ? strength.label : 'Muy débil';
    text.style.color = strength.color;
  }

  if (hint) {
    hint.textContent = validation.isValid
      ? '¡Perfecto! La contraseña cumple con todos los requisitos.'
      : validation.missing.length
        ? `Faltan requisitos: ${validation.missing.join(', ')}.`
        : 'Completa la contraseña para continuar.';
    hint.style.color = validation.isValid ? '#16a34a' : '#6b7280';
  }

  items.forEach((item, index) => {
    const req = validation.checks[index];
    const icon = item.querySelector('.req-icon');
    if (!req || !icon) return;
    const isValid = req.passed;
    item.classList.toggle('is-valid', isValid);
    item.classList.toggle('is-invalid', !isValid);
    icon.textContent = isValid ? '✔' : '✖';
  });

  if (btn) {
    btn.disabled = !validation.isValid;
    btn.style.opacity = validation.isValid ? '1' : '0.7';
  }

  return validation;
}

// ── Conectar formulario ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectShake();

  const form = document.querySelector('.signup-form');
  if (!form) {
    console.error('[Egglish] No se encontró .signup-form en Registro.html');
    return;
  }

  // ✅ CLAVE: eliminar el onsubmit="event.preventDefault();" del HTML
  //    ese atributo bloquea silenciosamente el listener de abajo
  form.removeAttribute('onsubmit');

  const inputs = form.querySelectorAll('input');
  const nameIn = inputs[0];   // Nombre completo
  const emailIn = inputs[1];  // Correo electrónico
  const ageIn = inputs[2];    // Edad
  const passwordIn = document.getElementById('reg-password') || inputs[3]; // Contraseña

  // Show/hide toggle
  const toggleBtn = document.getElementById('password-toggle');
  if (toggleBtn && passwordIn) {
    toggleBtn.innerHTML = EYE_ICON;
    toggleBtn.addEventListener('click', () => {
      const isPwd = passwordIn.getAttribute('type') === 'password';
      passwordIn.setAttribute('type', isPwd ? 'text' : 'password');
      toggleBtn.innerHTML = isPwd ? EYE_OFF_ICON : EYE_ICON;
      toggleBtn.setAttribute('aria-label', isPwd ? 'Ocultar contraseña' : 'Mostrar contraseña');
    });
  }

  if (passwordIn) {
    passwordIn.addEventListener('input', () => {
      updatePasswordStrengthUI(passwordIn);
      if (validatePassword(passwordIn.value).isValid) {
        setFormError('');
      }
    });
  }

  updatePasswordStrengthUI(passwordIn);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const passwordValidation = updatePasswordStrengthUI(passwordIn);

    if (!passwordValidation.isValid) {
      setFormError('La contraseña no cumple todos los requisitos.');
      setButtonLoading(false, passwordIn);
      return;
    }

    setFormError('');
    setButtonLoading(true, passwordIn);

    const result = await registerUser({
      name: nameIn.value.trim(),
      email: emailIn.value.trim(),
      age: ageIn.value.trim(),
      password: passwordIn.value,
    });

    setButtonLoading(false, passwordIn);

    if (result.ok) {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = '¡Cuenta creada! 🥚';
        btn.style.background = '#58cc02';
        btn.style.boxShadow = '0 4px 0 #46a302';
      }
      // ✅ Redirige a perfil.html (no a index ni a entrar)
      setTimeout(() => window.location.replace('/Secciones/perfil.html'), 1000);
    } else {
      setFormError(result.error);
      const card = document.querySelector('.registration-card');
      if (card) {
        card.style.animation = 'egglish-shake .4s ease';
        setTimeout(() => (card.style.animation = ''), 400);
      }
    }
  });
});