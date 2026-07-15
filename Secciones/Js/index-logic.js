// ============================================================
//  Secciones/Js/index-logic.js
//  Script para index.html (raíz del proyecto).
//  Activa protección de enlaces y adapta el navbar.
// ============================================================

import { initIndexGuards } from './guards.js';

document.addEventListener('DOMContentLoaded', () => {
  initIndexGuards();
});
