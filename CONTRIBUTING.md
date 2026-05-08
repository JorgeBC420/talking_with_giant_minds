# Contribuyendo a La Materia que se Pregunta

¡Gracias por tu interés en contribuir! Este documento te proporciona pautas sobre cómo hacerlo.

## 📋 Código de Conducta

Este proyecto se adhiere a un código de conducta que espera que todos los participantes respeten:
- Sé respetuoso y constructivo
- Respeta la diversidad de opiniones
- Enfócate en lo que es mejor para la comunidad
- Muestra empatía hacia otros miembros

## 🐛 Reportar Bugs

Si encuentras un error, por favor:

1. **Verifica si el bug ya existe** - Revisa los issues existentes
2. **Proporciona contexto detallado:**
   - Navegador/dispositivo utilizado
   - Pasos para reproducir el error
   - Comportamiento esperado vs. actual
   - Screenshots si es relevante

3. **Crea un issue con el título descriptivo**

## 💡 Sugerir Mejoras

Las mejoras son bienvenidas. Por favor:

1. Usa un **título claro y descriptivo**
2. Proporciona una **descripción detallada** de la mejora
3. Explica **por qué** crees que sería beneficiosa
4. Lista algunos **ejemplos** si es posible

## 🔧 Tipos de Contribución Aceptadas

### Traducciones
- Nuevos idiomas
- Correcciones de traducción existentes
- Mejora de precisión en la traducción

### Mejoras Técnicas
- Optimizaciones de performance
- Mejoras en accesibilidad (WCAG)
- Correcciones de SEO
- Mejoras en diseño responsive

### Contenido
- Correcciones ortográficas/gramaticales
- Mejoras en la documentación
- Referencias adicionales
- Ejemplos

### Diseño
- Mejoras visuales
- Paleta de colores alternativas
- Animaciones mejoradas
- Optimizaciones de UI

## ❌ No Aceptamos

- Cambios importantes al contenido del ensayo (esto es intelectual)
- Intentos de monetizar el contenido
- Cambios que violen la licencia CC BY-NC-SA 4.0
- Spam o contenido promocional

## 🎯 Proceso de Contribución

### Para contribuyentes pequeñas:

1. **Fork el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/MateriaQueSePregunta.git
   cd MateriaQueSePregunta
   ```

2. **Crea una rama descriptiva**
   ```bash
   git checkout -b improve/traduccion-frances
   git checkout -b fix/typo-pagina-inicio
   git checkout -b feature/dark-mode
   ```

3. **Realiza tus cambios**
   - Commit con mensajes claros
   - Un cambio lógico por commit

4. **Push a tu fork**
   ```bash
   git push origin improve/traduccion-frances
   ```

5. **Abre un Pull Request**
   - Título descriptivo
   - Descripción detallada de cambios
   - Referencia a issues relacionados (si aplica)

### Pautas para Pull Requests:

- **Rama destino:** `main`
- **Una característica/fix por PR**
- **Commits atómicos** y bien organizados
- **Mensajes de commit** claros en presente ("Add feature" no "Added feature")
- **Sin conflictos** con la rama main
- **Código limpio** y bien formateado

## 📝 Mensaje de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<scope>): <descripción corta>

<descripción detallada si es necesaria>

<referencias a issues>
```

### Tipos de commits:
- **feat:** Nueva característica
- **fix:** Corrección de bug
- **docs:** Cambios en documentación
- **style:** Cambios de formato (sin cambiar código)
- **refactor:** Refactorización de código
- **perf:** Mejoras de performance
- **test:** Agregación o modificación de tests
- **chore:** Cambios de configuración/dependencias

### Ejemplos:
```
feat(i18n): add French translation

docs: update README with new features

fix(seo): improve meta description tags

style(css): normalize indentation in main.css
```

## 🌐 Contribuciones de Traducción

Si deseas traducir a un nuevo idioma:

1. **Comunica tu intención** - Abre un issue para avisar
2. **Crea una rama** - `feat/translate-<idioma>`
3. **Archivo de traducción** - Sigue el formato existente
4. **Prueba completamente** - Verifica que funcione en el sitio
5. **Documentación** - Actualiza README con el nuevo idioma

## 📚 Estructura del Proyecto

```
MateriaQueSePregunta/
├── index.html              # Sitio principal
├── _config.yml            # Configuración Jekyll
├── robots.txt             # SEO
├── sitemap.xml            # Mapa del sitio
├── README.md              # Documentación
├── CHANGELOG.md           # Historial
├── CONTRIBUTING.md        # Este archivo
├── LICENSE               # Licencia CC BY-NC-SA 4.0
├── .gitignore            # Archivos ignorados
├── .gitattributes        # Normalización de líneas
├── .well-known/
│   └── security.txt      # Información de seguridad
├── PDFs/                  # Documentos principales
└── ...
```

## 🔍 Revisión de Código

Los PRs serán revisados por los mantenedores del proyecto. Esperamos:

- Código limpio y bien documentado
- Compatibilidad con navegadores modernos
- Accesibilidad mejorada o mantenida
- Sin regresiones

## 📜 Licencia

Al contribuir, aceptas que tus contribuciones serán bajo la licencia CC BY-NC-SA 4.0.

## ❓ Preguntas?

- Abre una **discussion** en GitHub
- Revisa issues existentes
- Contacta al autor principal

---

**¡Gracias por contribuir a La Materia que se Pregunta!**

Valorizamos cada sugerencia, corrección y mejora que ayude a hacer este proyecto mejor. 🙏
