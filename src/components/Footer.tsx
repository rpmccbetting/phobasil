import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <img src={logo} alt="Pho Basil" className="h-12 mx-auto mb-8" />
        <div className="divider-gold mx-auto mb-8" />
        <p className="font-body text-sm text-white">
          812 College Rd, University Square · Wilmington, NC 28403 ·{" "}
          <a href="tel:9107690067" className="text-primary hover:underline transition-colors duration-300">
            (910) 769-0067
          </a>
        </p>
        <p className="font-body text-xs text-white mt-8">
          © {new Date().getFullYear()} Pho Basil Vietnamese Cuisine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
