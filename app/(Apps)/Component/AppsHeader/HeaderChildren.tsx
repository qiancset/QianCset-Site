'use client'

import "./AppsHeader.css";


export default function HeaderChildren({ children }) {
 

    return (
        <>
            <div className="AppsHeader">
                <div className="max_AppsHeader">

                    {children}
  
                </div>
            </div>


        </>
    );
}
