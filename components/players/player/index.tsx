import Image from "next/image";
import icons from "../../../public/images/icon/icon-moon.svg";
import { PlayerInfo } from "./infoType";
import infoData from "./InfoData";
import { Feature } from "@/types/feature";
import { FaCakeCandles } from "react-icons/fa6";

export default function Player({ feature }: { feature?: Feature }) {
  return (
    <div className=" justify-center">
      {/* <div className="grid w-fit grid-cols-2 gap-10">
        {infoData.map((info, index) => (
          <div className="flex  flex-col items-center gap-2 md:flex-row md:gap-4">
            <div className="w-fit rounded-full bg-gray-200 p-4">
              {info.icon}
            </div>
            <div className="text-center md:text-start">
              <p className="text-lg">{info.key}</p>
              <p className="text-sm">{feature?.dob} </p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid w-fit grid-cols-2 gap-10">
        <div className="flex  flex-col items-center gap-2 md:flex-row md:gap-4">
          <div className="w-fit rounded-full bg-gray-200 p-4">
            <FaCakeCandles />
          </div>
          <div className="text-center md:text-start">
            <p className="text-lg">Date of Birth</p>
            <p className="text-sm">{feature?.dob} </p>
          </div>
        </div>

        <div className="flex  flex-col items-center gap-2 md:flex-row md:gap-4">
          <div className="w-fit rounded-full bg-gray-200 p-4">
            <FaCakeCandles />
          </div>
          <div className="text-center md:text-start">
            <p className="text-lg">Weight (kg)</p>
            <p className="text-sm">{feature?.weight} </p>
          </div>
        </div>

        <div className="flex  flex-col items-center gap-2 md:flex-row md:gap-4">
          <div className="w-fit rounded-full bg-gray-200 p-4">
            <FaCakeCandles />
          </div>
          <div className="text-center md:text-start">
            <p className="text-lg">Height (cm)</p>
            <p className="text-sm">{feature?.height} </p>
          </div>
        </div>
        {/* <div className="flex  flex-col items-center gap-2 md:flex-row md:gap-4">
          <div className="w-fit rounded-full bg-gray-200 p-4">
            <FaCakeCandles />
          </div>
          <div className="text-center md:text-start">
            <p className="text-lg">Dominant foot</p>

            <p className="text-sm">{feature?.dob} </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
