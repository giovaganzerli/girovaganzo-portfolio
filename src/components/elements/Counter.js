import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as All from "@fortawesome/free-solid-svg-icons"

function Counter({ counterItem, isVisible }) {
    const { title, count, icon } = counterItem;
    const winWidth = window.innerWidth;
    const countQuery = () => {
        if (winWidth && winWidth > 767) {
            return <CountUp start={0} end={isVisible ? count : 0} duration={2} />;
        }
        return <CountUp start={0} end={count} duration={2} />;
    };
    const handleIcon = () => {
        return icon;
    };
    return (
        <>
            <div className="block-counter is-flex">
                <FontAwesomeIcon icon={All[handleIcon()]} size="2x" className="has-text-grey-lighter mt-2" />
                <div className="counter-details ml-3">
                    <h3 className="mb-0 mt-0 counter-number">
                        <em className="counter-count has-text-primary">{countQuery()}</em>
                    </h3>
                    <p className="mb-0">{title}</p>
                </div>
            </div>
        </>
    );
}

export default Counter;
