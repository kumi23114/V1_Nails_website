import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-TW">
      <Head>
        {/* DNS 預取和字體優化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://widget.simplybook.asia" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* 字體載入 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />

        {/* 安全性標頭 */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* 主題色彩 */}
        <meta name="theme-color" content="#B8956A" />
        <meta name="msapplication-TileColor" content="#B8956A" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* 網站驗證（如果需要的話，可以後續添加）*/}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
