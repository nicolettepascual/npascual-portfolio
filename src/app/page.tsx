import LandingContainer from "@/components/Home/LandingContainer";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <LandingContainer />
      <About />
      <Works />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
