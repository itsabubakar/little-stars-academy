import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Partnership Development with Hatayspor – Little Stars Football Academy",
  description:
    "Details about our strategic partnership discussions with Hatayspor and our goals for international youth football development.",
};

export default function PartnershipDevelopmentPage() {
  return (
    <main className="mx-auto mt-10 max-w-3xl px-4 py-10">
      {/* Hero / Header Image Placeholder */}
      <div className="mb-8">
        <Image
          src="/images/partnership/hatayspor-1.jpg"
          alt="Mr. Umar Yaro with Hatayspor officials"
          width={800}
          height={400}
          className="h-auto w-full rounded object-cover"
        />
      </div>

      <h1 className="mb-6 text-3xl font-bold">
        Partnership Development for Little Stars Football Academy
      </h1>

      <p className="mb-6 leading-relaxed text-gray-700">
        As part of our continued commitment to building strategic international
        partnerships, <strong>Mr. Umar Abdullahi Yaro</strong>, a licensed FIFA
        Football Agent and official agent of Little Stars Football Academy,
        recently visited <strong>Hatayspor Kulübü</strong> (Atakaş Hatayspor) at
        their temporary base in{" "}
        <strong>Erdemli Atış Poligonu, Mersin, Turkey</strong>.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700">
        During the visit, Mr. Yaro engaged in meaningful discussions with Mr.{" "}
        <strong>Samet Fırat Soydemir</strong>, the club’s Sporting Director, and
        the Head of Legal Affairs. The meeting focused on opportunities for:
      </p>

      <ul className="mb-6 list-inside list-disc text-gray-700">
        <li>Youth development collaboration</li>
        <li>Talent scouting initiatives</li>
        <li>Broader football development strategies</li>
      </ul>

      {/* Optional second inline image */}
      <div className="mb-6">
        <Image
          src="/images/partnership/hatayspor-2.jpg"
          alt="Mr. Umar Yaro with Hatayspor officials"
          width={800}
          height={400}
          className="h-auto w-full rounded object-cover"
        />
      </div>

      <p className="mb-6 leading-relaxed text-gray-700">
        We are excited about the potential for collaboration and look forward to
        building a strong and lasting relationship between{" "}
        <strong>Hatayspor</strong> and
        <strong> Little Stars Football Academy</strong>.
      </p>

      <p className="leading-relaxed text-gray-700">
        Together, we aim to create global pathways for the next generation of
        football talent.
      </p>
    </main>
  );
}
