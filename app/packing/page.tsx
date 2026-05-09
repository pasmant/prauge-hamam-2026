"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Backpack, CheckCircle, Circle } from "lucide-react";
import { packingList } from "@/data/packing";

const STORAGE_KEY = "hamam-prague-packing";

export default function PackingPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const totalItems = packingList.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  if (!mounted) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Backpack className="w-8 h-8 text-emerald-500" />
          רשימת ציוד
        </h1>
        <p className="text-slate-500 mb-6">סמנו מה כבר ארזתם!</p>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-5 shadow-sm mb-6"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-slate-700">התקדמות</span>
          <span className="text-sm font-bold text-emerald-600">
            {checkedCount} / {totalItems} ({progress}%)
          </span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-l from-emerald-400 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Categories */}
      <div className="space-y-6">
        {packingList.map((category, catIdx) => {
          const catChecked = category.items.filter((item) => checked[item.id]).length;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="bg-slate-50 px-5 py-3 flex items-center justify-between border-b border-slate-100">
                <h2 className="font-bold text-slate-700 flex items-center gap-2">
                  <span className="text-xl">{category.emoji}</span>
                  {category.name}
                </h2>
                <span className="text-xs text-slate-400">
                  {catChecked}/{category.items.length}
                </span>
              </div>
              <div className="divide-y divide-slate-50">
                {category.items.map((item) => {
                  const isChecked = checked[item.id];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-slate-50 transition-colors text-right"
                    >
                      {isChecked ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          isChecked ? "text-slate-400 line-through" : "text-slate-700"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
