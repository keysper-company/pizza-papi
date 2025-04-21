import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-tahiti-background">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-md">
          <div className="text-tahiti-terracotta text-8xl font-display font-bold mb-6">
            404
          </div>
          <h1 className="text-2xl font-display font-bold text-gray-800 mb-4">
            Oups ! Page introuvable
          </h1>
          <p className="text-gray-600 mb-8 font-body">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="bg-tahiti-terracotta hover:bg-tahiti-coral text-white font-body font-medium px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg inline-block"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
