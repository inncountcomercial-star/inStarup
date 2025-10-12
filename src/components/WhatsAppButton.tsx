import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/+5581991584815';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 animate-bounce"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" fill="white" />
    </a>
  );
}
