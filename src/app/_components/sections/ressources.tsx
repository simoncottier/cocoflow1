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
        <h2 className="text-3xl font-bold text-white mb-8">Ressources</h2>
        
        {/* Introduction */}
        <div className="glass-box-strong p-8 rounded-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Muscler votre esprit</h3>
          </div>
          <p className="glass-text-white leading-relaxed">
            L'idée est de parvenir à nous décoller du mental, pour vivre au présent.
            <br />
            J'ai à cœur de partager les outils qui m'accompagnent au quotidien.
          </p>
        </div>

        {/* Applications */}
        <div className="glass-box-strong p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Applications</h3>
          
          <div className="space-y-6">
            <div className="glass-box p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/consciencepourtous.jpeg" 
                    alt="Logo Conscience pour tous" 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
              <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-white">Conscience pour tous</h4>
                  <p className="glass-text-white leading-relaxed mb-3">
                    Charlotte Hoefman a créé une cloche de pleine conscience, un réveil
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
                    src="/insighttimer.png" 
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
                      src="/energieetcorpssubtiles.jpeg" 
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
                      src="/amedumonde.jpeg" 
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

            {/* Livre 3 - L'art de la méditation */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book3')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/artdelameditation.jpg" 
                      alt="Couverture L'art de la méditation" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">L'art de la méditation</h4>
                    <p className="glass-text-white italic text-sm">— Matthieu Ricard</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book3' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book3' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Si nous transformons notre façon de percevoir les choses, nous transformons la qualité de notre vie. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Méditation ; prendre le contrôle de l'esprit »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Notre esprit peut être notre meilleur ami comme notre pire ennemi. Le libérer de la confusion, de l'égocentrisme et des émotions perturbantes est donc le meilleur service que nous puissions lui rendre »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'esprit ressemble à un singe entravé par de nombreux liens, qui ne cesserait de sauter dans tous les sens pour s'en détacher. Il gesticule tellement qu'il empêche quiconque y compris lui-même de défaire un seul nœud. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'objectif de la méditation. Se libérer de l'emprise des afflictions mentales et de la confusion. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Exiger un résultat immédiat relève du caprice ou de la paresse. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Quelque chose nous fait mal parc que nous attendons du mal. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Émotion se dit emovere en latin, qui signifie « mettre en mouvement ». Une émotion fait se mouvoir l'esprit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Toute émotion, aussi intense soit-elle s'épuise et s'évanouit naturellement lorsqu'on cesse de l'alimenter. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'égo est le résultat d'une activité, mentale qui créée et maintient en vie une entité imaginaire dans notre esprit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'ego se nourrit de la rumination du passé et de l'anticipation de l'avenir, mais il ne peut survivre dans la simplicité du moment présent. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Abandonner cette fixation sur l'égo et ne plus s'identifier ä lui revient à gagner une immense liberté intérieure. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-purple-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Les pensées détiennent l'immense pouvoir de conditionner notre manière d'être. N'étant que des constructions de l'esprit elles devraient être incapables de nous nuire. »
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Livre 4 - Le bonheur est caché dans un coin de votre cerveau */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book4')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/bonheurestcache.jpg" 
                      alt="Couverture Le bonheur est caché dans un coin de votre cerveau" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Le bonheur est caché dans un coin de votre cerveau</h4>
                    <p className="glass-text-white italic text-sm">— Fabien Olicard</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book4' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book4' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-green-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Vous avez le droit de vivre des émotions négatives consciemment, pour parois simplement en faire l'expérience et d'autres fois pour vous rappeler à quel point l'état de neutralité est agréable. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-green-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Prenez soin des premières émotions que vous vivez au réveil, préparez un terreau fertile. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-green-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Vous êtes responsable de votre pensée. Vous serez aimé des uns, détesté des autres mais ces émotions et ces pensées ne vous appartiennent pas. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-green-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Prenez soin de vous, de vos pensées, de vos émotions. Vous êtes la solution de votre bonheur. Ne vous oubliez plus. »
                  </p>
                </blockquote>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h5 className="text-lg font-semibold mb-4 text-white">Le Bouddhisme</h5>
                  <div className="space-y-4">
                    <blockquote className="glass-box p-4 rounded border-l-4 border-orange-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « Aujourd'hui cela n'a pas fonctionné comme je voulais. Pas de problème, la prochaine fois, je garantis que je ferai mieux. »
                      </p>
                    </blockquote>
                    <blockquote className="glass-box p-4 rounded border-l-4 border-orange-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « S'exercer à diminuer partiellement nos attachements dans le futur. »
                      </p>
                    </blockquote>
                    <blockquote className="glass-box p-4 rounded border-l-4 border-orange-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « Beaucoup de gens se meuvent durant une grande partie de leur vie comme commandés par des pilotes automatiques. »
                      </p>
                    </blockquote>
                    <blockquote className="glass-box p-4 rounded border-l-4 border-orange-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « Une radio qui bavarde sans cesse. »
                      </p>
                    </blockquote>
                    <blockquote className="glass-box p-4 rounded border-l-4 border-orange-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « Juste après vous être levé, positionnez-vous en face du miroir et regardez-vous en souriant chaleureusement pendant quelques secondes. »
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <h5 className="text-lg font-semibold mb-4 text-white">Le jeu de la vie</h5>
                  <div className="space-y-4">
                    <blockquote className="glass-box p-4 rounded border-l-4 border-yellow-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « Regarde avec émerveillement ce qui est devant toi. »
                      </p>
                    </blockquote>
                    <blockquote className="glass-box p-4 rounded border-l-4 border-yellow-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « La peur ; foncez, elle disparaitra, fuyez, elle vous poursuivra. »
                      </p>
                    </blockquote>
                    <blockquote className="glass-box p-4 rounded border-l-4 border-yellow-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « Aucun homme n'est ton ennemi, aucun homme n'est ton ami, tous les hommes sont tes maitres. »
                      </p>
                    </blockquote>
                    <blockquote className="glass-box p-4 rounded border-l-4 border-yellow-400">
                      <p className="glass-text-white italic leading-relaxed text-sm">
                        « Ne demandez jamais une situation mais la situation juste. »
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              )}
            </div>

            {/* Livre 5 - Respire */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book5')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/respire.jpg" 
                      alt="Couverture Respire" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Respire</h4>
                    <p className="glass-text-white italic text-sm">— Maud Ankaoua</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book5' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book5' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Vous n'êtes pas les choses que vous faites, vous êtes votre manière d'être. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il y a des êtres qui nous touchent plus que d'autres, sans doute parce que sans que nous le sachions nous-même, ils portent en eux une partie de ce qui nous manque. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Oser, c'est perdre l'équilibre un instant, ne pas oser c'est se perdre soi-même. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La tête, le cœur et le corps ne font qu'un. Lorsqu'ils sont parfaitement alignés, tu redeviens entier. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La différence entre les personnes qui se réalisent et celles qui n'évoluent pas dépend de leur degré d'audace. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « C'est l'inconscience de la mort qui nous fait perdre du temps. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Dire non à quelque chose ou à quelqu'un c'est se dire oui à soi-même. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Les trois filtres de la parole : vérité (es-tu sur que c'est vrai ?), bonté (souhaites-tu exprimer quelque chose de bien ?), utilité (cette information est-elle bénéfique ?). »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La perfection c'est assumer son imperfection tout en cherchant à se corriger jour après jour. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La seule chose qu'on est sûr de ne pas réussir est celle que l'on ne tente pas. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Que vos choix soient le reflet de vos espoirs et non de vos peurs. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « J'aime les gens qui pour briller n'éteignent pas les autres. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le bonheur c'est la seule chose que l'on peut donner dans l'avoir et c'est en donnant qu'on l'acquiert. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Toute personne qui réussit avait un rêve et l'a poursuivi jusqu'au bout. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Les problèmes ont l'importance qu'on leur donne. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-cyan-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le changement n'est jamais douloureux seule la résistance au changement l'est. »
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Livre 6 - Le pouvoir du Reiki */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book6')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/pouvoirreiki.jpg" 
                      alt="Couverture Le pouvoir du Reiki" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Le pouvoir du Reiki</h4>
                    <p className="glass-text-white italic text-sm">— Jacques Martel & Jean-Jacques Robinet</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book6' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book6' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Reiki ; il s'agit de canaliser l'Energie universelle et de la diriger vers un point quelconque. (...) L'énergie du Reiki permet d'ouvrir un canal puisant directement à même l'univers. Et c'est à travers le praticien que cette énergie passe pour atteindre le receveur. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « C'est l'énergie elle-même qui va là où elle est utile pour le bien-être de la personne. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il n'est pas question de guérir ou de soigner. Il s'agit de pratiquer le Reiki. C'est l'énergie cosmique qui travaille. Donc, aucun pouvoir personnel n'intervient ici... »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La pratique des arts martiaux et de la méditation, disciplinent et calment mes attentions effervescentes, cause de dispersion et d'affaiblissement des énergies du corps. Ces pratiques me rendent vigilant, attentif, précis et maître de l'instant. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Nous abritons de nombreux poisons issus de la transformation de notre nourriture, mais aussi de nos pensées embrouillées et de nos fixations. Le jeûne est un moyen d'évacuer ces poisons, d'assainir le corps et de clarifier l'esprit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Comme la surface de l'eau caressée par le soleil ou dérangée par le vent, l'homme est perpétuellement déstabilisé par les éléments extérieurs qu'il accuse de ses malheurs. (...) Les émotions créent-elles des bouillonnements incessants qui dérangent le corps et ne laissent aucune place à la quiétude de l'âme. Cette âme ancrée au plus profond de soi, à l'endroit le plus calme, c'est elle et sa sérénité qu'il s'agit de faire remonter à la surface. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « C'est le Reiki qui me choisit et que j'accepte. Qui te choisit et que tu accueilles. Que chacun à son tour à la possibilité de choisir pour s'accomplir. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La fidélité envers moi-même est de retrouver ma propre vérité à l'intérieur de moi. C'est un travail personnel qui demande un état total de présence à soi. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « C'est dans la nature humaine de compliquer les choses (...) c'est un artifice du mental qui veut cela. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Modifier contient une intention de pouvoir ; guider est un acte de respect et une offre de liberté. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Donc, si quelqu'un vient vers moi, l'âme qu'il est sait déjà que c'est à travers moi qu'elle peut trouver sa réponse. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ce qui se passe à l'intérieur de chaque personne correspond à son degré d'ouverture. Il arrive exactement ce qui doit arriver au stade compréhension et d'évolution qui lui est propre. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je me guéris moi-même en fonction de ce que je suis prêt à vouloir changer pour être heureux. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Au milieu du brouhaha du quotidien (...) écoute avec ton cœur, c'est lui le gouverneur. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je dois me laisser captiver par ce que je fais et ce que je suis au moment où je le vis, comme une première expérience. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « LE RIRE : Il lève les barrières plus sûrement qu'une parole ! Il part du ventre vivant, relâchant toute peur et toute colère à travers le plexus. Ris du monde ! Ris de toi-même, redeviens enfant joyeux ! »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Faire attention à ce que je fais, instant après instant, un peu mieux chaque heure, un peu plus chaque jour. C'est une façon de prendre ma vie en charge, d'être responsable de ce que j'accepte. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-pink-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Subir ou vivre ma vie. Si mon choix est de vivre, alors une pelure après l'autre attention après attention, ma pensée de plus en plus juste m'amène à ma réalisation, le sens véritable de ma vie. Je peux passer des heures dans la contemplation de la nature… Au contact de sa fragile beauté, je prends la mesure de mon privilège d'homme. Mon pouvoir réside dans ma Conscience des choses, dans la Conscience de ma finitude mais aussi de mon immortalité ! Le travail le plus important est celui que tu fais sur toi-même. Ainsi le précepte d'un travail diligent est le temps que tu passes à t'observer avec douceur et cependant rigueur. »
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Livre 7 - Le pouvoir des mots */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book7')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/pouvoirdesmots.jpg" 
                      alt="Couverture Le pouvoir des mots" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Le pouvoir des mots</h4>
                    <p className="glass-text-white italic text-sm">— Jacques Martel</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book7' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book7' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Un mot = une énergie. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « A chaque fois que j'ai une pensée ou une parole négative sur moi ou sur quelqu'un → j'envoie une énergie négative. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Toujours dire la vérité. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Remplace : je pense et je crois par je sais, c'est pas terrible par c'est commun, je me méfie par je suis vigilent, trop par très, il n'a pas de problème par c'est correct, n'aie pas peur par aie confiance, ça t'embête si par ça te convient si, je n'ai pas le choix par j'ai fait le choix, c'est chiant par c'est ok, c'est l'enfer par c'est quelque chose, c'est difficile par ça demande des efforts, moins par plus, le problème est que par la situation est, Jamais par très rarement, Toujours par très souvent, c'est fou, c'est du délire par c'est merveilleux, c'est formidable, Tu devrais par je te suggère, il faut par il est nécessaire, j'aurai dû par je ferai autrement... »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je suis la source de mon abondance. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je deviens ce que je pense. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La qualité de ma vie dépend de mon attitude. Il dépend de moi que tout soit simple ou compliqué. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je cherche toujours à ce qu'autrui soit gagnant. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je suis confiant dans le fait que tout se passe au moment idéal, de manière idéale. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-amber-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je dis MERCI sans arrêt : Tout ce qui m'arrive est pour une prise de conscience afin que je me retrouve avec plus d'amour, plus de sagesse et plus de liberté. »
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Livre 8 - Les hommes viennent de Mars, les femmes viennent de Vénus */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book8')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/hommesviennentdemars.jpg" 
                      alt="Couverture Les hommes viennent de Mars, les femmes viennent de Vénus" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Les hommes viennent de Mars, les femmes viennent de Vénus</h4>
                    <p className="glass-text-white italic text-sm">— John Gray</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book8' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book8' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Si l'homme a le regard dans le vide ou s'il perd le fil de la discussion ou s'il est en état de stress ; la femme doit le laisser et aller faire autre chose. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La femme doit apprendre à donner moins et l'homme à donner plus mais plus petit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La femme pense à voix haute, laisse jaillir ses idées librement, ce qui l'aide à les affiner. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'homme doit alors apprendre à écouter patiemment, sérieusement, sans proposer de solutions. En se taisant cela suffira à la femme, elle se sentira soutenu. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'homme a besoin de réfléchir et de digérer en silence ce qu'il a entendu ou expérimenté. Il cherchera la meilleure réponse qu'il puisse donner avant de l'exprimer. S'il n'est pas sûr, il ne donnera pas de réponse. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'homme a besoin de disposer d'un endroit où il peut se retrouver seul pour ses moments à lui. Quand il est dans son endroit, la femme doit apprendre à s'occuper et à se distraire. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'homme a besoin de sentir la femme heureuse et fière de lui car il est capable de gérer ses problèmes seul et il est heureux lorsqu'elle le laisse faire. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'homme se sent soutenu lorsque sa femme lui fait confiance. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Une femme a toujours besoin d'être rassurée. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Un homme a besoin de se replier sur lui-même. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Un homme a besoin de reconnaissance, la femme doit penser à le lui exprimer. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Un homme doit se rappeler qu'une femme qui se plaint de ses problèmes ne les lui reproche pas forcément. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La femme doit penser à remercier l'homme pour son écoute. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La femme est comme une vague, elle et cyclique, elle aura toujours des moments hauts puis des moments bas et des sujets identiques. Dans ces moments l'homme a juste à être patient et à écouter. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-rose-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Veux-tu / voudrais-tu → oubliez le "peux-tu". »
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Livre 9 - Les 7 lois spirituelles du succès */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book9')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/les7loisspiriuelles.jpeg" 
                      alt="Couverture Les 7 lois spirituelles du succès" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Les 7 lois spirituelles du succès</h4>
                    <p className="glass-text-white italic text-sm">— Deepak Chopra</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book9' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book9' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-indigo-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    1. La loi du silence, de la méditation et de la communion avec la nature
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-indigo-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    2. La loi du don. A chaque fois que vous entrez en contact avec quelqu'un, offrez-lui quelque chose.
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-indigo-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    3. La loi du Karma ou la loi de cause à effet. Chaque décision apportera t'elle satisfaction et bonheur à ceux affectés ?
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-indigo-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    4. La loi du moindre effort. Aujourd'hui j'accepte les personnes, les situations et les circonstances comme elles se présentent. Je sais que ce moment est comme il doit être.
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-indigo-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    5. La loi du désir et de l'intention
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-indigo-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    6. La loi du détachement. L'incertain est mon chemin vers la liberté
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-indigo-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    7. La loi du dharma ou but de la vie. Comment puis-je servir / aider ?
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Livre 10 - Petit traité de vie intérieure */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book10')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/petittraitedevie.jpeg" 
                      alt="Couverture Petit traité de vie intérieure" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Petit traité de vie intérieure</h4>
                    <p className="glass-text-white italic text-sm">— Frédéric Lenoir</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book10' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book10' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-violet-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il y a plus de joie à donner qu'à recevoir »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-violet-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Fais à autrui ce que tu aimerais que l'on te fasse »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-violet-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne jugez pas »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-violet-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Plus que tout respecte-toi toi-même »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-violet-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Sept péchés capitaux : la paresse, l'orgueil, la gourmandise, la luxure, l'avarice, la colère et l'envie. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-violet-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « 4 vertus de la parole : ne pas mentir, ne pas avoir de parole blessante, ne pas avoir de discorde et ne pas avoir de parole futile. »
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Livre 11 - Conversations avec Dieu */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book11')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/conversationavecdieu.jpeg" 
                      alt="Couverture Conversations avec Dieu" 
                      className="w-12 h-16 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Conversations avec Dieu</h4>
                    <p className="glass-text-white italic text-sm">— Neale Donald Walsch</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book11' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book11' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Puisque tu n'as pas écouté ton expérience, tu continues à la revivre à répétition. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le plus grand ennemi : la peur. Si tu doutes de Dieu, tu dois passer ta vie dans la peur. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Deux émotions : peur et amour. Chaque pensée, parole ou action est fondée sur l'une ou l'autre. Tu es libre de choisir entre les deux. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La façon de réduire la douleur que tu associes aux évènements est de changer la manière dont tu les perçois. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tu ne peux pas changer l'extérieur, change l'intérieur. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tu attires ce que tu crains. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tout ce que tu vois dans ton monde est le résultat de l'idée que tu t'en fais. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Lorsque tu as une pensée qui n'est pas alignée avec ta vision supérieure, passe à une nouvelle pensée sur le champ ! Lorsque tu fais une chose qui n'est alignée sur ta meilleure intention, décide que c'est la dernière fois ! »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Toute situation est temporaire, rien ne demeure. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Débarrasse-toi de toutes tes pensées négatives, de tes constructions mentales. Abandonne tout pessimisme. Délaisse tous les doutes, rejette toutes les peurs. Entraine ton esprit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Lorsque tu te surprends à avoir des idées négatives, repenses-y. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Préoccupe-toi de toi. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Bénis sois ceux qui sont centrés sur le soi car ils connaitront Dieu. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Respecter vos sentiments, cela veut dire respecter votre Soi. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il n'y a qu'une seule question : que ferait l'amour à présent ? »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tu n'as besoin que de te croire toi-même. Le fait de démontrer cela constamment finit par rappeler aux autres qui ils sont car ils se verront en toi. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Décide d'agir avant de penser. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il n'y a rien d'autre à faire que d'être. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne dit pas "je veux", dis "j'ai". »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Vas-y, fais ce que tu aimes vraiment ! Ne fais rien d'autre ! Tu as si peu de temps. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'inquiétude est inutile ; de l'énergie gaspillée. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-sky-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « L'alcool affaiblit l'esprit. »
                  </p>
                </blockquote>
              </div>
              )}
            </div>

            {/* Enseignements généraux - CocoFlow */}
            <div className="glass-box p-6 rounded-lg">
              <button
                onClick={() => toggleBook('book12')}
                className="w-full text-left flex items-start justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/cocoflow-logo.png" 
                      alt="Logo CocoFlow" 
                      className="w-20 h-20 object-contain rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">Enseignements généraux reçus</h4>
                    <p className="glass-text-white italic text-sm">— CocoFlow</p>
                  </div>
                </div>
                <div className="ml-4">
                  <svg 
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      openBook === 'book12' ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openBook === 'book12' && (
                <div className="mt-6 space-y-4 animate-fade-in">
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ce sur quoi vous focalisez, vous l'amplifiez. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Nous sommes ce que nous répétons sans cesse. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Critique : 4 doigts vers toi, un vers l'autre. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Les autres sont le reflet de moi-même. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Demandez, demandez, demandez. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Persévérez, persévérez, persévérez. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Vous obtenez ce que vous tolérez. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Discutez moins, écoutez plus. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Nous ne voyons pas les choses comme elles sont, nous les voyons comme nous sommes. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne prends pas les choses personnellement. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne laisse personne te faire revenir à un niveau déjà franchit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Nul n'est plus chanceux que celui qui croit en sa chance. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je ne me soucis plus de qui je perds tant que je ne me perds pas à nouveau. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Lorsque tu te concentres sur toi, tu grandis, lorsque tu te concentres sur la merde, elle grandit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tu deviens ce qui t'entoures, les énergies sont contagieuses, choisis avec soin ton environnement. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Quand les choses changent en toi, les choses changent autour de toi. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Pour avoir ce que vous n'avez jamais eu, il faut faire ce que vous n'avez jamais fait. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Soyez intéressé plutôt qu'intéressant. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Utilisez comment plutôt que pourquoi. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne promettez jamais plus que ce que vous pouvez réaliser. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « C'est dans la modestie et le silence que réside la vraie sagesse. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le plus il y a de tensions, le moins il y a d'énergies »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Demain s'inquiétera de lui-même »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il est vain de lutter, mieux vaut ruser. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Dieu est parmi vous : à l'intérieur de vous »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Celui qui prêtant être dans la lumière tout en haïssant son frère, est encore dans les ténèbres. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « On te nuira à partir du moment où tu jugeras que l'on te nuit. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ayez le sourire »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne critiquez pas, ne condamnez pas, ne vous plaignez pas. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Complimentez honnêtement et sincèrement. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Efforcez-vous de voir les choses du point de vue de l'autre. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Lancez des défis. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Mentionnez vos erreurs avant de corriger celles des autres. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Laissez l'autre sauver la face. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Félicitez, encouragez, sincèrement. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tout ce que vous voulez se situe en dehors de votre zone de confort. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Les gens qui réussissent font ce que les autres ne veulent pas faire. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Si vous n'êtes pas votre propre supporter, qui le sera ? »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Je suis le seul maître à bord de mes émotions, cela m'atteint si je le souhaite. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « La transformation est un processus qui exige patience et persévérance. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tout objectif flou conduit à une connerie certaine. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Il n'y a pas d'échec, il n'y a que du feedback. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne pas faire de généralisation »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Ne pas faire de supposition »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le mental nous parle constamment du passé ou du futur : 30 000 à 60 000 pensées par jour. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Une pensée est une suggestion, nous sommes libres de l'accepter ou non. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Pratiquez la gratitude. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Fuyez les plaisirs immédiats. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Try power poses »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Fake it until you become it »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Si tu ne vas pas en bas, tu n'iras pas en haut. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Si tu regardes, tu fais grandir. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Tout ce que tu envoies te revient »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Si tu as une peur / une émotion, met là au rez-de-chaussée et monte au 15ème »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Prend toutes tes certitudes et remets les en question »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Regarde le corps : il ne ment jamais. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Pensées : si tu réponds, tu renforces. Si tu l'observes, l'analyse ; tu renforces. → Prends conscience du mécanisme et poursuis. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Lorsqu'un évènement arrive, demande-toi qui l'interprète. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Authenticité : vivre ses émotions sans protection. »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Percevrez → percez et vous verrez »
                  </p>
                </blockquote>
                <blockquote className="glass-box p-4 rounded border-l-4 border-emerald-400">
                  <p className="glass-text-white italic leading-relaxed text-sm">
                    « Le contrôle tombera grâce à la concentration. »
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
