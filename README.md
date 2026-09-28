# Portafolio Minimalista con SvelteKit

Un portafolio web minimalista y moderno construido con SvelteKit + Tailwind CSS v4, que obtiene toda su información desde un archivo JSON. La arquitectura está diseñada para que puedas actualizar el contenido simplemente modificando el archivo JSON.

## 🚀 Características

- **Minimalista**: Diseño limpio y enfocado en el contenido
- **JSON-Driven**: Todo el contenido se gestiona desde un archivo JSON
- **Responsive**: Adaptado para todos los dispositivos
- **Animaciones Smooth**: Transiciones suaves y elegantes
- **SEO Optimizado**: Meta tags optimizados para motores de búsqueda
- **Performance**: Construido con SvelteKit + prerender estático para máxima velocidad
- **Deploy**: Sitio estático listo para GitHub Pages (`adapter-static` → `build/`)

## 📁 Estructura del Proyecto

```
static/                        # Assets públicos (avatar, proyectos, og-image, logo)
src/
├── app.html                   # Template HTML (lang="es", CDNs, verificación Google)
├── app.css                    # Estilos globales + Tailwind v4 (@theme accent)
├── app.d.ts                   # Tipos de SvelteKit
├── lib/
│   ├── data/
│   │   └── portfolio.json     # Todo el contenido del portafolio
│   └── components/
│       ├── Header.svelte      # Navegación fija + menú móvil
│       ├── Hero.svelte        # Sección principal
│       ├── About.svelte       # Sobre mí
│       ├── Technologies.svelte# Tecnologías y habilidades
│       ├── Experience.svelte  # Timeline de experiencia
│       ├── Projects.svelte    # Proyectos destacados + otros
│       └── Contact.svelte     # Formulario de contacto (Formspree)
└── routes/
    ├── +layout.ts             # prerender = true
    ├── +layout.svelte         # SEO desde JSON + contenedor
    └── +page.svelte           # Página principal
```

## ⚙️ Personalización

### 1. Editar Información Personal

Abre `src/lib/data/portfolio.json` y actualiza la sección `personal`:

```json
{
  "personal": {
    "name": "Tu Nombre",
    "title": "Desarrollador Web",
    "description": "Tu descripción profesional",
    "email": "tu-email@example.com",
    "location": "Ciudad, País",
    "avatar": "/avatar.jpg",
    "social": [
      { "name": "github", "url": "https://github.com/tu-usuario", "icon": "devicon-github-original" }
    ]
  }
}
```

### 2. Actualizar Proyectos

Modifica la sección `projects` para mostrar tus proyectos:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Nombre del Proyecto",
      "description": "Descripción del proyecto",
      "image": "/projects/project1.jpg",
      "technologies": ["React", "TypeScript", "Tailwind"],
      "liveUrl": "https://proyecto-demo.com",
      "githubUrl": "https://github.com/tu-usuario/proyecto",
      "featured": true
    }
  ]
}
```

### 3. Configurar Tecnologías

Actualiza la sección `technologies` con tus habilidades:

```json
{
  "technologies": {
    "categories": [
      {
        "name": "Frontend",
        "items": [{ "name": "React", "icon": "devicon-react-original" }]
      }
    ]
  }
}
```

### 4. Personalizar Colores y Estilos

- Color accent: `src/app.css` → `@theme { --color-accent: #fb923c; }`
- Estilos globales y animaciones: `src/app.css`
- Estilos del glow de experiencia: `src/lib/components/Experience.svelte` (`<style>`)

## 🖼️ Assets

Agrega tus imágenes en la carpeta `static/`:

- `static/profile.png` - Tu foto de perfil
- `static/projects/` - Imágenes de los proyectos
- `static/og-image.jpg` - Imagen para redes sociales

## 🚀 Desarrollo

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Verificación de tipos

```bash
npm run check
```

### Build (sitio estático en `build/`)

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📱 Secciones del Portafolio

1. **Hero**: Presentación principal con tu información
2. **About**: Detalles sobre ti y tus habilidades
3. **Technologies**: Tus tecnologías organizadas por categorías
4. **Experience**: Timeline de experiencia
5. **Projects**: Galería de proyectos con destacados
6. **Contact**: Formulario de contacto (Formspree)

## 🎨 Diseño y Animaciones

El portafolio incluye:

- **Scroll suave** entre secciones
- **Animaciones de entrada** para elementos
- **Hover effects** interactivos (incluye glow que sigue el cursor en Experiencia)
- **Transiciones suaves** en todos los elementos
- **Header fijo** con efecto de scroll + marca que aparece al salir del hero

## 🔧 Configuración Adicional

### Meta Tags SEO

Los meta tags se configuran automáticamente desde el JSON en la sección `seo` (vía `<svelte:head>` en `src/routes/+layout.svelte`):

```json
{
  "seo": {
    "title": "Tu Nombre - Desarrollador Web",
    "description": "Descripción para motores de búsqueda",
    "keywords": ["desarrollador", "frontend", "react"],
    "image": "/og-image.jpg"
  }
}
```

### Formulario de Contacto

El formulario envía vía POST al endpoint de Formspree definido en `portfolio.json` → `contact.formspree.endpoint`.

### Deploy en GitHub Pages

El workflow `.github/workflows/deploy.yml` hace `npm ci && npm run build` y publica `build/` con `adapter-static`. Al ser sitio de usuario (`andyechc.github.io`), no se usa `base path`.

## 📄 Licencia

Este proyecto está bajo licencia MIT. Siéntete libre de usarlo para tus proyectos.

---

**Construido con ❤️ usando [SvelteKit](https://kit.svelte.dev) (migrado desde Astro)**
