import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function WelcomeScreen({ show, onFinish }) {
  const textRef = useRef(null);
  const starsRef = useRef(null);
  const nebulaRef = useRef(null);

  useEffect(() => {
    if (show) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ onComplete: onFinish });

        // 🌌 Slow starfield drift + twinkle
        gsap.to(starsRef.current, {
          backgroundPosition: "400% 400%",
          duration: 180,
          repeat: -1,
          ease: "linear",
        });

        gsap.to(starsRef.current, {
          opacity: 0.9,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        // 🌠 Nebula shimmer (different drift for parallax)
        gsap.to(nebulaRef.current, {
          backgroundPosition: "200% 200%",
          duration: 120,
          repeat: -1,
          ease: "linear",
        });

        // ✨ Title animation sequence
        tl.from(textRef.current.querySelectorAll("span"), {
          opacity: 0,
          scale: 2.6,
          rotateX: 75,
          z: -600,
          filter: "blur(18px)",
          stagger: 0.06,
          duration: 0.45,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        })
          .to(textRef.current, {
            textShadow:
              "0 0 40px #00cfff, 0 0 90px #370a68ff, 0 0 140px #000000ff",
            duration: 0.6,
            ease: "sine.inOut",
          })
          .to(
            textRef.current,
            {
              scale: 2,
              opacity: 0,
              filter: "blur(25px)",
              duration: 1.1,
              ease: "cubic-bezier(0.7, 0, 0.84, 0)",
            },
            "+=0.5"
          );
      });
      return () => ctx.revert();
    }
  }, [show, onFinish]);

  if (!show) return null;

  return (
    <div
      ref={starsRef}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at 50% 50%, #000 0%, #0a0a0f 40%, #181a20 70%, #000 100%)",
        backgroundImage:
          "linear-gradient(120deg, rgba(0,0,0,0.92) 0%, rgba(10,20,40,0.85) 100%), url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundBlendMode: "overlay",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "38px",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* 🌟 Dynamic twinkling stars */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
              borderRadius: "50%",
              background:
                "linear-gradient(120deg, #60a5fa 0%, #2563eb 100%)",
              opacity: 0.7,
              filter: "drop-shadow(0 0 14px #2563eb) blur(0.8px)",
              animation: `starTwinkle 3s ${0.25 * i}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* 🌌 Nebula overlay */}
      <div
        ref={nebulaRef}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 25% 30%, rgba(106,17,203,0.28), transparent 70%), radial-gradient(circle at 75% 70%, rgba(0,207,255,0.22), transparent 70%), radial-gradient(circle at 50% 90%, rgba(37,99,235,0.22), transparent 70%)",
          backgroundSize: "250% 250%",
          mixBlendMode: "screen",
          filter: "blur(70px)",
          opacity: 0.65,
        }}
      />

      {/* 🌐 Glowing border */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "3px solid rgba(37,99,235,0.18)",
          borderRadius: "38px",
          boxShadow: "0 0 90px 25px #2563eb55, 0 0 160px 60px #23243a88",
          pointerEvents: "none",
          zIndex: 1,
          animation: "borderGlow 4s ease-in-out infinite alternate",
        }}
      />

      {/* 🔵 Multiple warp pulse rings */}
      {[0, 0.8].map((delay, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{
            scale: [1, 2.8],
            opacity: [0.4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "2px solid rgba(37,99,235,0.22)",
            boxShadow: "0 0 90px 25px #2563eb, 0 0 140px 45px #23243a",
            filter: "blur(14px)",
            zIndex: 2,
          }}
        />
      ))}

      {/* ✨ Title */}
      <h1
        ref={textRef}
        style={{
          fontWeight: 900,
          fontSize: "clamp(2rem, 8vw, 5.5rem)",
          letterSpacing: "6px",
          color: "#fff",
          textAlign: "center",
          margin: 0,
          textTransform: "uppercase",
          textShadow:
            "0 0 2px #00cfffff, 0 0 40px #1e043aff, 0 0 80px #000000ff",
          perspective: "1200px",
          zIndex: 3,
        }}
      >
        {"AzureXplore".split("").map((char, i) => (
          <span key={i} style={{ display: "inline-block" }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
