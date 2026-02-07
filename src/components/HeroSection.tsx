import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      {/* Retro Sunburst Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-[600px] h-[600px]">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-full h-1 bg-[#C98938]"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                transformOrigin: 'center',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Headline - Brand Name */}
        <h1 className="font-bungee uppercase mb-6 md:mb-8">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none">
            <span className="text-[#362419]">YOUR PLAN</span><br className="md:hidden" />
            <span className="text-[#C98938] md:ml-4">OUR JUGAAD</span>
          </div>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          The ultimate tool for Indian Biker Squads. We handle the logistics, the routes, and the money. You just throttle out.
        </p>

        {/* Hero Image - Rider Cutout with Stamp */}
        <div className="relative mb-8 md:mb-12">
          <div className="inline-block border-thick neo-brutal-shadow-lg bg-[#C98938] p-2 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1712763064512-6924ef39cbb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cml1bXBoJTIwbW90b3JjeWNsZSUyMHJpZGVyJTIwaW5kaWF8ZW58MXx8fHwxNzcwNDQ2NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Triumph Motorcycle Rider"
              className="w-full max-w-md mx-auto h-64 sm:h-80 md:h-96 object-cover"
            />

            {/* Rubber Stamp Badge */}
            <div
              className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#362419] bg-[#FDF8E1] flex items-center justify-center rotate-[-5deg] neo-brutal-shadow"
              style={{
                opacity: 0.95,
              }}
            >
              <div className="text-center">
                <p className="font-bungee text-[8px] md:text-[10px] mb-1 tracking-wider">EST. 2025</p>
                <p className="font-bungee text-xs md:text-sm leading-tight mb-1">
                  <span className="text-[#362419]">JUGAADU</span><br />
                  <span className="text-[#C98938]">RIDER</span>
                </p>
                <p className="font-bungee text-[8px] md:text-[10px] tracking-wider">INDIA</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="font-bungee uppercase bg-[#C98938] text-[#362419] px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl border-thick neo-brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150">
          START THE ENGINE
        </button>

        {/* Horn OK Please Badge */}
        <div className="mt-12 md:mt-16 inline-block">
          <div className="border-thick neo-brutal-shadow bg-[#FDF8E1] px-6 py-3 rotate-[-2deg]">
            <p className="font-bungee text-sm md:text-base">🚛 HORN OK PLEASE 🚛</p>
          </div>
        </div>
      </div>
    </section>
  );
}