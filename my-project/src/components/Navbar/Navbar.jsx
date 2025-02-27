import React from 'React'
import {Outlet,Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/dasboard">Dashboard</Link></li>
                </ul>
            <Outlet />{/*Child component will be rendered here*/}
            </nav>
        </div>
        
    )
}

export default Navbar