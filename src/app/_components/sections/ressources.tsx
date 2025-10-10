export function RessourcesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Ressources</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Muscler votre esprit</h3>
          </div>
          <p className="glass-text-white leading-relaxed text-center">
            L'idée est de parvenir à muscler notre esprit pour nous décoller du mental, pour vivre au
            présent. J'ai à cœur de partager les outils qui m'accompagnent au quotidien.
          </p>
        </div>

        {/* Applications */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Applications recommandées</h3>
          
          <div className="space-y-6">
            <div className="glass-box p-6 rounded-lg">
              <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Conscience pour tous</h4>
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
                    <span className="text-white font-medium">Télécharger sur App Store</span>
                  </a>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Insight Timer</h4>
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
                    <span className="text-white font-medium">Télécharger sur App Store</span>
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vidéos */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Vidéos & Documentaires</h3>
          
          <div className="space-y-6">
            <div className="glass-box p-6 rounded-lg">
              <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Chaîne YouTube Tistrya</h4>
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
                    <span className="text-white font-medium">Découvrir la chaîne</span>
                  </a>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">La puissance de l'intention</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Un documentaire inspirant sur le pouvoir de l'intention et son impact sur notre réalité.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=70Xg0cclf5Q&t=2626s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-white font-medium">Regarder le documentaire</span>
                  </a>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Film "L'âme"</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Une exploration cinématographique profonde de la nature de l'âme et de la conscience.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=9fcNFGWE8n0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-white font-medium">Regarder le film</span>
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lectures - Les énergies et les corps subtils */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Lectures inspirantes</h3>
          <p className="glass-text-white mb-6 italic text-center">
            Les ouvrages qui m'ont marquée et la synthèse personnelle retirée que je choisis de relire
            régulièrement pour me les rappeler.
          </p>
          
          <div className="space-y-8">
            {/* Livre 1 */}
            <div className="glass-box-strong p-8 rounded-lg">
              <h4 className="text-2xl font-semibold mb-4 text-white">Les énergies et les corps subtils</h4>
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
            <div className="glass-box-strong p-8 rounded-lg">
              <h4 className="text-2xl font-semibold mb-4 text-white">L'âme du monde</h4>
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

      </div>
    </section>
  );
}
