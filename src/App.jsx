import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Register from "./components/Register";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <WelcomeScreen show={showWelcome} onFinish={() => setShowWelcome(false)} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 40 : 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Register />
        <Footer />
      </motion.div>
    </>
  );
}
