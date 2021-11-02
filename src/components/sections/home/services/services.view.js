import React from "react";
import { observer } from 'controllerim';
import { Link } from "react-scroll";
import Slider from "react-slick";

// IMPORT CONTROLLER
import { SectionServicesController } from "./services.controller";

// IMPORT ELEMENTS
import SectionTitle from "../../../elements/SectionTitle";
import CardService from "../../../elements/CardService";

class SectionServices extends React.Component {

    constructor(props) {
        super(props);
        this.controller = SectionServicesController.create();
    }

    render() {
        return (
            <>
                <section id="services" className="section section-services">
                    <div className="section-wrapper">
                        <SectionTitle title="Services" />
                        <Slider className="services-cards" {...this.controller.cardsSliderSettings}>
                            {this.controller.dataServices.map((service) => (
                                <CardService service={service} key={service.id}/>
                            ))}
                        </Slider>
                        <div className="mt-5 text-center">
                            <p className="mb-0">
                                Looking for a custom job?{" "}
                                <Link
                                    className="has-text-primary"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <u>Click here</u>
                                </Link>{" "}
                                to contact me! <span role="img" aria-label="">👋</span>
                            </p>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default observer(SectionServices);
