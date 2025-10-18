"use client";

import { useState } from 'react';

export function RessourcesSection() {
  const [openBook, setOpenBook] = useState<string | null>(null);

  const toggleBook = (bookId: string) => {
    setOpenBook(openBook === bookId ? null : bookId);
  };

  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto space-y-8 pt-8">
        <h2 className="text-4xl font-bold text-white mb-8">Ressources</h2>
        {/* Introduction */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="mb-6">
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
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/conscience-pour-tous-logo.svg" 
                    alt="Logo Conscience pour tous" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
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
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/insight-timer-logo.svg" 
                    alt="Logo Insight Timer" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
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
        </div>

        {/* Vidéos */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Vidéos & Documentaires</h3>
          
          <div className="space-y-6">
            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/tistryia.jpeg" 
                    alt="Chaîne YouTube Tistrya" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
              <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Chaîne YouTube Tistrya</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Des documentaires où des personnes témoignent de leurs expériences en lien avec l'invisible.
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
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/puissanceintention.jpeg" 
                    alt="La puissance de l'intention" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
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
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/ame.jpeg" 
                    alt="Film L'âme" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
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
        </div>

        {/* Podcasts */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Podcasts</h3>
          
          <div className="space-y-6">
            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/anne_ghesquiere.png" 
                    alt="Podcast Métamorphose Anne Ghesquière" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Métamorphose - Anne Ghesquière</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Conversations inspirantes et conseils d'experts sur le bien-être, la santé mentale, la psychologie et l'alimentation.
                  </p>
                  <a 
                    href="https://podcasts.apple.com/ch/podcast/m%C3%A9tamorphose-%C3%A9veille-ta-conscience/id1448632119" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-white font-medium">Écouter sur Apple Podcasts</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/maud_ankaoua.png" 
                    alt="Podcast Ces questions que tout le monde se pose Maud Ankaoua" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Ces questions que tout le monde se pose - Maud Ankaoua</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Des épisodes qui questionnent nos émotions, leurs messages et comment atteindre le bonheur.
                  </p>
                  <a 
                    href="https://podcasts.apple.com/ch/podcast/ces-questions-que-tout-le-monde-se-pose/id1583904652" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-white font-medium">Écouter sur Apple Podcasts</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/entredeuxmonde.png" 
                    alt="Podcast Entre deux Mondes Xavier Murez" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Entre deux Mondes - Xavier Murez</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Des épisodes sous forme d'entretien avec des personnes qui ont fait du lien à l'invisible un métier, une passion.
                  </p>
                  <a 
                    href="https://podcasts.apple.com/ch/podcast/entre-deux-mondes-il-%C3%A9tait-une-fois-lau-del%C3%A0/id1600478368" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg glass-box hover:glass-box-strong transition-all duration-300"
                  >
                    <span className="text-white font-medium">Écouter sur Apple Podcasts</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lectures inspirantes avec menus déroulants */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Lectures inspirantes</h3>
          <p className="glass-text-white mb-6 italic text-center">
            Les ouvrages qui m'ont marquée et la synthèse personnelle retirée que j'aime relire
            régulièrement pour me les rappeler.
          </p>
          
          <div className="space-y-6">
            {/* Livre 1 - Les énergies et les corps subtils */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book1')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/energies-corps-subtils-cover.svg" 
                      alt="Couverture Les énergies et les corps subtils" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Les énergies et les corps subtils</h4>
                    <p className="glass-text-white italic text-sm">— Monique Schloupt</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book1' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book1' && (
                <div className="mt-6 space-y-4 animate-fade-in">
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
              )}
            </div>

            {/* Livre 2 - L'âme du monde */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book2')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/ame-du-monde-cover.svg" 
                      alt="Couverture L'âme du monde" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">L'âme du monde</h4>
                    <p className="glass-text-white italic text-sm">— Frédéric Lenoir</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book2' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book2' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le superflu est onéreux mais l'essentiel est offert »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le contentement apporte le bonheur, même dans la pauvreté. L'insatisfaction apporte le malheur, même dans la richesse »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le bonheur c'est de continuer de désirer ce que l'on possède déjà »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La méditation relie le corps, le psychisme et l'esprit »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Soyez le changement que vous voulez dans le monde »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Nous sommes tous plus ou moins prisonniers de nos peurs, de nos pulsions, de notre caractère, de nos habitudes, de nos émotions. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                      « Nous sommes les seuls à pouvoir se libérer de cette prison intérieure, on ne naît pas libre, on le devient »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                      « Il y aura toujours quelqu'un pour y trouver à redire »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne fais pas à autrui ce que tu ne veux pas que l'on te fasse. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Nourris ce qu'il y a de bon, de juste, de lumineux en toi, affame ce qu'il y a de mauvais, de négatif et d'obscur. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Prenez garde à la paresse, la paresse n'est pas le repos, c'est l'absence de force et de motivation, c'est le refus de l'effort qui donne l'illusion du bien-être. Notre corps et notre âme ont besoin d'activité, de travail et d'action pour s'épanouir. La paresse nous alourdit et nous décompose. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « C'est ainsi qu'il faut concevoir notre relation aux personnes et aux choses ; un juste équilibre entre attachement et détachement. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il nous faut donc apprendre à nous attacher de tout notre cœur aux êtres qui nous sont chers, tout en cultivant le détachement de l'esprit, qui crée une certaine distance avec nos émotions et nous rappelle sans cesse que tout est éphémère, que nul ne nous appartient. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Les pensées créent une énergie et expriment une intention. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Une seule parole peut anéantir une vie comme lui redonner sens. Apprenez à maitriser vos paroles. Pensez aux conséquences de vos propos. »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Toute la sagesse du monde tient en deux mots, vivre l'instant »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tout est pour le mieux »
                  </p>
                </blockquote>
                
                <blockquote className="glass-box p-4 rounded border-l-4 border-teal-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Mets-toi en marche et vas vers toi-même ; l'univers te sourira. »
                  </p>
                </blockquote>
              </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
