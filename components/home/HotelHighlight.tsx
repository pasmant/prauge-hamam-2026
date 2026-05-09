"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hotel, Waves, UtensilsCrossed, ChevronLeft } from "lucide-react";

export function HotelHighlight() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/hotel" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-l from-cyan to-aqua p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Hotel className="w-5 h-5" />
                  <span className="text-sm font-medium">המלון שלנו</span>
                </div>
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mt-2">Aquapalace Hotel Prague</h3>
              <p className="text-sm opacity-90 mt-1">
                פארק המים הגדול במרכז אירופה!
              </p>
            </div>
            <div className="p-4 grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-cyan-50 rounded-xl">
                <Waves className="w-6 h-6 text-cyan-500 mx-auto mb-1" />
                <span className="text-xs font-semibold text-slate-600">24 מגלשות</span>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <span className="text-2xl block mb-1">🧖</span>
                <span className="text-xs font-semibold text-slate-600">18 סאונות</span>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-xl">
                <UtensilsCrossed className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <span className="text-xs font-semibold text-slate-600">8 מסעדות</span>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
