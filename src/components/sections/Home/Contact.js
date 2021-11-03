import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";
import Social from "../../elements/Social";

class SectionContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formdata: {
                name: "",
                email: "",
                message: ""
            },
            error: "",
            message: ""
        }
    }

    setFormData(key, value) {
        this.state.formdata[key] = value;
    }

    setError(value) {
        this.state.error = value;
        this.setState(this.state);
    }

    setMessage(value) {
        this.state.message = value;
        this.setState(this.state);
    }

    submitHandler(e) {
        e.preventDefault();
        if (!this.state.formdata.name) {
            this.setError(true);
            this.setMessage("Name is required");
        } else if (!this.state.formdata.email) {
            this.setError(true);
            this.setMessage("Email is required");
        } else if (!this.state.formdata.message) {
            this.setError(true);
            this.setMessage("Message is required");
        } else {
            this.setError(false);
            this.setMessage("You message has been sent!!!");
        }
    };

    handleChange(event) {
        this.setFormData(event.currentTarget.name, event.currentTarget.value);
    };

    handleAlerts() {
        if (this.state.error && this.state.message) {
            return <div className="alert has-background-danger-light has-text-danger mt-4 p-3">{this.state.message}</div>;
        } else if (!this.state.error && this.state.message) {
            return <div className="alert has-background-success-light has-text-success mt-4 p-3">{this.state.message}</div>;
        } else {
            return null;
        }
    };

    render() {
        return (
            <>
                <section id="contact" className="section section-contact">
                    <div className="section-wrapper">
                        <SectionTitle title="Get in touch"/>
                        <div className="columns">
                            <div className="column is-4">
                                <div className="contact-info">
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <h4 className="is-family-secondary has-text-purple-darker">Let's talk about
                                            everything!</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                    >
                                        <p>
                                            <i>Don't like forms? Send me an{" "}</i>
                                            <a href="mailto:info@girovaganzo.bike"
                                               className="has-text-primary"><u><i>email</i></u></a>. 👋
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
                                    onSubmit={this.submitHandler}
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
                                                    onChange={this.handleChange}
                                                    value={this.state.formdata.name}
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
                                                    onChange={this.handleChange}
                                                    value={this.state.formdata.email}
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
                                                onChange={this.handleChange}
                                                value={this.state.formdata.message}
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
                                {this.handleAlerts()}
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

export default SectionContact;
