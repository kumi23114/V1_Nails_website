import React from 'react';
import Button from '../components/ui/Button';

export default function AuroraTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 font-display">
          Aurora Button 動畫測試
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Primary Button */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Primary</h3>
            <Button variant="primary" size="lg">
              點擊我
            </Button>
          </div>
          
          {/* Secondary Button */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Secondary</h3>
            <Button variant="secondary" size="lg">
              點擊我
            </Button>
          </div>
          
          {/* Outline Button */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Outline</h3>
            <Button variant="outline" size="lg">
              點擊我
            </Button>
          </div>
          
          {/* Ghost Button */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Ghost</h3>
            <Button variant="ghost" size="lg">
              點擊我
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">不同尺寸</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="sm">小按鈕</Button>
            <Button variant="primary" size="md">中按鈕</Button>
            <Button variant="primary" size="lg">大按鈕</Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">互動說明</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            將滑鼠懸停在按鈕上可以看到光暈效果，點擊時會有按壓動畫。
            每個按鈕都有不同的變體樣式，但都具備相同的動畫效果。
          </p>
        </div>
      </div>
    </div>
  );
}
