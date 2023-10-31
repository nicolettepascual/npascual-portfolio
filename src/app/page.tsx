"use client";
import LandingContainer from "@/components/Home/LandingContainer";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Home/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingContainer />
      <About />
      <Works />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
