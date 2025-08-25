import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

export default function WelcomeScreen({ show, onFinish }) {
  const textRef = useRef(null);
  const starsRef = useRef(null);
  const nebulaRef = useRef(null);

  useEffect(() => {
    if (show) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ onComplete: onFinish });

        // Starfield drift + twinkle
        gsap.to(starsRef.current, {
          backgroundPosition: "200% 200%",
          duration: 80,
          repeat: -1,
          ease: "linear",
        });

        gsap.to(starsRef.current, {
          opacity: 0.85,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        // Nebula shimmer
        gsap.to(nebulaRef.current, {
          backgroundPosition: "150% 150%",
          duration: 40,
          repeat: -1,
          ease: "linear",
        });

        // Text entrance → glow → faster exit
        tl.from(textRef.current.querySelectorAll("span"), {
          opacity: 0,
          scale: 3,
          rotateX: 90,
          z: -800,
          filter: "blur(15px)",
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(2)",
        })
          .to(textRef.current, {
            textShadow:
              "0 0 30px #00cfff, 0 0 70px #6a11cb, 0 0 100px #ff4ecd",
            duration: 0.4,
            ease: "sine.inOut",
          })
          .to(
            textRef.current,
            {
              scale: 2.5,
              opacity: 0,
              filter: "blur(15px)",
              duration: 0.8,
              ease: "power2.inOut",
            },
            "+=0.4"
          );
      });
      return () => ctx.revert();
    }
  }, [show, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={starsRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(circle at 50% 50%, #000 0%, #181a20 40%, #23243a 70%, #000 100%)",
            backgroundImage:
              "linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(24,26,32,0.7) 100%), url('https://www.transparenttextures.com/patterns/stardust.png')",
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* Animated stars */}
          <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}>
            {[...Array(18)].map((_, i) => (
              <div key={i} style={{
                position: "absolute",
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                borderRadius: "50%",
                background: "#fff",
                opacity: 0.7,
                filter: "drop-shadow(0 0 8px #fff)",
                animation: `starTwinkle 2.5s ${0.2 * i}s infinite alternate`,
              }} />
            ))}
          </div>

          {/* Nebula overlay */}
          <div
            ref={nebulaRef}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 30%, rgba(106,17,203,0.22), transparent 70%), radial-gradient(circle at 80% 70%, rgba(0,207,255,0.18), transparent 70%), radial-gradient(circle at 50% 90%, rgba(255,76,205,0.13), transparent 70%)",
              backgroundSize: "200% 200%",
              mixBlendMode: "screen",
              filter: "blur(40px)",
              opacity: 0.6,
            }}
          />

          {/* Glowing border */}
          <div style={{
            position: "absolute",
            inset: 0,
            border: "3px solid rgba(255,255,255,0.12)",
            borderRadius: "32px",
            boxShadow: "0 0 60px 10px #fff, 0 0 120px 30px #00cfff",
            pointerEvents: "none",
            zIndex: 1,
            animation: "borderGlow 3s infinite alternate",
          }} />

          {/* Warp pulse ring */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0.7 }}
            animate={{
              scale: [0.8, 2.5],
              opacity: [0.5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeOut",
            }}
            exit={{
              scale: 4,
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.18)",
              boxShadow: "0 0 80px 20px rgba(0,0,0,0.7)",
              filter: "blur(8px)",
              zIndex: 2,
            }}
          />

          {/* Title */}
          <h1
            ref={textRef}
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 8vw, 5rem)",
              letterSpacing: "4px",
              color: "#fff",
              textAlign: "center",
              margin: 0,
              textTransform: "uppercase",
              textShadow:
                "0 0 5px #00cfff, 0 0 30px #6a11cb, 0 0 60px #ff4ecd",
              perspective: "1200px",
              zIndex: 3,
            }}
          >
            {"Azure Xplore 2025".split("").map((char, i) => (
              <span key={i} style={{ display: "inline-block" }}>
                {char}
              </span>
            ))}
          </h1>

          {/* Subtitle fade-in/fade-out */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            style={{
              position: "absolute",
              bottom: "8vh",
              left: 0,
              width: "100%",
              textAlign: "center",
              fontSize: "clamp(1.1rem, 3vw, 2.2rem)",
              color: "#e0e7ff",
              fontWeight: 500,
              letterSpacing: "2px",
              textShadow: "0 0 12px #23243a, 0 0 24px #00cfff",
              zIndex: 4,
            }}
          >
            Welcome to the future of cloud exploration
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
