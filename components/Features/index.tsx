"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { features } from "process";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Players",
              subtitle: "Discover Our Players",
              //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              // convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              // ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 flex flex-wrap justify-center gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}
            {featuresData.map((feature) => (
              <SingleFeature feature={feature} key={feature.id} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
