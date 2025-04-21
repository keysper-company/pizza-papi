
import AnimateOnScroll from "./AnimateOnScroll";

const AboutSection = () => {
  return (
    <section className="py-20 bg-tahiti-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tahiti-terracotta mb-2">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-tahiti-yellow mx-auto mb-6"></div>
            <p className="font-body text-gray-700 max-w-3xl mx-auto">
              Une aventure familiale qui a commencé il y a plus de 10 ans sur l'île de Tahiti.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">  <AnimateOnScroll animation="slide-in-right">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
            src="https://keysper-company.github.io/pizza-papi/lovable-uploads/couverture.png"
            alt="Pizza Papi restaurant"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-tahiti-terracotta p-6 rounded-lg shadow-lg">
                <p className="font-display text-white text-2xl font-bold">Depuis 2013</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <div>
              <h3 className="text-2xl font-display font-bold text-tahiti-terracotta mb-4">
                Une pizzeria familiale au cœur de Tahiti
              </h3>
              <p className="font-body text-gray-700 mb-6">
                Pizza Papi a été fondée par la famille Gayte, passionnée par la cuisine italienne et les saveurs polynésiennes. Notre mission : proposer des pizzas délicieuses qui plaisent aux locaux comme aux touristes, en utilisant des ingrédients frais et, quand c'est possible, locaux.
              </p>
              <p className="font-body text-gray-700 mb-6">
                Retrouvez nos pizzerias familiales à Papara, Teva et Taiarapu !
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-tahiti-sand/50 rounded-lg p-4 text-center">
                  <p className="font-display text-4xl font-bold text-tahiti-green mb-2">3</p>
                  <p className="font-body text-gray-700">Pizzerias</p>
                </div>
                <div className="bg-tahiti-sand/50 rounded-lg p-4 text-center">
                  <p className="font-display text-4xl font-bold text-tahiti-green mb-2">10</p>
                  <p className="font-body text-gray-700">Variétés de pizzas</p>
                </div>
                <div className="bg-tahiti-sand/50 rounded-lg p-4 text-center">
                  <p className="font-display text-4xl font-bold text-tahiti-green mb-2">10+</p>
                  <p className="font-body text-gray-700">Années d'expérience</p>
                </div>
                <div className="bg-tahiti-sand/50 rounded-lg p-4 text-center">
                  <p className="font-display text-4xl font-bold text-tahiti-green mb-2">1000+</p>
                  <p className="font-body text-gray-700">Clients satisfaits</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;