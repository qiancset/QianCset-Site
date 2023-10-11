import Headerchildren from "@/UI/AppsHeader/HeaderChildren"


export default function Settingslayout({ children }) {
    return (
        <>
            <SettingsHeader />
            <div style={{ height: "56px" }} />
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