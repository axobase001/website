'use client'

import { LanguageProvider } from '@/lib/language-context'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

const config = getDefaultConfig({
  appName: 'Axobase',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [base, baseSepolia],
  ssr: true,
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
