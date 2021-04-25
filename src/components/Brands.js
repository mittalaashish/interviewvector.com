import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default () => {
    return (
        <div className="brand-section">
            <Container>
                <Grid container>
                    <Grid item xs={12} className="text-wrapper">
                        <h1 className="heading2">BRANDS TRUSTING US</h1>
                        <div className="heading-highlight" />
                    </Grid>
                    <Grid item xs={12} className="brand-logos">
                        <img
                            src="brands/bharatpe-2x.png"
                            srcSet="brands/bharatpe-1x.png 1x, brands/bharatpe-2x.png 2x"
                            loading="lazy"
                            alt="BharatPay"
                        />
                        <img
                            src="brands/pagarbook-2x.png"
                            srcSet="brands/pagarbook-1x.png 1x, brands/pagarbook-2x.png 2x"
                            loading="lazy"
                            alt="Pagarbook"
                        />
                        <img
                            src="brands/indiagold-2x.png"
                            srcSet="brands/indiagold-1x.png 1x, brands/indiagold-2x.png 2x"
                            loading="lazy"
                            alt="Indiagold"
                        />
                        <img
                            src="brands/syfe-2x.png"
                            srcSet="brands/syfe-1x.png 1x, brands/syfe-2x.png 2x"
                            loading="lazy"
                            alt="Syfe"
                        />
                        <img
                            src="brands/mindtickle-2x.png"
                            srcSet="brands/mindtickle-1x.png 1x, brands/mindtickle-2x.png 2x"
                            alt="Mindtickle"
                        />
                    </Grid>
                    <Grid item xs={12} className="wrapper">
                        <h3 className="heading-5">and 50+ </h3>
                        <div className="div-block-3">
                            <h3 className="heading-6"> more startups</h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} className="wrapper">
                        <div className="secondary-button">
                            <a href="#testimonials" style={{textDecoration:"none"}}>
                                <div className="text-block bold">
                                    See what our customers have to say
                                </div>
                            </a>
                            <img
                                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/607374bc2ba2bf82923693d5_secondary%20arrow.svg"
                                loading="lazy"
                                alt=""
                                className="image-6"
                            />

                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};
