import { useEffect, useState } from 'react'

type Language = 'en' | 'es' | 'de'

type Project = {
  id: string
  title: string
  type: string
  description: string
  detail: string
  impact: string
  stack: string[]
  image: string
  link?: string
  linkKind?: 'repository' | 'case-study'
  visualMode: 'cover' | 'icon'
  featured?: boolean
}

type Experience = {
  period: string
  role: string
  company: string
  description: string
  tags: string[]
}

type Copy = {
  nav: { about: string; work: string; path: string; contact: string }
  hero: {
    kicker: string
    title: string
    description: string
    primary: string
    secondary: string
    availability: string
    location: string
    current: string
    role: string
    company: string
    signal: string
  }
  about: { kicker: string; title: string; body: string; statOne: string; statTwo: string; statThree: string; statLabels: [string, string, string] }
  work: { kicker: string; title: string; description: string; open: string; code: string; more: string }
  stack: { kicker: string; title: string }
  path: { kicker: string; title: string; description: string; experience: string; education: string }
  contact: { kicker: string; title: string; description: string; email: string; linkedin: string; github: string; cta: string }
  ui: { skip: string; navigation: string; languages: string; home: string; currentRole: string; online: string; openChannel: string; backToTop: string; newTab: string }
  projects: Project[]
  experience: Experience[]
  education: { period: string; title: string; place: string; description: string }[]
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const sharedProjects = {
  swagger: { id: 'swagger-markdown', image: asset('icons/typescript.svg'), link: 'https://www.linkedin.com/feed/update/urn:li:activity:7461168116719312897/', linkKind: 'case-study' as const, visualMode: 'icon' as const },
  ams: { id: 'ams-migration', image: asset('images/projectAMS.png'), visualMode: 'cover' as const },
  energy: { id: 'energy-backend', image: asset('images/projectEnergyTracker.png'), link: 'https://github.com/Krontur/energytracker', linkKind: 'repository' as const, visualMode: 'cover' as const },
  frontend: { id: 'energy-frontend', image: asset('images/projectFrontendEnergyTracker.png'), link: 'https://github.com/Krontur/energytracker_frontend', linkKind: 'repository' as const, visualMode: 'cover' as const },
  orders: { id: 'warehouse-orders', image: asset('images/projectOrders.png'), link: 'https://github.com/Krontur/warehouse', linkKind: 'repository' as const, visualMode: 'cover' as const },
}

const translations: Record<Language, Copy> = {
  en: {
    nav: { about: 'Profile', work: 'Selected work', path: 'Career path', contact: 'Contact' },
    hero: {
      kicker: 'Software Engineer / Java Backend / Critical Systems',
      title: 'Software Engineer specialized in Java backend systems.',
      description: 'Software engineer specialized in Java backend development, building production-grade services, integrations and data flows with Spring and a practical understanding of systems under pressure.',
      primary: 'Explore selected work',
      secondary: 'Start a conversation',
      availability: 'Currently building at',
      location: 'Spain / Remote',
      current: 'CURRENT ROLE',
      role: 'Backend Developer',
      company: 'Seresco / since Jan 2026',
      signal: 'System signal',
    },
    about: {
      kicker: '01 / profile',
      title: 'Backend expertise shaped by real-world operations.',
      body: 'I am a software engineer specialized in Java backend systems. I work where software meets operational reality, combining backend engineering and technical leadership with more than eleven years of professional experience in Germany, including responsibility in critical 24/7 airport environments. That background shapes how I design software: clear boundaries, useful observability, resilient integrations and solutions that people can actually operate.',
      statOne: '11+ years',
      statTwo: '24/7 systems',
      statThree: '~300%',
      statLabels: ['professional experience in Germany', 'operations experience', 'legacy SMS processing'],
    },
    work: {
      kicker: '02 / selected work',
      title: 'Selected projects and results.',
      description: 'A selection of systems, migrations and tools with practical technical value or measurable operational impact.',
      open: 'View project',
      code: 'Repository',
      more: 'Read case note',
    },
    stack: { kicker: 'Tools / methods / systems', title: 'The working stack.' },
    path: {
      kicker: '03 / career path',
      title: 'Experience across software and critical infrastructure.',
      description: 'Technical responsibility, field experience and software development reinforce each other in my work.',
      experience: 'Experience',
      education: 'Education',
    },
    contact: {
      kicker: '04 / contact',
      title: "Let's talk about Java backend opportunities.",
      description: 'I am open to software engineering and Java backend opportunities, technical collaborations and conversations about reliable systems.',
      email: 'oscar.gtur@gmail.com',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cta: 'Send an email',
    },
    ui: { skip: 'Skip to content', navigation: 'Main navigation', languages: 'Language selector', home: 'Oscar Gonzalez Tur home', currentRole: 'Current role', online: 'Online', openChannel: 'Open channel', backToTop: 'Back to top', newTab: 'opens in a new tab' },
    projects: [
      { ...sharedProjects.energy, title: 'Energy Tracker / backend', type: 'Production system', description: 'A Spring Boot service for collecting, processing and querying energy data from a distributed meter network.', detail: 'Backend developed in Java with Spring Boot for the Energy Tracker system, designed to collect, process, and query energy data in 15-minute intervals. The architecture follows Hexagonal and Clean Architecture principles for high maintainability and scalability. The system integrates RabbitMQ for real-time ingestion from remote stations, includes validation and normalization logic, and stores data in a day-partitioned database optimized for historical queries. Query performance was significantly improved, reducing retrieval time for more than one thousand meters from around 7 minutes to just 30 seconds. The backend includes role-based access control, modular services for devices, consumption and users, and is prepared to evolve into a microservices ecosystem.', impact: '7 min -> 30 sec', stack: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL'], featured: true },
      { ...sharedProjects.ams, title: 'AMS middleware migration', type: 'Legacy modernization', description: 'A critical airport messaging layer moved from Java 1.3 and Oracle AQ to a maintainable Java 11 platform.', detail: 'Comprehensive modernization of the messaging middleware responsible for data exchange between a local FTP server and an international database within the airport docking system at Leipzig/Halle Airport. The project included the migration from Java 1.3 to Java 11, refactoring legacy code, updating dependencies, and improving performance, security, and maintainability. The upgrade eliminated outdated hardware and licensing costs, achieving savings of approximately €500,000 while significantly enhancing system stability and compliance.', impact: '~€500k costs avoided', stack: ['Java 11', 'ActiveMQ', 'Oracle AQ'], featured: true },
      { ...sharedProjects.swagger, title: 'Swagger JSON to Markdown', type: 'Developer tooling', description: 'An Obsidian plugin that turns OpenAPI files into structured, editable Markdown documentation.', detail: 'Obsidian plugin developed to generate technical API documentation directly from swagger.json or openapi.json files. It supports Swagger 2.0 and OpenAPI 3.x, full and fragment generation, grouping by tags, endpoints, parameters, request bodies, responses, examples and schemas, producing editable, versionable Markdown suitable for technical notes, project documentation and PDF exports.', impact: 'Docs, automated', stack: ['TypeScript', 'OpenAPI', 'Obsidian'] },
      { ...sharedProjects.frontend, title: 'Energy Tracker / frontend', type: 'Data interface', description: 'A responsive React interface for exploring energy consumption, devices and stations.', detail: 'Frontend developed in React for the Energy Tracker platform, enabling visualization and management of energy consumption data collected in 15-minute intervals. Built with a modular component architecture, advanced filtering systems, dynamic charts, and detailed device and station views. Includes role-based authentication, responsive design, and optimized state management to ensure a smooth user experience. The interface is designed to help technicians and administrators efficiently analyse consumption patterns, detect anomalies, and manage the energy infrastructure.', impact: 'Energy UI', stack: ['React', 'REST APIs', 'Charts'] },
      { ...sharedProjects.orders, title: 'Warehouse order flow', type: 'Process automation', description: 'A role-based web app that centralizes ordering for an electrical engineering department.', detail: 'React application developed for creating and managing orders within the electrotechnical department at Leipzig Airport. The solution is deployed on Firebase, using a NoSQL database for efficient order management and a role-based access control system. It incorporates a centralized catalog of frequently used items, significantly reducing search time and minimizing errors during order processing. The architecture is based on reusable components, enabling scalability, maintainability, and rapid integration of new features.', impact: 'Faster search, fewer errors', stack: ['React', 'Firebase', 'NoSQL'] },
    ],
    experience: [
      { period: '2026 - now', role: 'Backend Developer', company: 'Seresco', description: 'Java 21 and Spring Boot services for high-volume SMS platforms, built with Hexagonal Architecture, AWS integrations, asynchronous processing with Kafka and RabbitMQ, and legacy modernization.', tags: ['Java 21', 'Spring Boot', 'Kafka', 'RabbitMQ', 'AWS', 'Hexagonal Architecture'] },
      { period: '2021 - 2025', role: 'Project Coordinator / Technical Manager', company: 'Flughafen Leipzig/Halle GmbH', description: 'Led technicians and coordinated critical electrical, energy and automation infrastructure in a 24/7 airport environment. Alongside this role, developed Java/Spring, React and messaging-based software projects to improve operational processes.', tags: ['Java', 'Spring Boot', 'React', 'RabbitMQ', 'ActiveMQ', 'Leadership', 'Infrastructure', '24/7'] },
      { period: '2017 - 2021', role: 'Site Manager for Electrical Engineering', company: 'Elektromontagen Leipzig GmbH', description: 'Planned, executed and supervised technical installation projects and field teams.', tags: ['Planning', 'Execution', 'Teams'] },
      { period: '2008 - 2013', role: 'IT Technician', company: 'Informática Tur', description: 'Provided IT support for individuals and small businesses, including remote assistance, troubleshooting and technical consulting.', tags: ['IT Support', 'Remote Assistance', 'Consulting'] },
    ],
    education: [
      { period: '2018 - 2025', title: 'Computer Engineering', place: 'Universitat Oberta de Catalunya', description: 'Degree in Computer Engineering.' },
      { period: '2024', title: 'Training of Trainers', place: 'ZAW Leipzig', description: 'AdA certificate, recognized in Germany as part IV of the Meister preparation.' },
      { period: '2014 - 2017', title: 'Electronics Technician', place: 'Berufsschulzentrum 7 Leipzig', description: 'Dual vocational training in energy and building services engineering.' },
    ],
  },
  es: {
    nav: { about: 'Perfil', work: 'Proyectos', path: 'Trayectoria', contact: 'Contacto' },
    hero: {
      kicker: 'Ingeniero de Software / Backend Java / Sistemas Críticos', title: 'Ingeniero de software especializado en backend Java.', description: 'Ingeniero de software especializado en desarrollo backend con Java, construyendo servicios, integraciones y flujos de datos preparados para producción con Spring y experiencia práctica en sistemas bajo presión.', primary: 'Ver proyectos', secondary: 'Iniciar conversación', availability: 'Actualmente en', location: 'España / Remoto', current: 'PUESTO ACTUAL', role: 'Desarrollador Backend', company: 'Seresco / desde ene 2026', signal: 'Señal del sistema',
    },
    about: { kicker: '01 / perfil', title: 'Experiencia backend con visión operativa.', body: 'Soy ingeniero de software especializado en sistemas backend con Java. Combino ingeniería backend y liderazgo técnico con más de once años de experiencia profesional en Alemania, incluida la responsabilidad sobre infraestructuras aeroportuarias críticas en entornos 24/7. Esta experiencia define cómo diseño software: límites claros, observabilidad útil, integraciones resilientes y soluciones que realmente se pueden operar.', statOne: '11+ años', statTwo: 'Sistemas 24/7', statThree: '~300%', statLabels: ['experiencia profesional en Alemania', 'experiencia operativa', 'procesamiento SMS legacy'] },
    work: { kicker: '02 / proyectos', title: 'Proyectos y resultados destacados.', description: 'Una selección de sistemas, migraciones y herramientas con valor técnico práctico o impacto operativo medible.', open: 'Ver proyecto', code: 'Repositorio', more: 'Leer caso' },
    stack: { kicker: 'Herramientas / métodos / sistemas', title: 'El stack de trabajo.' },
    path: { kicker: '03 / trayectoria', title: 'Experiencia en software e infraestructura crítica.', description: 'La responsabilidad técnica, la experiencia de campo y el desarrollo de software se refuerzan en mi trabajo.', experience: 'Experiencia', education: 'Formación' },
    contact: { kicker: '04 / contacto', title: 'Hablemos de oportunidades backend Java.', description: 'Estoy abierto a oportunidades de ingeniería de software y backend Java, colaboraciones técnicas y conversaciones sobre sistemas fiables.', email: 'oscar.gtur@gmail.com', linkedin: 'LinkedIn', github: 'GitHub', cta: 'Enviar un correo' },
    ui: { skip: 'Saltar al contenido', navigation: 'Navegación principal', languages: 'Selector de idioma', home: 'Inicio de Oscar González Tur', currentRole: 'Puesto actual', online: 'En línea', openChannel: 'Canal abierto', backToTop: 'Volver arriba', newTab: 'se abre en una pestaña nueva' },
    projects: [
      { ...sharedProjects.energy, title: 'Energy Tracker / backend', type: 'Sistema en producción', description: 'Servicio Spring Boot para recopilar, procesar y consultar datos energéticos de una red distribuida de contadores.', detail: 'Backend desarrollado en Java con Spring Boot para el sistema Energy Tracker, una plataforma orientada a la recolección, procesamiento y consulta de datos energéticos en intervalos de 15 minutos. La arquitectura sigue principios de Arquitectura Hexagonal y Clean Architecture, separando dominios, casos de uso e infraestructura para garantizar mantenibilidad y escalabilidad. El sistema integra colas RabbitMQ para la ingesta de datos en tiempo real procedentes de estaciones remotas, aplica validaciones y normalización de perfiles de carga, y almacena la información en una base de datos particionada por días para optimizar consultas históricas. Gracias a la optimización del modelo de datos y las consultas, se logró reducir el tiempo de recuperación de información para más de mil contadores de aproximadamente 7 minutos a tan solo 30 segundos. Incluye control de acceso basado en roles, servicios dedicados para dispositivos, consumos y usuarios, y un diseño modular preparado para evolucionar hacia microservicios. Este backend actúa como núcleo del ecosistema Energy Tracker, proporcionando APIs robustas y eficientes para el análisis energético.', impact: '7 min -> 30 s', stack: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL'], featured: true },
      { ...sharedProjects.ams, title: 'Migración de middleware AMS', type: 'Modernización legacy', description: 'Capa crítica de mensajería aeroportuaria migrada de Java 1.3 y Oracle AQ a una plataforma mantenible con Java 11.', detail: 'Actualización integral del middleware de mensajería responsable del intercambio de datos entre un servidor FTP local y una base de datos internacional en el sistema de acoplamiento aeroportuario del Aeropuerto de Leipzig/Halle. El proyecto incluyó la modernización completa de la plataforma, migrando de Java 1.3 a Java 11, refactorizando código legado, revisando dependencias e implementando mejoras sustanciales en rendimiento, seguridad y mantenibilidad. Esta migración permitió eliminar costes asociados a licencias y hardware obsoleto, logrando un ahorro estimado de 500.000 €. El resultado fue un sistema más estable, eficiente y alineado con los requisitos operativos y normativos actuales.', impact: '~500.000 € en costes evitados', stack: ['Java 11', 'ActiveMQ', 'Oracle AQ'], featured: true },
      { ...sharedProjects.swagger, title: 'Swagger JSON to Markdown', type: 'Herramienta de desarrollo', description: 'Plugin de Obsidian que transforma archivos OpenAPI en documentación Markdown estructurada y editable.', detail: 'Plugin para Obsidian desarrollado para generar documentación técnica de APIs directamente desde archivos swagger.json u openapi.json. Soporta Swagger 2.0 y OpenAPI 3.x, generación completa o por fragmentos, agrupación por tags, endpoints, parámetros, request bodies, respuestas, ejemplos y schemas, produciendo Markdown editable, versionable y útil para notas técnicas, documentación de proyecto y exportaciones a PDF.', impact: 'Docs automatizadas', stack: ['TypeScript', 'OpenAPI', 'Obsidian'] },
      { ...sharedProjects.frontend, title: 'Energy Tracker / frontend', type: 'Interfaz de datos', description: 'Interfaz React responsive para explorar consumos, dispositivos y estaciones energéticas.', detail: 'Frontend desarrollado en React para la plataforma Energy Tracker, diseñado para visualizar y gestionar datos energéticos recogidos en intervalos de 15 minutos. La aplicación implementa una arquitectura modular basada en componentes reutilizables, gestión de estado optimizada y patrones que facilitan la extensibilidad. Incluye dashboards interactivos, filtros avanzados, gráficos dinámicos y vistas detalladas para dispositivos, consumos, estaciones y canales. Integra autenticación con control de acceso basado en roles y se comunica con el backend mediante APIs REST, garantizando una experiencia fluida y segura. El diseño prioriza la usabilidad y la eficiencia, permitiendo a técnicos y administradores analizar consumos, detectar anomalías y gestionar la infraestructura energética de forma intuitiva.', impact: 'Energy UI', stack: ['React', 'APIs REST', 'Charts'] },
      { ...sharedProjects.orders, title: 'Flujo de pedidos', type: 'Automatización de procesos', description: 'Aplicación con roles que centraliza los pedidos de un departamento de ingeniería eléctrica.', detail: 'Aplicación React desarrollada para la realización y control de pedidos del departamento de electrotecnia del Aeropuerto de Leipzig. La solución está desplegada en Firebase, utilizando una base de datos NoSQL para la gestión eficiente de pedidos y un sistema de control de acceso basado en roles. Incorpora un catálogo centralizado de artículos utilizados habitualmente, reduciendo significativamente el tiempo de búsqueda y los errores en la tramitación. La arquitectura está orientada a componentes reutilizables, lo que facilita la escalabilidad, el mantenimiento y la rápida incorporación de nuevas funcionalidades.', impact: 'Búsquedas más rápidas, menos errores', stack: ['React', 'Firebase', 'NoSQL'] },
    ],
    experience: [
      { period: '2026 - actualidad', role: 'Desarrollador Backend', company: 'Seresco', description: 'Servicios con Java 21 y Spring Boot para plataformas SMS de alto volumen, desarrollados con Arquitectura Hexagonal, integraciones con AWS, procesamiento asíncrono mediante Kafka y RabbitMQ, y modernización legacy.', tags: ['Java 21', 'Spring Boot', 'Kafka', 'RabbitMQ', 'AWS', 'Arquitectura Hexagonal'] },
      { period: '2021 - 2025', role: 'Coordinador de Proyectos / Gestor Técnico', company: 'Flughafen Leipzig/Halle GmbH', description: 'Liderazgo de técnicos y coordinación de infraestructuras eléctricas, energéticas y de automatización en un entorno aeroportuario 24/7. Paralelamente, desarrollé proyectos de software con Java/Spring, React y sistemas de mensajería para mejorar procesos operativos.', tags: ['Java', 'Spring Boot', 'React', 'RabbitMQ', 'ActiveMQ', 'Liderazgo', 'Infraestructura', '24/7'] },
      { period: '2017 - 2021', role: 'Encargado de Obra en Electrotecnia', company: 'Elektromontagen Leipzig GmbH', description: 'Planificación, ejecución y supervisión de proyectos técnicos y equipos de campo.', tags: ['Planificación', 'Ejecución', 'Equipos'] },
      { period: '2008 - 2013', role: 'Técnico Informático', company: 'Informática Tur', description: 'Soporte informático para particulares y pequeñas empresas, incluyendo asistencia remota, resolución de incidencias y asesoramiento técnico.', tags: ['Soporte IT', 'Asistencia Remota', 'Consultoría'] },
    ],
    education: [
      { period: '2018 - 2025', title: 'Ingeniería Informática', place: 'Universitat Oberta de Catalunya', description: 'Grado en Ingeniería Informática.' },
      { period: '2024', title: 'Formación de formadores', place: 'ZAW Leipzig', description: 'Certificado AdA, reconocido en Alemania como parte IV de la preparación Meister.' },
      { period: '2014 - 2017', title: 'Técnico en Electrotecnia', place: 'Berufsschulzentrum 7 Leipzig', description: 'Formación profesional dual en energía y tecnología de edificios.' },
    ],
  },
  de: {
    nav: { about: 'Profil', work: 'Projekte', path: 'Werdegang', contact: 'Kontakt' },
    hero: {
      kicker: 'Software Engineer / Java-Backend / Kritische Systeme', title: 'Software Engineer mit Spezialisierung auf Java-Backend-Systeme.', description: 'Software Engineer mit Spezialisierung auf Java-Backend-Entwicklung, der produktionsreife Services, Integrationen und Datenflüsse mit Spring und praktischem Verständnis für Systeme unter Druck entwickelt.', primary: 'Projekte ansehen', secondary: 'Kontakt aufnehmen', availability: 'Aktuell bei', location: 'Spanien / Remote', current: 'AKTUELLE ROLLE', role: 'Backend-Entwickler', company: 'Seresco / seit Jan. 2026', signal: 'Systemsignal',
    },
    about: { kicker: '01 / profil', title: 'Backend-Expertise mit operativer Praxiserfahrung.', body: 'Ich bin Software Engineer mit Spezialisierung auf Java-Backend-Systeme. Ich verbinde Backend-Engineering und technische Führung mit mehr als elf Jahren Berufserfahrung in Deutschland, darunter Verantwortung in kritischen 24/7-Flughafenumgebungen. Dieser Hintergrund prägt die Art, wie ich Software entwickle: klare Grenzen, nutzbare Beobachtbarkeit, resiliente Integrationen und Lösungen, die sich zuverlässig betreiben lassen.', statOne: '11+ Jahre', statTwo: '24/7 Systeme', statThree: '~300%', statLabels: ['Berufserfahrung in Deutschland', 'operative Erfahrung', 'Legacy-SMS-Verarbeitung'] },
    work: { kicker: '02 / projekte', title: 'Ausgewählte Projekte und Ergebnisse.', description: 'Eine Auswahl von Systemen, Migrationen und Tools mit praktischem technischem Nutzen oder messbarer operativer Wirkung.', open: 'Projekt ansehen', code: 'Repository', more: 'Fallstudie lesen' },
    stack: { kicker: 'Tools / Methoden / Systeme', title: 'Der Arbeits-Stack.' },
    path: { kicker: '03 / werdegang', title: 'Erfahrung in Software und kritischer Infrastruktur.', description: 'Technische Verantwortung, Praxiserfahrung und Softwareentwicklung verstärken sich in meiner Arbeit.', experience: 'Erfahrung', education: 'Ausbildung' },
    contact: { kicker: '04 / kontakt', title: 'Lassen Sie uns über Java-Backend-Positionen sprechen.', description: 'Ich bin offen für Positionen im Software Engineering und Java-Backend, technische Kooperationen und Gespräche über zuverlässige Systeme.', email: 'oscar.gtur@gmail.com', linkedin: 'LinkedIn', github: 'GitHub', cta: 'E-Mail senden' },
    ui: { skip: 'Zum Inhalt springen', navigation: 'Hauptnavigation', languages: 'Sprachauswahl', home: 'Startseite von Oscar Gonzalez Tur', currentRole: 'Aktuelle Rolle', online: 'Online', openChannel: 'Offener Kanal', backToTop: 'Nach oben', newTab: 'öffnet in einem neuen Tab' },
    projects: [
      { ...sharedProjects.energy, title: 'Energy Tracker / Backend', type: 'Produktionssystem', description: 'Spring-Boot-Service zur Erfassung, Verarbeitung und Abfrage von Energiedaten eines verteilten Zählernetzes.', detail: 'Backend in Java mit Spring Boot für das Energy-Tracker-System, entwickelt zur Erfassung, Verarbeitung und Abfrage von Energiedaten in 15-Minuten-Intervallen. Die Architektur folgt den Prinzipien der Hexagonalen Architektur und Clean Architecture, um hohe Wartbarkeit und Skalierbarkeit zu gewährleisten. Das System integriert RabbitMQ für die Echtzeit-Datenerfassung von entfernten Stationen, beinhaltet Validierungs- und Normalisierungslogiken und speichert die Daten in einer nach Tagen partitionierten Datenbank zur Optimierung historischer Abfragen. Die Abfrageleistung wurde erheblich verbessert: Die Abrufzeit für über tausend Zähler wurde von ca. 7 Minuten auf nur 30 Sekunden reduziert. Das Backend bietet rollenbasierten Zugriff, modulare Dienste für Geräte, Verbrauch und Benutzer und ist für eine zukünftige Microservices-Architektur vorbereitet.', impact: '7 Min -> 30 Sek', stack: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL'], featured: true },
      { ...sharedProjects.ams, title: 'AMS-Middleware-Migration', type: 'Legacy-Modernisierung', description: 'Eine kritische Flughafen-Messaging-Schicht wurde von Java 1.3 und Oracle AQ auf Java 11 migriert.', detail: 'Modernisierung des Messaging-Middleware-Systems für den Datenaustausch zwischen einem lokalen FTP-Server und einer internationalen Datenbank im Flugzeugandocksystem des Flughafens Leipzig/Halle. Das Projekt umfasste die Migration von Java 1.3 auf Java 11, die Refaktorisierung von Legacy-Code, die Aktualisierung von Abhängigkeiten sowie Verbesserungen in Leistung, Sicherheit und Wartbarkeit. Durch die Aktualisierung konnten veraltete Hardware und Lizenzkosten eingespart werden, was zu Einsparungen von rund 500.000 € führte und gleichzeitig die Systemstabilität und Compliance deutlich verbesserte.', impact: '~500.000 € vermiedene Kosten', stack: ['Java 11', 'ActiveMQ', 'Oracle AQ'], featured: true },
      { ...sharedProjects.swagger, title: 'Swagger JSON to Markdown', type: 'Entwicklerwerkzeug', description: 'Obsidian-Plugin zur Umwandlung von OpenAPI-Dateien in strukturierte Markdown-Dokumentation.', detail: 'Obsidian-Plugin zur Erstellung technischer API-Dokumentation direkt aus swagger.json- oder openapi.json-Dateien. Es unterstützt Swagger 2.0 und OpenAPI 3.x, vollständige Generierung oder Fragmentgenerierung, Gruppierung nach Tags, Endpoints, Parameter, Request Bodies, Responses, Beispiele und Schemas und erzeugt editierbares, versionierbares Markdown für technische Notizen, Projektdokumentation und PDF-Exporte.', impact: 'Docs automatisiert', stack: ['TypeScript', 'OpenAPI', 'Obsidian'] },
      { ...sharedProjects.frontend, title: 'Energy Tracker / Frontend', type: 'Datenschnittstelle', description: 'Responsive React-Oberfläche zur Analyse von Energieverbrauch, Geräten und Stationen.', detail: 'Frontend in React für die Energy-Tracker-Plattform, entwickelt zur Visualisierung und Verwaltung von Energieverbrauchsdaten, die in 15-Minuten-Intervallen erfasst werden. Die Anwendung nutzt eine modulare Komponentenarchitektur, erweiterte Filterfunktionen, dynamische Diagramme sowie detaillierte Ansichten für Geräte und Stationen. Sie beinhaltet rollenbasierte Authentifizierung, ein responsives Design und optimiertes State-Management für ein reibungsloses Nutzungserlebnis. Die Benutzeroberfläche unterstützt Techniker und Administratoren dabei, Verbrauchsmuster effizient zu analysieren, Anomalien zu erkennen und die Energieinfrastruktur zu verwalten.', impact: 'Energy UI', stack: ['React', 'REST APIs', 'Charts'] },
      { ...sharedProjects.orders, title: 'Bestellprozess', type: 'Prozessautomatisierung', description: 'Rollenbasierte Webanwendung zur Zentralisierung von Bestellungen in einer Elektrotechnikabteilung.', detail: 'React-Anwendung zur Erstellung und Verwaltung von Bestellungen für die elektrotechnische Abteilung des Flughafens Leipzig. Die Lösung ist in Firebase bereitgestellt und nutzt eine NoSQL-Datenbank für eine effiziente Bestellverwaltung sowie ein rollenbasiertes Zugriffskontrollsystem. Ein zentraler Katalog häufig verwendeter Artikel reduziert die Suchzeit erheblich und minimiert Fehler im Bestellprozess. Die Architektur basiert auf wiederverwendbaren Komponenten, was Skalierbarkeit, Wartbarkeit und die schnelle Implementierung neuer Funktionen ermöglicht.', impact: 'Schnellere Suche, weniger Fehler', stack: ['React', 'Firebase', 'NoSQL'] },
    ],
    experience: [
      { period: '2026 - heute', role: 'Backend-Entwickler', company: 'Seresco', description: 'Services mit Java 21 und Spring Boot für SMS-Plattformen mit hohem Volumen, entwickelt mit Hexagonaler Architektur, AWS-Integrationen, asynchroner Verarbeitung mit Kafka und RabbitMQ sowie Legacy-Modernisierung.', tags: ['Java 21', 'Spring Boot', 'Kafka', 'RabbitMQ', 'AWS', 'Hexagonale Architektur'] },
      { period: '2021 - 2025', role: 'Projektkoordinator / Sachbearbeiter Stromversorgung und Netze', company: 'Flughafen Leipzig/Halle GmbH', description: 'Führung von Technikern und Koordination kritischer elektrischer, energetischer und automatisierter Infrastruktur im 24/7-Flughafenbetrieb. Parallel dazu entwickelte ich Softwareprojekte mit Java/Spring, React und Messaging-Systemen zur Verbesserung operativer Prozesse.', tags: ['Java', 'Spring Boot', 'React', 'RabbitMQ', 'ActiveMQ', 'Führung', 'Infrastruktur', '24/7'] },
      { period: '2017 - 2021', role: 'Bauleiter Elektrotechnik', company: 'Elektromontagen Leipzig GmbH', description: 'Planung, Ausführung und Überwachung technischer Installationsprojekte und Teams.', tags: ['Planung', 'Ausführung', 'Teams'] },
      { period: '2008 - 2013', role: 'IT-Techniker', company: 'Informática Tur', description: 'IT-Support für Privatkunden und kleine Unternehmen, einschließlich Remote-Support, Fehlerbehebung und technischer Beratung.', tags: ['IT-Support', 'Remote-Support', 'Beratung'] },
    ],
    education: [
      { period: '2018 - 2025', title: 'Computer Engineering', place: 'Universitat Oberta de Catalunya', description: 'Abschluss in Computer Engineering.' },
      { period: '2024', title: 'Ausbildung der Ausbilder', place: 'ZAW Leipzig', description: 'AdA-Schein, in Deutschland als Teil IV der Meistervorbereitung anerkannt.' },
      { period: '2014 - 2017', title: 'Elektroniker', place: 'Berufsschulzentrum 7 Leipzig', description: 'Duale Ausbildung für Energie- und Gebäudetechnik.' },
    ],
  },
}

const skills = [
  ['Java', 'java.svg'], ['Spring Boot', 'spring.svg'], ['RabbitMQ', 'rabbitmq.svg'], ['Kafka', 'kafka.svg'],
  ['PostgreSQL', 'postgresql.svg'], ['Docker', 'docker.svg'], ['TypeScript', 'typescript.svg'], ['React', 'react.svg'],
  ['MySQL', 'mysql.svg'], ['Git', 'git.svg'], ['REST / SOAP', 'html.svg'], ['Firebase', 'firebase.svg'],
]

const languageNames: Record<Language, string> = { en: 'English', es: 'Español', de: 'Deutsch' }

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    return savedLanguage === 'es' || savedLanguage === 'de' ? savedLanguage : 'en'
  })
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = `${copy.hero.kicker} | Oscar Gonzalez Tur`
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', copy.hero.description)
    localStorage.setItem('portfolio-language', language)
  }, [copy.hero.description, copy.hero.kicker, language])

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">{copy.ui.skip}</a>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label={copy.ui.home}>
          <span className="wordmark-mark">OT</span>
          <span>OSCAR GONZALEZ TUR</span>
        </a>
        <nav className="main-nav" aria-label={copy.ui.navigation}>
          <a href="#profile">{copy.nav.about}</a>
          <a href="#work">{copy.nav.work}</a>
          <a href="#path">{copy.nav.path}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>
        <div className="language-switcher" aria-label={copy.ui.languages}>
          {(['en', 'es', 'de'] as Language[]).map((item) => (
            <button className={language === item ? 'active' : ''} key={item} onClick={() => setLanguage(item)} aria-label={languageNames[item]} aria-pressed={language === item}>
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main className="page-content" id="main-content" tabIndex={-1}>
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{copy.hero.kicker}</p>
            <h1 id="hero-title">{copy.hero.title}</h1>
            <p className="hero-description">{copy.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{copy.hero.primary}<ArrowIcon /></a>
              <a className="button button-quiet" href="#contact">{copy.hero.secondary}</a>
            </div>
            <div className="hero-meta">
              <span><i className="status-dot" />{copy.hero.availability} <strong>{copy.hero.company.split(' / ')[0]}</strong></span>
              <span>{copy.hero.location}</span>
            </div>
          </div>

          <aside className="signal-card" aria-label={copy.ui.currentRole}>
            <div className="signal-card-top"><span>{copy.hero.signal}</span><span className="signal-index">SYS. / 01</span></div>
            <div className="signal-orbit"><span className="orbit-core">OT</span><span className="orbit-ring orbit-ring-one" /><span className="orbit-ring orbit-ring-two" /><span className="orbit-line" /></div>
            <p className="signal-label">{copy.hero.current}</p>
            <h2>{copy.hero.role}</h2>
            <p className="signal-company">{copy.hero.company}</p>
            <div className="signal-bars" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="signal-footer"><span>JAVA 21 / SPRING BOOT</span><span>{copy.ui.online}</span></div>
          </aside>
        </section>

        <section className="profile-section section-grid" id="profile" aria-labelledby="profile-title">
          <div className="section-intro">
            <p className="eyebrow">{copy.about.kicker}</p>
            <h2 id="profile-title">{copy.about.title}</h2>
          </div>
          <div className="profile-detail">
            <p className="large-copy">{copy.about.body}</p>
            <div className="stat-row">
              <div><strong>{copy.about.statOne}</strong><span>{copy.about.statLabels[0]}</span></div>
              <div><strong>{copy.about.statTwo}</strong><span>{copy.about.statLabels[1]}</span></div>
              <div><strong>{copy.about.statThree}</strong><span>{copy.about.statLabels[2]}</span></div>
            </div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-grid">
            <div><p className="eyebrow">{copy.work.kicker}</p><h2 id="work-title">{copy.work.title}</h2></div>
            <p>{copy.work.description}</p>
          </div>
          <div className="project-grid">
            {copy.projects.map((project, index) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.id}>
                <div className={`project-visual project-visual-${project.visualMode}`}>
                  <span className="project-number">0{index + 1}</span>
                  <img src={project.image} alt="" loading="lazy" decoding="async" />
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <details><summary>{copy.work.more}</summary><p>{project.detail}</p></details>
                  <div className="project-bottom"><span className="project-impact">{project.impact}</span>{project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.linkKind === 'repository' ? copy.work.code : copy.work.open} <ArrowIcon /><span className="sr-only"> ({copy.ui.newTab})</span></a> : null}</div>
                </div>
                <div className="stack-line">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section" aria-labelledby="stack-title">
          <div className="stack-heading"><p className="eyebrow">{copy.stack.kicker}</p><h2 id="stack-title">{copy.stack.title}</h2></div>
          <div className="skills-grid">{skills.map(([name, icon]) => <div className="skill" key={name}><img src={asset(`icons/${icon}`)} alt="" /><span>{name}</span></div>)}</div>
        </section>

        <section className="path-section" id="path" aria-labelledby="path-title">
          <div className="section-heading section-grid"><div><p className="eyebrow">{copy.path.kicker}</p><h2 id="path-title">{copy.path.title}</h2></div><p>{copy.path.description}</p></div>
          <div className="path-layout">
            <div className="experience-list"><h3>{copy.path.experience}</h3>{copy.experience.map((item, index) => <article className="experience-item" key={index}><span className="experience-index">0{index + 1}</span><div><time>{item.period}</time><h4>{item.role}</h4><p className="company">{item.company}</p><p>{item.description}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
            <div className="education-list"><h3>{copy.path.education}</h3>{copy.education.map((item, index) => <article className="education-item" key={index}><time>{item.period}</time><h4>{item.title}</h4><p className="company">{item.place}</p><p>{item.description}</p></article>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div><p className="eyebrow">{copy.contact.kicker}</p><h2 id="contact-title">{copy.contact.title}</h2><p className="contact-copy">{copy.contact.description}</p></div>
          <div className="contact-card"><span className="contact-card-label">{copy.ui.openChannel}</span><a className="email-link" href={`mailto:${copy.contact.email}`}>{copy.contact.email}<ArrowIcon /></a><div className="contact-links"><a href="https://www.linkedin.com/in/oscargtur/" target="_blank" rel="noreferrer">{copy.contact.linkedin}<span className="sr-only"> ({copy.ui.newTab})</span></a><a href="https://github.com/Krontur" target="_blank" rel="noreferrer">{copy.contact.github}<span className="sr-only"> ({copy.ui.newTab})</span></a><a className="button button-primary" href={`mailto:${copy.contact.email}`}>{copy.contact.cta} <ArrowIcon /></a></div></div>
        </section>
      </main>

      <footer className="site-footer page-content"><span>© {new Date().getFullYear()} OSCAR GONZALEZ TUR</span><a href="#top">{copy.ui.backToTop} ↑</a></footer>
    </div>
  )
}

export default App
