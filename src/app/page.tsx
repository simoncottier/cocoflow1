"use client";

import { useState } from 'react';
import Container from "@/app/_components/container";
import { Sidebar } from "@/app/_components/sidebar";
import { AboutSection } from "@/app/_components/sections/about";
import { ParcoursSection } from "@/app/_components/sections/parcours";
import { SoinsTarifsSection } from "@/app/_components/sections/soins-tarifs";
import { RessourcesSection } from "@/app/_components/sections/ressources";

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
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 lg:ml-64">
        <Container>
          <div className="pt-16 lg:pt-0">
            {renderSection()}
          </div>
        </Container>
      </main>
    </div>
  );
}
