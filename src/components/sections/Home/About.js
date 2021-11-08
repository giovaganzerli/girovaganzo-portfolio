import React from "react";
import TrackVisibility from "react-on-screen";

// IMPORT ELEMENTS
import Counter from "../../elements/Counter";
import SectionTitle from "../../elements/SectionTitle";
import ProgressBar from "../../elements/ProgressBar";

// IMPORT IMAGES
import imgProfile2 from "../../../assets/images/img-profile_2.png";

// INIT STATIC DATA
const dataAbout = {
    name: "Giovanni Ganzerli",
    avatarImage: imgProfile2,
    content: "Hi 👋 and welcome aboard of my portfolio 🚀! My name is Giovanni Ganzerli, aka Girovaganzo, I'm "+ (new Date().getFullYear() - 1996) +" 👴 and I'm a digital enthusiast 💪 and adventure lover 😍. Well, the truth is that I like to do a lot of stuff and I'm always looking 👀 for new things to do, learn, discover and observe. I'm a sportsman 🏃‍, cyclist 🚴, explorer 🏔, world traveller 🌍, but simultaneously passionate about technology 🖥, web 🔗, electronic 📱 and social 📣.",
};
const dataProgress = [
    {
        id: 1,
        title: "Design",
        percantage: 80,
        progressColor: "#6C6CE5",
    },
    {
        id: 2,
        title: "Development",
        percantage: 100,
        progressColor: "#FFD15C",
    },
    {
        id: 3,
        title: "Project & Team Managment",
        percantage: 90,
        progressColor: "#A42FA5",
    },
    {
        id: 4,
        title: "Initiative & Creativity",
        percantage: 100,
        progressColor: "#FF4C60",
    },
    {
        id: 5,
        title: "Social Skills",
        percantage: 80,
        progressColor: "#4cccb3",
    },
];
const dataCounter = [
    {
        id: 1,
        title: "Years old",
        count: new Date().getFullYear() - 1996,
        icon: "faCalendar",
    },
    {
        id: 2,
        title: "Km covered",
        count: 23675,
        icon: "faBicycle",
    },
    {
        id: 3,
        title: "Visited cities",
        count: 68,
        icon: "faGlobeEurope",
    },
    {
        id: 4,
        title: "Insta & YT Followers",
        count: 1310,
        icon: "faUsers",
    },
];

class SectionHomeAbout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <section id="about" className="section section-about">
                    <div className="section-wrapper">
                        <SectionTitle title="About Me"/>
                        <div className="columns">
                            <div className="column about-image is-3">
                                <div className="text-center text-md-left">
                                    <img src={dataAbout.avatarImage} alt={dataAbout.name}/>
                                </div>
                                <p className="mt-2 mb-2 is-hidden-tablet"></p>
                            </div>

                            <div className="column about-content is-9 pl-6">
                                <div className="columns about-content-wrapper p-3 mb-0">
                                    <div className="column about-content-description is-6">
                                        <p>{dataAbout.content}</p>
                                        <p className="mt-2 mb-2 is-hidden-tablet"></p>
                                    </div>
                                    <div className="column about-content-progress_bar is-6">
                                        {dataProgress.map((progress) => (
                                            <TrackVisibility
                                                once
                                                key={progress.id}
                                                className="progress_bar-wrapper"
                                            >
                                                <ProgressBar progress={progress}/>
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
                                        <Counter counterItem={counter}/>
                                    </TrackVisibility>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default SectionHomeAbout;
