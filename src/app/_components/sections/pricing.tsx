export function PricingSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">💎 Tarifs</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Séance individuelle */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{color: '#007BA7'}}>Séance Individuelle</h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">CHF 120</div>
              <p className="text-gray-600">60 minutes</p>
            </div>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Soin énergétique complet
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Harmonisation des chakras
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Échange et conseils personnalisés
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Suivi post-séance
              </li>
            </ul>
          </div>

          {/* Séance à distance */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{color: '#007BA7'}}>Séance à Distance</h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">CHF 90</div>
              <p className="text-gray-600">45 minutes</p>
            </div>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Soin énergétique par intention
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Échange téléphonique ou visio
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Même efficacité qu'en présentiel
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Flexibilité horaire
              </li>
            </ul>
          </div>
        </div>

        {/* Forfaits */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 mb-8" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#007BA7'}}>Forfaits Avantageux</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <h4 className="font-bold mb-2" style={{color: '#007BA7'}}>Forfait 3 séances</h4>
              <p className="text-2xl font-bold text-gray-800">CHF 320</p>
              <p className="text-sm text-gray-600">Au lieu de CHF 360 - Économie CHF 40</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <h4 className="font-bold mb-2" style={{color: '#007BA7'}}>Forfait 5 séances</h4>
              <p className="text-2xl font-bold text-gray-800">CHF 500</p>
              <p className="text-sm text-gray-600">Au lieu de CHF 600 - Économie CHF 100</p>
            </div>
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-bold mb-4" style={{color: '#007BA7'}}>Informations pratiques</h3>
          <div className="space-y-4 text-gray-800">
            <div>
              <h4 className="font-semibold mb-2">Modes de paiement</h4>
              <p>Espèces, Twint, virement bancaire</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Politique d'annulation</h4>
              <p>Annulation gratuite jusqu'à 24h avant le rendez-vous</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Première consultation</h4>
              <p>Un échange téléphonique gratuit de 15 minutes pour faire connaissance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

