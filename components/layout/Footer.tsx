import Link from "next/link";
import { Phone, MessageCircle, Hotel, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 hidden md:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span>🇨🇿</span>
              משפחת חמם – פראג 2026
            </h3>
            <p className="text-slate-400 text-sm">
              הטיול המשפחתי | 9–13 ביוני 2026
            </p>
            <p className="text-slate-400 text-sm">25–30 משתתפים</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">קישורים מהירים</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <Link href="/flights" className="hover:text-aqua transition-colors">טיסות</Link>
              <Link href="/hotel" className="hover:text-aqua transition-colors">מלון</Link>
              <Link href="/itinerary" className="hover:text-aqua transition-colors">תוכנית</Link>
              <Link href="/restaurants" className="hover:text-aqua transition-colors">מסעדות</Link>
              <Link href="/gallery" className="hover:text-aqua transition-colors">גלריה</Link>
              <Link href="/packing" className="hover:text-aqua transition-colors">ציוד</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">חירום</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <a href="tel:112" className="flex items-center gap-2 hover:text-aqua transition-colors">
                <Phone className="w-4 h-4" />
                חירום אירופי: 112
              </a>
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                קבוצת וואטסאפ
              </a>
              <a
                href="https://www.aquapalace.cz/en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-aqua transition-colors"
              >
                <Hotel className="w-4 h-4" />
                Aquapalace Hotel
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-sm text-slate-500">
          <p className="flex items-center justify-center gap-1">
            נבנה עם <Heart className="w-3 h-3 text-red-400 fill-red-400" /> למשפחת חמם
          </p>
        </div>
      </div>
    </footer>
  );
}
