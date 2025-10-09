"use client";

import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'accueil', label: '🏠 Accueil', icon: '🏠' },
    { id: 'prestations', label: '🌿 Prestations', icon: '🌿' },
    { id: 'apropos', label: '🕊️ À propos', icon: '🕊️' },
    { id: 'tarifs', label: '💎 Tarifs', icon: '💎' },
    { id: 'contact', label: '💬 Contact', icon: '💬' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-white"
        style={{ backgroundColor: '#007BA7' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-40 border-r-2 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        style={{ backgroundColor: '#071531', borderRightColor: '#007BA7' }}
      >
        <div className="p-6">
          {/* Logo/Brand */}
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/cocoflow-logo.png" 
                alt="Cocoflow Logo" 
                className="w-32 h-24 object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Cocoflow</h2>
            <p className="text-sm text-gray-300">Soins énergétiques</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsOpen(false); // Close mobile menu after selection
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-opacity-20'
                }`}
                style={{
                  backgroundColor: activeSection === item.id ? '#007BA7' : 'transparent'
                }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label.replace(/^🏠 |🌿 |🕊️ |💎 |💬 /, '')}</span>
              </button>
            ))}
          </nav>

          {/* Contact Info at Bottom */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center space-y-2">
              <a
                href="tel:+41790000000"
                className="block text-sm text-blue-300 hover:text-white transition-colors"
              >
                📞 +41 79 000 00 00
              </a>
              <a
                href="mailto:contact@cocoflow.ch"
                className="block text-sm text-blue-300 hover:text-white transition-colors"
              >
                📧 contact@cocoflow.ch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

