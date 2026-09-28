# AGENTS.md

## Project

Build a personal portfolio for `andyechc`.

The portfolio is built with:

- SvelteKit
- Svelte 5
- TypeScript
- CSS
- Three.js
- Threlte only when it provides a clear advantage

The visual direction is an interactive digital magazine.

The website should feel:

- artistic
- minimal
- cinematic
- editorial
- technical
- experimental
- highly polished

It must not feel like a generic developer portfolio template.

---

## 1. Core Goal

The portfolio should communicate three things:

1. What I have built.
2. What I have done professionally.
3. How I think about software and product design.

Projects and professional experience are the primary content.

Technologies are secondary context.

Do not create a large skills section.

Do not use:

- skill percentages
- progress bars
- technology logo walls
- arbitrary skill ratings
- "expert in" claims
- giant technology grids

Technologies should appear naturally inside projects and experience.

---

## 2. Creative Direction

Think:

> Interactive digital magazine + software portfolio.

The visual language should combine:

- contemporary editorial design
- digital art direction
- technology magazines
- product showcases
- experimental creative coding
- cinematic motion

Do not copy a specific website.

The final design should feel original.

---

## 3. Visual Hierarchy

Prioritize the following, in order:

1. Typography
2. Composition
3. Whitespace
4. Project imagery
5. Motion
6. 3D

3D and animation must never compensate for weak composition.

The website should still look excellent if all animations are disabled.

---

## 4. Color

Use a restrained dark palette.

Suggested defaults:

- Background: `#0A0A0A`
- Primary text: `#F2F0EA`
- Secondary text: `#9A9891`
- Borders: `rgba(255, 255, 255, 0.12)`

Use one restrained accent color.

Avoid:

- rainbow gradients
- excessive neon
- generic purple AI gradients
- excessive glassmorphism
- excessive glow effects

---

## 5. Typography

Typography is one of the primary visual elements.

Use at most two font families.

Suggested display fonts:

- Instrument Serif
- DM Serif Display
- Cormorant Garamond

Suggested UI/body fonts:

- Geist
- Inter
- Manrope

Use large editorial typography strategically.

Example:

    I BUILD
    SOFTWARE.

    THOUGHTFULLY.

Do not make every section oversized.

---

## 6. Layout

Avoid repeating the same card layout.

Use:

- asymmetric grids
- editorial columns
- overlapping images
- large whitespace
- offset content
- full viewport compositions
- vertical typography
- large media
- unexpected spacing

Projects should feel like individual editorial stories.

---

## 7. Site Structure

The main page should contain:

1. Hero
2. Introduction
3. Selected Work
4. Experience
5. About
6. Contact
7. Footer

Navigation should remain minimal.

Primary navigation:

- Work
- Experience
- About
- Contact

Use a small sticky navigation.

On mobile, use a compact menu.

---

## 8. Hero

The hero should immediately establish the identity of the portfolio.

Primary content:

    SOFTWARE
    DEVELOPER

    I BUILD SOFTWARE.
    THOUGHTFULLY.

Include one signature 3D object.

Good candidates:

- distorted sphere
- organic blob
- metallic orb
- abstract geometry
- procedural sculpture

Avoid:

- cubes
- floating code
- laptops
- generic developer illustrations

The 3D object should feel like an art piece, not a technical demo.

---

## 9. Svelte Architecture

SvelteKit is the application framework.

Svelte is the UI framework.

Use Svelte 5 and modern Svelte patterns.

Do not introduce React.

Do not introduce React Three Fiber.

Recommended structure:

    src/
      lib/
        components/
          layout/
          hero/
          work/
          experience/
          about/
          contact/
          ui/

        effects/
          reveal.ts
          parallax.ts
          magnetic.ts
          scroll-progress.ts

        three/
          HeroScene.svelte
          scene.ts
          materials.ts

        data/
          portfolio.json

      routes/
        +page.svelte
        work/
          [slug]/
            +page.svelte

      app.css

Keep content separate from presentation.

---

## 10. Svelte 5

Use modern Svelte 5 patterns.

Prefer runes when they improve clarity.

Example:

    <script lang="ts">
      let { title, description } = $props();
    </script>

Do not use legacy patterns unnecessarily.

Keep components small and composable.

---

## 11. Animation Strategy

Animation is part of the visual language.

It must also have a purpose.

Use three levels:

### Micro

100–250ms.

For:

- links
- buttons
- hover states
- small UI changes

### Interface

300–600ms.

For:

- reveals
- navigation
- project metadata
- section transitions

### Cinematic

700–1400ms.

For:

- hero transitions
- large image reveals
- major project transitions

Avoid unnecessarily long animations.

---

## 12. Prefer Native Svelte and CSS

Before adding an animation library, ask:

1. Can CSS do it?
2. Can Svelte transitions do it?
3. Can a Svelte action do it?
4. Can IntersectionObserver do it?
5. Can the Web Animations API do it?

Prefer native solutions when they are sufficient.

Do not add GSAP by default.

Do not add Framer Motion.

Do not add React animation libraries.

---

## 13. Scroll Animations

Use browser APIs first.

Preferred tools:

- IntersectionObserver
- ResizeObserver
- requestAnimationFrame
- CSS scroll-driven animations
- Svelte actions

Avoid expensive scroll handlers.

If a scroll listener is required:

- use passive listeners
- batch work with `requestAnimationFrame`
- avoid unnecessary layout reads
- avoid modifying layout properties continuously

Prefer animating:

- transform
- opacity

Avoid continuously animating:

- top
- left
- width
- height

when transforms can achieve the same result.

---

## 14. Parallax

Use parallax selectively.

A possible hierarchy:

- background: slow movement
- image: medium movement
- typography: subtle movement
- foreground: slightly faster movement

Do not apply parallax to every element.

The goal is depth, not motion sickness.

---

## 15. Hero Scroll Transition

The hero should transition naturally into the first project.

During scrolling:

- hero typography subtly scales down
- 3D object changes position and rotation
- hero spacing compresses
- project number appears
- project media enters the viewport

Avoid abrupt section transitions.

The page should feel like one continuous composition.

---

## 16. Three.js

Three.js should be used primarily for one signature visual system.

Do not use 3D everywhere.

The preferred architecture is:

    HeroScene.svelte
        |
        +-- Three.js renderer
        |
        +-- Scene
        |
        +-- Camera
        |
        +-- Lighting
        |
        +-- Signature object

Keep Three.js isolated from the rest of the application.

The scene should expose a small interface such as:

- `setPointer(x, y)`
- `setScrollProgress(progress)`
- `setSection(section)`

The rest of the application should not depend on Three.js internals.

---

## 17. Threlte

Threlte is optional.

Use it only if it clearly improves:

- Svelte integration
- component composition
- lifecycle management
- reactive scene updates

If direct Three.js is simpler, use direct Three.js.

Never introduce React Three Fiber.

Never introduce React for the 3D layer.

---

## 18. Three.js Visual Direction

The signature object could be:

- metallic orb
- distorted sphere
- procedural blob
- abstract sculpture
- wireframe organic structure

Potential behavior:

Initial state:

- slow rotation
- subtle floating motion

Pointer:

- subtle orientation change
- smooth interpolation

Scroll:

- position changes
- rotation changes
- scale changes
- subtle material changes

Section changes:

- object can transition between visual states

Do not make the interaction aggressive.

---

## 19. Three.js Performance

3D must not dominate page performance.

Rules:

- use lightweight geometry
- avoid unnecessary post-processing
- use compressed textures
- prefer procedural materials where appropriate
- avoid huge textures
- keep particle counts reasonable
- dispose of resources correctly
- stop rendering when the scene is not visible

Use `IntersectionObserver` to detect visibility.

When the scene is outside the viewport, pause expensive animation work.

---

## 20. Three.js Lifecycle

Three.js must only initialize in the browser.

Use Svelte lifecycle APIs such as `onMount`.

Conceptually:

    onMount(() => {
      // initialize renderer
      // create scene
      // create camera
      // create object
      // start animation

      return () => {
        // cancel animation
        // dispose geometry
        // dispose materials
        // dispose renderer
      };
    });

Never initialize WebGL during SSR.

Memory leaks are unacceptable.

---

## 21. Project Sections

Projects are the most important content on the website.

Do not display featured projects as generic cards.

Each featured project should feel like a large editorial spread.

Example:

    01

    LA PATRONA

    Business management platform

    [ LARGE PROJECT IMAGE ]

    PRODUCT
    2024

    Next.js · TypeScript · MongoDB

    Short description...

The image should be visually dominant.

---

## 22. Featured Projects

The primary projects are:

### 01 — La Patrona

Role in portfolio:

- full-stack product
- architecture
- business workflows
- database-backed application

### 02 — PocketFlow

Role in portfolio:

- Kotlin Multiplatform
- mobile architecture
- offline-first behavior
- synchronization
- Android and iOS

### 03 — Music Extension

Role in portfolio:

- Svelte
- browser APIs
- interaction design
- motion
- experimental product design

Secondary projects:

### 04 — Marky

Role:

- frontend
- product design
- local-first experience

### 05 — DownGram CLI

Role:

- Python
- CLI tooling
- API integration

Do not present all five projects with equal visual weight.

---

## 23. Project Motion

Each project can have a distinct entrance animation.

Examples:

Project 01:

- image scales from 1.1 to 1

Project 02:

- image enters horizontally

Project 03:

- image reveals through a clip-path

Project 04:

- minimal fade

Do not repeat the same animation for every project.

---

## 24. Project Hover

Desktop only.

Possible behavior:

- image scale: `1` → `1.03`
- metadata moves slightly upward
- arrow moves slightly sideways

Keep hover movement subtle.

Never make hover interactions necessary to understand the content.

---

## 25. Project Pages

Featured projects may have dedicated routes:

- `/work/la-patrona`
- `/work/pocketflow`
- `/work/music-extension`

A project page should contain:

1. Project number
2. Title
3. Subtitle
4. Hero media
5. Overview
6. Problem
7. Approach
8. Architecture
9. Important decisions
10. Challenges
11. Gallery
12. Technologies
13. Links

Technology information should support the case study rather than dominate it.

---

## 26. Experience

Experience should feel editorial.

Do not use conventional cards.

Example:

    2025 — PRESENT

    SOFTWARE
    DEVELOPER

    Building cross-platform applications...

    ----------------------------

    2022 — 2024

    FULL STACK
    DEVELOPER

    Shirkasoft

Use scroll-based highlighting.

When an experience item is active:

- opacity: 100%

Inactive items:

- opacity: approximately 35–50%

Avoid making the timeline feel like a dashboard.

---

## 27. About

Use a large editorial statement.

Example:

    I LIKE
    UNDERSTANDING
    HOW THINGS
    WORK.

Then add supporting paragraphs.

Principles:

    01
    KEEP IT SIMPLE

    02
    BUILD TO LEARN

    03
    DETAILS MATTER

Use subtle interactions.

---

## 28. Contact

The contact section should feel like the end of a magazine.

Large typography:

    HAVE AN
    IDEA?

    LET'S BUILD
    SOMETHING.

Make the email highly visible.

Do not bury contact behind a complicated form.

---

## 29. Custom Cursor

Optional and desktop-only.

Possible states:

- default
- link
- project

Disable it for:

- touch devices
- reduced-motion users

Never interfere with native pointer behavior.

---

## 30. Smooth Scrolling

Do not implement smooth scrolling simply because it is trendy.

Start with native CSS:

    html {
      scroll-behavior: smooth;
    }

Only introduce Lenis if the visual direction genuinely benefits from inertial scrolling.

If Lenis is introduced:

- isolate it in one module
- clean it up when the page is destroyed
- integrate it with requestAnimationFrame correctly
- respect reduced motion

Do not introduce GSAP just for smooth scrolling.

---

## 31. Accessibility

Respect:

    @media (prefers-reduced-motion: reduce)

When reduced motion is enabled:

- disable parallax
- disable custom cursor
- disable 3D pointer movement
- simplify transitions
- reduce scroll animation

The content must remain fully usable.

Use:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- visible focus states
- accessible labels
- sufficient contrast

---

## 32. Mobile

Mobile is a separate composition.

Do not simply shrink the desktop layout.

On mobile:

- remove custom cursor
- simplify parallax
- reduce 3D complexity
- optionally replace 3D with a static visual
- reduce animation
- stack editorial layouts
- preserve typography hierarchy

The site must remain visually strong without 3D.

---

## 33. Responsive Design

Use content-driven breakpoints rather than device-specific assumptions.

Test at least:

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

---

## 34. Images

Use responsive images.

Lazy-load non-critical project media.

Use eager loading only when justified, especially for important hero media.

Optimize:

- dimensions
- format
- compression
- responsive variants

Do not load full-resolution images when a smaller version is sufficient.

---

## 35. Content

All portfolio content should come from:

    src/lib/data/portfolio.json

Components should not contain hardcoded project information.

The data file is the source of truth.

---

## 36. No Fake Information

Never invent:

- clients
- metrics
- users
- revenue
- performance improvements
- job responsibilities
- project outcomes

If information is unavailable, omit it or use neutral wording.

---

## 37. Performance

Target:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Prioritize:

- optimized images
- minimal JavaScript
- lazy loading
- minimal dependencies
- GPU-friendly animations
- limited 3D rendering

Use `transform` and `opacity` for most animation.

---

## 38. SSR and Hydration

Keep the portfolio server-rendered by default.

Browser-only functionality must be initialized on the client.

Use Svelte's lifecycle APIs for:

- Three.js
- pointer events
- browser APIs
- viewport calculations

Do not access `window`, `document`, `navigator`, or WebGL during SSR.

---

## 39. Reusable Animation Primitives

When animation patterns repeat, create reusable Svelte actions or components.

Potential primitives:

- `Reveal`
- `Parallax`
- `Magnetic`
- `TextReveal`
- `ImageReveal`
- `ScaleOnScroll`
- `ScrollProgress`

Do not abstract an effect until it is actually reused.

---

## 40. Dependency Philosophy

Keep dependencies minimal.

Before installing a library, ask:

1. Can CSS solve this?
2. Can Svelte solve this?
3. Can a Svelte action solve this?
4. Can a native browser API solve this?
5. Is the dependency worth its bundle cost?

Avoid dependency bloat.

Required ecosystem:

- SvelteKit
- Svelte 5
- TypeScript
- Three.js

Optional:

- Threlte
- Lenis

Do not add libraries without a concrete reason.

---

## 41. Development Process

Build in layers.

### Phase 1 — Static foundation

Implement:

- typography
- colors
- layout
- navigation
- hero
- projects
- experience
- about
- contact

Do not implement complex animation yet.

The static version must already look excellent.

### Phase 2 — Micro interactions

Add:

- link hover
- buttons
- image hover
- metadata transitions

### Phase 3 — Scroll choreography

Add:

- reveal animations
- image transitions
- parallax
- scroll progress
- section transitions

### Phase 4 — 3D

Add:

- Three.js hero object
- pointer interaction
- scroll interaction
- section interaction

### Phase 5 — Optimization

Test:

- mobile
- reduced motion
- keyboard navigation
- accessibility
- performance
- SSR
- hydration
- WebGL cleanup

Do not start development by building the 3D scene.

---

## 42. Code Quality

Prefer:

- small components
- typed props
- isolated effects
- reusable actions
- clear naming
- minimal dependencies

Avoid:

- giant `+page.svelte`
- global mutable state
- animation logic mixed with data logic
- duplicated animation code
- unnecessary abstractions

---

## 43. Important Creative Constraint

The website must still be visually impressive without animation.

Animation is the second layer.

The first layer is:

- typography
- composition
- imagery
- whitespace
- visual hierarchy

If removing animation makes the website look empty, the design needs improvement.

---

## 44. Final Experience

The desired experience:

    OPEN WEBSITE
          ↓
    Strong editorial hero
          ↓
    Subtle 3D interaction
          ↓
    Smooth scroll
          ↓
    Large typography
          ↓
    Project appears
          ↓
    Project media moves naturally
          ↓
    Content becomes the focus
          ↓
    Experience
          ↓
    Personal statement
          ↓
    Strong closing contact section

The visitor should remember:

- the projects
- the visual identity
- the attention to detail

Not the animation libraries.

---

## 45. Definition of Done

The project is complete when:

- [ ] Desktop layout is polished
- [ ] Mobile layout is intentionally designed
- [ ] Projects are the visual focus
- [ ] Experience is prominent
- [ ] Technology information is secondary
- [ ] Hero has a distinctive visual identity
- [ ] 3D is subtle and performant
- [ ] Scroll animations are smooth
- [ ] Parallax is restrained
- [ ] Reduced motion works
- [ ] Keyboard navigation works
- [ ] Project pages work
- [ ] Images are optimized
- [ ] No fake information exists
- [ ] No unnecessary dependencies exist
- [ ] No React dependency exists
- [ ] No React Three Fiber dependency exists
- [ ] Three.js resources are properly disposed
- [ ] SSR works correctly
- [ ] Hydration issues are resolved
- [ ] Performance issues are addressed