"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Plane,
  Hotel,
  UtensilsCrossed,
  CalendarDays,
  Image,
  Users,
  Backpack,
  Map,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** כל הקישורים מה־Navbar — גלילה אופקית במובייל */
const bottomLinks = [
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

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: "max(0.25rem, env(safe-area-inset-bottom))" }}
    >
      <div
        className="flex items-stretch overflow-x-auto overflow-y-hidden gap-0.5 px-1 py-1.5 scrollbar-hide snap-x snap-mandatory"
        dir="rtl"
      >
        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 shrink-0 snap-start",
                "min-w-[4.25rem] max-w-[4.75rem] py-1.5 px-1 rounded-xl transition-all touch-manipulation",
                isActive
                  ? "text-aqua bg-aqua-light"
                  : "text-slate-500 hover:text-slate-800 active:bg-slate-100"
              )}
            >
              <link.icon
                className={cn("w-[22px] h-[22px]", isActive && "stroke-[2.5]")}
              />
              <span className="text-[9px] font-semibold leading-tight text-center line-clamp-2">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
