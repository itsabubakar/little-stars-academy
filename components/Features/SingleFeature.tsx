import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, id } = feature;

  return (
    <Link  href={`/player/${id}`} key={id} className="block">
      <div className="animate_top z-40 rounded-lg border border-white bg-white w-[230px] shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105">
        
      <div className="relative flex items-center justify-center">
          <img src={icon} className="h-[230px] object-contain rounded-md" alt="title"/>
        </div>
        <div className="flex flex-col p-2">
          <h3 className="mb-2 mt-4 text-lg font-semibold text-black dark:text-white xl:text-xl">
        {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleFeature;
