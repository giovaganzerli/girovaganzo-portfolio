import React  from "react";
import { observer } from 'controllerim';
import ScrollAnimation from "react-animate-on-scroll";

// IMPORT CONTROLLER
import { SectionContactController } from "./contact.controller";

// IMPORT ELEMENTS
import SectionTitle from "../../../elements/SectionTitle";
import Social from "../../../elements/Social";

class SectionContact extends React.Component {

    constructor(props) {
        super(props);
        this.controller = SectionContactController.create();
    }

    render() {
        return (
            <>
                <section id="contact" className="section section-contact">
                    <div className="section-wrapper">
                        <SectionTitle title="Get in touch" />
                        <div className="columns">
                            <div className="column is-4">
                                <div className="contact-info">
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <h4 className="is-family-secondary has-text-purple-darker">Let's talk about everything!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <p>
                                            <i>Don't like forms? Send me an{" "}</i>
                                            <a href="mailto:info@girovaganzo.bike" className="has-text-primary"><u><i>email</i></u></a>. 👋
                                            <span className="is-hidden-mobile">
                                            <br/><br/><br/>
                                            <i>And don't forget to follow me on</i>
                                        </span>
                                        </p>
                                        <div className="is-hidden-mobile">
                                            <Social/>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>

                            <div className="column is-8">
                                <form
                                    id="contact-form"
                                    className="contact-form"
                                    onSubmit={this.controller.handleFormSubmit}
                                >
                                    <div className="columns is-flex-wrap-wrap">
                                        <div className="column is-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    id="InputName"
                                                    placeholder="Your name"
                                                    onChange={this.controller.handleFormFieldChange}
                                                    value={this.controller.state.form.fields.name}
                                                />
                                            </div>
                                        </div>

                                        <div className="column is-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="InputEmail"
                                                    name="email"
                                                    placeholder="Email address"
                                                    onChange={this.controller.handleFormFieldChange}
                                                    value={this.controller.state.form.fields.email}
                                                />
                                            </div>
                                        </div>

                                        <div className="column is-12">
                                            <div className="form-group">
                                            <textarea
                                                name="message"
                                                id="InputMessage"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Message"
                                                onChange={this.controller.handleFormFieldChange}
                                                value={this.controller.state.form.fields.message}
                                            ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        name="submit"
                                        id="submit"
                                        value="Submit"
                                        className="button is-primary has-button-shadow"
                                    >
                                        Send message <span role="img" aria-label="" className="ml-3">✈️</span>
                                    </button>
                                </form>
                                { this.controller.state.form.error && this.controller.state.form.message ? <div className="alert has-background-danger-light has-text-danger mt-4 p-3" >{this.controller.state.form.message}</div> : "" }
                                { !this.controller.state.form.error && this.controller.state.form.message ? <div className="alert has-background-success-light has-text-success mt-4 p-3">{this.controller.state.form.message}</div> : "" }
                            </div>

                            <div className="is-hidden-tablet pl-4 pr-4 mt-5">
                                <p className="mb-0"><i>And don't forget to follow me on</i></p>
                                <Social/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default observer(SectionContact);
