import React from 'React'
import {Outlet,Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <h1> Dashboard</h1>
            <Outlet />{/*Child component will be rendered here*/}
            <nav>
                <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/dasboard">Dashboard</Link></li>
                </ul>
            
            </nav>
        </div>
        
    );
};

export default Dasborad