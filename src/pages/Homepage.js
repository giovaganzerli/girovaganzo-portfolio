import React  from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";

// IMPORT MODULES
import Header from "../components/modules/Header";

// IMPORT SECTIONS
import SectionIntro from "../components/sections/Intro";
import SectionAbout from "../components/sections/About";
import SectionServices from "../components/sections/Services";
import SectionExperience from "../components/sections/Experience";
import SectionWorks from "../components/sections/Works";
import SectionBlog from "../components/sections/Blog";
import SectionContact from "../components/sections/Contact";

function Homepage() {

    return (
        <>
            <Header />
            <main className="body-wrapper">
                <Element name="section-intro">
                    <ReactCursorPosition>
                        <SectionIntro light />
                    </ReactCursorPosition>
                </Element>
                <Element name="section-about">
                    <SectionAbout />
                </Element>
                <Element name="section-services">
                    <SectionServices />
                </Element>
                <Element name="section-experience">
                    <SectionExperience />
                </Element>
                <Element name="section-works">
                    <SectionWorks />
                </Element>
                <Element name="section-blog">
                    <SectionBlog />
                </Element>
                <Element name="section-contact">
                    <SectionContact />
                </Element>
            </main>
        </>
    );
}

export default Homepage;
