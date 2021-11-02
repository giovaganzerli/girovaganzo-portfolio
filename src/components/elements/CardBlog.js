import React  from "react";
import { Link } from "react-router-dom";

function CardBlog({ blogData, key }) {
    const { id, category, title, date, image, link } = blogData;
    const blogKey = key;
    const images = require.context('../../assets/images/blog', true);

    return (
        <>
            <div className="block-card_blog" key={blogKey}>
                <div className="card-thumb">
                    <Link to="!#">
                        <span className="card-category has-background-purple-darker has-text-light is-capitalized p-2">{category}</span>
                    </Link>
                    <a href={link} target="_blank">
                        <img src={images(`./${image}`)} alt="" />
                    </a>
                </div>
                <div className="card-details p-4">
                    <a href={link} target="_blank">
                        <h4 className="card-detail-title has-text-purple-darker is-family-secondary">
                            <b>{title}</b>
                        </h4>
                    </a>
                    <p className="card-detail-meta mb-0 mt-2 has-text-grey-light">{date}</p>
                </div>
            </div>
        </>
    );
}

export default CardBlog;