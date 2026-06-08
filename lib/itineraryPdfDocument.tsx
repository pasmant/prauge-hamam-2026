import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
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

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 48,
    paddingHorizontal: 40,
    fontFamily: "NotoSansHebrew",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#1e293b",
    direction: "rtl",
    textAlign: "right",
  },
  coverTitle: {
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 8,
  },
  coverSubtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#475569",
    marginBottom: 24,
  },
  coverMeta: {
    fontSize: 11,
    textAlign: "center",
    color: "#64748b",
    marginBottom: 4,
  },
  coverDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
    marginVertical: 24,
  },
  coverNote: {
    fontSize: 9,
    textAlign: "center",
    color: "#94a3b8",
  },
  dayHeader: {
    backgroundColor: "#0f766e",
    color: "#ffffff",
    padding: 12,
    borderRadius: 6,
    marginBottom: 14,
  },
  dayHeaderLabel: {
    fontSize: 9,
    marginBottom: 2,
  },
  dayHeaderTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  dayHeaderSubtitle: {
    fontSize: 10,
    marginTop: 2,
  },
  timelineItem: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  timeBadge: {
    fontSize: 9,
    fontWeight: 700,
    color: "#0d9488",
    marginBottom: 3,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 3,
  },
  itemDescription: {
    fontSize: 9.5,
    color: "#475569",
    marginBottom: 4,
  },
  itemDetails: {
    fontSize: 9,
    color: "#334155",
    backgroundColor: "#f8fafc",
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  branchBox: {
    marginTop: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: "#99f6e4",
    borderRadius: 4,
    backgroundColor: "#f0fdfa",
  },
  branchLabel: {
    fontSize: 10,
    fontWeight: 700,
    marginBottom: 6,
  },
  branchItem: {
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ccfbf1",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginTop: 14,
    marginBottom: 8,
    color: "#0f766e",
  },
  tipItem: {
    fontSize: 9,
    color: "#92400e",
    marginBottom: 3,
  },
  tipsBox: {
    backgroundColor: "#fffbeb",
    padding: 10,
    borderRadius: 4,
    marginTop: 8,
  },
  freeDayItem: {
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  freeDayName: {
    fontSize: 10,
    fontWeight: 700,
  },
  freeDayEn: {
    fontSize: 8,
    color: "#94a3b8",
  },
  pageNumber: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 8,
    color: "#94a3b8",
  },
});

function BranchItemPdf({ item }: { item: TimelineBranchItem }) {
  return (
    <View style={styles.branchItem}>
      <Text style={styles.timeBadge}>
        {item.icon} {item.time}
      </Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      {item.details ? <Text style={styles.itemDetails}>{item.details}</Text> : null}
    </View>
  );
}

function TimelineItemPdf({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <View style={styles.timelineItem}>
      <Text style={styles.timeBadge}>
        {item.icon} {item.time}
      </Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      {item.details && !item.branches ? (
        <Text style={styles.itemDetails}>{item.details}</Text>
      ) : null}
      {item.branches && item.details ? (
        <Text style={styles.itemDetails}>{item.details}</Text>
      ) : null}
      {item.branches?.map((branch) => (
        <View key={`${index}-${branch.label}`} style={styles.branchBox}>
          <Text style={styles.branchLabel}>
            {branch.icon} {branch.label}
          </Text>
          {branch.items.map((branchItem, branchIndex) => (
            <BranchItemPdf
              key={`${branchIndex}-${branchItem.time}-${branchItem.title}`}
              item={branchItem}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

function DaySection({ day }: { day: DayPlan }) {
  const groupedFreeDay = (["attraction", "shopping", "restaurant"] as const)
    .map((category) => ({
      category,
      items: day.freeDayOptions?.filter((o) => o.category === category) ?? [],
    }))
    .filter((g) => g.items.length > 0);

  return (
    <View>
      <View style={styles.dayHeader}>
        <Text style={styles.dayHeaderLabel}>
          יום {day.id} | {day.date}
        </Text>
        <Text style={styles.dayHeaderTitle}>
          {day.emoji} {day.title}
        </Text>
        <Text style={styles.dayHeaderSubtitle}>{day.subtitle}</Text>
      </View>

      {day.timeline.map((item, index) => (
        <TimelineItemPdf key={`${day.id}-${index}-${item.time}`} item={item} index={index} />
      ))}

      {groupedFreeDay.length > 0 ? (
        <View>
          <Text style={styles.sectionTitle}>מקומות מומלצים ליום החופשי</Text>
          {groupedFreeDay.map((group) => (
            <View key={group.category}>
              <Text style={[styles.itemTitle, { marginBottom: 6 }]}>
                {categoryLabels[group.category]}
              </Text>
              {group.items.map((option) => (
                <View key={option.name} style={styles.freeDayItem}>
                  <Text style={styles.freeDayName}>
                    {option.icon} {option.name}
                  </Text>
                  <Text style={styles.freeDayEn}>{option.nameEn}</Text>
                  <Text style={styles.itemDescription}>{option.description}</Text>
                  <Text style={{ fontSize: 8, color: "#64748b" }}>
                    {option.address}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      ) : null}

      {day.tips && day.tips.length > 0 ? (
        <View style={styles.tipsBox}>
          <Text style={[styles.sectionTitle, { marginTop: 0, color: "#92400e" }]}>
            טיפים ליום {day.id}
          </Text>
          {day.tips.map((tip, i) => (
            <Text key={i} style={styles.tipItem}>
              • {tip}
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export function ItineraryPdfDocument() {
  return (
    <Document
      title="תוכנית הטיול – פראג 2026"
      author="Prague Hamam 2026"
      language="he"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.coverTitle}>תוכנית הטיול – פראג 2026</Text>
        <Text style={styles.coverSubtitle}>טיול משפחתי | Hamam Prague</Text>
        <View style={styles.coverDivider} />
        <Text style={styles.coverMeta}>{groupInfo.tripDates}</Text>
        <Text style={styles.coverMeta}>{groupInfo.destination}</Text>
        <Text style={styles.coverMeta}>{groupInfo.hotel}</Text>
        <Text style={styles.coverMeta}>{groupInfo.totalParticipants} משתתפים</Text>
        <View style={styles.coverDivider} />
        <Text style={styles.coverNote}>
          כולל את כל הימים, השעות, התיאורים והפרטים המלאים – מוכן להדפסה
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `עמוד ${pageNumber} מתוך ${totalPages}`
          }
          fixed
        />
      </Page>

      {itinerary.map((day) => (
        <Page key={day.id} size="A4" style={styles.page} wrap>
          <DaySection day={day} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `עמוד ${pageNumber} מתוך ${totalPages}`
            }
            fixed
          />
        </Page>
      ))}
    </Document>
  );
}
