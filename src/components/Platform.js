import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function InterviewSectionMobile() {
    return (
        <div className="section-mobile">
            <Grid container className="mockup-grid">
                <Grid item xs={12} className="interview-points">
                    <h3 className="heading-7">INTERVIEW AS A SERVICE</h3>
                    <div className="div-block-2 mock-up" />
                    <div className="grid-image">
                        <img
                            src="interviewer.png"
                            loading="lazy"
                            width={70}
                            sizes="(max-width: 479px) 100vw, 563px"
                            /// srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img.jpg 986w"
                            alt=""
                            className="image-7"
                        />
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941ce377b7d31a8b575_record%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            Live recorded interviews by experienced professionals
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c942b0982f0a45c9ac59_rinse%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            In-depth actionable expert feedback
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941998b361bf5c688a2_chef%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            Recommendations you can trust from trained panelists
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941c50ace8f1700debf_customer-support%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            Customized interview process
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941c50ace0d6700debe_task%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                            style={{marginLeft:"-3px"}}
                        />
                        <div className="text-block-9" style={{marginTop:"3px"}}>
                            Professional interview experience
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

function InterviewSectionDesktop() {
    return (
        <div className="section-desktop">
            <Grid container className="mockup-grid">
                <Grid item md={6} className="interview-points">
                    <h3 className="heading-7">INTERVIEW AS A SERVICE</h3>
                    <div className="div-block-2 mock-up" />
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941ce377b7d31a8b575_record%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            Live recorded interviews by experienced professionals
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c942b0982f0a45c9ac59_rinse%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            In-depth actionable expert feedback
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941998b361bf5c688a2_chef%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            Recommendations you can trust from trained panelists
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941c50ace8f1700debf_customer-support%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                        />
                        <div className="text-block-9">
                            Customized interview process
                        </div>
                    </div>
                    <div className="bullet w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c941c50ace0d6700debe_task%201.svg"
                            loading="lazy"
                            alt=""
                            className="image-14"
                            style={{marginLeft:"-3px"}}
                        />
                        <div className="text-block-9" style={{marginTop:"3px"}}>
                            Professional interview experience
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} className="grid-image">
                    <img
                        src="interviewer.png"
                        loading="lazy"
                        width={70}
                        sizes="(max-width: 479px) 100vw, 563px"
                        /// srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img.jpg 986w"
                        alt=""
                        className="image-7"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default () => {
    return (
        <div className="platform-section" id="service" >
            <Container>
                <InterviewSectionMobile />
                <InterviewSectionDesktop />

                <Grid container>
                    <Grid item sm={12} md={6} className="right-mock-up-1">
                        <h3 className="heading-7 mc2">IV Dashboard</h3>
                        <div className="div-block-2 mock-up r" />
                        <div className="bullet r w-clearfix">
                            <img
                                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d43356447167f3925600_update-arrows%201.svg"
                                loading="lazy"
                                alt=""
                                className="image-14 ri"
                            />
                            <div className="text-block-9 rig">
                                Instant updates on a highly functional dashboard
                            </div>
                        </div>
                        <div className="bullet r w-clearfix">
                            <img
                                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d43334af1e234be0deb2_bar-chart%201.svg"
                                loading="lazy"
                                alt=""
                                className="image-14 ri"
                            />
                            <div className="text-block-9 rig">
                                Graphically depicted easily comprehensible stats
                            </div>
                        </div>
                        <div className="bullet r w-clearfix">
                            <img
                                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d433a333ce03231322cf_friends%201.svg"
                                loading="lazy"
                                alt=""
                                className="image-14 ri"
                            />
                            <div className="text-block-9 rig">User friendly interface</div>
                        </div>
                        <div className="bullet r w-clearfix">
                            <img
                                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d433db2d08725957fa36_resume%201.svg"
                                loading="lazy"
                                alt=""
                                className="image-14 ri"
                            />
                            <div className="text-block-9 rig">
                                Upload a resume, Book a slot- it's as simple as that
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6} className="left-mock-up-2">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg"
                            loading="lazy"
                            width={70}
                            sizes="(max-width: 479px) 100vw, 563px"
                            srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg 1206w"
                            alt=""
                            className="image-7"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
