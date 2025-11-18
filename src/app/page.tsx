import Image from "next/image";
import ArticleTile from "./components/ArticleTile";
import { sampleArticles } from "./data/sampleArticles";

export default function Home() {
  return (
    <div className="bg-[#DBF9FF] min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/memo-banner.png"
            alt="M.E.M.O Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Banner Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 sm:px-4">
          <h1
            className="text-[#FBFDFF] text-[45px] xs:text-[45px] sm:text-[50px] md:text-[70px] lg:text-[120px] xl:text-[120px] text-center tracking-wider leading-tight"
            style={{
              fontFamily: "UpheavalTT, Arial, sans-serif",
              textShadow: "4px 4px 15px rgba(0,0,0,0.8)",
            }}
          >
            GET THE M.E.M.O
          </h1>
          <h2
            className="text-white text-3xl mt-4"
            style={{
              fontFamily: "UpheavalTT, Arial, sans-serif",
              textShadow: "4px 4px 15px rgba(0,0,0,0.8)",
              
            }}
          >
          From your friendly neighborhood Multi-Ethnic Mental Health Organization✧
           </h2>
        </div>
      </section>

      {/* Latest Section */}
        <section className="pt-0 pb-4 sm:pt-0 sm:pb-6">
        <h2
          className="font-montserrat font-black underline text-[36px] sm:text-[44px] md:text-[56px] mb-6 sm:mb-8 text-center px-4"
          style={{ color: "#3b0d37" }}
        >
          CURRENT ISSUES 
        </h2>

        {/* Article Tiles Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6" >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sampleArticles.map((article) => (
              <ArticleTile key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}