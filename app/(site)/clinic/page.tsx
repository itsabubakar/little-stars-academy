"use client";
import ReactPlayer from "react-player";

export default function About() {
  return (
    <div className="flex flex-col gap-10">
      <section className="relative flex  h-[85vh] items-center justify-center overflow-hidden bg-[url('/images/players/IMG-20250210-WA0060.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative flex flex-col items-center justify-center gap-10 px-5 text-center text-light md:px-14 lg:px-40">
          <h3 className="text-[28px] md:text-3xl lg:text-[72px]">
            Little Stars Clinic
          </h3>
        </div>
      </section>
      <section className="flex flex-col gap-5 px-5 py-10 md:px-10 lg:px-24">
        <div className="flex flex-wrap gap-5 ">
          <div>
            <ReactPlayer
              width={300}
              height={300}
              url={"https://youtu.be/nQofKZbZ7HY?si=gQYaAKFHa_pejklK"}
              controls
            />
            <h2 className="pt-2 font-semibold text-black">Day 1</h2>
          </div>
          <div>
            <ReactPlayer
              width={300}
              height={300}
              url={"https://youtu.be/VA95PUrCfvE?si=HUZ-_ddwG-V45hyf"}
              controls
            />
            <h2 className="pt-2 font-semibold text-black">Day 2</h2>
          </div>
          <div>
            <ReactPlayer
              width={300}
              height={300}
              url={"https://youtu.be/MTaJgHAYZd0?si=wM4QcHIgCyLLPbs0"}
              controls
            />
            <h2 className="pt-2 font-semibold text-black">Day 3</h2>
          </div>
          <div>
            <ReactPlayer
              width={300}
              height={300}
              url={"https://youtu.be/CrZQok9X7Og?si=EUW8EsWd2aAj3fyG"}
              controls
            />
            <h2 className="pt-2 font-semibold text-black">Day 4</h2>
          </div>
          <div>
            <ReactPlayer
              width={300}
              height={300}
              url={"https://youtu.be/y7gxCfXddJQ?si=USZWJG93PSCF27Gk"}
              controls
            />
            <h2 className="pt-2 font-semibold text-black">Day 5</h2>
          </div>
          <div>
            <ReactPlayer
              width={300}
              height={300}
              url={"https://youtu.be/f-XWGNRRJi4?si=poq3AWeU7f-gI9Dx"}
              controls
            />
            <h2 className="pt-2 font-semibold text-black">Day 6</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
