import Head from 'next/head';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { language, content } = useLanguage();

  return (
    <>
      <Head>
        <title>隱私權政策 | V1 Nails</title>
        <meta name="description" content="V1 Nails 隱私權政策 - 了解我們如何保護您的個人資料" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">隱私權政策</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                最後更新日期：{new Date().toLocaleDateString('zh-TW')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">資料收集</h2>
                <p className="text-gray-700 mb-4">
                  我們可能收集以下類型的資訊：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>聯絡資訊（姓名、電話號碼、電子郵件地址）</li>
                  <li>預約相關資訊（服務類型、日期時間偏好）</li>
                  <li>網站使用資料（透過 Google Analytics）</li>
                  <li>Cookie 和類似追蹤技術</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">資料使用</h2>
                <p className="text-gray-700 mb-4">
                  我們使用收集的資訊用於：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>提供和改善我們的服務</li>
                  <li>處理預約和客戶服務</li>
                  <li>分析網站使用情況以改善用戶體驗</li>
                  <li>發送服務相關通知</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie 使用</h2>
                <p className="text-gray-700 mb-4">
                  我們使用 Cookie 和類似技術來：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>記住您的偏好設定</li>
                  <li>分析網站流量和使用模式</li>
                  <li>改善網站功能和用戶體驗</li>
                  <li>提供個人化內容</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  您可以透過瀏覽器設定控制 Cookie，但這可能影響網站的某些功能。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google Analytics</h2>
                <p className="text-gray-700 mb-4">
                  我們使用 Google Analytics 來分析網站使用情況。Google Analytics 使用 Cookie 來收集匿名的使用資料。
                  您可以透過安裝 <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#B8956A] hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics 退出瀏覽器附加元件</a> 來選擇退出。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">資料保護</h2>
                <p className="text-gray-700 mb-4">
                  我們採取適當的技術和組織措施來保護您的個人資料，防止未經授權的存取、使用或洩露。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">您的權利</h2>
                <p className="text-gray-700 mb-4">
                  您有權：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>要求存取您的個人資料</li>
                  <li>要求更正不正確的資料</li>
                  <li>要求刪除您的個人資料</li>
                  <li>撤回同意（在適用的情況下）</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">聯絡我們</h2>
                <p className="text-gray-700 mb-4">
                  如果您對此隱私權政策有任何疑問，請聯絡我們：
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    電話：<a href="tel:+886-XXX-XXX-XXX" className="text-[#B8956A] hover:underline">+886-XXX-XXX-XXX</a><br />
                    電子郵件：<a href="mailto:info@v1nails.com" className="text-[#B8956A] hover:underline">info@v1nails.com</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">政策更新</h2>
                <p className="text-gray-700">
                  我們可能會不時更新此隱私權政策。任何重大變更將在網站上公告，並更新「最後更新日期」。
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
