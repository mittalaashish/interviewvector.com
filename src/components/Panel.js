import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const Panel = () => {
    return (
        <div className="panel_parent">
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className="heading2 panel">OUR INTERVIEWING PANEL</h1>
                        <div className="div-block-2 small"/>
                    </Grid>
                    <Grid container className="panel_cards">
                        <Grid item xs={12} sm={6} md={4} className="panel_child">
                            <div className="panel_card">
                                <div><img src="desc1.png" loading="lazy" alt="hii"/></div>

                                <div><hr className="panel-line"></hr></div>
                                <div>
                                    <h6 className="desc_head">
                                        Experts from multiple <br/>
                                        technology domains
                                    </h6>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="panel_child">
                            <div className="panel_card">
                                <div><img src="aero1.png" loading="lazy" alt="hii"/></div>
                                <div><hr className="panel-line"></hr></div>
                                <div style={{marginTop: "5px"}}>
                                    <h6 className="desc_head">
                                        Hailing from FAANG Companies <br/>
                                        & unicorn startups
                                    </h6>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="panel_child">
                            <div className="panel_card">
                                <div><img src="brief.png" loading="lazy" alt="hii"/></div>

                                <div><hr className="panel-line"></hr></div>
                                <div>
                                    <h6 className="desc_head">
                                        Professional <br/>
                                        Interviewers
                                    </h6>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="panel_child">
                            <div className="panel_card1">
                                <div><img src="use.png" loading="lazy" alt="hii"/></div>

                                <div><hr className="panel-line"></hr></div>
                                <div>
                                    <h6 className="desc_head">
                                        Constantly accessed for quality <br/>
                                        and communication skills
                                    </h6>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="panel_child">
                        <div className="panel_card2">
                            <div><img src="medal.png" loading="lazy" alt="hii"/></div>

                            <div><hr className="panel-line"></hr></div>
                            <div>
                                <h6 className="desc_head">
                                    Capable of making wholesome <br/>
                                    trustworthy evaluations
                                </h6>
                            </div>
                        </div>
                    </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Panel
