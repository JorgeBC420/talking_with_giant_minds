<<<<<<< HEAD
# La Materia que se Pregunta

Un ensayo filosófico-científico sobre la realidad, la conciencia y la materia que se interroga a sí misma.

**Autor:** Jorge Eduardo Bravo Chaves  
**Licencia:** CC BY-NC-SA 4.0  
**Distribución:** Gratuita  
**Publicación oficial:** 7 de mayo de 2026

## 🌐 Sitio Web

**Visita el sitio:** https://jorgebc420.github.io/MateriaQueSePregunta/

### Características del sitio:
- ✨ Diseño elegante minimalista (paleta dorado y granito)
- 🌍 Soporte multiidioma (Español e Inglés)
- 📱 Diseño 100% responsive
- 🎨 Tipografía premium (Cinzel + EB Garamond)
- ♿ Accesible y SEO optimizado
- ⚡ Carga rápida y rendimiento optimizado

## 📚 Contenido

Este repositorio contiene:

### Documentos principales:
- **PDFs:**
  - 🇪🇸 `LaMateriaQueSePregunta_COMPLETO.pdf` - Versión en español
  - 🇺🇸 `QuestioningMatter_COMPLETE.pdf` - Versión en inglés

- **Documentos fuente:**
  - `LaMateriaQueSePregunta_COMPLETO.docx` - Word en español
  - `QuestioningMatter_COMPLETE.docx` - Word en inglés

### Configuración técnica:
- `_config.yml` - Configuración de Jekyll para GitHub Pages
- `robots.txt` - Instrucciones para motores de búsqueda
- `sitemap.xml` - Mapa del sitio para SEO
- `.gitattributes` - Normalización de codificación
- `.well-known/security.txt` - Información de seguridad
- `index.html` - Sitio web principal con Schema.org

## 🔗 Descargas directas

### Versión en Español
```
https://github.com/JorgeBC420/MateriaQueSePregunta/raw/main/LaMateriaQueSePregunta_COMPLETO.pdf
```

### Versión en Inglés
```
https://github.com/JorgeBC420/MateriaQueSePregunta/raw/main/QuestioningMatter_COMPLETE.pdf
```

## 🔗 Enlaces relacionados

Otros proyectos del autor:

- **SRCE (Spectral Rigidity Calibration Engine):**
  - 📊 GitHub: https://github.com/JorgeBC420/Spectral-Rigidity-Calibration-Engine
  - 🚀 Live App: https://bjsrce.streamlit.app/

- **PAE** - Proyecto en construcción

## 🛠️ Desarrollado con

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive y animaciones
- **JavaScript vanilla** - Interactividad sin dependencias
- **Jekyll** - Generación de sitio estático
- **GitHub Pages** - Hosting gratuito

## 📋 Optimizaciones implementadas

### SEO & Web Standards
- ✅ Meta tags completos (OpenGraph, Twitter Card)
- ✅ Schema.org structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Hreflang para multiidioma
- ✅ Sitemap y robots.txt
- ✅ Preconnect y DNS prefetch

### Performance
- ✅ Carga de fuentes optimizada
- ✅ CSS inlined crítico
- ✅ JavaScript asincrónico
- ✅ Intersection Observer para animaciones
- ✅ Imágenes optimizadas

### Accessibility
- ✅ Estructura HTML semántica
- ✅ Contraste de colores WCAG AA+
- ✅ Navegación por teclado
- ✅ ARIA labels donde necesario

## 📝 Licencia

Esta obra está bajo licencia **Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional**

### Eres libre de:
- ✅ **Compartir** — copiar y redistribuir el material
- ✅ **Adaptar** — remezclar, transformar y crear a partir del material

### Siempre y cuando:
- 🏷️ **Atribuyas** — des crédito al autor original
- 🚫 **No comercial** — no uses para fines comerciales
- 🔄 **Compartas igual** — si remezclas, usa la misma licencia

Más info: https://creativecommons.org/licenses/by-nc-sa/4.0/

## 🎯 Propósito

Este proyecto representa un hito personal: el resultado de la búsqueda honesta de respuestas a las preguntas más profundas sobre la existencia. Está dedicado a:

- Quienes apoyan el **conocimiento abierto**
- Aquellos que buscan **respuestas honestas**
- La importancia de **cuestionarse a uno mismo**

---

**Para más información o contribuciones:** 👉 [GitHub Profile](https://github.com/JorgeBC420)
=======
# Simulador Monte Carlo de Hipótesis Sectorial (SMCHS)
### Monte Carlo Simulator for the Sectorial Hypothesis (MCSSH)

**Autor:** Jorge Eduardo Bravo Chaves  
**Hipótesis base:** Transición Sectorial Cosmológica v3.1  
**Versión del simulador:** 0.5.3  
**Cosmología:** Planck18 (astropy)

---

## Descripción

Pipeline de 5 fases que compara dos modelos cosmológicos sobre la misma población base:

- **Modelo A (ΛCDM base):** galaxias cuya madurez depende solo del tiempo disponible desde el Big Bang sectorial.
- **Modelo B (Sectorial):** mismo ΛCDM, pero una fracción `f_rem` de objetos recibe una edad estructural previa `Δt_heredada`, formalizando la predicción central de la hipótesis:

```
t_eff = t_ΛCDM + Δt_heredada
```

El análisis mide si el modelo sectorial produce exceso estadístico de galaxias tempranamente maduras (análogo a JADES-GS-z14-0, MoM-z14) sin destruir la distribución de galaxias a bajo redshift.

**Descripción de una línea:**  
> Simulador Monte Carlo reproducible para evaluar si una fracción pequeña de madurez heredada, dispersada bajo una cosmología tipo Planck18, puede producir una cola estadística de galaxias tempranas maduras comparable a las tensiones observadas por JWST/ALMA.

---

## Distinción de versiones

| Componente | Versión |
|---|---|
| Hipótesis de Transición Sectorial Cosmológica | v3.1 |
| Simulador Monte Carlo (SMCHS / MCSSH) | v0.5.3 |

El simulador implementa la hipótesis v3.1, pero su versión es independiente. Actualizaciones al simulador no implican cambios en la hipótesis y viceversa.

---

## Estructura del proyecto

```
smchs/
├── config.py                  # Todos los parámetros globales
├── main.py                    # Punto de entrada
├── requirements.txt           # Dependencias
├── core/
│   ├── cosmologia.py          # Tablas Planck18, muestreo z, Schechter
│   └── poblacion.py           # Pipeline Fases A–D
├── analysis/
│   ├── estadistica.py         # KS-test, KL, ratio R, scan, heatmap
│   └── exportar.py            # Exportación CSV
├── figures/
│   └── graficas.py            # 11 figuras
└── outputs/                   # Generado automáticamente
```

---

## Instalación

```bash
pip install -r requirements.txt
```

Versiones acotadas: Python 3.10+, numpy >=1.24,<2.0; scipy >=1.10,<1.12; matplotlib >=3.7,<3.9; astropy >=5.3,<6.1. Ver `requirements.txt`.

---

## Uso

### Verificación rápida

```bash
# Verificación de sintaxis de todos los módulos
python scripts/verify.py

# Tests mínimos
python -m pytest tests/
```

El script `scripts/verify.py` compila todos los archivos `.py` del proyecto. Los tests que requieren `astropy` se omiten automáticamente si la dependencia no está instalada.


### Corrida completa
```bash
python main.py
```

### Corrida rápida (sin heatmap, N reducido)
```bash
python main.py --quick
```

### Parámetros personalizados
```bash
python main.py --frem 0.02 --tprev 1.0 --zcut 10 --n 100000
```

### Semilla reproducible explícita
```bash
python main.py --seed 42
python main.py --seed 99   # corrida alternativa reproducible
```

### Sin heatmap
```bash
python main.py --no-heatmap
```

| Argumento      | Default | Descripción                                          |
|----------------|---------|------------------------------------------------------|
| `--frem`       | 0.01    | Fracción de remanentes (0.01 = 1%)                   |
| `--tprev`      | 0.7     | Madurez heredada promedio (Gyr)                      |
| `--zcut`       | 12.0    | Redshift de corte para análisis de anomalías         |
| `--n`          | 120000  | Número de objetos en la simulación                   |
| `--seed`       | 42      | Semilla global para reproducibilidad                 |
| `--quick`      | False   | Modo rápido: N=30k, sin heatmap                      |
| `--no-heatmap` | False   | Omite el heatmap 2D (ahorra ~60s)                    |
| `--out`        | outputs | Directorio de salida                                 |

---

## Salidas

### Figuras (PNG)
| Archivo | Contenido |
|---------|-----------|
| `fig1_distribucion_masa.png` | Distribución log M★ con/sin filtro proxy |
| `fig2_exceso_redshift.png` | Fracción de galaxias masivas por bin de z |
| `fig3_ks_colas.png` | CDF comparativa + KS-test en cola |
| `fig4_correlacion_zm.png` | Correlación Z–M★ (estructura diferencial) |
| `fig5_delta_t.png` | Δtᵢ = t_chem − t_ΛCDM (Predicción P2) |
| `fig6_scan_frems.png` | P(anomalía), ratio R y KS-stat vs f_rem |
| `fig7_heatmap.png` | Heatmap R(f_rem × t_previo) |
| `fig8_objetos_jwst.png` | Objetos JWST/ALMA sobre nube simulada |
| `fig9_signal_vs_observed.png` | Separación Δt_signal vs Δt_observed |
| `fig10_distribucion_dt_signal.png` | Distribución completa y cola positiva de Δt_signal |
| `fig11_snr_detectabilidad.png` | ΔP_tail, SNR_tail_Q99 y Q99(dt_signal) vs f_rem |

### CSV
| Archivo | Contenido |
|---------|-----------|
| `metricas_por_f_rem.csv` | Tabla de métricas por valor de f_rem |
| `poblacion_muestra.csv` | Muestra de objetos individuales (base + sectorial) |
| `heatmap_sensitivity_ratio.csv` | Grilla completa de ratio R(f_rem, t_previo) |

---

## Diseño: catálogo base pareado + ruido compartido

```python
# El catálogo almacena z, t_lcdm, log_m_seed, eps_Z, eps_M
catalogo = inicializar_catalogo(N)

# Todos los modelos usan los MISMOS objetos Y el MISMO ruido
pop_lcdm = construir_poblacion(catalogo, f_rem=0.0)
pop_sect = construir_poblacion(catalogo, f_rem=0.01)

# La única diferencia entre pop_lcdm y pop_sect es f_rem.
# Esto es un análisis contrafactual limpio.
```

---

## Correcciones de Δtᵢ (v0.3.0 → v0.4.0)

En v0.2.0 Δtᵢ era error numérico (escala 10⁻¹⁶): se invertía `Z(t_eff)` sin ruido y se recuperaba `t_eff`.

**v0.3.0:** se invirtió `Z_met` (con ruido `ε_Z`), produciendo valores físicos reales (~0.2 Gyr media).

**v0.4.0:** `ε_Z` se almacena en el catálogo base, así el ruido es idéntico entre modelos. El Δtᵢ observado refleja solo el efecto de `f_rem`, no fluctuaciones de ruido.

**v0.5.3:** Métricas de mediana reemplazadas por métricas de **cola** (`Q95`, `Q99`, `P(Δt>τ)`, `SNR_tail_Q99`), que son el estimador correcto para señales raras con f_rem pequeño. La mediana de toda la población es cero cuando f_rem < 50%; las métricas de cola detectan el engrosamiento en el extremo donde la hipótesis predice señal. Fig 10 ahora muestra la cola positiva filtrada; Fig 11 reemplaza el SNR de mediana por los tres paneles de cola.

**Nota sobre dt_signal:** En esta implementación, `dt_signal = t_eff − t_ΛCDM = Δt_heredada` operativamente. Esto no es circularidad; es un test experimental deliberado: medir cuánta de la madurez inyectada sobrevive como señal detectable en la cola observable, después de que el ruido `eps_Z` contamina `dt_observed`. La diferencia `dt_signal − dt_observed = −dt_noise` cuantifica ese sesgo observacional.

La definición correcta (Predicción P2, hipótesis v3.1):
```
Δtᵢ = t_chem − t_ΛCDM
```
`Δtᵢ > 0` → la galaxia parece químicamente más madura de lo que permite su redshift bajo ΛCDM.

---


## Logging y tolerancia a fallos

`main.py` usa logging estructurado y escribe `smchs_run.log` dentro del directorio de salida. Si una figura falla, la corrida intenta continuar y conservar los outputs parciales. Use `--fail-fast` para detener la ejecución ante el primer error.

## Reproducibilidad

Las semillas se derivan con `hashlib.sha256`, no con `hash()` de Python (que es inestable entre sesiones por `PYTHONHASHSEED`). El mismo `--seed` y los mismos parámetros producen siempre los mismos resultados.

---


## Unidades importantes de configuración

- `SIGMA_Z`: ruido en metalicidad lineal, expresado como fracción solar `Z/Z☉`.
- `SIGMA_M`: ruido en masa estelar, expresado en dex sobre `log10(M★/M☉)`.
- `KL_N_BINS`: número de bins usados para la divergencia KL en la distribución de `log10(M★)`.
- `OUT_DIR`: por defecto apunta a `outputs/` dentro de la carpeta del proyecto, no al directorio desde donde se invoque Python.

## Filtro proxy de detectabilidad

El filtro de observabilidad es un **proxy simplificado basado en magnitud UV**, no un modelo instrumental de JWST. Captura el sesgo de luminosidad (objetos más tenues son menos detectables a mayor z). No modela sensibilidad por pixel, líneas de emisión, profundidad de campo ni ruido instrumental.

---

## Objetos observacionales de referencia

Los valores en `OBS_OBJECTS` (JADES-GS-z14-0, MoM-z14, etc.) son **puntos ilustrativos aproximados**, no una base de datos calibrada. Las masas y metalicidades de objetos a z > 10 tienen grandes incertidumbres observacionales. Ver notas por objeto en `config.py`.

---

## Qué NO afirma este simulador

> *"La simulación muestra que una fracción pequeña de madurez heredada puede producir una cola estadística de objetos tempranamente maduros, convirtiendo la hipótesis sectorial en un escenario computacionalmente explorable."*

El simulador no demuestra la existencia de sectores previos. Es un análisis de plausibilidad y falsabilidad cuantitativa.

---

## Métricas principales

Para masa/anomalía global se conserva:

```
R(f_rem) = P(log M★ > 10.5 | z > 12, visible, sectorial)
           ────────────────────────────────────────────────
           P(log M★ > 10.5 | z > 12, visible, ΛCDM)
```

Para la señal específica de madurez heredada, la métrica principal es de cola:

```
ΔP_tail = P(Δt_signal > τ | sectorial) − P(Δt_signal > τ | ΛCDM)
SNR_tail_Q99 = (Q99_sectorial − Q99_base) / σ_ruido
```

`tail_ratio` se conserva solo como métrica auxiliar porque se vuelve inestable cuando `P_tail_base ≈ 0`.

**Zona de interés:** R ≈ 1.5–3 o `SNR_tail_Q99 > 2` con f_rem bajo/moderado.  
**Zona de riesgo:** R >> 3 con f_rem > 5% (hipótesis requiere demasiada inyección).

---

## Referencias

- Aghanim et al. (Planck Collaboration, 2018). *A&A* 641, A6.
- ALMA Observatory (2025). Oxygen in most distant known galaxy.
- Bravo Chaves, J. E. (2026). *Hipótesis de Transición Sectorial Cosmológica v3.1*. Investigación independiente, San José, Costa Rica.
>>>>>>> 97e7b24d66dd18ca9de19e2c80d7e02b8250f4a8

