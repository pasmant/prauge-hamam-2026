"use client";

import { motion } from "framer-motion";
import { Info, Phone, Users, MapPin, Bus, AlertTriangle } from "lucide-react";
import { groupInfo, emergencyContacts } from "@/data/group";

export default function GroupPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-3">
          <Info className="w-8 h-8 text-aqua" />
          מידע קבוצתי
        </h1>
        <p className="text-slate-500 mb-8">כל מה שצריך לדעת על הטיול</p>
      </motion.div>

      {/* Trip Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3 mb-8"
      >
        {[
          { label: "משתתפים", value: groupInfo.totalParticipants, icon: Users, color: "bg-blue-50 text-blue-600" },
          { label: "תאריכים", value: groupInfo.tripDates, icon: MapPin, color: "bg-green-50 text-green-600" },
          { label: "יעד", value: groupInfo.destination, icon: MapPin, color: "bg-amber-50 text-amber-600" },
          { label: "מלון", value: groupInfo.hotel, icon: MapPin, color: "bg-cyan-50 text-cyan-600" },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-2`}>
              <item.icon className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className="font-bold text-slate-800 text-sm">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Transportation Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm p-5 mb-8"
      >
        <h2 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <Bus className="w-5 h-5 text-aqua" />
          לוח הסעות
        </h2>
        <div className="space-y-3">
          {[
            { day: "יום 1 (9/6)", desc: "שדה תעופה → מלון", time: "11:00" },
            { day: "יום 2 (10/6)", desc: "מלון → מרכז פראג", time: "09:00" },
            { day: "יום 2 (10/6)", desc: "מרכז פראג → מלון", time: "18:00" },
            { day: "יום 3 (11/6)", desc: "מלון → פטרין", time: "09:00" },
            { day: "יום 3 (11/6)", desc: "מצודה → מלון", time: "16:00" },
            { day: "יום 5 (13/6)", desc: "מלון → שדה תעופה", time: "17:45" },
          ].map((route, i) => (
            <div key={i} className="flex items-center gap-4 py-2 border-b border-slate-50 last:border-0">
              <span className="text-xs font-bold text-aqua bg-aqua-light px-3 py-1 rounded-full min-w-[50px] text-center">
                {route.time}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-700">{route.desc}</p>
                <p className="text-xs text-slate-400">{route.day}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          טלפונים לחירום
        </h2>
        <div className="space-y-3">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.role}
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{contact.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">{contact.role}</p>
                <p className="text-sm text-slate-500">{contact.name}</p>
              </div>
              <div className="flex items-center gap-1 text-aqua">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium" dir="ltr">{contact.phone}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
