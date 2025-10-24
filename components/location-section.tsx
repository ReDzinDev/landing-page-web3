import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="location" className="py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Date & Location</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Venue</h3>
                    <p className="text-muted-foreground">
                      Palermo Innovation Hub
                      <br />
                      Av. Santa Fe 3253
                      <br />
                      Palermo, Buenos Aires
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">When</h3>
                    <p className="text-muted-foreground">
                      November 12, 2025
                      <br />
                      6:00 PM - 10:00 PM ART
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Palermo+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52562.20344429879!2d-58.45!3d-34.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sPalermo%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
