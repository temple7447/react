import React, { useState, useEffect } from 'react';
// import './DarkModeSwitch.css'; // Import your CSS file for styling

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleSwitchChange = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <>
            <div className="switch-container">
                <input
                    id="switch-mode"
                    type="checkbox"
                    onChange={handleSwitchChange}
                    checked={darkMode}
                />
                <label htmlFor="switch-mode"></label>
            </div>
        </>
    );
};

export default DarkModeSwitch;
