import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons"

// IMPORT ICONS
import iconLogo from "../../assets/icons/icon-logo.svg";

function Header() {

    const [toggleMenu, setToggleMenu] = useState(true);

    const headerToggler = (e) => {
        e.preventDefault();
        setToggleMenu(!toggleMenu);
    };

    return (
        <>
            <div className="menu-wrapper">
                <div className={`menu-box has-background-primary has-button-shadow p-4 pr-6 ${toggleMenu ? "open" : ""}`}>
                    <div className="menu-toggler-wrapper">
                        <label className="menu-toggler menu-toggler-close" onClick={headerToggler}>
                            <FontAwesomeIcon icon={faTimes} size="2x" className="has-text-primary-light" />
                        </label>
                        <label className="menu-toggler menu-toggler-open" onClick={headerToggler}>
                            <FontAwesomeIcon icon={faEllipsisH} size="2x" className="has-text-primary-light" />
                        </label>
                    </div>
                    <ul className="menu-list-wrapper">
                        <li className="mb-2">
                            <Link
                                className="is-family-secondary has-text-primary-light"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <span role="img" aria-label="/">🦧</span> .about me
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                className="is-family-secondary has-text-primary-light"
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <span role="img" aria-label="/">🎯</span> .services
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                className="is-family-secondary has-text-primary-light"
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <span role="img" aria-label="/">👣</span> .experience
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                className="is-family-secondary has-text-primary-light"
                                activeClass="active"
                                to="works"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <span role="img" aria-label="/">🗂</span> .works
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link
                                className="is-family-secondary has-text-primary-light"
                                activeClass="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <span role="img" aria-label="/">📢</span> .blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="is-family-secondary has-text-primary-light"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <span role="img" aria-label="/">📬</span> .contacts
                            </Link>
                        </li>
                    </ul>
                </div>
                <a className="button button-back_landing is-success has-button-shadow is-uppercase mt-5" href="https://girovaganzo.bike">
                    Bike Blog <span className="ml-3" role="img" aria-label="/">🚵‍</span>
                </a>
            </div>
            <div className="logo-wrapper">
                <a href="/"><img src={iconLogo} alt=""/></a>
            </div>
        </>
    )

}

export default Header;