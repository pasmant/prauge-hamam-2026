"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadItineraryPdfButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/itinerary-pdf");
      if (!response.ok) {
        throw new Error(`PDF request failed: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "prague-hamam-2026-itinerary.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError("לא הצלחנו ליצור את הקובץ. נסו שוב.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={handleDownload}
        disabled={loading}
        className="w-full sm:w-auto gap-2 border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100 hover:text-teal-900"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Download className="size-4" />
        )}
        {loading ? "מכין PDF..." : "הורדת תוכנית PDF להדפסה"}
      </Button>
      {error ? (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      ) : (
        <p className="mt-2 text-xs text-slate-500">
          כולל את כל 5 הימים עם שעות, תיאורים ופרטים מלאים
        </p>
      )}
    </div>
  );
}
