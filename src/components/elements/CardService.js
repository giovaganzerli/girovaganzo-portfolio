import React from "react";

function CardService({ service, key }) {
    const icons = require.context('../../assets/icons', true);
    const serviceKey = key;
    const { title, content, icon, color, contentColor, skills } = service;

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

    const rgbToHex = (hex) => {
        var aRgbHex = hex.replace('#', '').match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return aRgb;
    };

    return (
        <>
            <div
                className={`block-card_service has-text-centered is-flex is-flex-direction-column is-align-items-center is-justify-content-center ${contentColor === "light" ? "has-text-light" : "has-text-dark"} pt-6 pb-6 pl-4 pr-4`}
                data-color="#6C6CE5"
                style={{
                    backgroundColor: color,
                    boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(color)}, 0.5)`,
                }}
                key={serviceKey}
            >
                <img src={ icons(`./${icon}`) } alt="" />
                <h4 className="is-family-secondary mb-3 mt-3">{title}</h4>
                <p className="has-text-justified mb-6">{content}</p>
                <div className="card-skills-wrap" style={{
                    backgroundColor: color,
                    filter: 'brightness(96%)'
                }}>
                    <div className="card-skills is-flex">
                        {skills.map((skill) => (
                            <span className={`skill mr-3 ml-3 is-flex is-flex-direction-column ${contentColor === "light" ? "has-text-light" : 'has-text-black'}`}>
                                <img src={icons(`./${skill.icon}`)} alt={skill.title}/>
                                <i>{skill.title}</i>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardService;
