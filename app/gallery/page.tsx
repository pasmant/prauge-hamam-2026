"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Upload,
  ExternalLink,
  Share2,
  Smartphone,
  ImagePlus,
  Images,
} from "lucide-react";

const GOOGLE_PHOTOS_ALBUM = "https://photos.app.goo.gl/AMPuiPBrBVfpzZw69";
const GOOGLE_PHOTOS_EMBED =
  "https://photos.google.com/share/AF1QipO53NVB59Sk3c6vP5kYCechRd9xTGBc_O6NBw4EtR2uagA_HmBl7CAhK1FeTWO_jw?key=M3IxekxxNVdzd21ZcWJuaU9sWWxLNW5rUTJNTk5n";

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Camera className="w-8 h-8 text-purple-500" />
          גלריית הטיול
        </h1>
        <p className="text-slate-500 mb-6">
          כל התמונות מהטיול המשפחתי – באלבום משותף אחד!
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <a
          href={GOOGLE_PHOTOS_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-l from-purple-500 to-pink-500 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow active:scale-[0.98] flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Upload className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-lg">העלאת תמונות</h2>
            <p className="text-sm opacity-90">הוסיפו תמונות לאלבום</p>
          </div>
        </a>

        <a
          href={GOOGLE_PHOTOS_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-l from-blue-500 to-cyan-500 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow active:scale-[0.98] flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Images className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-lg">צפייה באלבום</h2>
            <p className="text-sm opacity-90">פתיחה ב-Google Photos</p>
          </div>
        </a>
      </motion.div>

      {/* Embedded Google Photos Album */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <h2 className="font-bold text-lg text-slate-700 mb-3 flex items-center gap-2">
          <Images className="w-5 h-5 text-purple-500" />
          האלבום המשותף
        </h2>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <iframe
            src={GOOGLE_PHOTOS_EMBED}
            className="w-full border-0"
            style={{ height: "70vh", minHeight: "500px" }}
            title="אלבום תמונות הטיול – Google Photos"
            loading="lazy"
            allow="autoplay; encrypted-media"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Fallback link in case iframe is blocked */}
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <a
              href={GOOGLE_PHOTOS_ALBUM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-purple-600 font-semibold text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              לא רואים את האלבום? לחצו כאן לפתיחה ב-Google Photos
            </a>
          </div>
        </div>
      </motion.div>

      {/* How to upload */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-purple-50 rounded-2xl p-5"
      >
        <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          איך מעלים תמונות מהטלפון?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              step: "1",
              icon: <ExternalLink className="w-5 h-5" />,
              title: "פתחו את האלבום",
              desc: "לחצו על ״העלאת תמונות״ למעלה",
            },
            {
              step: "2",
              icon: <Share2 className="w-5 h-5" />,
              title: "הצטרפו לאלבום",
              desc: "לחצו ״הצטרפות״ באלבום Google Photos",
            },
            {
              step: "3",
              icon: <ImagePlus className="w-5 h-5" />,
              title: "הוסיפו תמונות",
              desc: "לחצו על + ובחרו תמונות מהגלריה",
            },
            {
              step: "4",
              icon: <Camera className="w-5 h-5" />,
              title: "משותף אוטומטית",
              desc: "כל המשפחה רואה את התמונות מיד!",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-3 bg-white rounded-xl p-3"
            >
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-purple-600">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-sm text-purple-800">
                  {item.title}
                </p>
                <p className="text-xs text-purple-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
