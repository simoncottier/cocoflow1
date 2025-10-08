export function Services() {
  return (
    <section className="mb-16">
      {/* Introduction */}
      <div className="mb-12 text-lg leading-relaxed">
        <p className="mb-6">
          Chez Cocoflow, je propose des soins énergétiques personnalisés destinés à rétablir l'harmonie intérieure, 
          libérer les tensions physiques et émotionnelles, et favoriser un mieux-être global.
        </p>
        <p className="mb-6">
          Chaque séance est une invitation à ralentir, à écouter son corps et à laisser circuler l'énergie vitale naturellement.
        </p>
      </div>

      {/* Services */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-green-600 dark:text-green-400">🌿 Mes prestations</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Soin énergétique global</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Harmonisation des centres énergétiques (chakras), rééquilibrage et recentrage.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Libération émotionnelle</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Accompagnement des blocages liés au stress, à la fatigue ou aux émotions accumulées.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Soin à distance</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Rééquilibrage énergétique pour ceux qui ne peuvent pas se déplacer, avec la même intention et efficacité.
            </p>
          </div>
        </div>
      </div>

      {/* Session Details */}
      <div className="mb-12 bg-pink-50 dark:bg-slate-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-pink-600 dark:text-pink-400">🌸 Déroulement d'une séance</h2>
        <div className="space-y-4 text-lg">
          <p>
            Après un court échange pour comprendre tes besoins du moment, j'effectue un soin adapté à ton état énergétique.
          </p>
          <p>
            La séance se déroule dans un cadre calme et bienveillant, propice au lâcher-prise.
          </p>
          <p className="font-semibold text-pink-600 dark:text-pink-400">
            Durée moyenne : 60 minutes.
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📍 Où me trouver</h2>
        <div className="text-lg space-y-4">
          <p>
            Je propose mes soins à Lausanne et dans la région, sur rendez-vous uniquement.
          </p>
          <p>
            Les séances peuvent aussi être réalisées à distance, en visio ou par intention énergétique.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">💬 Prendre rendez-vous</h2>
        <p className="text-lg mb-6">
          Contacte-moi pour un premier échange ou pour planifier une séance :
        </p>
        <div className="space-y-3 text-lg">
          <p className="flex items-center">
            <span className="mr-3">📞</span>
            <a href="tel:+41790000000" className="text-blue-600 dark:text-blue-400 hover:underline">
              +41 79 000 00 00
            </a>
          </p>
          <p className="flex items-center">
            <span className="mr-3">📧</span>
            <a href="mailto:contact@cocoflow.ch" className="text-blue-600 dark:text-blue-400 hover:underline">
              contact@cocoflow.ch
            </a>
          </p>
          <p className="flex items-center mt-4 font-semibold text-gray-700 dark:text-gray-300">
            <span className="mr-3">📍</span>
            Lausanne – Canton de Vaud
          </p>
        </div>
      </div>
    </section>
  );
}

