import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, image, link, description, tags }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <a href={link} target="_blank" rel="noreferrer" className="project-card__link">
        <div className="project-card__image-wrap">
          <motion.img
            src={image}
            alt={title}
            className="project-card__image"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
          <div className="project-card__overlay">
            <span className="project-card__cta">View Project →</span>
          </div>
        </div>
        <div className="project-card__body">
          <h3 className="project-card__title">{title}</h3>
          {description && <p className="project-card__desc">{description}</p>}
          {tags && (
            <div className="project-card__tags">
              {tags.map((tag) => (
                <span key={tag} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </motion.article>
  );
}
