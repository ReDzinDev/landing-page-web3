"use client"

import type React from "react"

import { WagmiProvider, createConfig, http } from "wagmi"
import { mainnet, polygon } from "wagmi/chains"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ConnectKitProvider, getDefaultConfig } from "connectkit"

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet, polygon],
    transports: {
      [mainnet.id]: http(),
      [polygon.id]: http(),
    },
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    appName: "Devconnect Buenos Aires",
    appDescription: "Side event during Devconnect week",
    appUrl: "https://devconnect-ba.vercel.app",
  }),
)

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="midnight">{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
