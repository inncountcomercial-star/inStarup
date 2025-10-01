import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'É seguro usar o inStarup? Minha conta pode ser bloqueada?',
    answer:
      'Sim, é totalmente seguro! Usamos métodos de visibilidade inteligente que respeitam as diretrizes de todas as plataformas. Não utilizamos bots ou scripts que possam comprometer sua conta. Trabalhamos com tráfego real e orgânico.',
  },
  {
    question: 'Quanto tempo leva para ver os resultados?',
    answer:
      'Os resultados começam a aparecer nos primeiros minutos após a confirmação do seu pedido. Dependendo do pacote escolhido, você verá o crescimento gradual e natural ao longo das primeiras horas.',
  },
  {
    question: 'Vocês pedem a senha da minha conta?',
    answer:
      'Nunca! Não pedimos senhas ou qualquer informação sensível. Você só precisa fornecer o link ou @ do seu perfil público. Sua privacidade e segurança são fundamentais para nós.',
  },
  {
    question: 'Quais serviços vocês oferecem?',
    answer:
      'Somos especialistas em Instagram! Oferecemos pacotes personalizados de seguidores, curtidas e comentários para impulsionar seu perfil de forma natural e segura.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Entre em contato via WhatsApp e nossa equipe irá orientá-lo sobre as formas de pagamento disponíveis. Aceitamos diversos métodos e processamos seu pedido imediatamente após a confirmação.',
  },
  {
    question: 'Posso combinar diferentes serviços em um pacote?',
    answer:
      'Sim! Você pode personalizar completamente seu pacote de Instagram. Combine seguidores, curtidas e comentários de acordo com suas necessidades. Fale com nossa equipe para criar o pacote ideal.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-6 py-3 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-pink-600" />
            <span className="font-semibold text-pink-900">Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tire suas{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              dúvidas
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que você precisa saber sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-pink-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Ainda tem dúvidas?</h3>
          <p className="mb-6">Nossa equipe está pronta para ajudar você!</p>
          <a
            href="https://wa.me/+5581991584815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
