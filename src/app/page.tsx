import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";

export default function MyApp() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
    </main>

  );
}

