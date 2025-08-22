export default function About() {
  return (
    <section id="about">
      <h2>About the Event</h2>
      <div className="about-grid">
        {cards.map((card, i) => (
          <motion.div
            className="about-card"
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.06, boxShadow: '0 0 32px #6a11cb', rotateZ: 2 }}
          >
            <div className="about-icon">{card.icon}</div>
            <div className="about-card-title">{card.title}</div>
            <div className="about-card-desc">{card.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
 
const cards = [
  {
    title: 'Session 1',
    icon: '',
    desc: ''
  },
  {
    title: 'Session 2',
    icon: '',
    desc: ''
  },
  {
    title: 'Session 3',
    icon: '',
    desc: ''
  },
  {
    title: 'Session 4',
    icon: '',
    desc: ''
  }
];

import './About.css';
import { motion } from 'framer-motion';
