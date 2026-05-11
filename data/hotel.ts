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
const PARK_BASE = "https://www.aquapalace.cz";
const PARK_WATER = `${PARK_BASE}/en/sekce/vodni_svet`;
const PARK_SAUNA = `${PARK_BASE}/en/sekce/saunovy_svet`;

export const waterParkPalaces: WaterPalace[] = [
  {
    name: "Adventure Palace – Raiffun Zone",
    nameHe: "ארמון ההרפתקאות",
    icon: "🎢",
    description:
      "12 מגלשות אדרנלין כולל הארוכה ביותר בצ׳כיה (350+ מ׳)! מנהרות חושך, אפקטי אור וסאונד, ספייסבאול ונהר פראי.",
    link: PARK_WATER,
    attractions: [
      {
        name: "Crazy Tube",
        nameHe: "מגלשת הטירוף (350+ מ׳!)",
        description: "המגלשה הארוכה ביותר בצ׳כיה! יותר מ-350 מטר של גלישה פרועה",
        imageUrl: `${PARK_BASE}/crazy-tube`,
        link: `${PARK_BASE}/crazy-tube`,
      },
      {
        name: "Spacebowl",
        nameHe: "ספייסבאול",
        description: "סחרור מהיר בצורת קערה ענקית – אדרנלין טהור!",
        imageUrl: `${PARK_BASE}/spacebowl`,
        link: `${PARK_BASE}/spacebowl`,
      },
      {
        name: "Kamikaze",
        nameHe: "קמיקזה",
        description: "מגלשה תלולה במיוחד – ירידה חופשית במהירות! לאמיצים בלבד",
        imageUrl: `${PARK_BASE}/kamikadze`,
        link: `${PARK_BASE}/kamikadze`,
      },
      {
        name: "Magic Tube",
        nameHe: "מגלשת הקסם – VR",
        description: "מגלשה עם מציאות מדומה! חוויית Space או Heaven תוך כדי גלישה. לראשונה בצ׳כיה!",
        imageUrl: `${PARK_BASE}/magic-tube`,
        link: `${PARK_BASE}/magic-tube`,
      },
      {
        name: "Orange Slide",
        nameHe: "מגלשה כתומה",
        description: "מגלשה מהירה בצבע כתום – ירידה מסחררת!",
        imageUrl: `${PARK_BASE}/skluzavka-oranzova`,
        link: `${PARK_BASE}/skluzavka-oranzova`,
      },
      {
        name: "Bodyslide – Raiffunslide",
        nameHe: "בודי סלייד",
        description: "מגלשת גוף מהירה – גולשים בלי טבעת!",
        imageUrl: `${PARK_BASE}/bodyslide-raiffunslide`,
        link: `${PARK_BASE}/bodyslide-raiffunslide`,
      },
      {
        name: "Slavia Family Water Slide",
        nameHe: "מגלשה משפחתית",
        description: "מגלשה לכל המשפחה – אפשר לגלוש יחד על טבעת!",
        imageUrl: `${PARK_BASE}/slavia-pojistovna-rodinny-tobogan`,
        link: `${PARK_BASE}/slavia-pojistovna-rodinny-tobogan`,
      },
      {
        name: "Canyon (Inland Wild River)",
        nameHe: "קניון – נהר פראי פנימי",
        description: "נהר פראי פנימי עם מערות, לגונות וספסלי מסאז׳",
        imageUrl: `${PARK_BASE}/canyon-vnitrni-divoka-reka`,
        link: `${PARK_BASE}/canyon-vnitrni-divoka-reka`,
      },
      {
        name: "Blue Slides",
        nameHe: "מגלשות כחולות",
        description: "מגלשות מהירות בכחול – גלישה זוגית!",
        imageUrl: `${PARK_BASE}/modre-skluzavky`,
        link: `${PARK_BASE}/modre-skluzavky`,
      },
      {
        name: "Twister",
        nameHe: "טוויסטר",
        description: "מגלשה מסתובבת עם סיבובים מטורפים!",
        imageUrl: `${PARK_BASE}/twister-tobogan`,
        link: `${PARK_BASE}/twister-tobogan`,
      },
      {
        name: "Magic Trio",
        nameHe: "מג׳יק טריו",
        description: "שלוש מגלשות זו לצד זו – מי מגיע ראשון?",
        imageUrl: `${PARK_BASE}/magic-trio`,
        link: `${PARK_BASE}/magic-trio`,
      },
    ],
  },
  {
    name: "Palace of Treasures",
    nameHe: "ארמון האוצרות",
    icon: "🏴‍☠️",
    description:
      "ספינת פיראטים, בריכת גלים, מופע לייזר ייחודי, אזור VR, תותחי מים ואזור ילדים מושלם!",
    link: PARK_WATER,
    attractions: [
      {
        name: "Pirate Ship",
        nameHe: "ספינת פיראטים",
        description: "שרידי ספינה ומפלצות ים – עולם הרפתקאות קסום!",
        imageUrl: `${PARK_BASE}/piratska-lod`,
        link: `${PARK_BASE}/piratska-lod`,
      },
      {
        name: "Sea Surf",
        nameHe: "גלי ים (בריכת גלים)",
        description: "גלים מלאכותיים כמו בים הקריבי – כיף לכל הגילאים!",
        imageUrl: `${PARK_BASE}/morske-vlnobiti`,
        link: `${PARK_BASE}/morske-vlnobiti`,
      },
      {
        name: "Laser Show",
        nameHe: "מופע לייזר",
        description: "מופע לייזר ייחודי שלא תמצאו בשום מקום אחר!",
        imageUrl: `${PARK_BASE}/laser-show`,
        link: `${PARK_BASE}/laser-show`,
      },
      {
        name: "Water Cannons",
        nameHe: "תותחי מים",
        description: "תותחי מים לילדים – קרב מים מטורף!",
        imageUrl: `${PARK_BASE}/vodni-dela`,
        link: `${PARK_BASE}/vodni-dela`,
      },
      {
        name: "VR Avatar Zone",
        nameHe: "אזור VR אווטאר",
        description: "חוויית מציאות מדומה תת-ימית!",
        imageUrl: `${PARK_BASE}/vr-avatar-zone`,
        link: `${PARK_BASE}/vr-avatar-zone`,
      },
      {
        name: "Toddler Splash Pool",
        nameHe: "בריכת פעוטות",
        description: "מים רדודים ובטוחים לפעוטות – משחקי מים עדינים",
        imageUrl: `${PARK_BASE}/detske-brouzdaliste-pro-nejmensi`,
        link: `${PARK_BASE}/detske-brouzdaliste-pro-nejmensi`,
      },
      {
        name: "Children's Paradise by the Lighthouse",
        nameHe: "גן עדן לילדים (ליד המגדלור)",
        description: "מתחם משחקי מים לילדים עם מגלשות ומתזים",
        imageUrl: `${PARK_BASE}/detsky-raj-u-majaku`,
        link: `${PARK_BASE}/detsky-raj-u-majaku`,
      },
      {
        name: "Massage Water Bench",
        nameHe: "ספסל מסאז׳ מים",
        description: "ספסלי מסאז׳ במים – הרפיה מושלמת!",
        imageUrl: `${PARK_BASE}/masazni-vodni-lavice`,
        link: `${PARK_BASE}/masazni-vodni-lavice`,
      },
    ],
  },
  {
    name: "Palace of Relaxation",
    nameHe: "ארמון הרגיעה",
    icon: "🧘",
    description:
      "בריכת שחייה שקטה, ג׳קוזים מדורגים ענקיים (37°C!), נהר איטי, שובר גלים וטרסת מנוחה",
    link: PARK_WATER,
    attractions: [
      {
        name: "Giant Cascading Whirlpools",
        nameHe: "ג׳קוזים מדורגים ענקיים",
        description: "ג׳קוזים מדורגים עם מים ב-37°C, סילוני מסאז׳ ונוף על הפארק",
        imageUrl: `${PARK_BASE}/obri-kaskadovite-virivky`,
        link: `${PARK_BASE}/obri-kaskadovite-virivky`,
      },
      {
        name: "Lazy River",
        nameHe: "נהר שקט",
        description: "נהר איטי ורגוע – פשוט נסחפים ונהנים",
        imageUrl: `${PARK_BASE}/pomala-reka`,
        link: `${PARK_BASE}/pomala-reka`,
      },
      {
        name: "Breakwater",
        nameHe: "שובר גלים",
        description: "אזור גלים רגועים לשחייה נעימה",
        imageUrl: `${PARK_BASE}/vlnolam`,
        link: `${PARK_BASE}/vlnolam`,
      },
      {
        name: "Swimming Pool",
        nameHe: "בריכת שחייה",
        description: "בריכה שקטה ורגועה לשחייה ספורטיבית",
        imageUrl: `${PARK_BASE}/plavecky-bazen`,
        link: `${PARK_BASE}/plavecky-bazen`,
      },
    ],
  },
];

export const waterParkExtras: WaterAttraction[] = [
  {
    name: "Wild River (Outdoor)",
    nameHe: "נהר פראי חיצוני (450 מ׳!)",
    description:
      "האטרקציה הכי פופולרית! נהר פראי באורך 450 מ׳ שעובר דרך כל הפארק – פנים וחוץ. נפתח באפריל-מאי.",
    imageUrl: PARK_WATER,
    link: PARK_WATER,
  },
  {
    name: "Outdoor Zone",
    nameHe: "אזור חיצוני",
    description:
      "בריכה חיצונית, ג׳קוזים בחוץ, טירה מתנפחת, Wipeout, סירות פגוש, מתקני ילדים וגינת שיזוף",
    imageUrl: PARK_WATER,
    link: PARK_WATER,
  },
  {
    name: "Coral Dome",
    nameHe: "כיפת האלמוגים",
    description:
      "עולם תת-ימי עם דגים צבעוניים, כוכבי ים ואלמוגים. בריכה חמה (31°C!), חוף חולי ובר קוקטיילים",
    imageUrl: PARK_WATER,
    link: PARK_WATER,
  },
  {
    name: "Diving Pit",
    nameHe: "בור צלילה (8 מ׳!)",
    description:
      "הבור העמוק ביותר בצ׳כיה – 8 מטר! 3 רמות עומק עם מדריך מקצועי. חוויה לאמיצים!",
    imageUrl: PARK_WATER,
    link: PARK_WATER,
  },
];

export const waterParkHours = [
  { day: "ראשון–רביעי", hours: "10:00–20:00" },
  { day: "חמישי", hours: "10:00–22:00" },
  { day: "שישי–שבת", hours: "09:00–22:00" },
  { day: "ראשון", hours: "09:00–20:00" },
];

export const PARK_LINKS = {
  waterWorld: PARK_WATER,
  saunaWorld: PARK_SAUNA,
  home: `${PARK_BASE}/en`,
};

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

const PARK_REST = `${PARK_BASE}/en/restaurace`;

export const waterParkBars = [
  {
    name: "Puzzle Restaurant",
    nameHe: "מסעדת פאזל",
    location: "קומה 1 – בין ארמון ההרפתקאות לארמון האוצרות",
    description:
      "מסעדה ראשית בלב פארק המים! מנות חמות, בורגרים, שניצלים, פסטות ותפריט ילדים. אפשר לאכול בבגד ים!",
    link: `${PARK_REST}/puzzle-restaurace`,
  },
  {
    name: "Creative Pizza",
    nameHe: "פיצה יצירתית 🍕",
    location: "אולם הכניסה – אזור השקט",
    description:
      "פיצות יצירתיות עם תוספות מפתיעות! ילדים יכולים להרכיב פיצה משלהם. מרכיבים טריים ואיכותיים. תפריט צהריים 11:00–14:00.",
    link: `${PARK_REST}/creative-pizza`,
  },
  {
    name: "Café Clara",
    nameHe: "קפה קלרה ☕",
    location: "אולם הכניסה",
    description:
      "קפה, עוגות טריות מהקונדיטוריה, מאפים ופינוקים מתוקים. מושלם להפסקה לפני או אחרי הפארק.",
    link: `${PARK_REST}/cafe-clara`,
  },
  {
    name: "Clara Cafe – Costa Coffee",
    nameHe: "קלרה קפה – קוסטה קופי",
    location: "ליד כיפת האלמוגים",
    description:
      "סניף Costa Coffee בתוך הפארק! קפה איכותי, שייקים, מאפים וחטיפים. מקום נהדר להפסקה.",
    link: `${PARK_REST}/clara-cafe-costa-coffee`,
  },
  {
    name: "Revontuli Sauna Restaurant",
    nameHe: "מסעדת רבונטולי (סאונה) 🍲",
    location: "עולם הסאונות",
    description:
      "מסעדה בתוך עולם הסאונות! מנות חמות, סלטים, מרקים ושתייה. אפשר לאכול בחלוק. אווירה נינוחה אחרי סאונה.",
    link: `${PARK_REST}/revontuli-sauna-restaurant`,
  },
  {
    name: "Paradise Café",
    nameHe: "קפה פרדייס 🌴",
    location: "מרפסת פנימית – ארמון הרגיעה",
    description:
      "קפה ושתייה על המרפסת הפנימית של ארמון הרגיעה. נוף על הבריכות והג׳קוזים.",
    link: `${PARK_REST}/paradise-bar`,
  },
  {
    name: "Ice Bar Gelateria",
    nameHe: "בר גלידה 🍦",
    location: "ליד בור הצלילה – ארמון הרגיעה",
    description:
      "גלידות Algida, שייקים, פרוזן יוגורט ופינוקים קרים. מושלם אחרי מגלשות!",
    link: `${PARK_REST}/algida-ice-bar`,
  },
  {
    name: "Coral Bar",
    nameHe: "בר קורל 🐚",
    location: "בריכה חיצונית",
    description:
      "בר ליד הבריכה החיצונית! קוקטיילים, שייקים, בירה וחטיפים. אווירה קריבית.",
    link: `${PARK_REST}/coral-bar`,
  },
  {
    name: "Pool Bar",
    nameHe: "פול בר 🏊",
    location: "ארמון האוצרות",
    description: "שתייה וחטיפים ליד הבריכה בארמון האוצרות.",
    link: `${PARK_REST}/pool-bar`,
  },
  {
    name: "Sauna Bar",
    nameHe: "בר סאונה 🧖",
    location: "עולם הסאונות",
    description: "משקאות, תה ומיצים טבעיים בתוך עולם הסאונות. מנוחה ורענון.",
    link: `${PARK_REST}/sauna-bar`,
  },
  {
    name: "Fitness Bar",
    nameHe: "פיטנס בר 💪",
    location: "אולם הכניסה (פיטנס)",
    description: "שייקי חלבון, משקאות אנרגיה ומנות בריאות ליד חדר הכושר.",
    link: `${PARK_REST}/fitness-bar`,
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
