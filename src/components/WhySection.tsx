import { X, Calculator, Ghost } from 'lucide-react';

export function WhySection() {
  const cards = [
    {
      icon: X,
      headline: "NO FLAKERS.",
      body: "Reliability Scores for every rider. Spot the flake before you start the bike.",
    },
    {
      icon: Calculator,
      headline: "HISAAB KITAB.",
      body: "Split the chai, fuel, and dhaba bills instantly. No awkward money talks later.",
    },
    {
      icon: Ghost,
      headline: "NO WHATSAPP KHAOS.",
      body: "Stop creating temporary groups that rot in your chat list forever. Stop spamming invites to 10 different squads just to find a rider. One Link. One Temporary Room. Scene Sorted.",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-[#FDF8E1]" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bungee uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            KYUN CHAHIYE?
          </h2>
          <div className="w-24 h-1 bg-[#C98938] mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-[#FDF8E1] border-thick neo-brutal-shadow p-6 md:p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-block bg-[#C98938] p-4 border-thick">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#362419]" strokeWidth={3} />
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-bungee text-xl md:text-2xl mb-4 uppercase">
                  {card.headline}
                </h3>

                {/* Body */}
                <p className="text-base md:text-lg leading-relaxed">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}