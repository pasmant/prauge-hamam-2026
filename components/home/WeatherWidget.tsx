"use client";

import { useEffect, useState } from "react";
import { CloudSun, Droplets, Wind } from "lucide-react";

interface DayWeather {
  day: string;
  temp: number;
  icon: string;
  rain: string;
  wind: string;
  condition: string;
}

const dayNames: Record<number, string> = {
  0: "ראשון",
  1: "שני",
  2: "שלישי",
  3: "רביעי",
  4: "חמישי",
  5: "שישי",
  6: "שבת",
};

const fallbackData: DayWeather[] = [
  { day: "יום ג׳ 9/6", temp: 24, icon: "☀️", rain: "10%", wind: "12", condition: "בהיר" },
  { day: "יום ד׳ 10/6", temp: 22, icon: "⛅", rain: "30%", wind: "15", condition: "מעונן חלקית" },
  { day: "יום ה׳ 11/6", temp: 23, icon: "🌤️", rain: "20%", wind: "10", condition: "בהיר" },
  { day: "יום ו׳ 12/6", temp: 25, icon: "☀️", rain: "5%", wind: "8", condition: "בהיר" },
  { day: "שבת 13/6", temp: 21, icon: "🌥️", rain: "40%", wind: "18", condition: "מעונן" },
];

function conditionToEmoji(code: number): string {
  if (code === 1000) return "☀️";
  if (code <= 1003) return "🌤️";
  if (code <= 1009) return "⛅";
  if (code <= 1030) return "🌫️";
  if (code <= 1087) return "⛈️";
  if (code <= 1189) return "🌧️";
  if (code <= 1225) return "❄️";
  return "🌥️";
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<DayWeather[]>(fallbackData);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!apiKey || apiKey === "your_weather_api_key_here") return;

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Prague&days=5&lang=he`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.forecast?.forecastday) {
          const days: DayWeather[] = data.forecast.forecastday.map(
            (d: any) => {
              const date = new Date(d.date);
              const dayOfWeek = dayNames[date.getDay()];
              const dayMonth = `${date.getDate()}/${date.getMonth() + 1}`;
              return {
                day: `${dayOfWeek} ${dayMonth}`,
                temp: Math.round(d.day.avgtemp_c),
                icon: conditionToEmoji(d.day.condition.code),
                rain: `${d.day.daily_chance_of_rain}%`,
                wind: `${Math.round(d.day.maxwind_kph)}`,
                condition: d.day.condition.text,
              };
            }
          );
          setWeather(days);
          setIsLive(true);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="weather" className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-5 justify-center">
          <CloudSun className="w-6 h-6 text-aqua" />
          <h2 className="text-xl font-bold text-slate-700">מזג אוויר בפראג</h2>
        </div>
        {!isLive && (
          <div className="text-center text-xs text-slate-400 mb-3">
            * תחזית משוערת – מתעדכנת אוטומטית
          </div>
        )}
        {isLive && (
          <div className="text-center text-xs text-green-500 mb-3 flex items-center justify-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            נתונים חיים מ-WeatherAPI
          </div>
        )}
        <div className="grid grid-cols-5 gap-2">
          {weather.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-2xl p-3 shadow-sm text-center"
            >
              <p className="text-[10px] md:text-xs font-semibold text-slate-500 mb-1 leading-tight">
                {day.day}
              </p>
              <p className="text-3xl mb-1">{day.icon}</p>
              <p className="text-lg font-bold text-slate-800">{day.temp}°</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Droplets className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] text-slate-400">{day.rain}</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <Wind className="w-3 h-3 text-slate-400" />
                <span className="text-[10px] text-slate-400">{day.wind} km/h</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
