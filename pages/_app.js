import '../styles/globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'
import CookieConsent from '../components/ui/CookieConsent'
import { useEffect } from 'react'
import { initializeGAConsent } from '../utils/cookieConsent'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // 初始化 Google Analytics 同意模式
    initializeGAConsent();
  }, []);

  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <CookieConsent />
    </LanguageProvider>
  )
}


