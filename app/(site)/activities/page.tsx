import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities - Little Stars Football Academy",
  description:
    "Browse the latest activities from Little Stars Football Academy",
};

const articles = [
  {
    title: "Partnership Development with Hatayspor",
    slug: "partnership",
    image: "/images/partnership/hatayspor-1.jpg",
    excerpt:
      "Mr. Umar Yaro of Little Stars Football Academy visited Hatayspor in Turkey to explore a promising international partnership focused on youth development and talent scouting.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-10 text-4xl font-bold">Our Articles</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="overflow-hidden rounded-lg border shadow transition-shadow duration-300 hover:shadow-lg"
          >
            <Link href={`/activities/${article.slug}`}>
              <div>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold">
                    {article.title}
                  </h2>
                  <p className="mb-4 text-sm text-gray-600">
                    {article.excerpt}
                  </p>
                  <span className="text-blue-600 hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
