// import React, { useState } from 'react';
// import { WavyBackground } from './WavyBackground';
// import { motion, AnimatePresence } from 'framer-motion';
// import './About.css';

// export default function About() {
//   const [active, setActive] = useState(null);

//   return (
//     <WavyBackground containerClassName="about-section" blur={18} speed="fast" waveOpacity={0.45}>
//       <section id="about" className="relative w-full flex flex-col items-center justify-center">
//         <h2 className="about-title">About the Event</h2>
//         <div className="about-cards">
//           {cards.map((card, i) => {
//             const isActive = active === i;
//             // Alternate left/right class for desktop/laptop
//             const alignmentClass = (i % 2 === 0) ? 'left' : 'right';
//             return (
//               <motion.div
//                 className={`about-card ${alignmentClass}${isActive ? ' active' : ''}`}
//                 key={card.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: i * 0.2 }}
//                 style={{ zIndex: isActive ? 10 : 1 }}
//               >
//                 <motion.div
//                   className="about-card-inner"
//                   animate={isActive ? { rotateY: 180 } : { rotateY: 0 }}
//                   transition={{ type: 'spring', stiffness: 400, damping: 30 }}
//                   onClick={() => setActive(isActive ? null : i)}
//                   style={{ cursor: 'pointer', position: 'relative' }}
//                 >
//                   <AnimatePresence>
//                     {!isActive && (
//                       <motion.div className="about-card-front" exit={{ opacity: 0 }}>
//                         <div className="about-icon">{card.icon}</div>
//                         <div className="about-card-title">{card.title}</div>
//                         <div className="about-card-desc">{card.desc}</div>
//                       </motion.div>
//                     )}
//                     {isActive && (
//                       <motion.div className="about-card-back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                         <button className="close-btn" onClick={e => { e.stopPropagation(); setActive(null); }} aria-label="Close">&#10005;</button>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>
//     </WavyBackground>
//   );
// }

// const cards = [
//   { title: 'Session 1', icon: '', desc: '', backText: 'HEL' },
//   { title: 'Session 2', icon: '', desc: '', backText: 'HOW' },
//   { title: 'Session 3', icon: '', desc: '', backText: 'are you' },
//   { title: 'Session 4', icon: '', desc: '', backText: 'welcome to azure' }
// ];


import React, { useState } from 'react';
import { WavyBackground } from './WavyBackground';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

export default function About() {
  const [active, setActive] = useState(null);

  return (
    <WavyBackground
      containerClassName="about-section"
      blur={18}
      speed="fast"
      waveOpacity={0.45}
    >
      <section
        id="about"
        className="relative w-full flex flex-col items-center justify-center"
        style={{ position: "relative" }}
      >
        <h2 className="about-title">About the Event</h2>

        {/* 🔹 Timeline Line */}
        <svg
          className="about-timeline"
          width="6"
          height="100%"
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        >
          <line
            x1="3"
            y1="0"
            x2="3"
            y2="100%"
            stroke="white"
            strokeWidth="6"
            filter="url(#glow)"
          />
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* 🔹 Cards */}
        <div className="about-cards relative z-10">
          {cards.map((card, i) => {
            const isActive = active === i;
            const alignmentClass = i % 2 === 0 ? "left" : "right";
            return (
              <motion.div
                className={`about-card ${alignmentClass}${
                  isActive ? " active" : ""
                }`}
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
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  onClick={() => setActive(isActive ? null : i)}
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        className="about-card-front"
                        exit={{ opacity: 0 }}
                      >
                        <div className="about-icon">{card.icon}</div>
                        <div className="about-card-title">{card.title}</div>
                        <div className="about-card-desc">{card.desc}</div>
                      </motion.div>
                    )}
                    {isActive && (
                      <motion.div
                        className="about-card-back"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <button
                          className="close-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActive(null);
                          }}
                          aria-label="Close"
                        >
                          &#10005;
                        </button>
                        <p className="back-text">{card.backText}</p>
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
  { title: "Session 1", icon: "", desc: "", backText: "HEL" },
  { title: "Session 2", icon: "", desc: "", backText: "HOW" },
  { title: "Session 3", icon: "", desc: "", backText: "are you" },
  { title: "Session 4", icon: "", desc: "", backText: "welcome to azure" },
];
