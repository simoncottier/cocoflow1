export function AboutSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">À propos de Cocoflow</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Photo Gallery Section */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center glass-text-accent">Qui suis-je ?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="relative group">
              <img 
                src="/IMG_1625.jpg" 
                alt="Photo professionnelle 1" 
                className="w-full h-64 object-cover object-top rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div className="relative group">
              <img 
                src="/IMG_1626.jpg" 
                alt="Photo professionnelle 2" 
                className="w-full h-64 object-cover object-top rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div className="relative group">
              <img 
                src="/IMG_1631.JPG" 
                alt="Photo professionnelle 3" 
                className="w-full h-64 object-cover object-top rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
          <p className="glass-text-white leading-relaxed text-center">
            Bienvenue dans mon univers dédié au bien-être et à l'harmonie. Je suis là pour vous accompagner 
            dans votre parcours vers l'équilibre énergétique et la sérénité intérieure.
          </p>
        </div>

        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Mon approche</h3>
          <p className="glass-text-white leading-relaxed mb-4">
            Passionnée par l'énergétique depuis plusieurs années, j'accompagne les personnes dans leur quête d'équilibre 
            et de bien-être. Mon approche holistique considère l'être humain dans sa globalité : corps, mental et esprit.
          </p>
          <p className="glass-text-white leading-relaxed">
            Chaque personne étant unique, j'adapte mes soins selon vos besoins spécifiques et votre rythme, 
            dans un cadre bienveillant et sans jugement.
          </p>
        </div>

        {/* Specialties Section */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center glass-text-accent">Mes Spécialités</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="inline-block p-6 rounded-full glass-box mb-4">
                <span className="text-4xl">🔮</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 glass-text-accent">Clair-ressenti</h4>
              <p className="glass-text-white leading-relaxed">
                Perception intuitive des énergies subtiles pour identifier les déséquilibres 
                et guider la guérison naturelle de votre être.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-6 rounded-full glass-box mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 glass-text-accent">Lecture de l'âme</h4>
              <p className="glass-text-white leading-relaxed">
                Connexion profonde avec votre essence pour révéler les messages 
                et les chemins d'évolution de votre âme.
              </p>
            </div>
          </div>
        </div>

        {/* Problématiques traitées avec bulles */}
        <div className="glass-box-strong p-8 rounded-lg relative overflow-hidden">
          <h3 className="text-2xl font-semibold mb-6 text-center glass-text-accent">Ce que nous pouvons transformer ensemble</h3>
          <p className="glass-text-white text-center mb-8 leading-relaxed">
            Comme l'oxygène qui se libère dans l'eau, laissons vos blocages se dissoudre naturellement
          </p>
          
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
          </div>
        </div>

        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Ma formation</h3>
          <div className="glass-text-white space-y-3">
            <p>• Formation en soins énergétiques traditionnels</p>
            <p>• Spécialisation en harmonisation des chakras</p>
            <p>• Techniques de libération émotionnelle</p>
            <p>• Formation continue en développement personnel</p>
          </div>
        </div>

        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Mes valeurs</h3>
          <div className="grid md:grid-cols-2 gap-6 glass-text-white">
            <div>
              <h4 className="font-semibold mb-2 glass-text-accent">Bienveillance</h4>
              <p>Un accueil chaleureux dans un espace sécurisé</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 glass-text-accent">Authenticité</h4>
              <p>Une approche sincère et transparente</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 glass-text-accent">Respect</h4>
              <p>De votre rythme et de vos besoins</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 glass-text-accent">Confidentialité</h4>
              <p>Respect absolu de votre intimité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

