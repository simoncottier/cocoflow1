export function ParcoursSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Mon parcours</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Ma découverte des soins énergétiques</h3>
          <p className="glass-text-white leading-relaxed mb-4">
            Mon chemin vers les soins énergétiques a commencé par une quête personnelle de bien-être et d'équilibre. 
            Face aux défis de la vie moderne, j'ai ressenti le besoin de me reconnecter à mes énergies profondes 
            et de découvrir des approches holistiques du mieux-être.
          </p>
          <p className="glass-text-white leading-relaxed">
            Cette découverte a transformé ma vision de la santé et du bien-être, m'amenant naturellement 
            vers le désir de partager ces bienfaits avec d'autres personnes en quête d'harmonie.
          </p>
        </div>

        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Mes formations et certifications</h3>
          <div className="space-y-4 glass-text-white">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Formation en Soins Énergétiques Traditionnels</h4>
                <p className="text-gray-600">Apprentissage des techniques fondamentales de canalisation énergétique</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Spécialisation en Harmonisation des Chakras</h4>
                <p className="text-gray-600">Techniques avancées pour l'équilibrage des centres énergétiques</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Libération Émotionnelle</h4>
                <p className="text-gray-600">Méthodes pour identifier et libérer les blocages émotionnels</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Formation Continue en Développement Personnel</h4>
                <p className="text-gray-600">Approches modernes du bien-être et de la croissance personnelle</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Ma philosophie de soin</h3>
          <p className="glass-text-white leading-relaxed mb-4">
            Je crois profondément que chaque être humain possède en lui les ressources nécessaires à sa guérison 
            et à son épanouissement. Mon rôle est de vous accompagner dans la redécouverte de ces ressources 
            intérieures et de faciliter leur activation.
          </p>
          <p className="glass-text-white leading-relaxed">
            Chaque séance est unique, adaptée à vos besoins du moment et respectueuse de votre rythme personnel. 
            L'authenticité, la bienveillance et l'écoute profonde sont au cœur de ma pratique.
          </p>
        </div>
      </div>
    </section>
  );
}
