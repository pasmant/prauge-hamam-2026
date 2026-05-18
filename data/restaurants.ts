/**
 * טיפוס משותף למסעדות. הרשימה הפעילה לעמוד /restaurants נמצאת ב־`tourMapData.ts`
 * (כל המסעדות מהמפה).
 */
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
  image?: string;
  isHighlighted?: boolean;
  videoEmbed?: string;
}
