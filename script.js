document.getElementById("language-toggle").addEventListener("click", toggleLanguage);

let currentLanguage = "es";

const translations = {
  es: {
    "language-toggle": "Cambiar a Inglés",
    nombre: "Yeni Ramos",
    profesion: "Tecnóloga en Análisis y Desarrollo de Software y estudiante universitaria de Ingeniería de Software",
    "sobre-mi-titulo": "Sobre mí",
    "sobre-mi-texto": `Tecnóloga en Análisis y Desarrollo de Software y estudiante de Ingeniería de Software, con enfoque en desarrollo web. Busco mi primera oportunidad en una empresa tecnológica donde pueda aplicar mis conocimientos y seguir creciendo profesionalmente. Me destaco por mi capacidad de aprendizaje autónomo, mi responsabilidad y mi habilidad para resolver problemas incluso en contextos nuevos.

            Durante mi formación, lideré proyectos académicos con éxito y actualmente estoy reforzando mis habilidades.

            Poseo un nivel de inglés B1 en progreso, y cuento con sólidas habilidades blandas. `,
    "idiomas-titulo": "Idiomas",
    "idioma-espanol": "Español - Nativo",
    "idioma-ingles": "Inglés - Intermedio",
    "contacto-titulo": "Contacto",
    "contacto-correo": "Correo: jenraor@gmail.com",
    "contacto-telefono": "Teléfono: 3153615086",
    "educacion-titulo": "Educación",
    "bachillerato-titulo": "Bachiller Técnico Comercial",
    "bachillerato-institucion": "Colegio Técnico Industrial Oliva Caicedo",
    "bachillerato-fecha": "2000-2005",
    "tecnologia-titulo": "Tecnología en Análisis y Desarrollo de Software",
    "tecnologia-institucion": "SENA",
    "tecnologia-fecha": "2023-2025",
    "universidad-titulo": "Ingeniería de Software",
    "universidad-institucion": "Politécnico Grancolombiano.",
    "universidad-fecha": "2025 a la fecha",
    "habilidades-titulo": "Habilidades",
    "habilidad-autonomo": "Aprendizaje autónomo:",
    "texto-aprendizaje": "Capacidad para investigar, adquirir y aplicar nuevos conocimientos de forma autodidacta, incluso en contextos desconocidos.",
    "habilidad-equipo": "Liderazgo en equipo:",
    "texto-gestion": "Experiencia liderando proyectos académicos, aportando ideas, organizando tareas y fomentando la participación activa del grupo.",
    "habilidad-cumplimiento": "Responsabilidad y cumplimiento:",
    "texto-ingles": "Alta capacidad de organización, entrega puntual de tareas y compromiso con los objetivos establecidos.",
    "habilidad-asertiva": "Comunicación asertiva:",
    "texto-aseriva": "Escucha activa, claridad para expresar ideas y capacidad para mediar en contextos colaborativos.",
    "habilidad-adaptabilidad": "Tolerancia y adaptabilidad:",
    "texto-adaptabilidad": "Facilidad para trabajar con personas diversas, manejar desacuerdos y adaptarse a entornos cambiantes sin perder el enfoque.",
    "software-titulo": "Habilidades en software"
  },
  en: {
    "language-toggle": "Switch to Spanish",
    nombre: "Yeni Ramos",
    profesion: "Software Development Technologist and Software Engineering university student",
    "sobre-mi-titulo": "About Me",
    "sobre-mi-texto": `Technologist in Software Analysis and Development and a Software Engineering student, with a focus on web development. I am seeking my first opportunity in a tech company where I can apply my knowledge and continue growing professionally. I stand out for my ability to learn independently, my sense of responsibility, and my problem-solving skills, even in unfamiliar contexts.

During my studies, I successfully led academic projects and am currently strengthening my skills.

I have a B1 level of English in progress and strong soft skills.`,
    "idiomas-titulo": "Languages",
    "idioma-espanol": "Spanish - Native",
    "idioma-ingles": "English - Intermediate",
    "contacto-titulo": "Contact",
    "contacto-correo": "Email: jenraor@gmail.com",
    "contacto-telefono": "Phone: +57 3153615086",
    "educacion-titulo": "Education",
    "bachillerato-titulo": "Technical Commercial High School",
    "bachillerato-institucion": "Colegio Técnico Industrial Oliva Caicedo",
    "bachillerato-fecha": "2000-2005",
    "tecnologia-titulo": "Software Analysis and Development Technology",
    "tecnologia-institucion": "SENA",
    "tecnologia-fecha": "2023-2025",
    "universidad-titulo": "Software Engineering",
    "universidad-institucion": "Politécnico Grancolombiano",
    "universidad-fecha": "2025 - Present",
    "habilidades-titulo": "Soft Skills",
    "habilidad-autonomo": "Self-learning:",
    "texto-aprendizaje": "Ability to research, acquire, and apply new knowledge independently, even in unfamiliar contexts.",
    "habilidad-equipo": "Team Leadership:",
    "texto-gestion": "Experience leading academic projects, contributing ideas, organizing tasks, and encouraging group participation.",
    "habilidad-cumplimiento": "Responsibility and Commitment:",
    "texto-ingles": "Strong organizational skills, punctual task delivery, and commitment to established goals.",
    "habilidad-asertiva": "Assertive Communication:",
    "texto-aseriva": "Active listening, clarity in expressing ideas, and the ability to mediate in collaborative contexts.",
    "habilidad-adaptabilidad": "Tolerance and Adaptability:",
    "texto-adaptabilidad": "Ease in working with diverse people, handling disagreements, and adapting to changing environments without losing focus.",
    "software-titulo": "Software Skills"
  }
};

function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  const lang = translations[currentLanguage];

  for (const id in lang) {
    const el = document.getElementById(id);
    if (el) el.innerText = lang[id];
  }

  // También actualiza el texto del botón
  document.getElementById("language-toggle").innerText = lang["language-toggle"];
}
