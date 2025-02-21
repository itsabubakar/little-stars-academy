import PlayerDiscover from "@/components/Features/allPlayers";
import featuresData from "../../../components/Features/featuresData";
import SingleFeature from "../../..//components/Features/SingleFeature";

export default function Discover(){
    return (
        <div className="flex flex-col gap-20">
            <section className="relative bg-[url('/images/players/IMG-20250210-WA0033.jpg')]  overflow-hidden h-[85vh] bg-center bg-no-repeat bg-cover flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="flex flex-col gap-10 px-5 md:px-14 lg:px-40 text-center justify-center items-center text-light relative">
                    <p className="text-lg">Find Young Talents</p>
                    <h3 className="text-[28px] md:text-3xl lg:text-[72px]">Discover Our Players</h3>
                </div>
                
            </section>

            <section className="flex flex-col gap-10 px-5 md:px-14 lg:px-40 justify-center">
                <div className="flex flex-col gap-10">
                    <h3 className="text-[28px] text-center text-titlebgdark">Discover Our Players – Little Stars Football Academy</h3>
                    <p className="">At Little Stars Football Academy, we take pride in nurturing young talent and shaping the future stars of football. Our players are trained with a focus on skill development, tactical awareness, and teamwork, ensuring they are well-prepared for competitive play.
                    </p>
                    <p>Each player at our academy undergoes structured training designed to enhance their technical abilities, agility, and game intelligence. Whether they aspire to play professionally or simply develop a love for the sport, we provide the right environment for them to grow and excel.
                    </p>

                </div>

                <div className="flex flex-wrap justify-center gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                    {featuresData.map((feature) => (
                        <SingleFeature feature={feature} key={feature.id} />
                    ))}
                </div>

                <p>Explore our roster of dedicated and passionate young athletes who are honing their skills under expert guidance. With commitment and determination, our players are on the path to greatness, ready to showcase their talent on bigger stages.
                </p>
                <p>Join us in supporting the next generation of football champions!</p>
                
            </section>
        </div>
    )
}