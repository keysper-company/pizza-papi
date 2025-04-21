
import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
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
                  Contactez-nous
                </h1>
                <div className="w-24 h-1 bg-tahiti-yellow mx-auto mb-6"></div>
                <p className="font-body text-gray-700 max-w-3xl mx-auto">
                  Une question, une suggestion ou une demande spéciale ? Nous sommes à votre écoute !
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Section contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Formulaire de contact */}
              <AnimateOnScroll animation="fade-in-up">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-display font-bold text-tahiti-terracotta mb-6">
                    Envoyez-nous un message
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-body font-medium text-gray-700 mb-2"
                        >
                          Votre nom *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-tahiti-terracotta focus:border-tahiti-terracotta outline-none transition-colors font-body"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-body font-medium text-gray-700 mb-2"
                        >
                          Votre email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-tahiti-terracotta focus:border-tahiti-terracotta outline-none transition-colors font-body"
                          placeholder="votreemail@exemple.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-body font-medium text-gray-700 mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-tahiti-terracotta focus:border-tahiti-terracotta outline-none transition-colors font-body"
                          placeholder="+689 87 XX XX XX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block font-body font-medium text-gray-700 mb-2"
                        >
                          Sujet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-tahiti-terracotta focus:border-tahiti-terracotta outline-none transition-colors font-body"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="question">Question générale</option>
                          <option value="reservation">Réservation de table</option>
                          <option value="evenement">Événement / Groupe</option>
                          <option value="reclamation">Réclamation</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block font-body font-medium text-gray-700 mb-2"
                      >
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-tahiti-terracotta focus:border-tahiti-terracotta outline-none transition-colors font-body resize-none"
                        placeholder="Écrivez votre message ici..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-tahiti-terracotta hover:bg-tahiti-coral text-white font-body font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                  </form>
                </div>
              </AnimateOnScroll>

              {/* Informations de contact */}
              <div>
                <AnimateOnScroll animation="slide-in-left" delay={200}>
                  <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-display font-bold text-tahiti-terracotta mb-6">
                      Nos coordonnées
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-tahiti-sand/50 p-3 rounded-full mr-4">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-tahiti-terracotta" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-tahiti-terracotta text-lg mb-1">
                            Téléphone
                          </h3>
                          <p className="font-body text-gray-700">
                            Punaauia: +689 40 42 42 42<br />
                            Papeete: +689 40 43 43 43
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-tahiti-sand/50 p-3 rounded-full mr-4">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-tahiti-terracotta" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-tahiti-terracotta text-lg mb-1">
                            Email
                          </h3>
                          <p className="font-body text-gray-700">
                            contact@pizzapapi.pf
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-tahiti-sand/50 p-3 rounded-full mr-4">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-tahiti-terracotta" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-tahiti-terracotta text-lg mb-1">
                            Horaires
                          </h3>
                          <p className="font-body text-gray-700">
                            Lundi - Samedi: 11h00 - 14h00, 18h00 - 22h00<br />
                            Dimanche: 18h00 - 21h30
                          </p>
                          <p className="font-body text-sm text-gray-500 mt-1">
                            (Horaires variables selon les établissements)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-in" delay={400}>
                  <div className="bg-tahiti-green/10 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-display font-bold text-tahiti-green mb-4">
                      Suivez-nous
                    </h2>
                    <p className="font-body text-gray-700 mb-6">
                      Retrouvez nos actualités, promotions et événements sur nos réseaux sociaux
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-tahiti-terracotta hover:bg-tahiti-coral text-white p-3 rounded-full transition-colors shadow-md hover:shadow-lg"
                        aria-label="Facebook"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-tahiti-terracotta hover:bg-tahiti-coral text-white p-3 rounded-full transition-colors shadow-md hover:shadow-lg"
                        aria-label="Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-tahiti-terracotta hover:bg-tahiti-coral text-white p-3 rounded-full transition-colors shadow-md hover:shadow-lg"
                        aria-label="WhatsApp"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
