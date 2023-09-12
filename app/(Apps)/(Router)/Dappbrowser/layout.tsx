import Headerchildren from "@/Component/AppsHeader/HeaderChildren"
import Rainbowkit from "@/Component/Rainbowkit";


export default function Dappbrowserlayout({ children }) {
    return (
        <>
            <DappbrowserHeader />
            {children}

        </>
    )
}

function DappbrowserHeader() {
    return (
        <>
            <Headerchildren>
                <div className="Header_center">
                    <h1>Dapp 浏览器</h1>
                </div>

            </Headerchildren>
        </>
    );
}