
import AnimateOnScroll from "./AnimateOnScroll";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texte à gauche désormais, image à droite (ou dessous sur mobile) */}
        <AnimateOnScroll animation="fade-in-left" className="w-full md:w-1/2">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-tahiti-terracotta mb-4">
              Une pizzeria familiale au cœur de Tahiti
            </h2>
            <div className="w-20 h-1 bg-tahiti-yellow mb-6"></div>
            <p className="font-body text-gray-700 mb-4">
              Pizza Papi, c’est une histoire de famille et de passion pour la vraie pizza à l’italienne, préparée avec amour et des produits frais de nos îles.
            </p>
            <p className="font-body text-gray-700">
              Notre équipe vous accueille dans une ambiance conviviale et polynésienne, quel que soit votre âge ou votre appétit. Venez partager un moment authentique avec nous !
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-right" className="w-full md:w-1/2 flex justify-center">
          {/* Utilise l'image jointe */}
          <img
            src="/lovable-uploads/4347f5bd-caf6-42db-98b9-6a3daa9da5f5.png"
            alt="Illustration Pizza Papi"
            className="max-w-md w-full rounded-2xl shadow-xl object-cover"
            style={{ background: "#f7e7ce" }}
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
