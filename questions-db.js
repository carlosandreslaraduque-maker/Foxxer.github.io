/* ==========================================================================
   FOXER - BASE DE DATOS OFICIAL DE PREGUNTAS SABER 11 (ICFES)
   Total: 125 Preguntas Reales y Explicadas (25 por cada una de las 5 Áreas)
   5 Nodos por Área x 5 Preguntas por Nodo = 25 Preguntas Únicas por Mundo
   ========================================================================== */

window.FOXER_QUESTIONS_DB = {
  version: '2.0-ICFES-125',
  totalQuestions: 125,

  // ========================================================================
  // 1. LECTURA CRÍTICA (25 PREGUNTAS: Nodos 1 al 5)
  // ========================================================================
  lectura: [
    // --- NODO 1: Sentido Local y Vocabulario en Contexto (Preguntas 1-5) ---
    {
      id: 'LEC-01',
      node: 0,
      comp: 'Comprensión Local • Tesis Central',
      context: '«La hiperconectividad digital nos ha hecho creer que estar informados al instante equivale a comprender el mundo. Sin embargo, el exceso de datos sin pausa reflexiva produce más ruido que sabiduría: sabemos qué ocurrió hace cinco segundos, pero ignoramos por qué ocurrió.»',
      stem: '¿Cuál es la tesis central que defiende el autor en el fragmento anterior?',
      options: [
        'La tecnología digital debe prohibirse porque impide el acceso a noticias reales.',
        'Tener acceso inmediato a mucha información no garantiza una comprensión profunda de la realidad.',
        'Las noticias que ocurren en cinco segundos son más confiables que los libros de historia.',
        'La sabiduría moderna depende exclusivamente de la velocidad de conexión a internet.'
      ],
      correct: 1,
      explanation: 'El autor contrasta "estar informados al instante" con "comprender el mundo". Truco FOXER: Busca la opción que conserve la oposición entre acumulación de datos y reflexión profunda.'
    },
    {
      id: 'LEC-02',
      node: 0,
      comp: 'Conectores Lógicos',
      context: '«El proyecto de reforestación contaba con el presupuesto completo y el apoyo de la comunidad local; ____________, las lluvias torrenciales de octubre obligaron a aplazar la siembra dos meses.»',
      stem: '¿Qué conector lógico completa adecuadamente el espacio sin alterar el sentido adversativo del enunciado?',
      options: [
        'por consiguiente',
        'además',
        'no obstante',
        'es decir'
      ],
      correct: 2,
      explanation: 'La primera parte presenta condiciones favorables y la segunda un obstáculo inesperado. "No obstante" introduce una restricción u oposición, equivalente a "sin embargo".'
    },
    {
      id: 'LEC-03',
      node: 0,
      comp: 'Significado Contextual',
      context: '«Aquel crítico literario era famoso por sus reseñas mordaces; ningún escritor novato salía ileso de su columna dominical.»',
      stem: 'En el fragmento anterior, la palabra "mordaces" puede reemplazarse, sin cambiar el sentido, por:',
      options: [
        'tiernas y compasivas',
        'agudas, irónicas y severas',
        'extensas y aburridas',
        'confusas y desordenadas'
      ],
      correct: 1,
      explanation: 'Si "ningún escritor salía ileso", significa que sus críticas herían o atacaban con agudeza e ironía ("mordaces").'
    },
    {
      id: 'LEC-04',
      node: 0,
      comp: 'Referencia Pronominal',
      context: '«Los glaciares andinos retroceden a un ritmo alarmante debido al calentamiento global. Estos actúan como reservas hídricas vitales para millones de personas en las épocas de sequía.»',
      stem: 'En la segunda oración, la palabra subrayada "Estos" hace referencia a:',
      options: [
        'Los millones de personas.',
        'Los glaciares andinos.',
        'Las épocas de sequía.',
        'Los ritmos alarmantes.'
      ],
      correct: 1,
      explanation: '"Estos" es un pronombre demostrativo masculino plural que retoma el sujeto principal de la oración anterior: "Los glaciares andinos".'
    },
    {
      id: 'LEC-05',
      node: 0,
      comp: 'Función de los Signos de Puntuación',
      context: '«El jurado declaró culpable al acusado —a pesar de las protestas de la defensa— porque las pruebas documentales eran irrefutables.»',
      stem: '¿Qué función cumplen las rayas o guiones largos (— —) en el enunciado anterior?',
      options: [
        'Indicar que habla un personaje distinto en un diálogo teatral.',
        'Encerrar una aclaración o inciso secundario dentro de la oración principal.',
        'Señalar que la frase contiene un error ortográfico.',
        'Reemplazar el punto final del párrafo.'
      ],
      correct: 1,
      explanation: 'Las rayas dobles funcionan igual que los paréntesis o comas explicativas: aíslan un inciso aclaratorio sin romper el hilo sintáctico.'
    },

    // --- NODO 2: Inferencia Global y Estructura Textual (Preguntas 6-10) ---
    {
      id: 'LEC-06',
      node: 1,
      comp: 'Evaluación de Estrategias Persuasivas',
      context: 'En un afiche publicitario de una bebida azucarada aparece un atleta olímpico cruzando la meta con el lema: "¡La energía de los campeones está en cada sorbo!".',
      stem: '¿Qué estrategia persuasiva utiliza principalmente este anuncio publicitario?',
      options: [
        'Demostrar científicamente la tabla nutricional de la bebida.',
        'Asociar el consumo del producto con el éxito deportivo para apelar a las emociones del consumidor.',
        'Advertir a los compradores sobre los riesgos del exceso de azúcar antes de competir.',
        'Comparar el precio de la bebida con el de otras marcas del mercado.'
      ],
      correct: 1,
      explanation: 'La publicidad apela a la transferencia emocional de prestigio: vincula la bebida con el triunfo olímpico sin ofrecer pruebas nutricionales.'
    },
    {
      id: 'LEC-07',
      node: 1,
      comp: 'Inferencia e Ironía Literaria',
      context: '«Don Prudencio era tan generoso que, cuando invitaba a cenar a sus amigos, les leía poemas sobre el ayuno espiritual para no arruinarles la salud con comida.»',
      stem: 'A partir del tono del narrador, se puede concluir que al llamar "generoso" a Don Prudencio está utilizando:',
      options: [
        'Una metáfora científica sobre la nutrición.',
        'Una ironía para destacar que en realidad era tacaño.',
        'Un elogio sincero hacia su talento como poeta.',
        'Una hipérbole sobre la abundancia de sus banquetes.'
      ],
      correct: 1,
      explanation: 'Afirmar que alguien es "generoso" cuando en los hechos no les da de comer a sus invitados es el recurso retórico de la ironía.'
    },
    {
      id: 'LEC-08',
      node: 1,
      comp: 'Tipología Textual',
      context: 'Un artículo presenta gráficas oficiales del DANE sobre el desempleo juvenil, sin usar adjetivos calificativos ni opiniones personales, limitándose a reportar las cifras del último trimestre.',
      stem: '¿Cuál es el propósito comunicativo predominante de este texto?',
      options: [
        'Informar de manera objetiva sobre un fenómeno socioeconómico.',
        'Narrar una historia ficticia sobre jóvenes trabajadores.',
        'Convencer al lector de votar por un candidato específico.',
        'Expresar los sentimientos íntimos del periodista.'
      ],
      correct: 0,
      explanation: 'Un texto basado en datos verificables y exento de juicios de valor tiene una intención expositiva-informativa.'
    },
    {
      id: 'LEC-09',
      node: 1,
      comp: 'Narratología • Tipo de Narrador',
      context: '«Aquella mañana me desperté con el presentimiento de que algo extraño iba a ocurrir en el puerto. Me puse el abrigo gris y salí sin hacer ruido.»',
      stem: '¿Qué tipo de narrador relata los hechos en el fragmento anterior?',
      options: [
        'Narrador omnisciente en tercera persona.',
        'Narrador protagonista en primera persona.',
        'Narrador en segunda persona.',
        'Narrador objetivo externo.'
      ],
      correct: 1,
      explanation: 'El uso de verbos y pronombres en primera persona ("me desperté", "me puse", "salí") demuestra que quien narra es el propio protagonista.'
    },
    {
      id: 'LEC-10',
      node: 1,
      comp: 'Lectura de Infografías y Textos Discontinuos',
      context: 'En una etiqueta de medicamentos aparece un triángulo amarillo con un signo de exclamación y un volante de automóvil tachado con una línea roja.',
      stem: '¿Qué mensaje transmite este ícono visual al paciente?',
      options: [
        'Que el medicamento solo puede comprarse en estaciones de gasolina.',
        'Que el medicamento puede producir somnolencia y no se debe conducir bajo su efecto.',
        'Que es obligatorio tomar la pastilla dentro de un vehículo.',
        'Que el medicamento sirve para evitar el mareo en carretera.'
      ],
      correct: 1,
      explanation: 'El triángulo amarillo indica advertencia o precaución, y el volante tachado señala la prohibición de manejar vehículos por riesgo de somnolencia.'
    },

    // --- NODO 3: Argumentación y Falacias (Preguntas 11-15) ---
    {
      id: 'LEC-11',
      node: 2,
      comp: 'Identificación de Falacias',
      context: 'En un debate escolar sobre energías limpias, un participante dice: «No deberíamos escuchar la propuesta solar de Julián, porque él reprobó educación física el semestre pasado».',
      stem: '¿Qué error argumentativo (falacia) comete el participante?',
      options: [
        'Falacia ad hominem (atacar a la persona en lugar de refutar su argumento).',
        'Argumento basado en evidencia científica comprobada.',
        'Deducción lógica válida a partir de premisas verdaderas.',
        'Uso de estadísticas oficiales.'
      ],
      correct: 0,
      explanation: 'Descalificar una idea atacando un rasgo personal del hablante ajeno al tema ("reprobó educación física") es una falacia ad hominem.'
    },
    {
      id: 'LEC-12',
      node: 2,
      comp: 'Estructura Argumentativa',
      context: '«Se debe fomentar el uso de la bicicleta en las ciudades (1), ya que reduce hasta en un 40% las emisiones de gases contaminantes por pasajero y mejora la salud cardiovascular (2).»',
      stem: '¿Qué relación existe entre la parte (1) y la parte (2) del texto?',
      options: [
        '(1) es una conclusión sin sustento y (2) es una contradicción.',
        '(1) es la tesis o propuesta y (2) es el argumento o razón que la respalda.',
        '(1) es un ejemplo histórico y (2) es una pregunta retórica.',
        'Ambas partes defienden posturas opuestas sobre el transporte.'
      ],
      correct: 1,
      explanation: 'El conector causal "ya que" introduce las razones (2) que justifican la propuesta principal o tesis (1).'
    },
    {
      id: 'LEC-13',
      node: 2,
      comp: 'Contraargumentación',
      context: 'Una alcaldía afirma que prohibir las motos los viernes eliminará por completo los trancones de la ciudad. Un experto en movilidad responde que en ciudades donde se aplicó la medida, muchos ciudadanos compraron un segundo vehículo viejo, aumentando el tráfico total.',
      stem: '¿Qué función cumple la intervención del experto frente a la afirmación de la alcaldía?',
      options: [
        'Confirmar que la medida de la alcaldía es infalible.',
        'Presentar un contraargumento basado en casos previos que cuestiona la efectividad de la medida.',
        'Proponer que se cierren todas las calles peatonales.',
        'Elogiar la gestión ambiental de los motociclistas.'
      ],
      correct: 1,
      explanation: 'El experto aporta evidencia empírica de otras ciudades para refutar la predicción optimista de la alcaldía (contraargumento).'
    },
    {
      id: 'LEC-14',
      node: 2,
      comp: 'Falacia de Falsa Generalización',
      context: '«Ayer compré un mango en la plaza del barrio y salió ácido; por lo tanto, todas las frutas que se cultivan en el país son ácidas.»',
      stem: '¿Por qué es inválido el razonamiento anterior?',
      options: [
        'Porque generaliza precipitadamente a partir de un único caso particular.',
        'Porque utiliza demasiados datos estadísticos nacionales.',
        'Porque confunde las frutas con las verduras.',
        'Porque cita a un experto en agronomía.'
      ],
      correct: 0,
      explanation: 'Sacar una conclusión universal ("todas las frutas del país") a partir de una muestra insuficiente (un solo mango) es una generalización apresurada.'
    },
    {
      id: 'LEC-15',
      node: 2,
      comp: 'Distinción Hecho vs. Opinión',
      context: 'Lee los siguientes cuatro enunciados sobre el río Magdalena:',
      stem: '¿Cuál de los siguientes enunciados expresa una OPINIÓN subjetiva y NO un hecho verificable?',
      options: [
        'El río Magdalena nace en el departamento del Huila.',
        'El río Magdalena desemboca en el mar Caribe en Bocas de Ceniza.',
        'El atardecer sobre el río Magdalena es el espectáculo más hermoso de todo el planeta.',
        'La cuenca del río Magdalena abarca cerca del 24% del territorio continental colombiano.'
      ],
      correct: 2,
      explanation: 'Calificar algo como "el más hermoso de todo el planeta" es un juicio estético subjetivo imposible de medir objetivamente.'
    },

    // --- NODO 4: Textos Filosóficos y Literarios (Preguntas 16-20) ---
    {
      id: 'LEC-16',
      node: 3,
      comp: 'Lectura Filosófica • Sócrates',
      context: '«Para Sócrates, el verdadero sabio no es quien acumula respuestas prestadas, sino quien reconoce los límites de su propio saber y se atreve a interrogar sus certezas.»',
      stem: 'De acuerdo con el texto, la actitud socrática frente al conocimiento exige:',
      options: [
        'Memorizar las opiniones de la mayoría sin cuestionarlas.',
        'Humildad intelectual y disposición constante al cuestionamiento.',
        'Rechazar cualquier diálogo con otras personas de la ciudad.',
        'Aceptar únicamente aquello que produzca riqueza material.'
      ],
      correct: 1,
      explanation: 'Reconocer los límites del propio saber e interrogar las certezas define la humildad intelectual y el método mayéutico socrático.'
    },
    {
      id: 'LEC-17',
      node: 3,
      comp: 'Filosofía Moderna • Kant',
      context: '«La Ilustración es la salida del ser humano de su minoría de edad culpable. Minoría de edad es la incapacidad de servirse de su propio entendimiento sin la dirección de otro. ¡Sapere aude! ¡Ten el valor de servirte de tu propia razón!» — Immanuel Kant.',
      stem: 'Para Kant, permanecer en la "minoría de edad" significa:',
      options: [
        'Tener menos de dieciocho años según la cédula de ciudadanía.',
        'Renunciar a pensar con autonomía y dejar que otros decidan por nosotros.',
        'Estudiar ciencias naturales en lugar de literatura clásica.',
        'Cuestionar las tradiciones mediante el uso de la razón.'
      ],
      correct: 1,
      explanation: 'Kant usa "minoría de edad" en sentido filosófico: la pereza o cobardía que impide pensar por cuenta propia (falta de autonomía racional).'
    },
    {
      id: 'LEC-18',
      node: 3,
      comp: 'Literatura Latinoamericana • Realismo Mágico',
      context: '«El padre Nicanor se elevó doce centímetros sobre el nivel del suelo después de tomar una taza de chocolate espeso, mientras los habitantes del pueblo seguían conversando sin asombrarse en lo más mínimo.»',
      stem: '¿Qué característica del Realismo Mágico se evidencia en este pasaje?',
      options: [
        'La explicación física detallada de las leyes de la gravedad.',
        'La integración de un suceso prodigioso o fantástico como si fuera parte normal de la vida cotidiana.',
        'El uso exclusivo de fórmulas matemáticas dentro de un poema.',
        'La descripción realista de una batalla histórica del siglo XIX.'
      ],
      correct: 1,
      explanation: 'En el Realismo Mágico lo extraordinario (levitar doce centímetros) se narra con total naturalidad y sin causar asombro en los personajes.'
    },
    {
      id: 'LEC-19',
      node: 3,
      comp: 'Ética y Filosofía Política • Maquiavelo',
      context: '«Un príncipe prudente no puede ni debe mantener fidelidad a las promesas cuando tal fidelidad se vuelve en contra suya y han desaparecido los motivos que determinaron su promesa. Si los hombres fuesen todos buenos, este precepto no sería correcto; pero como son malos, tampoco la mantendrían contigo.» — Nicolás Maquiavelo.',
      stem: '¿Qué concepción sobre la política y la naturaleza humana sostiene Maquiavelo en este texto?',
      options: [
        'Que todos los seres humanos actúan siempre con bondad desinteresada.',
        'Que la acción política se rige por la eficacia práctica y una visión realista de los intereses humanos.',
        'Que los gobernantes deben renunciar al poder al primer obstáculo.',
        'Que las promesas políticas jamás tienen relación con las circunstancias.'
      ],
      correct: 1,
      explanation: 'Maquiavelo separa la moral idealista del realismo político (Realpolitik), partiendo de que los hombres suelen actuar por interés.'
    },
    {
      id: 'LEC-20',
      node: 3,
      comp: 'Figuras Literarias',
      context: '«Tus palabras fueron puñales de hielo que atravesaron el silencio de la sala.»',
      stem: '¿Qué figura retórica predomina al identificar las "palabras" con "puñales de hielo"?',
      options: [
        'Metáfora.',
        'Onomatopeya.',
        'Anáfora.',
        'Eufemismo.'
      ],
      correct: 0,
      explanation: 'Trasladar el significado de un concepto ("palabras hirientes y frías") a una imagen directa ("puñales de hielo") sin usar "como" es una metáfora.'
    },

    // --- NODO 5: Jefe Lectura Crítica Intertextual (Preguntas 21-25) ---
    {
      id: 'LEC-21',
      node: 4,
      comp: 'Lectura Intertextual Comparada',
      context: 'Texto A: «La inteligencia artificial reemplazará la creatividad humana porque procesa millones de estilos en segundos».\nTexto B: «La inteligencia artificial combina patrones existentes, pero el arte humano nace de la experiencia vivida, el dolor y la conciencia de nuestra mortalidad».',
      stem: 'Al comparar ambos textos, se observa que el Texto B refuta al Texto A al señalar que:',
      options: [
        'Las computadoras son demasiado lentas para procesar imágenes.',
        'La verdadera creación artística requiere vivencias subjetivas y conciencia humana, no solo cálculo de patrones.',
        'El arte humano nunca ha tenido valor en la historia.',
        'Ambos autores están de acuerdo en que las máquinas sienten dolor.'
      ],
      correct: 1,
      explanation: 'Mientras el Texto A reduce la creatividad a velocidad de procesamiento, el Texto B la vincula con la experiencia vital y la conciencia humana.'
    },
    {
      id: 'LEC-22',
      node: 4,
      comp: 'Supuestos Subyacentes',
      context: 'Un cartel en la entrada de un edificio dice: «Por favor, no deje escapar a las mascotas de los vecinos al abrir el portón principal».',
      stem: '¿Qué presupuesto o información implícita se da por cierta en este aviso?',
      options: [
        'En el edificio está prohibido tener animales domésticos.',
        'Algunos residentes del edificio tienen mascotas que podrían salir hacia la calle.',
        'El portón principal permanece cerrado con candado todo el año.',
        'Los vecinos prefieren que sus mascotas vivan en la calle.'
      ],
      correct: 1,
      explanation: 'Para pedir que "no deje escapar a las mascotas de los vecinos", el texto presupone necesariamente que en el edificio habitan vecinos con mascotas.'
    },
    {
      id: 'LEC-23',
      node: 4,
      comp: 'Intención del Autor y Público Objetivo',
      context: 'Un folleto explica con ilustraciones sencillas: «¡Lava tus manos con agua y jabón contando hasta veinte antes de comer tu lonchera en el recreo!».',
      stem: 'Por el vocabulario y las referencias empleadas ("lonchera", "recreo"), ¿a qué público va dirigido principalmente este mensaje?',
      options: [
        'A médicos cirujanos especializados en microbiología.',
        'A niños en edad escolar de primaria.',
        'A pensionados de la tercera edad.',
        'A ingenieros químicos industriales.'
      ],
      correct: 1,
      explanation: 'Las marcas léxicas "lonchera", "recreo" y el tono didáctico revelan que el receptor previsto es la población infantil escolar.'
    },
    {
      id: 'LEC-24',
      node: 4,
      comp: 'Filosofía Existencialista • Sartre',
      context: '«El hombre está condenado a ser libre: porque una vez arrojado al mundo, es responsable de todo lo que hace.» — Jean-Paul Sartre.',
      stem: 'Según la afirmación de Sartre, la libertad humana implica inevitablemente:',
      options: [
        'Que podemos culpar al destino de todas nuestras decisiones.',
        'Una responsabilidad total del individuo sobre sus propios actos y elecciones.',
        'Que las leyes de la física no existen para los filósofos.',
        'Que nadie puede elegir su propio proyecto de vida.'
      ],
      correct: 1,
      explanation: 'Para el existencialismo sartreano, libertad y responsabilidad son inseparables: al no estar predeterminados, respondemos por nuestras elecciones.'
    },
    {
      id: 'LEC-25',
      node: 4,
      comp: 'Síntesis Crítica de Caricatura',
      context: 'En una caricatura se ve a un hombre talando el último árbol de una isla diminuta para fabricar un letrero gigante de madera que dice: "¡PROHIBIDO DAÑAR EL BOSQUE!".',
      stem: '¿Qué crítica social realiza el caricaturista a través de esta imagen?',
      options: [
        'Destaca la excelente calidad de la madera utilizada en los avisos.',
        'Denuncia la contradicción e hipocresía entre los discursos ambientalistas y las acciones destructivas reales.',
        'Enseña técnicas de carpintería para islas desiertas.',
        'Promueve la tala de árboles para mejorar el paisaje marino.'
      ],
      correct: 1,
      explanation: 'La paradoja visual (destruir el último árbol para escribir un mensaje ecologista) critica la incoherencia entre el discurso y la práctica.'
    }
  ],

  // ========================================================================
  // 2. MATEMÁTICAS (25 PREGUNTAS: Nodos 1 al 5)
  // ========================================================================
  matematicas: [
    // --- NODO 1: Porcentajes y Proporcionalidad ICFES (Preguntas 1-5) ---
    {
      id: 'MAT-01',
      node: 0,
      comp: 'Razonamiento Cuantitativo • Porcentajes',
      context: 'En una librería, un libro de preparación para el ICFES cuesta $80.000. Por el día del estudiante ofrecen un descuento del 25%.',
      stem: '¿Cuánto debe pagar un estudiante por el libro tras aplicar el descuento?',
      options: [
        '$55.000',
        '$60.000',
        '$65.000',
        '$20.000'
      ],
      correct: 1,
      explanation: 'El 25% es la cuarta parte (1/4). La cuarta parte de $80.000 es $20.000 (descuento). Precio final = $80.000 - $20.000 = $60.000.'
    },
    {
      id: 'MAT-02',
      node: 0,
      comp: 'Proporcionalidad Inversa',
      context: '3 pintores tardan 8 días en pintar la fachada de un colegio trabajando al mismo ritmo.',
      stem: 'Si se contratan en total 6 pintores con el mismo rendimiento, ¿cuántos días tardarán en pintar la misma fachada?',
      options: [
        '16 días',
        '4 días',
        '2 días',
        '6 días'
      ],
      correct: 1,
      explanation: 'A DOBLE cantidad de pintores (de 3 a 6), tardan la MITAD del tiempo (de 8 días baja a 4 días). Producto constante: 3 × 8 = 24 = 6 × 4.'
    },
    {
      id: 'MAT-03',
      node: 0,
      comp: 'Aumentos y Descuentos Sucesivos',
      context: 'Un artículo cuesta $100.000. En enero su precio sube un 10%, y en febrero sobre ese nuevo precio se aplica un descuento del 10%.',
      stem: '¿Cuál es el precio final del artículo en febrero?',
      options: [
        '$100.000',
        '$99.000',
        '$101.000',
        '$90.000'
      ],
      correct: 1,
      explanation: '¡Clásica trampa ICFES! En enero sube 10% de 100.000 -> pasa a $110.000. En febrero baja el 10% de $110.000 ($11.000) -> 110.000 - 11.000 = $99.000.'
    },
    {
      id: 'MAT-04',
      node: 0,
      comp: 'Fracciones y Repartos',
      context: 'De un tanque lleno de 120 litros de agua, se gastan 2/5 en la mañana y luego 1/3 del total inicial en la tarde.',
      stem: '¿Cuántos litros de agua se gastaron en total durante el día?',
      options: [
        '88 litros',
        '72 litros',
        '48 litros',
        '40 litros'
      ],
      correct: 0,
      explanation: 'En la mañana: (2/5) de 120 = 48 litros. En la tarde: (1/3) de 120 = 40 litros. Total gastado = 48 + 40 = 88 litros.'
    },
    {
      id: 'MAT-05',
      node: 0,
      comp: 'Conversión de Unidades y Escalas',
      context: 'En un mapa a escala, 1 centímetro representa 25 kilómetros reales. Dos ciudades están separadas por 6,4 centímetros en el mapa.',
      stem: '¿Cuál es la distancia real en línea recta entre las dos ciudades?',
      options: [
        '150 km',
        '160 km',
        '175 km',
        '128 km'
      ],
      correct: 1,
      explanation: 'Multiplicamos 6,4 × 25 km: 6 × 25 = 150 km, y 0,4 × 25 = 10 km. En total: 150 + 10 = 160 km.'
    },

    // --- NODO 2: Probabilidad, Conteo y Estadística (Preguntas 6-10) ---
    {
      id: 'MAT-06',
      node: 1,
      comp: 'Probabilidad Simple',
      context: 'En una bolsa oscura hay 4 balotas rojas, 6 balotas azules y 10 balotas verdes, todas idénticas al tacto.',
      stem: 'Si se extrae una balota al azar, ¿cuál es la probabilidad de que sea AZUL?',
      options: [
        '6 de 14 (42,8%)',
        '6 de 20 (30%)',
        '1 de 6 (16,6%)',
        '10 de 20 (50%)'
      ],
      correct: 1,
      explanation: 'Casos favorables (azules) = 6. Casos totales = 4 + 6 + 10 = 20. Probabilidad = 6/20 = 3/10 = 30%.'
    },
    {
      id: 'MAT-07',
      node: 1,
      comp: 'Medidas de Tendencia Central • Media',
      context: 'Los puntajes de Camila en 4 simulacros cortos fueron: 70, 80, 80 y 90 puntos.',
      stem: '¿Cuál es el promedio (media aritmética) de los puntajes de Camila?',
      options: [
        '75 puntos',
        '80 puntos',
        '85 puntos',
        '90 puntos'
      ],
      correct: 1,
      explanation: 'Suma = 70 + 80 + 80 + 90 = 320. Promedio = 320 / 4 = 80 puntos.'
    },
    {
      id: 'MAT-08',
      node: 1,
      comp: 'Mediana y Moda',
      context: 'Las edades de 7 integrantes de un club de robótica son: 14, 15, 15, 16, 17, 17 y 17 años.',
      stem: '¿Cuáles son la MEDIANA y la MODA de este conjunto de edades, respectivamente?',
      options: [
        'Mediana = 15 y Moda = 17',
        'Mediana = 16 y Moda = 17',
        'Mediana = 17 y Moda = 15',
        'Mediana = 16 y Moda = 16'
      ],
      correct: 1,
      explanation: 'Con los 7 datos ya ordenados, el dato central (posición 4) es 16 (Mediana). El dato que más se repite (3 veces) es 17 (Moda).'
    },
    {
      id: 'MAT-09',
      node: 1,
      comp: 'Principio Multiplicativo de Conteo',
      context: 'Un restaurante ofrece un menú ejecutivo donde el cliente debe elegir 1 de 3 sopas, 1 de 4 platos fuertes y 1 de 2 jugos naturales.',
      stem: '¿De cuántas maneras diferentes puede un cliente armar su almuerzo completo?',
      options: [
        '9 maneras',
        '24 maneras',
        '14 maneras',
        '12 maneras'
      ],
      correct: 1,
      explanation: 'Por el principio multiplicativo: 3 sopas × 4 platos fuertes × 2 jugos = 24 combinaciones distintas.'
    },
    {
      id: 'MAT-10',
      node: 1,
      comp: 'Probabilidad de Eventos Independientes',
      context: 'Se lanza una moneda honesta (Cara o Sello) y simultáneamente un dado de 6 caras numeradas del 1 al 6.',
      stem: '¿Cuál es la probabilidad de obtener CARA en la moneda y un NÚMERO PAR en el dado?',
      options: [
        '1/2 (50%)',
        '1/4 (25%)',
        '1/6 (16,6%)',
        '1/12 (8,3%)'
      ],
      correct: 1,
      explanation: 'P(Cara) = 1/2. En el dado hay 3 pares (2, 4, 6) de 6 -> P(Par) = 3/6 = 1/2. Como son independientes: (1/2) × (1/2) = 1/4 = 25%.'
    },

    // --- NODO 3: Geometría, Pitágoras y Áreas (Preguntas 11-15) ---
    {
      id: 'MAT-11',
      node: 2,
      comp: 'Geometría • Perímetro y Área',
      context: 'Un terreno rectangular tiene 12 metros de largo y 5 metros de ancho. Se desea cercar su contorno con una vuelta de alambre y cubrir su superficie con césped.',
      stem: '¿Cuántos metros de alambre (perímetro) y cuántos metros cuadrados de césped (área) se necesitan respectivamente?',
      options: [
        '17 m de alambre y 60 m² de césped',
        '34 m de alambre y 60 m² de césped',
        '60 m de alambre y 34 m² de césped',
        '24 m de alambre y 30 m² de césped'
      ],
      correct: 1,
      explanation: 'Perímetro = 12 + 5 + 12 + 5 = 34 m. Área = base × altura = 12 × 5 = 60 m².'
    },
    {
      id: 'MAT-12',
      node: 2,
      comp: 'Teorema de Pitágoras',
      context: 'Una escalera se apoya contra una pared vertical. La base de la escalera está a 3 metros de la pared y la parte superior alcanza una altura de 4 metros sobre la pared.',
      stem: '¿Cuál es la longitud de la escalera?',
      options: [
        '7 metros',
        '5 metros',
        '6 metros',
        '25 metros'
      ],
      correct: 1,
      explanation: 'Forma un triángulo rectángulo notable (3-4-5): h = √(3² + 4²) = √(9 + 16) = √25 = 5 metros.'
    },
    {
      id: 'MAT-13',
      node: 2,
      comp: 'Volumen de Prismas y Cilindros',
      context: 'Una caja de cartón tiene forma de prisma rectangular con 10 cm de largo, 5 cm de ancho y 4 cm de alto.',
      stem: '¿Cuál es el volumen total de la caja en centímetros cúbicos (cm³)?',
      options: [
        '19 cm³',
        '200 cm³',
        '100 cm³',
        '90 cm³'
      ],
      correct: 1,
      explanation: 'Volumen de un ortoedro = largo × ancho × alto = 10 × 5 × 4 = 200 cm³.'
    },
    {
      id: 'MAT-14',
      node: 2,
      comp: 'Área de Triángulos',
      context: 'Una vela náutica tiene forma de triángulo con una base de 6 metros y una altura de 8 metros.',
      stem: '¿Cuál es el área de tela que tiene la vela?',
      options: [
        '48 m²',
        '24 m²',
        '14 m²',
        '28 m²'
      ],
      correct: 1,
      explanation: 'Área del triángulo = (base × altura) / 2 = (6 × 8) / 2 = 48 / 2 = 24 m². ¡No olvides dividir entre 2!'
    },
    {
      id: 'MAT-15',
      node: 2,
      comp: 'Ángulos Internos de un Triángulo',
      context: 'En un triángulo cualquiera, dos de sus ángulos internos miden 50° y 70°.',
      stem: '¿Cuánto mide el tercer ángulo interno del triángulo?',
      options: [
        '80°',
        '60°',
        '90°',
        '40°'
      ],
      correct: 1,
      explanation: 'La suma de los ángulos internos de todo triángulo plano es siempre 180°. Por tanto: 180° - (50° + 70°) = 180° - 120° = 60°.'
    },

    // --- NODO 4: Álgebra y Funciones (Preguntas 16-20) ---
    {
      id: 'MAT-16',
      node: 3,
      comp: 'Modelación con Funciones Lineales',
      context: 'Una empresa de mensajería cobra una tarifa fija de $5.000 por envío más $2.000 por cada kilómetro recorrido (x).',
      stem: '¿Cuál de las siguientes funciones representa el costo total C(x) de un envío de x kilómetros?',
      options: [
        'C(x) = 5.000x + 2.000',
        'C(x) = 2.000x + 5.000',
        'C(x) = 7.000x',
        'C(x) = 5.000 - 2.000x'
      ],
      correct: 1,
      explanation: 'El costo variable por kilómetro ($2.000) multiplica a la variable x, y el costo fijo ($5.000) se suma como término independiente.'
    },
    {
      id: 'MAT-17',
      node: 3,
      comp: 'Sistemas de Ecuaciones Lineales',
      context: 'En una papelería, 2 cuadernos y 1 lápiz cuestan $11.000. Si se sabe que el lápiz cuesta $1.000:',
      stem: '¿Cuál es el precio de cada cuaderno?',
      options: [
        '$4.500',
        '$5.000',
        '$5.500',
        '$6.000'
      ],
      correct: 1,
      explanation: 'Planteamos: 2C + 1.000 = 11.000 -> 2C = 10.000 -> C = $5.000.'
    },
    {
      id: 'MAT-18',
      node: 3,
      comp: 'Crecimiento Exponencial',
      context: 'Un cultivo comienza con 100 bacterias y su población se DUPLICA cada hora que pasa.',
      stem: '¿Cuántas bacterias habrá en el cultivo al cabo de 3 horas?',
      options: [
        '300 bacterias',
        '800 bacterias',
        '600 bacterias',
        '400 bacterias'
      ],
      correct: 1,
      explanation: 'Hora 0: 100. Hora 1: 200. Hora 2: 400. Hora 3: 800 bacterias (100 × 2³ = 100 × 8 = 800).'
    },
    {
      id: 'MAT-19',
      node: 3,
      comp: 'Interpretación de Pendiente',
      context: 'La posición de un ciclista (en km) respecto al tiempo t (en horas) está dada por la ecuación d(t) = 25t + 10.',
      stem: '¿Qué significa el número 25 dentro de este contexto físico y matemático?',
      options: [
        'La distancia inicial desde la que partió el ciclista.',
        'La rapidez constante del ciclista (25 kilómetros por cada hora).',
        'El tiempo total que duró la competencia.',
        'La cantidad de ciclistas que participan en la carrera.'
      ],
      correct: 1,
      explanation: 'En una función lineal de posición d(t) = v·t + d₀, la pendiente (25) representa la tasa de cambio o velocidad (25 km/h).'
    },
    {
      id: 'MAT-20',
      node: 3,
      comp: 'Ecuaciones Cuadráticas y Raíces',
      context: 'El área de un cuadrado es igual a 81 cm², y cada uno de sus lados mide (x + 2) centímetros.',
      stem: '¿Cuál es el valor positivo de x?',
      options: [
        '9 cm',
        '7 cm',
        '11 cm',
        '6 cm'
      ],
      correct: 1,
      explanation: 'Si el área del cuadrado es 81 cm², su lado mide √81 = 9 cm. Como el lado es (x + 2) = 9, entonces x = 9 - 2 = 7 cm.'
    },

    // --- NODO 5: Jefe Matemáticas ICFES (Preguntas 21-25) ---
    {
      id: 'MAT-21',
      node: 4,
      comp: 'Análisis de Tablas y Gráficas Financieras',
      context: 'Una persona invierte $1.000.000 en un fondo que paga interés simple del 2% mensual sobre el capital inicial.',
      stem: '¿Cuánta ganancia por intereses habrá acumulado al finalizar 6 meses?',
      options: [
        '$20.000',
        '$120.000',
        '$60.000',
        '$200.000'
      ],
      correct: 1,
      explanation: 'El 2% de $1.000.000 es $20.000 por cada mes. En 6 meses de interés simple acumula: 6 × $20.000 = $120.000.'
    },
    {
      id: 'MAT-22',
      node: 4,
      comp: 'Desigualdades e Inecuaciones',
      context: 'Un ascensor de carga soporta como máximo 450 kg. El operario pesa 70 kg y debe subir cajas que pesan 20 kg cada una.',
      stem: '¿Cuál es el número MÁXIMO de cajas que el operario puede subir consigo en un solo viaje sin exceder el límite?',
      options: [
        '22 cajas',
        '19 cajas',
        '20 cajas',
        '15 cajas'
      ],
      correct: 1,
      explanation: 'Restamos el peso del operario: 450 - 70 = 380 kg disponibles para cajas. Dividimos: 380 / 20 = 19 cajas exactas.'
    },
    {
      id: 'MAT-23',
      node: 4,
      comp: 'Sucesiones y Patrones Numéricos',
      context: 'Observa la siguiente secuencia de figuras formadas con palillos: Figura 1 = 4 palillos; Figura 2 = 7 palillos; Figura 3 = 10 palillos; Figura 4 = 13 palillos.',
      stem: 'Si el patrón continúa sumando siempre la misma cantidad, ¿cuántos palillos tendrá la Figura 10?',
      options: [
        '30 palillos',
        '31 palillos',
        '28 palillos',
        '34 palillos'
      ],
      correct: 1,
      explanation: 'La fórmula general del término n es a_n = 3n + 1 (para n=1 da 4; para n=2 da 7). Para n=10: 3(10) + 1 = 31 palillos.'
    },
    {
      id: 'MAT-24',
      node: 4,
      comp: 'Validación de Procedimientos Estadísticos',
      context: 'En un salón de 30 estudiantes, 18 son mujeres y 12 son hombres. Para calcular el porcentaje de mujeres, un estudiante divide 18 entre 30 y multiplica por 100.',
      stem: '¿Es correcto el procedimiento del estudiante y cuál es el resultado?',
      options: [
        'Incorrecto, porque debía dividir 18 entre 12.',
        'Correcto, y el resultado es que el 60% del salón son mujeres.',
        'Correcto, y el resultado es que el 40% del salón son mujeres.',
        'Incorrecto, porque falta sumar la edad de los estudiantes.'
      ],
      correct: 1,
      explanation: 'Porcentaje = (Parte / Total) × 100 = (18 / 30) × 100 = (3 / 5) × 100 = 60%.'
    },
    {
      id: 'MAT-25',
      node: 4,
      comp: 'Trigonometría Básica • Razones en el Triángulo',
      context: 'Desde un punto en el suelo a 10 metros de la base de un árbol, se observa la copa con un ángulo de elevación de 45°. (Recuerda que tan(45°) = 1).',
      stem: '¿Cuál es la altura del árbol medida desde el suelo?',
      options: [
        '5 metros',
        '10 metros',
        '20 metros',
        '45 metros'
      ],
      correct: 1,
      explanation: 'tan(45°) = Cateto Opuesto (altura) / Cateto Adyacente (10 m). Como tan(45°) = 1, la altura es igual a la distancia horizontal: 10 metros.'
    }
  ],

  // ========================================================================
  // 3. CIENCIAS NATURALES (25 PREGUNTAS: Nodos 1 al 5)
  // ========================================================================
  ciencias: [
    // --- NODO 1: Biología Celular y Genética (Preguntas 1-5) ---
    {
      id: 'CIE-01',
      node: 0,
      comp: 'Biología Celular • Organelos',
      context: 'Las células musculares del corazón laten sin descanso durante toda la vida, por lo que requieren una enorme cantidad de energía en forma de ATP.',
      stem: '¿Qué organelo celular debe encontrarse en mayor abundancia dentro de estas células cardíacas?',
      options: [
        'Los lisosomas, encargados de la digestión intracelular.',
        'Las mitocondrias, responsables de la respiración celular y producción de ATP.',
        'Los cloroplastos, encargados de realizar la fotosíntesis.',
        'Las vacuolas contráctiles.'
      ],
      correct: 1,
      explanation: 'Las mitocondrias realizan la respiración celular aerobia para sintetizar moléculas de ATP (energía química celular).'
    },
    {
      id: 'CIE-02',
      node: 0,
      comp: 'Genética Mendeliana • Cuadro de Punnett',
      context: 'En una planta, el color de flor roja (R) es dominante sobre el color blanco (r). Se cruzan dos plantas heterocigotas (Rr × Rr).',
      stem: '¿Cuál es la probabilidad de obtener descendencia con flores BLANCAS (rr)?',
      options: [
        '75% (3 de 4)',
        '25% (1 de 4)',
        '50% (2 de 4)',
        '0%'
      ],
      correct: 1,
      explanation: 'El cruce Rr × Rr produce: 25% RR (rojas), 50% Rr (rojas) y 25% rr (blancas). Solo el homocigoto recesivo (rr) expresa el color blanco.'
    },
    {
      id: 'CIE-03',
      node: 0,
      comp: 'Biología Molecular • ADN a Proteína',
      context: 'Durante la transcripción genética, la enzima ARN polimerasa sintetiza una cadena de ARN mensajero (ARNm) tomando como molde una hebra de ADN. Recuerda que en el ARN el Uracilo (U) reemplaza a la Timina (T).',
      stem: 'Si la secuencia molde de ADN es 3\'-T A C G G A-5\', ¿cuál será la secuencia complementaria de ARNm?',
      options: [
        '5\'-A T G C C T-3\'',
        '5\'-A U G C C U-3\'',
        '5\'-T A C G G A-3\'',
        '5\'-U A C G G A-3\''
      ],
      correct: 1,
      explanation: 'En el ARNm: T se aparea con A; A se aparea con U (no T); C con G; y G con C. Por tanto, TACGGA produce AUGCCU.'
    },
    {
      id: 'CIE-04',
      node: 0,
      comp: 'Transporte a través de la Membrana (Ósmosis)',
      context: 'Un glóbulo rojo se sumerge en una solución extremadamente concentrada en sal (medio hipertónico respecto al interior celular).',
      stem: '¿Qué le ocurrirá al glóbulo rojo debido al fenómeno de ósmosis?',
      options: [
        'Absorberá agua hasta explotar.',
        'Perderá agua hacia el exterior y se deshidratará (crenación).',
        'Se convertirá en una célula vegetal con pared de celulosa.',
        'Mantendrá exactamente el mismo volumen sin flujo de agua.'
      ],
      correct: 1,
      explanation: 'Por ósmosis, el agua se mueve desde donde hay menor concentración de solutos (interior celular) hacia donde hay mayor concentración de sal (exterior).'
    },
    {
      id: 'CIE-05',
      node: 0,
      comp: 'División Celular • Mitosis vs. Meiosis',
      context: 'Los seres humanos tienen 46 cromosomas en sus células somáticas (como la piel), pero sus gametos (óvulos y espermatozoides) tienen solo 23 cromosomas.',
      stem: '¿Mediante qué proceso de división celular se producen los gametos con la mitad del número de cromosomas?',
      options: [
        'Bipartición bacteriana.',
        'Meiosis.',
        'Mitosis.',
        'Fotosíntesis.'
      ],
      correct: 1,
      explanation: 'La meiosis es la división reduccional que reduce a la mitad la carga cromosómica (de diploide 2n=46 a haploide n=23) para formar gametos.'
    },

    // --- NODO 2: Ecosistemas, Evolución y Medio Ambiente (Preguntas 6-10) ---
    {
      id: 'CIE-06',
      node: 1,
      comp: 'Ecología • Redes Tróficas',
      context: 'En un ecosistema de páramo: el pasto alimenta a los conejos, y los conejos son cazados por las águilas reales.',
      stem: 'Si la caza ilegal elimina a todas las águilas reales de esa zona, ¿qué ocurrirá inicialmente con la población de conejos?',
      options: [
        'Se extinguirá de inmediato junto con las águilas.',
        'Aumentará rápidamente al desaparecer su depredador natural.',
        'Empezará a realizar fotosíntesis como las plantas.',
        'Se reducirá a cero en dos días.'
      ],
      correct: 1,
      explanation: 'Sin su depredador tope (águila), la población de herbívoros (conejos) crece inicialmente sin control biológico.'
    },
    {
      id: 'CIE-07',
      node: 1,
      comp: 'Evolución y Selección Natural',
      context: 'Un agricultor aplica el mismo insecticida durante diez años. Al principio moría el 99% de los insectos, pero hoy la mayoría sobrevive al producto.',
      stem: 'Desde la teoría de la selección natural de Darwin, ¿cómo se explica este fenómeno?',
      options: [
        'El insecticida alimenta a los insectos y los hace más grandes.',
        'Los pocos insectos que ya poseían mutaciones de resistencia sobrevivieron, se reprodujeron y heredaron esa resistencia a su descendencia.',
        'Los insectos decidieron aprender química para neutralizar el veneno.',
        'Las plantas se transformaron en insectos resistentes.'
      ],
      correct: 1,
      explanation: 'La selección natural actúa sobre la variabilidad genética preexistente: sobreviven los individuos resistentes y transmiten sus genes.'
    },
    {
      id: 'CIE-08',
      node: 1,
      comp: 'Ciclo del Carbono y Efecto Invernadero',
      context: 'La quema masiva de combustibles fósiles (carbón, petróleo y gas) y la deforestación han incrementado la concentración atmosférica de dióxido de carbono (CO₂).',
      stem: '¿De qué manera contribuye la reforestación a mitigar este problema ambiental?',
      options: [
        'Los árboles destruyen el oxígeno de la atmósfera.',
        'Las plantas capturan CO₂ atmosférico mediante la fotosíntesis y lo fijan en su biomasa.',
        'Las raíces de los árboles producen petróleo en una semana.',
        'Las hojas reflejan todos los gases hacia el centro de la Tierra.'
      ],
      correct: 1,
      explanation: 'En la fotosíntesis, los organismos autótrofos absorben CO₂ del aire para sintetizar glucosa, actuando como sumideros de carbono.'
    },
    {
      id: 'CIE-09',
      node: 1,
      comp: 'Relaciones Interespecíficas',
      context: 'Las abejas visitan las flores para alimentarse de su néctar y, al mismo tiempo, transportan el polen de una flor a otra permitiendo la reproducción de la planta.',
      stem: '¿Cómo se denomina esta relación ecológica en la que AMBAS especies resultan beneficiadas (+/+)?',
      options: [
        'Parasitismo.',
        'Mutualismo.',
        'Competencia.',
        'Depredación.'
      ],
      correct: 1,
      explanation: 'En el mutualismo (+/+), tanto el polinizador (alimento) como la planta angiosperma (reproducción cruzada) obtienen beneficio.'
    },
    {
      id: 'CIE-10',
      node: 1,
      comp: 'Flujo de Energía en Pirámides Tróficas',
      context: 'En una pirámide ecológica, solo cerca del 10% de la energía disponible en un nivel trófico pasa al siguiente nivel (Ley del diezmo ecológico).',
      stem: 'Si los productores (plantas) disponen de 10.000 kcal de energía, ¿cuánta energía llegará aproximadamente a los consumidores secundarios (carnívoros que comen herbívoros)?',
      options: [
        '10.000 kcal',
        '100 kcal',
        '1.000 kcal',
        '5.000 kcal'
      ],
      correct: 1,
      explanation: 'Productores = 10.000 kcal -> Consumidores primarios (herbívoros, 10%) = 1.000 kcal -> Consumidores secundarios (carnívoros, 10% de 1.000) = 100 kcal.'
    },

    // --- NODO 3: Química General y Reacciones (Preguntas 11-15) ---
    {
      id: 'CIE-11',
      node: 2,
      comp: 'Cambios Físicos vs. Cambios Químicos',
      context: 'En un laboratorio se calienta hielo hasta convertirlo en agua líquida (Proceso 1) y luego se quema una hoja de papel hasta convertirla en cenizas y humo (Proceso 2).',
      stem: '¿Cuál es la clasificación correcta de ambos procesos?',
      options: [
        'Ambos son cambios químicos irreversibles.',
        'El Proceso 1 es un cambio físico y el Proceso 2 es un cambio químico.',
        'El Proceso 1 es un cambio químico y el Proceso 2 es un cambio físico.',
        'En ninguno de los dos procesos interviene el calor.'
      ],
      correct: 1,
      explanation: 'La fusión del hielo no altera su composición molecular (H₂O -> físico). La combustión del papel transforma la materia en nuevas sustancias (químico).'
    },
    {
      id: 'CIE-12',
      node: 2,
      comp: 'Escala de pH y Acidez',
      context: 'La escala de pH va de 0 a 14, donde 7 es neutro, valores menores a 7 son ácidos y mayores a 7 son básicos.',
      stem: 'Si el jugo de limón tiene pH 2,4 y el jabón líquido tiene pH 9,5, es correcto afirmar que:',
      options: [
        'El jugo de limón es básico y el jabón es ácido.',
        'El jugo de limón es ácido y el jabón es básico.',
        'Ambos son sustancias completamente neutras.',
        'El jabón es más ácido que el jugo de limón.'
      ],
      correct: 1,
      explanation: '2,4 < 7 corresponde a una sustancia ácida; 9,5 > 7 corresponde a una sustancia básica o alcalina.'
    },
    {
      id: 'CIE-13',
      node: 2,
      comp: 'Estequiometría y Conservación de la Masa',
      context: 'En un recipiente cerrado reaccionan exactamente 12 gramos de carbono (C) con 32 gramos de oxígeno (O₂) para formar únicamente dióxido de carbono (CO₂).',
      stem: 'Según la Ley de Conservación de la Masa de Lavoisier, ¿cuántos gramos de CO₂ se obtienen al finalizar la reacción?',
      options: [
        '20 gramos',
        '44 gramos',
        '12 gramos',
        '32 gramos'
      ],
      correct: 1,
      explanation: 'La masa total de los reactivos es igual a la masa total de los productos: 12 g + 32 g = 44 gramos de CO₂.'
    },
    {
      id: 'CIE-14',
      node: 2,
      comp: 'Separación de Mezclas',
      context: 'Un estudiante tiene una mezcla heterogénea de agua líquida y arena insoluble en el fondo de un vaso.',
      stem: '¿Qué método físico es el más directo para separar la arena del agua a temperatura ambiente?',
      options: [
        'Cromatografía de gases.',
        'Filtración o decantación.',
        'Electrólisis química.',
        'Imantación magnética.'
      ],
      correct: 1,
      explanation: 'Un sólido insoluble (arena) se separa de un líquido (agua) haciéndolo pasar por un papel filtro (filtración) o dejando sedimentar (decantación).'
    },
    {
      id: 'CIE-15',
      node: 2,
      comp: 'Estructura Atómica • Isótopos',
      context: 'El Carbono-12 (¹²C) y el Carbono-14 (¹⁴C) son dos isótopos del mismo elemento químico (número atómico Z = 6).',
      stem: '¿En qué se diferencian los átomos de Carbono-12 y Carbono-14?',
      options: [
        'En el número de protones en su núcleo.',
        'En el número de neutrones en su núcleo (6 neutrones vs. 8 neutrones).',
        'En que pertenecen a casillas distintas de la tabla periódica.',
        'En que el Carbono-14 no tiene electrones.'
      ],
      correct: 1,
      explanation: 'Los isótopos de un mismo elemento tienen igual número de protones (Z=6) pero diferente número de neutrones, lo que cambia su masa atómica (A).'
    },

    // --- NODO 4: Física: Mecánica, Energía y Ondas (Preguntas 16-20) ---
    {
      id: 'CIE-16',
      node: 3,
      comp: 'Conservación de la Energía Mecánica',
      context: 'Un patinador se lanza desde la parte más alta de una pista en U sin fricción. En la cima está en reposo y al pasar por el punto más bajo alcanza su rapidez máxima.',
      stem: '¿Qué transformación de energía ocurre mientras el patinador desciende hacia el punto más bajo?',
      options: [
        'La energía cinética se destruye por completo.',
        'La energía potencial gravitacional se transforma en energía cinética.',
        'La energía térmica detiene al patinador en la mitad.',
        'La masa del patinador se duplica.'
      ],
      correct: 1,
      explanation: 'Al disminuir la altura h, la energía potencial gravitacional (mgh) se convierte en energía cinética de movimiento (½mv²).'
    },
    {
      id: 'CIE-17',
      node: 3,
      comp: 'Segunda Ley de Newton (F = m · a)',
      context: 'Sobre una caja de 5 kg apoyada en un piso horizontal sin fricción se aplica una fuerza neta horizontal de 20 Newtons.',
      stem: '¿Cuál es la aceleración que experimenta la caja?',
      options: [
        '100 m/s²',
        '4 m/s²',
        '15 m/s²',
        '0,25 m/s²'
      ],
      correct: 1,
      explanation: 'Por la Segunda Ley de Newton: a = F / m = 20 N / 5 kg = 4 m/s².'
    },
    {
      id: 'CIE-18',
      node: 3,
      comp: 'Circuitos Eléctricos (Serie vs. Paralelo)',
      context: 'En una guirnalda navideña antigua, cuando un solo bombillo se funde, absolutamente todos los demás bombillos dejan de encender.',
      stem: '¿Por qué ocurre esto en ese circuito eléctrico?',
      options: [
        'Porque los bombillos están conectados en SERIE y al fundirse uno se abre el único camino para la corriente.',
        'Porque los bombillos están conectados en PARALELO con cables independientes.',
        'Porque el voltaje de la casa desaparece para siempre.',
        'Porque los electrones se convierten en protones.'
      ],
      correct: 0,
      explanation: 'En un circuito en serie existe una sola trayectoria para la corriente eléctrica; si un elemento se abre, la corriente se interrumpe en todo el circuito.'
    },
    {
      id: 'CIE-19',
      node: 3,
      comp: 'Ondas Mecánicas vs. Electromagnéticas',
      context: 'En el espacio exterior (vacío), los astronautas pueden verse entre sí gracias a la luz solar, pero no pueden escucharse si hablan sin radio.',
      stem: '¿Por qué la luz sí viaja por el vacío del espacio pero el sonido no?',
      options: [
        'Porque el sonido es una onda mecánica que necesita un medio material para propagarse, mientras la luz es una onda electromagnética.',
        'Porque los cascos espaciales bloquean la luz pero dejan pasar el aire.',
        'Porque en el espacio no existen ondas electromagnéticas.',
        'Porque el sonido viaja más rápido que la luz.'
      ],
      correct: 0,
      explanation: 'El sonido requiere partículas materiales (aire, agua, sólido) que vibren; la luz es una onda electromagnética capaz de propagarse en el vacío.'
    },
    {
      id: 'CIE-20',
      node: 3,
      comp: 'Termodinámica • Equilibrio Térmico',
      context: 'Se introduce una cuchara metálica caliente a 80 °C dentro de una taza de agua fría a 20 °C.',
      stem: '¿En qué dirección fluye el calor y hasta cuándo continúa dicho flujo?',
      options: [
        'Del agua fría hacia la cuchara hasta que la cuchara llegue a 100 °C.',
        'De la cuchara caliente hacia el agua fría hasta que ambos alcancen la misma temperatura de equilibrio.',
        'De ambos cuerpos hacia afuera hasta congelarse.',
        'No existe transferencia de calor entre metales y líquidos.'
      ],
      correct: 1,
      explanation: 'Por la Ley Cero y Segunda Ley de la Termodinámica, el calor fluye espontáneamente del cuerpo de mayor temperatura al de menor temperatura hasta alcanzar el equilibrio térmico.'
    },

    // --- NODO 5: Jefe Ciencias e Indagación Científica (Preguntas 21-25) ---
    {
      id: 'CIE-21',
      node: 4,
      comp: 'Indagación Científica • Control de Variables',
      context: 'Una estudiante quiere comprobar si la cantidad de fertilizante influye en la altura de las plantas de frijol. Para ello, siembra 3 macetas con la misma tierra, la misma luz y la misma agua, variando solo los gramos de fertilizante.',
      stem: '¿Por qué la estudiante mantuvo igual la cantidad de agua y de luz en las tres macetas?',
      options: [
        'Porque el agua y la luz no son necesarias para las plantas.',
        'Para controlar las demás variables y asegurar que el cambio en la altura se deba únicamente al fertilizante.',
        'Para gastar menos dinero durante el experimento escolar.',
        'Porque la altura de la planta es la variable independiente.'
      ],
      correct: 1,
      explanation: 'En un diseño experimental válido, todas las variables salvo la independiente deben permanecer constantes (variables controladas).'
    },
    {
      id: 'CIE-22',
      node: 4,
      comp: 'Curvas de Solubilidad y Gases',
      context: 'Al destapar una gaseosa tibia en un día caluroso sale mucho más gas (espuma de CO₂) que al destapar la misma gaseosa bien fría recién sacada de la nevera.',
      stem: '¿Qué propiedad fisicoquímica de los gases disueltos en líquidos explica este hecho?',
      options: [
        'La solubilidad de los gases en el agua disminuye cuando aumenta la temperatura.',
        'El frío transforma el dióxido de carbono en hielo sólido.',
        'Las botellas calientes tienen el doble de líquido que las frías.',
        'La solubilidad de un gas no depende de la temperatura ni de la presión.'
      ],
      correct: 0,
      explanation: 'A diferencia de la mayoría de los sólidos, los gases son MENOS solubles en líquidos cuando la temperatura sube, por lo que el CO₂ escapa rápidamente.'
    },
    {
      id: 'CIE-23',
      node: 4,
      comp: 'Densidad y Principio de Arquímedes',
      context: 'La densidad del agua líquida es 1,0 g/cm³, la del aceite de cocina es 0,92 g/cm³ y la de un tornillo de hierro es 7,8 g/cm³.',
      stem: 'Si se colocan los tres materiales en una probeta, ¿cómo se ubicarán de arriba hacia abajo?',
      options: [
        'Arriba el hierro, en el medio el agua y abajo el aceite.',
        'Arriba el aceite, en el medio el agua y en el fondo el tornillo de hierro.',
        'Arriba el agua, en el medio el aceite y abajo el hierro.',
        'Los tres se disolverán formando una sola fase homogénea.'
      ],
      correct: 1,
      explanation: 'Las sustancias menos densas flotan sobre las más densas: Aceite (0,92) arriba -> Agua (1,0) en medio -> Hierro (7,8) en el fondo.'
    },
    {
      id: 'CIE-24',
      node: 4,
      comp: 'Física • Caída Libre y Gravedad',
      context: 'En una cámara de vacío (donde se ha extraído todo el aire), se dejan caer al mismo tiempo y desde la misma altura una bola de acero de 2 kg y una pluma de ave.',
      stem: '¿Cuál de los dos objetos llega primero al suelo de la cámara de vacío?',
      options: [
        'La bola de acero, porque tiene más masa.',
        'Ambos llegan exactamente al mismo tiempo, porque sin resistencia del aire todos los cuerpos caen con la misma aceleración gravitacional.',
        'La pluma queda flotando en el techo.',
        'Ninguno cae porque en el vacío no existe la gravedad.'
      ],
      correct: 1,
      explanation: 'Como demostró Galileo, en ausencia de fricción del aire la aceleración de caída libre (g) es independiente de la masa del cuerpo.'
    },
    {
      id: 'CIE-25',
      node: 4,
      comp: 'Salud Pública • Antibióticos vs. Virus',
      context: 'Un paciente acude al médico con síntomas de gripe común causada por un virus respiratorio y solicita que le receten amoxicilina (un antibiótico bactericida).',
      stem: '¿Por qué el médico le explica que tomar antibióticos NO curará su infección viral y además es riesgoso?',
      options: [
        'Porque los antibióticos solo atacan bacterias y su uso innecesario promueve la resistencia bacteriana.',
        'Porque los virus son más grandes que los órganos humanos.',
        'Porque la amoxicilina solo funciona si se aplica en los ojos.',
        'Porque las bacterias y los virus son exactamente el mismo tipo de célula.'
      ],
      correct: 0,
      explanation: 'Los antibióticos actúan sobre estructuras bacterianas (como la pared de peptidoglicano) que los virus no poseen; usarlos sin necesidad selecciona bacterias resistentes.'
    }
  ],

  // ========================================================================
  // 4. SOCIALES Y CIUDADANAS (25 PREGUNTAS: Nodos 1 al 5)
  // ========================================================================
  sociales: [
    // --- NODO 1: Constitución de 1991 y Derechos (Preguntas 1-5) ---
    {
      id: 'SOC-01',
      node: 0,
      comp: 'Mecanismos de Protección • Acción de Tutela',
      context: 'A una adulta mayor con una enfermedad grave su EPS le niega la entrega urgente de un medicamento vital ordenado por su médico tratante, poniendo en riesgo su vida.',
      stem: '¿Cuál es el mecanismo constitucional inmediato que puede interponer la ciudadana para proteger su derecho fundamental a la salud y a la vida?',
      options: [
        'Un referendo constitucional.',
        'Una Acción de Tutela ante cualquier juez de la República.',
        'Un plebiscito nacional convocado por el Presidente.',
        'Una reforma tributaria en el Congreso.'
      ],
      correct: 1,
      explanation: 'El artículo 86 de la Constitución de 1991 consagra la Acción de Tutela para reclamar la protección inmediata de los derechos fundamentales.'
    },
    {
      id: 'SOC-02',
      node: 0,
      comp: 'Derechos Colectivos • Acción Popular',
      context: 'Los habitantes de un barrio notan que una bodega clandestina está arrojando residuos químicos a la quebrada comunitaria, afectando la salubridad pública de todo el sector.',
      stem: 'Para defender el derecho colectivo a gozar de un ambiente sano, la comunidad debe acudir preferentemente a:',
      options: [
        'Una Acción Popular.',
        'El voto programático.',
        'El Habeas Corpus.',
        'Un cabildo cerrado.'
      ],
      correct: 0,
      explanation: 'La Acción Popular (Art. 88 C.P.) es el mecanismo idóneo para proteger los derechos e intereses colectivos, como el medio ambiente y el espacio público.'
    },
    {
      id: 'SOC-03',
      node: 0,
      comp: 'Mecanismos de Participación Ciudadana',
      context: 'El Presidente de la República desea convocar al pueblo colombiano para que apoye o rechace una decisión política trascendental del Ejecutivo que NO requiere modificar el texto de la Constitución ni de una ley.',
      stem: '¿Cuál mecanismo de participación ciudadana corresponde a esta convocatoria?',
      options: [
        'El Plebiscito.',
        'La Revocatoria del Mandato.',
        'La Acción de Cumplimiento.',
        'El Derecho de Petición.'
      ],
      correct: 0,
      explanation: 'El plebiscito es el pronunciamiento del pueblo convocado por el Presidente para apoyar o rechazar una determinada decisión del Ejecutivo (mientras el referendo aprueba o deroga normas jurídicas).'
    },
    {
      id: 'SOC-04',
      node: 0,
      comp: 'Principios Fundamentales • Estado Laico y Pluralista',
      context: 'El rector de un colegio público oficial decide obligar a todos los estudiantes, sin importar sus creencias familiares, a asistir los sábados a ceremonias de una religión específica bajo amenaza de reprobar el año.',
      stem: '¿Por qué la decisión del rector vulnera la Constitución Política de 1991?',
      options: [
        'Porque los sábados está prohibido abrir las puertas de los colegios.',
        'Porque Colombia es un Estado pluralista y laico que garantiza la libertad de cultos y de conciencia.',
        'Porque solo los alcaldes pueden decidir qué religión deben practicar los niños.',
        'Porque la educación pública no está regulada por la Constitución.'
      ],
      correct: 1,
      explanation: 'El artículo 19 de la Constitución garantiza la libertad de cultos: nadie puede ser obligado a practicar actos contrarios a sus convicciones en una institución oficial.'
    },
    {
      id: 'SOC-05',
      node: 0,
      comp: 'Derecho de Petición',
      context: 'Un ciudadano radica una solicitud escrita y respetuosa ante la Secretaría de Infraestructura de su municipio pidiendo copia del informe sobre el estado de un puente.',
      stem: '¿Qué derecho fundamental está ejerciendo el ciudadano al presentar esta solicitud?',
      options: [
        'El Derecho de Petición (Art. 23 de la Constitución).',
        'La Moción de Censura.',
        'El Estado de Excepción.',
        'La Extradición administrativa.'
      ],
      correct: 0,
      explanation: 'El Derecho de Petición faculta a toda persona a presentar solicitudes respetuosas a las autoridades y a obtener pronta resolución.'
    },

    // --- NODO 2: Multiperspectivismo y Actores Sociales (Preguntas 6-10) ---
    {
      id: 'SOC-06',
      node: 1,
      comp: 'Análisis de Perspectivas en Conflicto',
      context: 'La alcaldía de un municipio planea construir una autopista que atravesará una reserva forestal. Los transportadores celebran porque reducirá el tiempo de viaje en 2 horas, mientras los líderes ambientales protestan por la pérdida de biodiversidad.',
      stem: 'En esta situación, el desacuerdo entre los transportadores y los líderes ambientales se explica porque:',
      options: [
        'Ambos grupos buscan destruir la economía del municipio.',
        'Los primeros priorizan la eficiencia económica y vial, mientras los segundos priorizan la conservación ecológica.',
        'Los líderes ambientales quieren cobrar peajes más caros en la vía.',
        'Los transportadores desconocen para qué sirven los camiones.'
      ],
      correct: 1,
      explanation: 'Cada actor social evalúa el proyecto desde una dimensión e interés distinto: competitividad/transporte vs. preservación ambiental.'
    },
    {
      id: 'SOC-07',
      node: 1,
      comp: 'Consulta Previa y Comunidades Étnicas',
      context: 'Una empresa minera obtiene licencia para explorar un territorio ancestral habitado por una comunidad indígena wayúu.',
      stem: 'Antes de iniciar cualquier obra que afecte directamente a la comunidad indígena, ¿qué deber constitucional tienen el Estado y la empresa?',
      options: [
        'Realizar el proceso de Consulta Previa con la comunidad para proteger su integridad cultural, social y económica.',
        'Desalojar a la comunidad en menos de veinticuatro horas.',
        'Cambiar el idioma oficial del departamento.',
        'Suspender las elecciones presidenciales.'
      ],
      correct: 0,
      explanation: 'La Consulta Previa (Convenio 169 de la OIT y bloque de constitucionalidad) es un derecho fundamental de los pueblos indígenas y afrodescendientes.'
    },
    {
      id: 'SOC-08',
      node: 1,
      comp: 'Pensamiento Sistémico • Impactos No Intencionales',
      context: 'Para proteger a los productores nacionales de calzado, el Gobierno impone un arancel (impuesto) muy alto al calzado importado.',
      stem: '¿Cuál podría ser un efecto secundario NO deseado de esta medida para los consumidores de bajos ingresos?',
      options: [
        'Que los zapatos importados se vuelvan completamente gratuitos.',
        'Que el precio promedio de los zapatos en el mercado interno aumente al reducirse la competencia.',
        'Que las fábricas nacionales cierren por exceso de ventas.',
        'Que desaparezca el uso de zapatos en el país.'
      ],
      correct: 1,
      explanation: 'El proteccionismo arancelario beneficia al productor local, pero suele encarecer los precios finales para el consumidor doméstico.'
    },
    {
      id: 'SOC-09',
      node: 1,
      comp: 'Convivencia Ciudadana y Prejuicios',
      context: 'En un conjunto residencial algunos vecinos proponen prohibir el ingreso de jóvenes con camisetas de equipos de fútbol al parque comunal, argumentando que "todos los hinchas son violentos".',
      stem: 'Desde las competencias ciudadanas, ¿por qué esta propuesta es discriminatoria?',
      options: [
        'Porque generaliza un estereotipo negativo y restringe derechos basándose en un prejuicio.',
        'Porque el fútbol solo puede jugarse en horas de la madrugada.',
        'Porque los parques comunales son exclusivos para automóviles.',
        'Porque la Constitución prohíbe practicar deportes en Colombia.'
      ],
      correct: 0,
      explanation: 'Juzgar a todo un grupo humano a partir de un estereotipo constituye un prejuicio que vulnera el derecho a la igualdad y al libre desarrollo.'
    },
    {
      id: 'SOC-10',
      node: 1,
      comp: 'Desarrollo Sostenible',
      context: 'Una cooperativa cafetera implementa secadores solares y abonos orgánicos producidos con la misma pulpa del café, logrando vender su grano a mejor precio en mercados internacionales ecológicos.',
      stem: 'Esta experiencia demuestra que el modelo de desarrollo sostenible permite:',
      options: [
        'Destruir los suelos agrícolas para aumentar las ganancias de corto plazo.',
        'Armonizar el bienestar económico de los campesinos con el cuidado de los recursos naturales.',
        'Eliminar por completo la agricultura en las zonas montañosas.',
        'Depender exclusivamente del uso de pesticidas químicos importados.'
      ],
      correct: 1,
      explanation: 'El desarrollo sostenible integra viabilidad económica, equidad social y conservación ambiental sin comprometer a las generaciones futuras.'
    },

    // --- NODO 3: Ramas del Poder y Organismos de Control (Preguntas 11-15) ---
    {
      id: 'SOC-11',
      node: 2,
      comp: 'Ramas del Poder Público • Rama Legislativa',
      context: 'En Colombia el poder público se divide en tres ramas (Ejecutiva, Legislativa y Judicial) para evitar la concentración del poder.',
      stem: '¿A cuál de las ramas del poder público pertenece el Congreso de la República (Senado y Cámara)?',
      options: [
        'A la Rama Ejecutiva.',
        'A la Rama Legislativa, encargada de reformar la Constitución, hacer las leyes y ejercer control político.',
        'A la Rama Judicial.',
        'A la Registraduría Nacional.'
      ],
      correct: 1,
      explanation: 'El Congreso bicameral integra la Rama Legislativa (Art. 114 C.P.).'
    },
    {
      id: 'SOC-12',
      node: 2,
      comp: 'Órganos de Control • Procuraduría vs. Contraloría',
      context: 'Un alcalde municipal es investigado porque presuntamente desvió recursos públicos destinados al restaurante escolar para comprar camionetas privadas.',
      stem: '¿Qué órgano de control tiene la función principal de vigilar la gestión fiscal y el buen uso de los dineros públicos?',
      options: [
        'El Banco de la República.',
        'La Contraloría General de la República.',
        'El Ministerio de Cultura.',
        'La Corte Constitucional.'
      ],
      correct: 1,
      explanation: 'Truco FOXER infalible: Contraloría = Cuentas y dinero público (control fiscal). Procuraduría = Conducta disciplinaria de los funcionarios públicos.'
    },
    {
      id: 'SOC-13',
      node: 2,
      comp: 'Defensoría del Pueblo y Ministerio Público',
      context: 'Una comunidad desplazada por el conflicto armado necesita orientación gratuita para exigir la protección de sus derechos humanos ante las instituciones del Estado.',
      stem: '¿A qué entidad del Ministerio Público pueden acudir prioritariamente para recibir esta asesoría y promoción de derechos humanos?',
      options: [
        'A la Defensoría del Pueblo o a la Personería Municipal.',
        'A la Superintendencia Financiera.',
        'Al Senado de la República.',
        'A la DIAN.'
      ],
      correct: 0,
      explanation: 'La Defensoría del Pueblo y las Personerías Municipales hacen parte del Ministerio Público y velan por la promoción y divulgación de los derechos humanos.'
    },
    {
      id: 'SOC-14',
      node: 2,
      comp: 'Rama Judicial • Corte Constitucional',
      context: 'El Congreso aprueba una ley, pero un grupo de ciudadanos considera que varios artículos de esa ley contradicen directamente los derechos consagrados en la Constitución de 1991.',
      stem: '¿Qué alto tribunal tiene la competencia de decidir si esa ley es exequible (constitucional) o inexequible?',
      options: [
        'La Corte Constitucional.',
        'El Consejo Nacional Electoral.',
        'El Ministerio del Interior.',
        'La Gobernación Departamental.'
      ],
      correct: 0,
      explanation: 'A la Corte Constitucional se le confía la guarda de la integridad y supremacía de la Constitución (Art. 241 C.P.).'
    },
    {
      id: 'SOC-15',
      node: 2,
      comp: 'Descentralización Administrativa',
      context: 'La Constitución de 1991 definió a Colombia como una República unitaria, descentralizada y con autonomía de sus entidades territoriales.',
      stem: '¿Qué cambio político importante introdujo esta descentralización en los departamentos y municipios?',
      options: [
        'Que cada municipio puede imprimir su propia moneda y tener su propio ejército.',
        'Que los ciudadanos eligen por voto popular a sus alcaldes y gobernadores, y los municipios administran recursos propios.',
        'Que el Presidente nombra directamente a todos los concejales del país.',
        'Que los departamentos dejaron de pertenecer a Colombia.'
      ],
      correct: 1,
      explanation: 'La descentralización fortaleció la democracia local mediante la elección popular de alcaldes (desde 1988) y gobernadores (desde 1991) y la transferencia de recursos.'
    },

    // --- NODO 4: Historia de Colombia y del Mundo (Preguntas 16-20) ---
    {
      id: 'SOC-16',
      node: 3,
      comp: 'Geopolítica • Guerra Fría',
      context: 'Durante la Guerra Fría (1947-1991), Estados Unidos y la Unión Soviética nunca se enfrentaron directamente en una guerra militar total entre sus territorios, pero apoyaron bandos opuestos en Corea, Vietnam y Afganistán.',
      stem: '¿Por qué las dos superpotencias evitaron un enfrentamiento militar directo entre ellas?',
      options: [
        'Porque carecían de ejércitos y armamento moderno.',
        'Por el temor a una destrucción mutua asegurada debido al arsenal nuclear que ambas poseían.',
        'Porque firmaron una alianza para unificar sus gobiernos en 1950.',
        'Porque no tenían interés en influir en otros continentes.'
      ],
      correct: 1,
      explanation: 'El equilibrio del terror nuclear (Destrucción Mutua Asegurada) impidió la guerra directa y trasladó la tensión a conflictos periféricos.'
    },
    {
      id: 'SOC-17',
      node: 3,
      comp: 'Historia de Colombia • El Frente Nacional (1958-1974)',
      context: 'En 1958, los partidos Liberal y Conservador firmaron el pacto del Frente Nacional para poner fin a la violencia bipartidista y a la dictadura militar, acordando alternarse la Presidencia cada cuatro años y repartirse por mitad los cargos públicos.',
      stem: '¿Cuál fue una de las principales críticas políticas que recibió el Frente Nacional?',
      options: [
        'Que permitió la participación de demasiados partidos políticos nuevos.',
        'Que excluyó a terceras fuerzas y movimientos políticos distintos a los dos partidos tradicionales.',
        'Que duró solamente dos meses en vigencia.',
        'Que eliminó las elecciones presidenciales para siempre.'
      ],
      correct: 1,
      explanation: 'Aunque redujo la violencia entre liberales y conservadores, el monopolio bipartidista cerró el espacio democrático a otras opciones políticas.'
    },
    {
      id: 'SOC-18',
      node: 3,
      comp: 'Historia de Colombia • Asamblea Constituyente de 1991',
      context: 'En 1990 miles de jóvenes universitarios impulsaron el movimiento de la "Séptima Papeleta" en las elecciones legislativas.',
      stem: '¿Cuál fue el logro histórico del movimiento estudiantil de la Séptima Papeleta?',
      options: [
        'Restaurar la Constitución de 1886 sin ningún cambio.',
        'Convocar una Asamblea Nacional Constituyente pluralista que redactó la Constitución Política de 1991.',
        'Prohibir el voto de las mujeres en las elecciones locales.',
        'Trasladar la capital de la República a Medellín.'
      ],
      correct: 1,
      explanation: 'La Séptima Papeleta abrió la vía democrática para elegir la Asamblea Constituyente que promulgó la Carta de 1991.'
    },
    {
      id: 'SOC-19',
      node: 3,
      comp: 'Historia Universal • Revolución Industrial',
      context: 'A finales del siglo XVIII y durante el siglo XIX, la introducción de la máquina de vapor y las fábricas textiles transformó profundamente a Inglaterra y Europa.',
      stem: '¿Qué fenómeno demográfico y social se produjo como consecuencia directa de la Revolución Industrial?',
      options: [
        'El abandono total de las ciudades para volver al feudalismo rural.',
        'La migración masiva del campo a la ciudad (urbanización) y el surgimiento de la clase obrera o proletariado.',
        'La desaparición del comercio marítimo internacional.',
        'La abolición del dinero y los bancos.'
      ],
      correct: 1,
      explanation: 'La concentración de fábricas en las ciudades atrajo mano de obra campesina, acelerando la urbanización y dando origen al movimiento obrero.'
    },
    {
      id: 'SOC-20',
      node: 3,
      comp: 'Historia de Colombia • Separación de Panamá (1903)',
      context: 'En noviembre de 1903 se produjo la separación de Panamá de Colombia, justo después de que el país sufriera una devastadora guerra civil entre 1899 y 1902.',
      stem: '¿Cómo se llamó esa guerra civil que dejó al país exhausto económica y políticamente antes de la separación de Panamá, y qué potencia extranjera apoyó la separación por su interés en el canal interoceánico?',
      options: [
        'La Guerra de los Mil Días, con la intervención de Estados Unidos.',
        'La Guerra de los Supremos, con la intervención de Japón.',
        'La Patria Boba, con la intervención de Rusia.',
        'La Guerra Colombo-Peruana, con la intervención de Italia.'
      ],
      correct: 0,
      explanation: 'La Guerra de los Mil Días (1899-1902) debilitó a Colombia, contexto en el cual EE. UU. respaldó la separación panameña para construir y controlar el Canal.'
    },

    // --- NODO 5: Jefe Sociales: Geografía, Economía y Paz (Preguntas 21-25) ---
    {
      id: 'SOC-21',
      node: 4,
      comp: 'Geografía Física de Colombia • Pisos Térmicos',
      context: 'Aunque Colombia está ubicada en la zona intertropical (cerca de la línea del Ecuador), en el país se pueden cultivar productos de clima cálido como el banano, de clima templado como el café y de clima frío como la papa durante todo el año.',
      stem: '¿Qué factor geográfico explica esta variedad de climas en Colombia?',
      options: [
        'La presencia de las cuatro estaciones (invierno, primavera, verano y otoño).',
        'La altitud de las tres cordilleras de los Andes, que genera diferentes pisos térmicos.',
        'La cercanía de Colombia al Polo Sur.',
        'Las corrientes marinas congeladas del mar Caribe.'
      ],
      correct: 1,
      explanation: 'En la zona intertropical la temperatura varía principalmente con la altitud sobre el nivel del mar (pisos térmicos: cálido, templado, frío, páramo y nieves perpetuas).'
    },
    {
      id: 'SOC-22',
      node: 4,
      comp: 'Economía • Inflación y Banco de la República',
      context: 'Cuando la inflación (aumento generalizado y sostenido de los precios) sube demasiado en el país, el poder adquisitivo de las familias disminuye.',
      stem: '¿Cuál es la autoridad económica encargada constitucionalmente en Colombia de controlar la inflación y manejar la política monetaria?',
      options: [
        'El Banco de la República (a través de su Junta Directiva).',
        'La Fiscalía General de la Nación.',
        'La Registraduría Nacional del Estado Civil.',
        'El Ministerio del Deporte.'
      ],
      correct: 0,
      explanation: 'El Banco de la República es la banca central autónoma encargada de velar por el mantenimiento de la capacidad adquisitiva de la moneda.'
    },
    {
      id: 'SOC-23',
      node: 4,
      comp: 'Economía • Oferta y Demanda',
      context: 'Debido a una fuerte helada en la sabana cundiboyacense, se pierde la mitad de la cosecha de papa, mientras que las familias siguen demandando la misma cantidad del producto.',
      stem: 'Según la ley de oferta y demanda, ¿qué ocurrirá en el corto plazo con el precio de la papa?',
      options: [
        'Bajará a la mitad porque hay escasez.',
        'Aumentará debido a la reducción de la oferta frente a una demanda constante.',
        'Se mantendrá congelado por las lluvias.',
        'Los agricultores regalarán la cosecha restante.'
      ],
      correct: 1,
      explanation: 'Cuando la oferta de un bien cae drásticamente (escasez) y la demanda se mantiene, el precio de equilibrio sube.'
    },
    {
      id: 'SOC-24',
      node: 4,
      comp: 'Justicia Transicional y Construcción de Paz',
      context: 'En los procesos de paz contemporáneos se aplica el modelo de Justicia Transicional, cuyo eje central son los derechos de las víctimas a la Verdad, la Justicia, la Reparación y la Garantía de No Repetición.',
      stem: '¿Por qué es fundamental conocer la VERDAD histórica de lo ocurrido en un conflicto armado?',
      options: [
        'Para aumentar el deseo de venganza entre las comunidades.',
        'Para dignificar la memoria de las víctimas, esclarecer responsabilidades y evitar que las atrocidades vuelvan a repetirse.',
        'Para borrar de los libros de historia todo lo sucedido.',
        'Para impedir que las víctimas reciban indemnizaciones.'
      ],
      correct: 1,
      explanation: 'El esclarecimiento de la verdad dignifica a las víctimas y permite a la sociedad comprender las causas del conflicto para garantizar la no repetición.'
    },
    {
      id: 'SOC-25',
      node: 4,
      comp: 'Globalización y Cultura',
      context: 'Gracias a internet y al comercio global, un joven en una vereda colombiana puede escuchar música surcoreana, aprender programación en plataformas internacionales y vender artesanías locales a compradores europeos.',
      stem: '¿Qué conclusión equilibrada se puede extraer sobre el fenómeno de la globalización a partir de este caso?',
      options: [
        'La globalización elimina cualquier posibilidad de vender productos artesanales.',
        'La globalización genera interconexión cultural y oportunidades económicas, aunque plantea el reto de preservar la identidad local.',
        'Internet solo funciona en las capitales europeas.',
        'La cultura local y el comercio internacional son completamente incompatibles.'
      ],
      correct: 1,
      explanation: 'El pensamiento reflexivo reconoce tanto las oportunidades de intercambio cultural y comercial como el desafío de valorar las tradiciones propias.'
    }
  ],

  // ========================================================================
  // 5. INGLÉS (25 PREGUNTAS: Nodos 1 al 5 - Formato Oficial ICFES Partes 1-7)
  // ========================================================================
  ingles: [
    // --- NODO 1: Parte 1 ICFES - Avisos Públicos (Preguntas 1-5) ---
    {
      id: 'ING-01',
      node: 0,
      comp: 'Part 1 • Notices and Signs',
      context: '📢 NOTICE: "PLEASE FASTEN YOUR SEATBELT AND TURN OFF ELECTRONIC DEVICES DURING TAKEOFF."',
      stem: 'Where can you see this notice?',
      options: [
        'In a library',
        'On an airplane',
        'In a supermarket',
        'At a swimming pool'
      ],
      correct: 1,
      explanation: '"Fasten your seatbelt" (abróchese el cinturón) y "Takeoff" (despegue) son instrucciones propias de un avión ("On an airplane").'
    },
    {
      id: 'ING-02',
      node: 0,
      comp: 'Part 1 • Notices and Signs',
      context: '📢 NOTICE: "QUIET PLEASE! PEOPLE ARE READING AND STUDYING IN THIS HALL."',
      stem: 'Where can you see this notice?',
      options: [
        'At a stadium',
        'In a library',
        'In a disco',
        'At a butcher shop'
      ],
      correct: 1,
      explanation: '"Quiet please" (silencio por favor) y "reading and studying" indican una biblioteca ("In a library").'
    },
    {
      id: 'ING-03',
      node: 0,
      comp: 'Part 1 • Notices and Signs',
      context: '📢 NOTICE: "DO NOT FEED THE MONKEYS OR STAND TOO CLOSE TO THE CAGES."',
      stem: 'Where can you see this notice?',
      options: [
        'At a zoo',
        'In a bank',
        'In a hospital',
        'At a cinema'
      ],
      correct: 0,
      explanation: '"Monkeys" (monos) y "cages" (jaulas) pertenecen a un zoológico ("At a zoo").'
    },
    {
      id: 'ING-04',
      node: 0,
      comp: 'Part 1 • Notices and Signs',
      context: '📢 NOTICE: "CHILDREN UNDER 10 MUST SWIM WITH AN ADULT AT ALL TIMES."',
      stem: 'Where can you see this notice?',
      options: [
        'In a bookstore',
        'At a swimming pool',
        'In a computer lab',
        'At a post office'
      ],
      correct: 1,
      explanation: 'El verbo "swim" (nadar) ubica inmediatamente el aviso en una piscina ("At a swimming pool").'
    },
    {
      id: 'ING-05',
      node: 0,
      comp: 'Part 1 • Notices and Signs',
      context: '📢 NOTICE: "TRY ON MAXIMUM 3 GARMENTS AT A TIME IN THE DRESSING ROOM."',
      stem: 'Where can you see this notice?',
      options: [
        'In a clothes shop',
        'At a train station',
        'In a pharmacy',
        'At a museum'
      ],
      correct: 0,
      explanation: '"Garments" (prendas de vestir) y "dressing room" (vestier/probador) se encuentran en una tienda de ropa ("In a clothes shop").'
    },

    // --- NODO 2: Parte 2 ICFES - Vocabulario y Definiciones (Preguntas 6-10) ---
    {
      id: 'ING-06',
      node: 1,
      comp: 'Part 2 • Vocabulary Matching',
      context: 'Definition: "You use this object when it is raining outside so that you do not get wet."',
      stem: 'Which word matches the description above?',
      options: [
        'Sunglasses',
        'Umbrella',
        'Pillow',
        'Keyboard'
      ],
      correct: 1,
      explanation: '"Raining" (lloviendo) + "not get wet" (no mojarse) definen una sombrilla ("Umbrella").'
    },
    {
      id: 'ING-07',
      node: 1,
      comp: 'Part 2 • Vocabulary Matching',
      context: 'Definition: "You go to this place when you need to catch a flight to another country."',
      stem: 'Which word matches the description above?',
      options: [
        'Bakery',
        'Airport',
        'Kitchen',
        'Pharmacy'
      ],
      correct: 1,
      explanation: '"Catch a flight" (tomar un vuelo) ocurre en el aeropuerto ("Airport").'
    },
    {
      id: 'ING-08',
      node: 1,
      comp: 'Part 2 • Professions and Roles',
      context: 'Definition: "This person prepares delicious meals for customers in a restaurant."',
      stem: 'Which profession matches the description?',
      options: [
        'Pilot',
        'Chef',
        'Firefighter',
        'Mechanic'
      ],
      correct: 1,
      explanation: '"Prepares delicious meals in a restaurant" describe a un cocinero o "Chef".'
    },
    {
      id: 'ING-09',
      node: 1,
      comp: 'Part 2 • Everyday Objects',
      context: 'Definition: "You wear these on your hands during winter to keep your fingers warm."',
      stem: 'Which word matches the description?',
      options: [
        'Gloves',
        'Socks',
        'Belt',
        'Necklace'
      ],
      correct: 0,
      explanation: '"Wear on your hands" (usar en las manos) + "keep fingers warm" = guantes ("Gloves"). "Socks" son para los pies.'
    },
    {
      id: 'ING-10',
      node: 1,
      comp: 'Part 2 • School & Study',
      context: 'Definition: "This book gives you the meaning and spelling of words in alphabetical order."',
      stem: 'Which word matches the description?',
      options: [
        'Calendar',
        'Dictionary',
        'Ticket',
        'Mirror'
      ],
      correct: 1,
      explanation: 'El libro que explica el significado ("meaning") de las palabras en orden alfabético es el diccionario ("Dictionary").'
    },

    // --- NODO 3: Parte 3 ICFES - Conversaciones Cortas (Preguntas 11-15) ---
    {
      id: 'ING-11',
      node: 2,
      comp: 'Part 3 • Short Conversations',
      context: 'Speaker A: "I have a terrible toothache since yesterday morning."\nSpeaker B: "_________________________"',
      stem: 'Choose the best response to complete the conversation:',
      options: [
        'You should see a dentist right away.',
        'Congratulations on your new job!',
        'Neither do I.',
        'It costs twenty dollars.'
      ],
      correct: 0,
      explanation: 'Ante un dolor de muelas ("toothache"), el consejo natural con "should" es visitar al odontólogo ("You should see a dentist right away").'
    },
    {
      id: 'ING-12',
      node: 2,
      comp: 'Part 3 • Short Conversations',
      context: 'Speaker A: "Would you like to go to the cinema with us tonight?"\nSpeaker B: "_________________________"',
      stem: 'Choose the best response:',
      options: [
        'Yes, I went yesterday.',
        'I’d love to, what time does the movie start?',
        'No, I am not a doctor.',
        'It is on the table.'
      ],
      correct: 1,
      explanation: 'Ante la invitación "Would you like to...?", la respuesta natural y cortés es "I’d love to..." seguida de una pregunta sobre la hora.'
    },
    {
      id: 'ING-13',
      node: 2,
      comp: 'Part 3 • Short Conversations',
      context: 'Speaker A: "Excuse me, how long does it take to get to the downtown station by bus?"\nSpeaker B: "_________________________"',
      stem: 'Choose the best response:',
      options: [
        'About twenty minutes if there is no traffic.',
        'Two kilometers tall.',
        'Five hundred pesos ago.',
        'Yes, she is my sister.'
      ],
      correct: 0,
      explanation: '"How long does it take...?" pregunta por duración de tiempo, por lo que se responde con minutos u horas ("About twenty minutes").'
    },
    {
      id: 'ING-14',
      node: 2,
      comp: 'Part 3 • Short Conversations',
      context: 'Speaker A: "I’m sorry I’m late. My alarm clock didn’t ring!"\nSpeaker B: "_________________________"',
      stem: 'Choose the best response:',
      options: [
        'Don’t worry, the meeting hasn’t started yet.',
        'You’re welcome, see you tomorrow.',
        'Happy birthday to you!',
        'Yes, please bring two coffees.'
      ],
      correct: 0,
      explanation: 'Cuando alguien se disculpa por llegar tarde ("I’m sorry I’m late"), una respuesta coherente es tranquilizarlo ("Don’t worry...").'
    },
    {
      id: 'ING-15',
      node: 2,
      comp: 'Part 3 • Short Conversations',
      context: 'Speaker A: "Have you ever tried traditional Colombian bandeja paisa?"\nSpeaker B: "_________________________"',
      stem: 'Choose the best response:',
      options: [
        'Yes, I ate it in Medellín last year and it was delicious!',
        'No, I didn’t went tomorrow.',
        'Yes, I am eating it next week.',
        'Because it is raining.'
      ],
      correct: 0,
      explanation: '"Have you ever tried...?" indaga por una experiencia en la vida; responder "Yes, I ate it in Medellín last year..." es gramatical y semánticamente perfecto.'
    },

    // --- NODO 4: Parte 4 ICFES - Gramática en Contexto (Preguntas 16-20) ---
    {
      id: 'ING-16',
      node: 3,
      comp: 'Part 4 • Superlatives',
      context: '«Coffee is one of the ______ popular drinks in the world. Millions of people drink it every morning before going to work.»',
      stem: 'Which word correctly completes the blank space?',
      options: [
        'more',
        'most',
        'much',
        'many'
      ],
      correct: 1,
      explanation: 'Después de "the" y antes de un adjetivo de dos o más sílabas ("popular") se usa el superlativo "most" ("the most popular").'
    },
    {
      id: 'ING-17',
      node: 3,
      comp: 'Part 4 • Present Perfect',
      context: '«Sofia ______ lived in Bogotá since 2021, and she loves studying at the university there.»',
      stem: 'Select the correct auxiliary verb to complete the sentence:',
      options: [
        'have',
        'has',
        'did',
        'was'
      ],
      correct: 1,
      explanation: 'Con "since 2021" y el participio "lived", se requiere Present Perfect. Para tercera persona singular (Sofia = She), el auxiliar es "has".'
    },
    {
      id: 'ING-18',
      node: 3,
      comp: 'Part 4 • First Conditional',
      context: '«If you study every day with FOXER, you ______ get an excellent score on the Saber 11 exam.»',
      stem: 'Which modal verb completes the First Conditional sentence correctly?',
      options: [
        'will',
        'would have',
        'had',
        'did'
      ],
      correct: 0,
      explanation: 'En el Primer Condicional (If + Present Simple), la cláusula principal lleva futuro con "will" + verbo base.'
    },
    {
      id: 'ING-19',
      node: 3,
      comp: 'Part 4 • Relative Pronouns',
      context: '«Gabriel García Márquez was the Colombian writer ______ won the Nobel Prize in Literature in 1982.»',
      stem: 'Which relative pronoun refers to a person as the subject of the clause?',
      options: [
        'which',
        'who',
        'where',
        'whose'
      ],
      correct: 1,
      explanation: 'Para referirse a personas ("writer") como sujeto de la oración subordinada se utiliza el pronombre relativo "who".'
    },
    {
      id: 'ING-20',
      node: 3,
      comp: 'Part 4 • Connectors of Contrast',
      context: '«______ it was raining heavily, the soccer match continued until the last minute.»',
      stem: 'Which connector correctly expresses contrast at the beginning of the sentence?',
      options: [
        'Because',
        'Although',
        'Therefore',
        'During'
      ],
      correct: 1,
      explanation: '"Although" (Aunque) introduce una cláusula de contraste seguida de sujeto y verbo ("it was raining").'
    },

    // --- NODO 5: Jefe Reading Comprehension B1+ (Preguntas 21-25) ---
    {
      id: 'ING-21',
      node: 4,
      comp: 'Part 5 • Reading Comprehension',
      context: '«Recycling glass and plastic bottles at school has helped students collect funds for their graduation trip while protecting the local river from pollution.»',
      stem: 'According to the text, what have the students achieved by recycling?',
      options: [
        'They cancelled their graduation trip.',
        'They raised money for their trip and helped protect the river.',
        'They polluted the river with plastic bottles.',
        'They bought a new school bus yesterday.'
      ],
      correct: 1,
      explanation: '"Collect funds" es sinónimo de "raise money" (recaudar dinero), y además protegieron el río local.'
    },
    {
      id: 'ING-22',
      node: 4,
      comp: 'Part 6 • Author’s Purpose & Inference',
      context: '«Working from home has allowed many parents to spend more time with their children and save up to two hours of daily traffic. However, experts recommend setting a clear schedule so that work does not invade family rest.»',
      stem: 'What is the author’s main attitude toward working from home?',
      options: [
        'It is completely negative and should be illegal.',
        'It offers great benefits for family life and commuting, provided people organize their time properly.',
        'Traffic is much better than spending time with children.',
        'Nobody should ever rest on weekends.'
      ],
      correct: 1,
      explanation: 'El autor presenta una postura equilibrada: destaca las ventajas (tiempo en familia, ahorro en tráfico) y añade una recomendación práctica (definir horarios).'
    },
    {
      id: 'ING-23',
      node: 4,
      comp: 'Part 6 • Reading Comprehension (Science Topic)',
      context: '«Bees are essential for agriculture because they pollinate more than 75% of the crops that produce fruits, vegetables, and seeds around the planet. Without bees, supermarket shelves would lose most of their colorful foods.»',
      stem: 'What can be inferred from the passage?',
      options: [
        'Bees only eat plastic bags in supermarkets.',
        'Human food security depends heavily on the pollination work done by bees.',
        'Fruits and vegetables can grow faster if bees disappear.',
        'Bees are only important in one small country.'
      ],
      correct: 1,
      explanation: 'Si polinizan más del 75% de los cultivos alimenticios, la seguridad alimentaria humana depende directamente de las abejas.'
    },
    {
      id: 'ING-24',
      node: 4,
      comp: 'Part 7 • Vocabulary in Context (Cloze)',
      context: '«Many teenagers enjoy learning a second language because it opens doors to international scholarships and allows them to ______ new friends from different cultures.»',
      stem: 'Which verb collocates naturally with "new friends"?',
      options: [
        'do',
        'make',
        'build',
        'cook'
      ],
      correct: 1,
      explanation: 'En inglés la colocación correcta es "make friends" (hacer amigos), nunca "do friends".'
    },
    {
      id: 'ING-25',
      node: 4,
      comp: 'Part 7 • Passive Voice in Context',
      context: '«The Gold Museum in Bogotá ______ visited by thousands of tourists and students every month.»',
      stem: 'Choose the correct verb form to complete the passive voice sentence:',
      options: [
        'is',
        'are',
        'were',
        'have'
      ],
      correct: 0,
      explanation: '"The Gold Museum" es singular y "every month" indica presente habitual; por tanto, la voz pasiva se forma con "is visited".'
    }
  ]
};
