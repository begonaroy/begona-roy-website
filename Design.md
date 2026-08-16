# Sistema de Diseño y Documentación Arquitectónica: Begoña Roy
**Psicología Sanitaria, Psicooncología y Liberación del Pericardio**

---

## 1. Concepto Creativo y Arquetipo de Marca
* **Arquetipo:** *El Sabio Compasivo y el Cuidador Sanador*. Transmite serenidad, rigor científico universitario (Licenciada en Psicología por la Universidad de Valencia, 1995, Col. CV-07890) y calidez humana integradora.
* **Atmósfera Visual:** Espacio de acogida, luz natural, tonos tierra, hojas de salvia y texturas cerámicas. Se evita deliberadamente la estética fría de clínica médica y la artificialidad de clichés corporativos.
* **Propósito:** Ofrecer un refugio seguro para personas en procesos de duelo, diagnóstico oncológico, ansiedad desbordante o necesidad de reconexión cuerpo-mente mediante la liberación del pericardio.

---

## 2. Arquitectura de Información y Sitemap

```
├── 1. Inicio (Home)
│   ├── Hero Principal (H1, Propuesta de Valor, CTAs Duales, Credenciales Sanitarias)
│   ├── Cita Emocional Destacada ("Acompañarte a recordar y activar las soluciones...")
│   ├── Quién Soy (Extracto biográfico + Modal Biografía Completa)
│   ├── Especialidades (4 Tarjetas Interactivas con fotografía ambiental)
│   ├── Modalidades de Atención (Presencial en Valencia Centro & Online) + "¿Comenzamos el camino?"
│   └── Testimonios & Espacio de Confianza
│
├── 2. Psicología Sanitaria & Psicooncología
│   ├── Cabecera & Cita ("Encontrar la luz en el acompañamiento...")
│   ├── 4 Áreas de Intervención Especializada (con filtros y modal de detalle):
│   │   ├── Gestión de la Ansiedad y Estrés
│   │   ├── Procesos de Duelo y Trauma
│   │   ├── Psicooncología (Especialidad Destacada)
│   │   └── Bloqueo Emocional & Despertar Espiritual
│   ├── Metodología: "¿Cómo trabajamos en consulta?" (4 Pilares secuenciales)
│   └── CTA "¿Preparado para dar el primer paso?"
│
├── 3. Liberación del Pericardio
│   ├── Cabecera & Cita ("El corazón se abre cuando se siente seguro")
│   ├── "¿Qué es la Liberación del Pericardio?" + Diagrama Anatómico Interactivo
│   │   ├── Ligamentos Frénico-Pericárdicos (Diafragma y Respiración)
│   │   ├── Inserciones Esterno-Pericárdicas (Esternón y Costillas)
│   │   ├── Ligamentos Vértebro-Pericárdicos (Columna Dorsal y Cervical)
│   │   └── Fascia Prevertebral y Nervio Vago (Base del Cráneo y Calma)
│   ├── Estructura de la Sesión en 3 Pasos (Recepción, Trabajo en Camilla, Integración)
│   ├── Beneficios Vivenciales en el Cuerpo
│   └── CTA de Reserva de Pericardio Presencial en Valencia
│
├── 4. Contacto & Preguntas Frecuentes
│   ├── Formulario de Contacto Interactivo con Validación y enlace directo a WhatsApp
│   ├── Datos Directos (Teléfono, Email, Horarios) + Guía de Acceso a Valencia Centro (Metro/Bus/Parking)
│   ├── Acordeón Interactivo de Preguntas Frecuentes (FAQs) con buscador en tiempo real
│   └── Banner "Empieza Hoy"
│
└── 5. Módulos y Modales Transversales
    ├── Modal de Reserva de Cita en 4 Pasos (Servicio -> Modalidad -> Horario -> Datos)
    ├── Modal de Biografía Completa con Línea Temporal de Formación y Trayectoria
    ├── Modal de Detalle Extendido de Especialidad
    └── Modal de Cumplimiento Legal Sanitario, Privacidad RGPD y Cookies
```

---

## 3. User Flows (Flujos de Usuario)

### Flujo A: Persona con diagnóstico oncológico o familiar (Psicooncología)
1. **Entrada:** Llega a la Home atraída por la especialización en Psicooncología.
2. **Descubrimiento:** Ve la tarjeta destacada de Psicooncología en la Home o en la pestaña Psicología.
3. **Validación:** Abre la Biografía de Begoña Roy y comprueba su titulación (UV 1995, Máster en Psicooncología, Col. CV-07890).
4. **Conversión:** Pulsa "Pedir Cita", selecciona "Psicooncología" y su modalidad preferida (Valencia presencial u Online).

### Flujo B: Persona con opresión en el pecho y estrés (Liberación del Pericardio)
1. **Entrada:** Accede a la sección "Pericardio".
2. **Comprensión:** Lee la explicación sobre cómo el pericardio se contrae ante el miedo e interactúa con el diagrama botánico/anatómico de diafragma y esternón.
3. **Tranquilidad:** Lee la descripción de las sesiones (con ropa cómoda, sin manipulaciones dolorosas).
4. **Conversión:** Pulsa "Reservar Sesión de Pericardio" o contacta por WhatsApp.

---

## 4. Sistema de Diseño Completo (Design System)

### Paleta Diurna (Light Mode)
* **Verde Salvia Principal (Sage Green):**
  * Hex: `#4A5D4E` | RGB: `74, 93, 78` | HSL: `133°, 11%, 33%`
  * Uso: Logotipo, botones principales, insignias de especialidad.
  * Ratio de Contraste vs `#FBF9F5`: **6.8:1** (Cumple WCAG AAA).
* **Fondo Arena Cálido (Warm Sand):**
  * Hex: `#FBF9F5` | RGB: `251, 249, 245` | HSL: `40°, 38%, 97%`
  * Uso: Fondo principal del lienzo.
* **Fondo Secundario / Tarjeta Suave:**
  * Hex: `#F3EFEA` | RGB: `243, 239, 234` | HSL: `33°, 24%, 94%`
* **Acento Terracota Tierra (Warm Terracotta):**
  * Hex: `#C28469` | RGB: `194, 132, 105` | HSL: `18°, 43%, 59%`
  * Uso: Subtítulos en cursiva, comillas de citas, acentos de interacción.
* **Texto Primario Carbón Natural:**
  * Hex: `#222823` | RGB: `34, 40, 35` | HSL: `130°, 8%, 15%`
  * Ratio de Contraste vs `#FBF9F5`: **14.2:1** (Cumple WCAG AAA).
* **Texto Secundario:**
  * Hex: `#5A655C` | RGB: `90, 101, 92` | HSL: `131°, 6%, 37%`

### Paleta Nocturna (Dark Mode)
* **Fondo Bosque Oscuro Profundo:**
  * Hex: `#151B17` | RGB: `21, 27, 23` | HSL: `140°, 13%, 9%`
* **Superficie de Tarjeta Nocturna:**
  * Hex: `#1C2420` / `#222C26` | RGB: `28, 36, 32`
* **Verde Salvia Luminoso (Sage Light):**
  * Hex: `#7C9682` | RGB: `124, 150, 130` | HSL: `134°, 11%, 54%`
  * Ratio de Contraste vs `#151B17`: **6.4:1** (Cumple WCAG AA).
* **Acento Terracota Nocturno:**
  * Hex: `#D99B82` | RGB: `217, 155, 130`
* **Texto Principal Blanco Cálido:**
  * Hex: `#F0F4F1` | RGB: `240, 244, 241`
  * Ratio de Contraste vs `#151B17`: **15.1:1** (Cumple WCAG AAA).
* **Texto Secundario Nocturno:**
  * Hex: `#A9B8AD` | RGB: `169, 184, 173`

---

## 5. Tipografía y Escalas

* **Tipografía de Títulos y Citas Clásicas:** `Lora` (Serif elegante, serena y equilibrada).
  * H1: `2.25rem - 3.75rem` (36px - 60px) | `font-weight: 500` | `line-height: 1.15`
  * H2: `1.875rem - 2.25rem` (30px - 36px) | `font-weight: 500`
  * H3: `1.25rem - 1.5rem` (20px - 24px) | `font-weight: 500`
* **Tipografía de Lectura y UI:** `Plus Jakarta Sans` (Sans-serif humanista con excelente legibilidad en pantallas).
  * Body: `1rem` (16px) | `line-height: 1.65` | `font-weight: 400`
  * Botones / Etiquetas: `0.75rem - 0.875rem` (12px - 14px) | `font-weight: 600` | `letter-spacing: 0.05em - 0.1em`
* **Tipografía Emocional y de Firma:** `Dancing Script` (Cursiva natural y cálida para citas y reflexiones).

---

## 6. Espaciado y Reglas de Maquetación
* **Bordes Redondeados (Border Radius):**
  * Botones y pastillas (Pills): `rounded-full` (9999px)
  * Tarjetas contenedoras principales: `rounded-3xl` (24px)
  * Elementos internos / sub-tarjetas: `rounded-2xl` o `rounded-xl` (12px - 16px) *(Cumpliendo la regla `Radio Interior = Radio Exterior - Padding`)*.
* **Espaciado rítmico:** Contenedor central `max-w-7xl`, separación entre secciones `space-y-20` a `space-y-28` (80px - 112px).
* **Padding:** Mínimo de `p-6` a `p-10` en tarjetas para garantizar respiración visual.

---

## 7. Recomendaciones para Migración o Implementación en Astro
1. **Componentes Astro (`.astro`):**
   * Separar secciones estáticas (`Hero.astro`, `Footer.astro`, `Quote.astro`) para 0-JS de base.
   * Usar islas interactivas (`client:load` o `client:visible`) para el `BookingModal.tsx`, `ContactoForm.tsx`, y `ThemeToggle.tsx`.
2. **SEO & Rendimiento:**
   * Generar `JSON-LD` con esquema `MedicalBusiness` / `Psychologist` incluyendo número de colegiada `CV-07890`, geolocalización en Valencia y horarios.
   * Optimizar imágenes con `astro:assets` (`<Image />`) con formatos WebP/AVIF.
