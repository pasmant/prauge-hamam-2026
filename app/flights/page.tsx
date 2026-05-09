"use client";

import { motion } from "framer-motion";
import { Plane, CheckCircle, MapPin, Clock, Hash, ExternalLink } from "lucide-react";
import { flights, airportInfo } from "@/data/flights";

export default function FlightsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Plane className="w-8 h-8 text-aqua" />
          טיסות
        </h1>
        <p className="text-slate-500 mb-8">פרטי הטיסות הלוך וחזור</p>
      </motion.div>

      <div className="space-y-6">
        {flights.map((flight, i) => (
          <motion.div
            key={flight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-3xl shadow-md overflow-hidden"
          >
            <div
              className={`p-4 text-white ${
                flight.direction === "outbound"
                  ? "bg-gradient-to-l from-aqua to-blue-500"
                  : "bg-gradient-to-l from-coral to-amber-500"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">{flight.directionLabel}</span>
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="w-4 h-4" />
                  {flight.status}
                </span>
              </div>
              <p className="text-sm opacity-90 mt-1">
                {flight.departureCity} → {flight.arrivalCity}
              </p>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-800">{flight.departureTime}</p>
                  <p className="text-sm text-slate-500">{flight.departureCityEn}</p>
                  <p className="text-xs text-slate-400">{flight.departureAirport}</p>
                </div>
                <div className="flex-1 mx-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-aqua" />
                    <div className="flex-1 h-px bg-slate-300 mx-1 relative">
                      <Plane className="w-5 h-5 text-aqua absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" style={{ transform: flight.direction === "return" ? "translate(-50%, -50%) rotate(-90deg)" : undefined }} />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-coral" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-800">{flight.arrivalTime}</p>
                  <p className="text-sm text-slate-500">{flight.arrivalCityEn}</p>
                  <p className="text-xs text-slate-400">{flight.arrivalAirport}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Plane className="w-4 h-4 text-slate-400" />
                  <span>{flight.airline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Hash className="w-4 h-4 text-slate-400" />
                  <span>{flight.flightNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{flight.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Ref: {flight.reference}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FlightRadar Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-aqua" />
          מעקב מטוס חי
        </h2>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <iframe
            src="https://www.flightradar24.com/simple_index.php"
            className="w-full h-[400px] border-0"
            title="FlightRadar24 Live Map"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Airport Info */}
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-700 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-aqua" />
          מידע על נמלי התעופה
        </h2>
        {airportInfo.map((airport) => (
          <motion.div
            key={airport.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm p-5"
          >
            <h3 className="font-bold text-lg text-slate-800 mb-2">
              {airport.name} ({airport.code})
            </h3>
            <ul className="space-y-2">
              {airport.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-aqua mt-0.5">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
