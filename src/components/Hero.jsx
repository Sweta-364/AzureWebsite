import './Hero.css';
import React from 'react';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section id="intro" className="hero-section">
      {/* <div className="hero-bg">
        Animated clouds
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
        <div className="cloud cloud4" />
        {/* Animated particles */}
        {/* <div className="particles">
          {Array.from({ length: 60 }).map((_, i) => (
            <span key={i} className="particle" />
          ))}
        </div>
      </div> */ }
      <div className="hero-content">
        <motion.h1 className="glowy-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Microsoft Azure Explore 2025
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Discover the cloud. Build the future.
        </motion.p>
      </div>
    </section>
  );
}
