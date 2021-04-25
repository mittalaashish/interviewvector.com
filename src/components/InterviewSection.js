import React from 'react';
import Grid from '@material-ui/core/Grid';

function InterviewSectionMobile() {
    return (
        <div className="section-mobile">
            <Grid container className="mockup-grid">
                <Grid item xs={12} className="interview-points">
                    <h3 className="heading-7">INTERVIEW AS A SERVICE</h3>
                    <div className="div-block-2 block-line" />
                    <div className="grid-image">
                        <img
                            src="platform/interview-mobile-2x.png"
                            loading="lazy"
                            srcSet="platform/interview-mobile-1x.png 1x, platform/interview-mobile-2x.png 2x"
                            alt="Interviewer"
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
                        src="platform/interview-desktop-2x.png"
                        loading="lazy"
                        srcSet="platform/interview-desktop-1x.png 1x, platform/interview-desktop-2x.png 2x"
                        alt="Interviewer"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default () => {
    return (
        <>
            <InterviewSectionMobile />
            <InterviewSectionDesktop />
        </>
    );
}
