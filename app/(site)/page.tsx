import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Contact from "@/components/Contact";
import ReactPlayer from "react-player";

export const metadata: Metadata = {
  title: "Little Stars Football Academy",

  // other metadata
  description: "This is Little Stars Football Academy",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FunFact />
      <Contact />
    </main>
  );
}
