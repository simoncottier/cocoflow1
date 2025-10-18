"use client";

import { useState } from 'react';
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
              <h1 className="font-ephesis text-6xl lg:text-8xl text-white mb-2 tracking-wide">
                CocoFlow
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
            </div>
            
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
