import React  from "react";

// IMPORT ICONS
import iconFacebook from "../../assets/icons/icon-social-facebook.svg";
import iconInstagram from "../../assets/icons/icon-social-instagram.svg";
import iconKomoot from "../../assets/icons/icon-social-komoot.svg";
import iconStrava from "../../assets/icons/icon-social-strava.svg";
import iconYouTube from "../../assets/icons/icon-social-youtube.svg";
import iconGithub from "../../assets/icons/icon-social-github.svg";
import iconLinkedin from "../../assets/icons/icon-social-linkedin.svg";
import iconCaffeText from "../../assets/icons/icon-social-caffe_text.svg";

function Social() {
    const socialURL = {
        'instagram': 'https://www.instagram.com/girovaganzo',
        'komoot': 'https://www.komoot.it/user/623237324160',
        'strava': 'https://www.komoot.it/athletes/girovaganzo',
        'facebook': 'https://www.facebook.com/girovaganzo',
        'youtube': 'https://www.youtube.com/channel/UC0m0wyp07rpAd0Rmcdi7kWQ',
        'github': 'https://www.github.com/giovaganzerli',
        'linkedin': 'https://www.linkedin.com/in/giovanni-ganzerli-544855119/'
    }

    return (
        <>
            <div className="block-social">
                <ul className="social-icons is-flex is-align-items-center mb-0 mt-4">
                    <li className="mr-3">
                        <a href={socialURL['instagram']} target="_blank">
                            <img src={iconInstagram} alt=""/>
                        </a>
                    </li>
                    {/*
                    <li className="mr-3">
                        <a href={socialURL['facebook']} target="_blank">
                            <img src={iconFacebook} alt=""/>
                        </a>
                    </li>
                    */}
                    <li className="mr-3">
                        <a href={socialURL['youtube']} target="_blank">
                            <img src={iconYouTube} alt=""/>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href={socialURL['komoot']} target="_blank">
                            <img src={iconKomoot} alt=""/>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href={socialURL['strava']} target="_blank">
                            <img src={iconStrava} alt=""/>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href={socialURL['github']} target="_blank">
                            <img src={iconGithub} alt=""/>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href={socialURL['linkedin']} target="_blank">
                            <img src={iconLinkedin} alt=""/>
                        </a>
                    </li>
                    {/*
                    <li>
                        <a href="!#" target="_blank">
                            <img src={iconCaffeText} alt=""/>
                        </a>
                    </li>
                    */}
                </ul>
            </div>
        </>
    );
}

export default Social;
