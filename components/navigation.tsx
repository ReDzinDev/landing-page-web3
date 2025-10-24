"use client"

import Link from "next/link"
import { WalletButton } from "./wallet-button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Devconnect BA
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#location" className="text-muted-foreground hover:text-foreground transition-colors">
                Location
              </Link>
              <Link href="#schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                Schedule
              </Link>
              <Link href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </Link>
            </div>
          </div>
          <WalletButton />
        </div>
      </div>
    </nav>
  )
}
