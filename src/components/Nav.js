import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div><Link to='/react-PhotoWebsite'>Photo-Website</Link></div>
            <ul>
                <li><Link to='/react-PhotoWebsite'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav