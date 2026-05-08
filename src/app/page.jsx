"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import i18n from "../i18n/i18n";

export default function Page() {
  useEffect(() => {
    // Sinkronisasi bahasa dari localStorage SETELAH hydration agar tidak error
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== "id") {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-soft pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px]"></div>
      </div>

      <main className="scroll-smooth flex flex-col">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
