"use client";

import { useState } from 'react';
import Container from "@/app/_components/container";
import { Sidebar } from "@/app/_components/sidebar";
import { Intro } from "@/app/_components/intro";
import { Services } from "@/app/_components/services";
import { AboutSection } from "@/app/_components/sections/about";
import { PricingSection } from "@/app/_components/sections/pricing";
import { ContactSection } from "@/app/_components/sections/contact";

export default function Index() {
  const [activeSection, setActiveSection] = useState('accueil');

  const renderSection = () => {
    switch (activeSection) {
      case 'accueil':
        return (
          <>
            <Intro />
            <Services />
          </>
        );
      case 'prestations':
        return <Services />;
      case 'apropos':
        return <AboutSection />;
      case 'tarifs':
        return <PricingSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <Intro />
            <Services />
          </>
        );
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
