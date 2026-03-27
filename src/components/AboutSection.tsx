import phoBowl from "@/assets/new_contents/pho.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 md:py-44">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className={`reveal-left ${isVisible ? "visible" : ""}`}>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-5">
              Our Story
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              A Taste of Vietnam in Wilmington
            </h2>
            <div className="divider-gold mb-10" />
            <p className="font-body text-white leading-relaxed mb-6">
              Nestled in University Square on College Road, Pho Basil has become
              Wilmington's go-to destination for authentic Vietnamese food. Our
              kitchen crafts each dish with traditional recipes, fresh herbs, and
              the kind of care that keeps our regulars coming back weekly.
            </p>
            <p className="font-body text-white leading-relaxed mb-10">
              Whether you're a pho devotee or discovering Vietnamese cuisine for
              the first time, every bowl and plate tells a story of heritage,
              flavor, and love.
            </p>
            <div className="flex items-center gap-10">
              <div>
                <span className="font-heading text-3xl text-primary font-semibold">4.5</span>
                <span className="text-primary font-heading text-xl"> ★</span>
                <p className="font-body text-xs text-white mt-1 tracking-wider uppercase">632 Google Reviews</p>
              </div>
              <div className="w-px h-12 bg-white/15" />
              <div>
                <span className="font-heading text-3xl text-primary font-semibold">$10–20</span>
                <p className="font-body text-xs text-white mt-1 tracking-wider uppercase">Per Person</p>
              </div>
            </div>
          </div>
          <div className={`relative reveal-right ${isVisible ? "visible" : ""}`}>
            <img
              src={phoBowl}
              alt="Steaming bowl of brisket pho"
              className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-red/40 transition-all duration-500" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-green/40 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
