import React from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";
import CardService from "../../elements/CardService";

// INIT STATIC DATA
const dataServices = [
    {
        id: 1,
        icon: "icon-terminal.svg",
        title: "Web Development",
        content: "Frontend intrefaces development such as website, reserved areas, e-commerce, web and mobile app, backend solutions for information and data management, process automatization, API services building and more.",
        color: "#F9D74C",
        contentColor: "light",
        skills: [
            {
                icon: 'icon-html.svg',
                title: 'HTML'
            },
            {
                icon: 'icon-css.svg',
                title: 'CSS'
            },
            {
                icon: 'icon-scss.svg',
                title: 'SCSS'
            },
            {
                icon: 'icon-javascript.svg',
                title: 'JavaScript'
            },
            {
                icon: 'icon-angular.svg',
                title: 'Angular'
            },
            {
                icon: 'icon-react.svg',
                title: 'React'
            },
            {
                icon: 'icon-vue.svg',
                title: 'Vue'
            },
            {
                icon: 'icon-jquery.svg',
                title: 'jQuery'
            },
            {
                icon: 'icon-php.svg',
                title: 'PHP'
            },
            {
                icon: 'icon-wordpress.svg',
                title: 'WordPress'
            },
            {
                icon: 'icon-ionic.svg',
                title: 'Ionic'
            },
            {
                icon: 'icon-git.svg',
                title: 'Git'
            },
            {
                icon: 'icon-mysql.svg',
                title: 'MySql'
            },
            {
                icon: 'icon-firebase.svg',
                title: 'Firebase'
            },
            {
                icon: 'icon-gulp.svg',
                title: 'Gulp'
            },
            {
                icon: 'icon-aws_amplify.svg',
                title: 'AWS Amplify'
            }
        ]
    },
    {
        id: 2,
        icon: "icon-pensils.svg",
        title: "Graphic",
        content: "From the design and the illustration of interfaces, websites and apps, to the creation of logos and coordinated digital identities. A passion to be honest, but I would be very proud to be able to put it in play in more professional contexts as well",
        color: "#6C6CE5",
        contentColor: "light",
        skills: [
            {
                icon: 'icon-photoshop.svg',
                title: 'PhotoShop'
            },
            {
                icon: 'icon-sketch.svg',
                title: 'Sketch'
            },
            {
                icon: 'icon-invision.svg',
                title: 'inVision'
            }
        ]
    },
    {
        id: 3,
        icon: "icon-network.svg",
        title: "Video & Social",
        content: "I'm neither a video maker nor a social media manager, but through my personal project of Girovaganzo and to other projects that I could have follow up, I've acquired skills also in shooting and video editing, social menaging and coordinated online identities creation.",
        color: "#4CCCB3",
        contentColor: "light",
        skills: [
            {
                icon: 'icon-finalcutpro.svg',
                title: 'Final Cut Pro'
            },
            {
                icon: 'icon-inshot.svg',
                title: 'InShot'
            },
            {
                icon: 'icon-canva.svg',
                title: 'Canva'
            },
            {
                icon: 'icon-instagram.svg',
                title: 'Instagram'
            }
        ]
    },
    {
        id: 4,
        icon: "icon-work_tools.svg",
        title: "Maker",
        content: "But I'm also a very concrete person and I love to think, design, create, build and fix anything. I built from scratch an acoustic guitar and an electric bass, I built a drone based on Arduino and driven by the phone accelerometer, I draw and print 3D objects of any kind and for any need,...",
        color: "#F97B8B",
        contentColor: "light",
        skills: [
            {
                icon: 'icon-3d_printer.svg',
                title: '3D Printing'
            },
            {
                icon: 'icon-fusion.svg',
                title: 'Fusion 360'
            },
            {
                icon: 'icon-arduino.svg',
                title: 'Arduino'
            }
        ]
    }
];

class SectionServices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.cardsSliderSettings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnHover: true,
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
                        autoplay: false,
                        autoplaySpeed: 3000,
                        pauseOnHover: true,
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
                        autoplay: false,
                        autoplaySpeed: 3000,
                        pauseOnHover: true,
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
                        autoplay: false,
                        autoplaySpeed: 3000,
                        pauseOnHover: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };
    }
    render() {
        return (
            <>
                <section id="services" className="section section-services">
                    <div className="section-wrapper">
                        <SectionTitle title="Services"/>
                        <Slider className="services-cards" {...this.cardsSliderSettings}>
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
        )
    }
}

export default SectionServices;
