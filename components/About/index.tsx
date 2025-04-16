"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";

const About = () => {
  const videoUrl = "";

  const handleClick = () => {
    window.open(
      "https://youtube.com/@littlestarsfootballacad?si=yA86pNXXHenXJTIb",
      "_blank",
    );
  };
  return (
    <>
      <div className="mx-auto max-w-c-1235 overflow-hidden px-4 pb-20 md:px-8 2xl:px-0">
        <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
            Little Stars Football Academy -
          </span>
          In Videos
        </h2>
        <a
          href="https://youtube.com/@littlestarsfootballacad?si=yA86pNXXHenXJTIb"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          <ReactPlayer
            width={"100%"}
            height={500}
            url={"https://youtu.be/A6BosVpW-NQ"}
            playing={false}
            controls={false} // Disable controls to prevent interference
            light={true} // Show a thumbnail instead of playing
          />
        </a>
      </div>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className=" flex flex-col-reverse items-center gap-8 md:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto aspect-[588/526.5] w-full md:block md:w-1/2"
            >
              <Image
                src="/images/players/IMG-20250210-WA0034.jpg"
                alt="About"
                className="rounded-lg"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  About Us
                </span>
                - Little Stars Football Academy
              </h2>
              <p>
                At Little Stars Football Academy, we are committed to
                discovering and developing young football talent. Our academy
                provides a structured and engaging environment where youths can
                learn the fundamentals of football while fostering a passion for
                the game.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              {/*
              <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h4> */}
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Little Stars{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Soccer Clinic
                </span>
              </h2>
              <p>
                Ignite your child's love for soccer at Little Stars Soccer
                Clinic! Designed for ages 5-15, our program blends top-tier
                coaching with a fun and inclusive atmosphere, helping kids
                sharpen their skills, build confidence, and enjoy the beautiful
                game. Applications currently closed!
              </p>
              <div></div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/players/IMG-20250210-WA0045.jpg"
                alt="About"
                className="rounded-lg"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
