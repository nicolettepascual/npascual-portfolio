import LandingContainer from "@/components/Home/LandingContainer";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <>
      <LandingContainer />
      <About />
      <Works />
      <Skills />
      <Experience />
    </>
  );
}
