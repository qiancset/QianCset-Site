'use client'

import "./AppsHeader.css";


export default function HeaderChildren({ children }) {
 

    return (
        <>
            <header className="AppsHeader">
                <div className="max_AppsHeader">

                    {children}
  
                </div>
            </header>


        </>
    );
}
