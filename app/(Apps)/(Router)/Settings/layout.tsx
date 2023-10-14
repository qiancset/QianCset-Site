import HeaderChildren from "@/Component/AppsHeader/HeaderChildren"


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
            <HeaderChildren>
                <div className="Header_center">
                    <h1>Settings</h1>
                </div>
            </HeaderChildren>
        </>
    );
}