export function SoinsTarifsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">💎 Soins et tarifs</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-4" style={{color: '#007BA7'}}>Mes soins énergétiques</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Chez Cocoflow, je propose des soins énergétiques personnalisés destinés à rétablir l'harmonie intérieure, 
            libérer les tensions physiques et émotionnelles, et favoriser un mieux-être global.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Chaque séance est une invitation à ralentir, à écouter son corps et à laisser circuler l'énergie vitale naturellement.
          </p>
        </div>

        {/* Types de soins */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-6" style={{color: '#007BA7'}}>Mes prestations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <div className="text-3xl mb-3">🌸</div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Soin énergétique global</h4>
              <p className="text-gray-700 text-sm">
                Harmonisation des centres énergétiques (chakras), rééquilibrage et recentrage.
              </p>
            </div>
            
            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <div className="text-3xl mb-3">💫</div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Libération émotionnelle</h4>
              <p className="text-gray-700 text-sm">
                Accompagnement des blocages liés au stress, à la fatigue ou aux émotions accumulées.
              </p>
            </div>
            
            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Soin à distance</h4>
              <p className="text-gray-700 text-sm">
                Rééquilibrage énergétique à distance avec la même intention et efficacité.
              </p>
            </div>
          </div>
        </div>

        {/* Déroulement */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-4" style={{color: '#007BA7'}}>Déroulement d'une séance</h3>
          <div className="space-y-4 text-gray-800">
            <p>
              Après un court échange pour comprendre vos besoins du moment, j'effectue un soin adapté à votre état énergétique.
            </p>
            <p>
              La séance se déroule dans un cadre calme et bienveillant, propice au lâcher-prise.
            </p>
            <p className="font-semibold" style={{color: '#007BA7'}}>
              📍 Lausanne et région - Sur rendez-vous uniquement
            </p>
            <p className="font-semibold" style={{color: '#007BA7'}}>
              ⏰ Durée moyenne : 60 minutes
            </p>
          </div>
        </div>

        {/* Tarifs */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: '#007BA7'}}>Tarifs</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Séance individuelle */}
            <div className="text-center p-6 rounded-lg border-2" style={{borderColor: '#007BA7', backgroundColor: '#f8f9ff'}}>
              <h4 className="text-xl font-bold mb-2" style={{color: '#007BA7'}}>Séance Individuelle</h4>
              <div className="text-3xl font-bold text-gray-800 mb-2">CHF 120</div>
              <p className="text-gray-600 mb-4">60 minutes - En présentiel</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Soin énergétique complet</li>
                <li>✓ Harmonisation des chakras</li>
                <li>✓ Échange et conseils personnalisés</li>
                <li>✓ Suivi post-séance</li>
              </ul>
            </div>

            {/* Séance à distance */}
            <div className="text-center p-6 rounded-lg border-2" style={{borderColor: '#007BA7', backgroundColor: '#f8f9ff'}}>
              <h4 className="text-xl font-bold mb-2" style={{color: '#007BA7'}}>Séance à Distance</h4>
              <div className="text-3xl font-bold text-gray-800 mb-2">CHF 90</div>
              <p className="text-gray-600 mb-4">45 minutes - À distance</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Soin énergétique par intention</li>
                <li>✓ Échange téléphonique ou visio</li>
                <li>✓ Même efficacité qu'en présentiel</li>
                <li>✓ Flexibilité horaire</li>
              </ul>
            </div>
          </div>

          {/* Forfaits */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-center" style={{color: '#007BA7'}}>Forfaits Avantageux</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#e8f4f8'}}>
                <h5 className="font-bold mb-1" style={{color: '#007BA7'}}>Forfait 3 séances</h5>
                <p className="text-xl font-bold text-gray-800">CHF 320</p>
                <p className="text-xs text-gray-600">Économie CHF 40</p>
              </div>
              <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#e8f4f8'}}>
                <h5 className="font-bold mb-1" style={{color: '#007BA7'}}>Forfait 5 séances</h5>
                <p className="text-xl font-bold text-gray-800">CHF 500</p>
                <p className="text-xs text-gray-600">Économie CHF 100</p>
              </div>
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold mb-4" style={{color: '#007BA7'}}>Informations pratiques</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <h5 className="font-semibold mb-1">Paiement</h5>
                <p>Espèces, Twint, virement bancaire</p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Annulation</h5>
                <p>Gratuite jusqu'à 24h avant</p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Première consultation</h5>
                <p>15 min gratuit par téléphone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact pour RDV */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-semibold mb-4 text-center" style={{color: '#007BA7'}}>Prendre rendez-vous</h3>
          <p className="text-gray-800 text-center mb-6">
            Contactez-moi pour un premier échange ou pour planifier une séance :
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <p className="text-lg">📞</p>
              <a href="tel:+41790000000" className="text-lg hover:underline" style={{color: '#007BA7'}}>
                +41 79 000 00 00
              </a>
            </div>
            <div className="text-center">
              <p className="text-lg">📧</p>
              <a href="mailto:contact@cocoflow.ch" className="text-lg hover:underline" style={{color: '#007BA7'}}>
                contact@cocoflow.ch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
