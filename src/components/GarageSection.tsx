import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bike, Award, TrendingUp } from 'lucide-react';

export function GarageSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#FDF8E1]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Polaroid Frame */}
              <div className="bg-white border-thick neo-brutal-shadow-lg p-4 md:p-6 rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                <div className="border-thick bg-[#C98938] p-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1609405985534-c7455cde5d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcCUyMG1vY2t1cHxlbnwxfHx8fDE3NzA0NDU4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="App Profile Mockup"
                    className="w-full max-w-xs h-64 sm:h-80 object-cover"
                  />
                </div>
                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="text-xl md:text-2xl italic" style={{ fontFamily: 'cursive' }}>
                    Meri Gaadi ✌️
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="font-bungee uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              ASLI ID.
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Verify your machine. Track your odometer. Build your reputation on the tarmac.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4 border-thick neo-brutal-shadow-sm bg-white p-4">
                  <div className="bg-[#C98938] p-2 border-2 border-[#362419]">
                    <Bike className="w-6 h-6 text-[#362419]" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bungee text-sm md:text-base mb-1">YOUR RIDE PROFILE</h4>
                    <p className="text-sm md:text-base">Complete bike details & verification</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-thick neo-brutal-shadow-sm bg-white p-4">
                  <div className="bg-[#C98938] p-2 border-2 border-[#362419]">
                    <TrendingUp className="w-6 h-6 text-[#362419]" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bungee text-sm md:text-base mb-1">ODO TRACKER</h4>
                    <p className="text-sm md:text-base">Keep count of every kilometer</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-thick neo-brutal-shadow-sm bg-white p-4">
                  <div className="bg-[#C98938] p-2 border-2 border-[#362419]">
                    <Award className="w-6 h-6 text-[#362419]" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bungee text-sm md:text-base mb-1">STREET CRED</h4>
                    <p className="text-sm md:text-base">Build your rider reputation score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
