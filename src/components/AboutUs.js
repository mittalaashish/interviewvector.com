import React from 'react'
import Container from '@material-ui/core/Container';


const AboutUs = () => {
    return (
        <Container>
            <div style={{ height: "500px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="content1">
                        <div>
                            <h1>Who are we?</h1>
                        </div>
                        <div>
                            <p>A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visi</p>
                        </div>
                        <p>Learn More</p>
                    </div>
                    <div className="image1">
                        <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2019/01/OfficeNews_365Mac-440x268.png" />
                    </div>
                </div>

            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="image2">
                        <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2019/01/OfficeNews_365Mac-440x268.png" />
                    </div>
                    <div className="content2">
                        <div>
                            <h1>What do we do?</h1>
                        </div>
                        <div>
                            <p>A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visionaries seeking to provide the best solution A bunch of visi</p>
                        </div>
                        <p>Learn More</p>
                    </div>

                </div>
            </div>

        </Container>

    )
}

export default AboutUs
