"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  Waves,
  Clock,
  UtensilsCrossed,
  CreditCard,
  ExternalLink,
} from "lucide-react";
import {
  hotelInfo,
  waterParkPalaces,
  waterParkHours,
  saunaWorld,
  hotelRestaurants,
  wristbandInfo,
} from "@/data/hotel";

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
      {icon}
      {children}
    </h2>
  );
}

export default function HotelPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Hotel className="w-8 h-8 text-aqua" />
          Aquapalace Hotel Prague
        </h1>
        <p className="text-slate-500 mb-4">{hotelInfo.description}</p>
        <a
          href={hotelInfo.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-aqua hover:underline text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          אתר המלון הרשמי
        </a>
      </motion.div>

      {/* Check-in / Meals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { label: "צ׳ק אין", value: hotelInfo.checkIn, emoji: "🔑" },
          { label: "צ׳ק אאוט", value: hotelInfo.checkOut, emoji: "🧳" },
          { label: "ארוחת בוקר", value: `${hotelInfo.breakfast.start}–${hotelInfo.breakfast.end}`, emoji: "🥐" },
          { label: "ארוחת ערב", value: "19:00–21:30", emoji: "🍽️" },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <span className="text-2xl block mb-1">{item.emoji}</span>
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="font-bold text-slate-800">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Breakfast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<span className="text-2xl">🥐</span>}>ארוחת בוקר</SectionTitle>
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-slate-500 mb-3">
            {hotelInfo.breakfast.start}–{hotelInfo.breakfast.end} | בופה עשיר
          </p>
          <div className="flex flex-wrap gap-2">
            {hotelInfo.breakfastItems.map((item) => (
              <span key={item} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Water Park */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<Waves className="w-7 h-7 text-cyan-500" />}>פארק המים</SectionTitle>
        <p className="text-slate-500 text-sm mb-4">
          פארק המים הגדול במרכז אירופה! 9,150 מ״ר, 24 מגלשות, יותר מ-1 ק״מ גלישה
        </p>

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

        {/* Palaces */}
        <div className="space-y-6">
          {waterParkPalaces.map((palace) => (
            <div key={palace.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-l from-cyan to-aqua p-4 text-white">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="text-xl">{palace.icon}</span>
                  {palace.nameHe}
                </h3>
                <p className="text-sm opacity-80">{palace.name}</p>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {palace.slides.map((slide) => (
                  <div key={slide.name} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <span className="text-xl">🎢</span>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">{slide.nameHe}</p>
                      <p className="text-xs text-slate-500">{slide.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sauna World */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<span className="text-2xl">🧖</span>}>עולם הסאונות</SectionTitle>
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
            <div key={area.name} className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-bold text-slate-700 mb-2">{area.name}</h4>
              <ul className="space-y-1">
                {area.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
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
            href="https://www.aquapalace.cz/en/sekce/saunovy_svet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-aqua hover:underline text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            מידע נוסף באתר הרשמי
          </a>
        </div>
      </motion.div>

      {/* Hotel Restaurants */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<UtensilsCrossed className="w-7 h-7 text-orange-500" />}>
          מסעדות במלון
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotelRestaurants.map((restaurant) => (
            <div key={restaurant.name} className="bg-white rounded-2xl p-4 shadow-sm">
              <h4 className="font-bold text-slate-800">{restaurant.nameHe}</h4>
              <p className="text-xs text-aqua">{restaurant.name}</p>
              <span className="inline-block bg-orange-50 text-orange-600 text-xs px-2 py-0.5 rounded-full mt-1 mb-2">
                {restaurant.type}
              </span>
              <p className="text-sm text-slate-600">{restaurant.description}</p>
              <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {restaurant.location}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <a
            href="https://www.aquapalace.cz/en/restaurace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-aqua hover:underline text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            כל המסעדות באתר הרשמי
          </a>
        </div>
      </motion.div>

      {/* Wristband */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionTitle icon={<CreditCard className="w-7 h-7 text-purple-500" />}>
          {wristbandInfo.title}
        </SectionTitle>
        <div className="bg-gradient-to-l from-purple-500 to-indigo-500 rounded-3xl p-6 text-white">
          <p className="mb-4">{wristbandInfo.description}</p>
          <div className="grid grid-cols-2 gap-3">
            {wristbandInfo.uses.map((use) => (
              <div key={use.label} className="bg-white/15 rounded-xl p-3 flex items-center gap-3">
                <span className="text-2xl">{use.icon}</span>
                <span className="font-medium text-sm">{use.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
}
