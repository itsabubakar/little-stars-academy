"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative bg-[50%_10%] bg-[url('/images/players/IMG-20250210-WA0030.jpg')]  overflow-hidden h-[85vh] bg-no-repeat bg-cover flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="flex flex-col gap-10 px-5 md:px-14 lg:px-40 text-center justify-center items-center text-light relative">
            <p className="text-lg">Introducing</p>
            <h3 className="text-4xl md:text-3xl lg:text-[72px]">Little Stars FC</h3>
            <p className="text-lg">Discovering and developing young football talent
            </p>
        </div>
        
    </section>
  );
};

export default Hero;
