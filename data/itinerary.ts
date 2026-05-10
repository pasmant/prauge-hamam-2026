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
  category: "attraction" | "restaurant" | "shopping";
  icon: string;
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
  mapEmbedUrl: string;
  timeline: TimelineItem[];
  tips?: string[];
  freeDayOptions?: FreeDayOption[];
}

const MAP_MID = "1wg92j3t2nK4ztN_tVE--oFfclrVWRh8";
const MAP_BASE = `https://www.google.com/maps/d/embed?mid=${MAP_MID}&ehbc=2E312F`;

function dayMapUrl(lat: number, lng: number, zoom: number) {
  return `${MAP_BASE}&ll=${lat},${lng}&z=${zoom}`;
}

export const MAIN_MAP_EMBED = MAP_BASE;

export const itinerary: DayPlan[] = [
  // ─── DAY 1 ── 9 June ─── Airport → Aquapalace ───
  {
    id: 1,
    date: "9 ביוני 2026",
    title: "נחיתה + פארק מים",
    subtitle: "יום ראשון בפראג!",
    emoji: "✈️",
    color: "from-blue-500 to-cyan-400",
    mapEmbedUrl: dayMapUrl(50.056, 14.42, 11),
    timeline: [
      {
        time: "10:15",
        title: "נחיתה – נמל התעופה ואצלב האוול",
        description: "נחיתה בנמל התעופה Václav Havel + איסוף מזוודות",
        details:
          "נמל התעופה של פראג (PRG) נמצא כ-30 דק׳ נסיעה מהמלון. לאחר איסוף המזוודות נצא מטרמינל 1 לאוטובוס המאורגן שמחכה לנו בחניון.",
        icon: "✈️",
        mapQuery: "Václav Havel Airport Prague",
      },
      {
        time: "11:30",
        title: "הסעה למלון",
        description: "הסעה מאורגנת באוטובוס פרטי ל-Aquapalace Hotel",
        details:
          "הנסיעה לוקחת כ-30 דקות דרך כביש D1 דרומה. המלון נמצא בפרבר Čestlice.",
        icon: "🚌",
      },
      {
        time: "12:00",
        title: "צ׳ק אין – Aquapalace Prague",
        description: "קבלת צמידים דיגיטליים, סידור חדרים והתארגנות",
        details:
          "הצמידים משמשים לכניסה לחדר, לפארק המים ולתשלום במסעדות. שימרו עליהם!",
        icon: "🏨",
        mapQuery: "Aquapalace Hotel Prague",
      },
      {
        time: "13:00",
        title: "ארוחת צהריים",
        description: "ארוחה חופשית במסעדות המלון",
        details:
          "במלון 8 מסעדות ובארים. מומלץ: Puzzle Restaurant (קומה 1) לארוחה משפחתית.",
        icon: "🍽️",
      },
      {
        time: "14:00",
        title: "פארק המים!",
        description:
          "פארק המים הגדול במרכז אירופה – 9,150 מ״ר! 24 מגלשות, בריכת גלים, נהר פראי 450 מ׳, ג׳קוזי ואזור VR.",
        details:
          "3 ארמונות: ארמון ההרפתקאות (מגלשות אקסטרים כולל הארוכה בצ׳כיה – 350 מ׳!), ארמון האוצרות (ילדים, ספינת פיראטים), ארמון הרגיעה (נהר שקט, ג׳קוזי, בריכת שחייה).",
        icon: "🏊",
        link: "/hotel",
        linkLabel: "פרטי פארק המים",
      },
      {
        time: "17:00",
        title: "ספא ורגיעה",
        description: "עולם הסאונות – 18 סוגי סאונות וחדרי חימום (למבוגרים)",
        details:
          "סאונות פיניות, מרחצאות רומיות, עולם אסייתי, ג׳קוזי חיצוני ובריכות קירור. פתוח עד 23:00.",
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
      "כל הורה אחראי על הילדים שלו בפארק",
      "הצמידים הם הכל – שמרו עליהם!",
    ],
  },

  // ─── DAY 2 ── 10 June ─── מרכז פראג ───
  {
    id: 2,
    date: "10 ביוני 2026",
    title: "מרכז פראג + שייט",
    subtitle: "יום סיור בעיר העתיקה",
    emoji: "🏰",
    color: "from-amber-500 to-orange-400",
    mapEmbedUrl: dayMapUrl(50.083, 14.421, 14),
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר",
        description:
          "בופה עשיר – ביצים, מאפים, פנקייקים, פירות, גבינות ואזור ילדים",
        icon: "🥐",
      },
      {
        time: "10:30",
        title: "יציאה למרכז פראג",
        description: "נסיעה של כ-25 דק׳ למרכז העיר ההיסטורי",
        icon: "🚌",
      },
      {
        time: "11:00",
        title: "הרובע היהודי (יוזפוב)",
        description:
          "Josefov – אחד הרבעים היהודיים העתיקים והמשומרים ביותר באירופה",
        details:
          "הרובע כולל 6 בתי כנסת היסטוריים (כולל בית הכנסת הישן-חדש מ-1270 – העתיק ביותר באירופה שעדיין פעיל!), בית הקברות היהודי העתיק עם 12,000 מצבות בשכבות, ומוזיאון יהודי מרתק.",
        icon: "✡️",
        link: "https://www.jewishmuseum.cz/en/",
        linkLabel: "אתר המוזיאון",
        mapQuery: "Jewish Quarter Prague Josefov",
      },
      {
        time: "11:45",
        title: "כיכר העיר העתיקה",
        description: "Old Town Square – הלב הפועם של פראג ההיסטורית",
        details:
          "הכיכר המפורסמת ביותר בפראג, מוקפת בבניינים בסגנון גותי, רנסנס וברוק. כאן תמצאו את כנסיית טין המרהיבה, אמני רחוב ודוכני מזכרות.",
        icon: "🏛️",
        link: "https://en.wikipedia.org/wiki/Old_Town_Square_(Prague)",
        linkLabel: "מידע נוסף",
        mapQuery: "Old Town Square Prague",
      },
      {
        time: "12:00",
        title: "השעון האסטרונומי",
        description: "Prague Astronomical Clock – שעון מכני מדהים מהמאה ה-15",
        details:
          "אחד השעונים העתיקים ביותר בעולם שעדיין פועל! כל שעה עגולה (09:00–23:00) מופיעות דמויות מכניות – 12 השליחים. מומלץ להגיע 5 דקות לפני. השעון מציג מיקום השמש, הירח ומזלות.",
        icon: "🕰️",
        link: "https://en.wikipedia.org/wiki/Prague_astronomical_clock",
        linkLabel: "מידע נוסף",
        mapQuery: "Prague Astronomical Clock",
      },
      {
        time: "12:15",
        title: "פסל הראש המסתובב של פרנץ קפקא",
        description:
          "Head of Franz Kafka – פסל קינטי מדהים של 42 שכבות מתכת מסתובבות",
        details:
          "פסל מודרני ענק של האמן דייוויד צ׳רני (David Černý) – 42 לוחות נירוסטה מסתובבים ויוצרים ומפרקים את פניו של קפקא. גובה 10 מטר, משקל 39 טון. נקודת צילום מטורפת! ממוקם ליד קניון Quadrio.",
        icon: "🗿",
        link: "https://en.wikipedia.org/wiki/Head_of_Franz_Kafka",
        linkLabel: "מידע נוסף",
        mapQuery: "Franz Kafka Head Statue Prague",
      },
      {
        time: "13:00",
        title: "Výtopna Railway Restaurant",
        description:
          "מסעדה שבה רכבות מיניאטוריות מביאות את האוכל והשתייה לשולחן!",
        details:
          "חוויה מטורפת לילדים ולמבוגרים! רכבות נוסעות על מסילות ברחבי המסעדה ומגישות הזמנות ישירות. חובה להזמין מקום מראש – המקום תמיד מלא!",
        icon: "🚂",
        link: "https://www.vytopna.cz/en",
        linkLabel: "אתר המסעדה",
        mapQuery: "Výtopna Railway Restaurant Prague",
      },
      {
        time: "14:30",
        title: "מוזיאון הלגו",
        description:
          "LEGO Museum Prague – המוזיאון הגדול ביותר של לגו באירופה!",
        details:
          "יותר מ-3,000 מודלים ו-1 מיליון חלקי לגו! תערוכות ענק של ערים, מכוניות, ספינות וסצנות מפורסמות. יש אזור בנייה חופשית לילדים וחנות לגו ענקית. ברחוב Národní – חוויה לכל הגילאים!",
        icon: "🧱",
        link: "https://www.muzeumlegopraha.cz/en/",
        linkLabel: "אתר המוזיאון",
        mapQuery: "LEGO Museum Prague Národní",
      },
      {
        time: "15:15",
        title: "האיש התלוי – פסל זיגמונד פרויד",
        description:
          "Man Hanging Out – פסל של דייוויד צ׳רני: איש תלוי מקורת גג!",
        details:
          "פסל מפתיע של האמן דייוויד צ׳רני – דמות בגודל טבעי של זיגמונד פרויד תלויה ביד אחת מקורת גג ברחוב Husova. חפשו למעלה! אחד מהאמנים הפרובוקטיביים ביותר בפראג.",
        icon: "🎭",
        link: "https://en.wikipedia.org/wiki/Man_Hanging_Out",
        linkLabel: "מידע נוסף",
        mapQuery: "Man Hanging Out David Cerny Prague Husova",
      },
      {
        time: "15:30",
        title: "הבית הרוקד",
        description:
          "Dancing House (Tančící dům) – בניין מודרני אייקוני בעיצוב פרנק גהרי",
        details:
          "בניין ייחודי בסגנון דה-קונסטרוקטיביסטי שנבנה ב-1996. מכונה גם ״פרד וג׳ינג׳ר״ – שני חלקיו נראים כמו זוג רוקד. בקומה העליונה יש מרפסת תצפית ובר עם נוף מדהים על הוולטאבה. מומלץ לצלם!",
        icon: "🏢",
        link: "https://en.wikipedia.org/wiki/Dancing_House",
        linkLabel: "מידע נוסף",
        mapQuery: "Dancing House Prague",
      },
      {
        time: "16:30",
        title: "שייט – Slovanka Boat Rental",
        description:
          "שייט על נהר הוולטאבה מנקודת ההשכרה באי סלובנסקי – נופים פנורמיים!",
        details:
          "אפשרות לסירות פדלים או שייט מאורגן. נוף פנורמי על המצודה, גשר קארל, התיאטרון הלאומי ובניינים היסטוריים. מומלץ לצלם! הנקודה באי Slovanský ostrov – אי ירוק ושקט במרכז פראג.",
        icon: "🚣",
        mapQuery: "Rental boats Slovanka Prague",
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

  // ─── DAY 3 ── 11 June ─── מצודת פראג + קיר לנון + גשר קארל ───
  {
    id: 3,
    date: "11 ביוני 2026",
    title: "מצודה + לנון + גשר קארל",
    subtitle: "טיול במצודת פראג והרובע הקטן",
    emoji: "🏰",
    color: "from-green-500 to-emerald-400",
    mapEmbedUrl: dayMapUrl(50.086, 14.403, 14),
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר",
        description: "בופה עשיר במלון",
        icon: "🥐",
      },
      {
        time: "10:30",
        title: "יציאה למצודת פראג",
        description: "נסיעה של כ-30 דק׳ לאזור המצודה",
        icon: "🚌",
      },
      {
        time: "11:00",
        title: "מצודת פראג",
        description: "Prague Castle – מתחם המצודה הגדול בעולם לפי גינס!",
        details:
          "מתחם ענק בשטח 70,000 מ״ר שנבנה במאה ה-9. כולל את קתדרלת ויטוס הגותית (בנייתה נמשכה 600 שנה!), הארמון המלכותי, גנים מטופחים ונוף עוצר נשימה. החלפת משמר כל יום ב-12:00.",
        icon: "🏰",
        link: "https://www.hrad.cz/en",
        linkLabel: "אתר המצודה",
        mapQuery: "Prague Castle",
      },
      {
        time: "11:45",
        title: "סמטת הזהב",
        description: "Golden Lane – סמטה צבעונית קסומה בתוך המצודה",
        details:
          "שורה של בתים זעירים צבעוניים מהמאה ה-16 בתוך חומות המצודה. פעם גרו כאן צורפי זהב ואלכימאים. פרנץ קפקא גר בבית מס׳ 22! היום הבתים הם מוזיאונים קטנים שמציגים חיי ימי הביניים, שריונות ונשק.",
        icon: "🏘️",
        link: "https://en.wikipedia.org/wiki/Golden_Lane",
        linkLabel: "מידע נוסף",
        mapQuery: "Golden Lane Prague Castle",
      },
      {
        time: "12:15",
        title: "מוזיאון הצעצועים",
        description: "Toy Museum – אוסף צעצועים מדהים מ-2,000 שנות היסטוריה!",
        details:
          "אחד מאוספי הצעצועים הגדולים בעולם! צעצועי עץ עתיקים, רובוטים, דובי טדי, בובות ברבי מהמהדורות הראשונות, מכוניות פח ודגמי רכבות. ממוקם ממש בתוך מתחם המצודה – הילדים ישתגעו!",
        icon: "🧸",
        mapQuery: "Toy Museum Prague Castle Jiřská",
      },
      {
        time: "12:45",
        title: "מגדל לבן (White Tower)",
        description: "White Tower – מגדל תצפית מימי הביניים בתוך המצודה",
        details:
          "מגדל היסטורי ששימש בעבר כבית סוהר ומגדל תצפית. תצוגת שריונות, נשק ומכשירי עינויים מימי הביניים. מהקומה העליונה נוף מדהים על כל פראג!",
        icon: "🏰",
        mapQuery: "White Tower Golden Lane Prague",
      },
      {
        time: "13:15",
        title: "ארוחת צהריים – U Glaubiců",
        description: "מסעדה צ׳כית מסורתית בכיכר Malostranské – אווירה מדהימה!",
        details:
          "מסעדה היסטורית בלב הרובע הקטן (Malá Strana), ממש מתחת למצודה. מנות צ׳כיות קלאסיות: גולאש, שניצל, כנודלים ובירה מקומית. מרפסת חיצונית עם נוף על הכיכר.",
        icon: "🍽️",
        mapQuery: "U Glaubiců Malostranské náměstí Prague",
      },
      {
        time: "14:45",
        title: "הקיר של לנון",
        description:
          "Lennon Wall – קיר גרפיטי אייקוני מלא צבעים, ציטוטים ואמנות רחוב",
        details:
          "מאז שנות ה-80 הקיר מכוסה בגרפיטי בהשראת ג׳ון לנון ושירי הביטלס. הפך לסמל של חופש ומחאה. הקיר משתנה כל הזמן – כל מי שרוצה יכול להוסיף ציור. נקודת צילום מושלמת! נמצא ברובע Malá Strana ליד תעלת מים קסומה.",
        icon: "🎨",
        link: "https://en.wikipedia.org/wiki/Lennon_Wall",
        linkLabel: "מידע נוסף",
        mapQuery: "Lennon Wall Prague",
      },
      {
        time: "15:15",
        title: "הסמטה הצרה ביותר בפראג",
        description: "Prague's Narrowest Alley – סמטה כל כך צרה שיש לה רמזור!",
        details:
          "סמטה ברוחב 50 ס״מ בלבד ברובע Malá Strana! כל כך צרה שהתקינו רמזור לתנועה דו-כיוונית. חוויה מצחיקה ומשונה – חייבים לנסות ולצלם. ממוקמת ברחוב U Lužického semináře ליד נהר הוולטאבה.",
        icon: "🚦",
        mapQuery: "Prague narrowest alley U Lužického semináře",
      },
      {
        time: "15:45",
        title: "גשר קארל",
        description:
          "Charles Bridge – הגשר האייקוני של פראג, אחד היפים בעולם",
        details:
          "גשר אבן מהמאה ה-14 באורך 516 מ׳ עם 30 פסלים בסגנון ברוק. מחבר בין Malá Strana לעיר העתיקה. אמני רחוב, נגנים, נופים מדהימים. לגעת בפסל יאן נפומוצקי – מביא מזל!",
        icon: "🌉",
        link: "https://en.wikipedia.org/wiki/Charles_Bridge",
        linkLabel: "מידע נוסף",
        mapQuery: "Charles Bridge Prague",
      },
      {
        time: "17:00",
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

  // ─── DAY 4 ── 12 June ─── יום חופשי – מקומות מהמפה ───
  {
    id: 4,
    date: "12 ביוני 2026",
    title: "יום חופשי",
    subtitle: "בחרו מה שבא לכם – הכל קרוב למלון!",
    emoji: "🎉",
    color: "from-purple-500 to-pink-400",
    mapEmbedUrl: dayMapUrl(50.003, 14.567, 14),
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
        description:
          "יום חופשי לכל המשפחה. למטה כל המקומות המומלצים – הכל קרוב למלון!",
        icon: "🎯",
      },
    ],
    freeDayOptions: [
      // ── אטרקציות ──
      {
        name: "Aquapalace Prague",
        nameEn: "פארק המים – במלון",
        description:
          "יום שלם בפארק המים הגדול במרכז אירופה! 24 מגלשות כולל הארוכה ביותר בצ׳כיה (350 מ׳), בריכת גלים, נהר פראי 450 מ׳, ג׳קוזי ענק, ואזור ילדים עם ספינת פיראטים. אין צורך לצאת מהמלון!",
        category: "attraction",
        icon: "🏊",
        address: "Aquapalace Hotel Prague, Čestlice",
        link: "/hotel",
        mapQuery: "Aquapalace Prague",
      },
      {
        name: "Funpark Giraffe",
        nameEn: "פארק שעשועים ג׳ירפה",
        description:
          "פארק שעשועים מקורה ענק לילדים! טרמפולינות, מגלשות, מתקני טיפוס, בורות קצף ואזור פעוטות נפרד. מושלם ליום גשום או כשהילדים צריכים לפרוק אנרגיה. יש קפיטריה להורים. ממוקם ממש ליד המלון!",
        category: "attraction",
        icon: "🦒",
        address: "Čestlice (ליד המלון)",
        mapQuery: "Funpark Giraffe Čestlice",
      },
      {
        name: "Čokoládovna CHOCOTOPIA",
        nameEn: "עולם השוקולד – שוקוטופיה",
        description:
          "מוזיאון שוקולד אינטראקטיבי! סדנאות הכנת שוקולד, טעימות ללא הגבלה, תערוכות על ההיסטוריה של השוקולד, והכנת פרלינים אישיים. חוויה מתוקה לכל המשפחה. נמצא קרוב למלון באזור Čestlice.",
        category: "attraction",
        icon: "🍫",
        address: "Čestlice (ליד המלון)",
        mapQuery: "Čokoládovna CHOCOTOPIA Čestlice",
      },
      {
        name: "FarmaPalace Praha",
        nameEn: "פארמה פאלאס – חוות חיות",
        description:
          "חווה משפחתית עם בעלי חיים! ילדים יכולים להאכיל ולגעת בעזים, כבשים, סוסי פוני, ארנבים ותרנגולות. יש גם מגרש משחקים ופינת פיקניק. חוויה כפרית נעימה ממש ליד המלון.",
        category: "attraction",
        icon: "🐐",
        address: "Čestlice (ליד המלון)",
        mapQuery: "FarmaPalace Praha",
      },
      // ── קניונים ──
      {
        name: "OC Spektrum",
        nameEn: "קניון ספקטרום",
        description:
          "קניון גדול ממש ליד המלון! חנויות אופנה, אלקטרוניקה, צעצועים, סופרמרקט ענק ואזור אוכל. מחירים טובים יותר מישראל. מושלם לקניות מזכרות, חטיפים צ׳כיים ומותגים בינלאומיים. הליכה של 5 דקות מהמלון.",
        category: "shopping",
        icon: "🛍️",
        address: "Čestlice (ליד המלון, 5 דק׳ הליכה)",
        mapQuery: "OC Spektrum Čestlice",
      },
      {
        name: "Obchodní Centrum Čestlice",
        nameEn: "מרכז מסחרי צ׳סטליצה",
        description:
          "מרכז מסחרי נוסף באזור עם חנויות, מסעדות ושירותים שונים. אפשר לשלב עם ביקור ב-OC Spektrum הסמוך לקניות אחר הצהריים מרוכזות.",
        category: "shopping",
        icon: "🏬",
        address: "Čestlice (ליד OC Spektrum)",
        mapQuery: "Obchodní Centrum Čestlice",
      },
      // ── מסעדות ──
      {
        name: "Ginza Sushi",
        nameEn: "גינזה סושי",
        description:
          "מסעדת סושי יפנית איכותית ממש באזור המלון. מגוון רחב של ניגירי, מאקי, סשימי ומנות יפניות חמות. אווירה נעימה ומחירים סבירים. מומלץ למי שמתגעגע לסושי טוב!",
        category: "restaurant",
        icon: "🍣",
        address: "Čestlice (ליד OC Spektrum)",
        mapQuery: "Ginza sushi Čestlice",
      },
      {
        name: "Ovocný Světozor",
        nameEn: "אובוצני סביטוזור – מיצים ופירות",
        description:
          "בר מיצים טבעיים, שייקים ומנות בריאות. מושלם להפסקת ביניים רעננה. מבחר גלידות, פירות טריים ושייקים טרופיים. אהוב על ילדים ומבוגרים כאחד.",
        category: "restaurant",
        icon: "🍹",
        address: "Čestlice (ליד OC Spektrum)",
        mapQuery: "Ovocný Světozor Čestlice",
      },
      {
        name: "WAGYU BBQ Čestlice",
        nameEn: "וואגיו ברביקיו",
        description:
          "מסעדת בשרים פרימיום! בשר וואגיו, סטייקים, צלעות ומנות ברביקיו מעושנות. חוויה קולינרית ברמה גבוהה. מתאים למבוגרים שרוצים ארוחה מיוחדת. יש גם תפריט ילדים.",
        category: "restaurant",
        icon: "🥩",
        address: "Čestlice",
        mapQuery: "WAGYU BBQ Čestlice",
      },
      {
        name: "Čestlická Veranda",
        nameEn: "צ׳סטליצקה ורנדה",
        description:
          "מסעדה צ׳כית מסורתית עם ורנדה חיצונית נעימה. מנות צ׳כיות קלאסיות: שניצל, גולאש, כנודלים ובירה צ׳כית מעולה. אווירה משפחתית ומחירים נוחים. מומלץ לטעום אוכל מקומי אותנטי!",
        category: "restaurant",
        icon: "🍺",
        address: "Čestlice",
        mapQuery: "Čestlická Veranda",
      },
      {
        name: "Žirafa Restaurant & Bistro",
        nameEn: "ז׳ירפה מסעדה וביסטרו",
        description:
          "מסעדה משפחתית ליד Funpark Giraffe. מנות אירופיות, פיצות, פסטות ותפריט ילדים עשיר. אפשר לשלב עם ביקור בפארק השעשועים – הילדים משחקים וההורים אוכלים!",
        category: "restaurant",
        icon: "🍝",
        address: "Čestlice (ליד Funpark Giraffe)",
        mapQuery: "Žirafa restaurant bistro Čestlice",
      },
      {
        name: "Hliněná Bašta",
        nameEn: "הלינינה באשטה – מסעדה כפרית",
        description:
          "מסעדה צ׳כית כפרית עם אווירה ביתית חמה. מתמחה במנות צ׳כיות מסורתיות מוגשות בכלי חרס. יש גן חיצוני גדול ומגרש משחקים לילדים. מושלם לארוחת צהריים משפחתית שקטה.",
        category: "restaurant",
        icon: "🏡",
        address: "ליד Čestlice",
        mapQuery: "Hliněná bašta",
      },
      {
        name: "Babiččina Zahrada",
        nameEn: "הגן של סבתא",
        description:
          "מסעדה עם גן ענק ואווירה כפרית. השם בצ׳כית: ״הגן של סבתא״. מנות ביתיות, בשרים על הגריל, סלטים ומנות עונתיות. יש מגרש משחקים ובעלי חיים – ילדים אוהבים! מומלץ בימים יפים.",
        category: "restaurant",
        icon: "🌻",
        address: "ליד Čestlice",
        mapQuery: "Babiččina zahrada",
      },
      {
        name: "U Fleků",
        nameEn: "או פלקו – בית בירה היסטורי",
        description:
          "בית בירה היסטורי שפועל ברציפות מאז 1499! אחד המקומות העתיקים ביותר בפראג. בירה כהה מבושלת במקום, מנות צ׳כיות כבדות ואווירה אותנטית. יש מופעים חיים. חוויה צ׳כית אמיתית!",
        category: "restaurant",
        icon: "🍻",
        address: "Křemencova 11, Praha 1 (במרכז פראג)",
        link: "https://en.ufleku.cz/",
        mapQuery: "U Fleků Prague",
      },
    ],
    tips: [
      "כל המקומות ביום הזה קרובים למלון (5-15 דק׳) חוץ מ-U Fleků שבמרכז פראג",
      "מומלץ: בוקר Funpark/Chocotopia + צהריים קניון + אחה״צ פארק מים",
      "להזמין מונית דרך Bolt או Uber – זול ומהיר בפראג",
      "פארק המים פתוח עד 22:00 – אפשר לחזור בערב",
    ],
  },

  // ─── DAY 5 ── 13 June ─── טיסה הביתה ───
  {
    id: 5,
    date: "13 ביוני 2026",
    title: "ארוחת בוקר + טיסה חזרה",
    subtitle: "להתראות פראג!",
    emoji: "👋",
    color: "from-rose-500 to-red-400",
    mapEmbedUrl: dayMapUrl(50.056, 14.42, 11),
    timeline: [
      {
        time: "07:00",
        title: "ארוחת בוקר אחרונה",
        description: "ארוחת בוקר אחרונה במלון – תהנו מכל רגע!",
        details:
          "הארוחה האחרונה בבופה העשיר. קחו את הזמן, אין לחץ עד 10:00.",
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
        title: "צ׳ק אאוט – Aquapalace Prague",
        description: "עזיבת חדרים + החזרת צמידים בקבלה",
        details:
          "אפשר להשאיר מזוודות באחסון המלון ולהמשיך ליהנות.",
        icon: "🔑",
        mapQuery: "Aquapalace Prague",
      },
      {
        time: "10:30",
        title: "זמן חופשי אחרון",
        description:
          "אפשר לנצל: פארק מים (עד 14:00), OC Spektrum, או סתם לנוח בלובי",
        icon: "🎯",
      },
      {
        time: "15:30",
        title: "הסעה לשדה התעופה",
        description: "יציאה מהמלון – חשוב להיות בלובי עם מזוודות עד 15:15!",
        details:
          "האוטובוס יוצא בדיוק ב-15:30. הנסיעה לוקחת כ-30 דקות.",
        icon: "🚌",
      },
      {
        time: "18:55",
        title: "טיסה – נמל התעופה ואצלב האוול",
        description: "TUS AIRWAYS U8461 | פראג → תל אביב | נחיתה 23:40",
        details:
          "טיסה של כ-4 שעות. מומלץ להכין חטיפים, אוזניות ומשחקים לילדים.",
        icon: "✈️",
        link: "/flights",
        linkLabel: "פרטי הטיסה",
        mapQuery: "Václav Havel Airport Prague",
      },
    ],
    tips: [
      "פארק מים – אפשר ליהנות עד 14:00 גם ביום העזיבה",
      "OC Spektrum הסמוך למלון – קניות אחרונות",
      "לא לשכוח: דרכונים, מטענים, מתאמי חשמל",
      "להגיע ללובי עם מזוודות עד 15:15!",
    ],
  },
];
