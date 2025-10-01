import { Star, Users, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Influenciadora Digital',
    text: 'Resultados incríveis em menos de 24h! Meu Instagram cresceu 300% e o engajamento disparou.',
    rating: 5,
  },
  {
    name: 'João Pedro',
    role: 'Empreendedor',
    text: 'Serviço profissional e seguro. Consegui alavancar minha marca no TikTok rapidamente.',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Criadora de Conteúdo',
    text: 'Melhor investimento que fiz! Suporte rápido e resultados reais. Super recomendo!',
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
            <Users className="w-5 h-5 text-pink-600" />
            <span className="font-bold text-2xl text-gray-900">+80.000</span>
            <span className="text-gray-600">Clientes Satisfeitos</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-700">
            <span className="font-bold text-2xl text-gray-900">4.8 de 5</span> • Baseado em mais de{' '}
            <span className="font-semibold">2.600 Avaliações</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="text-gray-700">Suporte via WhatsApp disponível 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
