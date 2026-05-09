export interface PackingCategory {
  id: string;
  name: string;
  emoji: string;
  items: PackingItem[];
}

export interface PackingItem {
  id: string;
  label: string;
}

export const packingList: PackingCategory[] = [
  {
    id: "documents",
    name: "מסמכים חשובים",
    emoji: "📄",
    items: [
      { id: "passport", label: "דרכון (בתוקף!)" },
      { id: "tickets", label: "כרטיסי טיסה" },
      { id: "insurance", label: "ביטוח נסיעות" },
      { id: "hotel-confirmation", label: "אישור הזמנת מלון" },
      { id: "id-copies", label: "צילום דרכון (גיבוי בטלפון)" },
    ],
  },
  {
    id: "kids",
    name: "ילדים",
    emoji: "👶",
    items: [
      { id: "kids-swimsuit", label: "בגדי ים" },
      { id: "kids-flipflops", label: "כפכפים" },
      { id: "kids-diapers", label: "טיטולים (לקטנים)" },
      { id: "kids-games", label: "משחקים לדרך" },
      { id: "kids-snacks", label: "חטיפים" },
      { id: "kids-clothes", label: "בגדים לשינוי (3-4 סטים)" },
      { id: "kids-jacket", label: "ז׳קט קל" },
      { id: "kids-hat", label: "כובע" },
      { id: "kids-sunscreen", label: "קרם הגנה" },
      { id: "kids-shoes", label: "נעלי הליכה נוחות" },
    ],
  },
  {
    id: "adults",
    name: "מבוגרים",
    emoji: "🧑",
    items: [
      { id: "charger", label: "מטען טלפון" },
      { id: "powerbank", label: "סוללת גיבוי (פאוור בנק)" },
      { id: "adapter", label: "מתאם חשמל (אירופי)" },
      { id: "meds", label: "תרופות אישיות" },
      { id: "glasses", label: "משקפי שמש" },
      { id: "wallet", label: "ארנק + כרטיס אשראי" },
      { id: "cash", label: "מזומן (קרונות צ׳כיות)" },
      { id: "clothes", label: "בגדים ל-5 ימים" },
      { id: "jacket", label: "ז׳קט / סוודר לערב" },
      { id: "comfy-shoes", label: "נעלי הליכה נוחות" },
    ],
  },
  {
    id: "waterpark",
    name: "פארק מים",
    emoji: "🏊",
    items: [
      { id: "towels", label: "מגבות (או לשכור במלון)" },
      { id: "water-shoes", label: "נעלי מים" },
      { id: "goggles", label: "משקפי שחייה" },
      { id: "swimsuit2", label: "בגד ים נוסף" },
      { id: "waterproof-phone", label: "כיסוי עמיד למים לטלפון" },
      { id: "swim-diapers", label: "טיטולי שחייה (לתינוקות)" },
    ],
  },
];
