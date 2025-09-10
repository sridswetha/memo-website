import Image from "next/image";
import SquareLink from './components/SquareLink';

export default function Home() {
  return (
    <div className="bg-[#DBF9FF] min-h-screen flex flex-col items-center">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex-1 mt-20">
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
<div className="relative z-10 flex flex-col items-start justify-center h-full px-[70px] space-y-6">
          {/* Main Title */}
          <h1 
            className="text-[#FBFDFF] text-[60px] md:text-[80px] lg:text-[120px] xl:text-8xl text-center tracking-wider "
            style={{ fontFamily: 'UpheavalTT, Arial, sans-serif',
            textShadow: '4px 4px 15px rgba(0,0,0,0.8)' }}
          >
            GET THE M.E.M.O
          </h1>

          {/* Subtitle */}
          <h2
            className="font-montserrat font-bold underline text-2xl mt-5 px-50"
            style={{ color: '#000000' }}
          >
            CURRENT ISSUES
          </h2>

          {/* Squares Container */}
          <div className="flex flex-wrap justify-center gap-5 mt-3 w-full max-w-[900px] mx-auto">
            <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="https://github.com" external bgImage="/Sunset.png">
              GH
            </SquareLink>

            <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="/about" bgImage="/Sunset.png">
              About
            </SquareLink>

            <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="https://twitter.com" external bgImage="/Sunset.png">
              🐦
            </SquareLink>

            <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="https://twitter.com" external bgImage="/Sunset.png">
              🐦
            </SquareLink>

            <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="https://twitter.com" external bgImage="/Sunset.png">
              🐦
            </SquareLink>

            <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="https://twitter.com" external bgImage="/Sunset.png">
            🐦
          </SquareLink>
          <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="https://twitter.com" external bgImage="/Sunset.png">
          🐦
        </SquareLink>
        <SquareLink className="w-1/2 md:w-1/4 min-w-[150px]" href="https://twitter.com" external bgImage="/Sunset.png">
        🐦
      </SquareLink>
          </div>
        </div>
      </section>
    </div>
  );
}
