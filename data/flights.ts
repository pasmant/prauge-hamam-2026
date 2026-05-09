export interface Flight {
  id: string;
  direction: "outbound" | "return";
  directionLabel: string;
  airline: string;
  flightNumber: string;
  date: string;
  dateEn: string;
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  departureCityEn: string;
  departureAirport: string;
  arrivalCity: string;
  arrivalCityEn: string;
  arrivalAirport: string;
  status: string;
  reference: string;
  terminal?: string;
  gate?: string;
}

export const flights: Flight[] = [
  {
    id: "outbound",
    direction: "outbound",
    directionLabel: "הלוך",
    airline: "ISRAIR BSP",
    flightNumber: "6H763",
    date: "יום שלישי, 9 ביוני 2026",
    dateEn: "2026-06-09",
    departureTime: "07:10",
    arrivalTime: "10:15",
    departureCity: "תל אביב",
    departureCityEn: "Tel Aviv",
    departureAirport: "נתב״ג (TLV)",
    arrivalCity: "פראג",
    arrivalCityEn: "Prague",
    arrivalAirport: "Prague Airport (PRG)",
    status: "Confirmed",
    reference: "4371469",
    terminal: "3",
  },
  {
    id: "return",
    direction: "return",
    directionLabel: "חזור",
    airline: "TUS AIRWAYS",
    flightNumber: "U8461",
    date: "שבת, 13 ביוני 2026",
    dateEn: "2026-06-13",
    departureTime: "18:55",
    arrivalTime: "23:40",
    departureCity: "פראג",
    departureCityEn: "Prague",
    departureAirport: "Prague Airport (PRG)",
    arrivalCity: "תל אביב",
    arrivalCityEn: "Tel Aviv",
    arrivalAirport: "נתב״ג (TLV)",
    status: "Confirmed",
    reference: "50920544",
    terminal: "1",
  },
];

export const airportInfo = [
  {
    name: "נמל התעופה בן גוריון (נתב״ג)",
    code: "TLV",
    tips: [
      "להגיע לפחות 3 שעות לפני ההמראה",
      "טרמינל 3 – טיסות בינלאומיות",
      "נקודת מפגש: אולם הנוסעים הראשי, ליד לוח הטיסות",
    ],
  },
  {
    name: "Prague Václav Havel Airport",
    code: "PRG",
    tips: [
      "טרמינל 1 – טיסות מחוץ לשנגן",
      "שירות הסעות מאורגן למלון",
      "חלפן כספים בקומת הנחיתה",
    ],
  },
];
