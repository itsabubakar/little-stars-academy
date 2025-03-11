"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative flex h-[85vh]  items-center justify-center overflow-hidden bg-[url('/images/players/IMG-20250210-WA0030.jpg')] bg-cover bg-[50%_10%] bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative flex flex-col items-center justify-center gap-10 px-5 text-center text-light md:px-14 lg:px-40">
        <p className="text-lg lg:text-4xl">Introducing</p>
        <h3 className="text-4xl md:text-3xl lg:text-[72px]">Little Stars FC</h3>
        <p className="text-lg lg:text-3xl">
          Discovering and developing young football talent
        </p>
      </div>
    </section>
  );
};

export default Hero;
