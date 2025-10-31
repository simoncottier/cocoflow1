"use client";

import { useState } from 'react';
import Image from 'next/image';
import Container from "@/app/_components/container";
import { Sidebar } from "@/app/_components/sidebar";
import { AboutSection } from "@/app/_components/sections/about";
import { ParcoursSection } from "@/app/_components/sections/parcours";
import { SoinsTarifsSection } from "@/app/_components/sections/soins-tarifs";
import { RessourcesSection } from "@/app/_components/sections/ressources";
import { ContactSection } from "@/app/_components/sections/contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState('apropos');

  const renderSection = () => {
    switch (activeSection) {
      case 'apropos':
        return <AboutSection />;
      case 'parcours':
        return <ParcoursSection />;
      case 'soins-tarifs':
        return <SoinsTarifsSection />;
      case 'ressources':
        return <RessourcesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="flex">
      <main className="flex-1 lg:mr-64">
        <Container>
          <div className="pt-8 lg:pt-8">
            {/* Titre CocoFlow */}
            <div className="text-center mb-4 lg:mb-6">
              <div className="flex justify-center mb-4">
                <Image
                  src="/cocoflow-logo.png"
                  alt="CocoFlow Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="font-ephesis text-6xl lg:text-8xl text-white mb-2 tracking-wide">
                CocoFlow
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
            </div>

            {/* Bannière promotionnelle - uniquement sur la première page */}
            {activeSection === 'apropos' && (
              <div className="mb-6 max-w-4xl mx-auto">
                <button
                  onClick={() => setActiveSection('soins-tarifs')}
                  className="w-full cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <div 
                    className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 p-6 rounded-lg shadow-lg border-4 border-white relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 50%, #ffd700 100%)',
                      boxShadow: '0 0 30px rgba(255, 107, 107, 0.6), 0 0 60px rgba(255, 165, 0, 0.4)'
                    }}
                  >
                    <div className="text-center">
                      <p className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                        OFFRE SPÉCIALE NOËL
                      </p>
                      <p className="text-base font-semibold text-white drop-shadow-md">
                        Première séance à <span className="text-3xl font-bold">50 CHF</span> - Jusqu'au 30 janvier
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}
            
            <div className="pt-4 lg:pt-0">
              {renderSection()}
            </div>
          </div>
        </Container>
      </main>
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
    </div>
  );
}
