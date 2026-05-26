# INSTRUCCIONES: Generar PDF Bilingüe

**Charlando con Mentes GIGANTES** - Guía para crear el PDF único bilingüe

---

## 📋 Requisitos

El objetivo es crear **UN ÚNICO PDF** que contenga:
- Versión en ESPAÑOL e INGLÉS en paralelo o alternado
- Índice completo con títulos en ambos idiomas
- Formato profesional A4
- Descarga simple desde el sitio web

---

## ✅ Opción 1: Pandoc + LaTeX (Recomendado)

### Instalación
```bash
# Windows (con Chocolatey)
choco install pandoc miktex

# macOS (con Homebrew)
brew install pandoc mactex

# Linux
sudo apt-get install pandoc texlive-latex-base texlive-fonts-recommended
```

### Estructura del contenido (Markdown)

Crear archivo: `book_content.md`

```markdown
---
title: Charlando con Mentes GIGANTES / Conversing with GIANT Minds
author: Jorge Bravo Chaves
date: 2026
lang: es
---

# Prólogo / Prologue

## Es

Una introducción al libro...

## En

An introduction to the book...

---

# Capítulo 1 — El horizonte del observador / The Observer's Horizon

## Es

Contenido del capítulo 1 en español...

## En

Content of chapter 1 in English...

---

[... repetir para todos los capítulos ...]
```

### Crear PDF
```bash
pandoc book_content.md \
  -o Charlando_con_Mentes_GIGANTES_BILINGUE.pdf \
  --pdf-engine=xelatex \
  -V mainfont="EB Garamond" \
  -V monofont="Courier New" \
  -V geometry:margin=1in \
  --toc \
  --number-sections \
  --metadata-file metadata.json
```

---

## ✅ Opción 2: LibreOffice Writer + Export

### Pasos

1. **Abrir LibreOffice Writer**
   - Crear documento nuevo

2. **Importar contenido bilingüe**
   - Usar secciones/estilos diferentes para ES/EN
   - O usar tablas 2 columnas (ES | EN)

3. **Formatear**
   - Fuente: EB Garamond o Garamond
   - Tamaño: 11-12pt
   - Espaciado: 1.5 líneas
   - Márgenes: 2.5cm

4. **Exportar a PDF**
   - File → Export as PDF
   - Opciones:
     - ☑ Create PDF/A
     - ☑ Embed fonts
     - ☑ Table of Contents

---

## ✅ Opción 3: HTML → PDF (Más Simple)

### Usar Wkhtmltopdf

```bash
# Instalación
# Windows: descargar de https://wkhtmltopdf.org
# macOS: brew install wkhtmltopdf
# Linux: sudo apt-get install wkhtmltopdf

# Generar PDF desde HTML
wkhtmltopdf \
  --page-size A4 \
  --margin-top 0.75in \
  --margin-bottom 0.75in \
  --margin-left 0.75in \
  --margin-right 0.75in \
  --print-media-type \
  index.html \
  Charlando_con_Mentes_GIGANTES_BILINGUE.pdf
```

### Ventaja
- Usa el diseño existente del sitio web
- El PDF heredará los estilos CSS
- Es rápido y reproducible

---

## ✅ Opción 4: Usando Python (Automatizado)

Crear script: `generate_pdf.py`

```python
from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.pdfgen import canvas

# Configurar documento
doc = SimpleDocTemplate(
    "Charlando_con_Mentes_GIGANTES_BILINGUE.pdf",
    pagesize=A4,
    rightMargin=0.75*inch,
    leftMargin=0.75*inch,
    topMargin=0.75*inch,
    bottomMargin=0.75*inch,
)

# Cargar contenido
story = []
styles = getSampleStyleSheet()

# Título
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=28,
    textColor='#c9a84c',  # Oro del sitio
    spaceAfter=30,
)

story.append(Paragraph("Charlando con Mentes GIGANTES", title_style))
story.append(Paragraph("Conversing with GIANT Minds", title_style))
story.append(Spacer(1, 0.5*inch))

# Cargar índice desde metadata.json
import json
with open('metadata.json') as f:
    data = json.load(f)
    for chapter in data.get('chapters', []):
        # Agregar capítulo en ES y EN
        story.append(PageBreak())

# Generar PDF
doc.build(story)
print("✓ PDF generado: Charlando_con_Mentes_GIGANTES_BILINGUE.pdf")
```

Ejecutar:
```bash
python generate_pdf.py
```

---

## 📐 Especificaciones Recomendadas

| Parámetro | Valor |
|-----------|-------|
| Tamaño página | A4 (210 × 297 mm) |
| Márgenes | 2 cm (0.75 in) |
| Fuente principal | EB Garamond, 11-12pt |
| Fuente títulos | Cinzel, 18-24pt |
| Color títulos | #c9a84c (Oro) |
| Espaciado línea | 1.5 |
| Codificación | UTF-8 |

---

## 🎨 Estructura Sugerida del PDF

### Portada
```
CHARLANDO CON MENTES GIGANTES
Conversing with GIANT Minds

Jorge Bravo Chaves
Costa Rica · 2025–2026

CC BY-NC-SA 4.0
```

### Índice / Table of Contents
- Prólogo / Prologue
- 8 Capítulos (con números de página)
- 3 Interludios
- 2 Apéndices

### Contenido Principal
**Formato: Bilingüe alternado**

```
# PRÓLOGO / PROLOGUE

## ES
[Contenido español...]

## EN
[Contenido inglés...]

---

# CAPÍTULO 1 — El horizonte del observador / The Observer's Horizon

### I. El límite del ojo / The Limit of the Eye

## ES
[Contenido en español...]

---

## EN
[Contenido en inglés...]

---
```

### Apéndices
- Debug de Mitos / Debug of Modern Myths
- Guía Didáctica / Teaching Guide

### Información de Distribución
```
DISTRIBUCIÓN · DISTRIBUTION

Gratuita bajo licencia CC BY-NC-SA 4.0
Free distribution under CC BY-NC-SA 4.0 license

Jorge Bravo Chaves · Costa Rica · 2025–2026
```

---

## 🔧 Script Automatizado (Recomendado)

Crear: `build_pdf.sh` (macOS/Linux) o `build_pdf.bat` (Windows)

### macOS/Linux
```bash
#!/bin/bash

echo "🔄 Generando PDF bilingüe..."

# Opción 1: Con Pandoc
pandoc book_content.md \
  -o Charlando_con_Mentes_GIGANTES_BILINGUE.pdf \
  --pdf-engine=xelatex \
  -V mainfont="EB Garamond" \
  --toc

echo "✅ PDF generado en: Charlando_con_Mentes_GIGANTES_BILINGUE.pdf"
echo "📍 Tamaño: $(du -h Charlando_con_Mentes_GIGANTES_BILINGUE.pdf | cut -f1)"
```

### Windows
```batch
@echo off
echo Generando PDF bilingue...

REM Requiere Pandoc + MiKTeX instalados
pandoc book_content.md ^
  -o Charlando_con_Mentes_GIGANTES_BILINGUE.pdf ^
  --pdf-engine=xelatex ^
  -V mainfont="EB Garamond" ^
  --toc

echo Listo!
pause
```

Ejecutar:
```bash
chmod +x build_pdf.sh
./build_pdf.sh
```

---

## 📋 Checklist de Calidad

Antes de publicar el PDF:

- [ ] ✅ Portada profesional
- [ ] ✅ Índice completo y con enlaces
- [ ] ✅ Páginas numeradas (footer)
- [ ] ✅ Encabezados y subtítulos claros
- [ ] ✅ Ambos idiomas presentes
- [ ] ✅ Sin caracteres corruptos
- [ ] ✅ Fuentes embebidas
- [ ] ✅ Márgenes consistentes
- [ ] ✅ Espaciado uniforme
- [ ] ✅ Meta información correcta (Título, Autor, Asunto)

---

## 📦 Colocación Final

Una vez generado el PDF, colocarlo en:

```
charlando_con_mentes_gigantes_index/
├── index.html
├── Charlando_con_Mentes_GIGANTES_BILINGUE.pdf  ← AQUÍ
├── metadata.json
├── README.md
└── package.json
```

El enlace en `index.html` ya apunta a este archivo:
```html
<a href="Charlando_con_Mentes_GIGANTES_BILINGUE.pdf" download>
  ↓ Descargar PDF
</a>
```

---

## 🚀 Deployment

Subir a GitHub Pages:

```bash
git add Charlando_con_Mentes_GIGANTES_BILINGUE.pdf
git commit -m "Add bilingual PDF"
git push origin main
```

El PDF será descargable desde:
```
https://jorgebc420.github.io/charlando_con_mentes_gigantes/Charlando_con_Mentes_GIGANTES_BILINGUE.pdf
```

---

## 📞 Soporte

- Problemas con Pandoc: Ver [Pandoc Documentation](https://pandoc.org/getting-started.html)
- Problemas con LaTeX: Ver [TeX Stack Exchange](https://tex.stackexchange.com/)
- Preguntas específicas: Contactar a Jorge Bravo Chaves

---

**Última actualización: Mayo 2026**
