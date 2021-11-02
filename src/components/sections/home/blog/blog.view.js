import React from "react";
import { observer } from 'controllerim';
import Slider from "react-slick";

// IMPORT CONTROLLER
import { SectionBlogController } from "./blog.controller";

// IMPORT ELEMENTS
import SectionTitle from "../../../elements/SectionTitle";
import CardBlog from "../../../elements/CardBlog";

class SectionBlog extends React.Component {

    constructor(props) {
        super(props);
        this.controller = SectionBlogController.create();
    }

    render() {
        return (
            <>
                <section id="blog" className="section section-blog">
                    <div className="section-wrapper">
                        <SectionTitle title="Tech Pills" />
                        <Slider className="blog-cards" {...this.controller.cardsSliderSettings}>
                            {this.controller.dataBlog.map((blogItem) => (
                                <CardBlog blogData={blogItem} key={blogItem.id} />
                            ))}
                        </Slider>
                    </div>
                </section>
            </>
        )
    }

}

export default observer(SectionBlog);