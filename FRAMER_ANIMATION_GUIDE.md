# Framer Motion 滑動觸發動畫系統使用指南

## 🎯 概述

這是一個基於 Framer Motion 的滑動觸發動畫系統，提供優雅的浮現動畫、標題動畫、小卡動畫等功能。所有動畫都會隨著滾動觸發，創造流暢的視覺體驗。

## 🚀 主要特色

- **滑動觸發**: 元素進入視窗時自動觸發動畫
- **優雅浮現**: 從下往上浮現，支援多種動畫類型
- **交錯動畫**: 多個元素依序浮現，創造層次感
- **視差效果**: 支援視差滾動，增加深度感
- **響應式設計**: 針對不同裝置優化動畫效果
- **3D 浮動**: 特殊的 3D 浮動動畫效果

## 📦 組件列表

### 1. ScrollTriggerContainer
主容器組件，負責滑動觸發和視差效果。

### 2. AnimatedTitle
標題動畫組件，支援多種動畫類型和發光效果。

### 3. AnimatedSubtitle
副標題動畫組件，支援多種動畫類型。

### 4. AnimatedCard
小卡動畫組件，支援懸停效果和多種動畫類型。

### 5. AnimatedContent
內容區塊動畫組件，支援多種動畫類型。

### 6. AnimatedGrid
網格容器組件，支援響應式網格動畫。

### 7. Floating3DCard
3D 浮動效果組件，持續的浮動動畫。

### 8. AnimatedText
文字分割動畫組件，替代 GSAP 的文字動畫。

## 🎨 動畫類型

### fadeUp (預設)
從下往上浮現，帶有輕微的縮放和旋轉效果。

### title
標題專用動畫，從下往上浮現。

### card
小卡專用動畫，從下往上浮現，帶有輕微的 Y 軸旋轉。

### content
內容專用動畫，從下往上浮現。

### slideInLeft
從左側滑入。

### slideInRight
從右側滑入。

### scaleIn
縮放浮現，帶有 Y 軸旋轉效果。

## 📱 響應式設計

系統會自動檢測行動裝置並優化動畫參數：
- 減少動畫延遲時間
- 減少動畫強度
- 優化網格列數
- 禁用懸停效果

## 💻 使用方法

### 基本用法

```javascript
import { 
  ScrollTriggerContainer, 
  AnimatedTitle, 
  AnimatedSubtitle, 
  AnimatedCard 
} from "../ui/UnifiedScrollAnimation";

<ScrollTriggerContainer 
  staggerDelay={0.2}
  animationType="fadeUp"
  enableParallax={true}
  parallaxSpeed={0.3}
>
  <AnimatedTitle customDelay={0}>
    標題
  </AnimatedTitle>
  
  <AnimatedSubtitle customDelay={0.1}>
    副標題
  </AnimatedSubtitle>
  
  <AnimatedCard customDelay={0.2}>
    卡片內容
  </AnimatedCard>
</ScrollTriggerContainer>
```

### 網格動畫

```javascript
<AnimatedGrid 
  columns={3}
  staggerDelay={0.15}
  className="mb-16"
>
  {items.map((item, index) => (
    <AnimatedCard 
      key={index} 
      customDelay={index * 0.1}
      hoverEffect={true}
    >
      {item.content}
    </AnimatedCard>
  ))}
</AnimatedGrid>
```

### 3D 浮動效果

```javascript
<Floating3DCard 
  floatDistance={20}
  floatDuration={5}
  rotationAngle={8}
  className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 shadow-xl"
>
  <h3>浮動卡片標題</h3>
  <p>浮動卡片內容</p>
</Floating3DCard>
```

## ⚙️ 配置選項

### ScrollTriggerContainer

| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `staggerDelay` | number | 0.2 | 子元素動畫延遲時間 |
| `viewportMargin` | string | "-100px" | 視窗觸發邊距 |
| `animationType` | string | "fadeUp" | 動畫類型 |
| `enableParallax` | boolean | false | 是否啟用視差效果 |
| `parallaxSpeed` | number | 0.5 | 視差滾動速度 |

### AnimatedTitle

| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `customDelay` | number | 0 | 自定義延遲時間 |
| `enableGlow` | boolean | true | 是否啟用發光效果 |
| `animationType` | string | "title" | 動畫類型 |

### AnimatedCard

| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `customDelay` | number | 0 | 自定義延遲時間 |
| `hoverEffect` | boolean | true | 是否啟用懸停效果 |
| `animationType` | string | "card" | 動畫類型 |

### AnimatedGrid

| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `columns` | number | 3 | 網格列數 |
| `staggerDelay` | number | 0.15 | 子元素動畫延遲時間 |

### Floating3DCard

| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `floatDistance` | number | 15 | 浮動距離 |
| `floatDuration` | number | 4 | 浮動持續時間 |
| `rotationAngle` | number | 5 | 旋轉角度 |

## 🔧 進階用法

### 自定義動畫變體

```javascript
const customVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateZ: -45,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

<AnimatedCard 
  customDelay={0}
  animationType="custom"
  variants={customVariants}
>
  自定義動畫內容
</AnimatedCard>
```

### 組合使用

```javascript
<ScrollTriggerContainer 
  staggerDelay={0.3}
  enableParallax={true}
  parallaxSpeed={0.4}
>
  {/* 標題優先浮現 */}
  <AnimatedTitle customDelay={0} enableGlow={true}>
    主標題
  </AnimatedTitle>
  
  {/* 副標題延遲浮現 */}
  <AnimatedSubtitle customDelay={0.2}>
    副標題描述
  </AnimatedSubtitle>
  
  {/* 內容區塊延遲浮現 */}
  <AnimatedContent customDelay={0.4}>
    詳細內容
  </AnimatedContent>
  
  {/* 網格交錯浮現 */}
  <AnimatedGrid columns={4} staggerDelay={0.1}>
    {items.map((item, index) => (
      <AnimatedCard 
        key={index} 
        customDelay={index * 0.05}
        hoverEffect={true}
      >
        {item.content}
      </AnimatedCard>
    ))}
  </AnimatedGrid>
</ScrollTriggerContainer>
```

## 🎭 動畫效果預覽

### 標題浮現
- 從下往上浮現
- 輕微縮放效果
- 可選發光效果
- 懸停時輕微放大

### 小卡浮現
- 從下往上浮現
- 輕微 Y 軸旋轉
- 懸停時上移和放大
- 陰影增強效果

### 內容浮現
- 從下往上浮現
- 輕微縮放效果
- 平滑的過渡動畫

### 3D 浮動
- 持續的上下浮動
- 輕微的 Y 軸旋轉
- 懸停時增強效果
- 行動版優化

## 📱 行動版優化

系統會自動檢測行動裝置並：
- 減少動畫延遲時間 (×0.6)
- 減少動畫強度 (×0.7)
- 優化網格列數 (最多 2 列)
- 禁用懸停效果
- 減少視差滾動強度

## 🚨 注意事項

1. **性能優化**: 動畫使用 CSS transforms，性能優異
2. **無障礙性**: 支援鍵盤導航和螢幕閱讀器
3. **瀏覽器兼容**: 支援所有現代瀏覽器
4. **SEO 友好**: 不影響搜尋引擎優化
5. **漸進增強**: 動畫失敗時不影響基本功能

## 🔍 故障排除

### 動畫不觸發
- 檢查 `useInView` 的觸發條件
- 確認元素在視窗中的位置
- 檢查 `viewportMargin` 設定

### 動畫效果不理想
- 調整 `staggerDelay` 參數
- 修改 `customDelay` 值
- 選擇合適的 `animationType`

### 行動版問題
- 檢查響應式設定
- 調整行動版專用參數
- 測試不同裝置尺寸

## 📚 相關資源

- [Framer Motion 官方文檔](https://www.framer.com/motion/)
- [React 動畫最佳實踐](https://reactjs.org/docs/animation.html)
- [CSS 動畫性能優化](https://developers.google.com/web/fundamentals/design-and-ux/animations)

## 🤝 貢獻

如果您發現問題或有改進建議，請：
1. 檢查現有 issue
2. 創建新的 issue
3. 提交 pull request

---

**享受流暢的動畫體驗！** ✨
