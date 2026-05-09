const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export async function getPragueWeather(days: number = 5) {
  if (!API_KEY || API_KEY === "your_weather_api_key_here") return null;

  const res = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=Prague&days=${days}&lang=he`
  );

  if (!res.ok) return null;
  return res.json();
}
