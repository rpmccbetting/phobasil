import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Victoria N.",
    text: "I'm in Raleigh and whenever I visit Wilmington, I don't leave until I've eaten here. I've travelled many places and this hole in the wall takes the cake by far for the best Vietnamese food.",
  },
  {
    name: "Julie R.",
    text: "I've been here probably 50 times in 4 years. It's a little hole in the wall, but I swear this place never disappoints. The Brisket Pho and Pork Bánh Mì are my top favorites.",
  },
  {
    name: "Andrew A.",
    text: "Obviously the pho is the star, but if you aren't feeling soup the grilled meat platter is so good and so filling. A Wilmington staple that I will enjoy for years to come!",
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="reviews" className="py-32 md:py-44">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-5">
            What People Say
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white mb-5">
            From Our Guests
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`relative reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
            >
              <span className="font-heading text-7xl text-primary/15 absolute -top-4 -left-2 leading-none select-none">
                "
              </span>
              <blockquote className="pt-10 pb-8">
                <p className="font-body text-white leading-relaxed italic text-sm">
                  {review.text}
                </p>
              </blockquote>
              <div className="divider-gold mb-5" style={{ width: "30px" }} />
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
