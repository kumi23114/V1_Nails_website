# 物件依序觸發動畫系統使用指南

## 概述

這個新的動畫系統讓您可以實現物件依序觸發的動畫效果，而不是整個section一起觸發。這樣可以創造出更有層次感和視覺吸引力的用戶體驗。

## 主要組件

### 1. StaggeredContainer
主要的動畫容器，控制子元素的觸發時機和動畫類型。

**屬性：**
- `staggerDelay`: 子元素之間的延遲時間（秒）
- `viewportMargin`: 視窗邊緣觸發距離
- `animationType`: 預設動畫類型
- `className`: CSS類名

### 2. StaggeredItem
動畫子元素，每個都會依序觸發動畫。

**屬性：**
- `animationType`: 動畫類型
- `customDelay`: 自定義延遲時間
- `whileHover`: 滑鼠懸停效果
- `whileTap`: 點擊效果
- `className`: CSS類名

### 3. 特殊效果組件

#### FloatingItem
創建浮動效果，適合用於裝飾元素。

#### BounceItem
創建彈跳效果，適合用於互動元素。

## 動畫類型

### 1. fadeIn
淡入效果，從下方滑入並淡現。

### 2. slideInUp
從下方滑入效果。

### 3. slideInLeft
從左側滑入效果。

### 4. slideInRight
從右側滑入效果。

### 5. scaleIn
縮放浮現效果，帶有輕微的3D旋轉。

## 使用範例

### 基本用法

```jsx
import { StaggeredContainer, StaggeredItem } from '../components/ui/StaggeredAnimation';

<StaggeredContainer staggerDelay={0.15} animationType="fadeIn">
  <StaggeredItem animationType="fadeIn">
    <h1>標題</h1>
  </StaggeredItem>
  <StaggeredItem animationType="slideInUp">
    <p>內容段落</p>
  </StaggeredItem>
</StaggeredContainer>
```

### 列表項目依序觸發

```jsx
<StaggeredContainer staggerDelay={0.1} animationType="scaleIn">
  {items.map((item, index) => (
    <StaggeredItem key={index} animationType="scaleIn">
      <div className="card">
        {item.content}
      </div>
    </StaggeredItem>
  ))}
</StaggeredContainer>
```

### 左右分欄依序觸發

```jsx
<StaggeredContainer staggerDelay={0.2} animationType="fadeIn">
  <div className="grid md:grid-cols-2 gap-6">
    <StaggeredItem animationType="slideInLeft">
      <div className="left-content">
        左側內容
      </div>
    </StaggeredItem>
    
    <StaggeredItem animationType="slideInRight">
      <div className="right-content">
        右側內容
      </div>
    </StaggeredItem>
  </div>
</StaggeredContainer>
```

### 帶有互動效果

```jsx
<StaggeredContainer staggerDelay={0.15} animationType="fadeIn">
  <StaggeredItem animationType="fadeIn">
    <BounceItem bounceStrength={0.1}>
      <button className="btn">
        點擊我
      </button>
    </BounceItem>
  </StaggeredItem>
</StaggeredContainer>
```

## 最佳實踐

### 1. 動畫時機控制
- 使用適當的 `staggerDelay` 值（0.1-0.3秒）
- 根據內容重要性調整觸發順序

### 2. 動畫類型選擇
- 標題：使用 `slideInUp` 或 `fadeIn`
- 內容區塊：使用 `fadeIn` 或 `scaleIn`
- 側邊內容：使用 `slideInLeft` 或 `slideInRight`
- 互動元素：使用 `scaleIn` 配合 `BounceItem`

### 3. 性能優化
- 避免過多的動畫同時進行
- 使用 `viewportMargin` 控制觸發時機
- 考慮用戶的動畫偏好設置

### 4. 無障礙性
- 動畫不會影響內容的可讀性
- 支持用戶的動畫偏好設置
- 動畫完成後保持穩定的視覺狀態

## 自定義動畫

如果需要創建自定義動畫，可以在 `StaggeredAnimation.js` 中添加新的變體：

```jsx
const customVariants = {
  hidden: {
    opacity: 0,
    // 自定義初始狀態
  },
  visible: {
    opacity: 1,
    // 自定義最終狀態
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
```

## 注意事項

1. 確保所有動畫組件都正確導入
2. 動畫類型名稱必須與組件中定義的類型匹配
3. 避免在動畫進行中改變DOM結構
4. 測試不同設備和瀏覽器的兼容性

這個動畫系統讓您可以創造出專業級的用戶體驗，每個元素都能優雅地依序出現，營造出層次豐富的視覺效果。
