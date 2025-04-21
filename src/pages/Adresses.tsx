
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Données mockées pour les adresses
const locations = [
  {
    id: 1,
    name: "Pizza Papi Punaauia",
    address: "Centre commercial Tamanu, PK 18 Côté montagne, Punaauia, Tahiti",
    phone: "+689 40 42 42 42",
    email: "punaauia@pizzapapi.pf",
    hours: [
      { days: "Lundi - Jeudi", hours: "11h00 - 14h00, 18h00 - 21h30" },
      { days: "Vendredi - Samedi", hours: "11h00 - 14h00, 18h00 - 22h30" },
      { days: "Dimanche", hours: "18h00 - 21h30" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54432.111258718695!2d-149.64378754814453!3d-17.631207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769bb6a42e84e453%3A0x3adbb3a47c895c86!2sPunaauia%2C%20French%20Polynesia!5e0!3m2!1sen!2sus!4v1714001323842!5m2!1sen!2sus",
  },
  {
    id: 2,
    name: "Pizza Papi Papeete",
    address: "Centre Vaima, Front de mer, Papeete, Tahiti",
    phone: "+689 40 43 43 43",
    email: "papeete@pizzapapi.pf",
    hours: [
      { days: "Lundi - Jeudi", hours: "11h00 - 14h30, 18h00 - 21h30" },
      { days: "Vendredi - Samedi", hours: "11h00 - 14h30, 18h00 - 23h00" },
      { days: "Dimanche", hours: "Fermé" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14881.858437059271!2d-149.57560716334228!3d-17.53867179098728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769a3bdbdb9f2e23%3A0x27312e101a28e469!2sCentre%20Vaima%2C%20Boulevard%20Pomare%2C%20Papeete%2C%20French%20Polynesia!5e0!3m2!1sen!2sus!4v1714001380853!5m2!1sen!2sus",
  },
];

const Adresses = () => {
  // Fonction pour ouvrir un lien Google Maps
  const openGoogleMaps = (address: string) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, "_blank");
  };

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
                  Nos Adresses
                </h1>
                <div className="w-24 h-1 bg-tahiti-yellow mx-auto mb-6"></div>
                <p className="font-body text-gray-700 max-w-3xl mx-auto">
                  Retrouvez-nous dans nos deux pizzerias à Tahiti
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section des adresses */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {locations.map((location, index) => (
                <AnimateOnScroll
                  key={location.id}
                  animation={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Carte Google Maps */}
                    <div className="h-64 w-full">
                      <iframe
                        src={location.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Carte de ${location.name}`}
                      ></iframe>
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-display font-bold text-tahiti-terracotta mb-4">
                        {location.name}
                      </h2>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-tahiti-terracotta mr-3 mt-0.5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-body text-gray-700">
                            {location.address}
                          </span>
                        </div>

                        <div className="flex items-start">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-tahiti-terracotta mr-3 mt-0.5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="font-body text-gray-700">
                            {location.phone}
                          </span>
                        </div>

                        <div className="flex items-start">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-tahiti-terracotta mr-3 mt-0.5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-body text-gray-700">
                            {location.email}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-display font-bold text-tahiti-terracotta text-lg mb-3">
                          Horaires d'ouverture
                        </h3>
                        <ul className="space-y-2">
                          {location.hours.map((hour, hourIndex) => (
                            <li key={hourIndex} className="flex justify-between font-body text-gray-700">
                              <span className="font-medium">{hour.days}</span>
                              <span>{hour.hours}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-4">
                        <a 
                          href={`tel:${location.phone}`}
                          className="flex-1 bg-tahiti-green hover:bg-tahiti-green/90 text-white font-body font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg text-center"
                        >
                          Appeler
                        </a>
                        <button
                          onClick={() => openGoogleMaps(location.address)}
                          className="flex-1 bg-tahiti-terracotta hover:bg-tahiti-coral text-white font-body font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                        >
                          Voir sur Google Maps
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Info livraison */}
            <AnimateOnScroll>
              <div className="mt-16 bg-tahiti-yellow/20 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <div className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-tahiti-terracotta mr-3 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <div>
                    <h3 className="font-display font-bold text-tahiti-terracotta text-lg mb-2">
                      À propos de la livraison
                    </h3>
                    <p className="font-body text-gray-700">
                      Actuellement, nos pizzas sont à emporter ou à déguster sur place. Nous travaillons à mettre en place un service de livraison prochainement ! N'hésitez pas à nous appeler pour commander à l'avance.
                    </p>
                  </div>
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

export default Adresses;
