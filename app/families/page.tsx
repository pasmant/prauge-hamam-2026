"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Phone,
  MessageCircle,
  UserPlus,
  X,
  Loader2,
  Trash2,
  ImagePlus,
  Camera,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Family {
  id: number;
  name: string;
  members: number;
  adults: string[];
  kids: string[];
  phone: string;
  whatsapp_url: string;
  image_url: string | null;
}

export default function FamiliesPage() {
  const [families, setFamilies] = useState<Family[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    members: "",
    adults: "",
    kids: "",
    phone: "",
    imageFile: null as File | null,
    imagePreview: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoInputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  useEffect(() => {
    fetchFamilies();
  }, []);

  async function fetchFamilies() {
    const { data, error } = await supabase
      .from("families")
      .select("*")
      .order("created_at", { ascending: true });

    if (!error && data) {
      setFamilies(data);
    }
    setLoading(false);
  }

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  }

  async function uploadImage(file: File, familyName: string): Promise<string | null> {
    const ext = file.name.split(".").pop();
    const fileName = `family-${familyName}-${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from("family-photos")
      .upload(fileName, file, { upsert: true });

    if (error) {
      // If bucket doesn't exist, return a data URL fallback
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    }

    const { data } = supabase.storage.from("family-photos").getPublicUrl(fileName);
    return data.publicUrl;
  }

  async function handleSave() {
    if (!formData.name.trim()) return;
    setSaving(true);

    let imageUrl: string | null = null;
    if (formData.imageFile) {
      imageUrl = await uploadImage(formData.imageFile, formData.name.trim());
    }

    const { error } = await supabase.from("families").insert({
      name: formData.name.trim(),
      members: parseInt(formData.members) || 1,
      adults: formData.adults
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean),
      kids: formData.kids
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean),
      phone: formData.phone.trim(),
      whatsapp_url: formData.phone.trim()
        ? `https://wa.me/${formData.phone.replace(/[^0-9]/g, "")}`
        : "",
      image_url: imageUrl,
    });

    if (!error) {
      setFormData({
        name: "",
        members: "",
        adults: "",
        kids: "",
        phone: "",
        imageFile: null,
        imagePreview: "",
      });
      setShowForm(false);
      fetchFamilies();
    }
    setSaving(false);
  }

  async function handleDelete(id: number) {
    setDeletingId(id);
    await supabase.from("families").delete().eq("id", id);
    fetchFamilies();
    setDeletingId(null);
  }

  async function handlePhotoUpdate(familyId: number, file: File) {
    const family = families.find((f) => f.id === familyId);
    if (!family) return;

    const imageUrl = await uploadImage(file, family.name);
    if (imageUrl) {
      await supabase
        .from("families")
        .update({ image_url: imageUrl })
        .eq("id", familyId);
      fetchFamilies();
    }
  }

  const totalMembers = families.reduce((sum, f) => sum + f.members, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-500" />
          משתתפים בטיול
        </h1>
        <p className="text-slate-500 mb-6">
          {totalMembers} משתתפים | {families.length} משפחות
        </p>
      </motion.div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-aqua animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {families.map((family, i) => (
              <motion.div
                key={family.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Family Photo */}
                <div className="relative">
                  {family.image_url ? (
                    <img
                      src={family.image_url}
                      alt={`משפחת ${family.name}`}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-32 bg-gradient-to-br from-aqua to-cyan flex items-center justify-center">
                      <span className="text-5xl font-bold text-white/40">
                        {family.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Photo upload button */}
                  <button
                    onClick={() => photoInputRefs.current[family.id]?.click()}
                    className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    title="עדכון תמונה"
                  >
                    <Camera className="w-4 h-4 text-slate-600" />
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={(el) => { photoInputRefs.current[family.id] = el; }}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handlePhotoUpdate(family.id, file);
                    }}
                  />
                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(family.id)}
                    disabled={deletingId === family.id}
                    className="absolute top-2 left-2 bg-red-500/80 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-red-600 transition-colors"
                    title="מחיקת משפחה"
                  >
                    {deletingId === family.id ? (
                      <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-slate-800">
                        משפחת {family.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {family.members} נפשות
                      </p>
                    </div>
                  </div>

                  {/* Adults */}
                  {family.adults && family.adults.length > 0 && (
                    <div className="mb-2">
                      <p className="text-xs text-slate-400 mb-1">מבוגרים:</p>
                      <div className="flex flex-wrap gap-1">
                        {family.adults.map((adult) => (
                          <span
                            key={adult}
                            className="bg-aqua-light text-aqua text-xs px-2 py-0.5 rounded-full font-medium"
                          >
                            {adult}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Kids */}
                  {family.kids && family.kids.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-slate-400 mb-1">ילדים:</p>
                      <div className="flex flex-wrap gap-1">
                        {family.kids.map((kid) => (
                          <span
                            key={kid}
                            className="bg-amber-50 text-amber-600 text-xs px-2 py-0.5 rounded-full font-medium"
                          >
                            {kid}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {family.phone && (
                      <a
                        href={`tel:${family.phone}`}
                        className="flex-1 flex items-center justify-center gap-1 bg-slate-100 text-slate-600 py-2 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        טלפון
                      </a>
                    )}
                    {family.whatsapp_url && (
                      <a
                        href={family.whatsapp_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-green-50 text-green-600 py-2 rounded-xl text-sm font-medium hover:bg-green-100 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        וואטסאפ
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Add Family Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setShowForm(!showForm)}
        className="mt-6 w-full bg-gradient-to-l from-blue-500 to-aqua text-white rounded-2xl p-4 flex items-center justify-center gap-2 font-bold shadow-lg hover:shadow-xl transition-shadow active:scale-[0.98]"
      >
        <UserPlus className="w-5 h-5" />
        הוספת משפחה
      </motion.button>

      {/* Add Family Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="mt-4 bg-white rounded-2xl p-6 shadow-md overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">הוספת משפחה חדשה</h3>
              <button onClick={() => setShowForm(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="space-y-3">
              {/* Photo upload */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-36 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-aqua hover:bg-aqua-light/30 transition-colors overflow-hidden"
              >
                {formData.imagePreview ? (
                  <img
                    src={formData.imagePreview}
                    alt="תצוגה מקדימה"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <ImagePlus className="w-8 h-8 text-slate-300 mb-2" />
                    <span className="text-sm text-slate-400">
                      לחצו להוספת תמונה משפחתית
                    </span>
                  </>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
              />

              <input
                type="text"
                placeholder="שם משפחה"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aqua"
              />
              <input
                type="number"
                placeholder="מספר נפשות (סה״כ)"
                value={formData.members}
                onChange={(e) =>
                  setFormData({ ...formData, members: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aqua"
              />
              <input
                type="text"
                placeholder="שמות מבוגרים (מופרדים בפסיקים)"
                value={formData.adults}
                onChange={(e) =>
                  setFormData({ ...formData, adults: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aqua"
              />
              <input
                type="text"
                placeholder="שמות ילדים (מופרדים בפסיקים)"
                value={formData.kids}
                onChange={(e) =>
                  setFormData({ ...formData, kids: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aqua"
              />
              <input
                type="tel"
                placeholder="טלפון (למשל 0501234567)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aqua"
              />
              <button
                onClick={handleSave}
                disabled={saving || !formData.name.trim()}
                className="w-full bg-aqua text-white rounded-xl py-3 font-bold hover:bg-cyan transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                שמירה
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
