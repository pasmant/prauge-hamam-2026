"use client";

import { motion } from "framer-motion";
import {
  Plane,
  CheckCircle,
  MapPin,
  Clock,
  Hash,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Radio,
} from "lucide-react";
import { flights, airportInfo } from "@/data/flights";
import { useState, useEffect, useCallback } from "react";

interface LiveStatus {
  available: boolean;
  status?: string;
  departure?: {
    scheduled?: string;
    estimated?: string;
    actual?: string;
    terminal?: string;
    gate?: string;
    delay?: number;
  };
  arrival?: {
    scheduled?: string;
    estimated?: string;
    actual?: string;
    terminal?: string;
    gate?: string;
    delay?: number;
    baggage?: string;
  };
  live?: {
    latitude: number;
    longitude: number;
    altitude: number;
    speed: number;
  } | null;
}

function statusLabel(status?: string) {
  switch (status) {
    case "scheduled":
      return { text: "מתוכנן", color: "bg-blue-100 text-blue-700" };
    case "active":
      return { text: "באוויר!", color: "bg-green-100 text-green-700 animate-pulse" };
    case "landed":
      return { text: "נחת", color: "bg-emerald-100 text-emerald-700" };
    case "cancelled":
      return { text: "בוטל!", color: "bg-red-100 text-red-700" };
    case "incident":
      return { text: "אירוע", color: "bg-red-100 text-red-700" };
    case "diverted":
      return { text: "הוסט", color: "bg-amber-100 text-amber-700" };
    default:
      return null;
  }
}

function extractTime(isoString?: string | null): string | null {
  if (!isoString) return null;
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
  } catch {
    return null;
  }
}

function FlightCard({
  flight,
  index,
}: {
  flight: (typeof flights)[0];
  index: number;
}) {
  const [liveStatus, setLiveStatus] = useState<LiveStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastChecked, setLastChecked] = useState<string | null>(null);

  const fetchStatus = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/flight-status?flight_iata=${flight.flightNumber}`
      );
      const data = await res.json();
      setLiveStatus(data);
      setLastChecked(
        new Date().toLocaleTimeString("he-IL", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    } catch {
      setLiveStatus({ available: false });
    } finally {
      setLoading(false);
    }
  }, [flight.flightNumber]);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  const hasDelay =
    liveStatus?.available &&
    ((liveStatus.departure?.delay ?? 0) > 0 ||
      (liveStatus.arrival?.delay ?? 0) > 0);

  const liveDepTime = extractTime(
    liveStatus?.departure?.actual ||
      liveStatus?.departure?.estimated
  );
  const liveArrTime = extractTime(
    liveStatus?.arrival?.actual ||
      liveStatus?.arrival?.estimated
  );

  const liveStatusBadge = liveStatus?.available
    ? statusLabel(liveStatus.status)
    : null;

  const liveGate =
    liveStatus?.departure?.gate || liveStatus?.arrival?.gate || flight.gate;
  const liveTerminal =
    liveStatus?.departure?.terminal ||
    liveStatus?.arrival?.terminal ||
    flight.terminal;

  const fr24Url = `https://www.flightradar24.com/data/flights/${flight.flightNumber.toLowerCase()}`;
  const flightAwareUrl = `https://www.flightaware.com/live/flight/${flight.flightNumber}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
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
          <div className="flex items-center gap-2">
            {liveStatusBadge && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${liveStatusBadge.color}`}
              >
                {liveStatusBadge.text}
              </span>
            )}
            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
              <CheckCircle className="w-4 h-4" />
              {flight.status}
            </span>
          </div>
        </div>
        <p className="text-sm opacity-90 mt-1">
          {flight.departureCity} → {flight.arrivalCity}
        </p>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-800">
              {liveDepTime || flight.departureTime}
            </p>
            {liveDepTime && liveDepTime !== flight.departureTime && (
              <p className="text-xs text-red-500 line-through">
                {flight.departureTime}
              </p>
            )}
            <p className="text-sm text-slate-500">{flight.departureCityEn}</p>
            <p className="text-xs text-slate-400">{flight.departureAirport}</p>
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-aqua" />
              <div className="flex-1 h-px bg-slate-300 mx-1 relative">
                <Plane
                  className="w-5 h-5 text-aqua absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
                  style={{
                    transform:
                      flight.direction === "return"
                        ? "translate(-50%, -50%) rotate(-90deg)"
                        : undefined,
                  }}
                />
              </div>
              <div className="w-3 h-3 rounded-full bg-coral" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-800">
              {liveArrTime || flight.arrivalTime}
            </p>
            {liveArrTime && liveArrTime !== flight.arrivalTime && (
              <p className="text-xs text-red-500 line-through">
                {flight.arrivalTime}
              </p>
            )}
            <p className="text-sm text-slate-500">{flight.arrivalCityEn}</p>
            <p className="text-xs text-slate-400">{flight.arrivalAirport}</p>
            {flight.arrivalDate && (
              <p className="text-xs text-amber-600 font-medium mt-1">
                {flight.arrivalDate}
              </p>
            )}
          </div>
        </div>

        {hasDelay && (
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-sm text-amber-700">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>
              עיכוב:{" "}
              {liveStatus!.departure?.delay
                ? `${liveStatus!.departure.delay} דק׳ בהמראה`
                : ""}
              {liveStatus!.departure?.delay && liveStatus!.arrival?.delay
                ? " | "
                : ""}
              {liveStatus!.arrival?.delay
                ? `${liveStatus!.arrival.delay} דק׳ בנחיתה`
                : ""}
            </span>
          </div>
        )}

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
          {liveTerminal && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>טרמינל: {liveTerminal}</span>
            </div>
          )}
          {liveGate && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>שער: {liveGate}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          <a
            href={fr24Url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-orange-50 text-orange-600 hover:bg-orange-100 px-3 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            <Radio className="w-4 h-4" />
            FlightRadar24
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={flightAwareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            <Plane className="w-4 h-4" />
            FlightAware
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={fetchStatus}
            disabled={loading}
            className="flex items-center gap-1.5 bg-slate-100 text-slate-600 hover:bg-slate-200 px-3 py-2 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "מעדכן..." : "עדכון סטטוס"}
          </button>
        </div>

        {lastChecked && (
          <p className="text-xs text-slate-400 text-left">
            עדכון אחרון: {lastChecked}
          </p>
        )}
      </div>
    </motion.div>
  );
}

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
        <p className="text-slate-500 mb-8">
          פרטי הטיסות הלוך וחזור – הזמנים מתעדכנים אוטומטית
        </p>
      </motion.div>

      <div className="space-y-6">
        {flights.map((flight, i) => (
          <FlightCard key={flight.id} flight={flight} index={i} />
        ))}
      </div>

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
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
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
