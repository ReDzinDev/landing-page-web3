import { Clock } from "lucide-react"

const schedule = [
  { time: "6:00 PM", title: "Registration & Welcome", description: "Check-in and networking" },
  { time: "6:30 PM", title: "Opening Keynote", description: "The Future of Web3 in Latin America" },
  { time: "7:15 PM", title: "Panel Discussion", description: "Building Decentralized Communities" },
  { time: "8:00 PM", title: "Networking Break", description: "Food, drinks, and connections" },
  { time: "8:45 PM", title: "Lightning Talks", description: "Quick insights from builders" },
  { time: "9:30 PM", title: "Closing & After Party", description: "Continue the conversation" },
]

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Schedule</h2>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-primary min-w-[100px]">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono text-sm">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
