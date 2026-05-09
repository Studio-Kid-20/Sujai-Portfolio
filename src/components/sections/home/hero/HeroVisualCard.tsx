import { MaterialIcon } from "@/components/ui/MaterialIcon";

const heroImg = "/assets/hero-visual.jpg";

type FloatingHeroCard = {
  icon: string;
  kicker: string;
  title: string;
  className: string;
};

const floatingCards: FloatingHeroCard[] = [
  {
    icon: "auto_awesome",
    kicker: "Creative",
    title: "Visual Storytelling",
    className: "absolute -right-6 top-10 z-20 bg-secondary/80",
  },
  {
    icon: "deployed_code",
    kicker: "Build Layer",
    title: "Modern Front-End Craft",
    className: "absolute -left-8 bottom-12 z-20 bg-primary/80",
  },
];

export function HeroVisualCard() {
  return (
    <div className="relative lg:col-span-5">
      {/* Ambient glow — kept subtle */}
      <div className="absolute -inset-6 rounded-full bg-primary/10 blur-[60px]" />

      {/* This is the 'first image' container with the CSS float animation */}
      <div className="hero-float relative z-10 aspect-[4/5] w-full rotate-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl transition-transform duration-700 hover:rotate-0">
        <div className="h-full w-full overflow-hidden rounded-2xl">
          <img
            src={heroImg}
            alt="Creative interface illustration"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="eager"
          />
        </div>

        {/* Static satellite cards — no animation, zero overhead */}
        {floatingCards.map((card) => (
          <div
            key={card.title}
            className={`${card.className} flex items-center gap-3 rounded-2xl border border-white/20 p-4 shadow-xl`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <MaterialIcon name={card.icon} className="text-white" />
            </div>
            <div>
              <p className="font-label text-[10px] uppercase tracking-wider text-white/70">{card.kicker}</p>
              <p className="font-headline text-sm font-bold text-white">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
