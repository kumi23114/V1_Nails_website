import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Booking from '../components/sections/Booking';
import Location from '../components/sections/Location';

import Footer from '../components/layout/Footer';
import FloatingCTA from '../components/ui/FloatingCTA';
import { useLanguage } from '../contexts/LanguageContext';
import { site } from '../data/content';

export default function HomePage() {
  const { language } = useLanguage();
  const currentContent = site[language];
  
  return (
    <>
      <Head>
        <title>{language === 'zh' ? '美甲沙龍 - 專業美甲服務' : 'Nail Salon - Professional Nail Services'}</title>
        <meta name="description" content={language === 'zh' ? '專業美甲服務，提供高品質美甲設計' : 'Professional nail services, providing high-quality nail art design'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        {/* 1. Hero - 第一印象 */}
        <Hero />

        {/* 2. Portfolio - 作品展示，看實際效果 */}
        <Portfolio />

        {/* 3. Services - 服務項目，了解服務和價格 */}
        <Services />

        {/* 4. Booking - 線上預約，感興趣後立即預約 */}
        <Booking />

        {/* 5. Location - 店家位置，確認交通便利性 */}
        <Location />
      </main>

      <Footer />

      <FloatingCTA />
    </>
  );
}


