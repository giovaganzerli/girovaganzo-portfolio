import React  from 'react';
import { observer } from 'controllerim';
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";

// IMPORT CONTROLLER
import { HomeController } from './home.controller';

// IMPORT MODULES
import Header from "../../components/modules/Header";
import Footer from "../../components/modules/Footer";

// IMPORT SECTIONS
import SectionIntro from "../../components/sections/home/intro/intro.view";
import SectionAbout from "../../components/sections/home/about/about.view";
import SectionServices from "../../components/sections/home/services/services.view";
import SectionExperience from "../../components/sections/home/experience/experience.view";
import SectionWorks from "../../components/sections/home/works/works.view";
import SectionBlog from "../../components/sections/home/blog/blog.view";
import SectionContact from "../../components/sections/home/contact/contact.view";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.controller = HomeController.create();
    }

    render() {
        return (
            <>
                <Header/>
                <main className="body-wrapper">
                    <Element name="section-intro">
                        <ReactCursorPosition>
                            <SectionIntro light/>
                        </ReactCursorPosition>
                    </Element>
                    <Element name="section-about">
                        <SectionAbout/>
                    </Element>
                    <Element name="section-services">
                        <SectionServices/>
                    </Element>
                    <Element name="section-experience">
                        <SectionExperience/>
                    </Element>
                    <Element name="section-works">
                        <SectionWorks/>
                    </Element>
                    <Element name="section-blog">
                        <SectionBlog/>
                    </Element>
                    <Element name="section-contact">
                        <SectionContact/>
                    </Element>
                </main>
                <Footer/>
            </>
        )
    }
}

export default observer(Home);
