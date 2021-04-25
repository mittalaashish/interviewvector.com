import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const AboutUs = () => {
    return (
        <div className="about_section" id="about">
            <Container>
                <Grid container className="about_content">
                    <Grid item sm={12} md={6}>
                        <div>
                            <h3 className="heading-7">ABOUT US</h3>
                        </div>
                        <div className="about_heading">
                            <div className="div-block-2 mock-up"/>
                        </div>
                        <div className="about_detail">
                            <div className="bullet w-clearfix">
                                <img
                                    src="aim.png"
                                    loading="lazy"
                                    alt=""
                                    className="image-14"
                                    style={{marginTop: "5px"}}
                                />
                                <div className="text-block-9">
                                    Visionaries who are on a mission <br/>
                                    to redefine recruitment.
                                </div>
                            </div>
                            <div className="bullet w-clearfix">
                                <img
                                    src="aim.png"
                                    loading="lazy"
                                    alt=""
                                    className="image-14"
                                    style={{marginTop: "5px"}}
                                />
                                <div className="text-block-9">
                                    Founded by IIT-Guwahati and IIT-Delhi <br/> alumni.
                                </div>
                            </div>
                            <div className="bullet w-clearfix">
                                <img
                                    src="aim.png"
                                    loading="lazy"
                                    alt=""
                                    className="image-14"
                                    style={{marginTop: "5px"}}
                                />
                                <div className="text-block-9">
                                    Objective is to simplify your engineer’s lives <br/>
                                    and make company growth unhindered.
                                </div>
                            </div>
                            <div className="bullet w-clearfix">
                                <img
                                    src="aim.png"
                                    loading="lazy"
                                    alt=""
                                    className="image-14"
                                    style={{marginTop: "5px"}}
                                />
                                <div className="text-block-9">
                                    We make tech hiring faster, more accurate <br/>
                                    and less expensive.
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6} className="about_image">
                        <img src="team/desktop-2x.png" alt="team"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AboutUs;
