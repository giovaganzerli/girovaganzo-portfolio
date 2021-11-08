import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

// IMPORT SERVICES
import { getWorks } from "../../../services/wp/posts";
import { getWorksCategories } from "../../../services/wp/taxonomies";
import { getAttachment } from "../../../services/wp/attachments";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";
import CardWork from "../../elements/CardWork";

class SectionHomeWorks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            works: [],
            categories: [],
            settings: {
                dataVisibleCount: 6,
                dataIncrement: 3,
                activeFilter: 0,
                visibleItems: [],
                noMorePost: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLoadmore = this.handleLoadmore.bind(this);
    }

    componentDidMount() {

        getWorksCategories('')
            .then(items => {
                this.setCategories(items.data);
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevState.categories.length && !prevState.works.length) {
            getWorks('')
                .then(items => {
                    this.setWorks(items.data);

                    this.setActiveFilter(0);
                    this.setVisibleItems(this.state.works.filter((item, index) => index <= this.state.settings.dataVisibleCount));
                });
        }
    }

    setCategories(value) {
        value.map((term) => {
            let _term = {
                id: term.id,
                count: term.count,
                title: term.name,
                slug: term.slug,
                description: term.description,
                link: term.link
            };

            this.state.categories.push(_term);
        });
        this.setState(this.state);
    }

    setWorks(value) {
        value.map((post) => {
            let _post = {
                id: post.id,
                title: post.title.rendered,
                slug: post.slug,
                category: {},
                image: {
                    id: parseInt(post['_links']['wp:featuredmedia'][0].href.split('/wp-json/wp/v2/media/')[1]),
                    url: ''
                },
                link: post.link.split('girovaganzo.bike')[1]
            };
            getAttachment(_post.image.id)
                .then(item => {
                    _post.image.url = item.data.guid.rendered;
                    this.setState(this.state);
                });
            _post.category = this.state.categories.filter(item => {
                return item.id === post.category_works[0]
            })

            this.state.works.push(_post);
        });
        this.setState(this.state);
    }

    setDataVisibleCount(value) {
        this.state.settings.dataVisibleCount = value;
        this.setState(this.state);
    }

    setActiveFilter(value) {
        this.state.settings.activeFilter = value;
        this.setState(this.state);
    }

    setVisibleItems(value) {
        this.state.settings.visibleItems = value;
        this.setState(this.state);
    }

    setNoMorePost(value) {
        this.state.settings.noMorePost = value;
        this.setState(this.state);
    }

    handleChange(e) {
        e.preventDefault();
        this.setActiveFilter(parseInt(e.target.attributes.category.nodeValue));
        let tempData;
        if (parseInt(e.target.attributes.category.nodeValue) === 0) {
            tempData = this.state.works.filter((data, index) => index <= this.state.settings.dataVisibleCount);
        } else {
            tempData = this.state.works.filter(
                (data, index) =>
                    data.category[0].id === parseInt(e.target.attributes.category.nodeValue) && index <= this.state.settings.dataVisibleCount
            );
        }
        this.setVisibleItems(tempData);
    };

    handleLoadmore(e) {
        e.preventDefault();
        let tempCount = this.state.settings.dataVisibleCount + this.state.settings.dataIncrement;
        if (this.state.settings.dataVisibleCount > this.state.works.length) {
            this.setNoMorePost(true);
        } else {
            this.setDataVisibleCount(tempCount);
            if (this.state.settings.activeFilter === 0) {
                this.setVisibleItems(this.state.works.filter((data, index) => index <= tempCount));
            } else {
                this.setVisibleItems(
                    this.state.works.filter(
                        (data, index) => data.category.id === this.state.settings.activeFilter && index <= tempCount
                    )
                );
            }
            if (this.state.settings.dataVisibleCount > this.state.works.length) {
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
                            <Link to="!#"
                                  className={`filter-item is-capitalized is-italic mr-3 ${0 === this.state.settings.activeFilter ? "current is-underlined has-text-primary" : "has-text-purple-darker"}`}
                                  key={0}
                                  category={0}
                                  onClick={this.handleChange}
                            >
                                <b>All</b>
                            </Link>
                            {this.state.categories.map((category) => (
                                <Link to="!#"
                                      className={`filter-item is-capitalized is-italic mr-3 ${category.id === this.state.settings.activeFilter ? "current is-underlined has-text-primary" : "has-text-purple-darker"}`}
                                      key={category.id}
                                      category={category.id}
                                      onClick={this.handleChange}
                                >
                                    <b>{category.title}</b>
                                </Link>
                            ))}
                        </ScrollAnimation>

                        <div className="works-cards columns is-mobile is-flex-wrap-wrap">
                            {this.state.settings.visibleItems.map((work) => (
                                <div className="column is-4-desktop is-4-tablet is-6-mobile" key={work.id}>
                                    <CardWork workData={work}/>
                                </div>
                            ))}
                        </div>

                        <div className="works-load_more is-center mt-4">
                            <button
                                className="button is-primary is-outlined"
                                onClick={this.handleLoadmore}
                                disabled={this.state.settings.noMorePost ? "disabled" : null}
                            >
                                {this.state.settings.noMorePost ? (
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

export default SectionHomeWorks;