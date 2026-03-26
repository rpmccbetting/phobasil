import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center transition-opacity duration-300 hover:opacity-80">
          <img src={logo} alt="Pho Basil Vietnamese Cuisine" className="h-11" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-xs tracking-[0.2em] uppercase text-white hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:9107690067"
              className="font-body text-xs tracking-[0.2em] uppercase px-5 py-2 bg-brand-red text-white hover:brightness-110 transition-all duration-300"
            >
              Order Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-background border-t border-white/10 overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-[0.2em] uppercase text-white hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:9107690067"
              className="font-body text-sm tracking-[0.2em] uppercase px-6 py-2 bg-brand-red text-white"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
