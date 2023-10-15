'use client'
import { usePathname } from 'next/navigation'
export default function apage() {

  const pathname = usePathname()

  return (
    <>
      <h1>测试</h1>
      <p>Current pathname: {pathname}</p>

    </>
  )
}