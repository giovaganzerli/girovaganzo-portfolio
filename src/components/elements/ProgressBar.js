import React from "react";

function ProgressBar({ progress, isVisible }) {
    const { title, percantage, progressColor } = progress;
    const winWidth = window.innerWidth;
    const progressQuery = () => {
        if (winWidth && winWidth > 767) {
            return (
                <>
                    <div
                        className="progress_bar-bar-active"
                        style={
                            isVisible
                                ? {
                                    width: `${percantage}%`,
                                    background: progressColor,
                                }
                                : { width: 0, background: progressColor }
                        }
                    ></div>
                </>
            );
        }
        return (
            <>
                <div
                    className="progress_bar-bar-active"
                    style={{
                        width: `${percantage}%`,
                        background: progressColor,
                    }}
                ></div>
            </>
        );
    };
    return (
        <>
            <div className="block-progress_bar mb-2">
                <div className="progress_bar-description is-clearfix">
                    <h6 className="is-pulled-left mb-2 mt-0"><b>{title}</b></h6>
                    <span className="is-pulled-right">{percantage}%</span>
                </div>
                <div className="progress_bar-bar">{progressQuery()}</div>
            </div>
        </>
    );
}

export default ProgressBar;
