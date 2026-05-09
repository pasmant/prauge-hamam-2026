"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plane, Hotel, CalendarDays, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const bottomLinks = [
  { href: "/", label: "בית", icon: Home },
  { href: "/flights", label: "טיסות", icon: Plane },
  { href: "/hotel", label: "מלון", icon: Hotel },
  { href: "/itinerary", label: "תוכנית", icon: CalendarDays },
  { href: "/map", label: "מפה", icon: Map },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200 md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {bottomLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all min-w-[56px]",
                isActive
                  ? "text-aqua bg-aqua-light"
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              <link.icon className={cn("w-5 h-5", isActive && "stroke-[2.5]")} />
              <span className="text-[10px] font-semibold">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
