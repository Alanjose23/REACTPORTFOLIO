import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    title: 'Sudophus',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    link: '#',
    description: 'A development tracking tool built for developers — log progress, visualize velocity, and stay accountable across every project in your pipeline.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
  },
  {
    title: 'Firstbase',
    image: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&auto=format&fit=crop',
    link: '#',
    description: 'A modern dating platform focused on meaningful connections — with real-time chat, smart match suggestions, and profile-first discovery.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      <section className="projects-page">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Two projects I've built — a dev productivity tool and a social platform.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}
