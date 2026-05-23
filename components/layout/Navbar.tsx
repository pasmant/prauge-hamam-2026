"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between gap-2 h-14 md:h-16">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 py-1"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg sm:text-xl md:text-2xl shrink-0" aria-hidden>
              🇨🇿
            </span>
            <span className="font-bold text-sm sm:text-base md:text-lg bg-gradient-to-l from-aqua to-cyan bg-clip-text text-transparent truncate min-w-0">
              <span className="sm:hidden">פראג 2026</span>
              <span className="hidden sm:inline">טיול משפחתי – פראג 2026</span>
            </span>
          </Link>

          {/* Desktop / tablet — מסך רחב מספיק */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-wrap justify-end max-w-[58%] xl:max-w-none">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all whitespace-nowrap",
                    isActive
                      ? "text-aqua bg-aqua-light"
                      : "text-slate-600 hover:text-aqua hover:bg-aqua-light"
                  )}
                >
                  <link.icon className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger — תמיד נראה במובייל */}
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden shrink-0 p-2.5 rounded-xl hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>
      </div>

      {/* מובייל: portal ל־body — fixed לא נשבר בגלל backdrop-blur/sticky על ה־nav (בעיקר Safari) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.button
                  key="mobile-nav-backdrop"
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 z-[200] bg-black/40 lg:hidden"
                  aria-label="סגור תפריט"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  key="mobile-nav-panel"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "fixed left-0 right-0 z-[210] lg:hidden",
                    "top-14 md:top-16",
                    "max-h-[min(85dvh,calc(100dvh-3.5rem))] overflow-y-auto overscroll-contain",
                    "bg-white border-b border-slate-200 shadow-xl",
                    "pb-[max(1rem,env(safe-area-inset-bottom))]"
                  )}
                >
                  <div className="px-3 py-3 grid grid-cols-2 gap-2">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-3 py-3.5 rounded-xl text-sm font-medium transition-all min-h-[48px]",
                            isActive
                              ? "text-aqua bg-aqua-light ring-2 ring-aqua/20"
                              : "text-slate-700 hover:text-aqua hover:bg-slate-50 active:bg-slate-100"
                          )}
                        >
                          <link.icon
                            className={cn("w-5 h-5 shrink-0", isActive && "stroke-[2.5]")}
                          />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
}
