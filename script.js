

const traducciones  = {
    es: {
        nombre: 'Yeni Ramos',
        profesion: 'Desarrolladora de Software JUnior',
        sobreMiTitulo: 'Sobre Mi',
        sobreMiTexto: `Soy estudiante de Análisis y Desarrollo de Software con enfoque en programación. Actualmente, estoy aprendiendo JavaScript, HTML y CSS.
              además explorando diferentes áreas del desarrollo de software.+ Me interesa crear soluciones tecnológicas eficientes y seguir mejorando
              mis habilidades en programación. Busco oportunidades para aplicar mis conocimientos en proyectos prácticos y seguir creciendo en la industria tecnológica.`,
        idiomasTitulo: 'Idiomas',
        idiomaEspanol: 'Español - Nativo',
        idiomaIngles: 'Inglés - Intermedio',
        contactoTitulo: 'Contacto',
        contactoCorreo: 'Correo: jenraor@gmail.com',
        contactoTelefono: 'Teléfono: 3153615086 ',
        educacionTitulo: 'Educación',
        bachilleratoTitulo: 'Bachiller Técnico Comercial',
        bachilleratoInstitucion: 'Colegio Técnico Industrial Oliva Caicedo',
        tecnologiaTitulo: 'Tecnología en Análisis y Desarrollo de Software',
        habilidadesTitulo: 'Habilidades',
        habilidadAprendizaje: 'Adaptabilidad al aprendizaje:',
        textoAprendizaje: 'Habilidad para adquirir nuevas competencias técnicas de manera autónoma  y adaptarme rápidamente a cambios en el entorno de trabajo',
        habilidadGestion: 'Gestión de tareas:',
        textoGestion: 'Organizada y comprometida en el cumplimiento de objetivos',
        habilidadIngles: 'Comunicación en inglés:',
        textoIngles: 'Habilidad para comprender y comunicar ideas básicas en inglés.',
        habilidadProblemas: 'Resolución de problemas:',
        textoProblemas: 'Habilidad para identificar problemas y buscar soluciones innovadoras.',
        habilidadEquipo: 'Trabajo en equipo:',
        textoEquipo: 'Colaboración eficaz con otros para lograr objetivos comunes.',
        habilidadAdaptabilidad: 'Adaptabilidad:',
        textoAdaptabilidad: 'Ajuste rápido a cambios y nuevos entornos de trabajo.',
        softwareTitulo: 'Habilidades en software',

    },


    en: {
        nombre: 'Yeni Ramos',
        profesion: 'Junior Software Development',
        sobreMiTitulo: 'About Me',
        sobreMiTexto:  `I am a Software Analysis and Development student with a focus on programming. Currently, I am Learning JavaScript, HTML and CSS.
                 I am also exploring different areas of software development. I am interested in creating efficient technological solutions and continuing to improve
                 my programming skills. I look for opportunities to apply my knowledge in practical projects and continue growing in the technology industry.`,
        idiomasTitulo: 'Languages',
        idiomaEspanol: 'Spanish - Native',
        idiomaIngles: 'English - Intermediate',
        contactoTitulo: 'Contact',
        contactoCorreo: 'Mail: jenraor@gmail.com ',
        contactoTelefono: 'Phone: 3153615086 ',
        educacionTitulo: 'Education',
        bachilleratoTitulo: 'Technical Commercial High School Diploma',
        bachilleratoInstitucion: 'Oliva Caicedo Industrial Technical College',
        tecnologiaTitulo: 'Technology in Software Analysis and Development',
        habilidadesTitulo: 'Skills',
        habilidadAprendizaje: 'Adaptability to Learning:',
        textoAprendizaje: 'Ability to acquire new technical skills autonomously and quickly adapt to changes in the work enviroment',
        habilidadGestion: 'Task management:',
        textoGestion: 'Organized and committed to achieving objetives',
        habilidadIngles: 'English Communication:',
        textoIngles: 'Ability  to understand and communicate basic ideas in English.',
        habilidadProblemas: 'Problem Solving:',
        textoProblemas: 'Ability to identify problems and seek innovative solutions.',
        habilidadEquipo: 'Teamwork:',
        textoEquipo: 'Effective collaboration with others to achieve common objectives.',
        habilidadAdaptabilidad: 'Adaptability:',
        textoAdaptabilidad: 'Quick adjustment to changes and new work enviroments.',
        softwareTitulo: 'Software Skills',






    }
};

const elementos = {
 nombre: document.querySelector ('#nombre'),
 profesion: document.querySelector ('#profesion'),
 sobreMiTitulo: document.querySelector ('#sobre-mi-titulo'),
 sobreMiTexto: document.querySelector ('#sobre-mi-texto'),
 idiomasTitulo: document.querySelector ('#idiomas-titulo'),
 idiomaEspanol: document.querySelector ('#idioma-espanol'),
 idiomaIngles: document.querySelector ('#idioma-ingles'),
 contactoTitulo: document.querySelector ('#contacto-titulo'),
 contactoCorreo: document.querySelector ('#contacto-correo'),
 contactoTelefono: document.querySelector ('#contacto-telefono'),
 educacionTitulo: document.querySelector ('#educacion-titulo'),
 bachilleratoTitulo: document.querySelector ('#bachillerato-titulo'),
 bachilleratoInstitucion: document.querySelector ('#bachillerato-institucion'),
 tecnologiaTitulo: document.querySelector ('#tecnologia-titulo'),
 habilidadesTitulo: document.querySelector ('#habilidades-titulo'),
 habilidadAprendizaje: document.querySelector ('#habilidad-aprendizaje'),
 textoAprendizaje: document.querySelector ('#texto-aprendizaje'),
 habilidadGestion: document.querySelector ('#habilidad-gestion'),
 textoGestion: document.querySelector ('#texto-gestion'),
 habilidadIngles: document.querySelector ('#habilidad-ingles'),
 textoIngles: document.querySelector ('#texto-ingles'),
 habilidadProblemas: document.querySelector ('#habilidad-problemas'),
 textoProblemas: document.querySelector ('#texto-problemas'),
 habilidadEquipo: document.querySelector ('#habilidad-equipo'),
 textoEquipo: document.querySelector ('#texto-equipo'),
 habilidadAdaptabilidad:  document.querySelector ('#habilidad-adaptabilidad'),
 textoAdaptabilidad:  document.querySelector ('#texto-adaptabilidad'),
 softwareTitulo:  document.querySelector ('#software-titulo'),


};



const button  = document.querySelector ('#language-toggle');

let idiomaActual = "es";

button.addEventListener('click', function() {

    idiomaActual = idiomaActual === "es" ? "en" : "es";

    elementos.nombre.textContent = traducciones[idiomaActual].nombre;
    elementos.profesion.textContent = traducciones[idiomaActual].profesion;
    elementos.sobreMiTitulo.textContent = traducciones[idiomaActual].sobreMiTitulo;
    elementos.sobreMiTexto.textContent = traducciones[idiomaActual].sobreMiTexto;
    elementos.idiomasTitulo.textContent = traducciones[idiomaActual].idiomasTitulo;
    elementos.idiomaEspanol.textContent = traducciones[idiomaActual].idiomaEspanol;
    elementos.idiomaIngles.textContent = traducciones[idiomaActual].idiomaIngles;
    elementos.contactoTitulo.textContent = traducciones[idiomaActual].contactoTitulo;
    elementos.contactoCorreo.textContent = traducciones[idiomaActual].contactoCorreo;
    elementos.contactoTelefono.textContent = traducciones[idiomaActual].contactoTelefono;
    elementos.educacionTitulo.textContent = traducciones[idiomaActual].educacionTitulo;
    elementos.bachilleratoTitulo.textContent = traducciones[idiomaActual].bachilleratoTitulo;
    elementos.bachilleratoInstitucion.textContent = traducciones[idiomaActual].bachilleratoInstitucion;
    elementos.tecnologiaTitulo.textContent = traducciones[idiomaActual].tecnologiaTitulo;
    elementos.habilidadesTitulo.textContent = traducciones[idiomaActual].habilidadesTitulo;
    elementos.habilidadAprendizaje.textContent = traducciones[idiomaActual].habilidadAprendizaje;
    elementos. textoAprendizaje.textContent = traducciones[idiomaActual].textoAprendizaje;
    elementos.habilidadGestion.textContent = traducciones[idiomaActual].habilidadGestion;
    elementos.textoGestion.textContent = traducciones[idiomaActual].textoGestion;
    elementos.habilidadIngles.textContent = traducciones[idiomaActual].habilidadIngles;
    elementos.textoIngles.textContent = traducciones[idiomaActual].textoIngles;
    elementos.habilidadProblemas.textContent = traducciones[idiomaActual].habilidadProblemas;
    elementos.textoProblemas.textContent = traducciones[idiomaActual].textoProblemas;
    elementos.habilidadEquipo.textContent = traducciones[idiomaActual].habilidadEquipo;
    elementos.textoEquipo.textContent = traducciones[idiomaActual].textoEquipo;
    elementos.habilidadAdaptabilidad.textContent = traducciones[idiomaActual].habilidadAdaptabilidad;
    elementos.textoAdaptabilidad.textContent = traducciones[idiomaActual].textoAdaptabilidad;
    elementos.softwareTitulo.textContent = traducciones[idiomaActual].softwareTitulo;



button.textContent = idiomaActual === "es" ? "Cambiar a Inglés" : "Switch to Spanish";   

    button.style.backgroundColor = '#B5EAD7';
    console.log('Button clicked'); 
});

