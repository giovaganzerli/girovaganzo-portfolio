import React  from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";

// IMPORT MODULES
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";

// IMPORT SECTIONS
import SectionHomeIntro from "../components/sections/Home/Intro";
import SectionHomeAbout from "../components/sections/Home/About";
import SectionHomeServices from "../components/sections/Home/Services";
import SectionHomeExperience from "../components/sections/Home/Experience";
import SectionHomeWorks from "../components/sections/Home/Works";
import SectionHomeBlog from "../components/sections/Home/Blog";
import SectionHomeContact from "../components/sections/Home/Contact";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Header/>
                <main className="body-wrapper">
                    <Element name="section-intro">
                        <ReactCursorPosition>
                            <SectionHomeIntro light/>
                        </ReactCursorPosition>
                    </Element>
                    <Element name="section-about">
                        <SectionHomeAbout/>
                    </Element>
                    <Element name="section-services">
                        <SectionHomeServices/>
                    </Element>
                    <Element name="section-experience">
                        <SectionHomeExperience/>
                    </Element>
                    <Element name="section-works">
                        <SectionHomeWorks/>
                    </Element>
                    <Element name="section-blog">
                        <SectionHomeBlog/>
                    </Element>
                    <Element name="section-contact">
                        <SectionHomeContact/>
                    </Element>
                </main>
                <Footer/>
            </>
        )
    }
}

export default Home;
