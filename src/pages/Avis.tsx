
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";

// Données mockées pour tous les avis
const allReviews = [
  {
    id: 1,
    name: "Marie T.",
    content:
      "Pizza Papi, c'est notre rituel du vendredi soir en famille ! Les enfants adorent la Tahitienne avec son ananas frais. Le personnel est toujours accueillant et souriant.",
    rating: 5,
    date: "Octobre 2023",
    location: "Punaauia",
  },
  {
    id: 2,
    name: "Thomas L.",
    content:
      "Meilleure pizza de l'île, sans hésitation ! J'ai voyagé partout et je peux vous dire que la Moana avec son thon frais local n'a rien à envier aux pizzerias italiennes. Un vrai régal !",
    rating: 5,
    date: "Août 2023",
    location: "Papeete",
  },
  {
    id: 3,
    name: "Hina P.",
    content:
      "Je vais régulièrement à l'enseigne de Papeete après le travail. Le service est rapide, les prix raisonnables et les pizzas sont généreuses. Que demander de plus ?",
    rating: 4,
    date: "Septembre 2023",
    location: "Papeete",
  },
  {
    id: 4,
    name: "Paul M.",
    content:
      "Une pizzeria qui valorise les ingrédients locaux, ça fait plaisir ! L'ambiance est détendue et familiale. On se sent comme à la maison chez Pizza Papi.",
    rating: 5,
    date: "Juillet 2023",
    location: "Punaauia",
  },
  {
    id: 5,
    name: "Vaiana R.",
    content:
      "Je suis une habituée de la pizzeria de Punaauia. J'y vais au moins une fois par semaine et je n'ai jamais été déçue. Les prix sont raisonnables et les pizzas excellentes.",
    rating: 5,
    date: "Juin 2023",
    location: "Punaauia",
  },
  {
    id: 6,
    name: "Lucas K.",
    content:
      "Après avoir essayé presque toutes les pizzerias de Tahiti, je reviens toujours chez Pizza Papi. La pâte est parfaite : fine et croustillante sur les bords, mais moelleuse au centre.",
    rating: 5,
    date: "Mai 2023",
    location: "Papeete",
  },
  {
    id: 7,
    name: "Sophie M.",
    content:
      "La pizza végétarienne est délicieuse et bien garnie. C'est rare de trouver des options végétariennes aussi savoureuses à Tahiti. Un grand merci !",
    rating: 4,
    date: "Avril 2023",
    location: "Punaauia",
  },
  {
    id: 8,
    name: "Teiki F.",
    content:
      "Les ingrédients sont frais et de qualité. J'apprécie particulièrement les combinaisons originales comme la Pizza Vahine avec sa touche de curry et banane plantain.",
    rating: 4,
    date: "Mars 2023",
    location: "Papeete",
  },
];

const Avis = () => {
  const [filterLocation, setFilterLocation] = useState<string | null>(null);

  // Filtrer les avis en fonction de l'emplacement sélectionné
  const filteredReviews = filterLocation
    ? allReviews.filter((review) => review.location === filterLocation)
    : allReviews;

  // Calculer la note moyenne
  const averageRating =
    allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length;

  return (
    <div className="min-h-screen bg-tahiti-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero de la page */}
        <section className="bg-tahiti-sand/30 py-16">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-tahiti-terracotta mb-4">
                  Avis Clients
                </h1>
                <div className="w-24 h-1 bg-tahiti-yellow mx-auto mb-6"></div>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={star <= Math.round(averageRating) ? "#F4D35E" : "#D1D5DB"}
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
                    {averageRating.toFixed(1)}/5
                  </p>
                </div>
                <p className="font-body text-gray-700 max-w-3xl mx-auto">
                  Découvrez ce que nos clients pensent de nos pizzerias
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section des avis */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filtres */}
            <div className="mb-12 flex justify-center">
              <div className="bg-white rounded-lg shadow-md p-4 inline-flex space-x-4">
                <button
                  onClick={() => setFilterLocation(null)}
                  className={`px-4 py-2 rounded-md font-body font-medium transition-colors ${
                    filterLocation === null
                      ? "bg-tahiti-terracotta text-white"
                      : "bg-tahiti-sand/30 text-gray-700 hover:bg-tahiti-sand/50"
                  }`}
                >
                  Tous
                </button>
                <button
                  onClick={() => setFilterLocation("Punaauia")}
                  className={`px-4 py-2 rounded-md font-body font-medium transition-colors ${
                    filterLocation === "Punaauia"
                      ? "bg-tahiti-terracotta text-white"
                      : "bg-tahiti-sand/30 text-gray-700 hover:bg-tahiti-sand/50"
                  }`}
                >
                  Punaauia
                </button>
                <button
                  onClick={() => setFilterLocation("Papeete")}
                  className={`px-4 py-2 rounded-md font-body font-medium transition-colors ${
                    filterLocation === "Papeete"
                      ? "bg-tahiti-terracotta text-white"
                      : "bg-tahiti-sand/30 text-gray-700 hover:bg-tahiti-sand/50"
                  }`}
                >
                  Papeete
                </button>
              </div>
            </div>

            {/* Grille d'avis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review, index) => (
                <AnimateOnScroll
                  key={review.id}
                  animation="fade-in-up"
                  delay={index * 100}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-display font-bold text-tahiti-terracotta text-lg">
                          {review.name}
                        </h3>
                        <p className="font-body text-sm text-gray-500">
                          {review.date} • {review.location}
                        </p>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={star <= review.rating ? "#F4D35E" : "#D1D5DB"}
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
                    </div>
                    <div className="flex-grow">
                      <p className="font-body text-gray-700">
                        "{review.content}"
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Laissez votre avis */}
            <AnimateOnScroll>
              <div className="mt-16 bg-tahiti-green/10 p-8 rounded-lg shadow-md max-w-3xl mx-auto text-center">
                <h3 className="font-display font-bold text-tahiti-terracotta text-2xl mb-4">
                  Partagez votre expérience
                </h3>
                <p className="font-body text-gray-700 mb-6">
                  Votre avis nous aide à améliorer constamment notre service et nos pizzas.
                  Partagez vos commentaires sur Google ou sur nos réseaux sociaux !
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="bg-tahiti-terracotta hover:bg-tahiti-coral text-white font-body font-medium px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg inline-flex items-center"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M22.0367422,10 L14,10 L14,14 L18.8200197,14 C18.4036009,15.4938235 17.3501,16.7309163 15.9898629,17.4233584 L19.047996,19.8558583 C21.0556653,17.9913721 22.2222222,15.2470858 22.2222222,12 C22.2222222,11.3294962 22.1482759,10.6517113 22.0367422,10 Z M5.44444444,8.45714286 C5.90333016,7.58314833 6.55848968,6.84355435 7.34572888,6.31946179 C8.59022666,5.48285581 10.0745855,5 11.6666667,5 C13.9877849,5 16.0642868,6.13598652 17.3958764,7.88048963 L20.0870729,5.19944765 C18.0872686,2.82671119 15.0721038,1.22222222 11.6666667,1.22222222 C7.18335247,1.22222222 3.34438724,3.87244115 1.46854927,7.74714245 L4.81139064,10.3486184 C5.28150926,9.64444444 5.43187311,8.88888889 5.44444444,8.45714286 Z M11.7037037,22.7777778 C15.0576827,22.7777778 18.022963,21.2221275 20.0364685,18.8309179 L16.9783352,16.3983776 C15.8389661,17.2138146 14.3589148,17.7 11.7037037,17.7 C8.60121509,17.7 5.96524257,15.8382734 5.05212953,13.2511173 L1.62100827,15.7650941 C3.47145235,19.911766 7.34230051,22.7777778 11.7037037,22.7777778 Z M5,11 C5,11.7613293 5.11433104,12.5019099 5.33096455,13.2066219 L1.90094477,15.7201832 C1.31516901,14.2641156 1,12.6711158 1,11 C1,9.32888422 1.31516901,7.73588441 1.90094477,6.27981678 L5.33096455,8.79337812 C5.11433104,9.49809013 5,10.2386707 5,11 Z" />
                    </svg>
                    Avis Google
                  </a>
                  <a
                    href="#"
                    className="bg-tahiti-green hover:bg-tahiti-green/90 text-white font-body font-medium px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg inline-flex items-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Avis;
