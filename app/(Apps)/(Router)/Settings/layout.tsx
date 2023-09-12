import Headerchildren from "@/Component/AppsHeader/HeaderChildren"


export default function Settingslayout({ children }) {
    return (
        <>
            <SettingsHeader />
            {children}

        </>
    )
}

function SettingsHeader() {
    return (
        <>
            <Headerchildren>
                <div className="Header_center">
                    <h1>Settings</h1>
                </div>
            </Headerchildren>
        </>
    );
}