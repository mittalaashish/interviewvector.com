import React, { useState } from "react"
import { FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import BusinessForm from "../components/BusinessForm";
import InterviewerForm from "../components/InterviewerForm";
import unnamed from "../../static/unnamed 1.svg"
import vector from "../../static/Vector.svg"
import emailjs from "emailjs-com"

import "../styles/global.css"

const Index = () => {

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },

  ]

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_lh5n34q', e.target, 'user_IRfWqLOrrNthBdJhxEEUu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  }

  const [interviewerForm, setInterviewerForm] = useState(false)

  // const [isInterviwerForm, setInterviewerForm] = useState(false)

  return (
    <div>
      <div className="hero">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          role="banner"
          className="navbar w-nav"
        >
          <div className="container w-container">
            <a href="#" className="brand w-nav-brand">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073439ed222cb39f8564bf9_brand.svg"
                loading="lazy"
                alt=""
              />
            </a>
            <nav role="navigation" className="w-nav-menu">
              <a
                href="#"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                Home
              </a>
              <a
                href="#"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                About
              </a>
              <a
                href="#"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                Services
              </a>

              <a
                href="#"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                Log In
              </a>
              <a
                href="#"
                className="nav-link button w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                Get In Touch
              </a>
            </nav>
            <div
              className="w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="w-icon-nav-menu" />
            </div>
          </div>
          <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" />
        </div>
        <div className="container">
          <div className="flex-box">
            <div className="left-block">
              <div className="title-with-background">
                <h1 className="heading-3">HIRE RIGHT. </h1>
              </div>
              <h1 className="heading">HIRE FAST.</h1>
              <p className="paragraph-4">
                Build talent pipelines without compromising on business growth time. Our interview-as-a-service platform provides faster, more accurate hiring rate at lower cost and lesser time . Being a talented engineer does not guarantee expertise in interviewing.
              </p>
              <div className="hero-button">
                <div className="text-block bold">Request a demo </div>
                <img
                  src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/607374bb03881b255b7b2bff_primary%20arrow.svg"
                  loading="lazy"
                  alt=""
                  className="image-6"
                />
              </div>
            </div>
            <div className="right-block">
              <div className="image-wrapper div-block">
                <img
                  src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075bf1282a9bc2eb5172ed3_hero1.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 82vw, (max-width: 767px) 48vw, (max-width: 991px) 55vw, 57vw"
                  width={734}
                  srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075bf1282a9bc2eb5172ed3_hero1-p-500.png 500w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075bf1282a9bc2eb5172ed3_hero1-p-800.png 800w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075bf1282a9bc2eb5172ed3_hero1-p-1080.png 1080w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075bf1282a9bc2eb5172ed3_hero1.png 1468w"
                  alt=""
                  className="image-13"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section _1">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="heading2">BRANDS TRUSTING US</h1>
            <div className="div-block-2" />
          </div>
          <div className="flex-box logo">
            <div className="logo-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073695722bcca011bb8419d_BharatPe.png"
                loading="lazy"
                width={116}
                alt=""
                className="image-5"
              />
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073694f22bcca3179b84172_pagarbook.png"
                loading="lazy"
                width={102}
                alt=""
                className="image-4"
              />
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073695b55e0d1fcc6923c7b_Indiagold.png"
                loading="lazy"
                width={199}
                alt=""
                className="image"
              />
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073694ebc149d6b498db3eb_PAYO-LOGO%201.png"
                loading="lazy"
                width={70}
                alt=""
                className="image-3"
              />
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073694fed8dc60e2bd3a16f_MindTickle.png"
                loading="lazy"
                width={70}
                sizes="(max-width: 479px) 100vw, 270px"
                srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073694fed8dc60e2bd3a16f_MindTickle-p-500.png 500w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073694fed8dc60e2bd3a16f_MindTickle.png 538w"
                alt=""
                className="image-2"
              />
            </div>
          </div>
          <div className="wrapper">
            <h3 className="heading-5">and 30+ more</h3>
            <div className="div-block-3">
              <h3 className="heading-6">emerging startups</h3>
            </div>
          </div>
          <div className="wrapper">
            <div className="secondary-button">
              <div className="text-block">
                See what our customers have to say
              </div>
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/607374bc2ba2bf82923693d5_secondary%20arrow.svg"
                loading="lazy"
                alt=""
                className="image-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section mockup mockup3">
        <div className="container">
          <div className="flex-box">
            <div className="right-mock-up">
              <h3 className="heading-7">INTERVIEW AS SERVICE</h3>
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
                />
                <div className="text-block-9">
                  Professional interview experience
                </div>
              </div>
            </div>
            <div className="left-mock-up">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img.jpg"
                loading="lazy"
                width={70}
                sizes="(max-width: 479px) 100vw, 563px"
                srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img.jpg 986w"
                alt=""
                className="image-7"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section mockup mockup4">
        <div className="container">
          <div className="flex-box">
            <div className="left-mock-up-2">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg"
                loading="lazy"
                width={70}
                sizes="(max-width: 479px) 100vw, 563px"
                srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075cb843b036c1ba8386fe9_mockup%20img2.jpg 1206w"
                alt=""
                className="image-7"
              />
            </div>
            <div className="right-mock-up-1">
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
            </div>
          </div>
        </div>
      </div>
      <div className="section mockup col">
        <h1 className="heading2 panel">OUR INTERVIEWING PANEL</h1>
        <div className="div-block-2 small" />
        <div className="flex-box center bot">
          <div className="top1">
            <div className="text-block-10 div-block-11">
              Subject matter experts in multiple programming languages <br />
            </div>
          </div>
          <div className="top1 marg">
            <div className="text-block-10 _2">
              Professional and trained interviewers
              <br />
            </div>
          </div>
          <div className="top1">
            <div className="text-block-10 _3">
              Hailing from FAANG companies &nbsp;&amp; &nbsp;unicorn startups
            </div>
          </div>
        </div>
        <div className="flex-box center">
          <div className="bot-1">
            <div className="text-block-10 div-block-11">
              Constantly assessed for quality and training needs
              <br />
            </div>
          </div>
          <div className="top1 marg">
            <div className="text-block-10 _2">
              Capable of making wholesome trustworthy evaluations
              <br />
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
                hours interview
                <br />
                schedule <br />
                guaranteed
              </div>
            </div>
            <div className="col-3-copy">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/60738662f38e75e43fbabf06_icon%204.svg"
                loading="lazy"
                alt=""
                className="image-8"
              />
              <div className="up1">less than</div>
              <h1 className="heading-11">4</h1>
              <div className="text-block-2">
                hours after
                <br />
                interview
                <br />
                guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section testimonial">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="heading2">SEE WHAT OUR CUSTOMERS HAVE TO SAY</h1>
            <div className="div-block-2" />
          </div>
          <div
            data-animation="slide"
            data-duration={500}
            data-infinite={1}
            className="slider w-slider"
            role="region"
            aria-label="carousel"
          >
            <div className="mask w-slider-mask" id="w-slider-mask-0">

              <Carousel breakPoints={breakpoints}>

                <div
                  className="slide w-slide"
                  aria-label="3 of 4"
                  role="group"
                  style={{
                    transform: "translateX(0px)",
                    opacity: 1,
                    transition: "transform 500ms ease 0s",
                  }}
                >
                  <div className="card">
                    <div className="flex-box testimonial">
                      <div className="left-side">
                        <img
                          src={unnamed}
                          loading="lazy"
                          alt=""
                        />
                        <div className="text-block-3">
                          Engineering Lead,
                        <br />
                        Syfe
                      </div>
                      </div>
                      <div className="right-side">
                        <div className="text-block-4">
                          Mukesh
                        <br />
                        Gupta
                      </div>
                      </div>
                    </div>
                    <div className="testimonial-bar" />
                    <p className="paragraph-2">
                      "We closed our positions faster and in a cost-efficient manner. Their team was very responsive, flexible, and was able to customize the offering as per our requirement. If you're a startup and looking to speed up your hiring process, do give them a shot."
                  </p>
                  </div>
                </div>

                <div
                  className="slide w-slide"
                  aria-label="3 of 4"
                  role="group"
                  style={{
                    transform: "translateX(0px)",
                    opacity: 1,
                    transition: "transform 500ms ease 0s",
                  }}
                >
                  <div className="card">
                    <div className="flex-box testimonial">
                      <div className="left-side">
                        <img
                          src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073945b51fa454c0f83965e_02.svg"
                          loading="lazy"
                          alt=""
                        />
                        <div className="text-block-3">
                          CTO,
                        <br />
                        BharatPe


                        </div>
                      </div>
                      <div className="right-side">
                        <div className="text-block-4">
                          Vijay
                        <br />
                        Aggarwal
                        <br />
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-bar" />
                    <p className="paragraph-2">
                      "A word of appreciation for InterviewVector - Their
                      interviewservice has been a game changer. I have been able
                      tosignificantly scale my recruitment process. And also
                      theirpre-vetted sourced candidates have been up to the
                      mark.Having a partnership with them has significantly
                      improvedmy time-to-hire and reduced cost-to-hire on several
                      keyroles while my team has been able to focus on our
                      coreproduct development. Thank you InterviewVector andthanks
                      Sachin!"
                  </p>
                  </div>
                </div>

                <div
                  className="slide w-slide"
                  aria-label="3 of 4"
                  role="group"
                  style={{
                    transform: "translateX(0px)",
                    opacity: 1,
                    transition: "transform 500ms ease 0s",
                  }}
                >
                  <div className="card">
                    <div className="flex-box testimonial">
                      <div className="left-side">
                        <img
                          src={vector}
                          loading="lazy"
                          alt=""
                        />
                        <div className="text-block-3">
                          Director of HR,
                        <br />
                        Airmeet
                      </div>
                      </div>
                      <div className="right-side">
                        <div className="text-block-4">
                          Meena
                        <br />
                        Kumari R.
                      </div>
                      </div>
                    </div>
                    <div className="testimonial-bar" />
                    <p className="paragraph-2">
                      I never knew interview as service existed until i met Sachin Mittal, after I saw InterviewVector's sample interview recordings I was super impressed as their assessment is not only detailed but very insightful and top notch and actually aids in decision making. I was convinced that I am going to save my tech team valuable time and focus on hiring for fitment.
                      Thanks to Sachin Mittal and team,... I see a long time mutual benefit with you folks.

                      Keep up the good work!
                  </p>
                  </div>
                </div>
              </Carousel>



            </div>
            <div
              className="w-slider-arrow-left"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="previous slide"
            >
              <div className="icon-2 w-icon-slider-left" />
            </div>
            <div
              className="w-slider-arrow-right"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="next slide"
            >
              <div className="icon w-icon-slider-right" />
            </div>
            <div className="slide-nav w-slider-nav w-round">
              <div
                className="w-slider-dot w-active"
                data-wf-ignore
                aria-label="Show slide 1 of 2"
                aria-selected="true"
                role="button"
                tabIndex={0}
              />
              <div
                className="w-slider-dot"
                data-wf-ignore
                aria-label="Show slide 2 of 2"
                aria-selected="false"
                role="button"
                tabIndex={-1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section mockup mar">
        <div className="container">
          <div className="flex-box">
            <div className="about">
              <h3 className="heading-7">ABOUT US</h3>
              <div className="div-block-2 mock-up" />
              <p className="paragraph">
                We are visionaries who are on a mission to redefine recruitment.
                <br />
                <br />
                Founded by IITG and IITD alumni - Sachin Mittal and Aashish
                Mittal.
                <br />
                <br />
                Our objective is to simplify engineer’s lives and make company
                growth unhindered.
                <br />
                <br />
                We make tech hiring faster, more accurate and less expensive.
              </p>
            </div>
            <div className="left-mock-up w-clearfix">
              <div className="f1">
                <img
                  src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075e9f2ab2eb021179539ec_f1.jpg"
                  loading="lazy"
                  alt=""
                  className="image-15"
                />
                <div className="title">Sachin Mittal</div>
                <div className="position">CEO</div>
                <div className="collegr">
                  IITG - Comp. Science
                  <br />
                  2016 Batch
                </div>
                <div className="text-block-11">
                  Ex-Tower Research
                  <br />
                   Capital LLC,
                  <br />
                  Ex-Eightfold AI
                </div>
              </div>
              <div className="f2">
                <img
                  src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075e9f2064bac06dd8d9bfb_f2.jpg"
                  loading="lazy"
                  alt=""
                  className="image-15"
                />
                <div className="title">Aashish Mittal</div>
                <div className="position">CTO</div>
                <div className="collegr">
                  IITD - Comp. Science
                  <br />
                  2012 Batch
                </div>
                <div className="text-block-11">
                  Soft. Arch. turned Trader,
                  <br />
                  Tower Research <br />
                  Capital LLC
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="flex-box contact">
            <div className="left w-clearfix">
              <div className="div-block-4">
                <h1 className="heading-12">Don’t be shy</h1>
                <h1 className="heading-14 color">Say HELLO!</h1>
              </div>
              <p className="paragraph-3">
                To learn more or reach out to us - simply drop us a note and our
                HR team will contact you at the earliest.
              </p>
              <div className="div-block-6">
                <div onClick={() => {
                  console.log("Business clicked")
                  setInterviewerForm(true)
                }} className={interviewerForm ? "div-block-7" : "div-block-5"}>
                  <div className={interviewerForm ? "text-block-5 col" : "text-block-6 col"}>I am an</div>
                  <h1 className={interviewerForm ? "cont" : "cont color"}>Interviewer</h1>
                </div>
                <div onClick={() => {
                  console.log("Business clicked")
                  setInterviewerForm(false)
                }} className={interviewerForm ? "div-block-5" : "div-block-7"}>
                  <div className={interviewerForm ? "text-block-6" : "text-block-5"}>I am a</div>
                  <h1 className={interviewerForm ? "cont color" : "cont"}>Business</h1>
                </div>
              </div>
            </div>

            {interviewerForm ? <InterviewerForm onSubmit={sendEmail} /> : <BusinessForm onSubmit={sendEmail} />}
          </div>
        </div>
      </div>

      <div className="section footer-color">
        <div className="container">
          <div className="flex-box">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="footer-col" style={{ width: "200px" }}>
                <div className="text-block-13">Home</div>
                <div className="text-block-13 normal" style={{ width: "121px" }}>Our Customers</div>
                <div className="text-block-13 normal">Services</div>
                <div className="text-block-13 normal" style={{ width: "121px" }}>Our Panel</div>
              </div>
              <div className="footer-col">
                <div className="text-block-13 normal">Testimonials</div>
                <div className="text-block-13 normal">About Us</div>
                <div className="text-block-13 normal" style={{ width: "121px" }}>Request Demo</div>
                <div className="text-block-13 normal">Login</div>
              </div>
            </div>
            <div className="footer-col" style={{ textAlign: "right" }}>
              <div className="text-block-13">Reach Us</div>
              <div className="text-block-13 normal">contact@interviewvector.com</div>
              <div className="text-block-13 normal">
                +91-97068-70735
              </div>
              <div className="text-block-13 normal">Copyright © 2021 Interviewvector | Gurgaon</div>
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
}

export default Index
