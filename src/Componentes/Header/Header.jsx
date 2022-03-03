import React from 'react'
import { Link } from 'react-router-dom'

const Header = ( { titulo } ) => {
    return (
        <header>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
            <h1>{titulo}</h1>
        </header>
    )
}

export default Header