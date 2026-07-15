/* ============================================================
   GEMINI.JS — Módulo de comunicación con la API de Gemini
   ─────────────────────────────────────────────────────────────
   • Exporta únicamente: preguntarGemini(mensaje)
   • Sin dependencias externas
   • Usa el SDK oficial @google/genai vía CDN de esm.sh
   ─────────────────────────────────────────────────────────────
   📌 INSTRUCCIÓN PARA PEGAR LA API KEY:
      Reemplaza el valor de GEMINI_API_KEY en la línea de abajo.
      Solo necesitas sustituir el texto "AQUI_VA_LA_API_KEY"
      por tu clave real de Google AI Studio.
      Ejemplo: const GEMINI_API_KEY = "AIzaSyB...tu_clave...";
   ============================================================ */

// ─── API KEY ────────────────────────────────────────────────
// 👇 Pega tu API Key de Google AI Studio aquí:
const GEMINI_API_KEY = env.GEMINI_API_KEY; 
// ─── MODELO A USAR ──────────────────────────────────────────
const GEMINI_MODEL = env.GEMINI_MODEL ;

// ─── SDK OFICIAL vía CDN (ES Module, sin bundler) ───────────
// Usamos esm.sh que re-exporta el paquete npm @google/genai
// compatible con navegadores sin Webpack ni Vite.
import { GoogleGenAI } from "https://esm.sh/@google/genai@1.1.0";

// ─── SYSTEM PROMPT DE EGGY ──────────────────────────────────
// Define la personalidad y rol del asistente.
// Aquí puedes ajustar el tono, nivel, idioma de respuesta, etc.
const EGGY_SYSTEM_PROMPT = `
Eres Eggy, el asistente de inteligencia artificial de Egglish,
una plataforma para aprender inglés diseñada para hispanohablantes.

Tu personalidad:
- Eres amigable, motivador y paciente.
- Usas un tono cercano y juvenil pero profesional.
- Te refieres a ti mismo como "Eggy" y ocasionalmente usas emojis
  relacionados con huevos y pollitos (🥚🐣🐥) de forma natural y no excesiva.
- Celebras los logros del usuario y lo animas cuando se equivoca.

Tu rol:
- Enseñas inglés a hispanohablantes.
- Respondes principalmente en español, salvo cuando el contexto
  requiera usar inglés (ejemplos, frases, ejercicios, etc.).
- Corriges errores gramaticales del usuario con amabilidad.
- Das explicaciones claras con ejemplos concretos.
- Puedes ayudar con gramática, vocabulario, pronunciación,
  phrasal verbs, expresiones idiomáticas y práctica de conversación.

Formato de respuestas:
- Usa **negrita** para resaltar palabras o reglas importantes.
- Usa viñetas (•) para listas cuando sea necesario.
- Mantén respuestas concisas a menos que el usuario pida profundidad.
- Nunca rompas el personaje de Eggy.
`.trim();

/* ============================================================
   FUNCIÓN PRINCIPAL
   ============================================================ */

/**
 * Envía un mensaje a Gemini y devuelve la respuesta en texto.
 *
 * @param   {string}          mensaje  - Texto del usuario
 * @returns {Promise<string>}          - Respuesta de Gemini como string
 * @throws  {Error}                    - Si la llamada a la API falla
 */
export async function preguntarGemini(mensaje) {
  // Inicializa el cliente con la API Key
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  // Construye el prompt completo: system + mensaje del usuario
  const promptCompleto = `${EGGY_SYSTEM_PROMPT}\n\nUsuario: ${mensaje}`;

  // Llama al modelo y espera la respuesta
  const respuesta = await ai.models.generateContent({
    model:    GEMINI_MODEL,
    contents: promptCompleto,
  });

  // Extrae y devuelve solo el texto
  return respuesta.text;
}
