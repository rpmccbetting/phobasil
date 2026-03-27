import heroSpread from "@/assets/new_contents/hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroSpread}
        alt="Vietnamese cuisine spread at Pho Basil"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-brand-green mb-8">
          Authentic Vietnamese Cuisine
        </p>
        <div className="divider-gold mx-auto mb-8" />
        <p className="font-body text-lg md:text-xl text-white max-w-xl mx-auto font-light leading-relaxed">
          A beloved Wilmington gem serving vibrant, soulful Vietnamese dishes —
          from steaming bowls of pho to crispy bánh mì.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#menu"
            className="px-10 py-3.5 bg-brand-red text-white font-body text-sm tracking-widest uppercase hover:brightness-110 transition-all duration-300"
          >
            View Menu
          </a>
          <a
            href="tel:9107690067"
            className="px-10 py-3.5 border border-white/30 text-white font-body text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Call to Order
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="w-px h-20 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
