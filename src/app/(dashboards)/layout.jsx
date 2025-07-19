import React from "react";

export default function Dashboardlayout({ children }) {
    return <div> 


        <div className="grid grid-cols-12 w-full">
            {/* Side Nav */}
            <div className="col-span-3">
                <ul>
                    <li>user List </li>
                </ul>
            </div>
            <div className="col-span-9">{children}</div>

        </div>
        {children}
    </div>
}