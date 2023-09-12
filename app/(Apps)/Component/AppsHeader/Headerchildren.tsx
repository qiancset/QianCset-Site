
import "./AppsHeader.css";


export default function AppsHeader({ children }) {


    return (
        <header className="AppsHeader">
            <div className="max_AppsHeader">

                {children}

            </div>
        </header>
    );
}
