import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { HowItWorks } from './components/HowItWorks';
import { Security } from './components/Security';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const removeFloating = () => {

  document.querySelectorAll('[style="position: fixed"][style="bottom: 1rem"][style="right: 1rem"][style="z-index: 2147483647"]').forEach(el => el.remove());

};



// executa já no load

removeFloating();



// observa mudanças no DOM

const observer = new MutationObserver(removeFloating);

observer.observe(document.body, { childList: true, subtree: true });      


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Security />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
