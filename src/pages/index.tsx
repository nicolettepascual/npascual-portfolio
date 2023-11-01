import LandingContainer from "@/components/Home/LandingContainer";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Home/Navbar";

import { Roboto, Just_Another_Hand } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});

const justAnotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwriting",
});

export default function Home() {
  return (
    <div className={`${roboto.variable} ${justAnotherHand.variable}`}>
      <Navbar />
      <LandingContainer />
      <About />
      <Works />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
