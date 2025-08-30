import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";
import "react-day-picker/dist/style.css";

export default function Booking() {
  const { language } = useLanguage();
  const { booking } = site[language];
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    timeSlot: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以添加表單提交邏輯
    console.log("預約表單:", { ...formData, date: selectedDate });
    alert(language === 'zh' ? "感謝您的預約！我們會盡快透過 Line 與您聯繫確認。" : "Thank you for your booking! We will contact you via Line as soon as possible.");
  };

  return (
    <section id="booking" className="py-8 bg-white/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">{booking.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            {booking.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 日期選擇器 - 現在在上方 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 font-display text-center">
              {language === 'zh' ? '選擇預約日期' : 'Select Booking Date'}
            </h3>
            <div className="overflow-x-auto flex justify-center">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={{ before: new Date() }}
                className="mx-auto"
                styles={{
                  day: { margin: 0 }
                }}
              />
            </div>
            {selectedDate && (
              <p className="mt-4 text-sm text-gray-600 font-body text-center">
                {language === 'zh' ? '已選擇：' : 'Selected: '}{selectedDate.toLocaleDateString(language === 'zh' ? 'zh-TW' : 'en-US')}
              </p>
            )}
          </div>

          {/* 預約表單 - 現在在下方 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 font-display">
              {language === 'zh' ? '填寫預約資訊' : 'Fill Booking Information'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  {language === 'zh' ? '姓名 *' : 'Name *'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-body"
                  placeholder={language === 'zh' ? '請輸入您的姓名' : 'Please enter your name'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  {language === 'zh' ? '電話 *' : 'Phone *'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-body"
                  placeholder={language === 'zh' ? '請輸入您的電話號碼' : 'Please enter your phone number'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  {language === 'zh' ? '選擇服務 *' : 'Select Service *'}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-body"
                >
                  <option value="">{language === 'zh' ? '請選擇服務項目' : 'Please select a service'}</option>
                  {booking.services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  {language === 'zh' ? '希望時段 *' : 'Preferred Time *'}
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-body"
                >
                  <option value="">{language === 'zh' ? '請選擇時段' : 'Please select a time slot'}</option>
                  {booking.timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">
                  {language === 'zh' ? '備註' : 'Notes'}
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-body"
                  placeholder={language === 'zh' ? '如有特殊需求或問題，請在此說明' : 'Please specify any special requirements or questions'}
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm font-body">
                  {booking.disclaimer}
                </p>
              </div>

              <button
                type="submit"
                className="w-full aurora-background text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold font-body"
              >
                {language === 'zh' ? '送出預約' : 'Submit Booking'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
