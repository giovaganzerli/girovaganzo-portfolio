import React, { useState, useEffect } from "react";
import { observer } from 'controllerim';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

// IMPORT CONTROLLER
import { SectionWorksController } from "./works.controller";

// IMPORT ELEMENTS
import SectionTitle from "../../../elements/SectionTitle";
import CardWork from "../../../elements/CardWork";

class SectionWorks extends React.Component {

    constructor(props) {
        super(props);
        this.controller = SectionWorksController.create();
    }

    componentDidMount() {
        this.controller.setActiveFilter(this.controller.dataCategories[0].id);
        this.controller.setVisibleItems(this.controller.state.items.filter((item) => item.id <= 6));
    }

    render() {
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
                            {this.controller.dataCategories.map((category) => (
                                <Link to="!#"
                                      className={`filter-item is-capitalized is-italic mr-3 ${category.id === this.controller.state.activeFilter ? "current is-underlined has-text-primary" : "has-text-purple-darker"}`}
                                      key={category.id}
                                      category={category.id}
                                      onClick={this.controller.handleChange}
                                >
                                    <b>{category.title}</b>
                                </Link>
                            ))}
                        </ScrollAnimation>

                        <div className="works-cards columns is-mobile is-flex-wrap-wrap">
                            {this.controller.state.visibleItems.map((item) => (
                                <div className="column is-4-desktop is-4-tablet is-6-mobile" key={item.id}>
                                    <CardWork works={item} />
                                </div>
                            ))}
                        </div>

                        <div className="works-load_more is-center mt-4">
                            <button
                                className="button is-primary is-outlined"
                                onClick={this.controller.handleLoadMore}
                                disabled={this.controller.state.noMorePost ? "disabled" : null}
                            >
                                {this.controller.state.noMorePost ? (
                                    "No more items"
                                ) : (
                                    <span>Load more <span role="img" aria-label="" className="ml-3" />⏳</span>
                                )}
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default observer(SectionWorks);
