import { HeroSection } from "@/components/home/HeroSection";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { MessageTicker } from "@/components/home/MessageTicker";
import { QuickActions } from "@/components/home/QuickActions";
import { WeatherWidget } from "@/components/home/WeatherWidget";
import { TodaySection } from "@/components/home/TodaySection";
import { HotelHighlight } from "@/components/home/HotelHighlight";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MessageTicker />
      <CountdownTimer />
      <QuickActions />
      <TodaySection />
      <WeatherWidget />
      <HotelHighlight />
    </div>
  );
}
