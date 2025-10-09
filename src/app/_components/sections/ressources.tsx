export function RessourcesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Ressources</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="text-center mb-6">
            <span className="text-4xl mb-4 block">🧠</span>
            <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Muscler votre esprit</h3>
          </div>
          <p className="glass-text-white leading-relaxed text-center">
            L'idée est de parvenir à muscler notre esprit pour nous décoller du mental, pour vivre au
            présent. J'ai à cœur de partager les outils qui m'accompagnent au quotidien.
          </p>
        </div>

        {/* Applications */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 glass-text-accent">Applications recommandées</h3>
          
          <div className="space-y-6">
            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass-box-strong flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔔</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 glass-text-accent">Conscience pour tous</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Charlotte Hoefman a créé une cloche de pleine conscience comme un réveil
                    qui nous ramène chaque jour à la conscience de soi, au moment présent.
                    L'occasion de se décoller du mental et de muscler son esprit quotidiennement.
                  </p>
                  <a 
                    href="https://apps.apple.com/fr/app/conscience-pour-tous/id6748648665" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-lg mr-2">📱</span>
                    <span className="glass-text-accent font-medium">Télécharger sur App Store</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass-box-strong flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 glass-text-accent">Insight Timer</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Le Timer pour les méditations est top : possibilité d'ajouter un gong de début et de fin, de
                    choisir le fond sonore. Une application complète pour votre pratique méditative.
                  </p>
                  <a 
                    href="https://apps.apple.com/us/app/insight-timer-meditate-sleep/id337472899" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-lg mr-2">📱</span>
                    <span className="glass-text-accent font-medium">Télécharger sur App Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vidéos */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 glass-text-accent">Vidéos & Documentaires</h3>
          
          <div className="space-y-6">
            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass-box-strong flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎬</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 glass-text-accent">Chaîne YouTube Tistrya</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Des documentaires où des personnes témoignent de diverses expériences. 
                    Peu importe ce que vous vivez, une thématique sera peut-être porteuse de sens, d'identification...
                  </p>
                  <a 
                    href="https://www.youtube.com/@Tistrya/featured" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-lg mr-2">📺</span>
                    <span className="glass-text-accent font-medium">Découvrir la chaîne</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass-box-strong flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 glass-text-accent">La puissance de l'intention</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Un documentaire inspirant sur le pouvoir de l'intention et son impact sur notre réalité.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=70Xg0cclf5Q&t=2626s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-lg mr-2">▶️</span>
                    <span className="glass-text-accent font-medium">Regarder le documentaire</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass-box-strong flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎭</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 glass-text-accent">Film "L'âme"</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Une exploration cinématographique profonde de la nature de l'âme et de la conscience.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=9fcNFGWE8n0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-lg mr-2">🎬</span>
                    <span className="glass-text-accent font-medium">Regarder le film</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lectures - Les énergies et les corps subtils */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 glass-text-accent">Lectures inspirantes</h3>
          <p className="glass-text-white mb-6 italic text-center">
            Les ouvrages qui m'ont marquée et la synthèse personnelle retirée que je choisis de relire
            régulièrement pour me les rappeler.
          </p>
          
          <div className="space-y-8">
            {/* Livre 1 */}
            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📖</span>
                <h4 className="text-xl font-semibold glass-text-accent">Les énergies et les corps subtils</h4>
              </div>
              <p className="glass-text-white mb-4 italic">— Monique Schloupt</p>
              
              <div className="space-y-4">
                <blockquote className="glass-box p-4 rounded border-l-4 border-blue-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "L'Aura est la répercussion vibratoire de toutes les fréquences émises par tous
                    les corps. Comme ceux-ci ne vibrent pas tous à la même fréquence, la vibration de
                    chacun irradie à l'extérieur du corps physique de façon différente, sous forme
                    d'onde. Plus un être est éveillé, plus son taux vibratoire est élevé."
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-blue-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "Lorsque deux personnes se rencontrent, c'est dans les 3 ou 4 premières
                    secondes que le ressenti sera juste sans jugement car ce sera celui du cœur, de
                    l'âme et ensuite le mental."
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-blue-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "La mise en place de cette maladie ou accident est la conséquence d'expériences
                    non intégrées depuis de nombreuses années."
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-blue-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "Il est fondamental que l'homme comprenne qu'il n'est pas venu accomplir une
                    mission pour plaire ou déplaire, être connu ou pas reconnu, mais pour exprimer
                    totalement la joie qui jaillit de son cœur pour la réalisation car elle est l'expression
                    de l'univers."
                  </p>
                </blockquote>
              </div>
            </div>

            {/* Livre 2 */}
            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">📚</span>
                <h4 className="text-xl font-semibold glass-text-accent">L'âme du monde</h4>
              </div>
              <p className="glass-text-white mb-4 italic">— Frédéric Lenoir</p>
              
              <div className="space-y-4">
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "Le superflu est onéreux mais l'essentiel est offert."
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "Le contentement apporte le bonheur, même dans la pauvreté. L'insatisfaction
                    apporte le malheur, même dans la richesse."
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "Soyez le changement que vous voulez dans le monde."
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "Nous sommes tous plus ou moins prisonniers de nos peurs, de nos pulsions, de
                    notre caractère, de nos habitudes, de nos émotions. Nous sommes les seuls à pouvoir 
                    nous libérer de cette prison intérieure, on ne naît pas libre, on le devient."
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    "Nourris ce qu'il y a de bon, de juste, de lumineux en toi, affame ce qu'il y a de
                    mauvais, de négatif et d'obscur."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Partage et échange */}
        <div className="glass-box-strong p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Échanger sur ces ressources</h3>
          <p className="glass-text-white mb-6 leading-relaxed">
            Ces outils m'accompagnent dans mon cheminement personnel. Si l'une de ces ressources résonne en vous 
            ou si vous souhaitez partager vos propres découvertes, je serais ravie d'échanger avec vous.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="tel:+41782592246" 
               className="inline-flex items-center px-6 py-3 rounded-full glass-box hover:glass-box-strong transition-all duration-300">
              <span className="text-2xl mr-3">📞</span>
              <span className="glass-text-accent font-medium">078 259 22 46</span>
            </a>
            <a href="mailto:contact@cocoflow.ch" 
               className="inline-flex items-center px-6 py-3 rounded-full glass-box hover:glass-box-strong transition-all duration-300">
              <span className="text-2xl mr-3">📧</span>
              <span className="glass-text-accent font-medium">contact@cocoflow.ch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
