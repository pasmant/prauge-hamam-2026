"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Lightbulb,
  MapPin,
  Users,
  Navigation,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Utensils,
  Sparkles,
} from "lucide-react";
import { itinerary, type FreeDayOption } from "@/data/itinerary";
import { notFound } from "next/navigation";

const categoryMeta: Record<
  FreeDayOption["category"],
  { label: string; icon: React.ReactNode; color: string }
> = {
  attraction: {
    label: "אטרקציות ופעילויות",
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-purple-600",
  },
  shopping: {
    label: "קניונים וקניות",
    icon: <ShoppingBag className="w-5 h-5" />,
    color: "text-blue-600",
  },
  restaurant: {
    label: "מסעדות ואוכל",
    icon: <Utensils className="w-5 h-5" />,
    color: "text-orange-600",
  },
};

export default function DayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const dayId = parseInt(id);
  const day = itinerary.find((d) => d.id === dayId);
  const [expandedTimeline, setExpandedTimeline] = useState<number[]>([]);
  const [expandedOptions, setExpandedOptions] = useState<number[]>([]);

  if (!day) return notFound();

  const toggleTimeline = (idx: number) =>
    setExpandedTimeline((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );

  const toggleOption = (idx: number) =>
    setExpandedOptions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );

  const groupedOptions = day.freeDayOptions
    ? (["attraction", "shopping", "restaurant"] as const).reduce(
        (acc, cat) => {
          const items = day.freeDayOptions!.filter((o) => o.category === cat);
          if (items.length) acc.push({ category: cat, items });
          return acc;
        },
        [] as { category: FreeDayOption["category"]; items: FreeDayOption[] }[]
      )
    : [];

  let globalOptionIdx = 0;

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
        <p className="text-sm opacity-80">
          יום {day.id} | {day.date}
        </p>
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
              <div className="flex-shrink-0 w-12 flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl z-10 border-2 border-slate-100">
                  {item.icon}
                </div>
              </div>

              <div className="flex-1 bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => item.details && toggleTimeline(i)}
                  className="w-full text-right p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-aqua bg-aqua-light px-2 py-0.5 rounded-full">
                      {item.time}
                    </span>
                    {item.details && (
                      <span className="mr-auto">
                        {expandedTimeline.includes(i) ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {item.description}
                  </p>
                </button>

                {item.details && expandedTimeline.includes(i) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-4 pb-4 border-t border-slate-100"
                  >
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {item.details}
                    </p>
                  </motion.div>
                )}

                {(item.link || item.mapQuery) && (
                  <div className="flex items-center gap-3 px-4 pb-3">
                    {item.link && (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-1 text-xs text-aqua hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {item.linkLabel || "מידע נוסף"}
                      </a>
                    )}
                    {item.mapQuery && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:underline"
                      >
                        <Navigation className="w-3 h-3" />
                        נווט לכאן
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Free day options grouped by category */}
      {groupedOptions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-purple-500" />
            מקומות מומלצים ליום החופשי
          </h2>

          {groupedOptions.map((group) => {
            const meta = categoryMeta[group.category];
            return (
              <div key={group.category} className="mb-6">
                <h3
                  className={`text-base font-bold mb-3 flex items-center gap-2 ${meta.color}`}
                >
                  {meta.icon}
                  {meta.label}
                </h3>
                <div className="space-y-2">
                  {group.items.map((option) => {
                    const idx = globalOptionIdx++;
                    return (
                      <motion.div
                        key={option.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggleOption(idx)}
                          className="w-full text-right p-4 flex items-start gap-3"
                        >
                          <span className="text-2xl flex-shrink-0 mt-0.5">
                            {option.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-800 text-sm">
                              {option.name}
                            </h4>
                            <p className="text-xs text-slate-400">
                              {option.nameEn}
                            </p>
                            {!expandedOptions.includes(idx) && (
                              <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                                {option.description}
                              </p>
                            )}
                          </div>
                          <span className="flex-shrink-0 mt-1">
                            {expandedOptions.includes(idx) ? (
                              <ChevronUp className="w-4 h-4 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}
                          </span>
                        </button>

                        {expandedOptions.includes(idx) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="px-4 pb-4 border-t border-slate-100"
                          >
                            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                              {option.description}
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{option.address}</span>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                              {option.link && (
                                <a
                                  href={option.link}
                                  target={
                                    option.link.startsWith("http")
                                      ? "_blank"
                                      : undefined
                                  }
                                  rel={
                                    option.link.startsWith("http")
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  className="inline-flex items-center gap-1.5 text-xs bg-aqua-light text-aqua px-3 py-1.5 rounded-full font-medium hover:bg-aqua hover:text-white transition-colors"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  אתר רשמי
                                </a>
                              )}
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(option.mapQuery)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full font-medium hover:bg-emerald-600 hover:text-white transition-colors"
                              >
                                <Navigation className="w-3 h-3" />
                                נווט לכאן
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Map embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-aqua" />
          מפת היום
        </h2>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <iframe
            src={day.mapEmbedUrl}
            className="w-full h-[350px] md:h-[450px] border-0"
            title={`מפת יום ${day.id} – ${day.title}`}
            loading="lazy"
            allowFullScreen
          />
        </div>
        <div className="mt-2 text-center">
          <a
            href="https://www.google.com/maps/d/viewer?mid=1wg92j3t2nK4ztN_tVE--oFfclrVWRh8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-aqua hover:underline"
          >
            <ExternalLink className="w-3 h-3" />
            פתיחת המפה המלאה
          </a>
        </div>
      </motion.div>

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
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-amber-700"
              >
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
