import React  from "react";
import { Element } from "react-scroll";

// IMPORT MODULES
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";

// IMPORT SECTIONS
import SectionContent from "../components/sections/Globals/Content";
import SectionSingleWorkMeta from "../components/sections/SingleWork/Meta";

class SingleWork extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Header/>
                <main className="body-wrapper">
                    <Element name="section-content">
                        <SectionContent backLink="/#works"/>
                    </Element>
                    <Element name="section-meta">
                        <SectionSingleWorkMeta />
                    </Element>
                </main>
                <Footer/>
            </>
        )
    }
}

export default SingleWork;
