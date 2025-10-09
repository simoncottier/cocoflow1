export function ContactSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">💬 Contact</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
            <h3 className="text-2xl font-bold mb-6" style={{color: '#007BA7'}}>Coordonnées</h3>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <a href="tel:+41790000000" className="hover:underline" style={{color: '#007BA7'}}>
                    +41 79 000 00 00
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@cocoflow.ch" className="hover:underline" style={{color: '#007BA7'}}>
                    contact@cocoflow.ch
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="mr-4 text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Localisation</p>
                  <p>Lausanne – Canton de Vaud</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
            <h3 className="text-2xl font-bold mb-6" style={{color: '#007BA7'}}>Horaires</h3>
            <div className="space-y-3 text-gray-800">
              <div className="flex justify-between">
                <span className="font-semibold">Lundi - Vendredi</span>
                <span>9h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Samedi</span>
                <span>9h00 - 14h00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Dimanche</span>
                <span>Sur rendez-vous</span>
              </div>
              <div className="mt-4 p-3 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
                <p className="text-sm text-gray-600">
                  <strong>Note :</strong> Les séances à distance peuvent être programmées en dehors de ces horaires selon vos disponibilités.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comment me contacter */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 mb-8" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-bold mb-6" style={{color: '#007BA7'}}>Comment prendre rendez-vous ?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-800">
            <div className="text-center">
              <div className="text-4xl mb-3">📞</div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Par téléphone</h4>
              <p className="text-sm">Appelez-moi directement pour convenir d'un rendez-vous</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📧</div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Par email</h4>
              <p className="text-sm">Envoyez-moi un message avec vos disponibilités</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h4 className="font-semibold mb-2" style={{color: '#007BA7'}}>Premier échange</h4>
              <p className="text-sm">15 minutes gratuites pour faire connaissance</p>
            </div>
          </div>
        </div>

        {/* Zone de déplacement */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-2" style={{borderColor: '#007BA7'}}>
          <h3 className="text-2xl font-bold mb-6" style={{color: '#007BA7'}}>Zone d'intervention</h3>
          <div className="text-gray-800">
            <p className="mb-4">
              Je propose mes soins énergétiques dans la région lausannoise et les environs :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• Lausanne et agglomération</li>
                <li>• Morges et région</li>
                <li>• Vevey - Montreux</li>
                <li>• Yverdon-les-Bains</li>
              </ul>
              <ul className="space-y-2">
                <li>• Nyon et La Côte</li>
                <li>• Échallens et Gros-de-Vaud</li>
                <li>• Séances à distance partout</li>
                <li>• Autres régions sur demande</li>
              </ul>
            </div>
            <div className="mt-6 p-4 rounded-lg" style={{backgroundColor: '#f8f9ff'}}>
              <p className="text-sm">
                <strong>Déplacements :</strong> Possibles dans un rayon de 30 km autour de Lausanne. 
                Frais de déplacement selon la distance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

