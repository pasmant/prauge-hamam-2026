"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Waves,
  MapPin,
  UtensilsCrossed,
  CalendarDays,
  Image,
  CloudSun,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_GROUP_URL } from "@/data/group";

const actions = [
  {
    href: "/flights",
    label: "טיסות",
    icon: Plane,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
  },
  {
    href: "/hotel",
    label: "פארק מים",
    icon: Waves,
    color: "bg-cyan-500",
    lightColor: "bg-cyan-50",
  },
  {
    href: "/map",
    label: "אטרקציות",
    icon: MapPin,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
  },
  {
    href: "/restaurants",
    label: "מסעדות",
    icon: UtensilsCrossed,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
  },
  {
    href: "/itinerary",
    label: "תוכנית יומית",
    icon: CalendarDays,
    color: "bg-green-500",
    lightColor: "bg-green-50",
  },
  {
    href: "/gallery",
    label: "גלריה",
    icon: Image,
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
  },
  {
    href: "#weather",
    label: "מזג אוויר",
    icon: CloudSun,
    color: "bg-sky-500",
    lightColor: "bg-sky-50",
  },
  {
    href: WHATSAPP_GROUP_URL,
    label: "וואטסאפ",
    icon: MessageCircle,
    color: "bg-green-600",
    lightColor: "bg-green-50",
    external: true,
  },
];

export function QuickActions() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-slate-700 mb-5 text-center">
          גישה מהירה
        </h2>
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {actions.map((action, i) => {
            const Component = action.external ? "a" : Link;
            const extraProps = action.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={action.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Component
                  href={action.href}
                  {...(extraProps as Record<string, string>)}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 ${action.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <action.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-600 text-center leading-tight">
                    {action.label}
                  </span>
                </Component>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
