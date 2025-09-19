import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import Services from '../components/sections/Services';
import Booking from '../components/sections/Booking';
import Location from '../components/sections/Location';
import Footer from '../components/layout/Footer';
import FloatingCTA from '../components/ui/FloatingCTA';
import SEOHead from '../components/seo/SEOHead';
import StructuredData from '../components/seo/StructuredData';
import { useLanguage } from '../contexts/LanguageContext';
import { site } from '../data/content';

export default function HomePage() {
  const { language } = useLanguage();
  const currentContent = site[language];
  
  return (
    <>
      <SEOHead
        title={language === 'zh' ? '台中大里專業美甲沙龍 | 凝膠美甲 手繪設計' : 'Professional Nail Salon in Dali, Taichung | Gel Nails & Nail Art'}
        description={language === 'zh' ?
          'Zero Nails 莉蘿大里美甲，位於台中市大里區的專業美甲沙龍。提供凝膠美甲、手繪設計、貓眼漸層、鏡面法式等服務。預約制個人工作室，專業技術與溫馨環境。' :
          'Zero Nails professional nail salon in Dali, Taichung. Offering gel nails, nail art, cat eye gradients, mirror French manicures. Appointment-based personal studio with professional techniques.'
        }
        keywords={language === 'zh' ?
          '美甲,凝膠美甲,台中美甲,大里美甲,手繪美甲,美甲沙龍,Zero Nails,莉蘿美甲,美甲預約,專業美甲' :
          'nail salon,gel nails,nail art,Taichung nails,Dali nails,professional manicure,Zero Nails,nail appointment,nail design'
        }
        ogType="business.business"
        language={language}
        canonicalUrl="https://zeronails.com"
      />

      <StructuredData language={language} />

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


