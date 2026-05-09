export const hotelInfo = {
  name: "Aquapalace Hotel Prague",
  website: "https://www.aquapalace.cz/en",
  checkIn: "15:00",
  checkOut: "10:00",
  breakfast: { start: "07:00", end: "10:30" },
  description:
    "Aquapalace Prague הוא מרכז חופשה משפחתי ענק הכולל את פארק המים הגדול במרכז אירופה על שטח של 9,150 מ״ר, עולם סאונות מפנק, מרכז ספא ויותר מ-24 מגלשות מים!",
  breakfastItems: ["ביצים", "מאפים", "פנקייקים", "פירות", "גבינות", "אזור ילדים"],
};

export interface WaterSlide {
  name: string;
  nameHe: string;
  palace: string;
  description: string;
  forKids: boolean;
}

export const waterParkPalaces = [
  {
    name: "Adventure Palace",
    nameHe: "ארמון ההרפתקאות",
    icon: "🎢",
    slides: [
      { name: "Crazy Tube", nameHe: "מגלשת הטירוף", description: "מגלשה ארוכה ומפותלת באורך 350 מטר – הארוכה בצ׳כיה!" },
      { name: "Spacebowl", nameHe: "ספייסבאול", description: "סחרור מהיר בצורת קערה – אדרנלין טהור" },
      { name: "Kamikaze", nameHe: "קמיקזה", description: "מגלשה תלולה במיוחד – לאמיצים בלבד" },
      { name: "Wild River", nameHe: "נהר פראי", description: "נהר פראי באורך 450 מטר שעובר דרך כל הפארק" },
      { name: "Magic Tube", nameHe: "מגלשת הקסם", description: "מגלשה עם אפקטי אור" },
      { name: "Twister", nameHe: "טוויסטר", description: "מגלשה מסתובבת" },
      { name: "Bodyslide", nameHe: "בודי סלייד", description: "מגלשת גוף מהירה" },
      { name: "Blue Slides", nameHe: "מגלשות כחולות", description: "מגלשות מהירות בכחול" },
      { name: "Magic Trio", nameHe: "מג׳יק טריו", description: "שלוש מגלשות זו לצד זו" },
      { name: "Orange Slide", nameHe: "מגלשה כתומה", description: "מגלשה מהירה בכתום" },
      { name: "Canyon", nameHe: "קניון מים", description: "נהר פראי פנימי" },
      { name: "Family Slide", nameHe: "מגלשה משפחתית", description: "מגלשה לכל המשפחה – אפשר לרדת ביחד!" },
    ],
  },
  {
    name: "Palace of Treasures",
    nameHe: "ארמון האוצרות",
    icon: "🏴‍☠️",
    slides: [
      { name: "Pirate Ship", nameHe: "ספינת פיראטים", description: "אטרקציית ספינה לילדים" },
      { name: "Sea Surf", nameHe: "גלי ים", description: "בריכת גלים" },
      { name: "Laser Show", nameHe: "מופע לייזר", description: "מופע לייזר ייחודי – לא תמצאו בשום מקום אחר!" },
      { name: "Water Cannons", nameHe: "תותחי מים", description: "תותחי מים לילדים" },
      { name: "VR Avatar Zone", nameHe: "אזור VR", description: "חוויית מציאות מדומה" },
      { name: "Toddler Pool", nameHe: "בריכת פעוטות", description: "מים רדודים לפעוטות" },
      { name: "Kids Paradise", nameHe: "גן עדן לילדים", description: "אזור משחקי מים ליד המגדלור" },
    ],
  },
  {
    name: "Palace of Relaxation",
    nameHe: "ארמון הרגיעה",
    icon: "🧘",
    slides: [
      { name: "Giant Whirlpools", nameHe: "ג׳קוזי ענק", description: "ג׳קוזים מדורגים ענקיים" },
      { name: "Lazy River", nameHe: "נהר שקט", description: "נהר איטי ורגוע לשחייה" },
      { name: "Swimming Pool", nameHe: "בריכת שחייה", description: "בריכת שחייה מקצועית" },
      { name: "Breakwater", nameHe: "שובר גלים", description: "אזור גלים רגועים" },
    ],
  },
];

export const waterParkHours = [
  { day: "ראשון–רביעי", hours: "10:00–20:00" },
  { day: "חמישי", hours: "10:00–22:00" },
  { day: "שישי–שבת", hours: "09:00–22:00" },
];

export const saunaWorld = {
  description:
    "עולם הסאונות של Aquapalace כולל 18 סוגי סאונות וחדרי חימום שונים, מחולקים ל-3 אזורים: סאונות פיניות, מרחצאות רומיות ואזור חיצוני. כולל בריכות קירור, ג׳קוזי ואזורי מנוחה.",
  areas: [
    {
      name: "סאונות פיניות",
      items: ["סאונה פינית", "סאונת בקתה", "סאונת בירוזה", "סאונת צמחים", "סאונת הר געש"],
    },
    {
      name: "מרחצאות רומיות",
      items: ["מרחץ אדים", "טפידריום", "מרחץ מלח", "לקוניום", "קלדריום"],
    },
    {
      name: "עולם אסייתי",
      items: ["סאונת זן", "ביו סאונה", "חדר הרפיה יפני", "גן יפני"],
    },
    {
      name: "אזור חיצוני",
      items: ["ג׳קוזי חיצוני", "בריכת קירור חיצונית", "סאונת אדמה"],
    },
    {
      name: "מתקני מנוחה",
      items: ["ג׳קוזי פנימי", "בריכת רגיעה", "בריכת קירור", "חדר הרפיה פיני"],
    },
  ],
  hours: [
    { day: "ראשון–שבת", hours: "10:00–23:00" },
    { day: "שישי–שבת", hours: "09:00–23:00" },
  ],
};

export const hotelRestaurants = [
  {
    name: "Cafe Clara",
    nameHe: "קפה קלרה",
    type: "קפה ומאפים",
    description: "בית קפה באולם הכניסה – קפה, עוגות ומאפים טריים",
    location: "לובי המלון",
  },
  {
    name: "Creative Pizza",
    nameHe: "פיצה יצירתית",
    type: "פיצה",
    description: "פיצות ייחודיות בתוספות מיוחדות",
    location: "אזור פארק המים",
  },
  {
    name: "Puzzle Restaurant",
    nameHe: "מסעדת פאזל",
    type: "אוכל בינלאומי",
    description: "מסעדה מרכזית עם מגוון מנות – מתאים למשפחות",
    location: "קומה 1, בין ארמון ההרפתקאות לארמון האוצרות",
  },
  {
    name: "Revontuli Sauna Restaurant",
    nameHe: "מסעדת הסאונה",
    type: "אוכל בריאות",
    description: "מסעדה באזור הסאונות – סלטים, מרקים ואוכל קל",
    location: "אזור עולם הסאונות",
  },
  {
    name: "Ice Bar Gelateria",
    nameHe: "בר גלידה",
    type: "גלידה וקינוחים",
    description: "גלידות, שייקים ופינוקים קרים",
    location: "ליד בור הצלילה בארמון הרגיעה",
  },
  {
    name: "Paradise Cafe",
    nameHe: "קפה פרדייס",
    type: "קפה ושתייה",
    description: "קפה על המרפסת הפנימית של ארמון הרגיעה",
    location: "ארמון הרגיעה",
  },
  {
    name: "Coral Bar",
    nameHe: "בר קורל",
    type: "בר",
    description: "בר בבריכה החיצונית – משקאות וחטיפים",
    location: "אזור חיצוני",
  },
  {
    name: "Pool Bar",
    nameHe: "בר הבריכה",
    type: "בר",
    description: "משקאות קרים ליד הבריכה",
    location: "פארק המים",
  },
];

export const wristbandInfo = {
  title: "צמיד המלון",
  description: "בזמן השהות במלון תקבלו צמיד דיגיטלי שמשמש לכל דבר:",
  uses: [
    { icon: "🏊", label: "כניסה לפארק המים" },
    { icon: "🍽️", label: "תשלום במסעדות" },
    { icon: "🚪", label: "פתיחת דלת החדר" },
    { icon: "🔐", label: "לוקרים ואחסון" },
  ],
};
