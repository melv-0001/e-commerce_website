type ActivityType = "success" | "info" | "danger" | "warning"

interface Activity {
  id: number
  type: ActivityType
  text: string
  highlight: string
  time: string
}

const activities: Activity[] = [
  { id: 1, type: "success", highlight: "Amara Diallo",    text: "s'est inscrit",              time: "Il y a 5 min" },
  { id: 2, type: "info",    highlight: "Kofi Mensah",     text: "a mis à jour son profil",    time: "Il y a 22 min" },
  { id: 3, type: "danger",  highlight: "suspendu",        text: "Compte suspendu par admin",  time: "Il y a 1h" },
  { id: 4, type: "warning", highlight: "Fatou Sy",        text: "promu admin",                time: "Il y a 3h" },
  { id: 5, type: "success", highlight: "Ibrahim Traoré",  text: "s'est inscrit",              time: "Hier 18:42" },
]

const dotColors: Record<ActivityType, string> = {
  success: "bg-[#3A7D44]",
  info:    "bg-[#3A5F8A]",
  danger:  "bg-[#B84040]",
  warning: "bg-[#B8860B]",
}

export default function ActivityFeed() {
  return (
    <div className="bg-white border border-[#F0EBE3] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#F0EBE3]">
        <h3 className="font-serif text-sm text-[#2C1A0E]">Activité récente</h3>
      </div>
      <ul>
        {activities.map((a, i) => (
          <li
            key={a.id}
            className={`flex items-start gap-2.5 px-4 py-2.5 ${i < activities.length - 1 ? "border-b border-[#F0EBE3]" : ""}`}
          >
            <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${dotColors[a.type]}`} />
            <div>
              <p className="text-xs text-[#3D2B1A] leading-relaxed">
                <strong className="font-medium">{a.highlight}</strong>{" "}
                {a.text !== a.highlight ? a.text : ""}
              </p>
              <p className="text-[10px] text-[#9B8878] mt-0.5">{a.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}