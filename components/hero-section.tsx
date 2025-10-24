"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import { ConnectKitButton } from "connectkit"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Log IP and geolocation on page load
    logVisitor()
  }, [])

  const logVisitor = async () => {
    try {
      // Fetch geolocation data
      const geoResponse = await fetch("https://ipapi.co/json/")
      const geoData = await geoResponse.json()

      // Log to API
      await fetch("/api/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ip: geoData.ip,
          city: geoData.city,
          country: geoData.country_name,
          timestamp: new Date().toISOString(),
        }),
      })

      console.log("[v0] Visitor logged:", geoData)
    } catch (error) {
      console.error("[v0] Error logging visitor:", error)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse-slow" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-4">
            Devconnect Week 2025
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Devconnect Buenos Aires
            <span className="block text-primary text-glow mt-2">Side Event</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Join builders, creators, and innovators in the heart of Buenos Aires
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>November 12, 2025 • 6PM - 10PM</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Palermo, Buenos Aires</span>
            </div>
          </div>

          <div className="pt-4">
            <ConnectKitButton.Custom>
              {({ show }) => (
                <Button
                  size="lg"
                  onClick={show}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                >
                  Connect Wallet & RSVP
                </Button>
              )}
            </ConnectKitButton.Custom>
          </div>
        </div>
      </div>
    </section>
  )
}
