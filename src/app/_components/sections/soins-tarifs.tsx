export function SoinsTarifsSection() {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto space-y-8 pt-8">
        <h2 className="text-4xl font-bold text-white mb-8">Soins et tarifs</h2>
        {/* Tarifs principaux */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Tarifs</h3>
          
          <div className="text-center mb-8">
            <div className="inline-block p-6 rounded-lg glass-box max-w-md mx-auto">
              <h4 className="text-xl font-bold mb-2 text-white">Séance Complète</h4>
              <div className="text-3xl font-bold glass-text-white mb-2">140 CHF</div>
              <p className="glass-text-white opacity-75 mb-4">1h30</p>
              <p className="glass-text-white text-sm leading-relaxed">
                Guérison de l'âme et du corps 
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
                <h4 className="text-lg font-semibold mb-3 text-white">Thérapie psychocorporelle</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Connexion à votre âme pour libérer vos blocages physiques et émotionnels
                </p>
              </div>
              
              <div className="glass-box p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">Réalisation de soi</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Identifier les masques que vous portez et vous en libérer
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-box p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">Soins énergétiques et magnétisme</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Harmonisation et rééquilibrage des chakras
                </p>
              </div>
              
              <div className="glass-box p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-white">Coaching intuitif</h4>
                <p className="glass-text-white leading-relaxed text-sm">
                  Guidance pour vous recentrer, calmer le mental et vous révéler
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
                <h4 className="font-semibold mb-2 text-white">Échange</h4>
                <p className="glass-text-white leading-relaxed">
                  Les séances débutent par un échange qui nous permet de comprendre vos besoins 
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
                  Je procède ensuite à une canalisation qui nous permet de poursuivre 
                  la séance de manière personnalisée, assis ou allongé pour votre confort.
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
                  Après quelques respirations conscientes, mes mains sont guidées sur vos maux pour les libérer par magnétisme et par un partage des messages reçus.
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
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center glass-box p-6 rounded-lg">
              <span className="text-3xl mb-3 block">💳</span>
              <h4 className="font-semibold mb-2 text-white">Modalités de paiement</h4>
              <p className="glass-text-white text-sm">
                Le règlement se fait en espèces ou par Twint en fin de séance
              </p>
            </div>
            
            <div className="text-center glass-box p-6 rounded-lg">
              <span className="text-3xl mb-3 block">📅</span>
              <h4 className="font-semibold mb-2 text-white">Réservation</h4>
              <p className="glass-text-white text-sm mb-3">
                Sur rendez-vous uniquement. 
                </p><p className="glass-text-white text-sm mb-3">
                Annulation gratuite jusqu'à 24h avant le rendez-vous
              </p>
              <a 
                href="https://wa.me/41782592246" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg glass-box-strong hover:opacity-90 transition-all duration-300"
              >
                <span className="text-white text-sm font-medium">Réserver via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Rendez-vous</h3>
          <p className="glass-text-white mb-6 leading-relaxed text-center">
            Pour toute question ou pour planifier votre séance, n'hésitez pas à me contacter. 
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
