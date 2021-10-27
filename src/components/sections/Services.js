import React from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";

// IMPORT ELEMENTS
import SectionTitle from "../elements/SectionTitle";
import CardService from "../elements/CardService";

// INIT STATIC DATA
const dataServices = [
    {
        id: 1,
        icon: "icon-pensils.svg",
        title: "Graphic",
        content: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
        color: "#6C6CE5",
        contentColor: "light",
    },
    {
        id: 2,
        icon: "icon-terminal.svg",
        title: "Web Development",
        content: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
        color: "#F9D74C",
        contentColor: "light",
    },
    {
        id: 3,
        icon: "icon-work_tools.svg",
        title: "Maker",
        content: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
        color: "#F97B8B",
        contentColor: "light",
    },
    {
        id: 4,
        icon: "icon-network.svg",
        title: "Video & Social",
        content: "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
        color: "#4CCCB3",
        contentColor: "light",
    },
];

function SectionServices() {
    const cardsSliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    infinite: true,
                    fade: true,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section id="services" className="section section-services">
                <div className="section-wrapper">
                    <SectionTitle title="Services" />
                    <Slider className="services-cards" {...cardsSliderSettings}>
                        {dataServices.map((service) => (
                            <CardService service={service} key={service.id}/>
                        ))}
                    </Slider>
                    <div className="mt-5 text-center">
                        <p className="mb-0">
                            Looking for a custom job?{" "}
                            <Link
                                className="has-text-primary"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <u>Click here</u>
                            </Link>{" "}
                            to contact me! <span role="img" aria-label="">👋</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionServices;
