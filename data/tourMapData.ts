/**
 * כל המקומות במפה Google My Maps של הטיול (mid=1wg92j3t2nK4ztN_tVE--oFfclrVWRh8).
 * מסעדות וברים בלבד – לעמוד /restaurants.
 * אטרקציות (ללא מסעדות) – לעמוד /map.
 */

import type { Restaurant } from "./restaurants";

export const TOUR_MAP_VIEWER_URL =
  "https://www.google.com/maps/d/viewer?mid=1wg92j3t2nK4ztN_tVE--oFfclrVWRh8";

/** סינון מסעדות מהמפה */
export const tourMapRestaurantCategories = [
  { id: "all", label: "הכל" },
  { id: "center", label: "מרכז פראג" },
  { id: "nearHotel", label: "ליד המלון (Čestlice)" },
  { id: "kosher", label: "כשר" },
] as const;

/** מסעדות / אוכל מהמפה בלבד (לפי שכבות KML) */
export const tourMapRestaurants: Restaurant[] = [
  {
    id: "map-vytopna",
    name: "Výtopna Railway Restaurant",
    nameHe: "מסעדת הרכבות (Výtopna)",
    type: "צ׳כי / חוויה · יום 10.6",
    category: ["center", "kids", "czech"],
    rating: 4.6,
    recommendation:
      "מהמפה – יום 10.6. רכבות מיניאטוריות מגישות אוכל ושתייה לשולחן. חובה להזמין מקום מראש!",
    address: "Náměstí Republiky 5, 110 00 Praha 1",
    website: "https://www.vytopna.cz/en",
    image: "/globe.svg",
    isHighlighted: true,
  },
  {
    id: "map-heimishe",
    name: "Heimishe Trdelaich",
    nameHe: "היימיש Trdelaich – כשר",
    type: "כשר · טרדלניק · יום 10.6",
    category: ["center", "kosher", "desserts"],
    rating: 4.7,
    recommendation:
      "מהמפה – הרובע היהודי. Trdelník כשר וחנות מוצרים כשרים – נדיר בפראג!",
    address: "Široká 12, 110 00 Praha 1",
    image: "/globe.svg",
  },
  {
    id: "map-fatcat",
    name: "FAT CAT Old Town",
    nameHe: "FAT CAT Old Town",
    type: "בר / מסעדה · יום 11.6",
    category: ["center", "czech", "kids"],
    rating: 4.4,
    recommendation:
      "מהמפה – יום 11.6. ארוחת ערב ברחוב קרלובה ההיסטורי, אחרי הספרייה והשייט.",
    address: "Karlova 251/6, 110 00 Praha 1",
    image: "/globe.svg",
  },
  {
    id: "map-ginza",
    name: "Ginza Sushi",
    nameHe: "גינזה סושי",
    type: "יפני · יום 12.6",
    category: ["nearHotel"],
    rating: 4.3,
    recommendation: "מהמפה – יום חופשי ליד המלון (ליד OC Spektrum).",
    address: "Obchodní 125, 251 01 Čestlice",
    image: "/globe.svg",
  },
  {
    id: "map-ovocny",
    name: "Ovocný Světozor",
    nameHe: "אובוצני סביטוזור",
    type: "מיצים · בריאות · יום 12.6",
    category: ["nearHotel", "desserts"],
    rating: 4.2,
    recommendation: "מהמפה – שייקים, מיצים טבעיים וגלידות ליד הקניון.",
    address: "Obchodní 125, 251 01 Čestlice",
    image: "/globe.svg",
  },
  {
    id: "map-wagyu",
    name: "WAGYU BBQ Čestlice",
    nameHe: "וואגיו ברביקיו",
    type: "בשרים פרימיום · יום 12.6",
    category: ["nearHotel", "meat"],
    rating: 4.5,
    recommendation: "מהמפה – סטייקים וברביקיו באזור המלון.",
    address: "Obchodní 125, 251 01 Čestlice",
    image: "/globe.svg",
  },
  {
    id: "map-veranda",
    name: "Čestlická Veranda",
    nameHe: "צ׳סטליצקה ורנדה",
    type: "צ׳כי מקומי · יום 12.6",
    category: ["nearHotel", "czech"],
    rating: 4.3,
    recommendation: "מהמפה – מסעדה צ׳כית עם ורנדה באזור המלון.",
    address: "Čestlice",
    image: "/globe.svg",
  },
  {
    id: "map-zirafa",
    name: "Žirafa Restaurant & Bistro",
    nameHe: "ז׳ירפה – מסעדה וביסטרו",
    type: "משפחתי · יום 12.6",
    category: ["nearHotel", "italian", "kids"],
    rating: 4.2,
    recommendation: "מהמפה – ליד Funpark Giraffe, פיצות ופסטות.",
    address: "Čestlice",
    image: "/globe.svg",
  },
  {
    id: "map-hlinena",
    name: "Hliněná Bašta",
    nameHe: "הלינינה באשטה",
    type: "צ׳כי כפרי · יום 12.6",
    category: ["nearHotel", "czech"],
    rating: 4.4,
    recommendation: "מהמפה – מסעדה כפרית עם גן ומשחקים לילדים.",
    address: "Hliněná Bašta, Čestlice",
    image: "/globe.svg",
  },
  {
    id: "map-babiccina",
    name: "Babiččina Zahrada",
    nameHe: "באביצ׳ינה זהרדה (גן של סבתא)",
    type: "משפחתי · גן · יום 12.6",
    category: ["nearHotel", "czech", "kids"],
    rating: 4.3,
    recommendation: "מהמפה – מסעדה עם גן גדול ואווירה כפרית ליד המלון.",
    address: "Babiččina zahrada, Čestlice",
    image: "/globe.svg",
  },
  {
    id: "map-ufleku",
    name: "U Fleků",
    nameHe: "או פלקו",
    type: "בית בירה היסטורי · יום 12.6",
    category: ["nearHotel", "czech"],
    rating: 4.5,
    recommendation:
      "מהמפה – בית בירה מ-1499 במרכז פראג (אופציה ביום חופשי). בירה כהה מבושלת במקום.",
    address: "Křemencova 11, 110 00 Praha 1",
    website: "https://en.ufleku.cz/",
    image: "/globe.svg",
  },
];

export interface MapAttractionItem {
  id: string;
  nameHe: string;
  name: string;
  mapQuery: string;
}

export interface MapAttractionSection {
  id: string;
  title: string;
  icon: string;
  description?: string;
  items: MapAttractionItem[];
}

/** אטרקציות מהמפה בלבד (ללא מסעדות/ברים) */
export const mapAttractionSections: MapAttractionSection[] = [
  {
    id: "base",
    title: "שדה תעופה, מלון ופארק מים",
    icon: "✈️",
    description: "נקודות בסיס מהמפה (ימים 9, 12, 13)",
    items: [
      {
        id: "prg-airport",
        nameHe: "נמל התעופה ואצלב האוול (PRG)",
        name: "Václav Havel Airport Prague",
        mapQuery: "Václav Havel Airport Prague",
      },
      {
        id: "aquapalace",
        nameHe: "Aquapalace Prague",
        name: "Aquapalace Hotel & Water Park",
        mapQuery: "Aquapalace Prague Čestlice",
      },
    ],
  },
  {
    id: "day10-oldtown",
    title: "יום 10.6 – העיר העתיקה והמרכז",
    icon: "🏛️",
    items: [
      {
        id: "candy-miners",
        nameHe: "Candy Miners",
        name: "Candy Miners",
        mapQuery: "Candy Miners Prague Na Můstku",
      },
      {
        id: "havel-market",
        nameHe: "שוק האוול",
        name: "Havelské tržiště",
        mapQuery: "Havelské tržiště Prague",
      },
      {
        id: "kafka-head",
        nameHe: "פסל הראש המסתובב של קפקא",
        name: "Head of Franz Kafka",
        mapQuery: "Franz Kafka Head Statue Prague Quadrio",
      },
      {
        id: "lego",
        nameHe: "מוזיאון הלגו",
        name: "LEGO Museum Prague",
        mapQuery: "LEGO Museum Prague Národní",
      },
      {
        id: "levels",
        nameHe: "LEVELS Prague",
        name: "LEVELS Prague",
        mapQuery: "LEVELS Prague Národní",
      },
      {
        id: "casino-ambassador",
        nameHe: "Casino Ambassador",
        name: "Casino Ambassador Prague",
        mapQuery: "Casino Ambassador Prague Wenceslas Square",
      },
      {
        id: "man-hanging",
        nameHe: "האיש התלוי (פרויד)",
        name: "Man Hanging Out – David Černý",
        mapQuery: "Man Hanging Out David Cerny Prague Husova",
      },
      {
        id: "orloj",
        nameHe: "השעון האסטרונומי",
        name: "Prague Astronomical Clock",
        mapQuery: "Prague Astronomical Clock",
      },
      {
        id: "old-town-square",
        nameHe: "כיכר העיר העתיקה",
        name: "Old Town Square",
        mapQuery: "Old Town Square Prague",
      },
    ],
  },
  {
    id: "day10-jewish",
    title: "יום 10.6 – הרובע היהודי",
    icon: "✡️",
    items: [
      {
        id: "maisel",
        nameHe: "בית הכנסת מייזל",
        name: "Maisel Synagogue",
        mapQuery: "Maisel Synagogue Prague",
      },
      {
        id: "cemetery",
        nameHe: "בית הקברות היהודי העתיק",
        name: "Old Jewish Cemetery",
        mapQuery: "Old Jewish Cemetery Prague",
      },
      {
        id: "pinkas",
        nameHe: "בית הכנסת פינקס",
        name: "Pinkas Synagogue",
        mapQuery: "Pinkas Synagogue Prague",
      },
      {
        id: "town-hall",
        nameHe: "בית העירייה היהודי",
        name: "Jewish Town Hall",
        mapQuery: "Jewish Town Hall Prague Maiselova",
      },
      {
        id: "altneu",
        nameHe: "בית הכנסת הישן-חדש (אלטנוישול)",
        name: "Old New Synagogue",
        mapQuery: "Old New Synagogue Prague",
      },
      {
        id: "high",
        nameHe: "בית הכנסת הגבוה",
        name: "High Synagogue",
        mapQuery: "High Synagogue Prague",
      },
      {
        id: "kafka-monument",
        nameHe: "אנדרטת פרנץ קפקא",
        name: "Franz Kafka Monument",
        mapQuery: "Franz Kafka Monument Prague Dušní",
      },
      {
        id: "spanish",
        nameHe: "בית הכנסת הספרדי",
        name: "Spanish Synagogue",
        mapQuery: "Spanish Synagogue Prague",
      },
    ],
  },
  {
    id: "day11",
    title: "יום 11.6 – מצודה, גשר וסיור מים",
    icon: "🏰",
    items: [
      {
        id: "castle",
        nameHe: "מצודת פראג",
        name: "Prague Castle",
        mapQuery: "Prague Castle",
      },
      {
        id: "matthias",
        nameHe: "שער מטיאש",
        name: "Matthias Gate",
        mapQuery: "Matthias Gate Prague Castle",
      },
      {
        id: "lennon",
        nameHe: "קיר לנון",
        name: "Lennon Wall",
        mapQuery: "Lennon Wall Prague",
      },
      {
        id: "narrow",
        nameHe: "הסמטה הצרה ביותר בפראג",
        name: "Prague's Narrowest Alley",
        mapQuery: "Prague narrowest alley U Lužického semináře",
      },
      {
        id: "charles",
        nameHe: "גשר קארל",
        name: "Charles Bridge",
        mapQuery: "Charles Bridge Prague",
      },
      {
        id: "venice",
        nameHe: "שייט Prague Venice",
        name: "Prague Venice Boat Trip",
        mapQuery: "Prague Venice Boat Trip Křižovnické náměstí",
      },
      {
        id: "library",
        nameHe: "הספרייה הלאומית (קלמנטינום)",
        name: "National Library – Klementinum",
        mapQuery: "Klementinum National Library Prague",
      },
    ],
  },
  {
    id: "day12",
    title: "יום 12.6 – קניות ופנאי ליד המלון",
    icon: "🛍️",
    description: "ללא מסעדות – רק אטרקציות מהמפה",
    items: [
      {
        id: "spektrum",
        nameHe: "קניון OC Spektrum",
        name: "OC Spektrum Čestlice",
        mapQuery: "OC Spektrum Čestlice",
      },
      {
        id: "oc-cestlice",
        nameHe: "מרכז מסחרי Čestlice",
        name: "Obchodní Centrum Čestlice",
        mapQuery: "Obchodní Centrum Čestlice",
      },
      {
        id: "giraffe",
        nameHe: "Funpark Giraffe",
        name: "Funpark Giraffe",
        mapQuery: "Funpark Giraffe Čestlice",
      },
      {
        id: "farm",
        nameHe: "FarmaPalace",
        name: "FarmaPalace Praha",
        mapQuery: "FarmaPalace Praha",
      },
      {
        id: "choco",
        nameHe: "שוקוטופיה (מוזיאון שוקולד)",
        name: "Čokoládovna CHOCOTOPIA",
        mapQuery: "Čokoládovna CHOCOTOPIA Čestlice",
      },
    ],
  },
];
