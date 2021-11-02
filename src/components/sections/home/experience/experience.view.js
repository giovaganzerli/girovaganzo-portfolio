import React from "react";
import { observer } from 'controllerim';

// IMPORT CONTROLLER
import { SectionExperienceController } from "./experience.controller";

// IMPORT ELEMENTS
import SectionTitle from "../../../elements/SectionTitle";
import Timeline from "../../../elements/Timeline";

class SectionExperience extends React.Component {

    constructor(props) {
        super(props);
        this.controller = SectionExperienceController.create();
    }

    render() {
        return (
            <>
                <section id="experience" className="section section-experience">
                    <div className="section-wrapper">
                        <SectionTitle title="Experience" />
                        <div className="columns columns-timelines">
                            <div className="column column-timeline is-6 mb-6">
                                <div className="timeline-wrapper">
                                    {this.controller.dataExperience.slice(0).reverse().map((experience) => (
                                        <Timeline key={experience.id} data={experience} type="experience" />
                                    ))}
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="column column-timeline is-6 mb-6">
                                <div className="timeline-wrapper">
                                    {this.controller.dataEducation.map((education) => (
                                        <Timeline key={education.id} data={education} type="education" />
                                    ))}
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default observer(SectionExperience);
