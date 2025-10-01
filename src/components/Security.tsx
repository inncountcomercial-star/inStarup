import { Shield, CheckCircle, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Usamos métodos de visibilidade inteligente, sem bots ou scripts. Seu perfil não corre risco.',
  },
  {
    icon: CheckCircle,
    title: 'Dentro das Regras',
    description: 'Nossa atuação respeita todas as diretrizes das plataformas. Trabalhamos de forma ética.',
  },
  {
    icon: Zap,
    title: 'Resultados Rápidos',
    description: 'Você verá melhoria visível nos primeiros minutos após iniciar seu pacote.',
  },
  {
    icon: Lock,
    title: 'Privacidade Garantida',
    description: 'Seus dados estão protegidos. Nunca pedimos senhas ou informações sensíveis.',
  },
];

export function Security() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Shield className="w-6 h-6" />
            <span className="font-semibold">Garantia e Segurança</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sua segurança é nossa{' '}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              prioridade
            </span>
          </h2>
          <p className="text-xl text-pink-100">
            Trabalhamos com os mais altos padrões de qualidade e segurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="bg-gradient-to-br from-pink-400 to-orange-400 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-pink-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <p className="text-lg text-pink-100 mb-4">
            Dúvidas sobre segurança? Nossa equipe está pronta para ajudar!
          </p>
          <a
            href="mailto:contato@meninoti.com.br"
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
          >
            contato@meninoti.com.br
          </a>
        </div>
      </div>
    </section>
  );
}
