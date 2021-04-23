import { Link } from 'gatsby'
import React from 'react'
import Container from '@material-ui/core/Container';
import { FaArrowRight } from 'react-icons/fa';

const MainSection = () => {
    return (
        <div style={{ height: "623px", marginTop: "438px" }}>
            <Container>
                <div style={{ border: "1px solid #133DB3", width: "292px", height: "52px" }}>
                    <Link to="/"><div style={{ padding: "15px 40px", paddingTop: "13px", paddingBottom: "28px", fontFamily: "Poppins", fontWeight: 700, color: "#16389D", fontSize: "18px" }}>Request a demo <FaArrowRight /></div></Link>

                </div>

            </Container>

        </div>
    )
}

export default MainSection
