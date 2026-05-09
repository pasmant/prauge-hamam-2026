export const hotelInfo = {
  name: "Aquapalace Hotel Prague",
  website: "https://www.aquapalacehotel.cz/en/",
  address: "Pražská 137, Čestlice (Praha-východ)",
  phone: "+420 225 108 888",
  stars: "4* Superior",
  rooms: 231,
  checkIn: "14:00",
  checkOut: "11:00",
  parking: {
    garage: "390 CZK / לילה",
    outdoor: "100 CZK / יום",
  },
  wifi: "חינם בכל המלון, רשת: Aquapalace Hotel, ללא סיסמה",
  description:
    "Aquapalace Hotel Prague הוא מלון 4* Superior עם 231 חדרים, חלק מפארק המים הגדול בצ׳כיה. כולל פארק מים עם 12 מגלשות, עולם סאונות, מרכז ספא, 2 מסעדות ראשיות + בארים, מרכז כנסים, ומועדון ילדים.",
  breakfastInfo: {
    restaurant: "Astra Restaurant",
    hours: "07:00–11:00",
    description:
      "ארוחת בוקר עשירה בסגנון בופה בינלאומי במסעדת Astra. מטבח צ׳כי ובינלאומי איכותי ממרכיבים טריים. תפריט ילדים עשיר. המסעדה זוכת תעודת Czech Specials.",
  },
  breakfastItems: [
    "ביצים",
    "מאפים טריים",
    "פנקייקים",
    "פירות",
    "גבינות",
    "נקניקיות",
    "דגני בוקר",
    "יוגורט",
    "מיצים טריים",
    "אזור ילדים",
  ],
  importantInfo: [
    {
      icon: "💳",
      title: "פיקדון",
      text: "בצ׳ק אין נדרש פיקדון בכרטיס אשראי/מזומן (מינימום 1,350 CZK / 50€) לפתיחת חשבון מלון וצ׳יפים",
    },
    {
      icon: "🏊",
      title: "כניסה לפארק",
      text: "הכניסה לפארק המים כלולה בלינה! מהצ׳ק אין (14:00) ועד יום העזיבה. ביום העזיבה – כניסה חד-פעמית בלבד",
    },
    {
      icon: "🧖",
      title: "עולם הסאונות",
      text: "תוספת של 149 CZK / אדם / יום (אם לא כלול במחיר הלינה)",
    },
    {
      icon: "👘",
      title: "חלוקים ומגבות",
      text: "חינם לאורחי המלון! חלוקים במידות מבוגרים בלבד. ביום העזיבה – להודיע בקבלה",
    },
    {
      icon: "🚌",
      title: "תחבורה ציבורית",
      text: "קווי אוטובוס 385 ו-328 מתחנת מטרו Opatov לתחנת Čestlice – Aquapark",
    },
    {
      icon: "📶",
      title: "WiFi",
      text: "חינם בכל המלון. רשת: Aquapalace Hotel, ללא סיסמה",
    },
  ],
};

export interface WaterAttraction {
  name: string;
  nameHe: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface WaterPalace {
  name: string;
  nameHe: string;
  icon: string;
  description: string;
  link: string;
  attractions: WaterAttraction[];
}

const HOTEL_BASE = "https://www.aquapalacehotel.cz";

export const waterParkPalaces: WaterPalace[] = [
  {
    name: "Palace of Adventures",
    nameHe: "ארמון ההרפתקאות",
    icon: "🎢",
    description:
      "מגלשות אדרנלין, מנהרות חושך, אפקטי אור וסאונד, ומגלשת הטירוף – הארוכה בצ׳כיה!",
    link: `${HOTEL_BASE}/en/water-world`,
    attractions: [
      {
        name: "Magic Tube",
        nameHe: "מגלשת הקסם – VR",
        description: "מגלשה עם מציאות מדומה! חוויית Space או Heaven תוך כדי גלישה. לראשונה בצ׳כיה!",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/magic-tube.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
      {
        name: "Spacebowl",
        nameHe: "ספייסבאול",
        description: "סחרור מהיר בצורת קערה ענקית – אדרנלין טהור!",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/spacebowl.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
      {
        name: "Fast River",
        nameHe: "נהר מהיר (250 מ׳)",
        description: "האטרקציה הפופולרית ביותר! נהר פראי באורך 250 מ׳ שעובר דרך כל הפארק",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/fast-river.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
      {
        name: "Toboggans",
        nameHe: "12 מגלשות (עד 250 מ׳)",
        description: "מגלשות שקטות ומגלשות אדרנלין, מנהרות חושך ואור, גלישה על טבעות",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/toboggans.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
    ],
  },
  {
    name: "Palace of Treasures",
    nameHe: "ארמון האוצרות",
    icon: "🏴‍☠️",
    description:
      "ספינת פיראטים, בריכת גלים, אזור ילדים עם מגלשות ובריכות רדודות",
    link: `${HOTEL_BASE}/en/water-world`,
    attractions: [
      {
        name: "Pirate Ship",
        nameHe: "ספינת פיראטים",
        description: "שרידי ספינה ומפלצות ים – עולם הרפתקאות לילדים!",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/pirate-ship.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
      {
        name: "Wave Pool",
        nameHe: "בריכת גלים",
        description: "גלים מלאכותיים כמו בים – כיף לכל הגילאים!",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/wave-pool.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
      {
        name: "Kids Water Play",
        nameHe: "אזור ילדים",
        description: "בריכת פעוטות, מגלשות ילדים, בריכה רדודה ומשחקי מים",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/kids-area.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
    ],
  },
  {
    name: "Palace of Relaxation",
    nameHe: "ארמון הרגיעה",
    icon: "🧘",
    description:
      "בריכת שחייה שקטה, ג׳קוזים, ספות מסאז׳ וטרסת מנוחה",
    link: `${HOTEL_BASE}/en/water-world`,
    attractions: [
      {
        name: "Whirlpools",
        nameHe: "ג׳קוזים ומסאז׳",
        description: "ג׳קוזים מדורגים, ספסלי מסאז׳ ואזור מנוחה",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/whirlpools.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
      {
        name: "Swimming Pool",
        nameHe: "בריכת שחייה",
        description: "בריכה שקטה ורגועה לשחייה מהנה",
        imageUrl: `${HOTEL_BASE}/img/_/water-park/pool.jpg`,
        link: `${HOTEL_BASE}/en/water-world`,
      },
    ],
  },
];

export const waterParkExtras: WaterAttraction[] = [
  {
    name: "Outdoor Zone",
    nameHe: "אזור חיצוני",
    description:
      "בריכה חיצונית, נהר פראי חיצוני, ג׳קוזים בחוץ, טירה מתנפחת, Wipeout, סירות פגוש וגינת שיזוף. נפתח באפריל-מאי!",
    imageUrl: `${HOTEL_BASE}/img/_/water-park/outdoor.jpg`,
    link: `${HOTEL_BASE}/en/water-world`,
  },
  {
    name: "Coral Dome",
    nameHe: "כיפת האלמוגים",
    description:
      "עולם תת-ימי עם דגים צבעוניים, כוכבי ים, קיפודי ים ואלמוגים. בריכה חמה (31°C!), חוף חולי ובר קוקטיילים קריביים",
    imageUrl: `${HOTEL_BASE}/img/_/water-park/coral-dome.jpg`,
    link: `${HOTEL_BASE}/en/water-world`,
  },
  {
    name: "Diving Pit",
    nameHe: "בור צלילה (8 מ׳!)",
    description:
      "הבור העמוק ביותר בצ׳כיה – 8 מטר! 3 רמות עומק עם מדריך מקצועי. חוויה לאמיצים!",
    imageUrl: `${HOTEL_BASE}/img/_/water-park/diving.jpg`,
    link: `${HOTEL_BASE}/en/water-world`,
  },
];

export const waterParkHours = [
  { day: "ראשון–חמישי", hours: "10:00–20:00" },
  { day: "שישי–שבת", hours: "09:00–22:00" },
];

export const saunaWorld = {
  description:
    "עולם הסאונות הגדול ביותר בצ׳כיה! סאונות פיניות, מרחצאות רומיות, בניה (Banya), סאונת זן על הגג וטקסי סאונה מקצועיים. אזור פנימי וחיצוני, בריכות קירור, ג׳קוזים וגשם טרופי.",
  areas: [
    {
      name: "סאונות פיניות",
      items: [
        "סאונה פינית",
        "סאונת בקתה",
        "סאונת בירוזה",
        "סאונת צמחים",
        "סאונת הר געש",
      ],
    },
    {
      name: "מרחצאות רומיות",
      items: ["מרחץ אדים", "טפידריום", "מרחץ מלח", "לקוניום", "קלדריום"],
    },
    {
      name: "עולם אסייתי",
      items: ["סאונת זן (על הגג!)", "ביו סאונה", "חדר הרפיה יפני", "גן יפני"],
    },
    {
      name: "אזור חיצוני",
      items: [
        "סאונת בניה (Log Cabin Banya)",
        "סאונת אדמה (Earth Banya)",
        "ג׳קוזי חיצוני",
        "בריכת קירור חיצונית",
      ],
    },
    {
      name: "מתקני מנוחה",
      items: ["ג׳קוזי פנימי", "בריכת רגיעה", "בריכת קירור", "גשם טרופי"],
    },
  ],
  hours: [
    { day: "ראשון–שבת", hours: "10:00–23:00" },
    { day: "שישי–שבת", hours: "09:00–23:00" },
  ],
};

export const hotelRestaurants = [
  {
    name: "Astra Restaurant",
    nameHe: "מסעדת Astra ⭐",
    type: "מסעדה ראשית – בופה",
    description:
      "המסעדה הראשית של המלון! כאן אוכלים את ארוחת הבוקר (07:00–11:00). מטבח צ׳כי ובינלאומי בסגנון בופה עשיר. זוכת תעודת Czech Specials. תפריט ילדים עשיר.",
    hours: "07:00–11:00 | 12:00–23:00",
    location: "קומה 1",
    isBreakfast: true,
    link: `${HOTEL_BASE}/en/restaurants-bars`,
  },
  {
    name: "Terresa Restaurant",
    nameHe: "מסעדת Terresa",
    type: "גסטרונומיה – א לה קארט",
    description:
      "מסעדה אלגנטית עם מנות שף ברמה גבוהה. קינוחים מהקונדיטוריה של המלון. אפשר להזמין עוגת יום הולדת! ביום – מוארת ושמחה, בערב – אווירה רומנטית.",
    hours: "12:00–23:00",
    location: "קומה 1",
    isBreakfast: false,
    link: `${HOTEL_BASE}/en/restaurants-bars`,
  },
  {
    name: "Lobby Bar Barracuda",
    nameHe: "לובי בר ברקודה",
    type: "בר + אוכל קל",
    description:
      "קפה, כריכים, סלטים קלים, לימונדות ביתיות וקוקטיילים. פתוח עד השעה 01:00 בלילה!",
    hours: "08:00–01:00",
    location: "לובי המלון",
    isBreakfast: false,
    link: `${HOTEL_BASE}/en/restaurants-bars`,
  },
];

export const waterParkBars = [
  {
    name: "Paradise Café",
    nameHe: "קפה פרדייס",
    location: "ארמון הרגיעה",
    description: "קפה ושתייה על המרפסת הפנימית",
  },
  {
    name: "Ice Bar Gelateria",
    nameHe: "בר גלידה",
    location: "ליד בור הצלילה",
    description: "גלידות, שייקים ופינוקים קרים",
  },
  {
    name: "Creative Pizza",
    nameHe: "פיצה יצירתית",
    location: "אזור פארק המים",
    description: "פיצות ייחודיות בתוספות מיוחדות",
  },
  {
    name: "Coral Bar",
    nameHe: "בר קורל",
    location: "כיפת האלמוגים",
    description: "קוקטיילים קריביים וחטיפים",
  },
  {
    name: "Café Clara",
    nameHe: "קפה קלרה",
    location: "לובי המלון",
    description: "קפה, עוגות ומאפים טריים",
  },
];

export const wristbandInfo = {
  title: "צ׳יפ המלון (Chip Watch)",
  description:
    "בצ׳ק אין תקבלו שעון צ׳יפ דיגיטלי – הוא המפתח שלכם לכל דבר במלון! שימרו עליו (אובדן = 200 CZK). אם אבד – דווחו מיד בקבלה לחסימה.",
  uses: [
    { icon: "🏊", label: "כניסה לפארק המים" },
    { icon: "🍽️", label: "תשלום במסעדות ובארים" },
    { icon: "🚪", label: "פתיחת דלת החדר" },
    { icon: "🔐", label: "לוקרים ואחסון" },
  ],
};
