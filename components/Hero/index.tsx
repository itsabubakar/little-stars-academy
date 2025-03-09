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
        <a
          onClick={(e) => {
            e.preventDefault();
            const link = document.createElement("a");
            link.href = "/consent-form.pdf";
            link.download = "consent-form.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => {
              window.location.href =
                "https://ee.kobotoolbox.org/single/4ad1ab67b887bbb88646eda1b7008a98";
            }, 1000);
          }}
          target="_blank"
          // href="https://ee.kobotoolbox.org/single/4ad1ab67b887bbb88646eda1b7008a98"
          className=" group inline-flex items-center gap-2.5 rounded-xl border  border-b p-2 text-white hover:border-primary hover:text-primary  "
        >
          <span className=" duration-300 group-hover:pr-2">Apply now</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
