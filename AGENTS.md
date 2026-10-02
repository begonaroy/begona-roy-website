# AGENTS.md

Web profesional de Begoña Roy (psicóloga sanitaria en Zaragoza). SPA en React 19 + Vite + TypeScript + Tailwind CSS v4, orientada a SEO para el dominio `https://xn--begoaroypsicologa-ixb.es`. Todo el contenido es en español (`es`).

## Comandos

- En este entorno Windows usa `npm.cmd` en vez de `npm` si PowerShell bloquea `npm.ps1` por la política de ejecución.
- `npm.cmd run dev` — servidor de desarrollo en el puerto **3000** (`--host=0.0.0.0`).
- `npm.cmd run build` — build de producción a `dist/`.
- `npm.cmd run preview` — sirve `dist/` localmente.
- `npm.cmd run lint` — **solo** `tsc --noEmit`. No hay ESLint ni Prettier; `lint` es el typecheck. Ejecútalo antes de terminar.
- No hay framework de tests: ni unitarios ni e2e. Para cambios de comportamiento, documenta las comprobaciones manuales realizadas.
- `npm run clean` usa `rm -rf dist server.js` y falla en PowerShell. Si hay que limpiar, usa `Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -LiteralPath dist, server.js` después de verificar esos destinos.

## Arquitectura

- **Es una SPA, no cuatro aplicaciones.** `handleNavigate` en `src/App.tsx` cambia de vista mediante `window.history.pushState`; el estado `currentTab` decide qué vista renderizar y `src/routes.ts` relaciona pestañas con rutas SEO. No hay React Router.
- **Build multi-entry para SEO:** `vite.config.ts` declara cuatro entradas HTML que cargan el mismo `/src/main.tsx`:
  - `index.html` → `/`
  - `psicologia-zaragoza/index.html` → `/psicologia-zaragoza/`
  - `liberacion-del-pericardio-zaragoza/index.html` → `/liberacion-del-pericardio-zaragoza/`
  - `contacto-psicologa-zaragoza/index.html` → `/contacto-psicologa-zaragoza/`
- Al añadir una vista, actualiza de forma coordinada: `NavigationTab` en `src/types.ts`, `ROUTES` en `src/routes.ts`, el switch de renderizado de `src/App.tsx`, el HTML con metadatos propios, `rollupOptions.input` en `vite.config.ts` y `public/sitemap.xml`.
- Los HTML de rutas son shells con metadatos distintos; el contenido visible sigue dependiendo de JavaScript. No asumir que el multi-entry equivale a SSR o prerenderizado.
- Las vistas están en `src/components/*View.tsx` (Home, Psicologia, Pericardio y Contacto). El contenido estructurado vive en `src/data/content.ts` y `src/types.ts` define sus interfaces (`ServiceDetail`, `FAQItem`, `Testimonial`, etc.).
- Las imágenes editoriales importadas desde `src/assets/images/*` se hashean en el bundle. Las imágenes de `public/` (`branding`, `people`, `illustrations`, `img`) se referencian mediante rutas absolutas `/ruta/...`. No mezclar ambos mecanismos; `Design.md` los documenta.

## Convenciones del código

- El código usa imports relativos, no el alias `@/`, aunque `tsconfig.json` y `vite.config.ts` lo definan. Los imports internos existentes omiten en su mayoría `.ts`/`.tsx`; conserva el estilo del archivo y no introduzcas el alias sin una migración deliberada.
- Dark mode por clase `.dark` en `<html>`, controlado en `App.tsx` y persistido como `begona_roy_theme` en `localStorage`. Al tocar colores, mantén paridad clara/oscura y añade la variante `dark:` correspondiente.
- `Design.md` es la fuente autoritativa para paleta, tipografía y espaciado. Aunque hoy abundan hexadecimales arbitrarios en JSX, no inventes colores nuevos; prioriza una migración progresiva a los tokens de `src/index.css`.
- Las animaciones usan GSAP mediante `src/hooks/useGsapAnimations.ts` y atributos `data-motion-*` (`data-motion-hero`, `data-motion-reveal`, `data-motion-group`). Los hooks respetan `prefers-reduced-motion`; no añadas animaciones manuales que lo ignoren.
- No añadas `transition-all`: enumera solo las propiedades que cambian (`transition-colors`, `transition-transform`, etc.).
- Tipografías: `Lora` para titulares (`font-serif`), `Plus Jakarta Sans` para cuerpo y `Dancing Script` para citas, con moderación. Se cargan mediante `<link>` en cada HTML de entrada.
- La navegación entre rutas debe conservar semántica de enlace y navegación nativa: usa `<a href={ROUTES[...]}>` e intercepta solo clics primarios sin modificadores. Usa `<button>` únicamente para acciones que no cambian de URL.
- Todo control debe tener foco visible con `focus-visible`, objetivo táctil suficiente y estado hover/disabled legible. Los iconos decorativos deben llevar `aria-hidden="true"`; los botones solo-icono necesitan `aria-label`.
- Los modales deben implementar `role="dialog"`, `aria-modal="true"`, nombre accesible, cierre con Escape, trampa y restauración de foco, y bloqueo de scroll del fondo. El clic en overlay puede ser un cierre adicional, no el único.
- Los formularios deben asociar cada `label` con su control (`htmlFor`/`id`), incluir `name` y `autocomplete` apropiados, mostrar errores accesibles y no anunciar éxito hasta que el mensaje se haya entregado realmente.
- Las imágenes deben tener `alt` adecuado, dimensiones explícitas para evitar CLS y `loading="lazy"` si están bajo el primer viewport; reserva `fetchpriority="high"` para la imagen LCP.

## Gotchas operativos

- **`ARCHITECTURE.md` está obsoleto e incorrecto:** describe un proyecto Astro (`Header.astro`, `MainLayout.astro`, etc.) que no existe. El código real es React/Vite. No te guíes por él.
- **`prototype/` es una copia aislada** con su propio `dist/` y `assets/`, excluida del tsconfig y del build. No la toques salvo petición explícita.
- **No hay backend ni entrega real de formularios.** `ContactoView.tsx` simula el envío con `setTimeout` y muestra éxito sin transmitir los datos. `BookingModal.tsx` también simula recepción; solo después ofrece un enlace opcional a WhatsApp. No describas estos flujos como envíos reales.
- `metadata.json`, `.env.example` y dependencias como `@google/genai`, `express` y `dotenv` son restos del scaffold de Google AI Studio; no existe código servidor que los use. `motion` también está instalada sin uso en `src/`. No asumas capacidades backend por esas dependencias.
- El entorno previsto es Google AI Studio / Cloud Run. `vite.config.ts` desactiva HMR y watch cuando `DISABLE_HMR=true`; no cambies ese comportamiento.
- SEO (`index.html`, `robots.txt`, `sitemap.xml`), datos de `CLINICAL_INFO` e imágenes se consideran contenido de producción. No los sustituyas por placeholders y verifica cualquier cambio de datos personales o clínicos con la propietaria.
- Evita `rm -rf` y otros comandos Unix en este repositorio Windows/PowerShell.
- Git puede rechazar operaciones por `dubious ownership` en este entorno. Para consultas puntuales usa `git -c safe.directory='D:/Usuarios/jmgvi/Documentos/Web/begona-roy' ...`; no modifiques la configuración global sin permiso.

## Validación antes de terminar

- Ejecuta siempre `npm.cmd run lint`.
- Ejecuta `npm.cmd run build` cuando cambien imports, rutas, configuración, dependencias, CSS o assets.
- En cambios visuales o de interacción, revisa al menos móvil y escritorio, temas claro y oscuro, teclado, `prefers-reduced-motion`, apertura/cierre de modales y navegación atrás/adelante.
- En cambios SEO, comprueba los cuatro HTML, canonical/OG/Twitter, datos estructurados, `robots.txt` y `sitemap.xml`.
- No hay cobertura automática: deja explícito qué no se pudo verificar.

## Mejoras pendientes propuestas (no implementadas)

Este backlog procede de la revisión del 31 de agosto de 2026. Es informativo: no implementarlo salvo petición explícita y volver a validar cada punto antes de actuar.

### Prioridad crítica

- Sustituir los falsos estados de éxito de `ContactoView.tsx` y `BookingModal.tsx` por una entrega real o por un traspaso honesto y explícito a `mailto:`/WhatsApp. En su estado actual se promete respuesta o confirmación sin que Begoña reciba los datos.
- Eliminar las fechas fijas de mayo de 2025 en `BookingModal.tsx`; integrar disponibilidad real o convertir el selector en preferencia sin prometer huecos. Corregir también la referencia residual a “Plaza Europa”, incoherente con `CLINICAL_INFO.location`.
- Reinicializar y sincronizar el estado de `BookingModal` al abrir/cerrar: `initialServiceId` solo se lee en el primer montaje y pasos/datos anteriores pueden persistir entre aperturas.

### Prioridad alta

- Hacer accesibles los cuatro modales: semántica de diálogo, Escape, foco inicial, trampa/restauración de foco, scroll lock y fondo `inert`.
- Asociar labels, `name` y `autocomplete` en los formularios; añadir `aria-live` a envío/errores; usar `focus-visible`; incorporar un enlace “Saltar al contenido”. El buscador de FAQ necesita nombre accesible y los acordeones `aria-expanded`/`aria-controls`.
- Cambiar `Logo` de `div` clicable a enlace y los botones de navegación del footer/CTAs a enlaces reales. No bloquear Ctrl/Cmd+clic al interceptar enlaces de la navbar.
- Añadir dimensiones y estrategia de carga a todas las imágenes. Optimizar especialmente `psicologia_hero_armchair_*.jpg` (aprox. 872 kB en el build auditado) y evitar cargar imágenes bajo el fold de forma eager.
- Dividir por ruta con `React.lazy`/`Suspense` y cargar modales bajo demanda. El build auditado genera un `main` de unos 395 kB sin comprimir más un chunk GSAP de unos 115 kB porque todas las vistas se importan de forma eager.

### Prioridad media

- Sustituir las 74 apariciones actuales de `transition-all` por transiciones de propiedades concretas y normalizar foco con `focus-visible`.
- Endurecer TypeScript (`strict`, `noUnusedLocals`, `noUnusedParameters`) y añadir lint/formatter. Hoy el typecheck no detecta imports sin uso como `SERVICES_DATA`, `Heart` o `CLINICAL_INFO` en algunos componentes.
- Añadir tests mínimos para rutas (`tabForPath`), navegación/popstate, restricciones de modalidad, formularios y modales; complementar con smoke e2e de las cuatro rutas.
- Eliminar dependencias y metadatos del scaffold que sigan sin uso después de confirmar que AI Studio no los requiere (`@google/genai`, `express`, `dotenv`, `motion`, tipos asociados).
- Descomponer `PsicologiaView.tsx`, `HomeView.tsx`, `BookingModal.tsx` y `ContactoView.tsx` en secciones/componentes con datos compartidos; evitar que las opciones de reserva dupliquen `SERVICES_DATA`.
- Migrar los hexadecimales repetidos a tokens semánticos de Tailwind/CSS y añadir `color-scheme`/`theme-color` coherentes para controles nativos y modo oscuro.
- Valorar prerenderizado o SSR por ruta si el SEO orgánico es prioritario; el multi-entry actual cambia el `<head>`, pero el contenido principal continúa siendo client-side.

## Docs de referencia

- `Design.md` — tokens de color, tipografía, espaciado, estados de UI y accesibilidad. Léelo antes de cambios de diseño.
- `ARCHITECTURE.md` — **ignorar**; está obsoleto y describe un proyecto Astro inexistente.
