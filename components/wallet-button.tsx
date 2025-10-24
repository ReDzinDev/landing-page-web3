"use client"

import { ConnectKitButton } from "connectkit"
import { useAccount } from "wagmi"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function WalletButton() {
  const { address, isConnected } = useAccount()
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (isConnected && address && !isLogged) {
      logAttendance(address)
      setIsLogged(true)
    }
  }, [isConnected, address, isLogged])

  const logAttendance = async (walletAddress: string) => {
    try {
      const response = await fetch("/api/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wallet: walletAddress,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        console.log("[v0] Attendance logged successfully")
      }
    } catch (error) {
      console.error("[v0] Error logging attendance:", error)
    }
  }

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <Button
            onClick={show}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300"
          >
            {isConnected ? (ensName ?? truncatedAddress) : "Connect Wallet"}
          </Button>
        )
      }}
    </ConnectKitButton.Custom>
  )
}
