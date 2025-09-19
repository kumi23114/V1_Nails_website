import Head from 'next/head';

export default function StructuredData({ language = 'zh' }) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Zero Nails 莉蘿大里美甲",
    "alternateName": "Zero Nails",
    "description": language === 'zh' ? 
      "Zero Nails 莉蘿大里美甲，位於台中市大里區的專業美甲沙龍。提供凝膠美甲、手繪設計、貓眼漸層、鏡面法式等服務。預約制個人工作室，專業技術與溫馨環境。" :
      "Zero Nails professional nail salon in Dali, Taichung. Offering gel nails, nail art, cat eye gradients, mirror French manicures. Appointment-based personal studio with professional techniques.",
    "url": "https://zeronails.com",
    "telephone": "+886-XXX-XXX-XXX", // 請替換為實際電話號碼
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "爽文路359號",
      "addressLocality": "大里區",
      "addressRegion": "台中市",
      "postalCode": "412",
      "addressCountry": "TW"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.0987574,
      "longitude": 120.6743868
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "NT$500-NT$2000",
    "acceptsReservations": true,
    "image": [
      "https://zeronails.com/images/hero1.png",
      "https://zeronails.com/images/nail_work_3976.jpg",
      "https://zeronails.com/images/nail_work_8623.jpg"
    ],
    "sameAs": [
      "https://www.instagram.com/zeronail0228/",
      "https://line.me/ti/p/@184qgniw"
    ],
    "serviceType": [
      language === 'zh' ? "凝膠美甲" : "Gel Nails",
      language === 'zh' ? "手繪美甲" : "Nail Art",
      language === 'zh' ? "美甲設計" : "Nail Design",
      language === 'zh' ? "指甲保養" : "Nail Care"
    ],
    "areaServed": {
      "@type": "City",
      "name": language === 'zh' ? "台中市" : "Taichung City"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'zh' ? "美甲服務項目" : "Nail Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'zh' ? "凝膠單色" : "Gel Single Color",
            "description": language === 'zh' ? "經典單色凝膠，簡約耐看" : "Classic single color gel, simple and durable"
          },
          "price": "800",
          "priceCurrency": "TWD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'zh' ? "手繪美甲" : "Hand-painted Nail Art",
            "description": language === 'zh' ? "客製化手繪設計" : "Customized hand-painted design"
          },
          "price": "1280",
          "priceCurrency": "TWD"
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zero Nails",
    "url": "https://zeronails.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zeronails.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'zh' ? "首頁" : "Home",
        "item": "https://zeronails.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'zh' ? "作品集" : "Portfolio",
        "item": "https://zeronails.com#portfolio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": language === 'zh' ? "服務項目" : "Services",
        "item": "https://zeronails.com#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": language === 'zh' ? "預約" : "Booking",
        "item": "https://zeronails.com#booking"
      }
    ]
  };

  return (
    <Head>
      {/* Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </Head>
  );
}
