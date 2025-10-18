export function AboutSection() {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto space-y-8 pt-8">
        <h2 className="text-3xl font-bold text-white mb-8">À propos</h2>
        {/* Photo Gallery Section */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Qui suis-je ?</h3>
          <div className="flex justify-start mb-6">
            <div className="relative group w-1/3">
              <img 
                src="/IMG_1625.jpg" 
                alt="Photo professionnelle" 
                className="w-full object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Approche</h3>
          <p className="glass-text-white leading-relaxed mb-4">
            Je crois profondément que chaque être possède en lui les ressources nécessaires à sa guérison et son épanouissement. 
            Mon rôle est de vous accompagner en canalisant les messages qui vous sont destinés pour retrouver une forme de sérénité.
          </p>
          <p className="glass-text-white leading-relaxed mb-4">
            Mon approche holistique considère l'être dans sa globalité : corps, mental et esprit.
          </p>
          <p className="glass-text-white leading-relaxed">
            Nous sommes tous uniques, j'adapte mes soins selon vos besoins, en suivant votre rythme, dans un cadre bienveillant et sans jugement.
          </p>
        </div>

        {/* Specialties Section */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Spécialités</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Soins énergétiques et magnétisme</h4>
              <p className="glass-text-white leading-relaxed">
                Harmonisation des chakras, rééquilibrage et recentrage
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Thérapie psycho-émotionnelle</h4>
              <p className="glass-text-white leading-relaxed">
                Trouver l'origine des maux et les libérer
              </p>
            </div>
          </div>
        </div>

        {/* Problématiques traitées avec bulles */}
        <div className="glass-box-strong p-8 rounded-lg relative overflow-hidden">
          <h3 className="text-2xl font-semibold mb-6 text-white">Ce que nous pouvons transformer ensemble</h3>
          
          <div className="relative min-h-[300px] flex items-center justify-center">
            {/* Bulles flottantes */}
            <div className="bubble bubble-1">
              <span>Douleurs chroniques</span>
            </div>
            <div className="bubble bubble-2">
              <span>Fatigue</span>
            </div>
            <div className="bubble bubble-3">
              <span>Burn-out</span>
            </div>
            <div className="bubble bubble-4">
              <span>Blocages émotionnels</span>
            </div>
            <div className="bubble bubble-5">
              <span>Perte de sens</span>
            </div>
            <div className="bubble bubble-6">
              <span>Conscience de soi</span>
            </div>
          </div>
        </div>

        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Valeurs</h3>
          <div className="grid md:grid-cols-2 gap-6 glass-text-white">
            <div>
              <h4 className="font-semibold mb-2 text-white">Bienveillance</h4>
              <p>Un accueil chaleureux dans un espace sécurisé</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Authenticité</h4>
              <p>Une approche sincère et transparente</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Respect</h4>
              <p>De votre rythme et de vos besoins</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Confidentialité</h4>
              <p>Respect absolu de votre intimité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

