import React, { useState } from "react"
import { FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import { Helmet } from "react-helmet"
import BusinessForm from "../components/BusinessForm";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Panel from '../components/Panel';
import Stand from '../components/Stand';
import InterviewerForm from "../components/InterviewerForm";
import unnamed from "../../static/unnamed 1.svg"
import vector from "../../static/Vector.svg"
import emailjs from "emailjs-com"

import "../styles/global.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Index = () => {
  let items = [
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
    { id: 4, title: 'item #4' },
    { id: 5, title: 'item #5' }
  ]

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },

  ]

  const sendEmail = (e) => {
    console.log(e.target)
    e.preventDefault();
    emailjs.sendForm('service_mx1wsgn', 'template_vpsh82k', e.target, 'user_vuffQ061MZ8EwO6mikJIc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  }

  const [interviewerForm, setInterviewerForm] = useState(false)
  const [message,setMessage] = useState('')
  const [interviewerState, setInterviewerState] = React.useState({type:"Interviewer",interviewer_name:"",year_of_graduation:"",current_employer:"",email:"",contact:"",linkedin_profile:"",message2:""})
  const interviewReset=()=>{
    setInterviewerState({type:"Interviewer",interviewer_name:"",year_of_graduation:"",current_employer:"",email:"",contact:"",linkedin_profile:"",message2:""})
  }
  const bussinessReset=()=>{
    setBussinessState({type:"Business",name:"",company:"",role:"",email:"",contact_number:"",learn:"",message:""})
  }
  const [bussinessState, setBussinessState] = React.useState({type:"Business",name:"",company:"",role:"",email:"",contact_number:"",learn:"",message:""})
  const handleInterViewerChange = (e) => {
    setMessage('')
    setInterviewerState({ ...interviewerState, [e.target.name]: e.target.value })
  }
  const handleBusinessChange = (e) => {
    setMessage('')
    setBussinessState({ ...bussinessState, [e.target.name]: e.target.value })
  }
  const handleBusinessSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...bussinessState,
      }),
    })
      .then(() => {
        setMessage("success")
        bussinessReset()
      })
      .catch((error) => {
        setMessage("fail")
      })
  }
  const handleInterviewerSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...interviewerState,
      }),
    })

    .then(() => {
      setMessage("success")
      interviewReset()
    })
      .catch((error) => {
        setMessage("fail")
      })
  }
  // const [isInterviwerForm, setInterviewerForm] = useState(false)

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
      <div className="hero">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          role="banner"
          className="navbar w-nav"
          id="nav-section"
        >
          <div className="container w-container" >
            <a href="#" className="brand w-nav-brand">
              <img
                src="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6073439ed222cb39f8564bf9_brand.svg"
                loading="lazy"
                alt=""
              />
            </a>
            <nav role="navigation" className="w-nav-menu">
              <a
                href="#home"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                About
              </a>
              <a
                href="#service"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                Services
              </a>

              <a
               href="https://app.interviewvector.com/" target="_blank" rel="noopener noreferrer"
                className="nav-link w-nav-link"
                style={{ maxWidth: "1134px" }}
              >
                Log In
              </a>
              <a
                
                href="#form"
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
        <div className="container" style={{marginTop:"100px"}} id="home">
          <div className="flex-box" >
            <div className="left-block">
              <div className="title-with-background">
                <h1 className="heading-3">HIRE RIGHT. </h1>
              </div>
              <h1 className="heading">HIRE FAST.</h1>
              <p className="paragraph-4">
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
            </div>
            <div className="right-block">
              <div className="image-wrapper div-block">
                <img
                  src="ban.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 82vw, (max-width: 767px) 48vw, (max-width: 991px) 55vw, 57vw"
                  width={734}
                  
                  alt=""
                  className="image-13"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section _1" style={{marginTop:"-40px"}}>
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
                src="syfe.png"
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
            <h3 className="heading-5">and 50+ </h3>
            <div className="div-block-3">
              <h3 className="heading-6"> more startups</h3>
            </div>
          </div>
          <div className="wrapper">
            <div className="secondary-button">
            <a href="#testimonials" style={{textDecoration:"none"}}> <div className="text-block">
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
           
          </div>
        </div>
      </div>
      <div className="section mockup mockup3" id="service" >
        <div className="container">
          <div className="flex-box">
            <div className="right-mock-up">
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
            </div>
            <div className="left-mock-up">
              <img
                src="interviewer.png"
                loading="lazy"
                width={70}
                sizes="(max-width: 479px) 100vw, 563px"
               /// srcSet="https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img-p-800.jpeg 800w, https://uploads-ssl.webflow.com/60733d2745729b18912a257d/6075c9ab223a2f2b26443d64_mockup%20img.jpg 986w"
                alt=""
                className="image-7"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section mockup mockup4" >
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
    {/*Panel*/}
    <Panel/>
     <Stand/>
     {/*testinomial */}
     <Testimonials/>
    {/*about*/}
    <AboutUs/>
      <div className="section" id="form" >
        <div className="container" >
          <div className="flex-box contact">
            <div className="left w-clearfix">
              <div className="div-block-4">
                <h1 className="heading-12">Don’t be shy</h1>
                <h1 className="heading-14 color">Say HELLO!</h1>
              </div>
              <p className={message?"paragraph-3":"paragraph-15"}>
                To learn more or reach out to us - <br/> Simply drop us a note and our
                 team <br/> will contact you at the earliest.
              </p>
             {message ==="success" && < div style={{marginTop:"30px",display:"flex",flexDirection:"row",marginBottom:"30px"}}>
              <div>
                <img src="check.png"/>
                </div>
                <div >
                  <p className="suc-message">
                    Thank You for reaching out to us! <br/>
                    Your submission has been recieved
                  </p>
</div>
              </div>
}
{message ==="fail" && < div style={{marginTop:"30px",display:"flex",flexDirection:"row",marginBottom:"30px"}}>
              <div>
                <img src="cross.png"/>
                </div>
                <div >
                  <p className="fail-message">
                    Sorry for inconvenience.<br/>Your form submission was unsuccessful!
                  </p>
</div>
              </div>
}
              <div className="div-block-6">
                <div onClick={() => {
                  console.log("Business clicked")
                  setMessage("")
                  setInterviewerForm(true)
                  
                }} className={interviewerForm ? "div-block-7" : "div-block-5"}>
                  <div className={interviewerForm ? "text-block-5 col" : "text-block-6 col"}>I am an</div>
                  <h1 className={interviewerForm ? "cont" : "cont color"}>Interviewer</h1>
                </div>
                <div onClick={() => {
                  console.log("Business clicked")
                  setMessage("")
                  setInterviewerForm(false)
                }} className={interviewerForm ? "div-block-5" : "div-block-7"}>
                  <div className={interviewerForm ? "text-block-6 col" : "text-block-5 col"}>I am a</div>
                  <h1 className={interviewerForm ? "cont color" : "cont"}>Business</h1>
                </div>
              </div>
            </div>

            {interviewerForm ? <InterviewerForm  handleInput={handleInterViewerChange} handleForm={handleInterviewerSubmit} data={interviewerState}  /> : <BusinessForm handleInput={handleBusinessChange} handleForm={handleBusinessSubmit} data={bussinessState}  />}
          </div>
        </div>
      </div>

      
      <Footer/>

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
