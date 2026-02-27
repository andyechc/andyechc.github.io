# Portafolio Minimalista con Astro

Un portafolio web minimalista y moderno construido con Astro, que obtiene toda su información desde un archivo JSON. La arquitectura está diseñada para que puedas actualizar el contenido simplemente modificando el archivo JSON.

## 🚀 Características

- **Minimalista**: Diseño limpio y enfocado en el contenido
- **JSON-Driven**: Todo el contenido se gestiona desde un archivo JSON
- **Responsive**: Adaptado para todos los dispositivos
- **Animaciones Smooth**: Transiciones suaves y elegantes
- **SEO Optimizado**: Meta tags optimizados para motores de búsqueda
- **Performance**: Construido con Astro para máxima velocidad

## � Estructura del Proyecto

```
src/
├── data/
│   └── portfolio.json          # Todo el contenido del portafolio
├── components/
│   ├── Hero.astro              # Sección principal
│   ├── About.astro             # Sobre mí
│   ├── Technologies.astro      # Tecnologías y habilidades
│   ├── Projects.astro          # Proyectos
│   ├── Contact.astro           # Formulario de contacto
│   └── Header.astro            # Navegación
├── layouts/
│   └── Layout.astro            # Layout principal
└── pages/
    └── index.astro             # Página principal
```

## ⚙️ Personalización

### 1. Editar Información Personal

Abre `src/data/portfolio.json` y actualiza la sección `personal`:

```json
{
  "personal": {
    "name": "Tu Nombre",
    "title": "Desarrollador Web",
    "description": "Tu descripción profesional",
    "email": "tu-email@example.com",
    "location": "Ciudad, País",
    "avatar": "/avatar.jpg",
    "social": {
      "github": "https://github.com/tu-usuario",
      "linkedin": "https://linkedin.com/in/tu-perfil",
      "twitter": "https://twitter.com/tu-usuario"
    }
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
        "items": [
          { "name": "React", "level": 90, "icon": "react" }
        ]
      }
    ]
  }
}
```

### 4. Personalizar Colores y Estilos

Los estilos principales se encuentran en `src/layouts/Layout.astro`. Puedes modificar:

- Colores principales
- Tipografías
- Animaciones
- Espaciados

## 🖼️ Assets

Agrega tus imágenes en la carpeta `public/`:

- `public/avatar.jpg` - Tu foto de perfil
- `public/projects/` - Imágenes de los proyectos
- `public/og-image.jpg` - Imagen para redes sociales

## 🚀 Desarrollo

### Instalación

```bash
# Si usas npm
npm install

# Si usas pnpm
pnpm install

# Si usas yarn
yarn install
```

### Desarrollo

```bash
npm run dev
```

### Build

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
4. **Projects**: Galería de proyectos con destacados
5. **Contact**: Formulario de contacto funcional

## 🎨 Diseño y Animaciones

El portafolio incluye:

- **Scroll suave** entre secciones
- **Animaciones de entrada** para elementos
- **Hover effects** interactivos
- **Transiciones suaves** en todos los elementos
- **Header fijo** con efecto de scroll

## 🔧 Configuración Adicional

### Meta Tags SEO

Los meta tags se configuran automáticamente desde el JSON en la sección `seo`:

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

El formulario está configurado para enviar datos a `/api/contact`. Debes implementar el endpoint según tus necesidades (EmailJS, Formspree, backend propio, etc.).

## 📈 Optimización

- **Imágenes optimizadas** con lazy loading
- **CSS mínimo** y optimizado
- **JavaScript mínimo** para animaciones
- **Build optimizado** con Astro

## 🤝 Contribuir

Si quieres mejorar este template:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Añadir mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT. Siéntete libre de usarlo para tus proyectos.

---

**Construido con ❤️ usando [Astro](https://astro.build)**
