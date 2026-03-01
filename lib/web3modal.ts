import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { bsc } from 'viem/chains'
import { http } from 'viem'

const projectId = '4df3bc8f9944fe18f9faafe6f45403a1'

const metadata = {
  name: 'BNB Login Test',
  description: 'BNB Wallet Login',
  url: 'https://localhost:3000',
  icons: [] as string[]
}

const chains = [bsc] as const

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  transports: {
    [bsc.id]: http()
  }
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
})

export const modal = {
  open: () => document.querySelector('w3m-button')?.click()
}