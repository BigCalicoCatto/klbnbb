'use client'

import { WagmiProvider, useAccount, useDisconnect } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '../../lib/web3modal'

const queryClient = new QueryClient()

function Wallet() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <p>✅ Connected!</p>
        <p style={{ fontFamily: 'monospace' }}>{address}</p>
        <button onClick={() => disconnect()} style={{ marginTop: '20px', padding: '10px 20px' }}>
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>BNB Wallet Login Test</h1>
      <w3m-button />
    </div>
  )
}

export default function ConnectPage() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Wallet />
      </QueryClientProvider>
    </WagmiProvider>
  )
}