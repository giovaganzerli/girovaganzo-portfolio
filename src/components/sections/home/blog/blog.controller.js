import { controller } from 'controllerim';

class _SectionBlogController {

    constructor() {
        // STATIC DATA
        this.dataBlog = [
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

        this.cardsSliderSettings = {
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
    }
}

export const SectionBlogController = controller(_SectionBlogController);