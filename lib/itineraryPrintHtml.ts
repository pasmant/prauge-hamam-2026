import {
  itinerary,
  type DayPlan,
  type FreeDayOption,
  type TimelineBranchItem,
  type TimelineItem,
} from "@/data/itinerary";
import { groupInfo } from "@/data/group";

const categoryLabels: Record<FreeDayOption["category"], string> = {
  attraction: "אטרקציות ופעילויות",
  shopping: "קניונים וקניות",
  restaurant: "מסעדות ואוכל",
};

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderDetails(details?: string) {
  if (!details) return "";
  return `<div class="details">${escapeHtml(details)
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join("")}</div>`;
}

function renderBranchItem(item: TimelineBranchItem) {
  return `
    <article class="branch-item">
      <p class="time">${escapeHtml(item.icon)} ${escapeHtml(item.time)}</p>
      <h4>${escapeHtml(item.title)}</h4>
      <p class="desc">${escapeHtml(item.description)}</p>
      ${renderDetails(item.details)}
    </article>
  `;
}

function renderTimelineItem(item: TimelineItem) {
  const branches = item.branches
    ?.map(
      (branch) => `
        <div class="branch-box">
          <p class="branch-label">${escapeHtml(branch.icon)} ${escapeHtml(branch.label)}</p>
          ${branch.items.map(renderBranchItem).join("")}
        </div>
      `
    )
    .join("");

  return `
    <article class="timeline-item">
      <p class="time">${escapeHtml(item.icon)} ${escapeHtml(item.time)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="desc">${escapeHtml(item.description)}</p>
      ${renderDetails(item.details)}
      ${branches ?? ""}
    </article>
  `;
}

function renderFreeDayOptions(day: DayPlan) {
  if (!day.freeDayOptions?.length) return "";

  const grouped = (["attraction", "shopping", "restaurant"] as const)
    .map((category) => ({
      category,
      items: day.freeDayOptions!.filter((o) => o.category === category),
    }))
    .filter((g) => g.items.length > 0);

  if (!grouped.length) return "";

  return `
    <section class="free-day">
      <h3 class="section-title">מקומות מומלצים ליום החופשי</h3>
      ${grouped
        .map(
          (group) => `
          <div class="free-day-group">
            <h4>${categoryLabels[group.category]}</h4>
            ${group.items
              .map(
                (option) => `
              <article class="free-day-item">
                <p class="free-day-name">${escapeHtml(option.icon)} ${escapeHtml(option.name)}</p>
                <p class="free-day-en">${escapeHtml(option.nameEn)}</p>
                <p class="desc">${escapeHtml(option.description)}</p>
                <p class="address">${escapeHtml(option.address)}</p>
              </article>
            `
              )
              .join("")}
          </div>
        `
        )
        .join("")}
    </section>
  `;
}

function renderTips(day: DayPlan) {
  if (!day.tips?.length) return "";
  return `
    <section class="tips">
      <h3 class="section-title tips-title">טיפים ליום ${day.id}</h3>
      <ul>
        ${day.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderDay(day: DayPlan) {
  return `
    <section class="day">
      <header class="day-header">
        <p class="day-label">יום ${day.id} | ${escapeHtml(day.date)}</p>
        <h2>${escapeHtml(day.emoji)} ${escapeHtml(day.title)}</h2>
        <p class="day-subtitle">${escapeHtml(day.subtitle)}</p>
      </header>
      ${day.timeline.map(renderTimelineItem).join("")}
      ${renderFreeDayOptions(day)}
      ${renderTips(day)}
    </section>
  `;
}

export function buildItineraryPrintHtml() {
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <title>תוכנית הטיול – פראג 2026</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    @page { size: A4; margin: 18mm 16mm 22mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Rubik", sans-serif;
      font-size: 10.5pt;
      line-height: 1.55;
      color: #1e293b;
      direction: rtl;
      text-align: right;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .cover {
      min-height: 240mm;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      page-break-after: always;
    }
    .cover h1 { font-size: 28pt; margin: 0 0 8px; color: #0f766e; }
    .cover h2 { font-size: 14pt; margin: 0 0 24px; color: #475569; font-weight: 400; }
    .cover p { margin: 4px 0; color: #64748b; }
    .cover hr { width: 60%; border: none; border-top: 1px solid #cbd5e1; margin: 24px 0; }
    .cover .note { font-size: 9pt; color: #94a3b8; max-width: 80%; }
    .day { page-break-before: always; break-before: page; }
    .day-header {
      background: #0f766e;
      color: #fff;
      padding: 14px 16px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .day-label { margin: 0 0 4px; font-size: 9pt; opacity: 0.9; }
    .day-header h2 { margin: 0; font-size: 17pt; }
    .day-subtitle { margin: 6px 0 0; font-size: 10pt; opacity: 0.9; }
    .timeline-item, .branch-item, .free-day-item {
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 12px;
      margin-bottom: 12px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .time {
      margin: 0 0 4px;
      font-size: 9pt;
      font-weight: 700;
      color: #0d9488;
    }
    h3, h4 { margin: 0 0 4px; }
    .timeline-item h3 { font-size: 11.5pt; }
    .desc { margin: 0 0 6px; color: #475569; font-size: 10pt; }
    .details {
      background: #f8fafc;
      border-radius: 6px;
      padding: 8px 10px;
      margin-top: 6px;
      font-size: 9.5pt;
      color: #334155;
    }
    .details p { margin: 0 0 4px; }
    .details p:last-child { margin-bottom: 0; }
    .branch-box {
      margin-top: 8px;
      padding: 10px;
      border: 1px solid #99f6e4;
      border-radius: 6px;
      background: #f0fdfa;
    }
    .branch-label { margin: 0 0 8px; font-weight: 700; }
    .section-title {
      margin: 18px 0 10px;
      font-size: 12pt;
      color: #0f766e;
    }
    .tips {
      background: #fffbeb;
      border-radius: 6px;
      padding: 12px;
      margin-top: 12px;
    }
    .tips-title { margin-top: 0; color: #92400e; }
    .tips ul { margin: 0; padding-right: 18px; }
    .tips li { margin-bottom: 4px; font-size: 9.5pt; color: #92400e; }
    .free-day-en, .address { font-size: 8.5pt; color: #64748b; margin: 2px 0; }
    .free-day-en { direction: ltr; text-align: left; }
  </style>
</head>
<body>
  <section class="cover">
    <h1>תוכנית הטיול – פראג 2026</h1>
    <h2>טיול משפחתי | Hamam Prague</h2>
    <hr />
    <p>${escapeHtml(groupInfo.tripDates)}</p>
    <p>${escapeHtml(groupInfo.destination)}</p>
    <p>${escapeHtml(groupInfo.hotel)}</p>
    <p>${escapeHtml(groupInfo.totalParticipants)} משתתפים</p>
    <hr />
    <p class="note">כולל את כל הימים, השעות, התיאורים והפרטים המלאים – מוכן להדפסה</p>
  </section>
  ${itinerary.map(renderDay).join("")}
</body>
</html>`;
}
