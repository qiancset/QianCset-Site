
import Image from "next/image";
import Home from "./(Home)/Home"
import AppsFooter from "./Component/AppsFooter/AppsFooter"
import Headerchildren from "./Component/AppsHeader/Headerchildren";

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
      <Headerchildren>
        <div className="Header_center">
          <Image src="/images/icon/QianCset.jpg" className="QianCset" alt="header-Q" height={132} width={400} />
        </div>
      </Headerchildren>
    </>
  );
}