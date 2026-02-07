import { Share2, MapPin, Clock, TrendingUp } from 'lucide-react';

export function WanderlineSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#C98938]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-bungee uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-12 text-[#362419]">
          FLEX KARO.
        </h2>

        {/* Route Visualization */}
        <div className="mb-8 md:mb-12 max-w-4xl mx-auto">
          <div className="bg-[#FDF8E1] border-thick neo-brutal-shadow-lg p-6 md:p-10">
            {/* Zigzag Route Line */}
            <div className="relative h-32 md:h-40 mb-6">
              <svg className="w-full h-full" viewBox="0 0 800 150" preserveAspectRatio="none">
                <path
                  d="M 0 75 Q 100 20, 200 75 T 400 75 T 600 75 T 800 75"
                  stroke="#362419"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Start Point */}
                <circle cx="0" cy="75" r="8" fill="#C98938" stroke="#362419" strokeWidth="3" />
                {/* Waypoints */}
                <circle cx="200" cy="75" r="8" fill="#362419" stroke="#C98938" strokeWidth="3" />
                <circle cx="400" cy="75" r="8" fill="#362419" stroke="#C98938" strokeWidth="3" />
                <circle cx="600" cy="75" r="8" fill="#362419" stroke="#C98938" strokeWidth="3" />
                {/* End Point */}
                <circle cx="800" cy="75" r="12" fill="#362419" stroke="#C98938" strokeWidth="4" />
              </svg>
            </div>

            {/* Ride Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="border-2 border-[#362419] p-3 bg-white">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-[#C98938]" strokeWidth={3} />
                <p className="font-bungee text-xs mb-1">DISTANCE</p>
                <p className="text-lg md:text-xl">342 KM</p>
              </div>
              <div className="border-2 border-[#362419] p-3 bg-white">
                <Clock className="w-5 h-5 mx-auto mb-2 text-[#C98938]" strokeWidth={3} />
                <p className="font-bungee text-xs mb-1">TIME</p>
                <p className="text-lg md:text-xl">8.5 HRS</p>
              </div>
              <div className="border-2 border-[#362419] p-3 bg-white">
                <TrendingUp className="w-5 h-5 mx-auto mb-2 text-[#C98938]" strokeWidth={3} />
                <p className="font-bungee text-xs mb-1">AVG SPEED</p>
                <p className="text-lg md:text-xl">40 KM/H</p>
              </div>
              <div className="border-2 border-[#362419] p-3 bg-white">
                <Share2 className="w-5 h-5 mx-auto mb-2 text-[#C98938]" strokeWidth={3} />
                <p className="font-bungee text-xs mb-1">RIDERS</p>
                <p className="text-lg md:text-xl">12</p>
              </div>
            </div>

            {/* Ride Ticket Label */}
            <div className="inline-block border-thick neo-brutal-shadow bg-[#C98938] px-6 py-3 rotate-[2deg]">
              <p className="font-bungee text-sm md:text-base text-[#362419]">✨ AUTO-GENERATED RIDE TICKET ✨</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-[#362419] leading-relaxed">
          Finished a ride? Get a generated 'Ride Ticket' instantly. Share your route stats on Instagram and make them jealous.
        </p>

        {/* Share Button */}
        <button className="mt-8 font-bungee uppercase bg-[#362419] text-[#FDF8E1] px-8 py-4 md:px-10 md:py-5 text-base md:text-lg border-thick border-[#362419] shadow-[4px_4px_0px_#FDF8E1] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150">
          <Share2 className="inline-block w-5 h-5 mr-2 mb-1" strokeWidth={3} />
          SHARE ON INSTA
        </button>
      </div>
    </section>
  );
}
