import React, { useState, useEffect } from "react";
import "./Register.css";

export default function Register() {
  const [stars, setStars] = useState([]);

  // Generate stars once
  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 3 + 1}px`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="register-section" id='register1'>
      {/* Cosmic Background */}
      <div className="cosmic-bg">
        {stars.map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="register-content">
        <div className="register-cta">
          <img
            src="/clippy.png"
            alt="Clippy"
            className="clippy-register"
            style={{ width: '500px', height: 'auto', filter: 'drop-shadow(0 0 8px #2563eb)' }}
          />
          <a
            className="register-now-btn"
            href="https://unstop.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
