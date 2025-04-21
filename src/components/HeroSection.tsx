
import { Link } from "react-router-dom";
import AnimateOnScroll from "./AnimateOnScroll";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-tahiti-background to-tahiti-sand/30 overflow-hidden">
      {/* Décoration - Feuilles tropicales */}
      <div className="absolute -top-5 -left-10 w-40 h-40 text-tahiti-green/20 transform rotate-45">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21,4c0,0-3,3-8,3S5,4,5,4s3,3,3,8s-3,8-3,8s3-3,8-3s8,3,8,3s-3-3-3-8S21,4,21,4z"/>
        </svg>
      </div>
      <div className="absolute top-1/4 right-0 w-32 h-32 text-tahiti-green/20 transform -rotate-30">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21,4c0,0-3,3-8,3S5,4,5,4s3,3,3,8s-3,8-3,8s3-3,8-3s8,3,8,3s-3-3-3-8S21,4,21,4z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 text-tahiti-green/20 transform -rotate-15">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21,4c0,0-3,3-8,3S5,4,5,4s3,3,3,8s-3,8-3,8s3-3,8-3s8,3,8,3s-3-3-3-8S21,4,21,4z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-tahiti-terracotta mb-4">
                Bienvenue chez <br />
                <span className="relative">
                  Pizza Papi
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-tahiti-yellow"></span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-body text-gray-700 mb-8">
                La pizzeria familiale préférée des Tahitiens 
                depuis plus de 10 ans
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/menu"
                  className="bg-tahiti-terracotta hover:bg-tahiti-coral text-white font-body font-medium px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Voir notre menu
                </Link>
                <Link
                  to="/adresses"
                  className="bg-tahiti-green hover:bg-tahiti-green/90 text-white font-body font-medium px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Nos adresses
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={300}>
            <div className="relative flex justify-center">
              <div className="bg-white p-6 rounded-full shadow-xl transform rotate-3 max-w-sm mx-auto flex items-center justify-center">
                <img
                  src="/lovable-uploads/04a54dbc-9906-4332-b5c6-9c4abc9ab4c7.png"
                  alt="Pizza Papi Logo - Pizza traditionnelle"
                  className="w-48 h-48 md:w-72 md:h-72 object-contain rounded-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-tahiti-sand p-4 rounded-lg shadow-md transform -rotate-3">
                <p className="font-display font-bold text-tahiti-terracotta text-lg">
                  Des ingrédients<br />frais et locaux
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
