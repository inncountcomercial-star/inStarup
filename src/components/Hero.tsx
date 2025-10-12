import { ArrowRight, Instagram, Heart, MessageCircle, UserPlus } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/+5581991584815';

const services = [
  { icon: UserPlus, name: 'Seguidores', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
  { icon: Heart, name: 'Curtidas', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
  { icon: MessageCircle, name: 'Comentários', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
];

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4" id="services">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 p-4 rounded-3xl">
              <Instagram className="w-16 h-16 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Cresça no Instagram com{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              poucos cliques!
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Impulsione seu perfil no Instagram com seguidores, curtidas e comentários reais.
            <br />
            <span className="font-semibold text-gray-800">
              Aumente seu Instagram em Minutos!
            </span>
          </p>
          <a
            href="#packages"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Comece Agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-center font-bold text-gray-900 text-xl">{service.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 px-8 py-4 rounded-2xl">
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-gray-900">Especialistas em Instagram</span> • Resultados Reais e Rápidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
