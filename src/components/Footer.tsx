import { Zap, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">inStarup</h3>
                <p className="text-sm text-pink-200">Potencialize sua Presença Digital</p>
              </div>
            </div>
            <p className="text-pink-100 leading-relaxed">
              Aumente seu Instagram em Minutos com o serviço mais confiável do mercado.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-pink-100">
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-pink-400 transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="hover:text-pink-400 transition-colors"
                >
                  Comprar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@meninoti.com.br"
                className="flex items-center gap-2 text-pink-100 hover:text-pink-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contato@meninoti.com.br
              </a>
              <a
                href="https://wa.me/+5581991584815"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-100 hover:text-pink-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: +55 81 99158-4815
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-800 pt-8 text-center text-pink-200">
          <p>© 2025 inStarup. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
