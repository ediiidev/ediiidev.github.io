export const personalInfo = {
  name: "Ediliani Kumquel",
  location: "Caracas - Venezuela",
  //email: "lorem@ipsum.com",
  github: "https://github.com/ediiidev",
  linkedin: "https://www.linkedin.com/in/ediliani-kumquel-358043203",
  profilePicture: "/profile.jpg",
  heroDescription:
    "Soy Ediliani Kumquel, Ingeniera de Sistemas egresada con honores de la Universidad Nacional Experimental Politécnica 'Antonio José de Sucre' Vicerrectorado 'Luis Caballero Mejías', donde adquirí conocimientos de diseño, programación, análisis y gestión de sistemas informáticos. Más de 4 años de experiencia en el sector de TI, donde he desarrollado aplicaciones web y movil, asistentes virtuales inteligentes, Automatización de procesos, defensa técnica en preventa, postventa y capacitadora de las herramientas aprendidas. Me considero una persona proactiva, organizada, responsable con capacidad de resolución de problemas.",
};

export const workExperience = [
  {
    company: "KS2",
    location: "Caracas Venezuela",
    position: "Desarrolladora Full Stack",
    period: "Mar. 2026 - Actualidad",
    achievements: [
      "Desarrolladora de aplicaciones web / movil a medida",
      "Tecnología Frontend: React, HTML, CSS, Tailwind CSS, JavaScript",
      "Tecnología Banckend: Node.js con Express, PostgreSQL y Sequelize.",
    ],
  },{
    company: "Sybven",
    location: "Caracas Venezuela",
    position: "Especialista de Sistemas",
    period: "Mar. 2025 - Nov. 2025",
    achievements: [
      "Especialista de las plataformas DANAConnect y Kore.ai",
      "Apoyo técnico en sesiones de preventa y postventa.",
      "Desarrollo de propuestas técnicas.",
      "Desarrollo de capacitaciones para equipos funcionales y técnicos.",
      "Desarrollo de POCs.",
      "Desarrollo de DEMOS.",
      "Desarrollo de RFPs.",
    ],
  },
  {
    company: "Sybven",
    location: "Caracas Venezuela",
    position: "Consultor Junior",
    period: "ago. 2021 - feb 2025",
    achievements: [
      "Experiencia con los lenguajes HTML5, CSS3, Javascript, framework Visualizer.",
      "Desarrollo de aplicaciones Web y Móviles, experiencia en el sector bancario.",
      "Identificación y corrección de errores del aplicativo web y móvil.",
      "Desarrollo de documentación técnica.",
      "Pruebas Unitarias.",
    ],
  }
];

export const education = [
  {
    institution: "Universidad Nacional Experimental Politécnica \"Antonio José de Sucre\" Vicerrectorado \"Luis Caballero Mejías\"",
    location: "Caracas Venezuela",
    degree: "Ingeniero de Sistemas",
    period: "2015 - 2023",
    achievements: [
      "Graduada con honores: ",
      "Indice de rendimiento Uno.",
      "Segundo Mejor Indice Academico de la promoción y de la especialidad de Sistemas.",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "JavaScript",
    "TypeScript",
    "Python",
  ],
  frontendDevelopment: [
    "HTML5",
    "CSS3",
    "Reactjs",
    "Nextjs",
    "Tailwind CSS",
  ],
  backendDevelopment: ["NodeJS","Express", "Python"],
  databaseAndStorage: ["SQL", "PostgreSQL"],
  cloudAndDevOps: ["AWS, Ducker"],
  toolsAndServices: [
    "Git / GitHub",
    "DANAConnect",
    "Kore.ai",
    "n8n",
    //"AmetMonitor",
    //"ConsecteturPanel",
    //"AdipiscingTrigger",
  ],
};

export const projects = [
  {
    title: "SaaS Feedback System",
    github: "https://github.com/ediiidev/saas-feedback-system",
    description: [
      "Descripción: Sistema de Gestión de Feedback para SaaS, aplicación donde los usuarios pueden enviar sugerencias de mejora (feedback) y se pueden administrar desde un panel",
      "Configuración del Entorno y Tecnologías: React + TypeScript con Vite, utilizando Tailwind CSS para una interfaz moderna y responsiva, Arquitectura basada en Node.js y Express, configurada con rutas RESTful.",
      "Gestión de Base de Datos: PostgreSQL alojado en Supabase, conectada mediante la librería oficial de `@supabase/supabase-js` para asegurar la conectividad a través de protocolos HTTPS seguros, esquema relacional optimizado para feedbacks con campos para nombre, categoría (SaaS, UI, Error) y mensajes.",
      //"Autenticación de Usuarios: Se integra Better Auth, una solución gratuita que permite inicios de sesión mediante correo electrónico, contraseña y redes sociales.",
      //"Funcionalidad de Texto a Voz (TTS): El núcleo del proyecto es la generación de voces naturales mediante IA, con soporte para 22 idiomas diferentes, incluyendo español, japonés y francés.",
      //"Personalización de Voz: Se enseña cómo añadir emociones a las voces y cómo permitir que los usuarios carguen sus propios archivos de voz para proyectos personalizados.",
     // "Sistema de Monetización y Créditos: Se configura un sistema donde el uso de caracteres se traduce en créditos (por ejemplo, 100 caracteres equivalen a 1 crédito).",
      //"Procesamiento de Pagos: Se utiliza Polar para gestionar las suscripciones de los clientes, crear productos y aplicar códigos de descuento.",
     // "Despliegue (Deployment): Finalmente, se explica cómo desplegar la aplicación completa en Vercel, conectando el repositorio de GitHub y configurando las variables de entorno para producción.",
      //"Excelente vídeo de referencia: https://www.youtube.com/watch?v=MWT-bVpUiNs",
    ],
  },
  {
    title: "Dashboard de Inventario",
    github: "https://github.com/ediiidev/Dashboard-inventarios",
    description: [
      "Descripción: Dashboard de inventario,  para gestionar \"productos\" asociados a \"categorias\"",
      "Configuración del Entorno y Tecnologías: React con Vite, utilizando Tailwind CSS para una interfaz moderna y responsiva, Arquitectura basada en Node.js y Express, configurada con rutas RESTful.",
      "Gestión de Base de Datos: PostgreSQL alojado en Supabase, conectada mediante la librería oficial de `@supabase/supabase-js` para asegurar la conectividad a través de protocolos HTTPS seguros, esquema n:1",
      //"Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
      //"Praesent dapibus, neque id cursus faucibus.",
      //"Fusce feugiat malesuada odio.",
      //"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    ],
  },
];

export const awards = [
  {
    name: "Automatizaciones con N8N e Inteligencia artificial",
    issuer: "Raiola Networks",
    date: "Enero 2026",
    type: "Internacional",
    position: "Online",
  },
  {
    name: "Python Developer",
    issuer: "SoloLearn",
    date: "Feb 2026",
    type: "Internacional",
    position: "Online",
  },
  /*{
    name: "Consectetur Hackathon",
    issuer: "Adipiscing Org",
    date: "Mar 2022",
    type: "National",
    position: "Winner",
  },
  {
    name: "Vestibulum Event",
    issuer: "Vestibulum College",
    date: "Apr 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "Curabitur Hackfest",
    issuer: "Curabitur Institute",
    date: "May 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Praesent Hacks",
    issuer: "Praesent Group",
    date: "Jun 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Fusce Hack",
    issuer: "Fusce Club",
    date: "Jul 2022",
    type: "National",
    position: "Most Impactful Hack",
  },*/
];
