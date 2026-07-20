import { ThemeProvider } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ContactForm from './contactform'
import LanguageSelector from './languageselector'
import { theme } from '../theme/theme'
import '../i18n'
import './commanddeckportfolio.css'

const skills = [
  { name: 'Spring Boot', icon: '/icons/spring.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'RabbitMQ', icon: '/icons/rabbitmq.svg' },
  { name: 'Kafka', icon: '/icons/kafka.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Material UI', icon: '/icons/materialui.svg' },
  { name: 'Firebase', icon: '/icons/firebase.svg' },
]

export default function CommandDeckPortfolio() {
  const { t } = useTranslation()

  const experience = [
    {
      status: 'CURRENT',
      period: `${t('january-2026')} - ${t('today')}`,
      role: t('backend-developer'),
      company: 'Seresco',
      summary: t('backend-developer-seresco-description'),
      tags: ['Java', 'Spring', 'SMS', 'RabbitMQ', 'Kafka', 'SOAP/REST', 'Hibernate/JPA'],
    },
    {
      status: 'CRITICAL OPS',
      period: '2021 - 2025',
      role: t('project-coordinator-and-technical-manager-in-electricity-supply-and-networks'),
      company: 'Flughafen Leipzig/Halle GmbH',
      summary: t('project-coordinator-and-technical-manager-in-electricity-supply-and-networks-description'),
      tags: ['24/7', 'Infrastructure', 'Leadership', 'Automation'],
    },
    {
      status: 'FIELD SYSTEMS',
      period: '2017 - 2021',
      role: t('technical-supervisor-in-electrotechnics'),
      company: 'Elektromontagen Leipzig GmbH',
      summary: t('technical-supervisor-in-electrotechnics-description'),
      tags: ['Planning', 'Execution', 'Teams'],
    },
    {
      status: 'DUAL TRAINING',
      period: '2014 - 2017',
      role: t('dual-professional-training'),
      company: 'Elektromontagen Leipzig GmbH',
      summary: t('dual-professional-training-description'),
      tags: ['Electrical Systems', 'Maintenance', 'Germany'],
    },
    {
      status: 'SERVICE',
      period: '2013 - 2014',
      role: t('home-assistance-installation-technician'),
      company: 'Cruz Roja',
      summary: t('home-assistance-installation-technician-description'),
      tags: ['Devices', 'Configuration', 'Support'],
    },
    {
      status: 'IT SUPPORT',
      period: '2008 - 2013',
      role: t('technician-in-computer-science'),
      company: 'Informática Tur',
      summary: t('technician-in-computer-science-description'),
      tags: ['IT Support', 'Remote Assistance', 'Consulting'],
    },
    {
      status: 'OPERATIONS',
      period: '2001 - 2008',
      role: t('carpenter-official-2nd-class'),
      company: 'Maderas Servera',
      summary: t('carpenter-official-2nd-class-description'),
      tags: ['Sales', 'Orders', 'Operations'],
    },
  ]

  const education = [
    {
      period: '2024',
      title: t('trainer-course-for-dual-vocational-training'),
      company: t('zentrum-fur-aus-und-weiterbildung-leipzig'),
      description: t('trainer-course-description'),
    },
    {
      period: '2018 - 2025',
      title: t('computer-engineering'),
      company: t('universitat-oberta-de-catalunya'),
      description: t('degree-in-computer-engineering'),
    },
    {
      period: '2014 - 2017',
      title: t('technician-in-electrotechnics'),
      company: t('berufsschulzentrum-7-leipzig'),
      description: t('dual-training-in-electrotechnics'),
    },
    {
      period: '2014 - 2017',
      title: t('german-courses-up-to-level-c1'),
      company: t('lbw-aus-und-fortbildungsgesellschaft-mbh'),
      description: t('from-level-a2-to-level-c1'),
    },
    {
      period: '2014',
      title: t('german-course'),
      company: 'Die Akademie',
      description: t('from-level-a1-to-level-a2'),
    },
  ]

  const projects = [
    {
      title: t('swagger-json-to-markdown'),
      description: t('swagger-json-to-markdown-description'),
      detail: t('swagger-json-to-markdown-detailed-description'),
      image: '/icons/typescript.svg',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7461168116719312897/',
      linkLabel: 'LinkedIn',
      impact: 'OpenAPI -> Markdown',
      stack: 'TypeScript · Obsidian · OpenAPI · Markdown',
    },
    {
      title: t('software-ams-update'),
      description: t('software-ams-update-description'),
      detail: t('software-ams-update-detailed-description'),
      image: '/images/projectAMS.png',
      link: null,
      linkLabel: null,
      impact: '+500.000 EUR',
      stack: 'Java 11 · ActiveMQ · Oracle AQ · Legacy Migration',
    },
    {
      title: t('tfg-backend-energy-tracker'),
      description: t('tfg-backend-energy-tracker-description'),
      detail: t('tfg-backend-energy-tracker-detailed-description'),
      image: '/images/projectEnergyTracker.png',
      link: 'https://github.com/Krontur/energytracker.git',
      linkLabel: 'GitHub',
      impact: '7 min -> 30 s',
      stack: 'Java · Spring Boot · RabbitMQ · PostgreSQL',
    },
    {
      title: t('tfg-frontend-energy-tracker'),
      description: t('tfg-frontend-energy-tracker-description'),
      detail: t('tfg-frontend-energy-tracker-detailed-description'),
      image: '/images/projectFrontendEnergyTracker.png',
      link: 'https://github.com/Krontur/energytracker_frontend.git',
      linkLabel: 'GitHub',
      impact: 'Energy UI',
      stack: 'React · APIs REST · Responsive UI',
    },
    {
      title: t('webapp-to-generate-orders'),
      description: t('webapp-to-generate-orders-description'),
      detail: t('webapp-to-generate-orders-detailed-description'),
      image: '/images/projectOrders.png',
      link: 'https://github.com/Krontur/warehouse.git',
      linkLabel: 'GitHub',
      impact: 'Order flow',
      stack: 'React · Firebase · NoSQL · RBAC',
    },
    {
      title: t('portfolio-cv-tur'),
      description: t('portfolio-cv-tur-description'),
      detail: t('portfolio-cv-tur-detailed-description'),
      image: '/images/portfoliotur.png',
      link: 'https://github.com/Krontur/portfolio-tur.git',
      linkLabel: 'GitHub',
      impact: 'Professional profile',
      stack: 'React · TypeScript · Material UI · i18n',
    },
  ]

  const metrics = [
    { value: 'Java/Spring', label: 'backend productivo' },
    { value: '24/7', label: 'sistemas criticos' },
    { value: 'SMS', label: 'alto volumen' },
    { value: '~300%', label: 'procesamiento SMS legacy' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <main className="deck-shell">
        <div className="deck-grid-backdrop" />

        <header className="deck-nav">
          <a className="deck-brand" href="#inicio" aria-label="Oscar Gonzalez Tur">
            GTO<span> / Backend Systems</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#sobre-mi">{t('about-me')}</a>
            <a href="#habilidades-tecnicas">Stack</a>
            <a href="#proyectos">{t('projects')}</a>
            <a href="#experiencia-laboral">{t('experience')}</a>
            <a href="#educacion">{t('education')}</a>
            <a href="#contacto">{t('contact')}</a>
          </nav>
          <LanguageSelector />
        </header>

        <a className="deck-scroll-top" href="#inicio" aria-label="Volver al inicio">
          ↑
        </a>

        <section className="deck-hero" id="inicio">
          <div className="deck-hero-copy">
            <p className="deck-eyebrow">Engineering Command Deck</p>
            <h1>Backend Developer · Java/Spring · Critical Systems</h1>
            <p className="deck-hero-lead">
              {t('computer-engineer-and-electrotechnical-technician')}
            </p>
            <div className="deck-actions">
              <a className="deck-primary-action" href="#proyectos">{t('projects')}</a>
              <a className="deck-secondary-action" href="#experiencia-laboral">{t('experience')}</a>
            </div>
          </div>

          <aside className="deck-impact-card" aria-label="Current backend role and impact">
            <div className="deck-impact-header">
              <span className="deck-pulse" />
              CURRENT ROLE
            </div>
            <div className="deck-current-role">
              <p>{`${t('january-2026')} - ${t('today')}`}</p>
              <h2>{t('backend-developer')}</h2>
              <strong>Seresco</strong>
            </div>
            <p className="deck-impact-summary">
              Java/Spring backend for high-volume SMS messaging platforms, external integrations,
              asynchronous processing and performance-focused persistence.
            </p>
            <div className="deck-impact-stack">
              <span>Java/Spring</span>
              <span>SMS</span>
              <span>SOAP/REST</span>
              <span>RabbitMQ</span>
              <span>Kafka</span>
              <span>Hibernate/JPA</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>
            <dl>
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="deck-split-section" id="sobre-mi">
          <div>
            <p className="deck-section-kicker">Perfil</p>
            <h2>{t('about-me')}</h2>
          </div>
          <div className="deck-glass-panel deck-about-copy">
            {t('about-me-description').split('\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="deck-stack-section" id="habilidades-tecnicas">
          <div className="deck-section-heading-row">
            <div>
              <p className="deck-section-kicker">Stack</p>
              <h2>{t('technical-skills')}</h2>
            </div>
            <p>{t('these-are-some-of-the-technologies-and-tools-i-have-used-in-my-projects')}</p>
          </div>
          <div className="deck-skill-grid">
            {skills.map((skill) => (
              <article className="deck-skill-card" key={skill.name}>
                {skill.icon ? <img src={skill.icon} alt="" /> : <span className="deck-skill-fallback">K</span>}
                <span>{skill.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="deck-project-section" id="proyectos">
          <div className="deck-section-heading-row">
            <div>
              <p className="deck-section-kicker">Case studies</p>
              <h2>{t('projects')}</h2>
            </div>
            <p>{t('here-you-can-see-some-of-my-projects')}</p>
          </div>
          <div className="deck-project-grid">
            {projects.map((project) => (
              <article className="deck-project-card" key={project.title}>
                <span className="deck-corner" />
                <div className="deck-project-media">
                  <img src={project.image} alt="" />
                </div>
                <div className="deck-project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <details>
                    <summary>{t('button-details')}</summary>
                    <p>{project.detail}</p>
                  </details>
                </div>
                <footer>
                  <span>{project.impact}</span>
                  <small>{project.stack}</small>
                  {project.link && project.linkLabel ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel}
                    </a>
                  ) : null}
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="deck-timeline-section" id="experiencia-laboral">
          <p className="deck-section-kicker">Timeline</p>
          <h2>{t('experience')}</h2>
          <p className="deck-section-lead">{t('here-you-can-see-my-work-experience')}</p>
          <div className="deck-timeline-grid">
            {experience.map((item) => (
              <article className="deck-timeline-card" key={`${item.company}-${item.period}`}>
                <div className="deck-timeline-node" />
                <span className="deck-status-chip">{item.status}</span>
                <time>{item.period}</time>
                <h3>{item.role}</h3>
                <p className="deck-company">{item.company}</p>
                <p>{item.summary}</p>
                <div className="deck-mini-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="deck-education-section" id="educacion">
          <div className="deck-section-heading-row">
            <div>
              <p className="deck-section-kicker">Education</p>
              <h2>{t('education')}</h2>
            </div>
            <p>{t('here-you-can-see-my-educational-trajectory')}</p>
          </div>
          <div className="deck-education-grid">
            {education.map((item) => (
              <article className="deck-education-card" key={`${item.period}-${item.title}`}>
                <time>{item.period}</time>
                <h3>{item.title}</h3>
                <p className="deck-company">{item.company}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="deck-contact-section" id="contacto">
          <div className="deck-contact-copy">
            <p className="deck-section-kicker">Contact</p>
            <h2>{t('contact')}</h2>
            <p>{t('if-you-would-like-to-get-in-touch')}</p>
            <div className="deck-contact-links">
              <a href="mailto:oscar.gtur@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/oscargtur/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/krontur" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="deck-contact-panel">
            <ContactForm />
          </div>
        </section>

        <footer className="deck-footer">
          © {new Date().getFullYear()} Oscar González Tur. {t('all-rights-reserved')}
        </footer>
      </main>
    </ThemeProvider>
  )
}
