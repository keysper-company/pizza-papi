
import { Link } from "react-router-dom";
import AnimateOnScroll from "./AnimateOnScroll";

// Données mockées pour les pizzas
const featuredPizzas = [
  {
    id: 1,
    name: "Royale",
    description: "Bacon, jambon, champignons, oignons, tomates, olives",
    price: 1000,
    image: "https://www.pate-a-pizza.com/wp-content/uploads/2016/11/pizza-royale-1024x576.jpg",
    tags: ["Classique"],
  },
  {
    id: 2,
    name: "Fruits de Mer",
    description: "Fruits de mer sautés à l'ail, huile d'olive, tomates, poivrons, olives, œufs",
    price: 1000,
    image: "https://assets.afcdn.com/recipe/20160928/17857_w1024h1024c1cx2596cy1733.webp",
    tags: ["Fruits de mer"],
  },
  {
    id: 3,
    name: "Paysanne",
    description: "Bacon, jambon, champignons, oignons, mozzarella, crème",
    price: 1200,
    image: "https://img.cuisineaz.com/660x660/2018/06/19/i140519-pizza-paysanne.jpeg",
    tags: ["Gourmande", "Crème"],
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
