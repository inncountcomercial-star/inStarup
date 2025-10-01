import { useState } from 'react';
import { Users, Heart, MessageSquare, Send } from 'lucide-react';

interface PackageOption {
  id: string;
  name: string;
  icon: typeof Users;
  options: number[];
  pricePerUnit: number;
}

const PACKAGE_OPTIONS: PackageOption[] = [
  {
    id: 'followers',
    name: 'Seguidores',
    icon: Users,
    options: [100, 500, 1000, 2500, 5000, 10000],
    pricePerUnit: 0.05
  },
  {
    id: 'likes',
    name: 'Curtidas',
    icon: Heart,
    options: [50, 100, 250, 500, 1000, 2500],
    pricePerUnit: 0.02
  },
  {
    id: 'comments',
    name: 'Comentários',
    icon: MessageSquare,
    options: [10, 25, 50, 100, 250, 500],
    pricePerUnit: 0.10
  }
];

const WHATSAPP_NUMBER = '+5581991584815';

export function PackageBuilder() {
  const [selectedPackages, setSelectedPackages] = useState<Record<string, number>>({
    followers: 0,
    likes: 0,
    comments: 0
  });

  const handleQuantityChange = (packageId: string, quantity: number) => {
    setSelectedPackages(prev => ({
      ...prev,
      [packageId]: quantity
    }));
  };

  const calculateTotal = () => {
    return PACKAGE_OPTIONS.reduce((total, option) => {
      const quantity = selectedPackages[option.id];
      return total + (quantity * option.pricePerUnit);
    }, 0);
  };

  const formatWhatsAppMessage = () => {
    const items = PACKAGE_OPTIONS
      .filter(option => selectedPackages[option.id] > 0)
      .map(option => `${option.name}: ${selectedPackages[option.id].toLocaleString('pt-BR')}`)
      .join('\n');

    const total = calculateTotal();

    if (!items) {
      return `Olá! Gostaria de saber mais sobre os pacotes do InStarup.`;
    }

    return `Olá! Gostaria de montar o seguinte pacote:\n\n${items}\n\nValor estimado: R$ ${total.toFixed(2)}`;
  };

  const sendToWhatsApp = () => {
    const message = formatWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const hasSelection = Object.values(selectedPackages).some(qty => qty > 0);

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Monte Seu Pacote Personalizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a quantidade ideal de seguidores, curtidas e comentários para o seu Instagram.
            Monte como desejar e envie pelo WhatsApp!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PACKAGE_OPTIONS.map((option) => {
            const Icon = option.icon;
            const selectedValue = selectedPackages[option.id];

            return (
              <div
                key={option.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{option.name}</h3>
                </div>

                <div className="space-y-3">
                  {option.options.map((quantity) => (
                    <button
                      key={quantity}
                      onClick={() => handleQuantityChange(option.id, quantity)}
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all text-left flex items-center justify-between ${
                        selectedValue === quantity
                          ? 'bg-green-500 text-white shadow-md scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{quantity.toLocaleString('pt-BR')}</span>
                      <span className="text-sm opacity-75">
                        R$ {(quantity * option.pricePerUnit).toFixed(2)}
                      </span>
                    </button>
                  ))}
                </div>

                {selectedValue > 0 && (
                  <button
                    onClick={() => handleQuantityChange(option.id, 0)}
                    className="w-full mt-4 py-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Limpar seleção
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {hasSelection ? 'Seu Pacote Personalizado' : 'Selecione seus itens acima'}
              </h3>
              {hasSelection && (
                <div className="space-y-1 text-gray-600">
                  {PACKAGE_OPTIONS.map(option => {
                    const qty = selectedPackages[option.id];
                    if (qty === 0) return null;
                    return (
                      <p key={option.id}>
                        <span className="font-semibold">{option.name}:</span> {qty.toLocaleString('pt-BR')}
                      </p>
                    );
                  })}
                  <p className="text-2xl font-bold text-green-600 mt-4">
                    Total: R$ {calculateTotal().toFixed(2)}
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={sendToWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
            >
              <Send className="w-6 h-6" />
              Enviar no WhatsApp
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Valores são estimativas. Confirme os preços finais via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
