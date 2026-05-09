"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Upload, Heart, ExternalLink, Share2 } from "lucide-react";

const placeholderPhotos = [
  { id: 1, url: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&h=300&fit=crop", family: "חמם", likes: 12 },
  { id: 2, url: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=400&h=500&fit=crop", family: "כהן", likes: 8 },
  { id: 3, url: "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?w=400&h=350&fit=crop", family: "לוי", likes: 15 },
  { id: 4, url: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&h=400&fit=crop", family: "חמם", likes: 6 },
  { id: 5, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop", family: "דוד", likes: 9 },
  { id: 6, url: "https://images.unsplash.com/photo-1555116505-38ab61800975?w=400&h=450&fit=crop", family: "כהן", likes: 11 },
];

const GOOGLE_PHOTOS_ALBUM = "https://photos.app.goo.gl/AMPuiPBrBVfpzZw69";

export default function GalleryPage() {
  const [photos, setPhotos] = useState(placeholderPhotos);

  const handleLike = (id: number) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Camera className="w-8 h-8 text-purple-500" />
          גלריית הטיול
        </h1>
        <p className="text-slate-500 mb-6">תמונות מהטיול המשפחתי</p>
      </motion.div>

      {/* Google Photos Album Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mb-6 space-y-3"
      >
        <a
          href={GOOGLE_PHOTOS_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-l from-purple-500 to-pink-500 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow active:scale-[0.98]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-lg">העלאת תמונות</h2>
                <p className="text-sm opacity-90">לחצו כדי להעלות תמונות לאלבום המשותף</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5" />
          </div>
        </a>

        <a
          href={GOOGLE_PHOTOS_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-white text-purple-600 border-2 border-purple-200 rounded-2xl p-4 font-semibold hover:bg-purple-50 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          צפייה באלבום Google Photos המשותף
        </a>
      </motion.div>

      {/* Photo Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-purple-50 rounded-2xl p-4 mb-6"
      >
        <h3 className="font-bold text-purple-700 text-sm mb-2">איך מעלים תמונות?</h3>
        <ol className="space-y-1 text-sm text-purple-600">
          <li className="flex items-start gap-2">
            <span className="font-bold">1.</span>
            לחצו על &quot;העלאת תמונות&quot; למעלה
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">2.</span>
            היכנסו לאלבום ב-Google Photos
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">3.</span>
            לחצו על כפתור ה-+ כדי להוסיף תמונות מהטלפון
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">4.</span>
            התמונות ישותפו אוטומטית עם כל המשפחה!
          </li>
        </ol>
      </motion.div>

      {/* Masonry Grid */}
      <h2 className="font-bold text-lg text-slate-700 mb-4">תמונות אחרונות</h2>
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={photo.url}
              alt={`תמונה מ${photo.family}`}
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                משפחת {photo.family}
              </span>
              <button
                onClick={() => handleLike(photo.id)}
                className="flex items-center gap-1 text-xs text-pink-500 hover:text-pink-600 transition-colors"
              >
                <Heart className="w-4 h-4 fill-pink-500" />
                {photo.likes}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
