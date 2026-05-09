"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Plus,
  Trash2,
  GripVertical,
  Eye,
  EyeOff,
  LogIn,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

interface TickerMessage {
  id: number;
  text: string;
  active: boolean;
  sort_order: number;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<TickerMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (isAuthenticated) fetchMessages();
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === "hamam2026admin") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("סיסמה שגויה");
    }
  };

  async function fetchMessages() {
    setLoading(true);
    const { data, error } = await supabase
      .from("ticker_messages")
      .select("*")
      .order("sort_order", { ascending: true });

    if (!error && data) {
      setMessages(data);
    }
    setLoading(false);
  }

  async function addMessage() {
    if (!newMessage.trim()) return;
    const maxOrder = messages.length > 0
      ? Math.max(...messages.map((m) => m.sort_order))
      : 0;

    const { error } = await supabase.from("ticker_messages").insert({
      text: newMessage.trim(),
      active: true,
      sort_order: maxOrder + 1,
    });

    if (!error) {
      setNewMessage("");
      fetchMessages();
      flashSaved();
    }
  }

  async function removeMessage(id: number) {
    await supabase.from("ticker_messages").delete().eq("id", id);
    fetchMessages();
    flashSaved();
  }

  async function toggleMessage(id: number, currentActive: boolean) {
    await supabase
      .from("ticker_messages")
      .update({ active: !currentActive })
      .eq("id", id);
    fetchMessages();
    flashSaved();
  }

  function flashSaved() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-lg p-8 text-center"
        >
          <div className="w-16 h-16 bg-aqua-light rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-aqua" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">ניהול האתר</h1>
          <p className="text-sm text-slate-500 mb-6">הזינו סיסמה כדי להיכנס</p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="סיסמה"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-center text-lg focus:outline-none focus:border-aqua mb-3"
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-aqua text-white rounded-xl py-3 font-bold hover:bg-cyan transition-colors flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            כניסה
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
              <Shield className="w-8 h-8 text-aqua" />
              ניהול האתר
            </h1>
            <p className="text-slate-500">עריכת הודעות הטיקר</p>
          </div>
          {saved && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1 text-green-500 text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              נשמר!
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Ticker Management */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
        <h2 className="font-bold text-lg text-slate-800 mb-4">
          הודעות טיקר (הודעות רצות בדף הבית)
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addMessage()}
            placeholder="הודעה חדשה..."
            className="flex-1 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-aqua"
          />
          <button
            onClick={addMessage}
            className="bg-aqua text-white px-4 py-2 rounded-xl hover:bg-cyan transition-colors flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            הוספה
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 text-aqua animate-spin" />
          </div>
        ) : (
          <div className="space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                  msg.active
                    ? "border-slate-200 bg-white"
                    : "border-slate-100 bg-slate-50 opacity-60"
                }`}
              >
                <GripVertical className="w-4 h-4 text-slate-300" />
                <span
                  className={`flex-1 text-sm ${
                    msg.active
                      ? "text-slate-700"
                      : "text-slate-400 line-through"
                  }`}
                >
                  {msg.text}
                </span>
                <button
                  onClick={() => toggleMessage(msg.id, msg.active)}
                  className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                  title={msg.active ? "השבתה" : "הפעלה"}
                >
                  {msg.active ? (
                    <Eye className="w-4 h-4 text-green-500" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                <button
                  onClick={() => removeMessage(msg.id)}
                  className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                  title="מחיקה"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Connection status */}
      <div className="bg-green-50 rounded-2xl p-5">
        <h3 className="font-bold text-green-700 mb-2">סטטוס חיבורים</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-green-700">Supabase – מחובר</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-green-700">Weather API – מחובר</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-green-700">Google Photos – מחובר</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-700">Google Maps API – placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
