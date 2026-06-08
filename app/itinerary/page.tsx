"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ChevronLeft } from "lucide-react";
import { itinerary } from "@/data/itinerary";
import { DownloadItineraryPdfButton } from "@/components/itinerary/DownloadItineraryPdfButton";

export default function ItineraryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <CalendarDays className="w-8 h-8 text-green-500" />
          תוכנית הטיול
        </h1>
        <p className="text-slate-500 mb-4">9–13 ביוני 2026 | 5 ימים בפראג</p>
      </motion.div>

      <DownloadItineraryPdfButton />

      <div className="space-y-4">
        {itinerary.map((day, i) => (
          <motion.div
            key={day.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/day/${day.id}`} className="block group">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
                <div className={`bg-gradient-to-l ${day.color} p-5 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">יום {day.id} | {day.date}</p>
                      <h2 className="text-xl font-bold mt-1 flex items-center gap-2">
                        <span className="text-2xl">{day.emoji}</span>
                        {day.title}
                      </h2>
                      <p className="text-sm opacity-80 mt-1">{day.subtitle}</p>
                    </div>
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {day.timeline.slice(0, 4).map((item) => (
                      <span
                        key={item.time}
                        className="inline-flex items-center gap-1 bg-slate-50 text-slate-600 text-xs px-3 py-1 rounded-full"
                      >
                        <span>{item.icon}</span>
                        {item.title}
                      </span>
                    ))}
                    {day.timeline.length > 4 && (
                      <span className="text-xs text-slate-400 px-2 py-1">
                        +{day.timeline.length - 4} עוד...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
