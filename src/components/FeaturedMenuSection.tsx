
import { Link } from "react-router-dom";
import AnimateOnScroll from "./AnimateOnScroll";

// Données mockées pour les pizzas
const featuredPizzas = [
  {
    id: 1,
    name: "Pizza Tahitienne",
    description: "Sauce tomate, mozzarella, jambon, ananas frais de Moorea, olives",
    price: 1650,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
    tags: ["Populaire"],
  },
  {
    id: 2,
    name: "Pizza Moana",
    description: "Sauce tomate, mozzarella, thon, oignons, poivrons, olives noires",
    price: 1750,
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?auto=format&fit=crop&q=80&w=600",
    tags: ["Poisson", "Nouveau"],
  },
  {
    id: 3,
    name: "Pizza Margarita",
    description: "Sauce tomate, mozzarella, basilic frais, huile d'olive extra vierge",
    price: 1400,
    image: "https://images.unsplash.com/photo-1627626775846-122b778965ae?auto=format&fit=crop&q=80&w=600",
    tags: ["Végétarienne", "Classique"],
  },
];

const FeaturedMenuSection = () => {
  // Fonction pour formater le prix en XPF
  const formatPrice = (price: number) => {
    return `${price} XPF`;
  };

  return (
    <section className="py-20 bg-tahiti-sand/30">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tahiti-terracotta mb-2">
              Nos meilleures pizzas
            </h2>
            <div className="w-24 h-1 bg-tahiti-yellow mx-auto mb-6"></div>
            <p className="font-body text-gray-700 max-w-3xl mx-auto">
              Découvrez nos pizzas les plus appréciées, préparées avec amour et des ingrédients de qualité
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPizzas.map((pizza, index) => (
            <AnimateOnScroll key={pizza.id} animation="fade-in-up" delay={index * 150}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display font-bold text-tahiti-terracotta">
                      {pizza.name}
                    </h3>
                    <span className="font-display font-bold text-tahiti-green">
                      {formatPrice(pizza.price)}
                    </span>
                  </div>
                  <p className="font-body text-gray-700 text-sm mb-4">
                    {pizza.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pizza.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs font-body font-medium bg-tahiti-yellow/30 text-tahiti-terracotta rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-block bg-tahiti-terracotta hover:bg-tahiti-coral text-white font-body font-medium px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Voir tout notre menu
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FeaturedMenuSection;
