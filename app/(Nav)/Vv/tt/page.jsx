'use client'


import { useWeb3Modal } from '@web3modal/react'

export default function HomePage() {
  const { open, close } = useWeb3Modal()

  return <button onClick={() => open()}>Connect</button>
}