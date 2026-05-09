"use client";

import { motion } from "framer-motion";
import { Map, ExternalLink, Navigation } from "lucide-react";
import { MAIN_MAP_EMBED } from "@/data/itinerary";

const quickLocations = [
  {
    name: "Aquapalace Hotel",
    emoji: "🏨",
    query: "Aquapalace Hotel Prague",
  },
  {
    name: "כיכר העיר העתיקה",
    emoji: "🏛️",
    query: "Old Town Square Prague",
  },
  { name: "גשר קארל", emoji: "🌉", query: "Charles Bridge Prague" },
  { name: "מצודת פראג", emoji: "🏰", query: "Prague Castle" },
  { name: "גבעת פטרין", emoji: "🏔️", query: "Petrin Hill Prague" },
  {
    name: "Výtopna Restaurant",
    emoji: "🚂",
    query: "Vytopna Railway Restaurant Prague",
  },
  { name: "גן החיות", emoji: "🦁", query: "Prague Zoo" },
  { name: "מוזיאון לגו", emoji: "🧱", query: "LEGO Museum Prague" },
  {
    name: "Centrum Chodov",
    emoji: "🛍️",
    query: "Centrum Chodov Prague",
  },
];

export default function MapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Map className="w-8 h-8 text-aqua" />
          מפת הטיול
        </h1>
        <p className="text-slate-500 mb-6">
          כל האטרקציות, המסעדות והמקומות המומלצים במפה אחת
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl shadow-md overflow-hidden"
      >
        <iframe
          src={MAIN_MAP_EMBED}
          className="w-full h-[60vh] md:h-[70vh] border-0"
          title="מפת הטיול – משפחת חמם פראג 2026"
          loading="lazy"
          allowFullScreen
        />
      </motion.div>

      <div className="mt-4 text-center">
        <a
          href="https://www.google.com/maps/d/viewer?mid=1wg92j3t2nK4ztN_tVE--oFfclrVWRh8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-aqua hover:underline text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          פתיחת המפה המלאה ב-Google Maps
        </a>
      </div>

      {/* Quick location cards */}
      <h2 className="text-lg font-bold text-slate-800 mt-8 mb-3">
        ניווט מהיר
      </h2>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-3">
        {quickLocations.map((place) => (
          <a
            key={place.name}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-3 md:p-4 shadow-sm text-center hover:shadow-md transition-shadow"
          >
            <span className="text-2xl md:text-3xl block mb-1 md:mb-2">
              {place.emoji}
            </span>
            <span className="text-xs md:text-sm font-medium text-slate-700 leading-tight block">
              {place.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
