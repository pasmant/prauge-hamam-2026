import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "טיול משפחתי – פראג 2026",
  description: "הטיול המשפחתי לפראג | 9–13 ביוני 2026",
  openGraph: {
    title: "טיול משפחתי – פראג 2026",
    description: "הטיול המשפחתי לפראג | 9–13 ביוני 2026",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${assistant.variable}`}>
      <body className="font-heebo antialiased bg-slate-50 text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
