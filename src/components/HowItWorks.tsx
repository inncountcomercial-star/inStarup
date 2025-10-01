import { MousePointerClick, User, Package } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    number: '01',
    title: 'Selecione o serviço',
    description: 'Escolha entre seguidores, curtidas ou comentários para impulsionar seu Instagram.',
  },
  {
    icon: User,
    number: '02',
    title: 'Perfil',
    description: 'Insira o link ou @ do seu perfil do Instagram. Ex: @neymarjr. Simples e rápido!',
  },
  {
    icon: Package,
    number: '03',
    title: 'Personalize',
    description: 'Monte os pacotes como desejar: seguidores, curtidas e comentários para seu Instagram. Insira o texto após o "." e envie pelo whatsapp.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white" id="how-it-works">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crie seu pacote personalizado em{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              apenas três passos simples
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Comece a ver resultados em minutos, não em dias!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all h-full">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-pink-600 font-bold text-2xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-1 rounded-2xl">
            <div className="bg-white rounded-xl px-8 py-6">
              <p className="text-gray-900 text-lg">
                <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Resultados visíveis
                </span>
                {' '}nos primeiros minutos após a compra!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
