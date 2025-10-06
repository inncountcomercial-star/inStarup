import { Users, Star, ShoppingCart } from 'lucide-react';

interface Package {
  id: number;
  quantity: number;
  price: number;
  checkoutUrl: string;
  isPopular?: boolean;
}

const PACKAGES: Package[] = [
  {
    id: 1,
    quantity: 100,
    price: 5.00,
    checkoutUrl: 'https://pay.cakto.com.br/39kejha_597477'
  },
  {
    id: 2,
    quantity: 500,
    price: 25.00,
    checkoutUrl: 'https://pay.cakto.com.br/d9zcbne'
  },
  {
    id: 3,
    quantity: 1000,
    price: 50.00,
    checkoutUrl: 'https://pay.cakto.com.br/rv9u2po',
    isPopular: true
  },
  {
    id: 4,
    quantity: 2500,
    price: 125.00,
    checkoutUrl: 'https://pay.cakto.com.br/399hxsj'
  },
  {
    id: 5,
    quantity: 5000,
    price: 250.00,
    checkoutUrl: 'https://pay.cakto.com.br/twts876'
  },
  {
    id: 6,
    quantity: 10000,
    price: 500.00,
    checkoutUrl: 'https://pay.cakto.com.br/9zxdz45'
  }
];

export function BestSellers() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="best-sellers">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Os Favoritos dos Nossos Clientes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Os Mais Vendidos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pacotes mais escolhidos por quem quer crescer no Instagram de forma rápida e segura
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 transition-all hover:shadow-2xl ${
                pkg.isPopular
                  ? 'border-4 border-gradient shadow-xl scale-105'
                  : 'border-2 border-gray-100 hover:border-pink-200'
              }`}
              style={pkg.isPopular ? {
                borderImage: 'linear-gradient(135deg, rgb(147, 51, 234), rgb(236, 72, 153), rgb(251, 146, 60)) 1'
              } : {}}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  pkg.isPopular
                    ? 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}>
                  <Users className={`w-10 h-10 ${pkg.isPopular ? 'text-white' : 'text-gray-600'}`} />
                </div>

                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {pkg.quantity.toLocaleString('pt-BR')}
                  </span>
                </div>

                <p className="text-gray-600 font-medium mb-4">Seguidores</p>

                <div className="mb-6">
                  <span className="text-sm text-gray-500">por apenas</span>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    R$ {pkg.price.toFixed(2)}
                  </div>
                </div>
              </div>

              <a
                href={pkg.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </a>

              {pkg.isPopular && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600 font-medium">
                    ⚡ Entrega em até 24 horas
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 px-8 py-4 rounded-2xl">
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-green-700">✓ Pagamento 100% Seguro</span>
              {' '}• Entrega Garantida • Suporte 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
