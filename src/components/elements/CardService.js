import React from "react";

function CardService({ service, key }) {
    const serviceKey = key;
    const { title, content, icon, color, contentColor } = service;
    const icons = require.context('../../assets/icons', true);
    const hexToRgb = (hex) => {
        const temp = hex
            .replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                (m, r, g, b) => "#" + r + r + g + g + b + b
            )
            .substring(1)
            .match(/.{2}/g)
            .map((x) => parseInt(x, 16));
        return temp.join(",");
    };

    return (
        <>
            <div
                className={`block-card_service has-text-centered is-flex is-flex-direction-column is-align-items-center is-justify-content-center ${contentColor === "light" ? "has-text-light" : null} pt-6 pb-6 pl-4 pr-4`}
                data-color="#6C6CE5"
                style={{
                    background: color,
                    boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(color)}, 0.5)`,
                }}
                key={serviceKey}
            >
                <img src={ icons(`./${icon}`) } alt={title} />
                <h4 className="is-family-secondary mb-3 mt-3">{title}</h4>
                <p className="mb-0">{content}</p>
            </div>
        </>
    );
}

export default CardService;
