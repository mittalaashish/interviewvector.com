import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


const Testimonials = () => {
    return (
        <div className="testimonial_parent" id="testimonials">
            <Container>
                <Grid container className="testimonial-cards">
                    <Grid item xs={12}>
                        <div className="text-wrapper">
                            <h1 className="heading2">SEE WHAT OUR CUSTOMERS HAVE TO SAY</h1>
                            <div className="div-block-2"/>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} className="test_image">
                        <div><img src="india.png" loading="lazy" alt="hii"/></div>
                    </Grid>
                    <Grid item xs={12} md={6} className="test_image">
                        <div><img src="bharat.png" loading="lazy" alt="hii"/></div>
                    </Grid>
                    <Grid item xs={12} md={6} className="test_image">
                        <div><img src="sife.png" loading="lazy" alt="hii"/></div>
                    </Grid>
                    <Grid item xs={12} md={6} className="test_image">
                        <div><img src="airmeet.png" loading="lazy" alt="hii"/></div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Testimonials
