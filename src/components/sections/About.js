import React from "react";
import TrackVisibility from "react-on-screen";

// IMPORT ELEMENTS
import Counter from "../elements/Counter";
import SectionTitle from "../elements/SectionTitle";
import ProgressBar from "../elements/ProgressBar";

// IMPORT IMAGES
import imgProfile from "../../assets/images/img-profile.png";

// INIT STATIC DATA
const aboutContent = {
    name: "Girovaganzo",
    avatarImage: imgProfile,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec auctor dolor. Suspendisse orci nunc, venenatis at suscipit sit amet, imperdiet in ex. Suspendisse euismod eros et lacinia luctus. Nam in efficitur erat. Proin euismod cursus felis, eget porta libero laoreet vel. Cras et ultrices erat.",
};

const dataProgress = [
    {
        id: 1,
        title: "Development",
        percantage: 85,
        progressColor: "#FFD15C",
    },
    {
        id: 2,
        title: "UI/UX Design",
        percantage: 95,
        progressColor: "#FF4C60",
    },
    {
        id: 3,
        title: "Photography",
        percantage: 70,
        progressColor: "#6C6CE5",
    },
];

const dataCounter = [
    {
        id: 1,
        title: "Projects completed",
        count: 198,
        icon: "faUserAlt",
    },
    {
        id: 2,
        title: "Cup of coffee",
        count: 5670,
        icon: "faUserAlt",
    },
    {
        id: 3,
        title: "Satisfied clients",
        count: 427,
        icon: "faUserAlt",
    },
    {
        id: 4,
        title: "Nominees winner",
        count: 35,
        icon: "faUserAlt",
    },
];

function SectionAbout() {

    return (
        <>
            <section id="about" className="section section-about">
                <div className="section-wrapper">
                    <SectionTitle title="About Me" />
                    <div className="columns">
                        <div className="column about-image is-3">
                            <div className="text-center text-md-left">
                                <img src={aboutContent.avatarImage} alt={aboutContent.name} />
                            </div>
                            <p className="mt-2 mb-2 is-hidden-tablet"></p>
                        </div>

                        <div className="column about-content is-9 pl-6">
                            <div className="columns about-content-wrapper p-3 mb-0">
                                <div className="column about-content-description is-6">
                                    <p>{aboutContent.content}</p>
                                    <p className="mt-2 mb-2 is-hidden-tablet"></p>
                                </div>
                                <div className="column about-content-progress_bar is-6">
                                    {dataProgress.map((progress) => (
                                        <TrackVisibility
                                            once
                                            key={progress.id}
                                            className="progress_bar-wrapper"
                                        >
                                            <ProgressBar progress={progress} />
                                        </TrackVisibility>
                                    ))}
                                </div>
                            </div>
                            <div className="column about-actions is-12 p-3 mt-4">
                                <a href="!#" target="_blank" className="button is-primary">
                                    Presentation <span role="img" aria-label="" className="ml-3">👋</span>
                                </a>
                                <a href="!#" target="_blank" className="button is-primary ml-3">
                                    Download CV <span role="img" aria-label="" className="ml-3">💼</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-flex-wrap-wrap is-mobile mt-6">
                        {dataCounter.map((counter) => (
                            <div key={counter.id} className="column is-3-desktop is-3-tablet is-6-mobile">
                                <TrackVisibility once>
                                    <Counter counterItem={counter} />
                                </TrackVisibility>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionAbout;
