export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  details?: string;
  icon: string;
  image?: string;
  link?: string;
  linkLabel?: string;
  mapQuery?: string;
}

export interface FreeDayOption {
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  ages: string;
  address: string;
  link?: string;
  mapQuery: string;
}

export interface DayPlan {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  mapEmbedId?: string;
  timeline: TimelineItem[];
  tips?: string[];
  freeDayOptions?: FreeDayOption[];
}

export const MAIN_MAP_EMBED =
  "https://www.google.com/maps/d/embed?mid=1wg92j3t2nK4ztN_tVE--oFfclrVWRh8&ehbc=2E312F";

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
        description: "נחיתה בנמל התעופה Václav Havel + איסוף מזוודות",
        details:
          "נמל התעופה של פראג נמצא כ-30 דק׳ נסיעה מהמלון. אחרי איסוף המזוודות נצא מטרמינל 1 לאוטובוס המאורגן שמחכה לנו.",
        icon: "✈️",
        mapQuery: "Prague Vaclav Havel Airport",
      },
      {
        time: "11:30",
        title: "הסעה למלון",
        description: "הסעה מאורגנת ל-Aquapalace Hotel Prague",
        details:
          "אוטובוס פרטי לכל המשפחות. הנסיעה לוקחת כ-30 דקות דרך כביש D1. המלון נמצא בפרבר Čestlice, דרומית לפראג.",
        icon: "🚌",
      },
      {
        time: "12:00",
        title: "צ׳ק אין + חלוקת חדרים",
        description: "קבלת צמידי מלון וסידור חדרים",
        details:
          "בלובי המלון נקבל את הצמידים הדיגיטליים – הם משמשים לכניסה לחדר, לפארק המים ולתשלום במסעדות. שימרו עליהם!",
        icon: "🏨",
        mapQuery: "Aquapalace Hotel Prague",
      },
      {
        time: "13:00",
        title: "ארוחת צהריים",
        description: "ארוחה חופשית במסעדות המלון",
        details:
          "במלון יש 8 מסעדות ובארים. מומלץ: Puzzle Restaurant (קומה 1) לארוחה משפחתית, או Creative Pizza לפיצות מהירות.",
        icon: "🍽️",
      },
      {
        time: "14:00",
        title: "פארק המים!",
        description:
          "פארק המים הגדול במרכז אירופה – 9,150 מ״ר של כיף! 24 מגלשות, בריכת גלים, נהר פראי באורך 450 מטר, ג׳קוזי ענק, מופע לייזר ואזור VR.",
        details:
          "3 ארמונות: ארמון ההרפתקאות (מגלשות אקסטרים כולל הארוכה ביותר בצ׳כיה – 350 מ׳!), ארמון האוצרות (ילדים, ספינת פיראטים, גלי ים), ארמון הרגיעה (נהר שקט, ג׳קוזי, בריכת שחייה).",
        icon: "🏊",
        link: "/hotel",
        linkLabel: "פרטי פארק המים",
      },
      {
        time: "17:00",
        title: "ספא ורגיעה",
        description: "עולם הסאונות – 18 סוגי סאונות וחדרי חימום",
        details:
          "אזור למבוגרים בלבד! כולל סאונות פיניות, מרחצאות רומיות, עולם אסייתי (סאונת זן, גן יפני), ג׳קוזי חיצוני ובריכות קירור. פתוח עד 23:00.",
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
        description: "זמן חופשי + שינה מוקדמת לפני יום מלא מחר",
        icon: "😴",
      },
    ],
    tips: [
      "נקודת מפגש: אולם הנחיתה בפראג – חפשו את השלט של המשפחה",
      "הביאו בגד ים בתיק היד! נכנסים לפארק מיד",
      "חלוקת מבוגרים: כל הורה אחראי על הילדים שלו בפארק",
      "הצמידים הם הכל – שמרו עליהם!",
      "פארק המים פתוח עד 22:00 ביום שישי-שבת",
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
        description: "בופה עשיר – ביצים, מאפים, פנקייקים, פירות, גבינות ואזור ילדים",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "הסעה למרכז פראג",
        description: "נסיעה של כ-25 דק׳ למרכז העיר ההיסטורי",
        icon: "🚌",
      },
      {
        time: "09:30",
        title: "כיכר העיר העתיקה",
        description: "Old Town Square – הלב הפועם של פראג ההיסטורית",
        details:
          "הכיכר המפורסמת ביותר בפראג, מוקפת בבניינים בסגנון גותי, רנסנס וברוק. כאן תמצאו את כנסיית טין המרהיבה עם שני המגדלים, אמני רחוב, דוכני מזכרות ואווירה קסומה. נקודת מוצא מושלמת לסיור ברגל.",
        icon: "🏛️",
        link: "https://en.wikipedia.org/wiki/Old_Town_Square_(Prague)",
        linkLabel: "מידע נוסף",
        mapQuery: "Old Town Square Prague",
      },
      {
        time: "10:00",
        title: "שעון האסטרונומי",
        description: "Prague Astronomical Clock – שעון מכני מדהים מהמאה ה-15",
        details:
          "אחד השעונים העתיקים ביותר בעולם שעדיין פועל! כל שעה עגולה (09:00–23:00) מופיעות דמויות מכניות – 12 השליחים עוברים בחלון קטן. מומלץ להגיע 5 דקות לפני השעה העגולה. השעון מציג גם את מיקום השמש, הירח ומזלות גלגל המזלות.",
        icon: "🕰️",
        link: "https://en.wikipedia.org/wiki/Prague_astronomical_clock",
        linkLabel: "מידע נוסף",
        mapQuery: "Prague Astronomical Clock",
      },
      {
        time: "11:00",
        title: "הרובע היהודי (יוזפוב)",
        description: "Josefov – אחד הרבעים היהודיים העתיקים והמשומרים ביותר באירופה",
        details:
          "הרובע כולל 6 בתי כנסת היסטוריים (כולל בית הכנסת הישן-חדש מ-1270 – העתיק ביותר באירופה שעדיין פעיל!), בית הקברות היהודי העתיק עם 12,000 מצבות בשכבות, ומוזיאון יהודי מרתק. מקום מרגש ומשמעותי.",
        icon: "✡️",
        link: "https://www.jewishmuseum.cz/en/",
        linkLabel: "אתר המוזיאון",
        mapQuery: "Jewish Quarter Prague Josefov",
      },
      {
        time: "12:30",
        title: "Výtopna Railway Restaurant",
        description: "מסעדה שבה רכבות קטנות מביאות את האוכל והשתייה לשולחן!",
        details:
          "חוויה מטורפת לילדים ולמבוגרים! רכבות מיניאטוריות נוסעות על מסילות ברחבי המסעדה ומגישות את ההזמנות ישירות לשולחן. יש גם דגמי רכבות ענקיים ותצוגות. חובה להזמין מקום מראש – המקום מלא תמיד!",
        icon: "🚂",
        link: "https://www.vytopna.cz/en",
        linkLabel: "אתר המסעדה",
        mapQuery: "Vytopna Railway Restaurant Prague",
      },
      {
        time: "14:30",
        title: "גשר קארל",
        description: "Charles Bridge – הגשר האייקוני של פראג, אחד היפים בעולם",
        details:
          "גשר אבן מהמאה ה-14 באורך 516 מטר, מעוטר ב-30 פסלים בסגנון ברוק. הגשר מחבר בין העיר העתיקה לרובע מאלה סטראנה. תמצאו כאן אמני רחוב, נגנים, ציירים ונופים מדהימים על נהר הוולטאבה ועל המצודה. מומלץ לגעת בפסל של יאן נפומוצקי – לפי האגדה זה מביא מזל!",
        icon: "🌉",
        link: "https://en.wikipedia.org/wiki/Charles_Bridge",
        linkLabel: "מידע נוסף",
        mapQuery: "Charles Bridge Prague",
      },
      {
        time: "16:00",
        title: "שייט פרטי על הוולטאבה",
        description: "שייט פרטי על נהר הוולטאבה – נופים מדהימים של פראג מהמים",
        details:
          "שייט של כשעה וחצי עם נוף פנורמי על המצודה, גשר קארל, התיאטרון הלאומי ובניינים היסטוריים לאורך הנהר. יש שתייה וחטיפים על הסירה. מומלץ לצלם!",
        icon: "🚢",
        mapQuery: "Vltava River cruise Prague",
      },
      {
        time: "18:00",
        title: "חזרה למלון",
        description: "הסעה חזרה + זמן חופשי בפארק המים או מנוחה",
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
    subtitle: "טיול בגבהים עם נופים עוצרי נשימה",
    emoji: "🏔️",
    color: "from-green-500 to-emerald-400",
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר",
        description: "בופה עשיר במלון",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "הסעה לפטרין",
        description: "נסיעה לגבעת פטרין – הריאה הירוקה של פראג",
        icon: "🚌",
      },
      {
        time: "09:30",
        title: "רכבל פטרין",
        description: "Petřín Funicular – עלייה ברכבל חשמלי לפסגת הגבעה",
        details:
          "רכבל היסטורי שפועל מאז 1891! עולה 130 מטר גובה ב-4 דקות. מהפסגה נשקף נוף פנורמי מדהים על כל פראג. כרטיס נסיעה רגיל בתחבורה הציבורית תקף גם לרכבל.",
        icon: "🚠",
        link: "https://en.wikipedia.org/wiki/Pet%C5%99%C3%ADn_funicular",
        linkLabel: "מידע נוסף",
        mapQuery: "Petrin Funicular Prague",
      },
      {
        time: "10:00",
        title: "מבוך המראות + מגדל פטרין",
        description: "Mirror Maze – מבוך מראות מצחיק ומגדל תצפית מיניאטורי של אייפל",
        details:
          "מבוך המראות נבנה ב-1891 ומכיל מראות מעוותות מצחיקות – הילדים (והמבוגרים!) ישתגעו! ליד המבוך נמצא מגדל פטרין – עותק מוקטן של מגדל אייפל בגובה 63 מטר. שווה לעלות 299 מדרגות לנוף הכי יפה בפראג!",
        icon: "🪞",
        mapQuery: "Petrin Mirror Maze Prague",
      },
      {
        time: "11:00",
        title: "מצודת פראג",
        description: "Prague Castle – מתחם המצודה הגדול בעולם לפי גינס!",
        details:
          "מתחם ענק בשטח של 70,000 מ״ר שנבנה במאה ה-9. כולל את קתדרלת ויטוס הגותית המרהיבה (בנייתה נמשכה 600 שנה!), הארמון המלכותי, גנים מטופחים ונוף עוצר נשימה. החלפת המשמר מתקיימת בכל יום בשעה 12:00.",
        icon: "🏰",
        link: "https://www.hrad.cz/en",
        linkLabel: "אתר המצודה",
        mapQuery: "Prague Castle",
      },
      {
        time: "13:00",
        title: "הסמטה הזהובה",
        description: "Golden Lane – סמטה קסומה עם בתים צבעוניים זעירים מהמאה ה-16",
        details:
          "סמטה צרה ומקסימה בתוך מתחם המצודה. הבתים הצבעוניים הקטנים שימשו במקור צורפי זהב (ומכאן השם). בבית מספר 22 גר הסופר פרנץ קפקא! היום הבתים מציגים תערוכות על החיים בימי הביניים – שריונות, נשק, אלכימיה ועוד.",
        icon: "🏠",
        mapQuery: "Golden Lane Prague Castle",
      },
      {
        time: "14:00",
        title: "ארוחת צהריים – Kuchyň",
        description: "מסעדה עם הנוף הכי מדהים על פראג!",
        details:
          "מסעדת Kuchyň (בצ׳כית: ״מטבח״) נמצאת ממש ליד המצודה ומציעה נוף פנורמי על כל העיר. התפריט כולל מנות צ׳כיות מודרניות. מומלץ לשבת בטרסה אם מזג האוויר נעים. הנוף מטורף – פראג כמו על כף היד.",
        icon: "🍽️",
        link: "https://www.kuchyn.ambi.cz/en/",
        linkLabel: "אתר המסעדה",
        mapQuery: "Kuchyn Restaurant Prague",
      },
      {
        time: "16:00",
        title: "חזרה למלון",
        description: "הסעה חזרה + אפשרות לפארק מים או מנוחה",
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
    subtitle: "בחרו מה שבא לכם – המון אפשרויות!",
    emoji: "🎉",
    color: "from-purple-500 to-pink-400",
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר",
        description: "ארוחת בוקר במלון – בלי לחץ, קמים מתי שרוצים",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "בחרו מה שבא לכם!",
        description: "יום חופשי לכל המשפחה. למטה תמצאו את כל המקומות המומלצים – לחצו על כל מקום לפרטים",
        icon: "🎯",
      },
    ],
    freeDayOptions: [
      {
        name: "פארק המים – Aquapalace",
        nameEn: "Aquapalace Water Park",
        description:
          "יום שלם של הנאה בפארק המים הגדול במרכז אירופה! 24 מגלשות כולל הארוכה ביותר בצ׳כיה (350 מ׳), בריכת גלים, נהר פראי, ג׳קוזי ענק, ואזור ילדים מיוחד עם ספינת פיראטים. אין צורך לצאת מהמלון!",
        icon: "🏊",
        ages: "כל הגילאים",
        address: "במלון – Aquapalace Hotel Prague",
        link: "/hotel",
        mapQuery: "Aquapalace Prague",
      },
      {
        name: "גן החיות של פראג",
        nameEn: "Prague Zoo",
        description:
          "אחד מגני החיות הטובים בעולם! מדורג ב-Top 10 העולמי. יותר מ-5,000 חיות מ-680 מינים על שטח של 58 הקטאר. כולל פינת חי, רכבל מעל הגן, ביתן הג׳ונגל הטרופי ואזור משחקים ענקי לילדים. מומלץ להקדיש חצי יום לפחות.",
        icon: "🦁",
        ages: "כל הגילאים, מושלם לילדים",
        address: "U Trojského zámku 3/120, Praha 7",
        link: "https://www.zoopraha.cz/en",
        mapQuery: "Prague Zoo",
      },
      {
        name: "מוזיאון לגו",
        nameEn: "LEGO Museum Prague",
        description:
          "מוזיאון לגו ענק על פני 3 קומות עם יותר מ-2,500 דגמים שנבנו ממיליון קוביות! 20 אזורים נושאיים כולל Star Wars, Harry Potter, ערים מפורסמות ועוד. יש פינת בנייה לילדים וחנות לגו מדהימה. ממוקם במרכז העיר.",
        icon: "🧱",
        ages: "3+, מושלם לילדים",
        address: "Národní 31, 110 00 Staré Město, Praha",
        link: "https://praguetouristinformation.com/en/sightseeing/museum/lego",
        mapQuery: "LEGO Museum Prague Narodni",
      },
      {
        name: "אקווריום – עולם הים",
        nameEn: "Mořský svět / Sea World Prague",
        description:
          "האקווריום הגדול ביותר בצ׳כיה! מאות סוגי דגים טרופיים, כרישים, צבי ים ואלמוגים. הדגש: מיכל כרישים ענק בנפח 100,000 ליטר ומערת אלמוגים באורך 25 מטר. הילדים יכולים לראות האכלת כרישים ולגעת בכוכבי ים בבריכת המגע.",
        icon: "🐠",
        ages: "כל הגילאים",
        address: "Výstaviště 422, Praha 7 – Holešovice",
        link: "https://morskysvet.cz/en",
        mapQuery: "Morsky svet Sea World Prague",
      },
      {
        name: "Centrum Chodov – קניון",
        nameEn: "Centrum Chodov Shopping Mall",
        description:
          "הקניון הגדול ביותר בפראג! 3 קומות עם 350 חנויות, קולנוע, אזור אוכל ענק ואזור משחקים לילדים. נמצא קרוב למלון (כ-15 דק׳ נסיעה). מותגים בינלאומיים במחירים טובים יותר מישראל. יש גם סופרמרקט גדול לקניית חטיפים ומזכרות.",
        icon: "🛍️",
        ages: "כל הגילאים",
        address: "Roztylská 2321/19, 148 00 Praha 4",
        link: "https://centrumchodov.cz/en",
        mapQuery: "Centrum Chodov Prague",
      },
      {
        name: "פארק שעשועים – Funpark Žirafa",
        nameEn: "Funpark Žirafa",
        description:
          "פארק שעשועים מקורה ענק לילדים! טרמפולינות, מגלשות, מתקני טיפוס, בורות קצף ואזור פעוטות נפרד. מושלם ליום גשום או כשהילדים צריכים לפרוק אנרגיה. יש גם קפיטריה להורים.",
        icon: "🎪",
        ages: "2-12",
        address: "Chlumecká 765/6, 198 19 Praha 9",
        mapQuery: "Funpark Zirafa Prague",
      },
      {
        name: "מגדל ז׳יז׳קוב – Žižkov TV Tower",
        nameEn: "Žižkov Television Tower",
        description:
          "המבנה הגבוה ביותר בפראג (216 מ׳)! תצפית 360° מטורפת על כל העיר מגובה 93 מטר. על המגדל מטפסים פסלי תינוקות ענקיים של האמן דוד צ׳רני – מוזר ומגניב! יש גם מסעדה ובר בקומת התצפית.",
        icon: "🗼",
        ages: "כל הגילאים",
        address: "Mahlerovy sady 1, 130 00 Praha 3",
        link: "https://www.towerpark.cz/en/",
        mapQuery: "Zizkov TV Tower Prague",
      },
      {
        name: "קניות במרכז פראג",
        nameEn: "Prague City Center Shopping",
        description:
          "רחוב Na Příkopě ו-Wenceslas Square – אזור הקניות המרכזי של פראג. חנויות מותגים, חנויות מזכרות, קריסטל בוהמי, בובות מריונטות מסורתיות ושוקולד צ׳כי מעולה. לא לפספס את חנויות ה-Manufaktura עם מוצרי טבע צ׳כיים.",
        icon: "🎁",
        ages: "כל הגילאים",
        address: "Na Příkopě / Václavské náměstí, Praha 1",
        mapQuery: "Na Prikope Prague shopping",
      },
    ],
    tips: [
      "המפה למטה מציגה את כל המקומות המומלצים – לחצו לניווט",
      "גן החיות + אקווריום אפשר לשלב ביום אחד (שניהם באותו אזור)",
      "קניון Centrum Chodov קרוב למלון – אפשר ללכת אחה״צ",
      "להזמין מונית דרך Bolt או Uber – זול ומהיר בפראג",
      "פארק המים פתוח עד 22:00 – אפשר לחזור בערב",
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
        description: "ארוחת בוקר אחרונה במלון – תהנו מכל רגע!",
        details: "הארוחה האחרונה בבופה העשיר. קחו את הזמן, אין לחץ עד 10:00.",
        icon: "🥐",
      },
      {
        time: "09:00",
        title: "סידור מזוודות",
        description: "אריזת מזוודות + בדיקה שלא שכחנו כלום",
        details:
          "טיפ: בדקו מתחת למיטה, בארון, במגירות ובחדר האמבטיה. אל תשכחו מטענים ומתאמים!",
        icon: "🧳",
      },
      {
        time: "10:00",
        title: "צ׳ק אאוט",
        description: "עזיבת חדרים + החזרת צמידים בקבלה",
        details:
          "אפשר להשאיר מזוודות באחסון המלון ולהמשיך ליהנות עד ההסעה לשדה התעופה.",
        icon: "🔑",
      },
      {
        time: "10:30",
        title: "זמן חופשי אחרון",
        description: "אפשר לנצל: פארק מים (עד 14:00), קניון Centrum Chodov, או סתם לנוח בלובי",
        details:
          "שעות אחרונות בפראג! מומלץ לנצל את פארק המים עם הילדים או לקפוץ לקניון הסמוך לקניות אחרונות.",
        icon: "🎯",
      },
      {
        time: "15:30",
        title: "הסעה לשדה התעופה",
        description: "יציאה מהמלון לנמל התעופה – חשוב לא לאחר!",
        details: "האוטובוס יוצא בדיוק ב-15:30. הנסיעה לוקחת כ-30 דקות. יש להיות עם כל המזוודות בלובי עד 15:15.",
        icon: "🚌",
      },
      {
        time: "18:55",
        title: "טיסה חזרה",
        description: "TUS AIRWAYS U8461 | פראג → תל אביב | נחיתה 23:40",
        details: "טיסה של כ-4 שעות. מומלץ להכין חטיפים, אוזניות ומשחקים לילדים.",
        icon: "✈️",
        link: "/flights",
        linkLabel: "פרטי הטיסה",
      },
    ],
    tips: [
      "פארק מים – אפשר ליהנות עד 14:00 גם ביום העזיבה",
      "קניון Centrum Chodov הסמוך למלון – קניות אחרונות",
      "לא לשכוח: דרכונים, מטענים, מתאמי חשמל",
      "להגיע ללובי עם מזוודות עד 15:15!",
    ],
  },
];
