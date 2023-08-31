import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: { absolute: "兑换 | 千赛特-QianCset", },
  description: "QianCset swap,千赛特兑换",
};

export default function Uniswap({ children }) {
  return <>
  <Suspense fallback={<Loading />}>

    {children}
    </Suspense>
    </>;
}



