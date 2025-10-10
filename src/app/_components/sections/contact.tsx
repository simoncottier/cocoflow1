"use client";

import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi - à remplacer par votre API d'envoi d'email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Pour l'instant, on simule un succès
      console.log('Formulaire envoyé:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Informations de contact */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">Prenons contact</h3>
          <p className="glass-text-white text-center mb-8 leading-relaxed">
            N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous. 
            Je serais ravie d'échanger avec vous sur vos besoins et de vous accompagner dans votre cheminement.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Adresse */}
            <div className="text-center glass-box p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-white">Adresse</h4>
              <div className="glass-text-white space-y-1">
                <p>Chemin du Pré Jaquet 1A</p>
                <p>1032 Romanel sur Lausanne</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Chemin+du+Pré+Jaquet+1A+1032+Romanel+sur+Lausanne" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
              >
                <span className="text-white text-sm font-medium">Voir sur la carte</span>
              </a>
            </div>

            {/* Email */}
            <div className="text-center glass-box p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-white">Email</h4>
              <p className="glass-text-white mb-3">contact@cocoflow.ch</p>
              <a 
                href="mailto:contact@cocoflow.ch" 
                className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
              >
                <span className="text-white text-sm font-medium">Envoyer un email</span>
              </a>
            </div>

            {/* Téléphone */}
            <div className="text-center glass-box p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-white">Téléphone</h4>
              <p className="glass-text-white mb-3">078 259 22 46</p>
              <div className="flex flex-col space-y-2">
                <a 
                  href="tel:+41782592246" 
                  className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                >
                  <span className="text-white text-sm font-medium">Appeler</span>
                </a>
                <a 
                  href="https://wa.me/41782592246" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                >
                  <span className="text-white text-sm font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Formulaire de contact</h3>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-lg glass-box border-l-4 border-green-400">
              <p className="glass-text-white">
                Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-lg glass-box border-l-4 border-red-400">
              <p className="glass-text-white">
                Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou me contacter directement.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg glass-box focus:outline-none glass-text-white placeholder-gray-400"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg glass-box focus:outline-none glass-text-white placeholder-gray-400"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg glass-box border border-opacity-30 border-white focus:border-blue-400 focus:outline-none glass-text-white placeholder-gray-400"
                placeholder="Prise de rendez-vous, question..."
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg glass-box focus:outline-none glass-text-white placeholder-gray-400 resize-none"
                placeholder="Décrivez vos besoins, vos questions ou votre demande de rendez-vous..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 rounded-lg glass-box-strong hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="glass-text-white font-medium">Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span className="glass-text-white font-medium">Envoyer le message</span>
                  </>
                )}
              </button>
            </div>
          </form>
          
          <p className="text-sm glass-text-white opacity-75 text-center mt-6">
            * Champs obligatoires. Vos informations personnelles sont protégées et ne seront jamais partagées.
          </p>
        </div>

        {/* Horaires et informations pratiques */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Informations pratiques</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <h4 className="text-lg font-semibold text-white">Disponibilités</h4>
              </div>
              <div className="glass-text-white space-y-2">
                <p>• Rendez-vous sur demande</p>
                <p>• Séances en semaine et weekend</p>
                <p>• Réponse aux messages sous 24h</p>
                <p>• Première consultation téléphonique gratuite (15 min)</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <h4 className="text-lg font-semibold text-white">Accès</h4>
              </div>
              <div className="glass-text-white space-y-2">
                <p>• Parking gratuit disponible</p>
                <p>• Transports publics : Bus ligne 16 et LEB</p>
                <p>• À 10 minutes de Lausanne</p>
                <p>• Séances à distance également possibles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo de la plage */}
        <div className="glass-box-strong p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-6 text-white">Notre environnement</h3>
          <div className="mb-4">
            <div className="w-full h-64 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center glass-box">
              <p className="glass-text-white text-center">
                Espace réservé pour<br />
                la photo de la plage
              </p>
            </div>
          </div>
          <p className="glass-text-white leading-relaxed">
            Un cadre naturel apaisant près du lac, parfait pour favoriser la détente et l'introspection lors de nos séances.
          </p>
        </div>
      </div>
    </section>
  );
}