import { Download, Smartphone, Zap } from 'lucide-react';

export function PWASection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#FDF8E1]" id="install">
      <div className="max-w-4xl mx-auto">
        {/* Bus Ticket Style Container */}
        <div className="relative">
          {/* Perforated Edge Effect - Top */}
          <div className="flex justify-between mb-[-2px]">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-[#362419] rounded-full"></div>
            ))}
          </div>

          {/* Main Ticket */}
          <div className="border-thick neo-brutal-shadow-lg bg-white p-8 md:p-12 text-center">
            {/* Ticket Header */}
            <div className="border-b-2 border-dashed border-[#362419] pb-6 mb-6">
              <div className="inline-block bg-[#C98938] border-2 border-[#362419] px-4 py-2 mb-4">
                <Smartphone className="w-8 h-8 text-[#362419] mx-auto" strokeWidth={3} />
              </div>
              <h2 className="font-bungee uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                JUGAADU PASS
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-4 md:space-y-6">
              <div className="font-bungee text-xl sm:text-2xl md:text-3xl uppercase leading-tight">
                <div>NO PLAY STORE.</div>
                <div className="text-[#C98938]">NO DRAMA.</div>
                <div>ADD TO HOME & RIDE.</div>
              </div>

              <div className="max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-3 text-left">
                  <Zap className="w-5 h-5 text-[#C98938] flex-shrink-0" strokeWidth={3} />
                  <p className="text-base md:text-lg">Instant access - no app store hassle</p>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <Zap className="w-5 h-5 text-[#C98938] flex-shrink-0" strokeWidth={3} />
                  <p className="text-base md:text-lg">Works offline - ride anywhere</p>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <Zap className="w-5 h-5 text-[#C98938] flex-shrink-0" strokeWidth={3} />
                  <p className="text-base md:text-lg">Lightweight - no storage worries</p>
                </div>
              </div>

              {/* Install Button */}
              <button className="mt-6 font-bungee uppercase bg-[#C98938] text-[#362419] px-8 py-4 md:px-10 md:py-5 text-base md:text-lg border-thick neo-brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150">
                <Download className="inline-block w-5 h-5 mr-2 mb-1" strokeWidth={3} />
                ADD TO HOME SCREEN
              </button>
            </div>

            {/* Ticket Number */}
            <div className="border-t-2 border-dashed border-[#362419] pt-6 mt-8">
              <p className="text-xs md:text-sm opacity-60 font-mono">
                TICKET #JR-2026-001 | VALID FOR UNLIMITED RIDES
              </p>
            </div>
          </div>

          {/* Perforated Edge Effect - Bottom */}
          <div className="flex justify-between mt-[-2px]">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-[#362419] rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <div className="inline-block border-thick neo-brutal-shadow-sm bg-[#FDF8E1] px-6 py-3">
            <p className="text-sm md:text-base">
              📱 Works on all devices | 🌐 Progressive Web App Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}