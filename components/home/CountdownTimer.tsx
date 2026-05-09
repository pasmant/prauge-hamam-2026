"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TRIP_DATE = new Date("2026-06-09T07:10:00+03:00");

interface TimeUnit {
  value: number;
  label: string;
}

function FlipCard({ value, label }: TimeUnit) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-16 h-20 md:w-24 md:h-28 bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-px bg-slate-700" />
        <span className="text-3xl md:text-5xl font-black text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl" />
      </div>
      <span className="mt-2 text-xs md:text-sm font-semibold text-slate-500">
        {label}
      </span>
    </motion.div>
  );
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "ימים" },
    { value: 0, label: "שעות" },
    { value: 0, label: "דקות" },
    { value: 0, label: "שניות" },
  ]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function calc() {
      const now = new Date();
      const diff = TRIP_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft([
          { value: 0, label: "ימים" },
          { value: 0, label: "שעות" },
          { value: 0, label: "דקות" },
          { value: 0, label: "שניות" },
        ]);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft([
        { value: days, label: "ימים" },
        { value: hours, label: "שעות" },
        { value: minutes, label: "דקות" },
        { value: seconds, label: "שניות" },
      ]);
    }

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const isPast = TRIP_DATE.getTime() <= Date.now();

  return (
    <section className="py-10 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-6">
          {isPast ? "!הטיול כבר כאן" : "ספירה לאחור לטיול"}
        </h2>
        <div className="flex items-center justify-center gap-3 md:gap-6 dir-ltr" dir="ltr">
          {timeLeft.map((unit) => (
            <FlipCard key={unit.label} value={unit.value} label={unit.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
