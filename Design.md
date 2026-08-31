# Diseño — Begoña Roy

Guía visual y de experiencia para la web de Begoña Roy, psicóloga sanitaria, psicooncóloga y facilitadora de Liberación del Pericardio.

## Intención de marca

La experiencia debe sentirse serena, humana y rigurosa. El diseño evita tanto la frialdad clínica como los clichés de bienestar: emplea luz cálida, materiales naturales, espacio en blanco y una voz respetuosa. El arquetipo combina **la cuidadora** con **la sabia**: cercanía emocional, claridad y profesionalidad sanitaria.

## Estructura de la experiencia

La aplicación es una SPA React con cuatro vistas principales:

| Vista | Objetivo | Contenido principal |
| --- | --- | --- |
| Inicio | Generar confianza y orientar | Hero, credenciales, biografía, especialidades, modalidades y testimonios |
| Psicología | Explicar las áreas terapéuticas | Servicios, metodología y llamada a solicitar cita |
| Pericardio | Informar de la técnica presencial | Explicación, conexiones corporales, pasos de sesión y beneficios |
| Contacto | Resolver dudas y convertir | Formulario, datos de contacto, FAQ y acceso directo a WhatsApp |

Los elementos transversales son la navegación, el pie, el selector de tema y los modales de biografía, detalle de servicio, cita y textos legales.

## Flujos prioritarios

1. **Solicitar una cita:** desde cualquier CTA se abre un modal de cinco estados: elegir servicio, modalidad, fecha/hora, datos y confirmación.
2. **Conocer una especialidad:** las tarjetas abren un detalle con explicación, destinatarios, beneficios y CTA contextual.
3. **Resolver una duda:** el usuario llega a Contacto, filtra o consulta las FAQ y puede continuar a WhatsApp o a la reserva.

La Liberación del Pericardio es exclusivamente presencial. Psicología y psicooncología admiten atención presencial en Zaragoza u online.

## Fundaciones visuales

### Color

| Token | HEX | RGB | HSL | Uso | Contraste documentado |
| --- | --- | --- | --- | --- | --- |
| Blanco suave | `#FCFCFA` | 252, 252, 250 | 60, 25%, 98% | Lienzo global claro | — |
| Negro vegetal | `#222823` | 34, 40, 35 | 130, 8%, 15% | Texto principal claro | 14.65:1 sobre Blanco suave |
| Gris salvia | `#5A655C` | 90, 101, 92 | 131, 6%, 37% | Texto secundario claro | 5.92:1 sobre Blanco suave |
| Verde fuerte | `#4A5D4E` | 74, 93, 78 | 133, 11%, 33% | Marca, enlaces y acciones | 6.89:1 sobre Blanco suave |
| Cerezo | `#AA4664` | 170, 70, 100 | 342, 42%, 47% | Acentos y llamadas | 5.42:1 sobre Blanco suave |
| Salvia clara | `#E8ECE9` | 232, 236, 233 | 135, 10%, 92% | Superficie y selección clara | — |
| Arena clara | `#FAF7F2` | 250, 247, 242 | 38, 44%, 96% | Superficie cálida clara | — |
| Borde arena | `#E8E2D9` | 232, 226, 217 | 36, 25%, 88% | Bordes claros | — |
| Fondo oscuro | `#151B17` | 21, 27, 23 | 140, 13%, 9% | Lienzo nocturno | — |
| Superficie oscura | `#1C2420` | 28, 36, 32 | 150, 13%, 13% | Tarjetas nocturnas | — |
| Superficie oscura alta | `#222C26` | 34, 44, 38 | 144, 13%, 15% | Selección y controles nocturnos | — |
| Borde oscuro | `#2D3930` | 45, 57, 48 | 135, 12%, 20% | Bordes nocturnos | — |
| Lino suave | `#F3EFE7` | 243, 239, 231 | 40, 25%, 93% | Texto principal oscuro | 15.25:1 sobre Fondo oscuro |
| Oliva claro | `#B7BEA3` | 183, 190, 163 | 77, 17%, 73% | Texto secundario oscuro | 9.08:1 sobre Fondo oscuro |
| Verde claro | `#A7B39A` | 167, 179, 154 | 84, 16%, 65% | Marca e iconos oscuros | 7.96:1 sobre Fondo oscuro |
| Cerezo suave | `#DDB5C1` | 221, 181, 193 | 342, 37%, 79% | Acentos oscuros | 9.54:1 sobre Fondo oscuro |

El tema se guarda en `localStorage` con la clave `begona_roy_theme`. El modo oscuro adopta los nuevos fondos y bordes vegetales, pero conserva Lino suave, Oliva claro, Verde claro y Cerezo suave como colores de primer plano.

### Tipografía

- **Titulares:** `Lora`, serif. Peso medio, interlineado compacto (`1.15`).
- **Cuerpo y controles:** `Plus Jakarta Sans`, sans-serif. Tamaño base `16px`, interlineado aproximado `1.65`.
- **Citas y firma:** `Dancing Script`, usada con moderación para reforzar el tono humano.

Los títulos responden entre `36px` y `60px`; los subtítulos entre `30px` y `36px`; la UI utiliza normalmente `12–14px`, semibold, mayúsculas y espaciado de letras perceptible.

### Espaciado y forma

- Contenido centrado con `max-w-7xl`.
- Separación vertical de secciones: `80–112px`.
- Tarjetas: `24px` de radio (`rounded-3xl`) y relleno de `24–40px`.
- Controles y CTAs: forma de píldora (`9999px`).
- Elementos internos: radios de `12–16px`.

El ritmo ha de ser pausado: evitar bloques densos, usar imágenes ambientales grandes y dejar respiración alrededor de títulos y llamadas a la acción.

## Componentes y estados

### Navegación

La barra superior permite cambiar entre Inicio, Psicología, Pericardio y Contacto, abrir la reserva y alternar el tema. Cada cambio de vista devuelve suavemente al inicio de la página.

### Botones

- **Primario:** Verde fuerte en modo claro; Verde claro con texto Fondo oscuro en modo oscuro.
- **Secundario:** borde discreto y fondo transparente o de superficie.
- **WhatsApp:** verde `#25D366`, reservado para contacto directo.

Todos los controles interactivos deben conservar foco visible, un objetivo táctil cómodo y estados hover/disabled legibles.

### Tarjetas y modales

Las tarjetas de servicio combinan fotografía ambiental, etiqueta, título y resumen. Los modales se usan para profundizar sin romper el contexto y deben ofrecer cierre visible, superposición opaca y navegación clara entre pasos.

## Accesibilidad y contenido

- Mantener contraste WCAG AA como mínimo. Oliva suave es exclusivamente decorativo y no debe emplearse como texto pequeño.
- Usar encabezados en orden, etiquetas asociadas a campos y texto alternativo descriptivo en imágenes.
- No presentar la Liberación del Pericardio como sustituto de atención médica; conservar el aviso de disciplina complementaria.
- El formulario de reserva solicita consentimiento de privacidad antes de habilitar la confirmación.
- Usar lenguaje claro, inclusivo y sin promesas terapéuticas absolutas.

## Implementación

Los tokens de color y tipografía se definen en `src/index.css` mediante Tailwind v4. La interfaz está compuesta por vistas en `src/components` y por contenido estructurado en `src/data/content.ts`. Los iconos proceden de `lucide-react`. Las tres imágenes principales de Inicio y consulta se sirven desde `public/`; las trece ilustraciones editoriales aprobadas se importan desde `src/assets/images` y Vite las incorpora al bundle.

Al modificar el diseño, mantener la paridad entre los temas claro y oscuro, reutilizar tokens en lugar de valores nuevos y validar las interacciones de formularios, filtros y modales en pantalla pequeña y grande.
