"use client";

import { motion } from "framer-motion";
import { Map, ExternalLink, Navigation } from "lucide-react";
import { MAIN_MAP_EMBED } from "@/data/itinerary";
import {
  mapAttractionSections,
  TOUR_MAP_VIEWER_URL,
} from "@/data/tourMapData";

export default function MapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Map className="w-8 h-8 text-aqua" />
          מפת האטרקציות
        </h1>
        <p className="text-slate-500 mb-6">
          רק המקומות שמסומנים במפת Google My Maps של הטיול – מסודרים לפי נושאים
          (ללא מסעדות; לרשימת מסעדות עברו לטאב מסעדות)
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
          title="מפת הטיול – פראג 2026"
          loading="lazy"
          allowFullScreen
        />
      </motion.div>

      <div className="mt-4 text-center">
        <a
          href={TOUR_MAP_VIEWER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-aqua hover:underline text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          פתיחת המפה המלאה ב-Google Maps
        </a>
      </div>

      <h2 className="text-lg font-bold text-slate-800 mt-10 mb-4">
        אטרקציות לפי נושאים (מהמפה)
      </h2>

      <div className="space-y-8">
        {mapAttractionSections.map((section, si) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: si * 0.05 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
          >
            <div className="bg-gradient-to-l from-slate-50 to-white px-4 py-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <span className="text-xl" aria-hidden>
                  {section.icon}
                </span>
                {section.title}
              </h3>
              {section.description && (
                <p className="text-xs text-slate-500 mt-1">{section.description}</p>
              )}
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {section.items.map((place) => (
                <a
                  key={place.id}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-aqua/5 transition-colors group"
                >
                  <span className="text-lg shrink-0 mt-0.5" aria-hidden>
                    📍
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-medium text-slate-800 text-sm block group-hover:text-aqua">
                      {place.nameHe}
                    </span>
                    <span className="text-xs text-slate-400 block truncate">
                      {place.name}
                    </span>
                  </span>
                  <Navigation className="w-4 h-4 text-slate-300 group-hover:text-aqua shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
