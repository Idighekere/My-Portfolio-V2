import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";

export default function MyApp() {
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

