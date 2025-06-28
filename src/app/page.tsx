"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@/components/Portfolio2"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="main">
      <Hero />

      <About />

      <Stats />

      <Skills />

      {/* <Resume /> */}

      <Portfolio />

      <Services />

      <Testimonials />

      <Contact />

      <a href="#" className="shadow btn-primary rounded-circle back-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </main>
  );
}
