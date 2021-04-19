import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <nav>
            <h1 style={{ color: "#16389D" }}>interviewVector</h1>
            <div className="links">

                <Link style={{ borderBottom: "3px solid orange", }} to="/"><span style={{}}>Home</span></Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/login">Login</Link>
                <Link to="/login"><span style={{ color: "white", backgroundColor: "#16389D", padding: "6px" }}>Get in touch</span></Link>

            </div>
        </nav>
    )
}

export default Navbar
