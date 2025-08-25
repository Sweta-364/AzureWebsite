import React, { useState } from 'react';
import { WavyBackground } from './WavyBackground';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

export default function About() {
  const [active, setActive] = useState(null);

  return (
    <WavyBackground containerClassName="about-section" blur={18} speed="fast" waveOpacity={0.45}>
      <section id="about" className="relative w-full flex flex-col items-center justify-center">
        <h2 className="about-title">About the Event</h2>
        <div className="about-cards">
          {cards.map((card, i) => {
            const isActive = active === i;
            return (
              <motion.div
                className={`about-card${isActive ? ' active' : ''}`}
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                style={{ zIndex: isActive ? 10 : 1 }}
              >
                <motion.div
                  className="about-card-inner"
                  animate={isActive ? { rotateY: 180 } : { rotateY: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  onClick={() => setActive(isActive ? null : i)}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div className="about-card-front" exit={{ opacity: 0 }}>
                        <div className="about-icon">{card.icon}</div>
                        <div className="about-card-title">{card.title}</div>
                        <div className="about-card-desc">{card.desc}</div>
                      </motion.div>
                    )}
                    {isActive && (
                      <motion.div className="about-card-back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <button className="close-btn" onClick={e => { e.stopPropagation(); setActive(null); }} aria-label="Close">&#10005;</button>
                        <div className="about-card-back-content">{card.backText}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </WavyBackground>
  );
}

const cards = [
  { title: 'Session 1', icon: '', desc: '', backText: 'HELLO' },
  { title: 'Session 2', icon: '', desc: '', backText: 'GHJDV' },
  { title: 'Session 3', icon: '', desc: '', backText: 'WELCOME!' },
  { title: 'Session 4', icon: '', desc: '', backText: 'ENJOY!' }
];
