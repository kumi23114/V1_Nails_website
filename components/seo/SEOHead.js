import Head from 'next/head';

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  ogImage = '/images/hero1.png',
  ogType = 'website',
  language = 'zh',
  canonicalUrl = 'https://zeronails.com'
}) {
  const siteTitle = language === 'zh' ? 'Zero Nails 莉蘿大里美甲' : 'Zero Nails';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  return (
    <Head>
      {/* 基本 SEO Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zero Nails 莉蘿大里美甲" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language === 'zh' ? 'zh-TW' : 'en'} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Zero Nails" />
      <meta property="og:image" content={`https://zeronails.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={language === 'zh' ? 'Zero Nails 美甲作品展示' : 'Zero Nails nail art showcase'} />
      <meta property="og:locale" content={language === 'zh' ? 'zh_TW' : 'en_US'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://zeronails.com${ogImage}`} />
      <meta name="twitter:image:alt" content={language === 'zh' ? 'Zero Nails 美甲作品展示' : 'Zero Nails nail art showcase'} />
      
      {/* Business Information */}
      <meta property="business:contact_data:street_address" content="412台灣台中市大里區爽文路359號" />
      <meta property="business:contact_data:locality" content="大里區" />
      <meta property="business:contact_data:region" content="台中市" />
      <meta property="business:contact_data:postal_code" content="412" />
      <meta property="business:contact_data:country_name" content="Taiwan" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
  );
}
