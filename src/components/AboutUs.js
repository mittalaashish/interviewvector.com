import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div>
              <h3 className="heading-7">ABOUT US</h3>
            </div>
            <div className="about_heading">
              <div className="div-block-2 mock-up" />
            </div>
            <div className="about_detail">
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{ marginTop: "5px" }}
                />
                <div className="text-block-9">
                  Visionaries who are on a mission <br />
                  to redefine recruitment.
                </div>
              </div>
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{ marginTop: "5px" }}
                />
                <div className="text-block-9">
                  Founded by IIT-Guwahati and IIT-Delhi <br /> alumni.
                </div>
              </div>
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{ marginTop: "5px" }}
                />
                <div className="text-block-9">
                  Objective is to simplify your engineer’s lives <br />
                  and make company growth unhindered.
                </div>
              </div>
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{ marginTop: "5px" }}
                />
                <div className="text-block-9">
                  We make tech hiring faster, more accurate <br />
                  and less expensive.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="about_image">
            <img src="team.png" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
