import { ArrowRight, Instagram, Heart, MessageCircle, UserPlus, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createConfetti } from '../utils/confetti';

const WHATSAPP_LINK = 'https://wa.me/+5581991584815';

const services = [
  { icon: UserPlus, name: 'Seguidores', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
  { icon: Heart, name: 'Curtidas', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
  { icon: MessageCircle, name: 'Comentários', gradient: 'from-purple-500 via-pink-500 to-orange-500' },
];

export function Hero() {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

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
            href="https://pay.cakto.com.br/t72qeu6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => createConfetti(e)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Quero Crescer no Instagram Agora!
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="mt-6 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-400 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-green-600" />
              <p className="text-2xl font-bold text-green-600">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </p>
            </div>
            <p className="text-lg font-bold text-gray-900 mb-2">
              🎁 BÔNUS ESPECIAL - OFERTA LIMITADA!
            </p>
            <p className="text-base text-gray-700">
              <span className="font-bold text-green-600">10% de Desconto</span> +
              <span className="font-bold"> 1.000 Seguidores</span> +
              <span className="font-bold"> 10 Curtidas</span> +
              <span className="font-bold"> 10 Comentários</span>
            </p>
          </div>
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
