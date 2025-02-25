import React from 'React'
import (Link) from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/dasboard">Dashboard</Link></li>
            </ul>
        </nav>
    )
}