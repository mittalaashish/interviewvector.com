import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AboutUs from "./AboutUs";

const Stand = () => {
  return (
    <div className="stand_parent">
      <Container>
        <Grid container sm={12} xm={12}>
          <Grid item xs={12} sm={12}>
            <h3 className="heading-9">WHERE DO WE STAND RIGHT NOW?</h3>

            <div className="div-block-2 mock-up mock2 mock3" />
          </Grid>

          <Grid container xs={12} className="stand_card_parent">
            <Grid
              item
              container
              sm={12}
              md={4}
              className="stand_card stand_right_line"
            >
              <div>
                <img
                  src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073866235c4a2082a7b2d7e_icon%202.svg"
                  loading="lazy"
                  alt=""
                  className="image-10"
                />
              </div>
              <div>
                <h1 className="heading-11">6000 +</h1>
              </div>
              <div className="text-block-2 text-center">
                developers hours
                <br />
                saved
              </div>
            </Grid>
            <Grid
              container
              item
              sm={12}
              md={4}
              className="stand_card stand_right_line"
            >
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073866272cc435cd18928da_icon%203.svg"
                loading="lazy"
                alt=""
                className="image-8"
              />
              <div className="up1">less than</div>
              <h1 className="heading-11">48</h1>
              <div className="text-block-2 text-center">
                hours to interview
                <br />
                from scheduling
              </div>
            </Grid>
            <Grid item container sm={12} md={4} className="stand_card">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/60738662f38e75e43fbabf06_icon%204.svg"
                loading="lazy"
                alt=""
                className="image-8"
              />
              <div className="up1">feedback within</div>
              <h1 className="heading-11">4</h1>
              <div className="text-block-2 text-center">
                hours after
                <br />
                interview
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Stand;
