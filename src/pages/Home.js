import React  from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";

// IMPORT MODULES
import Header from "../components/modules/Header";

// IMPORT SECTIONS
import SectionIntro from "../components/sections/Home/Intro";
import SectionAbout from "../components/sections/Home/About";
import SectionServices from "../components/sections/Home/Services";
import SectionExperience from "../components/sections/Home/Experience";
import SectionWorks from "../components/sections/Home/Works";
import SectionBlog from "../components/sections/Home/Blog";
import SectionContact from "../components/sections/Home/Contact";

function Home() {

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

export default Home;
