import { useState } from 'react';
import Head from 'next/head';
import CookieSettings from '../components/ui/CookieSettings';

export default function CookieSettingsPage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  return (
    <>
      <Head>
        <title>Cookie 設定 | V1 Nails</title>
        <meta name="description" content="管理您的 Cookie 偏好設定" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie 設定</h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600">
                在這裡您可以管理網站使用的 Cookie 類型。您可以隨時更改這些設定。
              </p>
            </div>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="bg-[#B8956A] text-white px-6 py-3 rounded-lg hover:bg-[#A08660] transition-colors font-medium"
            >
              開啟 Cookie 設定
            </button>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">需要幫助？</h2>
              <p className="text-gray-600 text-sm">
                如果您對 Cookie 使用有任何疑問，請查看我們的{' '}
                <a href="/privacy-policy" className="text-[#B8956A] hover:underline">
                  隱私權政策
                </a>{' '}
                或聯絡我們。
              </p>
            </div>
          </div>
        </div>
      </div>

      <CookieSettings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}
