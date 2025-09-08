import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Soft overlay fade-in only
      gsap.fromTo(
        ".overlay",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.inOut" }
      );

      // Floating particles animation
      particlesRef.current.forEach((p) => {
        gsap.to(p, {
          x: () => gsap.utils.random(-100, 100),
          y: () => gsap.utils.random(-100, 100),
          duration: () => gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="overlay"></div>
      <div className="starfield"></div>

      {/* Glowing particles
      <div className="particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            ref={(el) => (particlesRef.current[i] = el)}
          ></div>
        ))}
      </div> */}
      {/* Glowing particles */}
<div className="particles">
  {Array.from({ length: 15 }).map((_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      ref={(el) => (particlesRef.current[i] = el)}
    ></div>
  ))}
</div>


      <div className="hero-content animated-border">
        <h1>
          Microsoft Azure <span>Xplore 2025</span>
        </h1>
        <p>Discover the cloud. Build the future.</p>
        <img
          src="/azure-icon-svgrepo-com.svg"
          alt="Azure"
          className="clippy-img float-hero azure-logo"
        />
      </div>
    </section>
  );
}
