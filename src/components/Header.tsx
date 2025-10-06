import { Zap } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/+5581991584815';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" fill="white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                inStarup
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Potencialize sua Presença Digital</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-800 hover:text-pink-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-800 hover:text-pink-600 transition-colors font-medium"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-800 hover:text-pink-600 transition-colors font-medium"
            >
              FAQ
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}
