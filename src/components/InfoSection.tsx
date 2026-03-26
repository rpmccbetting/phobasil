import herbsTexture from "@/assets/herbs-texture.jpg";
import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const hours = [
  { day: "Monday", time: "11:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 8:00 PM" },
  { day: "Thursday", time: "Closed" },
  { day: "Friday", time: "11:00 AM – 8:00 PM" },
  { day: "Saturday", time: "11:00 AM – 8:00 PM" },
  { day: "Sunday", time: "11:00 AM – 8:00 PM" },
];

const InfoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="visit" className="relative py-32 md:py-44">
      <img
        src={herbsTexture}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        loading="lazy"
        width={1920}
        height={640}
      />
      <div className="absolute inset-0 bg-background/90" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-5">
            Plan Your Visit
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white mb-5">
            Find Us
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-20">
          {/* Location */}
          <div className={`text-center reveal ${isVisible ? "visible" : ""} stagger-1`}>
            <MapPin className="w-6 h-6 text-primary mx-auto mb-5" />
            <h3 className="font-heading text-2xl text-white mb-4">Location</h3>
            <p className="font-body text-white text-sm leading-relaxed">
              812 College Rd<br />
              University Square<br />
              Wilmington, NC 28403
            </p>
            <a
              href="https://maps.google.com/?q=812+College+Rd+Wilmington+NC+28403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 font-body text-xs tracking-[0.2em] uppercase text-primary border-b border-primary/40 pb-1 hover:border-primary transition-all duration-300"
            >
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div className={`text-center reveal ${isVisible ? "visible" : ""} stagger-2`}>
            <Clock className="w-6 h-6 text-primary mx-auto mb-5" />
            <h3 className="font-heading text-2xl text-white mb-4">Hours</h3>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className={`font-body text-sm flex justify-between max-w-[220px] mx-auto ${
                    h.time === "Closed" ? "text-brand-red" : "text-white"
                  }`}
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`text-center reveal ${isVisible ? "visible" : ""} stagger-3`}>
            <Phone className="w-6 h-6 text-primary mx-auto mb-5" />
            <h3 className="font-heading text-2xl text-white mb-4">Contact</h3>
            <a
              href="tel:9107690067"
              className="font-body text-white text-sm hover:text-primary transition-colors duration-300"
            >
              (910) 769-0067
            </a>
            <div className="mt-8 space-y-3">
              <p className="font-body text-xs text-white tracking-wider uppercase">
                Dine-in · Takeaway · Curbside Pickup
              </p>
              <p className="font-body text-xs text-white tracking-wider uppercase">
                Vegan Options Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
