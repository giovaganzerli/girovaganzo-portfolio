import React from "react";

// IMPORT ELEMENTS
import SectionTitle from "../elements/SectionTitle";
import Timeline from "../elements/Timeline";

// INIT STATIC DATA
const dataEducation = [
    {
        id: 1,
        title: "Acamedic Degree",
        years: "2019 - Present",
        location: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
        id: 2,
        title: "Bachelor’s Degree",
        years: "2017 - 2013",
        location: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
        id: 3,
        title: "Honours Degree",
        years: "2013 - 2009",
        location: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
];

const dataExperience = [
    {
        id: 1,
        title: "Web Designer",
        years: "2019 - Present",
        location: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
        id: 2,
        title: "Front-End Developer",
        years: "2017 - 2013",
        location: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
        id: 3,
        title: "Back-End Developer",
        years: "2013 - 2009",
        location: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
];

function SectionExperience() {

    return (
        <>
            <section id="experience" className="section section-experience">
                <div className="section-wrapper">
                    <SectionTitle title="Experience" />
                    <div className="columns columns-timelines">
                        <div className="column column-timeline is-6">
                            <div className="timeline-wrapper">
                                {dataEducation.map((education) => (
                                    <Timeline key={education.id} data={education} type="education" />
                                ))}
                                <span className="line"></span>
                            </div>
                        </div>

                        <div className="column column-timeline is-6">
                            <div className="timeline-wrapper">
                                {dataExperience.map((experience) => (
                                    <Timeline key={experience.id} data={experience} type="experience" />
                                ))}
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionExperience;
