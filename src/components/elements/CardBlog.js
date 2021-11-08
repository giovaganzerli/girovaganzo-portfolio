import React  from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';

function CardBlog({ postData }) {

    return (
        <>
            <div className="block-card_blog" key={postData.id}>
                <div className="card-thumb">
                    <Link to="!#">
                        <span className="card-category has-background-purple-darker has-text-light is-capitalized p-2">{postData.category.title}</span>
                    </Link>
                    <a href={postData.link} target="_blank">
                        <img src={postData.image.url} alt="" />
                    </a>
                </div>
                <div className="card-details p-4">
                    <p className="card-detail-meta mb-0 mt-2 has-text-grey-light"><Moment format="DD MMMM YYYY" date={postData.date} /></p>
                    <a href={postData.link} target="_blank">
                        <h4 className="card-detail-title has-text-purple-darker is-family-secondary">
                            <b>{postData.title}</b>
                        </h4>
                    </a>
                </div>
            </div>
        </>
    );
}

export default CardBlog;
