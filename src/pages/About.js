import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const skills = [
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js / Express', level: 70 },
  { name: 'HTML & CSS', level: 85 },
  { name: 'MySQL', level: 65 },
  { name: 'REST APIs', level: 72 },
];

const techBadges = [
  'JavaScript', 'React', 'Node.js', 'Express', 'MySQL',
  'HTML5', 'CSS3', 'Bootstrap', 'Git', 'REST APIs',
  'PWA', 'Webpack', 'IndexedDB', 'Heroku',
];

export default function About() {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <section className="about-page">
        <div className="about__grid">
          <div className="about__left">
            <ScrollReveal>
              <span className="section-label">About</span>
              <h2 className="section-title">Who I Am</h2>
              <p className="about__bio">
                Hi, I'm <strong>Alan Jose</strong> — a full-stack developer with a passion
                for building intuitive web experiences. My journey started at 14, when a
                substitute teacher introduced me to coding, and I've been hooked ever since.
              </p>
              <p className="about__bio">
                I specialize in building modern JavaScript applications and love turning
                complex problems into elegant, user-friendly solutions. I'm always looking
                to grow — in code and in life.
              </p>
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

          <div className="about__right">
            <ScrollReveal delay={0.15}>
              <h3 className="skills-title">Skills</h3>
              <div className="skills-list">
                {skills.map(({ name, level }, i) => (
                  <div key={name} className="skill-item">
                    <div className="skill-header">
                      <span>{name}</span>
                      <span>{level}%</span>
                    </div>
                    <div className="skill-track">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.09, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="tech-badges">
            <h3 className="skills-title">Technologies</h3>
            <div className="badges-grid">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="badge"
                  initial={{ opacity: 0, scale: 0.75 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, ease: 'easeOut' }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </motion.main>
  );
}
