import React  from "react";
import { Link } from "react-router-dom";

function CardWork({ workData }) {

    return (
        <>
            <Link to={workData.link} className="block-card_work">
                <div className="card-details p-4">
                    <span className="card-detail-category is-capitalized has-background-purple-darker has-text-light p-2">{workData.category[0].title}</span>
                    <h5 className="card-detail-title has-text-light"><b>{workData.title}</b></h5>
                </div>
                <div className="card-thumb" style={{backgroundImage: 'url(' + workData.image.url + ")"}}/>
            </Link>
        </>
    );
}

export default CardWork;
