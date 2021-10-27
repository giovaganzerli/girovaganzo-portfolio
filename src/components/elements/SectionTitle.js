import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function SectionTitle({ title }) {
    return (
        <>
            <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
                className="block-section_title pb-6"
            >
                <h2 className="has-text-primary mb-6">{title}</h2>
            </ScrollAnimation>
        </>
    );
}

export default SectionTitle;
