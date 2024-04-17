// app/providers.tsx
'use client'
import * as React from "react";
import {NextUIProvider} from '@nextui-org/react'
import { useRouter } from "next/navigation";

export default function Providers({children}: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      {children}
    </NextUIProvider>
  )
}