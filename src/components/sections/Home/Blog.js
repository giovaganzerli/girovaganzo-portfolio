import React, { useState } from "react";
import Slider from "react-slick";

// IMPORT SERVICES
import { getPosts } from "../../../services/wp/posts";
import { getPostsCategory } from "../../../services/wp/taxonomies";
import { getAttachment } from "../../../services/wp/attachments";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";
import CardBlog from "../../elements/CardBlog";

class SectionHomeBlog extends React.Component {

    constructor(props) {
        super(props);
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
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getPosts('?posts_per_page=10&orderby=date')
            .then(items => {
                this.setPosts(items.data);
            });
    }

    setPosts(value) {
        value.map((post) => {
            let _post = {
                id: post.id,
                title: post.title.rendered,
                slug: post.slug,
                excerpt: post.excerpt.rendered,
                image: {
                    id: parseInt(post['_links']['wp:featuredmedia'][0].href.split('/wp-json/wp/v2/media/')[1]),
                    url: ''
                },
                date: post.date,
                category: {
                    id: post.categories[0],
                    title: ''
                },
                link: post.acf['article-link']
            };
            getAttachment(_post.image.id)
                .then(item => {
                    _post.image.url = item.data.guid.rendered;
                    this.setState(this.state);
                });

            getPostsCategory(_post.category.id)
                .then(item => {
                    _post.category.title = item.data.name;
                    this.setState(this.state);
                });

            this.state.posts.push(_post);
        });
        this.setState(this.state);
    }

    setCategories(value) {
        this.state.categories = value;
    }

    render() {
        return(
            <>
                <section id="blog" className="section section-blog">
                    <div className="section-wrapper">
                        <SectionTitle title="Tech Pills"/>
                        <Slider className="blog-cards" {...this.cardsSliderSettings}>
                            {this.state.posts.map(function(post, index) {
                                return (
                                    <CardBlog postData={post} key={post.id}/>
                                )
                            })}
                        </Slider>
                    </div>
                </section>
            </>
        )
    }
}

export default SectionHomeBlog;