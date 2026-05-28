import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const skillGroups = [
  {
    label: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React.js', 'Node.js', 'Express.js', 'jQuery', 'React Native'],
  },
  {
    label: '3D & Animation',
    items: ['Three.js', 'Unity', 'HitFilm Express'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB', 'RESTful API Integration'],
  },
  {
    label: 'Dev Tools',
    items: ['Git & GitHub', 'Progressive Web Apps', 'Raspberry Pi', 'Agile / SDLC', 'Linux'],
  },
  {
    label: 'Design & CAD',
    items: ['Figma', 'AutoCAD', 'Autodesk Inventor'],
  },
];

const experience = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Georgia Tech Coding Bootcamp',
    location: 'Remote',
    period: '2022 – 2023',
    bullets: [
      'Built and deployed multiple full-stack apps: React.js front ends, Node.js/Express.js REST APIs, and MySQL/MongoDB backends.',
      'Developed dynamic, data-driven interfaces that update in real time — a core pattern in HMI and live-sensor dashboards.',
      'Applied Three.js to render interactive 3D graphics in the browser, exploring environments relevant to robotics UI.',
      'Practiced Git version control, Agile sprints, and technical documentation throughout the project lifecycle.',
    ],
  },
  {
    role: 'Package Handler',
    company: 'FedEx Ground',
    location: 'Norcross, GA',
    period: 'May 2023 – Oct 2024',
    bullets: [
      'Operated scanning and inventory-tracking systems in a fast-paced, high-accuracy environment.',
      'Reinforced data-integrity habits and real-time system monitoring under production pressure.',
    ],
  },
  {
    role: 'Math Tutor',
    company: 'Mathnasium',
    location: 'Lilburn / Cobb, GA',
    period: 'Jan 2018 – Mar 2022',
    bullets: [
      'Translated complex technical subjects into clear, step-by-step instruction for diverse learners.',
      'Managed individual progress tracking and parent reporting over 4+ years.',
    ],
  },
  {
    role: 'Website Designer – Internship',
    company: 'Trickum Middle School STEM Program',
    location: 'Lilburn, GA',
    period: 'Sep 2017 – Apr 2018',
    bullets: [
      'Owned the full lifecycle of a public-facing web application — UX design through deployment — across 150+ hours.',
      'Designed content to communicate technical concepts clearly to a non-technical audience.',
    ],
  },
  {
    role: 'Operations & QA Intern',
    company: 'Everel America',
    location: 'Buford, GA',
    period: 'Jan 2017 – May 2017',
    bullets: [
      'Diagnosed hardware malfunctions in appliance systems and built defect-detection workflows to identify failure patterns.',
      'Produced process documentation that improved warehouse-level quality control.',
    ],
  },
];

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'Kennesaw State University',
    period: 'In Progress',
  },
  {
    degree: 'Full-Stack Web Development Certificate',
    school: 'Georgia Tech Coding Bootcamp',
    period: '2023',
  },
  {
    degree: 'Diploma — Science & Technology Concentration',
    school: 'Gwinnett School of Mathematics, Science and Technology',
    period: '2018',
  },
];

export default function About() {
  const [openExp, setOpenExp] = useState(0);

  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <section className="about-page">

        {/* ── Bio ── */}
        <div className="about__grid">
          <div className="about__left">
            <ScrollReveal>
              <span className="section-label">About</span>
              <h2 className="section-title">Who I Am</h2>
              <p className="about__bio">
                Full-stack developer and <strong>Georgia Tech Bootcamp graduate</strong> with
                production experience in React.js, Node.js, Express.js, JavaScript, MySQL,
                and MongoDB. Currently pursuing a B.S. in Computer Science at Kennesaw State
                University.
              </p>
              <p className="about__bio">
                I have hands-on exposure to 3D graphics through Three.js and Unity, and a
                strong foundation in building interactive, data-driven interfaces. I'm eager
                to grow into <strong>HMI and robotics UI development</strong> — bringing a
                detail-oriented, self-starting approach to mission-critical operator
                interfaces.
              </p>
              <div className="about__meta">
                <span>📍 Grayson, GA · Open to relocation (Rockville, MD)</span>
                <span>📞 (678) 879-2208</span>
              </div>
              <div className="about__contact">
                <a href="mailto:josealan2340@gmail.com" className="btn btn--primary">
                  Get In Touch
                </a>
                <a
                  href="https://github.com/Alanjose23"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  GitHub
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Skill Groups ── */}
          <div className="about__right">
            <ScrollReveal delay={0.15}>
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skill-groups">
                {skillGroups.map(({ label, items }, gi) => (
                  <motion.div
                    key={label}
                    className="skill-group"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.07 }}
                  >
                    <p className="skill-group__label">{label}</p>
                    <div className="skill-group__badges">
                      {items.map((item, ii) => (
                        <motion.span
                          key={item}
                          className="badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: gi * 0.07 + ii * 0.04 }}
                          whileHover={{ scale: 1.08, y: -2 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Experience ── */}
        <ScrollReveal delay={0.05}>
          <div className="timeline-section">
            <span className="section-label">Career</span>
            <h3 className="section-title" style={{ marginBottom: '2rem' }}>Experience</h3>
            <div className="timeline">
              {experience.map((exp, i) => (
                <div key={exp.role + exp.company} className="timeline__item">
                  <div className="timeline__marker">
                    <motion.div
                      className="timeline__dot"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, type: 'spring', stiffness: 400 }}
                    />
                    {i < experience.length - 1 && <div className="timeline__line" />}
                  </div>
                  <div className="timeline__body">
                    <button
                      className={`timeline__header${openExp === i ? ' open' : ''}`}
                      onClick={() => setOpenExp(openExp === i ? -1 : i)}
                    >
                      <div className="timeline__title-group">
                        <span className="timeline__role">{exp.role}</span>
                        <span className="timeline__company">
                          {exp.company} · {exp.location}
                        </span>
                      </div>
                      <span className="timeline__period">{exp.period}</span>
                      <motion.span
                        className="timeline__chevron"
                        animate={{ rotate: openExp === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▾
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openExp === i && (
                        <motion.ul
                          className="timeline__bullets"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          {exp.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Education ── */}
        <ScrollReveal delay={0.05}>
          <div className="education-section">
            <span className="section-label">Education</span>
            <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Credentials</h3>
            <div className="edu-grid">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.degree}
                  className="edu-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="edu-card__period">{ed.period}</span>
                  <h4 className="edu-card__degree">{ed.degree}</h4>
                  <p className="edu-card__school">{ed.school}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </section>
    </motion.main>
  );
}
