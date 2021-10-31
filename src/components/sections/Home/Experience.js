import React from "react";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";
import Timeline from "../../elements/Timeline";

// INIT STATIC DATA
const dataEducation = [
    {
        id: 1,
        icon: 'faGraduationCap',
        title: "Electronic technician diploma",
        years: "School Licenses",
        location: "@ ITI Enrico Fermi, Modena - 2015",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
        id: 2,
        icon: 'faLanguage',
        title: "English",
        years: "Languages",
        location: "B1",
        content: "Understand the key points of familiar topics related to work, leisure, etc. Understand and deal with situations that may arise while traveling in countries where the language is spoken. Ability to produce simple texts on familiar topics or topics of personal interest. Can describe personal experiences, dreams, ambitions, opinions and personal projects.",
    },
    {
        id: 3,
        icon: 'faHandsHelping',
        title: "AGESCI",
        years: "Associations & Local commitment",
        location: "@ Gruppo scout Formigine 1",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
        id: 4,
        icon: 'faHandsHelping',
        title: "Ciclofficina Popolare Rimessa in Movimento",
        years: "Associations & Local commitment",
        location: "@ Modena",
        content: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
];

const dataExperience = [
    {
        id: 1,
        icon: 'faBriefcase',
        title: "Full Stack Developer",
        years: "Sep 2015 - Mar 2018",
        location: "@ LA Group srl",
        content: "First work experience undertaken immediately after studies. After a short training period, I took part at the creation of a new business department focused to the web development. Thanks mainly to this opportunity I acquired most of the skills that I can still rely on today: from web and mobile programming to project management through Git, Agile method and PM software.",
    },
    {
        id: 2,
        icon: 'faBriefcase',
        title: "Owner, PM & Full Stack Developer",
        years: "Mar 2018 - Jul 2019",
        location: "@ Digital Gourmet snc",
        content: "Small company of my own and vertically focused on the development of web solutions and digital products. In addition to my role as a developer, I handled also about project management, training of new resources and customer relations, from the bid submission to the product delivery and all the activities that go with it.",
    },
    {
        id: 3,
        icon: 'faBriefcase',
        title: "PM & Senior Full Stack Developer",
        years: "Jul 2019 - Sep 2020",
        location: "@ Tel&Co srl",
        content: "After a year at Digiral Gourmet, the company was absorbed by Tel&Co, a company that specializes primarily in cybersecurity, server infrastructure and web & app development. Here I continued my experience by full stack developer and project manager integrating them in a teamwork context that allowed me to delve the use of tools and working methods such as Git, Agile, time management tools,...",
    },
    {
        id: 3,
        icon: 'faBriefcase',
        title: "Quality Control Engineer & Packaging and Assembly Officer",
        years: "Mar 2021 - Today",
        location: "@ Gruppo spa / Cinelli",
        content: "An experience that does not have much to do with what has been my career so far, but that is the consequence of a series of events and thoughts that refer to my main passion: cycling. A company that produces bicycles, components and accessories for cycling and where I am responsible for packaging and quality control. However, there are also opportunities for multimedia content creation, product testing and participation in events as a mechanic.",
    }
];

function SectionExperience() {

    return (
        <>
            <section id="experience" className="section section-experience">
                <div className="section-wrapper">
                    <SectionTitle title="Experience" />
                    <div className="columns columns-timelines">
                        <div className="column column-timeline is-6 mb-6">
                            <div className="timeline-wrapper">
                                {dataExperience.slice(0).reverse().map((experience) => (
                                    <Timeline key={experience.id} data={experience} type="experience" />
                                ))}
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="column column-timeline is-6 mb-6">
                            <div className="timeline-wrapper">
                                {dataEducation.map((education) => (
                                    <Timeline key={education.id} data={education} type="education" />
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
