import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <motion.span whileHover={{ scale: 1.05 }} style={{ display: 'inline-block' }}>
            AJ
          </motion.span>
        </Link>

        <div className="navbar__links">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`navbar__link${isActive ? ' active' : ''}`}
              >
                {label}
                {isActive && (
                  <motion.div
                    className="navbar__active-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href={`mailto:josealan2340@gmail.com?subject=${encodeURIComponent('Opportunity — Let\'s Work Together')}&body=${encodeURIComponent('Hi Alan,\n\nI came across your portfolio and I\'m interested in discussing a potential opportunity with you.\n\nHere\'s a bit about what I have in mind:\n\n[Brief description of the project or role]\n\nWould love to connect at your earliest convenience.\n\nBest regards,\n[Your Name]')}`}
            className="navbar__cta"
          >
            Hire Me
          </a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.div
            className="bar"
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="bar"
            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="bar"
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            {navLinks.map(({ path, label }, i) => (
              <motion.div
                key={path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={path}
                  className={`mobile-link${location.pathname === path ? ' active' : ''}`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.21 }}
            >
              <a
                href={`mailto:josealan2340@gmail.com?subject=${encodeURIComponent('Opportunity — Let\'s Work Together')}&body=${encodeURIComponent('Hi Alan,\n\nI came across your portfolio and I\'m interested in discussing a potential opportunity with you.\n\nHere\'s a bit about what I have in mind:\n\n[Brief description of the project or role]\n\nWould love to connect at your earliest convenience.\n\nBest regards,\n[Your Name]')}`}
                className="mobile-link mobile-link--cta"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
