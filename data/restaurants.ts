export interface Restaurant {
  id: string;
  name: string;
  nameHe: string;
  type: string;
  category: string[];
  rating: number;
  recommendation: string;
  address: string;
  website?: string;
  image: string;
  isHighlighted?: boolean;
  videoEmbed?: string;
}

export const restaurantCategories = [
  { id: "all", label: "הכל" },
  { id: "kids", label: "ילדים" },
  { id: "kosher", label: "כשר" },
  { id: "meat", label: "בשרים" },
  { id: "italian", label: "איטלקי" },
  { id: "czech", label: "צ׳כי מקומי" },
  { id: "desserts", label: "קינוחים" },
];

export const cityRestaurants: Restaurant[] = [
  {
    id: "vytopna",
    name: "Výtopna Railway Restaurant",
    nameHe: "מסעדת הרכבות",
    type: "צ׳כי / חוויה",
    category: ["kids", "czech"],
    rating: 4.5,
    recommendation: "חובה מוחלט! מסעדה שבה רכבות קטנות מביאות את האוכל והשתייה לשולחן. הילדים ישתגעו! חובה להזמין מקום מראש.",
    address: "Václavské nám. 56, 110 00 Nové Město, Praha",
    website: "https://www.vytopna.cz/en",
    image: "/images/restaurants/vytopna.jpg",
    isHighlighted: true,
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "dinitz",
    name: "Dinitz",
    nameHe: "דיניץ",
    type: "כשר",
    category: ["kosher", "meat"],
    rating: 4.3,
    recommendation: "מסעדה כשרה איכותית במרכז פראג. בשרים, סלטים ואוכל ישראלי. מומלץ מאוד למי ששומר כשרות.",
    address: "Bílkova 12, 110 00 Josefov, Praha",
    website: "https://dinitz.cz",
    image: "/images/restaurants/dinitz.jpg",
  },
  {
    id: "lokalkafe",
    name: "Lokal",
    nameHe: "לוקאל",
    type: "צ׳כי מקומי",
    category: ["czech", "meat"],
    rating: 4.4,
    recommendation: "מסעדה צ׳כית אותנטית עם אוכל מסורתי מעולה. הגולש והקנדלח מומלצים במיוחד. אווירה נהדרת!",
    address: "Dlouhá 33, 110 00 Staré Město, Praha",
    website: "https://lokal-dlouha.ambi.cz/en",
    image: "/images/restaurants/lokal.jpg",
  },
  {
    id: "pizzanuova",
    name: "Pizza Nuova",
    nameHe: "פיצה נובה",
    type: "איטלקי",
    category: ["italian", "kids"],
    rating: 4.2,
    recommendation: "פיצריה איטלקית מעולה ליד כיכר העיר העתיקה. מנות גדולות, פסטות טעימות, ומתאים מאוד לילדים.",
    address: "Revoluční 1, 110 00 Nové Město, Praha",
    website: "https://www.pizzanuova.ambi.cz/en",
    image: "/images/restaurants/pizzanuova.jpg",
  },
  {
    id: "creamcaramel",
    name: "Crème de la Crème",
    nameHe: "קרם דה לה קרם",
    type: "קינוחים",
    category: ["desserts", "kids"],
    rating: 4.6,
    recommendation: "קרפים, וופלים, גלידות ושוקולד – גן עדן למתוקים! מושלם לילדים ולמבוגרים.",
    address: "Husova 12, 110 00 Staré Město, Praha",
    image: "/images/restaurants/creme.jpg",
  },
  {
    id: "kantyna",
    name: "Kantýna",
    nameHe: "קנטינה",
    type: "בשרים",
    category: ["meat"],
    rating: 4.5,
    recommendation: "קצביה-מסעדה מעולה! בשר סטייק טרי, המבורגרים וארוחות בשריות.",
    address: "Politických vězňů 5, 110 00 Nové Město, Praha",
    website: "https://www.kantyna.ambi.cz/en",
    image: "/images/restaurants/kantyna.jpg",
  },
  {
    id: "cafe-savoy",
    name: "Café Savoy",
    nameHe: "קפה סבוי",
    type: "צ׳כי / קפה",
    category: ["czech", "desserts"],
    rating: 4.7,
    recommendation: "בית קפה היסטורי ומרהיב מ-1893. קינוחים יוצאי דופן, ארוחת בוקר מפוארת וקפה מעולה.",
    address: "Vítězná 124/5, 150 00 Malá Strana, Praha",
    website: "https://cafesavoy.ambi.cz/en",
    image: "/images/restaurants/savoy.jpg",
  },
];
