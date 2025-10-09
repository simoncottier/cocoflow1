export function ParcoursSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Mon parcours</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Le Commencement - 2014 */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full glass-box flex items-center justify-center mr-6">
              <span className="text-2xl">🌱</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold glass-text-accent">Le Commencement</h3>
              <span className="text-lg glass-text-white opacity-75">2014</span>
            </div>
          </div>
          <p className="glass-text-white leading-relaxed">
            Tout a commencé en 2014 lors d'un important choc familial, une personne a été mise
            sur ma route et m'a aidé à voir que j'appartenais à quelque chose de bien plus grand que
            moi.
          </p>
        </div>

        {/* L'Apprentissage */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full glass-box flex items-center justify-center mr-6">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold glass-text-accent">L'Apprentissage</h3>
              <span className="text-lg glass-text-white opacity-75">Le Cheminement</span>
            </div>
          </div>
          <p className="glass-text-white leading-relaxed mb-6">
            Au fil des années j'ai appris et j'ai compris...
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 glass-text-accent">Formations dans la matière</h4>
              <ul className="space-y-2 glass-text-white">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>PNL<sup className="text-sm">1</sup></span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>PCM<sup className="text-sm">2</sup></span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 glass-text-accent">Formations connectées</h4>
              <ul className="space-y-2 glass-text-white">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Constellations familiales</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Séances d'hypnoses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Retraites de pleine conscience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Vipassana</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Programme karmique</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Médecine quantique</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="glass-text-white leading-relaxed mt-6">
            Via de nombreuses lectures et documentaires qui ont enrichi ma compréhension...
          </p>
        </div>

        {/* Le Tournant */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full glass-box flex items-center justify-center mr-6">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold glass-text-accent">L'Éveil</h3>
              <span className="text-lg glass-text-white opacity-75">Le Tournant</span>
            </div>
          </div>
          <p className="glass-text-white leading-relaxed mb-4">
            Puis il y a eu un burn-out, une intensité des ressentis, une canalisation de l'intuition, un
            magnétisme amplifié et un soin sur une amie.
          </p>
          <p className="glass-text-white leading-relaxed">
            En canalisant, je me connecte à votre âme... Je peux
            vous aider à percevoir, entendre les profondeurs de votre être, à mettre des mots sur l'ineffable.
          </p>
        </div>

        {/* Citations Inspirantes */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center glass-text-accent">Inspirations</h3>
          
          <div className="space-y-6">
            <blockquote className="relative p-6 glass-box rounded-lg">
              <div className="absolute top-2 left-4 text-4xl glass-text-accent opacity-50">"</div>
              <p className="glass-text-white italic text-center leading-relaxed pl-8 pr-4">
                Ce sont vos modes de pensées qui décident si vous allez réussir ou échouer.
              </p>
              <cite className="block text-center mt-4 glass-text-accent font-medium">
                — Henry Ford
              </cite>
            </blockquote>
            
            <blockquote className="relative p-6 glass-box rounded-lg">
              <div className="absolute top-2 left-4 text-4xl glass-text-accent opacity-50">"</div>
              <p className="glass-text-white italic text-center leading-relaxed pl-8 pr-4">
                Vous êtes maître de votre vie, et qu'importe votre prison, vous en avez les clefs.
              </p>
              <cite className="block text-center mt-4 glass-text-accent font-medium">
                — Hervé Desbois
              </cite>
            </blockquote>
            
            <blockquote className="relative p-6 glass-box rounded-lg">
              <div className="absolute top-2 left-4 text-4xl glass-text-accent opacity-50">"</div>
              <p className="glass-text-white italic text-center leading-relaxed pl-8 pr-4">
                Notre esprit n'a pour limites que celles que nous lui reconnaissons.
              </p>
              <cite className="block text-center mt-4 glass-text-accent font-medium">
                — Napoleon Hill
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Ma Philosophie */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Mes valeurs</h3>
              <p className="glass-text-white leading-relaxed">
                L'authenticité, la bienveillance et l'écoute profonde guident chacune de mes actions. 
                Je crois en la capacité innée de chaque être à se transformer et à s'épanouir.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 glass-text-accent">Mon approche</h3>
              <p className="glass-text-white leading-relaxed">
                Chaque rencontre est unique. J'accompagne avec humilité et respect, 
                en adaptant mon soutien à votre rythme et à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>

        {/* Notes de bas de page */}
        <div className="glass-box p-6 rounded-lg">
          <h4 className="text-sm font-semibold mb-3 glass-text-accent">Notes</h4>
          <div className="text-sm glass-text-white space-y-2">
            <p><sup>1</sup> <strong>PNL</strong> : Programmation Neuro-Linguistique - Approche de communication et de développement personnel</p>
            <p><sup>2</sup> <strong>PCM</strong> : Process Communication Model - Outil de communication et de connaissance de soi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
