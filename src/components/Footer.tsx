import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tahiti-sand pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold text-tahiti-terracotta mb-4">
              Pizza Papi
            </h3>
            <p className="font-body text-gray-700 mb-4">
              Une pizzeria familiale et conviviale à Tahiti proposant des pizzas
              délicieuses avec des ingrédients locaux et frais.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-tahiti-terracotta hover:text-tahiti-coral transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-tahiti-terracotta hover:text-tahiti-coral transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-tahiti-terracotta hover:text-tahiti-coral transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-tahiti-terracotta mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-body text-gray-700 hover:text-tahiti-terracotta transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="font-body text-gray-700 hover:text-tahiti-terracotta transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/adresses" className="font-body text-gray-700 hover:text-tahiti-terracotta transition-colors">
                  Nos adresses
                </Link>
              </li>
              {/* <li>
                <Link to="/avis" className="font-body text-gray-700 hover:text-tahiti-terracotta transition-colors">
                  Avis clients
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="font-body text-gray-700 hover:text-tahiti-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-tahiti-terracotta mb-4">
              Contactez-nous
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tahiti-terracotta mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-gray-700">
                  Papara : 6FQV+M29, Papara, Polynésie française<br />
                  Taiarapu-Est : 7MCM+WHH, Taiarapu-Est, Polynésie française<br />
                  Teva I Uta : 8FQP+123, Teva I Uta, Polynésie française
                </span>
              </div>
              <div className="flex items-start">


              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tahiti-terracotta mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-body text-gray-700">
                  Papara : +689 40 52 15 75<br />
                  Taiarapu-Est : +689 40 52 11 75<br />
                  Teva I Uta : +689 87 72 60 94
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-tahiti-coral/20 pt-6 text-center">
          <p className="font-body text-gray-700 text-sm">
            &copy; {currentYear} Pizza Papi. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
