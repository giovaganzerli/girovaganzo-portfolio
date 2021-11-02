import React from "react";
import { observer } from 'controllerim';
import TrackVisibility from "react-on-screen";

// IMPORT CONTROLLER
import { SectionAboutController } from "./about.controller";

// IMPORT ELEMENTS
import Counter from "../../../elements/Counter";
import SectionTitle from "../../../elements/SectionTitle";
import ProgressBar from "../../../elements/ProgressBar";

class SectionAbout extends React.Component {

    constructor(props) {
        super(props);
        this.controller = SectionAboutController.create();
    }

    render() {
        return (
            <>
                <section id="about" className="section section-about">
                    <div className="section-wrapper">
                        <SectionTitle title="About Me" />
                        <div className="columns">
                            <div className="column about-image is-3">
                                <div className="text-center text-md-left">
                                    <img src={this.controller.dataContent.avatarImage} alt={this.controller.dataContent.name} />
                                </div>
                                <p className="mt-2 mb-2 is-hidden-tablet"></p>
                            </div>

                            <div className="column about-content is-9 pl-6">
                                <div className="columns about-content-wrapper p-3 mb-0">
                                    <div className="column about-content-description is-6">
                                        <p>{this.controller.dataContent.content}</p>
                                        <p className="mt-2 mb-2 is-hidden-tablet"></p>
                                    </div>
                                    <div className="column about-content-progress_bar is-6">
                                        {this.controller.dataProgress.map((progress) => (
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
                            {this.controller.dataCounter.map((counter) => (
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
        )
    }
}

export default observer(SectionAbout);
