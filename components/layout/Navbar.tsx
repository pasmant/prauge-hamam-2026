"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Hotel,
  UtensilsCrossed,
  CalendarDays,
  Image,
  Users,
  Backpack,
  Map,
  Menu,
  X,
  Home,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "בית", icon: Home },
  { href: "/flights", label: "טיסות", icon: Plane },
  { href: "/hotel", label: "מלון", icon: Hotel },
  { href: "/restaurants", label: "מסעדות", icon: UtensilsCrossed },
  { href: "/itinerary", label: "תוכנית", icon: CalendarDays },
  { href: "/gallery", label: "גלריה", icon: Image },
  { href: "/families", label: "משפחות", icon: Users },
  { href: "/packing", label: "ציוד", icon: Backpack },
  { href: "/map", label: "מפה", icon: Map },
  { href: "/group", label: "מידע", icon: Info },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span className="text-xl md:text-2xl">🇨🇿</span>
            <span className="font-bold text-base md:text-lg bg-gradient-to-l from-aqua to-cyan bg-clip-text text-transparent">
              משפחת חמם – פראג 2026
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "text-aqua bg-aqua-light"
                      : "text-slate-600 hover:text-aqua hover:bg-aqua-light"
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-3 py-2 grid grid-cols-2 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "text-aqua bg-aqua-light"
                        : "text-slate-600 hover:text-aqua hover:bg-aqua-light"
                    )}
                  >
                    <link.icon className={cn("w-5 h-5", isActive && "stroke-[2.5]")} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
