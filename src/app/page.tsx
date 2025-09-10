import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#DBF9FF] min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 
            className="text-[#FBFDFF] text-[60px] md:text-[80px] lg:text-[120px] xl:text-8xl text-center tracking-wider"
            style={{ fontFamily: 'UpheavalTT, Arial, sans-serif',
            textShadow: '4px 4px 15px rgba(0,0,0,0.8)' }}
          >
            GET THE M.E.M.O
          </h1>
        </div>
      </section>
    </div>
  );
}