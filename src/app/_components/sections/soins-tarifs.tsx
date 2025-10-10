export function SoinsTarifsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Soins et tarifs</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Tarifs principaux */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">Tarifs</h3>
          
          <div className="text-center mb-8">
            <div className="inline-block p-6 rounded-lg glass-box max-w-md mx-auto">
              <h4 className="text-xl font-bold mb-2 text-white">Séance Complète</h4>
              <div className="text-3xl font-bold glass-text-white mb-2">90 CHF</div>
              <p className="glass-text-white opacity-75 mb-4">Environ 1h30</p>
              <p className="glass-text-white text-sm leading-relaxed">
                Guérison de l'âme et du corps - Accompagnement complet pour votre bien-être global
              </p>
            </div>
          </div>
        </div>

        {/* Types de thérapies */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Approches thérapeutiques</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass-box p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">Thérapie psycho corporelle</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Approche holistique qui considère l'interconnexion entre le corps et l'esprit 
                  pour libérer les tensions et retrouver l'harmonie.
                </p>
              </div>
              
              <div className="glass-box p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">Coaching intuitif de vie</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Guidance personnalisée pour vous accompagner dans vos choix de vie 
                  et révéler votre potentiel authentique.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-box p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">Libération psycho-émotionnelle</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Techniques douces pour identifier et libérer les blocages émotionnels 
                  qui entravent votre épanouissement.
                </p>
              </div>
              
              <div className="glass-box p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">Rééquilibrage psycho-émotionnel</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Accompagnement pour identifier et réparer les causes de vos chocs émotionnels, 
                  origine de l'essentiel de vos problèmes de santé et comportementaux.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Déroulement des séances */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Déroulement d'une séance</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full glass-box flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-white">1</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Échange initial</h4>
                <p className="glass-text-white leading-relaxed">
                  Les séances débutent par un échange qui nous permettra de comprendre vos besoins 
                  et d'adapter le soin à votre état du moment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full glass-box flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-white">2</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Canalisation et guidance</h4>
                <p className="glass-text-white leading-relaxed">
                  Je procède ensuite à une canalisation qui nous permettra de poursuivre 
                  la séance de manière personnalisée, assis ou allongé selon vos préférences.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full glass-box flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Le soin énergétique</h4>
                <p className="glass-text-white leading-relaxed mb-3">
                  Après quelques respirations conscientes, mes mains sont guidées sur vos maux. 
                  Vous restez habillé et conscient pendant toute la consultation.
                </p>
                <p className="glass-text-white leading-relaxed text-sm italic">
                  Les séances se déroulent dans un cadre bienveillant et sécurisé, 
                  que ce soit en position assise ou allongée selon votre confort.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Informations pratiques</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center glass-box p-6 rounded-lg">
              <span className="text-3xl mb-3 block">💳</span>
              <h4 className="font-semibold mb-2 text-white">Modalités de paiement</h4>
              <p className="glass-text-white text-sm">
                Espèces, virement bancaire ou applications de paiement mobile
              </p>
            </div>
            
            <div className="text-center glass-box p-6 rounded-lg">
              <span className="text-3xl mb-3 block">📅</span>
              <h4 className="font-semibold mb-2 text-white">Réservation</h4>
              <p className="glass-text-white text-sm">
                Sur rendez-vous uniquement. Annulation gratuite jusqu'à 24h avant
              </p>
            </div>
            
            <div className="text-center glass-box p-6 rounded-lg">
              <span className="text-3xl mb-3 block">🎯</span>
              <h4 className="font-semibold mb-2 text-white">Suivi personnalisé</h4>
              <p className="glass-text-white text-sm">
                Conseils et recommandations adaptés à votre évolution
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-box-strong p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Prendre rendez-vous</h3>
          <p className="glass-text-white mb-6 leading-relaxed">
            Pour toute question ou pour planifier votre séance, n'hésitez pas à me contacter. 
            Je serai ravie d'échanger avec vous sur vos besoins.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="tel:+41782592246" 
               className="inline-flex items-center px-6 py-3 rounded-full glass-box hover:glass-box-strong transition-all duration-300">
              <span className="text-2xl mr-3">📞</span>
              <span className="text-white font-medium">078 259 22 46</span>
            </a>
            <a href="mailto:contact@cocoflow.ch" 
               className="inline-flex items-center px-6 py-3 rounded-full glass-box hover:glass-box-strong transition-all duration-300">
              <span className="text-2xl mr-3">📧</span>
              <span className="text-white font-medium">contact@cocoflow.ch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
