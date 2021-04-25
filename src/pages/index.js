import React from "react"
import {Helmet} from "react-helmet";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Platform from "../components/Platform";
import ContactForm from "../components/ContactForm";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Panel from '../components/Panel';
import Stand from '../components/Stand';

import "../styles/global.css"

const Index = () => {
    return (
        <div>
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Interview Vector</title>
                    {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                    <link rel="icon" href="ivnew.png"/>
                </Helmet>
            </div>

            <Navbar/>
            <Hero/>
            <Brands/>
            <Platform/>
            <Panel/>
            <Stand/>
            <Testimonials/>
            <AboutUs/>
            <ContactForm/>
            <Footer/>

            {/*[if lte IE 9]><![endif]*/}

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        ".tb_button {padding:1px;cursor:pointer;border-right: 1px solid #8b8b8b;border-left: 1px solid #FFF;border-bottom: 1px solid #fff;}.tb_button.hover {borer:2px outset #def; background-color: #f8f8f8 !important;}.ws_toolbar {z-index:100000} .ws_toolbar .ws_tb_btn {cursor:pointer;border:1px solid #555;padding:3px}   .tb_highlight{background-color:yellow} .tb_hide {visibility:hidden} .ws_toolbar img {padding:2px;margin:0px}",
                }}
            />
        </div>
    )
}

export default Index
