import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";
import CardWork from "../../elements/CardWork";

// INIT STATIC DATA
const dataCategories = [
    {
        id: 1,
        title: "Everything",
    },
    {
        id: 2,
        title: "Creative",
    },
    {
        id: 3,
        title: "Art",
    },
    {
        id: 4,
        title: "Design",
    },
    {
        id: 5,
        title: "Branding",
    },
];

const dataWorks = [
    {
        id: 1,
        title: "Project Managment Illustration",
        category: 3,
        image: "1.svg",
        link: "/single-work-example",
    },
    {
        id: 2,
        title: "Guest App Walkthrough Screens",
        category: 2,
        image: "2.svg",
        link: "/single-work-example",
    },
    {
        id: 3,
        title: "Delivery App Wireframe",
        category: 5,
        image: "3.svg",
        link: "/single-work-example",
    },
    {
        id: 4,
        title: "Onboarding Motivation",
        category: 2,
        image: "4.svg",
        link: "/single-work-example",
    },
    {
        id: 5,
        title: "iMac Mockup Design",
        category: 3,
        image: "5.svg",
        link: "/single-work-example",
    },
    {
        id: 6,
        title: "Game Store App Concept",
        category: 4,
        image: "6.svg",
        link: "/single-work-example",
    },
    {
        id: 7,
        title: "Project Managment Illustration",
        category: 3,
        image: "3.svg",
        link: "/single-work-example",
    },
    {
        id: 8,
        title: "Guest App Walkthrough Screens",
        category: 4,
        image: "1.svg",
        link: "/single-work-example",
    },
    {
        id: 9,
        title: "Delivery App Wireframe",
        category: 5,
        image: "4.svg",
        link: "/single-work-example",
    },
    {
        id: 10,
        title: "Game Store App Concept",
        category: 4,
        image: "6.svg",
        link: "/single-work-example",
    },
    {
        id: 11,
        title: "Project Managment Illustration",
        category: 3,
        image: "3.svg",
        link: "/single-work-example",
    },
    {
        id: 12,
        title: "Guest App Walkthrough Screens",
        category: 4,
        image: "1.svg",
        link: "/single-work-example",
    },
    {
        id: 13,
        title: "Delivery App Wireframe",
        category: 5,
        image: "4.svg",
        link: "/single-work-example",
    },
];

function SectionWorks() {
    const [getAllItems] = useState(dataWorks);
    const [dataVisibleCount, setDataVisibleCount] = useState(6);
    const [dataIncrement] = useState(3);
    const [activeFilter, setActiveFilter] = useState("");
    const [visibleItems, setVisibleItems] = useState([]);
    const [noMorePost, setNoMorePost] = useState(false);

    useEffect(() => {
        setActiveFilter(dataCategories[0].id);
        setVisibleItems(getAllItems.filter((item) => item.id <= 6));
    }, [getAllItems]);

    const handleChange = (e) => {
        e.preventDefault();
        setActiveFilter(parseInt(e.target.parentElement.attributes.category.nodeValue));
        let tempData;
        if (parseInt(e.target.parentElement.attributes.category.nodeValue) === dataCategories[0].id) {
            tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
        } else {
            tempData = getAllItems.filter(
                (data) =>
                    data.category === parseInt(e.target.parentElement.attributes.category.nodeValue) && data.id <= dataVisibleCount
            );
        }
        setVisibleItems(tempData);
    };

    const handleLoadmore = (e) => {
        e.preventDefault();
        let tempCount = dataVisibleCount + dataIncrement;
        if (dataVisibleCount > getAllItems.length) {
            setNoMorePost(true);
        } else {
            setDataVisibleCount(tempCount);
            if (activeFilter === dataCategories[0].id) {
                setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
            } else {
                setVisibleItems(
                    getAllItems.filter(
                        (data) => data.category === activeFilter && data.id <= tempCount
                    )
                );
            }
        }
    };

    return (
        <>
            <section id="works" className="section section-works">
                <div className="section-wrapper">
                    <SectionTitle title="Works" />

                    <ScrollAnimation
                        className="works-filters is-flex is-flex-wrap-wrap ml-4 mb-6"
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}
                    >
                        {dataCategories.map((category) => (
                            <Link className={`filter-item is-capitalized is-italic mr-3 ${category.id === activeFilter ? "current is-underlined has-text-primary" : "has-text-purple-darker"}`}
                                  key={category.id}
                                  category={category.id}
                                  onClick={handleChange}
                            >
                                <b>{category.title}</b>
                            </Link>
                        ))}
                    </ScrollAnimation>

                    <div className="works-cards columns is-mobile is-flex-wrap-wrap">
                        {visibleItems.map((item) => (
                            <div className="column is-4-desktop is-4-tablet is-6-mobile" key={item.id}>
                                <CardWork works={item} />
                            </div>
                        ))}
                    </div>

                    <div className="works-load_more is-center mt-4">
                        <button
                            className="button is-primary is-outlined"
                            onClick={handleLoadmore}
                            disabled={noMorePost ? "disabled" : null}
                        >
                            {noMorePost ? (
                                "No more items"
                            ) : (
                                <span>Load more <span role="img" aria-label="" className="ml-3" />⏳</span>
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionWorks;