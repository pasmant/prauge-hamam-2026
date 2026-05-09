"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Lightbulb } from "lucide-react";
import { itinerary } from "@/data/itinerary";
import { notFound } from "next/navigation";

export default function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const dayId = parseInt(id);
  const day = itinerary.find((d) => d.id === dayId);

  if (!day) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back */}
      <Link
        href="/itinerary"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-aqua mb-6 transition-colors"
      >
        <ArrowRight className="w-4 h-4" />
        חזרה לתוכנית
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-l ${day.color} rounded-3xl p-6 text-white mb-8`}
      >
        <p className="text-sm opacity-80">יום {day.id} | {day.date}</p>
        <h1 className="text-3xl font-bold mt-1 flex items-center gap-3">
          <span className="text-3xl">{day.emoji}</span>
          {day.title}
        </h1>
        <p className="opacity-80 mt-1">{day.subtitle}</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute top-0 bottom-0 right-6 w-0.5 bg-slate-200" />

        <div className="space-y-0">
          {day.timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-4 pb-6"
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl z-10 border-2 border-slate-100">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-aqua bg-aqua-light px-2 py-0.5 rounded-full">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-xs text-aqua hover:underline mt-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {item.linkLabel || "מידע נוסף"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tips */}
      {day.tips && day.tips.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-amber-50 rounded-2xl p-5"
        >
          <h3 className="font-bold text-amber-700 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            טיפים ליום {day.id}
          </h3>
          <ul className="space-y-2">
            {day.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-amber-700">
                <span className="mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Navigation between days */}
      <div className="flex justify-between mt-8">
        {dayId > 1 ? (
          <Link
            href={`/day/${dayId - 1}`}
            className="flex items-center gap-1 text-sm text-aqua hover:underline"
          >
            <ArrowRight className="w-4 h-4" />
            יום {dayId - 1}
          </Link>
        ) : (
          <div />
        )}
        {dayId < 5 ? (
          <Link
            href={`/day/${dayId + 1}`}
            className="flex items-center gap-1 text-sm text-aqua hover:underline"
          >
            יום {dayId + 1}
            <ArrowRight className="w-4 h-4 rotate-180" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
