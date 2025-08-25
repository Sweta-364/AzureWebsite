import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./Hero.css";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial fade of overlay/stars
      tl.fromTo(
        ".overlay",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.inOut" }
      );

      // Heading cinematic zoom
      tl.fromTo(
        headingRef.current,
        { y: 120, opacity: 0, scale: 0.7, rotateX: 30, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 2.2,
          ease: "expo.out"
        },
        "-=1"
      );

      // Subtext typing effect
      tl.to(subRef.current, {
        text: "Discover the cloud. Build the future.",
        duration: 3,
        delay: 0.5,
        ease: "none"
      });

      // Heading continuous glow
      gsap.to(headingRef.current, {
        textShadow:
          "0 0 20px rgba(96,165,250,0.9), 0 0 40px rgba(59,130,246,0.6)",
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut"
      });

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
        <h1 ref={headingRef}>
          Microsoft Azure <span>Xplore 2025</span>
        </h1>
        <p ref={subRef}></p>
        <img
          src="/azure-icon-svgrepo-com.svg"
          alt="Clippy"
          className="clippy-img float-hero"
          style={{
            display: "block",
            margin: "2rem auto 0 auto",
            width: "min(30rem, 80vw)",
            maxWidth: "100%",
            filter: "drop-shadow(0 0 16px #2563eb)"
          }}
        />
      </div>
    </section>
  );
}
