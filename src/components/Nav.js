import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div>Photo-Website</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav