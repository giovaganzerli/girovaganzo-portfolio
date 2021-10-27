import React  from "react";
import { Link } from "react-router-dom";

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

function CardWork({ works }) {
    const images = require.context('../../assets/images/works', true);
    let { category, title, image, link } = works;
    category = dataCategories.filter(item => {
        return item.id === category
    });

    return (
        <>
            <Link to={link} className="block-card_work">
                <div className="card-details p-4">
                    <span className="card-detail-category is-capitalized has-background-purple-darker has-text-light p-2">{category[0].title}</span>
                    <h5 className="card-detail-title has-text-light"><b>{title}</b></h5>
                </div>
                <div className="card-thumb" style={{backgroundImage: 'url(' + images(`./${image}`) + ")"}}/>
            </Link>
        </>
    );
}

export default CardWork;
