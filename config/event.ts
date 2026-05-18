/**
 * config/event.ts
 * ─────────────────────────────────────────────────────────────
 * Único archivo que hay que editar para adaptar la landing
 * a un nuevo evento. Ningún componente necesita modificarse.
 * ─────────────────────────────────────────────────────────────
 */

// ── Identidad ────────────────────────────────────────────────
export const EVENT = {
  name:        'The Invitational',
  edition:     'Edición I · 2026',
  badgeText:   'Olivos Golf Club · Buenos Aires · Edición I',
  tagline:     'The\nInvitational',   // \n genera salto de línea en el hero
  date: {
    display: 'Miércoles\n27 de Mayo', // \n genera salto de línea
    year:    '2026',
    iso:     '2026-05-27',
  },
  venue: {
    name:     'Olivos Golf Club',
    location: 'Buenos Aires, Argentina',
    address:  'Ruta Panamericana Km 32.5, Pablo Nogués, Buenos Aires, Argentina',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.000000000000!2d-58.683000!3d-34.466000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f1c7e9a8f4b%3A0x7d9a8f4b7e9a8f4b!2sOlivos%20Golf%20Club!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar',
    notes: [
      '40 min desde CABA por Panamericana',
      'Club privado — ingreso con acreditación',
    ],
  },

  // ── Imagen del hero ──────────────────────────────────────────
  // Reemplazá por una URL propia o colocá el archivo en /public/hero.jpg
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi54gOPSlv6sowDEQxeu-iRcShcRgZTsBosbYYtt8aHVb4q5gHuCMf-Qu8q0CPFOAzacIZ-GIwHkMPhQPbjO2rsSZj2Ep4gvbCn6jYXP_TAZTrlvdk796b-0tetOoaUV_uFs_aYUE0PrH8K9QD9dSbchLr1-8PQVyiXKfhLF71TXVbFR_HbVlvb8dz-nXImw0wOOIjBqCDNaJwIMt8Py-t-ZtZfTkSICTnDdIN9ipXLKR8dCB6U3SEgZNaqXhROXulNSa3UPZNOIk',

  // ── Agenda ───────────────────────────────────────────────────
  agenda: [
    { time: '8:30 — 9:00', title: 'Bienvenida y acreditación', highlight: false },
    { time: '10:00 hs',    title: 'Salida simultánea',          highlight: true  },
    { time: '14:30 hs',    title: 'Fin del juego',              highlight: false },
    { time: '14:45 hs',    title: 'Cocktail de cierre, palabras de los directivos, entrega de premios y sorteos', highlight: true },
    { time: '16:00 hs',    title: 'Finalización del evento',    highlight: false },
  ],

  // ── Formato ───────────────────────────────────────────────────
  format: [
    { label: 'Modalidad', value: 'Laguneada · Mejor pelota',                                                                                  highlight: false },
    { label: 'Cupos',     value: '32 jugadores. Selección considerando composición de handicaps.',                                            highlight: false },
    { label: 'Incluye',   value: 'Green fee, driving range, desayuno, bar en el hoyo 9, cocktail de cierre, regalos para todos los jugadores y premios para los ganadores.', highlight: true  },
  ],

  // ── SEO / Meta ────────────────────────────────────────────────
  meta: {
    title:       'The Invitational — Olivos Golf Club · 27 de Mayo 2026',
    description: 'Torneo por invitación. 32 jugadores. Olivos Golf Club, Buenos Aires. Cocktail de cierre con líderes de la industria.',
    ogImage:     '/og-image.png',
  },
} as const;

// ── Campos del formulario ─────────────────────────────────────
export const FORM_FIELDS = [
  { id: 'nombre',    label: 'Nombre',              type: 'text',  required: true,  placeholder: 'Juan',              autocomplete: 'given-name',   col: 1 },
  { id: 'apellido',  label: 'Apellido',            type: 'text',  required: true,  placeholder: 'Pérez',             autocomplete: 'family-name',  col: 1 },
  { id: 'email',     label: 'Email',               type: 'email', required: true,  placeholder: 'vos@empresa.com',   autocomplete: 'email',        col: 1 },
  { id: 'whatsapp',  label: 'WhatsApp',            type: 'tel',   required: true,  placeholder: '+54 9 11 …',        autocomplete: 'tel',          col: 1 },
  { id: 'handicap',  label: 'Handicap / Matrícula AAG', type: 'text', required: true, placeholder: 'Ej: matrícula AAG 135052', autocomplete: 'off', col: 2 },
  { id: 'empresa',   label: 'Empresa',             type: 'text',  required: false, placeholder: '(Opcional)',        autocomplete: 'organization', col: 2 },
] as const;

export type FormFieldId = (typeof FORM_FIELDS)[number]['id'];
