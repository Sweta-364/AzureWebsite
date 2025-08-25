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
              "radial-gradient(circle at 50% 50%, #0d0d2b 0%, #1e3c72 50%, #000 100%)",
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
            backgroundSize: "cover",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* Nebula overlay */}
          <div
            ref={nebulaRef}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 30%, rgba(106,17,203,0.4), transparent 70%), radial-gradient(circle at 80% 70%, rgba(0,207,255,0.4), transparent 70%), radial-gradient(circle at 50% 90%, rgba(255,76,205,0.3), transparent 70%)",
              backgroundSize: "200% 200%",
              mixBlendMode: "screen",
              filter: "blur(30px)",
              opacity: 0.8,
            }}
          />

          {/* Warp pulse ring */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{
              scale: [0.8, 2.5],
              opacity: [0.6, 0],
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
              border: "2px solid rgba(0,207,255,0.4)",
              filter: "blur(4px)",
              zIndex: 1,
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
              zIndex: 2,
            }}
          >
            {"Azure Xplore 2025".split("").map((char, i) => (
              <span key={i} style={{ display: "inline-block" }}>
                {char}
              </span>
            ))}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
