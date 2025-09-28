import React, { useState, useEffect } from 'react';
import { content } from './constants.ts';
import { Language } from './types.ts';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import OfferDetails from './components/OfferDetails.tsx';
import ProofAndTestimonial from './components/ProofAndTestimonial.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.AR);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === Language.AR ? 'rtl' : 'ltr';
  }, [language]);

  const currentContent = content[language];
  const fontFamily = language === Language.AR ? 'font-cairo' : 'font-sans';

  return (
    <div className={`bg-black text-white min-h-screen ${fontFamily}`}>
      <Header
        language={language}
        setLanguage={setLanguage}
        content={currentContent.header}
      />
      <main>
        <Hero content={currentContent.hero} />
        <OfferDetails content={currentContent.offer} />
        <ProofAndTestimonial content={currentContent.proofAndTestimonial} language={language} />
        <Footer content={currentContent.footer} />
      </main>
    </div>
  );
};

export default App;