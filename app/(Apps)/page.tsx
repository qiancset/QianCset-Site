
import Image from "next/image";
import Home from "./Home"
import AppsFooter from "@/Component/AppsFooter/AppsFooter"
import HeaderChildren from "@/Component/AppsHeader/HeaderChildren";


export default function Appspage() {
  return (
    <>
      <AppsHeader />


      <Home />


      <AppsFooter />
    </>
  )
}
function AppsHeader() {
  return (
    <>
      <HeaderChildren>
        <div className="Header_center">
          <Image src="/favicon.ico" className="QianCset" alt="header-Q" height={50} width={50} />
        </div>
      </HeaderChildren>
    </>
  );
}

