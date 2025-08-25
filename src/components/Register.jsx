import React, { useState, useEffect } from "react";
import "./Register.css";

export default function Register() {
  const [stars, setStars] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
        {!showForm && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', marginTop: '1.5rem' }}>
            <img
              src="/public/clippy.png"
              alt="Clippy"
              className="clippy-register"
              style={{ width: '500px', height: 'auto', filter: 'drop-shadow(0 0 8px #2563eb)' }}
            />
            <button
              className="register-now-btn"
              onClick={() => setShowForm(true)}
            >
              Register Now
            </button>
          </div>
        )}

        {showForm && (
          <div className="register-card">
            <h2 className="register-title">Join the Revolution</h2>
            <form className="register-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Organization/Institution" required />
              <input type="tel" placeholder="Phone Number" required />
              <button type="submit" className="register-btn">
                Secure Your Spot
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
