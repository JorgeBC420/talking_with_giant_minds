import React, { useState } from 'react';
import { Terminal, BookOpen, Coffee, Heart, FileText, Code, ExternalLink, ShieldCheck } from 'lucide-react';

const prefacioText = `
"Charlando con Mentes GIGANTES" es una obra de ficción-divulgación científica donde algunos de los pensadores y científicos más influyentes de la historia "regresan" para conversar sobre las dudas, teorías y confusiones de la era digital.

Estas conversaciones no son reconstrucciones históricas literales. Las voces de Sócrates, Pitágoras, Platón, Galileo, Newton, Tesla, Einstein, Darwin y los demás gigantes que aparecen en estas páginas son interpretaciones modernas de sus ideas, métodos y formas de razonar, adaptadas a una época donde el acceso masivo a la información convive con algo igual de masivo: la desinformación.

Vivimos en una era donde cualquier persona puede aprender astronomía, física, biología o filosofía desde un teléfono. Pero también vivimos en una era donde una mentira atractiva puede recorrer el mundo antes de que la verdad termine de explicar cómo funciona realmente un eclipse.

Este libro no fue escrito para burlarse de quien duda. Fue escrito para recordar que existen dos tipos de duda: la que busca entender mejor la realidad y la que nace del miedo, la confusión o el ruido constante de las redes. La primera construye conocimiento. La segunda destruye la confianza incluso en aquello que generaciones enteras ya lograron comprender.

Mi madre me enseñó los eclipses usando bolas y focos. Me enseñó que preguntar era bueno y que entender el mundo era algo hermoso. Este libro existe para que personas como ella no vuelvan a desconfiar de la realidad por culpa de la desinformación disfrazada de revelación.

Y también existe para mi hija, Kiara.

Para que crezca entendiendo que la curiosidad es más importante que el ego. Que preguntar nunca debe dar vergüenza. Que cambiar de opinión frente a la evidencia no es debilidad, sino honestidad intelectual. Y que la duda más valiosa no es la que rechaza todo, sino la que aprende cuándo confiar, cuándo cuestionar y cómo pensar.

Las conversaciones que siguen nunca ocurrieron.
Y, quizás, siempre han ocurrido.

Porque mientras exista alguien dispuesto a hacerse preguntas reales, las grandes mentes del pasado nunca estarán completamente en silencio.
`;

const cap5Text = `
El tejido del espacio-tiempo no es tan simple como nos enseñaron. Durante décadas, nos acostumbramos a un modelo cómodo: la teoría del Big Bang. Esta idea de que el universo comenzó en un punto de densidad infinita, un momento de creación singular desde donde todo se expandió.

Sin embargo, en la sala donde debaten las Mentes Gigantes, algunas piezas no encajan. Fred Hoyle pide la palabra. A Hoyle se le marginó por décadas por negarse a aceptar el dogma de un "inicio absoluto" y por defender su Teoría del Estado Estacionario, donde el universo es eterno. Como en una hábil auditoría epistémica, Hoyle nos recuerda que el Big Bang fue abrazado rápidamente en Occidente, en gran parte, porque se alineaba de manera reconfortante con la cosmovisión teológica judeocristiana de un Génesis lineal. Era más fácil aceptar un "hágase la luz" con fecha de caducidad que enfrentar el vacío aterrador de un universo infinito sin principio ni final.

Y así, mientras Newton y Einstein debaten las coordenadas formales y la geometría del cosmos, un nuevo observador irrumpe: el Telescopio Espacial James Webb. 

El James Webb no es solo un avance óptico; entra en la sala como el juez definitivo de este debate cosmológico. Al adentrarse en las profundidades del llamado "amanecer cósmico", nos devolvió no bebés en formación, sino galaxias enormes y organizadas, rascacielos estelares como JADES-GS-z14-0 que contienen trazas de oxígeno donde el "modelo estándar" dictaba que solo debía haber gas informe. Al presentarnos luz de galaxias tan maduras que no deberían existir en los plazos estipulados por el Big Bang, el Webb evidencia la fragilidad de nuestra cronología.

A esta revelación se le une el físico Bruno Bento y la perspectiva cuántica de la Teoría de Conjuntos Causales. Para Bento, el espacio-tiempo no es un lienzo continuo que surgió "de la nada", sino que está formado por "átomos espaciales" eternos. Bajo este foco, la singularidad—esa densidad infinita donde las matemáticas se rompen y la teología interviene—simplemente desaparece.

La "gran expansión" que nosotros atestiguamos, aquel corrimiento al rojo y el fondo cósmico de microondas que usamos para enterrar las ideas de Hoyle, bien pueden ser solo la dinámica transicional en un diminuto vecindario de un universo inmenso e imperecedero. Lo que percibimos hoy no es más que la luz abriéndose paso hasta nuestras limitadas herramientas a través de las escalas infinitas del universo. El problema nunca fue el cosmos: fue nuestro intento narcisista de ponerle un "Día Cero" a algo que siempre ha sido y será.

Aceptar que el universo puede no tener inicio, nos obliga a abandonar el confort teológico. Como todo en la ciencia, debemos aceptar que creíamos tener la respuesta, cuando solo estábamos iluminando la orilla y pensábamos que el océano terminaba allí. Seguíamos (y en gran parte, seguimos) a oscuras.
`;

const indice = [
  { id: 'prefacio', title: 'Prefacio', type: 'section' },
  { id: 'prologo', title: 'Prólogo', type: 'chapter' },
  { id: 'cap1', title: 'Capítulo 1 — El horizonte del observador', type: 'chapter' },
  { id: 'cap2', title: 'Capítulo 2 — La forma del cosmos', type: 'chapter' },
  { id: 'int1', title: 'Interludio I — Charles Darwin', type: 'interlude' },
  { id: 'cap3', title: 'Capítulo 3 — Las leyes que nadie puede sobornar', type: 'chapter' },
  { id: 'cap4', title: 'Capítulo 4 — La frecuencia del ruido', type: 'chapter' },
  { id: 'cap5', title: 'Capítulo 5 — El tejido del espacio-tiempo', type: 'chapter' },
  { id: 'int2', title: 'Interludio II — Pasteur, Nightingale, Salk, Curie', type: 'interlude' },
  { id: 'cap6', title: 'Capítulo 6 — La herencia cognitiva', type: 'chapter' },
  { id: 'cap7', title: 'Capítulo 7 — La red de perspectivas', type: 'chapter' },
  { id: 'cap8', title: 'Capítulo 8 — El cierre', type: 'chapter' },
  { id: 'apendices', title: 'Apéndices A y B', type: 'section' },
  { id: 'direccion_artistica', title: '_Dirección_Artística.md', type: 'section' },
  { id: 'hipotesis', title: 'Mini-paper: Hipótesis Sectorial', type: 'section' }
];

const hipotesisText = `
# Hipótesis de transición sectorial cosmológica

**Abstract**
Se propone una hipótesis cosmológica cautelosa según la cual el Big Bang describe la transición fundacional de un sector observable del universo, no necesariamente el inicio absoluto de toda la realidad física. El objetivo no es reemplazar la cosmología estándar, sino delimitar su alcance ontológico: las magnitudes *z*, *T_CMB*, *H_0*, *Ω_m* y *Ω_Λ* seguirían siendo válidas como observables del sector accesible, pero su interpretación cronológica no tendría por qué extenderse automáticamente a la totalidad de lo real. La propuesta introduce una descomposición efectiva del universo en sectores con historia térmica, dinámica y estructural propia, cuyos tiempos efectivos pueden diferir.

## 1. Definiciones operativas
Sea *U* la totalidad física.
Sea *S_0 ⊂ U* el sector cosmológico observable.
Sea un sector cosmológico *S_i* el dominio físico asociado a una historia causal y a un conjunto coherente de observables.

En términos operativos, un sector *S_i* satisface:
(i) delimitación causal,
(ii) coherencia térmica interna,
(iii) coherencia estructural observable.

La edad efectiva del sector *S_i* se denota por *t_i*, y la antigüedad total del universo por *t_U*. La tesis central es:
*t_0 ≠ t_U* en general.
Es decir, la edad inferida del sector observable no debe identificarse automáticamente con la edad ontológica total.

## 2. Supuestos mínimos
La hipótesis requiere los siguientes supuestos:
A1. La relatividad general describe correctamente la evolución efectiva de *S_0*.
A2. La totalidad *U* puede contener sectores con historias no sincronizadas.
A3. El Big Bang corresponde a una transición térmica-dinámica temprana de *S_0*.
A4. Los observables cosmológicos son locales al sector, no pruebas directas del origen absoluto de *U*.

Esta hipótesis no introduce nuevas partículas ni campos obligatorios. Introduce una reinterpretación estructural de la relación entre observación local y antigüedad total.

## 3. Relación con el modelo estándar
Dentro de *S_0*, se conserva la relación estándar de expansión métrica del corrimiento al rojo y, como primera aproximación, la ley térmica del CMB. La diferencia está en la interpretación: estas relaciones describen la historia del sector observable, no prueban que *t_0 = t_U*. Por tanto, el Big Bang sigue siendo válido como transición fundacional de *S_0*, pero no como demostración de un inicio absoluto de *U*.

## 4. JADES como tensión observacional
JADES-GS-z14-0 presenta redshift extremo y evidencia de oxígeno, lo que implica madurez química temprana. Eso no refuta la cosmología estándar, pero sí crea tensión con una lectura de homogeneidad cronológica global. En esta hipótesis, JADES es evidencia de que algunos objetos del sector observable alcanzaron complejidad química antes de lo esperado, cuestionando si nuestro reloj cosmológico mide desde una transición local y no necesariamente desde el origen total. Si las discrepancias en madurez muestran patrones regionales persistentes en lugar de ruido estadístico aleatorio, la hipótesis sectorial gana fuerza.

## 5. Predicciones observables
*   **P1. Agrupamiento regional de madurez:** Las anomalías de madurez temprana se agruparían en patrones espaciales o dinámicos que indiquen historias sectoriales diferenciadas en subconjuntos específicos del cielo.
*   **P2. Desacople entre métricas de edad:** Las edades inferidas por redshift, química y estructura revelarían discrepancias sistemáticas imposibles de reducir a un simple error de medición.
*   **P3. Reorganización gravitacional extensiva:** Deberían encontrarse ejemplos macro de dinámicas que produzcan estelas de formación estelar donde el paso de un evento extremo y la estructura coincidan.
*   **P4. Homogeneidad interna del CMB, no ontológica:** La temperatura del CMB funciona como constante local efectiva en el sector *S_0*, sin que eso implique cronología homogénea en el universo total *U*.

## 6. Criterio de falsación
La hipótesis queda debilitada si toda anomalía temprana puede explicarse dentro del modelo ΛCDM mediante refinamientos razonables de formación galáctica temprana, sin necesidad de introducir historia sectorial y sin dejar residuos sistemáticos regionales.

## 7. Conclusión
La hipótesis de transición sectorial no niega el Big Bang ni la relatividad general. Los toma como correctos dentro del sector observable y propone que su alcance ontológico sea local, no absoluto. El valor de la hipótesis no está en afirmar un nuevo origen, sino en preguntar si la cronología cosmológica que inferimos desde aquí describe todo lo real o solo la historia de nuestro sector.
`;

export default function App() {
  const [activeSection, setActiveSection] = useState('prefacio');

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-[#18120d] overflow-hidden selection:bg-amber-500/30 relative"
         style={{
           backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")',
           boxShadow: 'inset 0 0 150px rgba(0,0,0,0.9)'
         }}
    >
      {/* Decorative Desk Elements */}
      <div className="hidden lg:block absolute top-8 left-8 transform -rotate-6 bg-[#ffea8c] text-[#3d3d29] p-4 shadow-lg w-40 z-30 font-['Comic_Sans_MS'] border-t-8 border-amber-300">
        Dudar para precisión
      </div>
      <div className="hidden xl:flex absolute top-40 left-6 transform rotate-3 bg-[#ffea8c] text-[#3d3d29] p-4 shadow-lg w-36 z-30 font-['Comic_Sans_MS'] border-t-8 border-amber-300">
        Pensar para construir
      </div>

      {/* Ideas Notebook */}
      <div className="hidden 2xl:flex absolute top-12 left-[500px] transform -rotate-2 bg-[#fdf8ed] text-slate-800 p-6 shadow-[10px_10px_30px_rgba(0,0,0,0.8)] w-56 z-10 font-['Comic_Sans_MS'] border-l-[12px] border-slate-900 flex-col gap-2 rounded-r-md">
        <h3 className="font-bold border-b-2 border-red-400 pb-1 mb-2">IDEAS</h3>
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>Electricidad</li>
          <li>Páginas Web</li>
          <li>Conocimiento</li>
          <li className="leading-tight mt-2 italic text-red-700">Conversaciones que trascienden el tiempo</li>
        </ul>
      </div>
      
      {/* LEFT PANEL: THE TERMINAL / LAPTOP */}
      <div className="w-full md:w-[400px] lg:w-[450px] lg:my-10 lg:ml-10 h-1/2 md:h-full lg:h-[calc(100vh-80px)] flex flex-col border border-[#1a1a1a] rounded-t-lg lg:rounded-lg bg-[#111116] text-[#c9d1d9] shadow-2xl relative z-20 overflow-hidden ring-4 ring-[#1f1f1f]">
        
        {/* Terminal Header simulated as laptop bezel */}
        <div className="flex items-center justify-center gap-2 px-4 py-2 border-b border-[#000] bg-[#0d0d12]">
          <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4"></div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold">TERMINAL - JORGE BRAVO</span>
        </div>

        <div className="flex-1 overflow-y-auto p-5 md:p-6 font-mono text-sm space-y-8 scrollbar-thin scrollbar-thumb-[#2a2a35] scrollbar-track-transparent bg-black/80">
          
          {/* Title Area */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 text-green-500">
              <Code size={16}/> <span className="text-xs">/home/jorge/projects/livres</span>
            </div>
            <h1 className="text-2xl font-serif text-white tracking-tight border-l-2 border-green-500 pl-3 leading-snug">
              Charlando con <br/>
              <span className="text-green-400 font-bold italic">Mentes GIGANTES</span>
            </h1>
            <p className="text-[#8b949e]">Por <span className="text-white">Jorge Bravo Chaves</span></p>
          </div>

          {/* Interaction Menu */}
          <div className="space-y-2">
            <p className="text-green-500 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <Terminal size={14}/>
              ~/_Catálogo_Módulos
            </p>
            <ul className="space-y-2">
              {indice.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-2 py-1.5 rounded transition-all duration-200 flex items-start gap-2 ${
                      activeSection === item.id 
                        ? 'bg-green-500/10 text-green-400 font-bold translate-x-1 border-l border-green-500' 
                        : 'text-[#8b949e] hover:bg-[#2a2a35] hover:text-[#c9d1d9]'
                    }`}
                  >
                    <span className="opacity-50 select-none mt-0.5 shrink-0">$</span>
                    <span className={`${item.type === 'interlude' ? 'italic text-slate-400' : ''} leading-tight`}>
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Support */}
          <div className="pt-6 border-t border-[#2a2a35] space-y-6">
            <div className="space-y-2">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={14} /> Licencia
              </p>
              <p className="text-[11px] text-[#8b949e] leading-relaxed">
                Distribuido bajo la licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 (CC BY-NC-SA 4.0).
              </p>
            </div>

            <div className="space-y-3 pb-8">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Heart size={14} /> Apoyo a la Obra
              </p>
              <div className="flex flex-col gap-2 mt-2 font-mono">
                <a href="https://ko-fi.com/jorgebravochaves" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[11px] bg-[#1a1a24] border border-[#2a2a35] p-2.5 rounded-md hover:border-amber-500 hover:text-amber-100 transition-all group">
                  <span className="text-[#8b949e] group-hover:text-amber-500">[ko-fi]</span>
                  <span>/jorgebravochaves</span>
                </a>
                <a href="https://paypal.me/JorgeBravoChaves" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[11px] bg-[#1a1a24] border border-[#2a2a35] p-2.5 rounded-md hover:border-amber-500 hover:text-amber-100 transition-all group">
                  <span className="text-[#8b949e] group-hover:text-amber-500">[paypal]</span>
                  <span>@JorgeBravoChaves</span>
                </a>
                <div className="flex items-center justify-between text-[11px] bg-[#181822] border border-[#2a2a35] p-2.5 rounded-md">
                  <span className="text-[#8b949e] font-mono">[SINPE_Móvil]</span>
                  <span className="text-amber-500 font-mono tracking-wider">71880297</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Laptop keyboard base simulation */}
        <div className="h-8 bg-[#1f1f1f] w-full border-t border-black hidden lg:block shadow-[0_10px_20px_rgba(0,0,0,0.8)]"></div>
      </div>

      {/* RIGHT PANEL: THE ANTIQUE BOOK */}
      <div className="flex-1 h-1/2 md:h-full lg:h-[calc(100vh-60px)] lg:my-8 lg:mr-10 lg:ml-6 lg:rounded-lg bg-[#fdfaf3] overflow-y-auto relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#d4c5b0]">

        {/* Red ribbon bookmark */}
        <div className="absolute top-0 right-16 w-8 h-48 bg-[#8b2323] z-0 drop-shadow-xl flex justify-center hidden lg:flex" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%)' }}>
          <div className="w-1 h-full bg-[#7a1e1e]"></div>
        </div>
        
        {/* Subtle Paper Texture Overlay using a CSS gradient trick */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Notebook / Stack of Books simulation on the right edge */}
        <div className="hidden xl:flex absolute top-10 right-4 flex-col gap-2 opacity-80 pointer-events-none transform rotate-2 origin-top-right">
          {["LA BÚSQUEDA DE PATRONES", "EL ORDEN DEL CAOS", "LA NATURALEZA Y SUS LEYES", "LA VERDAD COMO MÉTODO", "CURIOSIDAD SIN LÍMITES"].map((bookTitle, i) => (
             <div key={i} className="px-4 py-1.5 flex items-center justify-center bg-[#2c1c11] text-[#e0cfb8] border-l-4 border-[#120a05] text-[9px] font-sans tracking-widest uppercase w-6 shadow-[0_15px_15px_rgba(0,0,0,0.8)] drop-shadow-xl" style={{ writingMode: 'vertical-rl', height: '240px', transform: `rotate(${Math.random()*4-2}deg) translateX(${Math.random()*5}px)`}}>
               {bookTitle}
             </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 md:px-16 md:py-24 relative z-10">
          
          {activeSection === 'prefacio' ? (
            <article className="prose prose-lg prose-slate font-serif text-[#2c2c2a] mx-auto pb-20">
              <header className="mb-16 text-center border-b border-[#e1d5c5] pb-10">
                <h2 className="text-xs font-mono tracking-[0.3em] text-[#8c7b66] uppercase mb-4 opacity-80 mt-10">Introducción</h2>
                <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight mb-8 font-semibold">Prefacio</h1>
                <div className="w-12 h-1 bg-[#d4a373] mx-auto"></div>
              </header>

              <div className="space-y-6 text-[1.125rem] leading-[1.8] text-justify">
                {prefacioText.trim().split('\n\n').map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <p key={index} className="drop-cap-paragraph">
                        <span className="float-left text-7xl font-bold leading-[0.8] mr-3 mt-1 text-[#1a1a1a]">
                          {paragraph.charAt(1)}
                        </span>
                        {paragraph.substring(2, paragraph.length - 1)} {/* Remove the quotes */}
                      </p>
                    );
                  }
                  
                  if (paragraph.startsWith("Para que crezca")) {
                     return (
                      <p key={index} className="italic text-[#4a4a49] text-center px-8 border-l-2 border-r-2 border-[#d4a373] my-10">
                        {paragraph}
                      </p>
                    );
                  }

                  if (paragraph.startsWith("Las conversaciones que siguen")) {
                     return (
                      <div key={index} className="py-12 my-12 text-center font-bold text-xl md:text-2xl text-[#1a1a1a] leading-relaxed relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-[#d4a373]"></div>
                        <p>{paragraph.split('\n')[0]}</p>
                        <p className="italic text-[#d4a373] font-normal text-lg mt-2">{paragraph.split('\n')[1]}</p>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-[#d4a373]"></div>
                      </div>
                    );
                  }
                  
                  if (paragraph.startsWith("Porque mientras")) {
                     return (
                      <p key={index} className="text-center italic text-[#8c7b66] max-w-lg mx-auto">
                        {paragraph}
                      </p>
                    );
                  }

                  return <p key={index}>{paragraph}</p>;
                })}
              </div>
            </article>
          ) : activeSection === 'cap5' ? (
            <article className="prose prose-lg prose-slate font-serif text-[#2c2c2a] mx-auto pb-20">
              <header className="mb-16 text-center border-b border-[#e1d5c5] pb-10">
                <h2 className="text-xs font-mono tracking-[0.3em] text-[#8c7b66] uppercase mb-4 opacity-80 mt-10">Capítulo 5</h2>
                <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight mb-8 font-semibold">El tejido del espacio-tiempo</h1>
                <div className="w-12 h-1 bg-[#d4a373] mx-auto"></div>
              </header>

              <div className="space-y-6 text-[1.125rem] leading-[1.8] text-justify">
                {cap5Text.trim().split('\n\n').map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <p key={index} className="drop-cap-paragraph">
                        <span className="float-left text-7xl font-bold leading-[0.8] mr-3 mt-1 text-[#1a1a1a]">
                          {paragraph.charAt(0)}
                        </span>
                        {paragraph.substring(1)}
                      </p>
                    );
                  }
                  
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>
            </article>
          ) : activeSection === 'direccion_artistica' ? (
            <article className="prose prose-lg prose-slate font-serif text-[#2c2c2a] mx-auto pb-20">
              <header className="mb-16 text-center border-b border-[#e1d5c5] pb-10">
                <h2 className="text-xs font-mono tracking-[0.3em] text-[#8b2323] uppercase mb-4 opacity-80 mt-10">Anexo Ténico</h2>
                <h1 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] tracking-tight mb-8 font-semibold">Dirección Artística y Análisis Visual</h1>
                <div className="w-12 h-1 bg-[#8b2323] mx-auto"></div>
              </header>

              <div className="space-y-6 text-[1.125rem] leading-[1.8] text-justify">
                <p><strong>Obra:</strong> Charlando con Mentes GIGANTES</p>
                <p><strong>Estilo Visual Principal:</strong> <em>Boceto Técnico Ilustrado / Vintage-Moderno.</em></p>
                <p>El estilo visual recomendado unifica la antigüedad de los pensadores con la modernidad del protagonista y la tecnología. Imagina las páginas del cuaderno de Leonardo da Vinci mezcladas con diagramas técnicos de ingeniería moderna y sombreado de cómic de alta calidad.</p>
                
                <h3 className="text-2xl font-bold mt-10 mb-4 text-[#8b2323]">Conceptos Clave de Ilustración</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Línea:</strong> Tinta negra texturizada, precisa pero con calidez orgánica (efecto pluma estilográfica o tiralíneas).</li>
                  <li><strong>Color:</strong> Paleta limitada y sofisticada. Fondo sepia suave (papel envejecido). Uso de colores planos acentuados (azul cian eléctrico para tecnología/señal, rojo óxido para errores/ruido, ocre para historia).</li>
                  <li><strong>Coherencia:</strong> Todos los diagramas científicos deben integrarse como si el propio Jorge (o los Gigantes) los estuviera dibujando en su terminal o cuaderno mientras conversan.</li>
                </ul>

                <div className="p-6 bg-[#f0e6d2] border border-[#d4c5b0] rounded-md mt-8 shadow-inner my-10 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#8b2323]"></div>
                  <h4 className="font-bold text-[#1a1a1a] mb-2 font-mono flex items-center gap-2"><FileText size={18} className="text-[#8b2323]"/> Listado Propuesto (40 Ilustraciones)</h4>
                  <p className="text-base text-slate-700 italic">
                    La obra contará con 40 ilustraciones generadas mediante Inteligencia Artificial, abordando temáticas como la astronomía (dibujos técnicos, curvas y geometría), física (gravedad, leyes de Newton, radiación), analogías filosóficas (La Caverna de Platón), biología evolutiva, y esquemas pedagógicos de desmitificación moderna.
                  </p>
                </div>
                
                <p className="text-center italic text-[#8c7b66] mt-12 mb-20 text-xl font-medium">
                  "Un libro que se lee, se entiende, y ahora, se visualiza."
                </p>
              </div>
            </article>
          ) : activeSection === 'hipotesis' ? (
             <article className="prose prose-lg prose-slate font-serif text-[#2c2c2a] mx-auto pb-20">
               <div className="markdown-body my-10 px-4 md:px-0 text-[1.125rem] leading-[1.8] text-justify">
                 {hipotesisText.split('\n').map((line, i) => {
                   if (line.startsWith('# ')) return <h1 key={i} className="text-3xl md:text-4xl font-serif text-[#1a1a1a] tracking-tight mb-8 font-semibold text-center border-b border-[#e1d5c5] pb-6 mt-10">{line.replace('# ', '')}</h1>;
                   if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-[#8b2323]">{line.replace('## ', '')}</h2>;
                   if (line.startsWith('**')) return <p key={i} className="font-bold mb-2">{line.replace(/\*\*/g, '')}</p>;
                   if (line.startsWith('* ')) return <li key={i} className="ml-6 mb-2">{line.replace('* ', '')}</li>;
                   if (line.trim() === '') return <div key={i} className="h-4"></div>;
                   return <p key={i} className="mb-4">{line.replace(/\*/g, '')}</p>;
                 })}
               </div>
             </article>
          ) : (
            <article className="h-full min-h-[60vh] flex flex-col items-center justify-center text-center opacity-80 mt-10 md:mt-32">
              <div className="w-full flex justify-center mb-8">
                <div className="w-32 h-32 border-4 border-[#8c7b66] rounded-full flex items-center justify-center bg-transparent relative">
                  <div className="absolute -inset-2 border border-[#d4a373] rounded-full opacity-30"></div>
                  <BookOpen size={48} className="text-[#8c7b66]" strokeWidth={1} />
                </div>
              </div>
              <h2 className="text-3xl font-serif text-[#1e1e1e] mb-8 font-semibold tracking-wide">
                {indice.find(i => i.id === activeSection)?.title}
              </h2>
              <div className="w-16 h-px bg-[#d4a373] mb-8 mx-auto"></div>
              <p className="font-serif italic text-xl text-[#6d6153] max-w-lg leading-relaxed">
                «El único lugar donde el tiempo no puede silenciarlas: el pensamiento escrito.»
              </p>
              <p className="font-mono text-xs uppercase tracking-widest mt-6 text-[#a39483]">- J.B.C.</p>
            </article>
          )}

        </div>
      </div>
      
      {/* Coffee Mug simulating the image */}
      <div className="hidden xl:flex absolute bottom-8 left-[400px] z-30 transform -rotate-12 w-32 h-32 rounded-full border-4 border-slate-900 bg-[#0d0a08] shadow-[15px_15px_20px_rgba(0,0,0,0.9)] items-center justify-center">
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-12 border-4 border-slate-900 rounded-r-2xl bg-transparent"></div>
        <div className="w-28 h-28 rounded-full border border-slate-700 bg-[radial-gradient(ellipse_at_center,_#3c2211_0%,_#170c05_100%)] flex flex-col items-center justify-center text-center p-2 text-slate-500 font-mono text-[7px] leading-tight opacity-70">
          <Coffee size={16} className="text-slate-600 mb-1" />
          <span className="font-bold">SERVICIOS<br/>TECNICOS</span>
          <span className="border-y border-slate-700 w-8 my-1 py-0.5">JBCR</span>
          <span>Electricidad &<br/>Páginas Web</span>
        </div>
      </div>
    </div>
  );
}
