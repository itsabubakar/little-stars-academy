"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center animate_top w-full xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>
              <div className="flex flex-col lg:flex-row">
                <div className="5 mb-7 w-[280px] text-center">
                  <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                    Our Loaction
                  </h3>
                  <p>Address: NO 3A , ALI AKILU ROAD , KADUNA, KADUNA STATE, NIGERIA</p>
                </div>
                <div className="5 mb-7 w-[280px] text-center">
                  <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                    Email Address
                  </h3>
                  <p>
                    <a href="littlestarsfootballltd@gmail.com">littlestarsfootballltd@gmail.com</a>
                  </p>
                </div>
                <div className=" w-[280px] text-center">
                  <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                    Phone Number
                  </h4>
                  <p>
                    <p>+2348096083133</p>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
