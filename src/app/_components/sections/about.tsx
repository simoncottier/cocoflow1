export function AboutSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">🕊️ À propos de Cocoflow</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Photo Gallery Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: '#007BA7'}}>Qui suis-je ?</h3>
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
                src="/IMG_1631.jpg" 
                alt="Photo professionnelle 3" 
                className="w-full h-64 object-cover object-top rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
          <p className="text-gray-800 leading-relaxed text-center">
            Bienvenue dans mon univers dédié au bien-être et à l'harmonie. Je suis là pour vous accompagner 
            dans votre parcours vers l'équilibre énergétique et la sérénité intérieure.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-4" style={{color: '#007BA7'}}>Mon approche</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Passionnée par l'énergétique depuis plusieurs années, j'accompagne les personnes dans leur quête d'équilibre 
            et de bien-être. Mon approche holistique considère l'être humain dans sa globalité : corps, mental et esprit.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Chaque personne étant unique, j'adapte mes soins selon vos besoins spécifiques et votre rythme, 
            dans un cadre bienveillant et sans jugement.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-4" style={{color: '#007BA7'}}>Ma formation</h3>
          <div className="text-gray-800 space-y-3">
            <p>• Formation en soins énergétiques traditionnels</p>
            <p>• Spécialisation en harmonisation des chakras</p>
            <p>• Techniques de libération émotionnelle</p>
            <p>• Formation continue en développement personnel</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-4" style={{color: '#007BA7'}}>Mes valeurs</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Bienveillance</h4>
              <p>Un accueil chaleureux dans un espace sécurisé</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Authenticité</h4>
              <p>Une approche sincère et transparente</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Respect</h4>
              <p>De votre rythme et de vos besoins</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Confidentialité</h4>
              <p>Respect absolu de votre intimité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

