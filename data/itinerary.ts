export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  link?: string;
  linkLabel?: string;
}

export interface DayPlan {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  timeline: TimelineItem[];
  tips?: string[];
}

export const itinerary: DayPlan[] = [
  {
    id: 1,
    date: "9 ביוני 2026",
    title: "נחיתה + פארק מים",
    subtitle: "יום ראשון בפראג!",
    emoji: "✈️",
    color: "from-blue-500 to-cyan-400",
    timeline: [
      {
        time: "10:15",
        title: "נחיתה בפראג",
        description: "נחיתה בנמל התעופה + איסוף מזוודות",
        icon: "✈️",
      },
      {
        time: "11:30",
        title: "הסעה למלון",
        description: "הסעה מאורגנת ל-Aquapalace Hotel Prague",
        icon: "🚌",
      },
      {
        time: "12:00",
        title: "צ׳ק אין + חלוקת חדרים",
        description: "קבלת צמידי מלון וסידור חדרים",
        icon: "🏨",
      },
      {
        time: "13:00",
        title: "ארוחת צהריים",
        description: "ארוחה חופשית במסעדות המלון",
        icon: "🍽️",
      },
      {
        time: "14:00",
        title: "פארק המים!",
        description: "מגלשות, בריכת גלים, נהר פראי, ג׳קוזי ועוד",
        icon: "🏊",
        link: "/hotel",
        linkLabel: "פרטי פארק המים",
      },
      {
        time: "17:00",
        title: "ספא ורגיעה",
        description: "סאונות, ג׳קוזי ואזור מנוחה (למבוגרים)",
        icon: "🧖",
      },
      {
        time: "19:30",
        title: "ארוחת ערב",
        description: "ארוחת ערב משפחתית במלון",
        icon: "🍕",
      },
      {
        time: "21:00",
        title: "מנוחה",
        description: "זמן חופשי + שינה מוקדמת לפני יום מלא",
        icon: "😴",
      },
    ],
    tips: [
      "נקודת מפגש: אולם הנחיתה בפראג – חפשו את השלט של המשפחה",
      "הביאו בגד ים בתיק היד! נכנסים לפארק מיד",
      "חלוקת מבוגרים: כל הורה אחראי על הילדים שלו בפארק",
      "הצמידים הם הכל – שמרו עליהם!",
    ],
  },
  {
    id: 2,
    date: "10 ביוני 2026",
    title: "מרכז פראג + שייט",
    subtitle: "יום סיור בעיר העתיקה",
    emoji: "🏰",
    color: "from-amber-500 to-orange-400",
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר",
        description: "ארוחת בוקר עשירה במלון",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "הסעה למרכז פראג",
        description: "נסיעה למרכז העיר",
        icon: "🚌",
      },
      {
        time: "09:30",
        title: "כיכר העיר העתיקה",
        description: "Old Town Square – הכיכר המפורסמת ביותר בפראג",
        icon: "🏛️",
        link: "https://en.wikipedia.org/wiki/Old_Town_Square_(Prague)",
        linkLabel: "מידע נוסף",
      },
      {
        time: "10:00",
        title: "שעון האסטרונומי",
        description: "Prague Astronomical Clock – שעון מכני מהמאה ה-15",
        icon: "🕰️",
        link: "https://en.wikipedia.org/wiki/Prague_astronomical_clock",
        linkLabel: "מידע נוסף",
      },
      {
        time: "11:00",
        title: "הרובע היהודי",
        description: "Jewish Quarter – בתי כנסת עתיקים, בית קברות יהודי",
        icon: "✡️",
        link: "https://www.jewishmuseum.cz/en/",
        linkLabel: "אתר המוזיאון",
      },
      {
        time: "12:30",
        title: "Výtopna Railway Restaurant",
        description: "מסעדה מטורפת שבה רכבות מביאות את האוכל לשולחן! חובה לילדים!",
        icon: "🚂",
        link: "https://www.vytopna.cz/en",
        linkLabel: "אתר המסעדה",
      },
      {
        time: "14:30",
        title: "גשר קארל",
        description: "Charles Bridge – הגשר האייקוני של פראג, פסלים ואמנים",
        icon: "🌉",
        link: "https://en.wikipedia.org/wiki/Charles_Bridge",
        linkLabel: "מידע נוסף",
      },
      {
        time: "16:00",
        title: "שייט פרטי",
        description: "שייט פרטי על נהר הוולטאבה – נופים מדהימים של פראג",
        icon: "🚢",
      },
      {
        time: "18:00",
        title: "חזרה למלון",
        description: "הסעה חזרה + זמן חופשי",
        icon: "🚌",
      },
      {
        time: "19:30",
        title: "ארוחת ערב",
        description: "ארוחת ערב במלון",
        icon: "🍽️",
      },
    ],
  },
  {
    id: 3,
    date: "11 ביוני 2026",
    title: "פטרין + מצודת פראג",
    subtitle: "טיול בגבהים",
    emoji: "🏔️",
    color: "from-green-500 to-emerald-400",
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר",
        description: "ארוחת בוקר במלון",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "הסעה לפטרין",
        description: "נסיעה לגבעת פטרין",
        icon: "🚌",
      },
      {
        time: "09:30",
        title: "רכבל פטרין",
        description: "Petřín Funicular – עלייה ברכבל לפסגת הגבעה",
        icon: "🚠",
        link: "https://en.wikipedia.org/wiki/Pet%C5%99%C3%ADn_funicular",
        linkLabel: "מידע נוסף",
      },
      {
        time: "10:00",
        title: "מבוך המראות",
        description: "Mirror Maze – מבוך מראות מצחיק לכל הגילאים",
        icon: "🪞",
      },
      {
        time: "11:00",
        title: "מצודת פראג",
        description: "Prague Castle – המצודה הגדולה בעולם! קתדרלה, ארמון וגנים",
        icon: "🏰",
        link: "https://www.hrad.cz/en",
        linkLabel: "אתר המצודה",
      },
      {
        time: "13:00",
        title: "הסמטה הזהובה",
        description: "Golden Lane – סמטה היסטורית קסומה עם בתים צבעוניים זעירים",
        icon: "🏠",
      },
      {
        time: "14:00",
        title: "ארוחת צהריים – Kuchyň",
        description: "מסעדה עם נוף מדהים על פראג",
        icon: "🍽️",
        link: "https://www.kuchyn.ambi.cz/en/",
        linkLabel: "אתר המסעדה",
      },
      {
        time: "16:00",
        title: "חזרה למלון",
        description: "הסעה חזרה + פארק מים / מנוחה",
        icon: "🚌",
      },
      {
        time: "19:30",
        title: "ארוחת ערב",
        description: "ארוחת ערב במלון",
        icon: "🍽️",
      },
    ],
  },
  {
    id: 4,
    date: "12 ביוני 2026",
    title: "יום חופשי",
    subtitle: "בחרו מה שבא לכם!",
    emoji: "🎉",
    color: "from-purple-500 to-pink-400",
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר",
        description: "ארוחת בוקר במלון",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "בחרו מה שבא לכם!",
        description: "יום חופשי – כל משפחה בוחרת פעילות",
        icon: "🎯",
      },
    ],
    tips: [
      "פארק מים – יום שלם של הנאה במגלשות",
      "קניון – קניות ובילוי",
      "ג׳ימבורי – פעילויות לילדים",
      "אטרקציות לילדים בעיר",
      "קניות מזכרות",
    ],
  },
  {
    id: 5,
    date: "13 ביוני 2026",
    title: "ארוחת בוקר + טיסה חזרה",
    subtitle: "להתראות פראג!",
    emoji: "👋",
    color: "from-rose-500 to-red-400",
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר אחרונה",
        description: "ארוחת בוקר אחרונה במלון – תהנו!",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "סידור מזוודות",
        description: "אריזת מזוודות + בדיקה שלא שכחנו כלום",
        icon: "🧳",
      },
      {
        time: "10:00",
        title: "צ׳ק אאוט",
        description: "עזיבת חדרים + החזרת צמידים",
        icon: "🔑",
      },
      {
        time: "10:30",
        title: "זמן חופשי",
        description: "אפשר לנצל את הזמן: פארק מים, קניון, קניות",
        icon: "🎯",
      },
      {
        time: "15:30",
        title: "הסעה לשדה התעופה",
        description: "יציאה מהמלון לנמל התעופה",
        icon: "🚌",
      },
      {
        time: "18:55",
        title: "טיסה חזרה",
        description: "TUS AIRWAYS U8461 | פראג → תל אביב | נחיתה 23:40",
        icon: "✈️",
        link: "/flights",
        linkLabel: "פרטי הטיסה",
      },
    ],
    tips: [
      "פארק מים – אפשר ליהנות עד 14:00",
      "קניון הסמוך למלון – קניות אחרונות",
      "ג׳ימבורי לילדים",
    ],
  },
];
