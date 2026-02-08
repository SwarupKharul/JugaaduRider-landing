import { Heart, Bug, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 bg-[#362419] text-[#FDF8E1]">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          {/* Made with Love */}
          <div className="inline-block border-thick border-[#FDF8E1] neo-brutal-shadow-sm bg-[#C98938] px-8 py-4 mb-8" style={{ boxShadow: '4px 4px 0px #FDF8E1' }}>
            <p className="font-bungee text-base md:text-lg text-[#362419] flex items-center justify-center gap-2">
              MADE WITH <Heart className="w-5 h-5 fill-current" strokeWidth={0} /> & PETROL IN INDIA
            </p>
          </div>

          {/* Links
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <a
              href="#"
              className="flex items-center gap-2 border-2 border-[#FDF8E1] px-4 py-2 hover:bg-[#FDF8E1] hover:text-[#362419] transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={3} />
              <span className="font-bungee text-sm">SUPPORT</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border-2 border-[#FDF8E1] px-4 py-2 hover:bg-[#FDF8E1] hover:text-[#362419] transition-colors"
            >
              <Bug className="w-4 h-4" strokeWidth={3} />
              <span className="font-bungee text-sm">REPORT BUG</span>
            </a>
          </div> */}

          {/* Divider */}
          <div className="w-full h-1 bg-[#C98938] mb-6"></div>

          {/* Bottom Text */}
          <div className="space-y-4">
            <p className="text-xs md:text-sm opacity-60">
              © 2026 JugaaduRider. All Rights Reserved. | Ride Safe, Ride Smart, Ride Together.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-12 h-1 bg-[#C98938]"></div>
            <div className="w-12 h-1 bg-[#C98938]"></div>
            <div className="w-12 h-1 bg-[#C98938]"></div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-8">
          <div className="inline-block rotate-[-2deg]">
            <p className="text-xs opacity-40 font-mono">
              Jugaad != Compromise. Jugaad = Smart Solutions. 🛠️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}