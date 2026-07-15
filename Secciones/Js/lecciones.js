
  /* ================================================================
     WORD HINT DATA
  ================================================================ */
  const wordTranslations = {
    'good':       'bueno/a',
    'morning':    'mañana',
    'hello':      'hola',
    'how':        'cómo',
    'are':        'estás/está',
    'you':        'tú / usted',
    'please':     'por favor',
    'thank':      'gracias',
    'coffee':     'café',
    'tea':        'té',
    'milk':       'leche',
    'water':      'agua',
    'juice':      'jugo',
    'bill':       'cuenta',
    'table':      'mesa',
    'bathroom':   'baño',
    'much':       'mucho',
    'where':      'dónde',
    'what':       'qué / cuál',
    'is':         'es / está',
    'my':         'mi / mis',
    'name':       'nombre',
    'from':       'de / desde',
    'years':      'años',
    'old':        'viejo/a',
    'nice':       'agradable',
    'meet':       'conocer',
    'live':       'vivir',
    'speak':      'hablar',
    'little':     'poco/a',
    'english':    'inglés',
    'work':       'trabajar / trabajo',
    'office':     'oficina',
    'like':       'gustar / me gusta',
    'music':      'música',
    'later':      'después / luego',
    'wake':       'despertar',
    'breakfast':  'desayunar',
    'every':      'cada / todos',
    'walk':       'caminar',
    'afternoon':  'tarde',
    'sleep':      'dormir',
    'raining':    'lloviendo',
    'today':      'hoy',
    'tomorrow':   'mañana',
    'yesterday':  'ayer',
    'think':      'pensar / creo',
    'interesting':'interesante',
    'went':       'fui / fue',
    'school':     'escuela',
    'going':      'voy / va',
    'visit':      'visitar',
    'family':     'familia',
    'disagree':   'no estoy de acuerdo',
    'opinion':    'opinión',
    'help':       'ayudar',
    'understand': 'entender',
    'repeat':     'repetir',
    'agree':      'estar de acuerdo',
    'great':      'genial / gran',
    'idea':       'idea',
    'question':   'pregunta',
    'sorry':      'perdón / lo siento',
    'pleasure':   'placer',
    'until':      'hasta',
    'wish':       'desear / ojalá',
    'time':       'tiempo',
    'travel':     'viajar',
    'rain':       'llover / lluvia',
    'give':       'dar',
    'studied':    'estudié / estudió',
    'finished':   'terminado/a',
    'famous':     'famoso/a',
    'practice':   'practicar',
    'study':      'estudiar',
    'dogs':       'perros',
    'cats':       'gatos',
    'schedule':   'programar / horario',
    'meeting':    'reunión',
    'forward':    'adelante',
    'outside':    'fuera de',
    'box':        'caja / convencional',
    'count':      'contar',
    'cost':       'costar',
    'ticket':     'boleto',
    'plane':      'avión',
    'cook':       'cocinar',
    'home':       'casa / hogar',
    'read':       'leer',
    'newspaper':  'periódico',
    'shower':     'ducha',
    'exercise':   'ejercicio',
    'finish':     'terminar',
  };

  function buildHintPhrase(phrase) {
    return phrase.replace(/([a-zA-Z']+)/g, (match) => {
      const key = match.toLowerCase().replace(/'/g, '');
      const translation = wordTranslations[key];
      if (translation) {
        return `<span class="word-hint" data-translate="${translation}">${match}</span>`;
      }
      return match;
    });
  }

  /* ================================================================
     LESSONS DATA — 15 cards per lesson key
  ================================================================ */
  const lessonsData = {
    cafe: [
      { id:1,  englishPhrase:"Good morning, a coffee please.",        correctSpanishWords:["Buenos","días,","un","café","por","favor."],        distractorWords:["noche","leche","tarde","gracias","dos"] },
      { id:2,  englishPhrase:"Hello, how are you?",                   correctSpanishWords:["Hola,","¿cómo","estás?"],                           distractorWords:["Buenos","días","adiós","bien","mal"] },
      { id:3,  englishPhrase:"A tea with milk, please.",              correctSpanishWords:["Un","té","con","leche,","por","favor."],             distractorWords:["café","agua","sin","azúcar","gracias"] },
      { id:4,  englishPhrase:"How much does it cost?",                correctSpanishWords:["¿Cuánto","cuesta?"],                                 distractorWords:["vale","dónde","es","aquí","precio"] },
      { id:5,  englishPhrase:"The bill, please.",                     correctSpanishWords:["La","cuenta,","por","favor."],                       distractorWords:["mesa","menú","agua","gracias","una"] },
      { id:6,  englishPhrase:"I would like a glass of water.",        correctSpanishWords:["Quisiera","un","vaso","de","agua."],                 distractorWords:["quiero","jugo","leche","café","dos"] },
      { id:7,  englishPhrase:"Do you have juice?",                    correctSpanishWords:["¿Tiene","jugo?"],                                   distractorWords:["hay","tiene","agua","café","menú"] },
      { id:8,  englishPhrase:"Good afternoon!",                       correctSpanishWords:["¡Buenas","tardes!"],                                distractorWords:["días","noches","hola","adiós","mañana"] },
      { id:9,  englishPhrase:"Thank you very much.",                  correctSpanishWords:["Muchas","gracias."],                                distractorWords:["de","nada","por","favor","igualmente"] },
      { id:10, englishPhrase:"A table for two, please.",              correctSpanishWords:["Una","mesa","para","dos,","por","favor."],           distractorWords:["silla","tres","uno","aquí","reserva"] },
      { id:11, englishPhrase:"I would like a sandwich.",              correctSpanishWords:["Quisiera","un","sándwich."],                         distractorWords:["quiero","dos","pizza","taco","hamburguesa"] },
      { id:12, englishPhrase:"Is there wifi here?",                   correctSpanishWords:["¿Hay","wifi","aquí?"],                              distractorWords:["dónde","baño","menú","precio","mesa"] },
      { id:13, englishPhrase:"Very tasty, thank you.",                correctSpanishWords:["Muy","rico,","gracias."],                           distractorWords:["bueno","malo","feo","poco","mucho"] },
      { id:14, englishPhrase:"Where is the bathroom?",                correctSpanishWords:["¿Dónde","está","el","baño?"],                       distractorWords:["aquí","hay","es","menú","caja"] },
      { id:15, englishPhrase:"See you tomorrow!",                     correctSpanishWords:["¡Hasta","mañana!"],                                 distractorWords:["luego","pronto","hoy","ayer","nunca"] },
    ],
    presentacion: [
      { id:1,  englishPhrase:"My name is Maria.",                     correctSpanishWords:["Me","llamo","María."],                              distractorWords:["soy","tengo","vivo","ella","él"] },
      { id:2,  englishPhrase:"I am from Colombia.",                   correctSpanishWords:["Soy","de","Colombia."],                             distractorWords:["vivo","en","vengo","España","México"] },
      { id:3,  englishPhrase:"I am twenty years old.",                correctSpanishWords:["Tengo","veinte","años."],                           distractorWords:["soy","hay","treinta","diez","quince"] },
      { id:4,  englishPhrase:"Nice to meet you.",                     correctSpanishWords:["Mucho","gusto."],                                   distractorWords:["igualmente","hola","adiós","perdón","gracias"] },
      { id:5,  englishPhrase:"I am a student.",                       correctSpanishWords:["Soy","estudiante."],                                distractorWords:["tengo","hay","maestro","doctor","ingeniero"] },
      { id:6,  englishPhrase:"I live in Barranquilla.",               correctSpanishWords:["Vivo","en","Barranquilla."],                         distractorWords:["soy","estoy","Bogotá","Colombia","ciudad"] },
      { id:7,  englishPhrase:"I speak a little English.",             correctSpanishWords:["Hablo","un","poco","de","inglés."],                 distractorWords:["mucho","español","francés","nada","bien"] },
      { id:8,  englishPhrase:"What is your name?",                    correctSpanishWords:["¿Cómo","te","llamas?"],                             distractorWords:["eres","tienes","dónde","quién","cuándo"] },
      { id:9,  englishPhrase:"Where are you from?",                   correctSpanishWords:["¿De","dónde","eres?"],                              distractorWords:["dónde","vives","cuántos","tienes","años"] },
      { id:10, englishPhrase:"I am pleased to meet you.",             correctSpanishWords:["Encantado","de","conocerte."],                      distractorWords:["mucho","gusto","igualmente","también","hola"] },
      { id:11, englishPhrase:"My hobby is reading.",                  correctSpanishWords:["Mi","hobby","es","leer."],                          distractorWords:["pasatiempo","favorito","cantar","bailar","jugar"] },
      { id:12, englishPhrase:"I have a dog named Toby.",              correctSpanishWords:["Tengo","un","perro","llamado","Toby."],              distractorWords:["gato","pez","loro","grande","pequeño"] },
      { id:13, englishPhrase:"I work in an office.",                  correctSpanishWords:["Trabajo","en","una","oficina."],                    distractorWords:["estudio","vivo","escuela","tienda","hospital"] },
      { id:14, englishPhrase:"I like music very much.",               correctSpanishWords:["Me","gusta","mucho","la","música."],                distractorWords:["poco","nada","deporte","comida","cine"] },
      { id:15, englishPhrase:"See you later!",                        correctSpanishWords:["¡Hasta","luego!"],                                  distractorWords:["mañana","pronto","nunca","hoy","siempre"] },
    ],
    oraciones: [
      { id:1,  englishPhrase:"I am a student.",                       correctSpanishWords:["Soy","estudiante."],                                distractorWords:["tengo","hay","maestro","él","ella"] },
      { id:2,  englishPhrase:"I have a book.",                        correctSpanishWords:["Tengo","un","libro."],                              distractorWords:["soy","hay","dos","cuaderno","pluma"] },
      { id:3,  englishPhrase:"I like chocolate.",                     correctSpanishWords:["Me","gusta","el","chocolate."],                     distractorWords:["encanta","nada","poco","mucho","café"] },
      { id:4,  englishPhrase:"Where is the bathroom?",                correctSpanishWords:["¿Dónde","está","el","baño?"],                       distractorWords:["hay","es","aquí","menú","caja"] },
      { id:5,  englishPhrase:"The dog is big.",                       correctSpanishWords:["El","perro","es","grande."],                        distractorWords:["gato","pequeño","rojo","bonito","tiene"] },
      { id:6,  englishPhrase:"She is my sister.",                     correctSpanishWords:["Ella","es","mi","hermana."],                        distractorWords:["él","su","hermano","amiga","prima"] },
      { id:7,  englishPhrase:"We eat every day.",                     correctSpanishWords:["Comemos","todos","los","días."],                    distractorWords:["dormimos","vamos","siempre","nunca","algunas"] },
      { id:8,  englishPhrase:"He is at school.",                      correctSpanishWords:["Él","está","en","la","escuela."],                   distractorWords:["ella","casa","mercado","trabajo","ciudad"] },
      { id:9,  englishPhrase:"I want to sleep.",                      correctSpanishWords:["Quiero","dormir."],                                 distractorWords:["comer","correr","jugar","quisiera","necesito"] },
      { id:10, englishPhrase:"The book is on the table.",             correctSpanishWords:["El","libro","está","en","la","mesa."],              distractorWords:["silla","suelo","cama","pared","debajo"] },
      { id:11, englishPhrase:"My mother is a doctor.",                correctSpanishWords:["Mi","madre","es","médica."],                        distractorWords:["padre","hermana","tía","abuela","enfermera"] },
      { id:12, englishPhrase:"I go to school by bus.",                correctSpanishWords:["Voy","a","la","escuela","en","autobús."],           distractorWords:["carro","pie","bici","metro","avión"] },
      { id:13, englishPhrase:"Today is Monday.",                      correctSpanishWords:["Hoy","es","lunes."],                                distractorWords:["martes","miércoles","mañana","ayer","semana"] },
      { id:14, englishPhrase:"I feel happy today.",                   correctSpanishWords:["Me","siento","feliz","hoy."],                       distractorWords:["triste","cansado","enfermo","ayer","bien"] },
      { id:15, englishPhrase:"Thank you very much!",                  correctSpanishWords:["¡Muchas","gracias!"],                               distractorWords:["de","nada","por","favor","igualmente"] },
    ],
    rutinas: [
      { id:1,  englishPhrase:"I wake up at seven.",                   correctSpanishWords:["Me","despierto","a","las","siete."],               distractorWords:["levanto","ocho","seis","duermo","acuesto"] },
      { id:2,  englishPhrase:"I have breakfast every morning.",       correctSpanishWords:["Desayuno","todas","las","mañanas."],               distractorWords:["almuerzo","ceno","noches","tardes","siempre"] },
      { id:3,  englishPhrase:"I work from Monday to Friday.",         correctSpanishWords:["Trabajo","de","lunes","a","viernes."],             distractorWords:["estudio","domingo","sábado","jueves","siempre"] },
      { id:4,  englishPhrase:"I go for a walk in the afternoon.",     correctSpanishWords:["Salgo","a","caminar","en","la","tarde."],          distractorWords:["mañana","noche","correr","nadar","parque"] },
      { id:5,  englishPhrase:"I sleep eight hours a day.",            correctSpanishWords:["Duermo","ocho","horas","al","día."],               distractorWords:["siete","seis","nueve","semana","noche"] },
      { id:6,  englishPhrase:"It is three o'clock.",                  correctSpanishWords:["Son","las","tres."],                               distractorWords:["es","la","una","dos","cuatro"] },
      { id:7,  englishPhrase:"I work every day.",                     correctSpanishWords:["Trabajo","todos","los","días."],                   distractorWords:["estudio","duermo","juego","semanas","meses"] },
      { id:8,  englishPhrase:"It is raining today.",                  correctSpanishWords:["Hoy","está","lloviendo."],                         distractorWords:["hace","sol","viento","ayer","mañana"] },
      { id:9,  englishPhrase:"How much does it cost?",                correctSpanishWords:["¿Cuánto","cuesta?"],                               distractorWords:["vale","dónde","precio","hay","cuántos"] },
      { id:10, englishPhrase:"I want a plane ticket.",                correctSpanishWords:["Quiero","un","boleto","de","avión."],              distractorWords:["necesito","tren","bus","dos","para"] },
      { id:11, englishPhrase:"I cook at home.",                       correctSpanishWords:["Cocino","en","casa."],                             distractorWords:["como","oficina","restaurante","siempre","nunca"] },
      { id:12, englishPhrase:"I read the newspaper in the morning.",  correctSpanishWords:["Leo","el","periódico","en","la","mañana."],        distractorWords:["revista","libro","noche","tarde","siempre"] },
      { id:13, englishPhrase:"I take a shower in the evening.",       correctSpanishWords:["Me","ducho","en","la","noche."],                   distractorWords:["baño","mañana","tarde","siempre","antes"] },
      { id:14, englishPhrase:"I do exercise three times a week.",     correctSpanishWords:["Hago","ejercicio","tres","veces","a","la","semana."], distractorWords:["dos","cuatro","día","mes","mucho"] },
      { id:15, englishPhrase:"I finish work at six.",                 correctSpanishWords:["Termino","de","trabajar","a","las","seis."],       distractorWords:["cinco","siete","ocho","empiezo","estudio"] },
    ],
    conversacion: [
      { id:1,  englishPhrase:"I think that it is interesting.",       correctSpanishWords:["Creo","que","es","interesante."],                  distractorWords:["pienso","aburrido","difícil","fácil","muy"] },
      { id:2,  englishPhrase:"I went to school yesterday.",           correctSpanishWords:["Fui","a","la","escuela","ayer."],                  distractorWords:["voy","iré","trabajo","hoy","mañana"] },
      { id:3,  englishPhrase:"I am going to visit my family.",        correctSpanishWords:["Voy","a","visitar","a","mi","familia."],           distractorWords:["quiero","puedo","amigos","ciudad","mañana"] },
      { id:4,  englishPhrase:"However, I disagree.",                  correctSpanishWords:["Sin","embargo,","no","estoy","de","acuerdo."],     distractorWords:["pero","y","también","además","porque"] },
      { id:5,  englishPhrase:"In my opinion, it is better.",          correctSpanishWords:["En","mi","opinión,","es","mejor."],                distractorWords:["peor","igual","diferente","creo","pienso"] },
      { id:6,  englishPhrase:"Can you help me, please?",              correctSpanishWords:["¿Puedes","ayudarme,","por","favor?"],              distractorWords:["quieres","debes","necesitas","gracias","hola"] },
      { id:7,  englishPhrase:"I do not understand.",                  correctSpanishWords:["No","entiendo."],                                  distractorWords:["sé","puedo","quiero","hablo","veo"] },
      { id:8,  englishPhrase:"Could you repeat that?",                correctSpanishWords:["¿Puedes","repetir","eso?"],                        distractorWords:["decir","hablar","escribir","explicar","hacer"] },
      { id:9,  englishPhrase:"I agree with you.",                     correctSpanishWords:["Estoy","de","acuerdo","contigo."],                 distractorWords:["sin","embargo","también","además","pero"] },
      { id:10, englishPhrase:"That is a great idea.",                 correctSpanishWords:["Esa","es","una","gran","idea."],                   distractorWords:["buena","mala","pequeña","nueva","vieja"] },
      { id:11, englishPhrase:"I have a question.",                    correctSpanishWords:["Tengo","una","pregunta."],                         distractorWords:["duda","problema","idea","respuesta","tema"] },
      { id:12, englishPhrase:"I am sorry.",                           correctSpanishWords:["Lo","siento."],                                    distractorWords:["perdón","disculpa","gracias","bien","mucho"] },
      { id:13, englishPhrase:"It is a pleasure.",                     correctSpanishWords:["Es","un","placer."],                               distractorWords:["gusto","honor","problema","trabajo","favor"] },
      { id:14, englishPhrase:"Until next time.",                      correctSpanishWords:["Hasta","la","próxima."],                           distractorWords:["luego","mañana","pronto","siempre","nunca"] },
      { id:15, englishPhrase:"I wish you well.",                      correctSpanishWords:["Te","deseo","lo","mejor."],                        distractorWords:["quiero","doy","envío","mando","traigo"] },
    ],
    complejo: [
      { id:1,  englishPhrase:"I wish I had more time.",               correctSpanishWords:["Ojalá","tuviera","más","tiempo."],                 distractorWords:["quiero","tengo","tener","mucho","poco"] },
      { id:2,  englishPhrase:"If I were you, I would study more.",    correctSpanishWords:["Si","fuera","tú,","estudiaría","más."],            distractorWords:["sería","haría","iría","poco","menos"] },
      { id:3,  englishPhrase:"The letter was written by her.",        correctSpanishWords:["La","carta","fue","escrita","por","ella."],        distractorWords:["él","yo","nosotros","leída","enviada"] },
      { id:4,  englishPhrase:"You should study every day.",           correctSpanishWords:["Deberías","estudiar","todos","los","días."],       distractorWords:["podrías","querrías","todas","las","noches"] },
      { id:5,  englishPhrase:"I need to look this up.",               correctSpanishWords:["Necesito","buscar","esto."],                       distractorWords:["quiero","debo","revisar","aquello","eso"] },
      { id:6,  englishPhrase:"It is important that you practice.",    correctSpanishWords:["Es","importante","que","practiques."],            distractorWords:["necesario","posible","estudies","trabajes","descanses"] },
      { id:7,  englishPhrase:"They study so that they learn.",        correctSpanishWords:["Estudian","para","que","aprendan."],              distractorWords:["trabajen","descansen","coman","duerman","salgan"] },
      { id:8,  englishPhrase:"I hope you feel better soon.",          correctSpanishWords:["Espero","que","te","mejores","pronto."],          distractorWords:["sientas","vayas","vengas","llegues","salgas"] },
      { id:9,  englishPhrase:"He asked me to help him.",              correctSpanishWords:["Me","pidió","que","lo","ayudara."],               distractorWords:["dijo","ordenó","permitió","dejó","mandó"] },
      { id:10, englishPhrase:"She left before I arrived.",            correctSpanishWords:["Ella","se","fue","antes","de","que","llegara."],  distractorWords:["salió","vino","antes","después","cuando"] },
      { id:11, englishPhrase:"I had already finished when he called.",correctSpanishWords:["Ya","había","terminado","cuando","llamó."],       distractorWords:["empezado","comido","salido","llegado","dormido"] },
      { id:12, englishPhrase:"He is said to be very famous.",         correctSpanishWords:["Se","dice","que","es","muy","famoso."],           distractorWords:["sabe","cree","piensa","comenta","rumorea"] },
      { id:13, englishPhrase:"I should have studied more.",           correctSpanishWords:["Debería","haber","estudiado","más."],             distractorWords:["podría","quisiera","menos","todo","siempre"] },
      { id:14, englishPhrase:"The more you practice, the better.",   correctSpanishWords:["Cuanto","más","practicas,","mejor."],             distractorWords:["menos","peor","igual","poco","nada"] },
      { id:15, englishPhrase:"It is a pity that he did not come.",   correctSpanishWords:["Es","una","lástima","que","no","haya","venido."], distractorWords:["pena","verdad","alegría","sorpresa","ido"] },
    ],
    fluidez: [
      { id:1,  englishPhrase:"That is totally lit!",                  correctSpanishWords:["¡Eso","está","de","lujo!"],                        distractorWords:["genial","súper","fatal","chido","bacano"] },
      { id:2,  englishPhrase:"Let us schedule a meeting.",            correctSpanishWords:["Agendar","una","reunión."],                        distractorWords:["cancelar","llamar","escribir","enviar","hacer"] },
      { id:3,  englishPhrase:"Break a leg!",                          correctSpanishWords:["¡Mucha","suerte!"],                                distractorWords:["Buena","mala","mucho","poca","ninguna"] },
      { id:4,  englishPhrase:"I am on the fence about it.",           correctSpanishWords:["Estoy","indeciso","al","respecto."],               distractorWords:["seguro","dudoso","fuera","dentro","encima"] },
      { id:5,  englishPhrase:"Let us touch base later.",              correctSpanishWords:["Hablemos","después."],                             distractorWords:["mañana","ahora","pronto","luego","ya"] },
      { id:6,  englishPhrase:"The ball is in your court.",            correctSpanishWords:["La","decisión","es","tuya."],                      distractorWords:["mía","nuestra","suya","vuestra","de"] },
      { id:7,  englishPhrase:"You nailed it!",                        correctSpanishWords:["¡Lo","lograste!"],                                 distractorWords:["hiciste","ganaste","perdiste","diste","fallaste"] },
      { id:8,  englishPhrase:"It is a piece of cake.",                correctSpanishWords:["Es","pan","comido."],                              distractorWords:["difícil","duro","complicado","fácil","sencillo"] },
      { id:9,  englishPhrase:"Let us move forward.",                  correctSpanishWords:["Sigamos","adelante."],                             distractorWords:["atrás","juntos","solos","rápido","despacio"] },
      { id:10, englishPhrase:"Think outside the box.",                correctSpanishWords:["Piensa","de","manera","creativa."],               distractorWords:["lógica","racional","simple","práctica","directa"] },
      { id:11, englishPhrase:"I am swamped right now.",               correctSpanishWords:["Estoy","muy","ocupado","ahora."],                  distractorWords:["libre","cansado","aburrido","listo","tranquilo"] },
      { id:12, englishPhrase:"That went down the drain.",             correctSpanishWords:["Eso","se","fue","al","traste."],                   distractorWords:["éxito","bien","arriba","buen","resultado"] },
      { id:13, englishPhrase:"Do not count your chickens.",           correctSpanishWords:["No","cuentes","con","ello."],                      distractorWords:["pienses","hagas","digas","prometas","esperes"] },
      { id:14, englishPhrase:"We are on the same page.",              correctSpanishWords:["Estamos","de","acuerdo."],                         distractorWords:["sin","también","además","pero","igual"] },
      { id:15, englishPhrase:"That is the bottom line.",              correctSpanishWords:["Eso","es","lo","esencial."],                       distractorWords:["básico","principal","mínimo","máximo","central"] },
    ],
  };

  /* ================================================================
     NODE STATE LOGIC — localStorage persistence
  ================================================================ */
  const STORAGE_KEY = 'egglish_lecciones_v2';

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch(e) { return {}; }
  }

  function saveProgress(progress) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch(e) {}
  }

  const progress = loadProgress();

  function getNodeState(lessonId, unitNodes, unitIdx) {
    if (progress[lessonId] === 'done') return 'done';
    // Find current: first non-done node in the unit's sequential order
    const firstUndone = unitNodes.findIndex(id => progress[id] !== 'done');
    if (firstUndone === unitIdx) return 'current';
    // Check if all preceding units are complete to unlock this one
    if (firstUndone < unitIdx) return 'locked';
    return 'locked';
  }

  function initLevelProgress(lvl) {
    const panel = document.getElementById(`panel-${lvl}`);
    if (!panel) return;
    const tracks = panel.querySelectorAll('.path-track');

    tracks.forEach(track => {
      const nodes = Array.from(track.querySelectorAll('.lesson-node'));
      const nodeIds = nodes.map(n => n.dataset.lessonId);

      // Determine if previous track is fully done
      const trackIdx = Array.from(tracks).indexOf(track);
      let prevTrackDone = true;
      if (trackIdx > 0) {
        const prevNodes = Array.from(tracks[trackIdx - 1].querySelectorAll('.lesson-node'));
        prevTrackDone = prevNodes.every(n => progress[n.dataset.lessonId] === 'done');
      }

      let foundCurrent = false;
      nodes.forEach((node, i) => {
        const id = node.dataset.lessonId;
        node.innerHTML = ''; // clear existing

        if (progress[id] === 'done') {
          node.className = 'lesson-node state-done';
          node.innerHTML = `<span class="node-star">⭐</span><span class="node-crown">👑</span>`;
          node.parentElement.classList.add('done');
        } else if (!foundCurrent && prevTrackDone) {
          node.className = 'lesson-node state-current';
          node.innerHTML = `
            <span class="node-empezar">EMPEZAR</span>
            <span class="node-icon">🐣</span>
          `;
          foundCurrent = true;
        } else {
          node.className = 'lesson-node state-locked';
          node.innerHTML = `<span class="node-icon">🔒</span>`;
        }

        const tip = document.createElement('span');
        tip.className = 'node-tooltip';
        tip.textContent = node.dataset.label || '';
        node.appendChild(tip);
      });
    });
  }

  function unlockNextLesson(lvl, lessonId) {
    progress[lessonId] = 'done';
    saveProgress(progress);
    ['a1','a2','b1'].forEach(initLevelProgress);
  }

  /* ================================================================
     LESSON ENGINE
  ================================================================ */
  const lessonModal    = document.getElementById('lesson-modal');
  const lessonClose    = document.getElementById('lesson-close');
  const progressFill   = document.getElementById('lesson-progress-fill');
  const heartsEl       = document.getElementById('lesson-hearts');
  const phraseEl       = document.getElementById('lesson-phrase');
  const answerZone     = document.getElementById('lesson-answer-zone');
  const wordbank       = document.getElementById('lesson-wordbank');
  const feedbackEl     = document.getElementById('lesson-feedback');
  const feedbackTitle  = document.getElementById('feedback-title');
  const feedbackAns    = document.getElementById('feedback-answer');
  const btnCheck       = document.getElementById('btn-check');
  const btnSkip        = document.getElementById('btn-skip');
  const audioBtnEl     = document.getElementById('lesson-audio-btn');
  const completionModal = document.getElementById('completion-modal');

  const lessonState = {
    cards: [], cardIndex: 0, hearts: 5,
    phase: 'input', // 'input' | 'correct' | 'wrong'
    selectedWords: [],
    correctCount: 0, totalXp: 0,
    nodeXp: 10, lessonId: '', lvl: ''
  };

  function openLesson(btn) {
    const key = btn.dataset.lessonKey;
    const cards = lessonsData[key];
    if (!cards) { showToast('⚠️ Lección no disponible aún.'); return; }

    lessonState.cards = shuffleArray([...cards]).slice(0, 15);
    lessonState.cardIndex = 0;
    lessonState.hearts = 5;
    lessonState.phase = 'input';
    lessonState.selectedWords = [];
    lessonState.correctCount = 0;
    lessonState.totalXp = 0;
    lessonState.nodeXp = parseInt(btn.dataset.xp) || 10;
    lessonState.lessonId = btn.dataset.lessonId;
    lessonState.lvl = btn.dataset.lessonId.split('-')[0];

    heartsEl.textContent = '❤️ 5';
    progressFill.style.width = '0%';
    feedbackEl.className = 'lesson-feedback';

    lessonModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCard();
  }

  function renderCard() {
    const card = lessonState.cards[lessonState.cardIndex];
    lessonState.phase = 'input';
    lessonState.selectedWords = [];
    feedbackEl.className = 'lesson-feedback';

    // Phrase with hover hints
    phraseEl.innerHTML = buildHintPhrase(card.englishPhrase);

    // Answer zone
    answerZone.innerHTML = '';

    // Word bank: correct + distractors, shuffled
    const allWords = [...card.correctSpanishWords, ...card.distractorWords.slice(0, 5)];
    const shuffled = shuffleArray(allWords);
    wordbank.innerHTML = '';
    shuffled.forEach((word, idx) => {
      const btn = document.createElement('button');
      btn.className = 'bank-word';
      btn.textContent = word;
      btn.addEventListener('click', () => bankWordClick(btn, word, idx));
      wordbank.appendChild(btn);
    });

    updateCheckBtn();
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function bankWordClick(btn, word, bankIdx) {
    if (lessonState.phase !== 'input') return;
    if (btn.classList.contains('used')) return;

    btn.classList.add('used');
    lessonState.selectedWords.push({ word, bankIdx, bankBtn: btn });

    const tag = document.createElement('button');
    tag.className = 'answer-word';
    tag.textContent = word;
    tag.dataset.selIdx = lessonState.selectedWords.length - 1;
    tag.addEventListener('click', () => removeAnswerWord(tag));
    answerZone.appendChild(tag);

    updateCheckBtn();
  }

  function removeAnswerWord(tag) {
    if (lessonState.phase !== 'input') return;
    const selIdx = parseInt(tag.dataset.selIdx);
    const sel = lessonState.selectedWords[selIdx];
    if (!sel) return;

    if (sel.bankBtn) sel.bankBtn.classList.remove('used');
    lessonState.selectedWords.splice(selIdx, 1);
    tag.remove();

    answerZone.querySelectorAll('.answer-word').forEach((el, i) => {
      el.dataset.selIdx = i;
    });

    updateCheckBtn();
  }

  function updateCheckBtn() {
    const hasAnswer = lessonState.selectedWords.length > 0;
    if (lessonState.phase === 'correct') {
      btnCheck.className = 'btn-check correct-continue';
      btnCheck.textContent = 'CONTINUAR';
    } else if (lessonState.phase === 'wrong') {
      btnCheck.className = 'btn-check wrong';
      btnCheck.textContent = 'INTENTAR DE NUEVO';
    } else {
      btnCheck.className = hasAnswer ? 'btn-check ready' : 'btn-check';
      btnCheck.textContent = 'COMPROBAR';
    }
  }

  function checkAnswer() {
    if (lessonState.phase === 'correct') { advanceCard(); return; }
    if (lessonState.phase === 'wrong') { resetCard(); return; }

    const card = lessonState.cards[lessonState.cardIndex];
    const userAnswer = lessonState.selectedWords.map(s => s.word).join(' ');
    const correct    = card.correctSpanishWords.join(' ');

    if (userAnswer === correct) {
      lessonState.phase = 'correct';
      lessonState.correctCount++;
      lessonState.totalXp += Math.ceil(lessonState.nodeXp / 15);

      feedbackTitle.className = 'feedback-title correct';
      feedbackTitle.textContent = '¡Correcto! 🎉';
      feedbackAns.textContent = correct;
      feedbackEl.className = 'lesson-feedback correct';

      progressFill.style.width = (((lessonState.cardIndex + 1) / 15) * 100) + '%';
      updateCheckBtn();
    } else {
      lessonState.hearts = Math.max(0, lessonState.hearts - 1);
      lessonState.phase = 'wrong';

      feedbackTitle.className = 'feedback-title wrong';
      feedbackTitle.textContent = '¡Incorrecto! 💔';
      feedbackAns.textContent = 'Respuesta correcta: ' + correct;
      feedbackEl.className = 'lesson-feedback wrong';

      heartsEl.textContent = '❤️ ' + lessonState.hearts;
      updateCheckBtn();

      if (lessonState.hearts <= 0) {
        setTimeout(() => { closeLesson(); showToast('💔 Sin corazones. ¡Inténtalo de nuevo!', '', 3000); }, 1200);
      }
    }
  }

  function resetCard() {
    lessonState.selectedWords.forEach(s => s.bankBtn && s.bankBtn.classList.remove('used'));
    lessonState.selectedWords = [];
    answerZone.innerHTML = '';
    lessonState.phase = 'input';
    feedbackEl.className = 'lesson-feedback';
    updateCheckBtn();
  }

  function advanceCard() {
    lessonState.cardIndex++;
    if (lessonState.cardIndex >= 15) {
      finishLesson();
    } else {
      renderCard();
    }
  }

  function skipCard() {
    if (lessonState.phase === 'input') {
      lessonState.hearts = Math.max(0, lessonState.hearts - 1);
      heartsEl.textContent = '❤️ ' + lessonState.hearts;
      const card = lessonState.cards[lessonState.cardIndex];
      feedbackTitle.className = 'feedback-title wrong';
      feedbackTitle.textContent = 'Omitido 🙈';
      feedbackAns.textContent = 'Respuesta: ' + card.correctSpanishWords.join(' ');
      feedbackEl.className = 'lesson-feedback wrong';
      lessonState.phase = 'wrong';
      updateCheckBtn();
    } else {
      advanceCard();
    }
  }

  function finishLesson() {
    closeLesson(false);
    document.getElementById('stat-xp').textContent = '+' + lessonState.totalXp;
    document.getElementById('stat-correct').textContent = lessonState.correctCount + '/15';
    completionModal.classList.add('open');
  }

  function closeLesson(resetState = true) {
    lessonModal.classList.remove('open');
    document.body.style.overflow = '';
    feedbackEl.className = 'lesson-feedback';
    if (resetState) { lessonState.phase = 'input'; }
  }

  document.getElementById('completion-continue').addEventListener('click', () => {
    completionModal.classList.remove('open');
    unlockNextLesson(lessonState.lvl, lessonState.lessonId);
    floatXP(lessonState.totalXp);
  });

  audioBtnEl.addEventListener('click', () => {
    const text = phraseEl.textContent;
    if (!text) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'en-US'; utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  });

  btnCheck.addEventListener('click', () => {
    if (lessonState.phase === 'input' && lessonState.selectedWords.length === 0) return;
    checkAnswer();
  });

  btnSkip.addEventListener('click', skipCard);
  lessonClose.addEventListener('click', () => closeLesson());

  document.querySelectorAll('.lesson-node').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('state-locked')) return;
      openLesson(btn);
    });
  });

  /* ================================================================
     LEVEL TABS
  ================================================================ */
  document.querySelectorAll('.level-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const lvl = tab.dataset.level;
      document.querySelectorAll('.level-tab').forEach(t => {
        t.classList.remove('active'); t.setAttribute('aria-selected','false');
      });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      document.querySelectorAll('.level-panel').forEach(p => p.classList.remove('active'));
      const target = document.getElementById(`panel-${lvl}`);
      if (target) { target.classList.add('active'); initLevelProgress(lvl); }
    });
  });

  /* ================================================================
     TOAST
  ================================================================ */
  const toastEl = document.getElementById('toast');
  let toastTimer;
  function showToast(msg, type = '', ms = 2400) {
    clearTimeout(toastTimer);
    toastEl.textContent = msg;
    toastEl.className = 'toast' + (type ? ` ${type}` : '') + ' show';
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms);
  }

  /* ================================================================
     XP FLOAT
  ================================================================ */
  function floatXP(xp) {
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = `+${xp} XP 🌟`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }

  /* ================================================================
     BOOT
  ================================================================ */
  ['a1','a2','b1'].forEach(initLevelProgress);

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('nav-menu');

    // Validación de seguridad: solo ejecuta si los elementos existen
    if (btn && menu) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el click cierre el menú inmediatamente
            menu.classList.toggle('active');
        });

        // Cerrar al hacer click fuera del menú
        document.addEventListener('click', (e) => {
            // Verificamos si el menú está abierto Y si el click fue fuera del menú y del botón
            if (menu.classList.contains('active')) {
                if (!menu.contains(e.target) && !btn.contains(e.target)) {
                    menu.classList.remove('active');
                }
            }
        });
    } else {
        console.warn("No se encontraron los elementos del menú. Revisa los IDs en tu HTML.");
    }
});