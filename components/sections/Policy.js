import { site } from "../../data/content";

export default function Policy() {
  return (
    <section id="policy" className="py-8 bg-white/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">預約須知</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
            為了提供最好的服務品質，請詳閱以下預約規則
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {site.policy.text.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-button text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1 font-body">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-body">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-yellow-800 font-semibold mb-2 font-display">重要提醒</h4>
                  <p className="text-yellow-700 text-sm font-body">
                    請務必準時抵達，遲到超過 10 分鐘可能會影響服務內容。如需改期，請提前 24 小時告知，感謝您的配合。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
