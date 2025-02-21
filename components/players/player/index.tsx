import Image from "next/image";
import icons from '../../../public/images/icon/icon-moon.svg'
import { PlayerInfo } from "./infoType";
import infoData from "./InfoData";

export default function Player(){

    return (
                <div className=" justify-center">
                    <div className="grid grid-cols-2 w-fit gap-10">
                        {infoData.map((info, index) => (
                            
                            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-[170px] items-center">
                                <div className="p-4 rounded-full bg-gray-200 w-fit">
                                    {info.icon}
                                </div>
                                <div className="text-center md:text-start">
                                    <p className="text-lg">{info.key}</p>
                                    <p className="text-sm">{info.value} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
    )
}