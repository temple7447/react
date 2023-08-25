import React, { useState, useEffect } from 'react'

const SearchButton = () => {


    const [searchFormVisible, setSearchFormVisible] = useState(false);

    const handleSearchButtonClick = () => {
        if (window.innerWidth < 576) {
            setSearchFormVisible((prevVisible) => !prevVisible);
        }
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 576) {
                setSearchFormVisible(false);
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (

        <form>
            <div className={`form-input ${searchFormVisible ? 'show' : ''}`}>
                <input type="search" placeholder="Search..." />

                <button onClick={handleSearchButtonClick}>
                    <i className={`bx ${searchFormVisible ? 'bx-x' : 'bx-search'}`}></i>
                </button>
            </div>
        </form>

    )
}

export default SearchButton