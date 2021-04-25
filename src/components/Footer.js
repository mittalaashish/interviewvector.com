import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="footer-color">
      <Container>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <span className="footer-reach">Reach Us</span>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <a
                  href="https://www.linkedin.com/company/interviewvector/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img src="tweet.png"></img>
                </a>
              </div>
              <div className="ml-15">
                <a
                  href="https://angel.co/company/interviewvector"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="link.png"></img>
                </a>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} className="footer_contact" container>
            <div>
              <p className="footer-email">contact@interviewvector.com</p>
            </div>
            <div
              className="footer-line"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              |
            </div>
            <div>
              <p className="footer-email">+91-97068-70735</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="copyright">
            <div className="footer-email">Copyright © 2021</div>

            <div className="footer-email" style={{ marginLeft: "5px" }}>
              interviewvector
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
