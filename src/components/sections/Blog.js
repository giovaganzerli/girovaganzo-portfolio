import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// IMPORT ELEMENTS
import SectionTitle from "../elements/SectionTitle";
import CardBlog from "../elements/CardBlog";

// INIT STATIC DATA
const dataBlog = [
    {
        id: 1,
        title: "5 Best App Development Tool for Your Project",
        image: "1.svg",
        date: "09 February, 2020",
        category: "Reviews",
        link: 'https://news.google.com'
    },
    {
        id: 2,
        title: "Common Misconceptions About Payment",
        image: "2.svg",
        date: "07 February, 2020",
        category: "Tutorial",
        link: 'https://news.google.com'
    },
    {
        id: 3,
        title: "3 Things To Know About Startup Business",
        image: "3.svg",
        date: "06 February, 2020",
        category: "Business",
        link: 'https://news.google.com'
    },
];

function SectionBlog() {
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
            <section id="blog" className="section section-blog">
                <div className="section-wrapper">
                    <SectionTitle title="Tech Pills" />
                    <Slider className="blog-cards" {...cardsSliderSettings}>
                        {dataBlog.map((blogItem) => (
                            <CardBlog blogData={blogItem} key={blogItem.id} />
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default SectionBlog;