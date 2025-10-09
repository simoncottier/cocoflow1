export function RessourcesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Mes ressources</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Outils pour votre bien-être</h3>
          <p className="glass-text-white leading-relaxed">
            Découvrez une sélection de ressources que je recommande pour enrichir votre parcours de bien-être 
            et prolonger les bienfaits de nos séances. Ces outils et pratiques peuvent vous accompagner 
            au quotidien dans votre quête d'équilibre et d'harmonie.
          </p>
        </div>

        {/* Méditations et exercices */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6" style={{color: '#007BA7'}}>Méditations guidées et exercices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <div className="flex items-center mb-3">
                <span className="w-6 h-6 rounded-full mr-3" style={{backgroundColor: '#007BA7'}}></span>
                <h4 className="font-semibold glass-text-accent">Méditation des chakras</h4>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Une méditation guidée de 15 minutes pour harmoniser vos centres énergétiques et retrouver votre équilibre intérieur.
              </p>
              <button 
                className="text-sm px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#007BA7'}}
              >
                Télécharger (MP3)
              </button>
            </div>

            <div className="p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <div className="flex items-center mb-3">
                <span className="w-6 h-6 rounded-full mr-3" style={{backgroundColor: '#007BA7'}}></span>
                <h4 className="font-semibold glass-text-accent">Respiration consciente</h4>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Techniques de respiration pour apaiser le mental, réduire le stress et se reconnecter à l'instant présent.
              </p>
              <button 
                className="text-sm px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#007BA7'}}
              >
                Guide PDF
              </button>
            </div>

            <div className="p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <div className="flex items-center mb-3">
                <span className="w-6 h-6 rounded-full mr-3" style={{backgroundColor: '#007BA7'}}></span>
                <h4 className="font-semibold glass-text-accent">Rituel du soir</h4>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Un rituel apaisant pour clôturer votre journée, libérer les tensions et préparer un sommeil réparateur.
              </p>
              <button 
                className="text-sm px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#007BA7'}}
              >
                Télécharger (MP3)
              </button>
            </div>

            <div className="p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <div className="flex items-center mb-3">
                <span className="w-6 h-6 rounded-full mr-3" style={{backgroundColor: '#007BA7'}}></span>
                <h4 className="font-semibold glass-text-accent">Auto-massage énergétique</h4>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Techniques simples d'auto-massage pour stimuler la circulation énergétique et soulager les tensions.
              </p>
              <button 
                className="text-sm px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#007BA7'}}
              >
                Guide vidéo
              </button>
            </div>
          </div>
        </div>

        {/* Lectures recommandées */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6" style={{color: '#007BA7'}}>Lectures inspirantes</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <span className="w-6 h-6 rounded-full mt-1" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold mb-1" style={{color: '#007BA7'}}>"Le Pouvoir du moment présent" - Eckhart Tolle</h4>
                <p className="text-gray-700 text-sm">
                  Un guide essentiel pour apprendre à vivre dans l'instant présent et se libérer des schémas mentaux limitants.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <span className="w-6 h-6 rounded-full mt-1" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold mb-1" style={{color: '#007BA7'}}>"Anatomie de l'Esprit" - Caroline Myss</h4>
                <p className="text-gray-700 text-sm">
                  Une exploration fascinante de la connexion entre les chakras, les émotions et la santé physique.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <span className="w-6 h-6 rounded-full mt-1" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold mb-1" style={{color: '#007BA7'}}>"Les Quatre Accords Toltèques" - Don Miguel Ruiz</h4>
                <p className="text-gray-700 text-sm">
                  Quatre principes simples mais puissants pour transformer votre vie et retrouver votre liberté personnelle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications et outils */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6" style={{color: '#007BA7'}}>Applications et outils recommandés</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <span className="w-10 h-10 mx-auto mb-2 rounded-full block" style={{backgroundColor: '#007BA7'}}></span>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Insight Timer</h4>
              <p className="text-gray-700 text-xs">
                Méditations guidées gratuites et minuteur de méditation
              </p>
            </div>

            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <span className="w-10 h-10 mx-auto mb-2 rounded-full block" style={{backgroundColor: '#007BA7'}}></span>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Sleep Stories</h4>
              <p className="text-gray-700 text-xs">
                Histoires apaisantes pour favoriser l'endormissement
              </p>
            </div>

            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <span className="w-10 h-10 mx-auto mb-2 rounded-full block" style={{backgroundColor: '#007BA7'}}></span>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Musiques vibratoires</h4>
              <p className="text-gray-700 text-xs">
                Fréquences sacrées 432Hz et sons binauraux
              </p>
            </div>
          </div>
        </div>

        {/* Conseils pratiques */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6" style={{color: '#007BA7'}}>Conseils pour votre pratique quotidienne</h3>
          <div className="space-y-4 glass-text-white">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Commencez votre journée en conscience</h4>
                <p className="text-sm">Accordez-vous quelques minutes le matin pour vous centrer avant de commencer vos activités.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Hydratez-vous avec intention</h4>
                <p className="text-sm">Buvez de l'eau pure en conscience, en visualisant cette eau qui nourrit chaque cellule de votre corps.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Reconnectez-vous à la nature</h4>
                <p className="text-sm">Passez du temps dehors, marchez pieds nus sur l'herbe, respirez l'air frais.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full" style={{backgroundColor: '#007BA7'}}></span>
              <div>
                <h4 className="font-semibold">Tenez un journal de gratitude</h4>
                <p className="text-sm">Notez chaque soir trois choses pour lesquelles vous êtes reconnaissant(e).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact pour questions */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center" style={{color: '#007BA7'}}>Questions sur ces ressources ?</h3>
          <p className="text-gray-800 text-center mb-4">
            N'hésitez pas à me contacter si vous avez des questions sur ces outils ou si vous souhaitez des recommandations personnalisées.
          </p>
          <div className="text-center">
            <a 
              href="mailto:contact@cocoflow.ch" 
              className="inline-block px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#007BA7'}}
            >
Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
