import React from 'react';
import Grid from '@material-ui/core/Grid';

function DashboardSectionDesktop() {
    return (
        <div className="section-desktop">
            <Grid container className="mockup-grid dashboard">
                <Grid item xs={6} className="grid-element">
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
                <Grid item xs={6} className="grid-element">
                    <img
                        src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, 563px"
                        srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg 1206w"
                        alt=""
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function DashboardSectionMobile() {
    return (
        <div className="section-mobile">
            <Grid container className="mockup-grid dashboard">
                <Grid item xs={12} className="grid-element">
                    <h3 className="heading-7 mc2">IV Dashboard</h3>
                    <div className="div-block-2 mock-up r" />
                    <div className="grid-image">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, 563px"
                            srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg 1206w"
                            alt=""
                        />
                    </div>
                    <div className="bullet r w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d43356447167f3925600_update-arrows%201.svg"
                            loading="lazy"
                            alt=""
                            className=""
                        />
                        <div className="text">
                            Instant updates on a highly functional dashboard
                        </div>
                    </div>
                    <div className="bullet r w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d43334af1e234be0deb2_bar-chart%201.svg"
                            loading="lazy"
                            alt=""
                            className=""
                        />
                        <div className="text">
                            Graphically depicted easily comprehensible stats
                        </div>
                    </div>
                    <div className="bullet r w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d433a333ce03231322cf_friends%201.svg"
                            loading="lazy"
                            alt=""
                            className=""
                        />
                        <div className="text">User friendly interface</div>
                    </div>
                    <div className="bullet r w-clearfix">
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075d433db2d08725957fa36_resume%201.svg"
                            loading="lazy"
                            alt=""
                        />
                        <div className="text">
                            Upload a resume, Book a slot- it's as simple as that
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default () => {
    return (
        <>
            <DashboardSectionMobile/>
            <DashboardSectionDesktop/>
        </>
    );
};
