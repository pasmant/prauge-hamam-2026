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
  ArrowLeft,
} from "lucide-react";

const GOOGLE_PHOTOS_ALBUM = "https://photos.app.goo.gl/AMPuiPBrBVfpzZw69";

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

      {/* Main Album Card */}
      <motion.a
        href={GOOGLE_PHOTOS_ALBUM}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="block mb-6 group"
      >
        <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-8 text-white shadow-xl overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full" />

          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Images className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold mb-2">אלבום הטיול המשותף</h2>
            <p className="text-lg opacity-90 mb-1">טיול לפראג 2026</p>
            <p className="text-sm opacity-75 mb-6">Google Photos – הטיול המשפחתי</p>
            <div className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
              <span>פתיחת האלבום</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.a>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 grid grid-cols-2 gap-3"
      >
        <a
          href={GOOGLE_PHOTOS_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex flex-col items-center gap-3 text-center"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Upload className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">העלאת תמונות</h3>
            <p className="text-xs text-slate-500 mt-0.5">הוסיפו תמונות לאלבום</p>
          </div>
        </a>

        <a
          href={GOOGLE_PHOTOS_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex flex-col items-center gap-3 text-center"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Share2 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">שיתוף האלבום</h3>
            <p className="text-xs text-slate-500 mt-0.5">שלחו לינק למשפחה</p>
          </div>
        </a>
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
              icon: <ExternalLink className="w-5 h-5" />,
              title: "פתחו את האלבום",
              desc: 'לחצו על "פתיחת האלבום" למעלה',
            },
            {
              icon: <Share2 className="w-5 h-5" />,
              title: "הצטרפו לאלבום",
              desc: 'לחצו "הצטרפות" ב-Google Photos',
            },
            {
              icon: <ImagePlus className="w-5 h-5" />,
              title: "הוסיפו תמונות",
              desc: "לחצו על + ובחרו תמונות מהגלריה",
            },
            {
              icon: <Camera className="w-5 h-5" />,
              title: "משותף אוטומטית!",
              desc: "כל המשפחה רואה את התמונות מיד",
            },
          ].map((item, i) => (
            <div
              key={i}
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
