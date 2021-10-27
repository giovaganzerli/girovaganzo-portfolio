import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";
import Social from "../../elements/Social";

function SectionContact() {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formdata.name) {
            setError(true);
            setMessage("Name is required");
        } else if (!formdata.email) {
            setError(true);
            setMessage("Email is required");
        } else if (!formdata.message) {
            setError(true);
            setMessage("Message is required");
        } else {
            setError(false);
            setMessage("You message has been sent!!!");
        }
    };

    const handleChange = (event) => {
        setFormdata({
            ...formdata,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const handleAlerts = () => {
        if (error && message) {
            return <div className="alert has-background-danger-light has-text-danger mt-4 p-3">{message}</div>;
        } else if (!error && message) {
            return <div className="alert has-background-success-light has-text-success mt-4 p-3">{message}</div>;
        } else {
            return null;
        }
    };

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
                                onSubmit={submitHandler}
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
                                                onChange={handleChange}
                                                value={formdata.name}
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
                                                onChange={handleChange}
                                                value={formdata.email}
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
                                                onChange={handleChange}
                                                value={formdata.message}
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
                            {handleAlerts()}
                        </div>

                        <div className="is-hidden-tablet pl-4 pr-4 mt-5">
                            <p className="mb-0"><i>And don't forget to follow me on</i></p>
                            <Social/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionContact;
