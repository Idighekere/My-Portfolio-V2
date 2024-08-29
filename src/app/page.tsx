"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function MyApp() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <ContactMe />
    </main>

  );
}

