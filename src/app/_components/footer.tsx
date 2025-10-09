import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-200">
      <Container>
        <div className="py-16 flex flex-col items-center text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tighter leading-tight mb-4 text-green-700">
              🕊️ Cocoflow
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Soins énergétiques à Lausanne et environs
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <a 
              href="tel:+41782592246" 
              className="flex items-center text-blue-600 hover:underline text-lg"
            >
              📞 078 259 22 46
            </a>
            <a 
              href="mailto:contact@cocoflow.ch" 
              className="flex items-center text-blue-600 hover:underline text-lg"
            >
              📧 contact@cocoflow.ch
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500 mb-2">
              📍 Lausanne – Canton de Vaud
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Cocoflow - Tous droits réservés
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
