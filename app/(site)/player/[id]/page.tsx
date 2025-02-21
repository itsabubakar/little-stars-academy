'use client'

import { Feature } from "@/types/feature";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import featuresData from "@/components/Features/featuresData";
import Player from "@/components/players/player";
import SingleFeature from "@/components/Features/SingleFeature";
import ReactPlayer from "react-player";

export default function page(){
    const params = useParams();
    const id = params.id; // Get the id from the URL
    const [feature, setFeature] = useState<Feature | null>(null);
  

    useEffect(() => {
        if (id) {
        // Find the feature by ID from the featuresData array
        const selectedFeature = featuresData.find((feature) => feature.id.toString() === id);
        setFeature(selectedFeature || null);
        }
    }, [id]); // Re-run the effect when the `id` changes

    if (!feature) {
        return <div className="px-28 justify-center w-fit items-center overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 animate-ping">Loading...</div>; // Show loading state until the feature is found
    }

    return (
        <section  className="justify-center overflow-hidden pb-20 flex flex-col gap-10 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
            <div className="flex flex-col items-center md:flex-row gap-10 justify-center">
                <SingleFeature feature={feature}/>
                <Player /> 
            </div>

            <div className="py-16 px-8 md:px-28 bg-meta text-black">
                <h3 className=" text-2xl ">Player Information</h3>
                <p className="text-sm flex mt-6 mb-3 flex-wrap max-w-[570px]"></p>

                <ul className="text-xl">
                <li>Pace: 60</li>
                <li>Dribbling: 60</li>
                <li>Passing: 60</li>
                <li>Defense: 60</li>
                <li>Physique: 60</li>
                <li>Positions: LW, AM, RW</li>
                </ul>
            </div>

            {/*
            <div className="py-16 px-8 md:px-28">
                <h3 className=" text-2xl ">About {feature.title}</h3>
                <p className="mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, ut voluptatem reprehenderit itaque soluta, sint reiciendis unde aliquid sit quam expedita labore voluptate, neque eos eligendi sed doloribus minima repellat!</p>
            </div>

            <div className="flex flex-col gap-4">
                
                <div className="flex flex-col md:flex-row justify-center">
                    <iframe
                        src="https://www.instagram.com/p/Cv5XKJ2svTl/embed"
                        width="360"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency
                    ></iframe>
                    <iframe
                        src="https://www.instagram.com/p/Cv5XKJ2svTl/embed"
                        width="360"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency
                    ></iframe>
                    <iframe
                        src="https://www.instagram.com/p/Cv5XKJ2svTl/embed"
                        width="360"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency
                    ></iframe>
                </div>

                <div className="flex px-3  md:px-28">
                <ReactPlayer
                 
                width={420}
                height={360}
                    url="https://www.youtube.com/watch?v=HX6dQwB8FKs&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY" 
                    controls 
                />
                </div>
            </div>*/}

        </section>
    )
}