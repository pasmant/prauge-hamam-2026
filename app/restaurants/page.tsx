"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed,
  Star,
  MapPin,
  Navigation,
  ExternalLink,
  Filter,
} from "lucide-react";
import { cityRestaurants, restaurantCategories } from "@/data/restaurants";

export default function RestaurantsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? cityRestaurants
      : cityRestaurants.filter((r) => r.category.includes(activeCategory));

  const highlighted = cityRestaurants.find((r) => r.isHighlighted);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-coral" />
          מסעדות בפראג
        </h1>
        <p className="text-slate-500 mb-6">המסעדות המומלצות שלנו בעיר</p>
      </motion.div>

      {/* Highlighted: Výtopna */}
      {highlighted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 bg-gradient-to-l from-amber-500 to-orange-500 rounded-3xl p-6 text-white shadow-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🚂</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">חובה!</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">{highlighted.nameHe}</h2>
          <p className="text-sm opacity-90 mb-3">{highlighted.name}</p>
          <p className="text-sm leading-relaxed mb-4">{highlighted.recommendation}</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={highlighted.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              אתר המסעדה
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(highlighted.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
            >
              <Navigation className="w-4 h-4" />
              ניווט
            </a>
          </div>
        </motion.div>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {restaurantCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? "bg-aqua text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((restaurant, i) => (
            <motion.div
              key={restaurant.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-3 bg-gradient-to-l from-aqua to-cyan" />
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-slate-800">{restaurant.nameHe}</h3>
                    <p className="text-xs text-aqua">{restaurant.name}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-amber-600">{restaurant.rating}</span>
                  </div>
                </div>

                <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full mb-2">
                  {restaurant.type}
                </span>

                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {restaurant.recommendation}
                </p>

                <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                  <MapPin className="w-3 h-3" />
                  {restaurant.address}
                </div>

                <div className="flex gap-2">
                  {restaurant.website && (
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 bg-aqua-light text-aqua py-2 rounded-xl text-sm font-medium hover:bg-aqua hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      אתר
                    </a>
                  )}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 bg-green-50 text-green-600 py-2 rounded-xl text-sm font-medium hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    ניווט
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Map Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-aqua" />
          מפת מסעדות
        </h2>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1Rrus82YWesBMxY4H6&z=13"
            className="w-full h-[400px] border-0"
            title="מפת מסעדות פראג"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
}
