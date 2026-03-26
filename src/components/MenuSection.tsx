import { useState } from "react";
import phoBowl from "@/assets/pho-bowl.jpg";
import banhMi from "@/assets/banh-mi.jpg";
import springRolls from "@/assets/spring-rolls.jpg";
import grilledPork from "@/assets/grilled-pork.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type MenuItem = { name: string; viet?: string; price: string; desc?: string };

type MenuCategory = {
  id: string;
  emoji: string;
  title: string;
  viet?: string;
  note?: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "pho",
    emoji: "🍜",
    title: "Phở",
    viet: "Beef Broth",
    note: "S $7.99 · M $9.99 · L $11.99",
    items: [
      { name: "Rare Beef Phở", viet: "Phở Tái", price: "from $7.99" },
      { name: "Beef Brisket Phở", price: "from $7.99" },
      { name: "Beef Meatball Phở", price: "from $7.99" },
      { name: "Combination Phở", price: "from $7.99", desc: "Rare beef, brisket, meatball, tripe, tendon" },
      { name: "Chicken Phở", price: "from $6.99" },
      { name: "Vegan Phở", price: "from $6.99", desc: "Vegan broth with tofu & vegetables" },
      { name: "Seafood Phở", price: "$11.99", desc: "Shrimp, squid, imitation crab, pork roll" },
    ],
  },
  {
    id: "banh-mi",
    emoji: "🥖",
    title: "Bánh Mì",
    viet: "Vietnamese Sandwiches",
    items: [
      { name: "Chicken Bánh Mì", price: "$4.99" },
      { name: "Pork Bánh Mì", price: "$4.99" },
      { name: "Beef Bánh Mì", price: "$4.99" },
      { name: "Pork Meatball Bánh Mì", price: "$4.99" },
      { name: "Fried Egg Bánh Mì", price: "$4.99" },
      { name: "Pork Roll Bánh Mì", price: "$4.99" },
      { name: "Fried Tofu Bánh Mì", price: "$4.99" },
    ],
  },
  {
    id: "appetizers",
    emoji: "🥗",
    title: "Appetizers",
    viet: "Món Khai Vị",
    items: [
      { name: "Spring Rolls", viet: "Gỏi cuốn", price: "$3.99", desc: "Shrimp, pork, rice noodles, lettuce" },
      { name: "Egg Rolls", viet: "Chả giò", price: "$2.99", desc: "Deep fried with sweet chili sauce" },
      { name: "Rocket Shrimp", viet: "Tôm Mặc Váy", price: "$5.99" },
      { name: "Crab Rangoon", price: "$4.99", desc: "Cream cheese, imitation crab" },
      { name: "Deep Fried Tofu", viet: "Đậu hủ Chiên", price: "$3.99" },
      { name: "Wonton Soup", viet: "Hoành Thánh Súp", price: "$3.99" },
    ],
  },
  {
    id: "bun",
    emoji: "🍜",
    title: "Rice Noodle Bowls",
    viet: "Bún Thịt Nướng",
    items: [
      { name: "Grilled Pork & Eggroll", viet: "Bún Heo Nướng", price: "$10.99" },
      { name: "Grilled Beef & Eggroll", viet: "Bún Bò Nướng", price: "$10.99" },
      { name: "Grilled Chicken & Eggroll", viet: "Bún Gà Nướng", price: "$10.99" },
      { name: "Combination Bowl", viet: "Bún đặc biệt", price: "$11.99" },
      { name: "Lemongrass Beef", viet: "Bún bò xào sả", price: "$10.99" },
      { name: "Lemongrass Tofu", viet: "Bún đậu hủ xào sả", price: "$9.99" },
    ],
  },
  {
    id: "com",
    emoji: "🍖",
    title: "Grilled Meat & Rice",
    viet: "Cơm Thịt Nướng",
    items: [
      { name: "Grilled Pork with Rice", viet: "Cơm Heo Nướng", price: "$11.99" },
      { name: "Grilled Chicken with Rice", viet: "Cơm Gà Nướng", price: "$11.99" },
      { name: "Grilled Beef with Rice", viet: "Cơm Bò Nướng", price: "$11.99" },
      { name: "Grilled Porkchop with Rice", viet: "Cơm Sườn Nướng", price: "$11.99" },
      { name: "House Special Combination", viet: "Cơm đặc biệt", price: "$12.99" },
    ],
  },
  {
    id: "specialty",
    emoji: "🍲",
    title: "Specialty Soups",
    items: [
      { name: "Bún Bò Huế", price: "$9.99", desc: "Spicy beef noodle soup, Huế style" },
      { name: "Seafood Noodle Soup", viet: "Bánh Canh", price: "$11.99" },
      { name: "Wonton Egg Noodle Soup", viet: "Mì Hoành Thánh", price: "$9.99" },
    ],
  },
  {
    id: "rice",
    emoji: "🍚",
    title: "Fried Rice",
    viet: "Cơm Chiên",
    items: [
      { name: "Chicken Fried Rice", price: "$9.99" },
      { name: "Beef Fried Rice", price: "$9.99" },
      { name: "Shrimp Fried Rice", price: "$9.99" },
      { name: "Vegetarian Fried Rice", price: "$9.99" },
    ],
  },
  {
    id: "drinks",
    emoji: "🥤",
    title: "Drinks",
    viet: "Đồ Uống",
    items: [
      { name: "Vietnamese Iced Coffee", price: "$4.99", desc: "Dark roasted with condensed milk" },
      { name: "Boba Tea", price: "$4.99", desc: "Smoothie, milk tea, or fruit tea" },
      { name: "Fresh Lemonade / Limeade", price: "$4.99" },
      { name: "Jasmine or Green Tea", price: "$1.99" },
      { name: "Soft Drinks", price: "$1.99" },
    ],
  },
];

const categoryImages: Record<string, string> = {
  pho: phoBowl,
  "banh-mi": banhMi,
  appetizers: springRolls,
  bun: grilledPork,
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("pho");
  const active = menuData.find((c) => c.id === activeCategory)!;
  const heroImg = categoryImages[activeCategory];
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
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-body text-xs tracking-[0.15em] uppercase px-4 py-2.5 transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-white/15 text-white hover:text-white hover:border-white/30"
              }`}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {heroImg && (
            <div className={`relative reveal-scale ${isVisible ? "visible" : ""} stagger-2`}>
              <img
                src={heroImg}
                alt={active.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-brand-red/40" />
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-brand-green/40" />
            </div>
          )}

          <div className={`${heroImg ? "" : "md:col-span-2 max-w-2xl mx-auto w-full"} reveal ${isVisible ? "visible" : ""} stagger-3`}>
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-white">
                {active.title}
              </h3>
              {active.viet && (
                <span className="font-body text-sm text-brand-green italic">
                  {active.viet}
                </span>
              )}
            </div>
            {active.note && (
              <p className="font-body text-xs text-primary tracking-wider mb-8">
                {active.note}
              </p>
            )}
            <div className="space-y-0">
              {active.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between py-3.5 border-b border-white/10 group transition-colors duration-300 hover:bg-white/[0.02]"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-body text-white group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </span>
                      {item.viet && (
                        <span className="font-body text-xs text-white italic hidden sm:inline">
                          {item.viet}
                        </span>
                      )}
                    </div>
                    {item.desc && (
                      <p className="font-body text-xs text-white mt-0.5">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <span className="font-body text-sm text-primary font-semibold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
