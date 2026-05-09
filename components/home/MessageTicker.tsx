"use client";

import { useEffect, useState } from "react";
import { Megaphone } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { tickerMessagesDefault } from "@/data/group";

export function MessageTicker() {
  const [messages, setMessages] = useState<string[]>(tickerMessagesDefault);

  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase
        .from("ticker_messages")
        .select("text")
        .eq("active", true)
        .order("sort_order", { ascending: true });

      if (!error && data && data.length > 0) {
        setMessages(data.map((m) => m.text));
      }
    }

    fetchMessages();

    const channel = supabase
      .channel("ticker-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "ticker_messages" },
        () => fetchMessages()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const tickerText = messages.join("   •   ");

  return (
    <div className="bg-gradient-to-l from-aqua to-cyan overflow-hidden py-3">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-white/20 px-3 py-1 flex items-center gap-1.5 z-10">
          <Megaphone className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-bold whitespace-nowrap">הודעות</span>
        </div>
        <div className="overflow-hidden flex-1 relative">
          <div className="animate-ticker whitespace-nowrap text-white font-medium text-sm" dir="rtl">
            {tickerText}   •   {tickerText}
          </div>
        </div>
      </div>
    </div>
  );
}
