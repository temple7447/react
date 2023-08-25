import React, { useState, useEffect } from 'react'

const ToggleSidebar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const handleMenuBarClick = () => {
        setSidebarVisible((prevVisible) => !prevVisible);
    };

    return (
        <>
            <div id="content">
                <nav>
                    <i className="bx bx-menu" onClick={handleMenuBarClick}></i>
                </nav>
                <div id="sidebar" className={sidebarVisible ? '' : 'hide'}>

                </div>
            </div>
        </>
    )
}

export default ToggleSidebar