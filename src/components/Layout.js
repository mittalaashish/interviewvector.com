import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "../styles/global.css"
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Container>
                <Navbar />
            </Container>
            <div className="content" style={{ heigtht: "623px" }}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
