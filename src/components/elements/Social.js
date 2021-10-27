import React  from "react";

// IMPORT ICONS
import iconFacebook from "../../assets/icons/icon-social-facebook.svg";
import iconInstagram from "../../assets/icons/icon-social-instagram.svg";
import iconKomoot from "../../assets/icons/icon-social-komoot.svg";
import iconYouTube from "../../assets/icons/icon-social-youtube.svg";
import iconCaffeText from "../../assets/icons/icon-social-caffe_text.svg";

function Social() {

    return (
        <>
            <div className="block-social">
                <ul className="social-icons is-flex is-align-items-center mb-0 mt-4">
                    <li className="mr-3">
                        <a href="!#" target="_blank">
                            <img src={iconInstagram} alt=""/>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href="!#" target="_blank">
                            <img src={iconFacebook} alt=""/>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href="!#" target="_blank">
                            <img src={iconYouTube} alt=""/>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href="!#" target="_blank">
                            <img src={iconKomoot} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="!#" target="_blank">
                            <img src={iconCaffeText} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Social;
