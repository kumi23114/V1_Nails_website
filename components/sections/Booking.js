import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";
import BookingWidget from "./BookingWidget";

export default function Booking() {
  const { language } = useLanguage();
  const { booking } = site[language];

  return (
    <section id="booking" className="py-8 bg-white/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 ${language === 'zh' ? 'font-chinese' : 'font-display'}`}>
            {booking.title}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'zh' ? 'font-chinese' : 'font-body'}`}>
            {booking.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* SimplyBook.me 預約系統 */}
          <BookingWidget />

          {/* 預約說明 */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-[20px] p-6">
            <p className={`text-yellow-800 text-sm text-center ${language === 'zh' ? 'font-chinese' : 'font-body'}`}>
              {booking.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
