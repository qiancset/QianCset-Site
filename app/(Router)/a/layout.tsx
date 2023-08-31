import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
title: { absolute: 'a | 千赛特-QianCset', },
}

export default function alayout({children}) {
   return (
     <>
            <Suspense fallback={<Loading />}>
     {children}
     </Suspense>
     </>
   )
}