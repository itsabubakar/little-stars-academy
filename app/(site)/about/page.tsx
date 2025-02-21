import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col gap-10">
            <section className="relative bg-[url('/images/players/IMG-20250210-WA0028.jpg')]  overflow-hidden h-[85vh] bg-center bg-no-repeat bg-cover flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="flex flex-col gap-10 px-5 md:px-14 lg:px-40 text-center justify-center items-center text-light relative">
                    <p className="text-lg">Know More About Little Stars</p>
                    <h3 className="text-[28px] md:text-3xl lg:text-[72px]">About Us</h3>
                    
                </div>
                
            </section>
            <section className="px-5 md:px-10 lg:px-24 flex flex-col gap-5">
                <p className="">At Little Stars Football Academy, we are committed to discovering and developing young football talent. Our academy provides a structured and engaging environment where youths can learn the fundamentals of football while fostering a passion for the game.
                </p>
                <p>We focus on technical skills, teamwork, discipline, and sportsmanship, ensuring that every youth grows both on and off the pitch. Our dedicated coaching team uses modern training methods tailored to different age groups, helping players build confidence, agility, and a winning mindset.</p>
      
                <div className="mx-auto ">
                    <Image
                        className="shadow-solid-l rounded-xl"
                        width={720} height={580}
                        src="/images/players/IMG-20250210-WA0060.jpg"
                        alt="Hero"
                    />
                    <div className="absolute inset-0 w-fit bg-black opacity-40 rounded-xl"></div>
                </div>
                
                <p>Beyond football, we instill values of hard work, respect, and perseverance, preparing our young stars for future success in sports and life. Whether a beginner or an aspiring professional, every youth at Little Stars Football Academy is given the opportunity to shine.
                </p>
                <p>Join us and be part of a community where dreams take flight and champions are made!</p>

            </section>
        </div>
    )
}