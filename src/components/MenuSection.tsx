import { useState } from "react";
import phoMenu from "@/assets/new_contents/pho_menu.jpg";
import morePhoMenu from "@/assets/new_contents/more_pho_menu.jpg";
import sandwichMenu from "@/assets/new_contents/sandwhich_menu.jpg";
import appetizersMenu from "@/assets/new_contents/appetizers_menu.jpg";
import noodleBowlsMenu from "@/assets/new_contents/grilled_meat_and_rice_noodle_bowls_menu.jpg";
import grilledMeatRiceMenu from "@/assets/new_contents/grilled_meat_with_steamed_rice_menu.jpg";
import specialSoupMenu from "@/assets/new_contents/special_soup_and_fried_rice_menu.jpg";
import extrasMenu from "@/assets/new_contents/extras_menu.jpg";
import beveragesMenu from "@/assets/new_contents/beverages_menu.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const menuTabs = [
  { id: "pho", emoji: "🍜", title: "Phở", image: phoMenu },
  { id: "more-pho", emoji: "🍜", title: "More Phở", image: morePhoMenu },
  { id: "banh-mi", emoji: "🥖", title: "Bánh Mì", image: sandwichMenu },
  { id: "appetizers", emoji: "🥗", title: "Appetizers", image: appetizersMenu },
  { id: "bun", emoji: "🍜", title: "Noodle Bowls", image: noodleBowlsMenu },
  { id: "com", emoji: "🍖", title: "Grilled Meat & Rice", image: grilledMeatRiceMenu },
  { id: "specialty", emoji: "🍲", title: "Soups & Fried Rice", image: specialSoupMenu },
  { id: "extras", emoji: "🥢", title: "Extras", image: extrasMenu },
  { id: "drinks", emoji: "🥤", title: "Drinks", image: beveragesMenu },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("pho");
  const active = menuTabs.find((t) => t.id === activeTab)!;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="menu" className="py-32 md:py-44 bg-secondary">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-5">
            What We Serve
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white mb-5">
            Our Menu
          </h2>
          <div className="divider-gold mx-auto mb-7" />
          <p className="font-body text-white max-w-lg mx-auto">
            Every dish is crafted with fresh ingredients, traditional techniques,
            and the vibrant flavors of Vietnam.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-2.5 mb-20 reveal ${isVisible ? "visible" : ""} stagger-1`}>
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-2.5 transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-white/15 text-white hover:text-white hover:border-white/30"
              }`}
            >
              <span className="mr-1.5">{tab.emoji}</span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active category image */}
        <div className={`max-w-3xl mx-auto reveal-scale ${isVisible ? "visible" : ""} stagger-2`}>
          <div className="relative">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-brand-red/40" />
            <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-brand-green/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
