
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";

// Données mockées pour le menu complet
const pizzaMenu = [
  {
    category: "Pizzas Classiques",
    items: [
      {
        id: 101,
        name: "Margarita",
        description: "Sauce tomate, mozzarella, basilic frais, huile d'olive extra vierge",
        price: 1400,
        tags: ["Végétarienne", "Classique"],
      },
      {
        id: 102,
        name: "Reine",
        description: "Sauce tomate, mozzarella, jambon, champignons frais",
        price: 1550,
        tags: ["Classique"],
      },
      {
        id: 103,
        name: "Quatre Fromages",
        description: "Sauce tomate, mozzarella, chèvre, bleu, emmental",
        price: 1650,
        tags: ["Végétarienne"],
      },
      {
        id: 104,
        name: "Végétarienne",
        description: "Sauce tomate, mozzarella, poivrons, oignons, champignons, olives, tomates fraîches",
        price: 1600,
        tags: ["Végétarienne"],
      },
    ]
  },
  {
    category: "Spécialités Tahitiennes",
    items: [
      {
        id: 201,
        name: "Pizza Tahitienne",
        description: "Sauce tomate, mozzarella, jambon, ananas frais de Moorea, olives",
        price: 1650,
        tags: ["Populaire"],
      },
      {
        id: 202,
        name: "Pizza Moana",
        description: "Sauce tomate, mozzarella, thon, oignons, poivrons, olives noires",
        price: 1750,
        tags: ["Poisson"],
      },
      {
        id: 203,
        name: "Pizza Vahine",
        description: "Crème fraîche, mozzarella, poulet mariné, curry, poivrons, banane plantain",
        price: 1850,
        tags: ["Épicé"],
      },
      {
        id: 204,
        name: "Pizza Bora Bora",
        description: "Sauce tomate, mozzarella, crevettes, ail, persil, citron vert",
        price: 1950,
        tags: ["Fruits de mer", "Premium"],
      },
    ]
  },
  {
    category: "Pizzas Gourmandes",
    items: [
      {
        id: 301,
        name: "Quatre Saisons",
        description: "Sauce tomate, mozzarella, jambon, artichauts, champignons, olives noires",
        price: 1650,
        tags: ["Classique"],
      },
      {
        id: 302,
        name: "Paysanne",
        description: "Crème fraîche, mozzarella, lardons, oignons, champignons, œuf",
        price: 1750,
        tags: [],
      },
      {
        id: 303,
        name: "Calzone",
        description: "Pizza repliée : sauce tomate, mozzarella, jambon, champignons, œuf",
        price: 1700,
        tags: ["Spécialité"],
      },
      {
        id: 304,
        name: "Carnivore",
        description: "Sauce tomate, mozzarella, pepperoni, jambon, lardons, viande hachée",
        price: 1950,
        tags: ["Viande"],
      },
    ]
  },
  {
    category: "Desserts & Boissons",
    items: [
      {
        id: 401,
        name: "Tiramisu",
        description: "Tiramisu traditionnel maison",
        price: 750,
        tags: ["Dessert"],
      },
      {
        id: 402,
        name: "Tarte Tatin",
        description: "Tarte tatin aux pommes servie tiède",
        price: 800,
        tags: ["Dessert"],
      },
      {
        id: 403,
        name: "Soda (33cl)",
        description: "Coca-Cola, Sprite, Fanta, Orangina",
        price: 300,
        tags: ["Boisson"],
      },
      {
        id: 404,
        name: "Eau minérale (50cl)",
        description: "Eau plate ou gazeuse",
        price: 250,
        tags: ["Boisson"],
      },
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(pizzaMenu[0].category);

  // Fonction pour formater le prix en XPF
  const formatPrice = (price: number) => {
    return `${price} XPF`;
  };

  return (
    <div className="min-h-screen bg-tahiti-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero du menu */}
        <section className="bg-tahiti-sand/30 py-16">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-tahiti-terracotta mb-4">
                  Notre Menu
                </h1>
                <div className="w-24 h-1 bg-tahiti-yellow mx-auto mb-6"></div>
                <p className="font-body text-gray-700 max-w-3xl mx-auto">
                  Des pizzas savoureuses préparées avec passion et des ingrédients de qualité
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Menu avec catégories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Onglets de catégories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {pizzaMenu.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-3 rounded-full font-body font-medium transition-colors ${
                    activeCategory === category.category
                      ? "bg-tahiti-terracotta text-white shadow-md"
                      : "bg-tahiti-sand/50 text-gray-700 hover:bg-tahiti-sand"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Affichage des items de la catégorie active */}
            {pizzaMenu.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={activeCategory === category.category ? "block" : "hidden"}
              >
                <AnimateOnScroll>
                  <h2 className="text-3xl font-display font-bold text-tahiti-terracotta mb-6 text-center">
                    {category.category}
                  </h2>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <AnimateOnScroll
                      key={item.id}
                      animation="fade-in-up"
                      delay={itemIndex * 100}
                    >
                      <div className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6 flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-display font-bold text-tahiti-terracotta">
                              {item.name}
                            </h3>
                            <span className="font-display font-bold text-tahiti-green">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                          <p className="font-body text-gray-700 text-sm mb-3">
                            {item.description}
                          </p>
                          {item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-block px-3 py-1 text-xs font-body font-medium bg-tahiti-yellow/30 text-tahiti-terracotta rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note sur les allergènes */}
        <section className="py-8 bg-tahiti-sand/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-display font-bold text-tahiti-terracotta text-lg mb-2">
                Informations importantes
              </h3>
              <p className="font-body text-gray-700 text-sm mb-2">
                <span className="font-medium">Allergènes :</span> Nos pizzas peuvent contenir des allergènes. 
                N'hésitez pas à nous demander la liste des ingrédients si vous avez des allergies ou des intolérances.
              </p>
              <p className="font-body text-gray-700 text-sm">
                <span className="font-medium">Prix affichés :</span> Tous nos prix sont en Francs Pacifique (XPF) et comprennent les taxes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
