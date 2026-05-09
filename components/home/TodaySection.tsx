"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ChevronLeft } from "lucide-react";
import { itinerary } from "@/data/itinerary";

export function TodaySection() {
  const tripStart = new Date("2026-06-09");
  const now = new Date();
  const diffDays = Math.floor(
    (now.getTime() - tripStart.getTime()) / (1000 * 60 * 60 * 24)
  );

  const todayIdx = diffDays >= 0 && diffDays < 5 ? diffDays : 0;
  const today = itinerary[todayIdx];

  return (
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href={`/day/${today.id}`} className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-l ${today.color} rounded-3xl p-6 text-white shadow-lg`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                <span className="text-sm font-medium opacity-90">
                  תוכנית להיום
                </span>
              </div>
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold mb-1">
              {today.emoji} יום {today.id} – {today.title}
            </h3>
            <p className="text-sm opacity-80">{today.date}</p>
            <div className="mt-4 space-y-2">
              {today.timeline.slice(0, 3).map((item) => (
                <div
                  key={item.time}
                  className="flex items-center gap-3 bg-white/15 rounded-xl px-3 py-2"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.time}</span>
                  <span className="text-sm">{item.title}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs opacity-70 text-center">
              לחצו לצפייה בתוכנית המלאה →
            </p>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
