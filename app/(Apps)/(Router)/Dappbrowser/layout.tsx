import Headerchildren from "@/UI/AppsHeader/HeaderChildren"
import Rainbowkit from "@/app/(Apps)/UI/Wallet/Rainbowkit";

export const metadata = {
    title: {
        template: '%s | DAPP 浏览器',
        default: 'DAPP 浏览器',
    },
};

export default function Dappbrowserlayout({ children }) {
    return (
        <>
            <DappbrowserHeader />
            <div style={{ height: "56px" }} />
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
                <div className="Header_right">
                    <Rainbowkit />
                </div>
            </Headerchildren>
        </>
    );
}