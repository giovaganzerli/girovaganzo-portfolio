import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Timeline({ data, type }) {
    const { years, title, location, content } = data;
    const timelineType = type;

    return (
        <>
            <ScrollAnimation
                className={`block-timeline timeline-${timelineType}`}
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
            >
                <div className="timeline-content">
                    <span className="timeline-time">{years}</span>
                    <h4 className="timeline-title is-family-secondary has-text-primary">{title}</h4>
                    <span className="timeline-location has-text-primary"><i>{location}</i></span>
                    <p className="mt-2">{content}</p>
                </div>
                <FontAwesomeIcon icon={timelineType === 'education' ? faBriefcase : faGraduationCap} size="2x" className="timeline-icon has-text-primary" />
            </ScrollAnimation>
        </>
    );
}

export default Timeline;
