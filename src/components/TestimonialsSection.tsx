
import { useState, useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    id: 1,
    name: "Marie T.",
    content:
      "Pizza Papi, c'est notre rituel du vendredi soir en famille ! Les enfants adorent la Tahitienne avec son ananas frais. Le personnel est toujours accueillant et souriant.",
    rating: 5,
    date: "Octobre 2023",
  },
  {
    id: 2,
    name: "Thomas L.",
    content:
      "Meilleure pizza de l'île, sans hésitation ! J'ai voyagé partout et je peux vous dire que la Moana avec son thon frais local n'a rien à envier aux pizzerias italiennes. Un vrai régal !",
    rating: 5,
    date: "Août 2023",
  },
  {
    id: 3,
    name: "Hina P.",
    content:
      "Je vais régulièrement à l'enseigne de Papeete après le travail. Le service est rapide, les prix raisonnables et les pizzas sont généreuses. Que demander de plus ?",
    rating: 4,
    date: "Septembre 2023",
  },
  {
    id: 4,
    name: "Paul M.",
    content:
      "Une pizzeria qui valorise les ingrédients locaux, ça fait plaisir ! L'ambiance est détendue et familiale. On se sent comme à la maison chez Pizza Papi.",
    rating: 5,
    date: "Juillet 2023",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slider pour les témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-tahiti-background to-tahiti-sand/30">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tahiti-terracotta mb-2">
              Ce que disent nos clients
            </h2>
            <div className="w-24 h-1 bg-tahiti-yellow mx-auto mb-6"></div>
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#F4D35E"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="ml-2 font-display font-bold text-xl text-tahiti-terracotta">
                4.8/5
              </p>
            </div>
            <p className="font-body text-gray-700 max-w-3xl mx-auto">
              Plus de 1000 avis positifs de nos clients satisfaits
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 relative">
                    <svg
                      className="absolute top-6 left-6 w-12 h-12 text-tahiti-yellow/30"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div className="text-center">
                      <p className="font-body text-gray-700 mb-6 relative z-10">
                        "{testimonial.content}"
                      </p>
                      <div className="flex justify-center mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#F4D35E"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <h4 className="font-display font-bold text-tahiti-terracotta text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="font-body text-sm text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex
                    ? "bg-tahiti-terracotta"
                    : "bg-tahiti-terracotta/30"
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
