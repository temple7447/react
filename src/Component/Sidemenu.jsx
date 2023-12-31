import React, {  useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MyContext } from '../AppProvider';

const Sidemenu = () => {
    // const location = useLocation();

    const { isClassAdded, setIsClassAdded } = useContext(MyContext)
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    // const HandleNavlinksActive = () => {
    //     setIsClassAdded((pre) => { return !pre })
    // }


    const sidebarClassName = isClassAdded ? 'sidebar hide' : 'sidebar';

    const handleMenuItemClick = (index) => {
        setActiveMenuItem(index);
    };

    // Array of menu items
    const menuItems = [
        { text: 'Dashboard', icon: 'bxs-dashboard', to: '/' },
        { text: 'My Store', icon: 'bxs-shopping-bag-alt', to: '/Store' },
{ text: 'Upload Data', icon: 'bxs-shopping-bag', to: '/Upload' },
{ text: 'User', icon: 'bxs-shopping-bag', to: '/User' },
        // Add more menu items as needed
    ];

    return (

        <section className={sidebarClassName} >
            <NavLink to="#" className="brand">
                <i className='bx bxs-smile'></i>
                <span className="text">Admin Dashboard</span>
            </NavLink>
            <ul className="side-menu top" >
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={index === activeMenuItem ? 'active' : ''}
                    >
                        <NavLink
                            to={item.to}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            <i className={`bx ${item.icon}`}></i>
                            <span className="text">{item.text}</span>
                        </NavLink>
                    </li>
                ))}

            </ul>
            <ul className="side-menu">
                <li>
                    <NavLink to="#" className="logout">
                        <i className='bx bxs-log-out-circle' ></i>
                        <span className="text">Logout</span>
                    </NavLink>
                </li>
            </ul>
        </section>

    )
}

export default Sidemenu