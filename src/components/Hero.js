import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const HeroContentMobile = () => {
    return (
        <div className="hero-mobile">
            <Grid container>
                <Grid
                    className="hero-content"
                    container
                    item
                    sm={12}
                >
                    <h1 className="hero-headline">HIRE RIGHT. </h1>
                    <h1 className="hero-subtext">HIRE FAST.</h1>
                    <Grid item sm={12} className="hero-image">
                        <img
                            src="hero/mobile-2x.png"
                            srcSet="hero/mobile-1x.png 1x, hero/mobile-2x.png 2x"
                            loading="lazy"
                            alt="Hero"
                        />
                    </Grid>
                    <p className="hero-description">
                        Build talent pipelines without compromising on business growth time. Our interview-as-a-service platform provides faster, more accurate hiring rate at lower cost and lesser time . Being a talented engineer does not guarantee expertise in interviewing.
                    </p>
                    <div className="hero-button">
                        <a href="#form" style={{textDecoration:"none"}}><div className="text-block bold">  Request a demo</div></a>
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/607374bb03881b255b7b2bff_primary%20arrow.svg"
                            loading="lazy"
                            alt=""
                            className="image-6"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

const HeroContentDesktop = () => {
    return (
        <div className="hero-desktop">
            <Grid container>
                <Grid
                    className="hero-content"
                    container
                    item
                    md={5}
                >
                    <h1 className="hero-headline">HIRE RIGHT. </h1>
                    <h1 className="hero-subtext">HIRE FAST.</h1>
                    <p className="hero-description">
                        Build talent pipelines without compromising on business growth time. Our interview-as-a-service platform provides faster, more accurate hiring rate at lower cost and lesser time . Being a talented engineer does not guarantee expertise in interviewing.
                    </p>
                    <div className="hero-button">
                        <a href="#form" style={{textDecoration:"none"}}><div className="text-block bold">  Request a demo</div></a>
                        <img
                            src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/607374bb03881b255b7b2bff_primary%20arrow.svg"
                            loading="lazy"
                            alt=""
                            className="image-6"
                        />
                    </div>
                </Grid>
                <Grid item md={7}>
                    <div className="hero-image">
                        <img
                            src="hero/desktop-2x.png"
                            srcSet="hero/desktop-1x.png 1x, hero/desktop-2x.png 2x"
                            loading="lazy"
                            alt="Hero"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default () => {
    return (
      <Container className="hero-section" >
          <HeroContentMobile />
          <HeroContentDesktop />
      </Container>
    );
};

