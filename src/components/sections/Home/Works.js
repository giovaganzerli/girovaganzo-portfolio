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

class SectionWorks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getAllItems: dataWorks,
            dataVisibleCount: 6,
            dataIncrement: 3,
            activeFilter: "",
            visibleItems: [],
            noMorePost: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLoadmore = this.handleLoadmore.bind(this);
    }

    componentDidMount() {
        this.setActiveFilter(dataCategories[0].id);
        this.setVisibleItems(this.state.getAllItems.filter((item) => item.id <= 6));
    }

    setDataVisibleCount(value) {
        this.state.dataVisibleCount = value;
        this.setState(this.state);
    }

    setActiveFilter(value) {
        this.state.activeFilter = value;
        this.setState(this.state);
    }

    setVisibleItems(value) {
        this.state.visibleItems = value;
        this.setState(this.state);
    }

    setNoMorePost(value) {
        this.state.noMorePost = value;
        this.setState(this.state);
    }

    handleChange(e) {
        e.preventDefault();
        this.setActiveFilter(parseInt(e.target.attributes.category.nodeValue));
        let tempData;
        if (parseInt(e.target.attributes.category.nodeValue) === dataCategories[0].id) {
            tempData = this.state.getAllItems.filter((data) => data.id <= this.state.dataVisibleCount);
        } else {
            tempData = this.state.getAllItems.filter(
                (data) =>
                    data.category === parseInt(e.target.attributes.category.nodeValue) && data.id <= this.state.dataVisibleCount
            );
        }
        this.setVisibleItems(tempData);
    };

    handleLoadmore(e) {
        e.preventDefault();
        let tempCount = this.state.dataVisibleCount + this.state.dataIncrement;
        if (this.state.dataVisibleCount > this.state.getAllItems.length) {
            this.setNoMorePost(true);
        } else {
            this.setDataVisibleCount(tempCount);
            if (this.state.activeFilter === dataCategories[0].id) {
                this.setVisibleItems(this.state.getAllItems.filter((data) => data.id <= tempCount));
            } else {
                this.setVisibleItems(
                    this.state.getAllItems.filter(
                        (data) => data.category === this.state.activeFilter && data.id <= tempCount
                    )
                );
            }
            if (this.state.dataVisibleCount > this.state.getAllItems.length) {
                this.setNoMorePost(true);
            }
        }
    };

    render() {
        return (
            <>
                <section id="works" className="section section-works">
                    <div className="section-wrapper">
                        <SectionTitle title="Works"/>

                        <ScrollAnimation
                            className="works-filters is-flex is-flex-wrap-wrap ml-4 mb-6"
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}
                        >
                            {dataCategories.map((category) => (
                                <Link to="!#"
                                      className={`filter-item is-capitalized is-italic mr-3 ${category.id === this.state.activeFilter ? "current is-underlined has-text-primary" : "has-text-purple-darker"}`}
                                      key={category.id}
                                      category={category.id}
                                      onClick={this.handleChange}
                                >
                                    <b>{category.title}</b>
                                </Link>
                            ))}
                        </ScrollAnimation>

                        <div className="works-cards columns is-mobile is-flex-wrap-wrap">
                            {this.state.visibleItems.map((item) => (
                                <div className="column is-4-desktop is-4-tablet is-6-mobile" key={item.id}>
                                    <CardWork works={item}/>
                                </div>
                            ))}
                        </div>

                        <div className="works-load_more is-center mt-4">
                            <button
                                className="button is-primary is-outlined"
                                onClick={this.handleLoadmore}
                                disabled={this.state.noMorePost ? "disabled" : null}
                            >
                                {this.state.noMorePost ? (
                                    "No more items"
                                ) : (
                                    <span>Load more <span role="img" aria-label="" className="ml-3"/>⏳</span>
                                )}
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default SectionWorks;