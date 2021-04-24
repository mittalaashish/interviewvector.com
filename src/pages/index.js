import React, { useState } from "react"
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Platform from "../components/Platform";
import ContactForm from "../components/ContactForm";

import "../styles/global.css"

const Index = () => {
  return (
    <div>
       <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Interview Vector</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <link rel="icon" href="ivnew.png" />
        </Helmet>
      </div>

      <Navbar/>
      <Hero/>
      <Brands/>
      <Platform/>

      <div className="section mockup col">
        <h1 className="heading2 panel">OUR INTERVIEWING PANEL</h1>
        <div className="div-block-2 small" />
        <div className="flex-box center bot">

          <div className="top1 ">

            <div className="text-block-10 ">
            <img  style={{marginLeft:"-35px"}}
                  src="desc1.png"
                  loading="lazy"
                  alt="hii"

                />

            </div>
            <div>
            <hr className="panel-line"></hr>
            </div>
            <div>
              <h6 className="desc_head">Experts from multiple <br/>technology  domains</h6>
            </div>

          </div>
          <div className="top1 ">

            <div className="text-block-10 ">
            <img  style={{marginLeft:"-35px",marginTop:"5px"}}
                  src="aero1.png"
                  loading="lazy"
                  alt="hii"

                />

            </div>
            <div>
            <hr className="panel-line"></hr>
            </div>
            <div>

              <h6 className="desc_head" >Hailing from FAANG Companies <br/>& unicorn startups</h6>
            </div>
            </div>
            <div className="top1 ">

         <div className="text-block-10 ">
         <img  style={{marginLeft:"-35px"}}
               src="brief.png"
               loading="lazy"
               alt="hii"

             />

         </div>
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div>
         <h6 className="desc_head">Professional <br/>Interviewers</h6>
         </div>
         </div>
          </div>
        <div className="flex-box center">
        <div className="top1 ">

         <div className="text-block-10 ">
         <img  style={{marginLeft:"-35px"}}
               src="use.png"
               loading="lazy"
               alt="hii"

             />

         </div>
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div>
           <h6 className="desc_head">Constantly accessed for quality <br/>and communication skills</h6>
         </div>
         </div>
         <div className="top1 ">

         <div className="text-block-10 ">
         <img  style={{marginLeft:"-35px"}}
               src="medal.png"
               loading="lazy"
               alt="hii"

             />

         </div>
         <div>
         <hr className="panel-line"></hr>
         </div>
         <div>
           <h6 className="desc_head">Capable of making wholesome <br/>trustworthy evaluations</h6>
         </div>
         </div>
         </div>

      </div>
      <div className="section overlay">
        <div className="container">
          <h2 className="heading-9">WHERE DO WE STAND RIGHT NOW?</h2>
          <div className="div-block-2 mock-up mock2 mock3" />
          <div className="flex-box mock-up-3">

            <div className="col1-copy">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073866235c4a2082a7b2d7e_icon%202.svg"
                loading="lazy"
                alt=""
                className="image-10"
              />
              <h1 className="heading-11">6000 +</h1>
              <div className="text-block-2">
                developers hours
                <br />
                saved
              </div>
            </div>
            <div className="col-3">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073866272cc435cd18928da_icon%203.svg"
                loading="lazy"
                alt=""
                className="image-8"
              />
              <div className="up1">less than</div>
              <h1 className="heading-11">48</h1>
              <div className="text-block-2">
                hours to interview
                <br />
                from  scheduling

              </div>
            </div>
            <div className="col-3-copy">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/60738662f38e75e43fbabf06_icon%204.svg"
                loading="lazy"
                alt=""
                className="image-8"
              />
              <div className="up1">feedback within</div>
              <h1 className="heading-11">4</h1>
              <div className="text-block-2">
                hours after
                <br />
                interview

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" >
        <div className="container" id="testimonials">
          <div className="text-wrapper">
            <h1 className="heading2">SEE WHAT OUR CUSTOMERS HAVE TO SAY</h1>
            <div className="div-block-2" />
          </div>

         <div style={{display:"flex",justifyContent:"center"}}>
        <div >
         <img
                  src="left1.png"
                  loading="lazy"
                  alt="hii"

                />
                </div>
                <div >
                  <img
                  src="right.png"
                  loading="lazy"
                  alt="hii"

                />
                </div>

         </div>


        </div>
      </div>
      <div className="section mockup mar" id="about" style={{marginTop:"-90px"}}  >
        <div className="container">
          <div className="flex-box" >
            <div className="about" >
              <h3 className="heading-7" >ABOUT US</h3>
              <div className="div-block-2 mock-up" />
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{marginTop:"5px"}}
                />
                <div className="text-block-9">
                Visionaries who are on a mission <br/>to redefine recruitment.
                </div>
              </div>
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{marginTop:"5px"}}
                />
                <div className="text-block-9">
                Founded by IIT-Guwahati and IIT-Delhi  <br/> alumni.
                </div>
              </div>
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{marginTop:"5px"}}
                />
                <div className="text-block-9">
                Objective is to simplify your engineer’s lives <br/>and make company growth unhindered.
                </div>
              </div>
              <div className="bullet w-clearfix">
                <img
                  src="aim.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                  style={{marginTop:"5px"}}
                />
                <div className="text-block-9">
                We make tech hiring faster, more accurate  <br/>and less expensive.
                </div>
              </div>

            </div>
            <div className="left-mock-up w-clearfix">

             <img src="team.png"/>
            </div>
          </div>
        </div>
      </div>

        <ContactForm />

      <div className="section footer-color">
        <div className="container" style={{marginTop:"-40px"}}>
          <div className="flex-box">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="" style={{ width: "450px",marginTop:"-30px" }}>
              <span className="footer-reach">Reach Us</span>
              <p className="footer-email" style={{marginTop:"30px"}}>contact@interviewvector.com</p>
              <p className="footer-email">
                +91-97068-70735
              </p>
              </div>

            </div>
            <div className="footer-col" style={{ textAlign: "right" }}>

              <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",marginTop:"-45px"}}>
                <div style={{marginRight:"30px"}}>
                <a href="https://www.linkedin.com/company/interviewvector/" target="_blank" rel="noopener noreferrer">  <img src="tweet.png"></img></a>
                </div>
                <div>

                <a href="https://angel.co/company/interviewvector" target="_blank" rel="noopener noreferrer">
                  <img src="link.png"></img></a>
                </div>
              </div>

              <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",marginTop:"45px"}}>
              <div className="footer-email">Copyright © 2021</div>
              <div className="footer-email" style={{marginLeft:"5px"}}>interviewvector</div>

              </div>

            </div>

          </div>
        </div>
      </div>
      {/*[if lte IE 9]><![endif]*/}

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}",
        }}
      />
    </div >
  )
};

export default Index
