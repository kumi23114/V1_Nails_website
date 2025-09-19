export const site = {
  zh: {
    brand: {
      name: "Zero Nails",
      tagline: "莉蘿大里美甲",
    },
    hero: {
      headline: "Zero Nails",
      sub: "我們相信美是一種能量，\n在這片溫柔的空間裡，\n每一刻的創作都是靈魂對話與自我療癒的延伸。",
      ctaPrimary: "立即預約",
      ctaSecondary: "查看作品",
      bg: "/images/hero.jpg",
    },
    portfolio: {
      title: "作品集",
      subtitle: "精選美甲作品展示",
      items: [
        { src: "/images/nail_work_3976.jpg", alt: "美甲作品 - 精緻設計" },
        { src: "/images/nail_work_3993.JPG", alt: "美甲作品 - 優雅風格" },
        { src: "/images/nail_work_4402.jpg", alt: "美甲作品 - 時尚造型" },
        { src: "/images/nail_work_4405.jpg", alt: "美甲作品 - 細膩工藝" },
        { src: "/images/nail_work_6026.jpg", alt: "美甲作品 - 創意設計" },
        { src: "/images/nail_work_6055.jpg", alt: "美甲作品 - 專業技術" },
        { src: "/images/nail_work_8232.jpg", alt: "美甲作品 - 藝術美感" },
        { src: "/images/nail_work_8402.jpg", alt: "美甲作品 - 個性風格" },
        { src: "/images/nail_work_8560.jpg", alt: "美甲作品 - 精美細節" },
        { src: "/images/nail_work_8574.JPG", alt: "美甲作品 - 完美呈現" },
        { src: "/images/nail_work_8623.jpg", alt: "美甲作品 - 質感設計" }
      ],
    },
    services: {
      title: "服務項目",
      categories: [
        {
          name: "凝膠",
          items: [
            {
              name: "凝膠單色",
              handPrice: 800,
              footPrice: 1000,
              desc: "經典單色凝膠，簡約耐看"
            },
            {
              name: "貓眼 / 漸層",
              handPrice: 1000,
              footPrice: 1200,
              desc: "時尚貓眼或漸層效果"
            },
            {
              name: "鏡面 / 法式",
              handPrice: 1100,
              footPrice: 1300,
              desc: "優雅鏡面或經典法式"
            },
            {
              name: "手繪 / 貼鑽",
              handPrice: 1280,
              footPrice: null,
              desc: "精緻手繪設計或貼鑽裝飾",
              note: "起價，依複雜度調整"
            }
          ],
          notes: [
            "以上項目皆含前置處理/建構/指緣潤澤，卸甲延甲另計",
            "帶圖款無法100%還原，會依使用的素材/手法/複雜度有所不同",
            "以上項目跳一色 +100"
          ]
        },
        {
          name: "卸甲",
          items: [
            {
              name: "指甲油卸除",
              price: 50,
              desc: "一般指甲油卸除服務"
            },
            {
              name: "本店卸甲續做",
              price: 200,
              desc: "本店施作凝膠卸除並續做"
            },
            {
              name: "他店卸甲續做",
              price: 300,
              desc: "他店施作凝膠卸除並續做"
            },
            {
              name: "卸甲不續做",
              price: 500,
              desc: "單純卸甲服務，不續做新款"
            }
          ],
          notes: [
            "加購保養、修甲型、甘硬皮處理、甲面清潔、指緣潤澤、雷公根護甲 +200"
          ]
        },
        {
          name: "延甲",
          items: [
            {
              name: "裂甲修補",
              price: 50,
              desc: "單指裂甲修補服務"
            },
            {
              name: "單指延甲",
              handPrice: 150,
              footPrice: 200,
              desc: "單指指甲延長"
            },
            {
              name: "十指延甲",
              price: 1500,
              desc: "十指完整延甲服務"
            }
          ],
          notes: [
            "三指以上延甲麻煩提前告知，當天告知恕無法服務敬請見諒。"
          ]
        },
        {
          name: "基礎保養",
          items: [
            {
              name: "手部保養",
              price: 500,
              desc: "含前置：修整甲型、甘硬皮處理、甲面清潔、指緣潤澤、雷公根護甲"
            },
            {
              name: "足部進階保養",
              price: 1100,
              desc: "含前置：修整甲型、甘硬皮處理、甲面甲溝清潔、足底去繭、指緣潤澤、雷公根護甲"
            }
          ],
          notes: []
        }
      ],
      external: {
        lineLabel: "Line 官方帳號",
        lineUrl: "https://line.me/ti/p/@184qgniw",
        instagramLabel: "Instagram",
        instagramUrl: "https://www.instagram.com/zeronail0228"
      }
    },
    policy: {
      title: "預約須知",
      text: [
        "預約前可傳圖報價，或告知預算先行討論",
        "新客首次預約需付訂金500元，預約當天折抵",
        "付款方式：現金／轉帳(國泰)",
        "個人工作室不開放攜伴",
        "工作室有貓(不定時出現) ※過敏/怕貓/介意者慎約!",
        "自由發揮／不挑款 僅限預約三次以上客人",
        "可提供: 深淺色系／喜好風格／元素／類似圖片",
        "或選擇開盲盒(一切設計交由美甲師決定)",
        "預約保留10分鐘",
        "遲到30分鐘，改為服務單色",
        "遲到1h，將取消本次預約，並不退還訂金",
        "更改時間請提前3~5天告知",
        "若要提早來，請先訊息詢問",
        "本店擁有最終解釋權"
      ]
    },

    news: {
      title: "最新消息",
      items: [
        {
          title: "11 月改版重點說明（2025/08/01）",
          date: "2025-08-01",
          url: "#"
        },
        {
          title: "每月設計上架結束公告（2025/07/01）",
          date: "2025-07-01",
          url: "#"
        },
        {
          title: "四週年與改版相關說明（2025/06/14）",
          date: "2025-06-14",
          url: "#"
        }
      ]
    },
    booking: {
      title: "線上預約",
      subtitle: "預約您的美甲服務",
      services: [
        "凝膠單色", "貓眼 / 漸層", "鏡面 / 法式", "手繪 / 貼鑽",
        "指甲油卸除", "本店卸甲續做", "他店卸甲續做", "卸甲不續做",
        "裂甲修補", "單指延甲", "十指延甲",
        "手部保養", "足部進階保養"
      ],
      timeSlots: ["上午", "下午", "晚上"],
      formspreeEndpoint: "",
      disclaimer:
        "請注意：送出表單不代表預約成功，我會盡快透過 Line 與您聯繫確認最終時段，並告知訂金事宜，感謝您！",
    },
    location: {
      title: "店家位置",
      subtitle: "",
      address: "412台灣台中市大里區爽文路359號",
      phone: "0930 738 228",
      hours: "預約制（請提前聯絡）",
      lineUrl: "https://line.me/ti/p/@184qgniw",
      instagramUrl: "https://www.instagram.com/zeronail0228/",
      googleMapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.0778559552245!2d120.6718118742385!3d24.0987573784343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dcd8d84dcbb%3A0xbd77c4e7f9825061!2zemVyb25haWznvo7nlLLlt6XkvZzlrqQ!5e0!3m2!1szh-TW!2stw!4v1758278308928!5m2!1szh-TW!2stw",
    },
    nav: {
      portfolio: "作品集",
      services: "服務項目",
      booking: "預約",
      location: "位置",
      bookNow: "立即預約"
    }
  },
  en: {
    brand: {
      name: "Zero Nails",
      tagline: "Lilo Dali Nail Art",
    },
    hero: {
      headline: "Zero Nails Lilo Dali Nail Art",
      sub: "We believe beauty is an energy.\nIn this gentle space, every moment of creation is an extension of soul dialogue and self-healing.",
      ctaPrimary: "Book Now",
      ctaSecondary: "View Portfolio",
      bg: "/images/hero.jpg",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Featured Nail Art Works",
      items: [
        { src: "/images/nail_work_3976.jpg", alt: "Nail Art - Exquisite Design" },
        { src: "/images/nail_work_3993.JPG", alt: "Nail Art - Elegant Style" },
        { src: "/images/nail_work_4402.jpg", alt: "Nail Art - Fashion Look" },
        { src: "/images/nail_work_4405.jpg", alt: "Nail Art - Delicate Craft" },
        { src: "/images/nail_work_6026.jpg", alt: "Nail Art - Creative Design" },
        { src: "/images/nail_work_6055.jpg", alt: "Nail Art - Professional Technique" },
        { src: "/images/nail_work_8232.jpg", alt: "Nail Art - Artistic Beauty" },
        { src: "/images/nail_work_8402.jpg", alt: "Nail Art - Personal Style" },
        { src: "/images/nail_work_8560.jpg", alt: "Nail Art - Fine Details" },
        { src: "/images/nail_work_8574.JPG", alt: "Nail Art - Perfect Presentation" },
        { src: "/images/nail_work_8623.jpg", alt: "Nail Art - Quality Design" }
      ],
    },
    services: {
      title: "Services",
      subtitle: "Professional Nail Services",
      categories: [
        {
          name: "Gel Services",
          items: [
            {
              name: "Solid Color Gel",
              handPrice: 800,
              footPrice: 1000,
              desc: "Classic solid color gel, simple & elegant"
            },
            {
              name: "Cat Eye / Gradient",
              handPrice: 1000,
              footPrice: 1200,
              desc: "Trendy cat eye or gradient effects"
            },
            {
              name: "Mirror / French",
              handPrice: 1100,
              footPrice: 1300,
              desc: "Elegant mirror finish or classic French"
            },
            {
              name: "Hand-painted / Crystals",
              handPrice: 1280,
              footPrice: null,
              desc: "Exquisite hand-painted design or crystal decoration",
              note: "Starting price, varies by complexity"
            }
          ],
          notes: [
            "All services include preparation / gel removal / nail shaping",
            "Complex designs may vary based on materials/techniques/complexity",
            "Additional color +100"
          ]
        },
        {
          name: "Removal Services",
          items: [
            {
              name: "Polish Removal",
              price: 50,
              desc: "Regular nail polish removal service"
            },
            {
              name: "In-store Removal + New Service",
              price: 200,
              desc: "Remove our gel and apply new service"
            },
            {
              name: "Other Salon Removal + New Service",
              price: 300,
              desc: "Remove other salon's gel and apply new service"
            },
            {
              name: "Removal Only",
              price: 500,
              desc: "Removal service only, no new application"
            }
          ],
          notes: [
            "Add-on: care, nail shaping, cuticle treatment, nail surface cleaning, cuticle moisturizing, protective coating"
          ]
        },
        {
          name: "Extension Services",
          items: [
            {
              name: "Crack Repair",
              price: 50,
              desc: "Single nail crack repair service"
            },
            {
              name: "Single Nail Extension",
              handPrice: 150,
              footPrice: 200,
              desc: "Single nail extension"
            },
            {
              name: "Full Set Extension",
              price: 1500,
              desc: "Complete 10-nail extension service"
            }
          ],
          notes: [
            "Please notify in advance for 3+ nail extensions. Same-day requests cannot be accommodated."
          ]
        },
        {
          name: "Basic Care",
          items: [
            {
              name: "Hand Care",
              price: 500,
              desc: "Dead skin removal, cuticle care, nail surface cleaning, cuticle moisturizing, protective coating"
            },
            {
              name: "Advanced Foot Care",
              price: 1100,
              desc: "Includes callus removal, trimming, dead skin removal, cuticle care, foot callus removal, cuticle moisturizing, protective coating"
            }
          ],
          notes: []
        }
      ],
      external: {
        lineLabel: "Line Official Account",
        lineUrl: "https://line.me/ti/p/@184qgniw",
        instagramLabel: "Instagram",
        instagramUrl: "https://www.instagram.com/zeronail0228/"
      }
    },
    policy: {
      title: "Booking Policy",
      text: [
        "Please arrive on time. Late arrival over 10 minutes may result in service adjustment.",
        "Please notify us 24 hours in advance for rescheduling.",
        "Form submission does not guarantee booking. We will confirm final time slot and deposit via Line."
      ]
    },

    news: {
      title: "Latest News",
      items: [
        {
          title: "November Update Highlights (2025/08/01)",
          date: "2025-08-01",
          url: "#"
        },
        {
          title: "Monthly Design Update Ending Notice (2025/07/01)",
          date: "2025-07-01",
          url: "#"
        },
        {
          title: "4th Anniversary & Update Information (2025/06/14)",
          date: "2025-06-14",
          url: "#"
        }
      ]
    },
    booking: {
      title: "Online Booking",
      subtitle: "Book Your Nail Service",
      services: [
        "Solid Color Gel", "Cat Eye / Gradient", "Mirror / French", "Hand-painted / Crystals",
        "Polish Removal", "In-store Removal + New Service", "Other Salon Removal + New Service", "Removal Only",
        "Crack Repair", "Single Nail Extension", "Full Set Extension",
        "Hand Care", "Advanced Foot Care"
      ],
      timeSlots: ["Morning", "Afternoon", "Evening"],
      formspreeEndpoint: "",
      disclaimer:
        "Note: Form submission does not guarantee booking. We will contact you via Line as soon as possible to confirm the final time slot and deposit details. Thank you!",
    },
    location: {
      title: "Location",
      subtitle: "Welcome to Visit",
      address: "No. 359, Shuangwen Rd, Dali Dist, Taichung City 412, Taiwan",
      phone: "0930 738 228",
      hours: "By Appointment (Please Contact in Advance)",
      lineUrl: "https://line.me/ti/p/@184qgniw",
      instagramUrl: "https://www.instagram.com/zeronail0228/",
      googleMapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.0778559552245!2d120.6718118742385!3d24.0987573784343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dcd8d84dcbb%3A0xbd77c4e7f9825061!2zemVyb25haWznvo7nlLLlt6XkvZzlrqQ!5e0!3m2!1szh-TW!2stw!4v1758278308928!5m2!1szh-TW!2stw",
    },
    nav: {
      portfolio: "Portfolio",
      services: "Services",
      booking: "Booking",
      location: "Location",
      bookNow: "Book Now"
    }
  }
};

// 為了向後兼容，保留原有的 site 結構
export const site_legacy = {
  brand: {
    name: "Essence Nails",
    tagline: "private nail studio",
  },
  hero: {
    headline: "專屬於你的精緻美甲",
    sub: "以細膩打磨、溫柔照護，打造耐看且襯膚的日常優雅。",
    ctaPrimary: "立即預約",
    ctaSecondary: "查看作品",
    bg: "/images/hero.jpg",
  },
  portfolio: {
    items: [
      { src: "/images/nail_work_3976.jpg", alt: "美甲作品 - 精緻設計" },
      { src: "/images/nail_work_3993.JPG", alt: "美甲作品 - 優雅風格" },
      { src: "/images/nail_work_4402.jpg", alt: "美甲作品 - 時尚造型" },
      { src: "/images/nail_work_4405.jpg", alt: "美甲作品 - 細膩工藝" },
      { src: "/images/nail_work_6026.jpg", alt: "美甲作品 - 創意設計" },
      { src: "/images/nail_work_6055.jpg", alt: "美甲作品 - 專業技術" },
      { src: "/images/nail_work_8232.jpg", alt: "美甲作品 - 藝術美感" },
      { src: "/images/nail_work_8402.jpg", alt: "美甲作品 - 個性風格" },
      { src: "/images/nail_work_8560.jpg", alt: "美甲作品 - 精美細節" },
      { src: "/images/nail_work_8574.JPG", alt: "美甲作品 - 完美呈現" },
      { src: "/images/nail_work_8623.jpg", alt: "美甲作品 - 質感設計" }
    ],
  },
  services: {
    categories: [
      {
        name: "凝膠",
        items: [
          {
            name: "凝膠單色",
            handPrice: 800,
            footPrice: 1000,
            desc: "經典單色凝膠，簡約耐看"
          },
          {
            name: "貓眼 / 漸層",
            handPrice: 1000,
            footPrice: 1200,
            desc: "時尚貓眼或漸層效果"
          },
          {
            name: "鏡面 / 法式",
            handPrice: 1100,
            footPrice: 1300,
            desc: "優雅鏡面或經典法式"
          },
          {
            name: "手繪 / 貼鑽",
            handPrice: 1280,
            footPrice: null,
            desc: "精緻手繪設計或貼鑽裝飾",
            note: "起價，依複雜度調整"
          }
        ],
        notes: [
          "以上項目皆含前置處理 / 凝膠卸甲 / 甲型修剪",
          "若款式複雜度100%延續，會依使用的素材/手法/複雜度有所不同",
          "以上項目跳一色 +100"
        ]
      },
      {
        name: "卸甲",
        items: [
          {
            name: "指甲油卸除",
            price: 50,
            desc: "一般指甲油卸除服務"
          },
          {
            name: "本店卸甲續做",
            price: 200,
            desc: "本店施作凝膠卸除並續做"
          },
          {
            name: "他店卸甲續做",
            price: 300,
            desc: "他店施作凝膠卸除並續做"
          },
          {
            name: "卸甲不續做",
            price: 500,
            desc: "單純卸甲服務，不續做新款"
          }
        ],
        notes: [
          "加購保養、修甲型、甘皮處理、甲面清潔、指緣潤澤、雷公根護甲 +200"
        ]
      },
      {
        name: "延甲",
        items: [
          {
            name: "裂甲修補",
            price: 50,
            desc: "單指裂甲修補服務"
          },
          {
            name: "單指延甲",
            handPrice: 150,
            footPrice: 200,
            desc: "單指指甲延長"
          },
          {
            name: "十指延甲",
            price: 1500,
            desc: "十指完整延甲服務"
          }
        ],
        notes: [
          "三指以上延甲麻煩提前告知，當天告知恕無法服務敬請見諒。"
        ]
      },
      {
        name: "基礎保養",
        items: [
          {
            name: "手部保養",
            price: 500,
            desc: "去死皮、指緣護理、甘皮處理、甲面清潔、指緣潤澤、雷公根護甲"
          },
          {
            name: "足部進階保養",
            price: 1100,
            desc: "含去繭、修剪、去死皮、指緣護理、甘皮處理、足底去繭、指緣潤澤、雷公根護甲"
          }
        ],
        notes: []
      }
    ],
    external: {
      lineLabel: "Line 官方帳號",
      lineUrl: "https://line.me/ti/p/@184qgniw",
      instagramLabel: "Instagram",
      instagramUrl: "https://www.instagram.com/zeronail0228/"
    }
  },
  policy: {
    title: "Booking Notice",
    text: [
      "You can send photos for pricing or discuss your budget before booking",
      "New customers need to pay a 500 NTD deposit, which will be deducted on the day",
      "Payment methods: Cash / Bank transfer (Cathay Bank)",
      "Personal studio does not allow companions",
      "There are cats in the studio (appear from time to time) ※Please be cautious if allergic/afraid/concerned!",
      "Free design/no specific style only for customers with 3+ appointments",
      "Can provide: color preferences/style preferences/elements/reference images",
      "Or choose mystery box (all design decisions by nail artist)",
      "Appointments are held for 10 minutes",
      "30 minutes late: service changed to solid color only",
      "1 hour late: appointment cancelled, deposit non-refundable",
      "Please notify 3-5 days in advance for time changes",
      "Please message first if you need to arrive early",
      "The studio reserves the right of final interpretation"
    ]
  },

  news: {
    items: [
      {
        title: "11 月改版重點說明（2025/08/01）",
        date: "2025-08-01",
        url: "#"
      },
      {
        title: "每月設計上架結束公告（2025/07/01）",
        date: "2025-07-01",
        url: "#"
      },
      {
        title: "四週年與改版相關說明（2025/06/14）",
        date: "2025-06-14",
        url: "#"
      }
    ]
  },
  booking: {
    services: ["基礎光療", "法式光療", "彩繪光療", "延甲光療", "鑽飾光療"],
    timeSlots: ["上午", "下午", "晚上"],
    formspreeEndpoint: "",
    disclaimer:
      "請注意：送出表單不代表預約成功，我會盡快透過 Line 與您聯繫確認最終時段，並告知訂金事宜，感謝您！",
  },
  location: {
    address: "412台灣台中市大里區爽文路359號",
    phone: "0930 738 228",
    hours: "預約制（請提前聯絡）",
    lineUrl: "https://line.me/ti/p/@184qgniw",
    instagramUrl: "https://www.instagram.com/zeronail0228/",
    googleMapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.0778559552245!2d120.6718118742385!3d24.0987573784343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dcd8d84dcbb%3A0xbd77c4e7f9825061!2zemVyb25haWznvo7nlLLlt6XkvZzlrqQ!5e0!3m2!1szh-TW!2stw!4v1758278308928!5m2!1szh-TW!2stw",
  },
};


