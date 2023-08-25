import { useState, useContext } from 'react'
import Sidemenu from './Component/Sidemenu'
import DarkModeSwitch from './Component/DarkModeSwitch'
import SearchButton from './Component/SearchButton'
import { MyContext } from './AppProvider'
import { Outlet } from 'react-router-dom'

function Unique() {
    const [count, setCount] = useState(0)
    const { isClassAdded, setIsClassAdded } = useContext(MyContext)

    const HandleChange = () => {
        setIsClassAdded(!isClassAdded)
    }


    return (

        <div style={{ width: '100vw' }} >
            <Sidemenu />

            <section id="content">
                {/* <!-- NAVBAR --> */}
                <nav>
                    <i className='bx bx-menu' onClick={HandleChange} ></i>
                    <a href="#" className="nav-link">Categories</a>

                    <SearchButton />
                    <DarkModeSwitch />
                    <a href="#" className="notification">
                        <i className='bx bxs-bell' ></i>
                        <span className="num">8</span>
                    </a>
                    <a href="#" className="profile">
                        <img src="img/people.png" />
                    </a>
                </nav>

                <Outlet />
            </section>
        </div>
    )
}

export default Unique
