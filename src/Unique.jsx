// import { useState, useContext } from 'react'
import Sidemenu from './Component/Sidemenu'
import DarkModeSwitch from './Component/DarkModeSwitch'
import SearchButton from './Component/SearchButton'
// import { MyContext } from './AppProvider'

import { Outlet ,NavLink} from 'react-router-dom'

function Unique() {
    // const [count, setCount] = useState(0)
    // const { isClassAdded, setIsClassAdded } = useContext(MyContext)

    const HandleChange = () => {
        // setIsClassAdded(!isClassAdded)
    }


    return (

        <div style={{ width: '100vw' }} >
            <Sidemenu />

            <section id="content">
                {/* <!-- NAVBAR --> */}
                <nav>
                    <i className='bx bx-menu' onClick={HandleChange} ></i>
                    <NavLink to='/' className="nav-link">Categories</NavLink>

                    <SearchButton />
                    <DarkModeSwitch />
                    <NavLink to='/' className="notification">
                        <i className='bx bxs-bell' ></i>
                        <span className="num">8</span>
                    </NavLink>
                    <NavLink to='/' className="profile">
                        <img src="img/people.png" alt='people' />
                    </NavLink>
                </nav>

                <Outlet />
            </section>
        </div>
    )
}

export default Unique
