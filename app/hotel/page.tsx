"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  Waves,
  Clock,
  UtensilsCrossed,
  CreditCard,
  ExternalLink,
  MapPin,
  Info,
  ChevronDown,
  ChevronUp,
  Navigation,
  Coffee,
} from "lucide-react";
import {
  hotelInfo,
  waterParkPalaces,
  waterParkExtras,
  waterParkHours,
  saunaWorld,
  hotelRestaurants,
  waterParkBars,
  wristbandInfo,
} from "@/data/hotel";
import { useState } from "react";

function SectionTitle({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
      {icon}
      {children}
    </h2>
  );
}

function CollapsibleSection({
  icon,
  title,
  defaultOpen = false,
  gradient,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  defaultOpen?: boolean;
  gradient: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-right ${gradient} p-4 text-white flex items-center justify-between`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="p-4"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function HotelPage() {
  const [expandedPalace, setExpandedPalace] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Hotel className="w-8 h-8 text-aqua" />
          Aquapalace Hotel Prague
        </h1>
        <p className="text-sm text-aqua font-medium mb-1">
          {hotelInfo.stars} | {hotelInfo.rooms} חדרים
        </p>
        <p className="text-slate-500 mb-2">{hotelInfo.description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={hotelInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-aqua hover:underline text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            אתר המלון הרשמי
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Aquapalace+Hotel+Prague"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-600 hover:underline text-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            נווט למלון
          </a>
        </div>
      </motion.div>

      {/* Quick info cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { label: "צ׳ק אין", value: hotelInfo.checkIn, emoji: "🔑" },
          { label: "צ׳ק אאוט", value: hotelInfo.checkOut, emoji: "🧳" },
          {
            label: "ארוחת בוקר",
            value: hotelInfo.breakfastInfo.hours,
            emoji: "🥐",
          },
          { label: "WiFi", value: "חינם!", emoji: "📶" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-2xl p-4 shadow-sm text-center"
          >
            <span className="text-2xl block mb-1">{item.emoji}</span>
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="font-bold text-slate-800 text-sm">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Important info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<Info className="w-6 h-6 text-blue-500" />}>
          מידע חשוב לשהייה
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {hotelInfo.importantInfo.map((info) => (
            <div
              key={info.title}
              className="bg-white rounded-xl p-3 shadow-sm flex items-start gap-3"
            >
              <span className="text-xl flex-shrink-0">{info.icon}</span>
              <div>
                <p className="font-bold text-sm text-slate-800">
                  {info.title}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {info.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Wristband / Chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle
          icon={<CreditCard className="w-7 h-7 text-purple-500" />}
        >
          {wristbandInfo.title}
        </SectionTitle>
        <div className="bg-gradient-to-l from-purple-500 to-indigo-500 rounded-3xl p-6 text-white">
          <p className="mb-4 text-sm leading-relaxed">
            {wristbandInfo.description}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {wristbandInfo.uses.map((use) => (
              <div
                key={use.label}
                className="bg-white/15 rounded-xl p-3 flex items-center gap-3"
              >
                <span className="text-2xl">{use.icon}</span>
                <span className="font-medium text-sm">{use.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ═══ Breakfast ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<span className="text-2xl">🥐</span>}>
          ארוחת בוקר – {hotelInfo.breakfastInfo.restaurant}
        </SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-600 mb-2">
            {hotelInfo.breakfastInfo.description}
          </p>
          <p className="text-sm text-aqua font-medium mb-3">
            שעות: {hotelInfo.breakfastInfo.hours} | בסגנון בופה
          </p>
          <div className="flex flex-wrap gap-2">
            {hotelInfo.breakfastItems.map((item) => (
              <span
                key={item}
                className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ═══ Restaurants & Bars — collapsible ═══ */}
      <CollapsibleSection
        icon={<UtensilsCrossed className="w-6 h-6" />}
        title="מסעדות ובארים"
        defaultOpen={false}
        gradient="bg-gradient-to-l from-orange-500 to-amber-500"
      >
        <h3 className="font-bold text-slate-700 mb-3">מסעדות ראשיות</h3>
        <div className="space-y-3 mb-6">
          {hotelRestaurants.map((restaurant) => (
            <a
              key={restaurant.name}
              href={restaurant.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-50 rounded-2xl p-4 hover:bg-orange-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-slate-800">
                    {restaurant.nameHe}
                  </h4>
                  <span className="inline-block bg-orange-50 text-orange-600 text-xs px-2 py-0.5 rounded-full mt-1">
                    {restaurant.type}
                  </span>
                </div>
                {restaurant.isBreakfast && (
                  <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-lg font-medium">
                    🥐 ארוחת בוקר כאן
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 mt-2">
                {restaurant.description}
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {restaurant.hours}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {restaurant.location}
                </span>
              </div>
            </a>
          ))}
        </div>

        <h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
          <Coffee className="w-4 h-4" />
          בארים וקפה בפארק המים
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {waterParkBars.map((bar) => (
            <div key={bar.name} className="bg-slate-50 rounded-xl p-3">
              <p className="font-bold text-xs text-slate-800">{bar.nameHe}</p>
              <p className="text-[11px] text-slate-400">{bar.location}</p>
              <p className="text-xs text-slate-500 mt-1">{bar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <a
            href="https://www.aquapalacehotel.cz/en/restaurants-bars"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-aqua hover:underline text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            כל המסעדות באתר הרשמי
          </a>
        </div>
      </CollapsibleSection>

      {/* ═══ Water Park ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<Waves className="w-7 h-7 text-cyan-500" />}>
          פארק המים
        </SectionTitle>
        <p className="text-slate-500 text-sm mb-2">
          12 מגלשות (עד 250 מ׳), נהר פראי, בריכת גלים, כיפת אלמוגים, בור
          צלילה ועוד!
        </p>
        <a
          href="https://www.aquapalacehotel.cz/en/water-world"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-aqua hover:underline text-sm mb-4"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          לכל הפרטים באתר הרשמי
        </a>

        {/* Hours */}
        <div className="bg-cyan-50 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-cyan-600" />
            <span className="font-semibold text-cyan-700">שעות פתיחה</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {waterParkHours.map((h) => (
              <div key={h.day} className="text-sm text-cyan-700">
                <span className="font-medium">{h.day}:</span> {h.hours}
              </div>
            ))}
          </div>
        </div>

        {/* Water park map */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-l from-cyan to-aqua p-3 text-white flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <h3 className="font-bold text-sm">מפת פארק המים</h3>
          </div>
          <a
            href="/mapa-aquapark.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-4 text-center">
              <div className="bg-cyan-50 rounded-xl p-6 flex flex-col items-center gap-3">
                <span className="text-4xl">🗺️</span>
                <p className="text-sm font-bold text-slate-700">
                  לחצו לפתיחת מפת הפארק (PDF)
                </p>
                <p className="text-xs text-slate-500">
                  מפה מלאה עם כל המגלשות, הבריכות, המסעדות והשירותים
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Palaces – collapsible */}
        <div className="space-y-3">
          {waterParkPalaces.map((palace, pIdx) => (
            <div
              key={palace.name}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedPalace(expandedPalace === pIdx ? null : pIdx)
                }
                className="w-full text-right"
              >
                <div className="bg-gradient-to-l from-cyan to-aqua p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold flex items-center gap-2">
                      <span className="text-xl">{palace.icon}</span>
                      {palace.nameHe}
                    </h3>
                    <p className="text-xs opacity-80">{palace.name}</p>
                  </div>
                  {expandedPalace === pIdx ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedPalace === pIdx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                >
                  <p className="text-sm text-slate-600 px-4 pt-3">
                    {palace.description}
                  </p>
                  <div className="p-3 space-y-2">
                    {palace.attractions.map((attr) => (
                      <a
                        key={attr.name}
                        href={attr.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-cyan-50 transition-colors group"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-aqua-light rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img
                            src={attr.imageUrl}
                            alt={attr.nameHe}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              target.parentElement!.innerHTML =
                                '<span class="text-2xl">🎢</span>';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-slate-800">
                            {attr.nameHe}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {attr.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                            {attr.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-aqua flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══ Extra attractions — collapsible ═══ */}
      <CollapsibleSection
        icon={<span className="text-xl">🌊</span>}
        title="אטרקציות נוספות בפארק"
        defaultOpen={false}
        gradient="bg-gradient-to-l from-cyan-600 to-teal-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {waterParkExtras.map((attr) => (
            <a
              key={attr.name}
              href={attr.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 rounded-2xl overflow-hidden hover:bg-cyan-50 transition-colors group"
            >
              <div className="h-24 bg-gradient-to-br from-cyan-100 to-aqua-light flex items-center justify-center overflow-hidden">
                <img
                  src={attr.imageUrl}
                  alt={attr.nameHe}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<span class="text-3xl">🌊</span>';
                  }}
                />
              </div>
              <div className="p-3">
                <p className="font-bold text-sm text-slate-800">
                  {attr.nameHe}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                  {attr.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </CollapsibleSection>

      {/* ═══ Sauna World — collapsible ═══ */}
      <CollapsibleSection
        icon={<span className="text-xl">🧖</span>}
        title="עולם הסאונות"
        defaultOpen={false}
        gradient="bg-gradient-to-l from-amber-600 to-orange-500"
      >
        <p className="text-slate-500 text-sm mb-4">{saunaWorld.description}</p>

        <div className="bg-amber-50 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-amber-700">שעות פתיחה</span>
          </div>
          {saunaWorld.hours.map((h) => (
            <p key={h.day} className="text-sm text-amber-700">
              <span className="font-medium">{h.day}:</span> {h.hours}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {saunaWorld.areas.map((area) => (
            <div key={area.name} className="bg-slate-50 rounded-2xl p-4">
              <h4 className="font-bold text-slate-700 mb-2">{area.name}</h4>
              <ul className="space-y-1">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <a
            href="https://www.aquapalacehotel.cz/en/aquapalace-prague-wellness-and-balneo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-aqua hover:underline text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            מידע נוסף באתר הרשמי
          </a>
        </div>
      </CollapsibleSection>
    </div>
  );
}
