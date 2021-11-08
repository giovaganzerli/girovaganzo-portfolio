import React from "react";
import {Link} from "react-router-dom";

// IMPORT ELEMENTS
import SectionTitle from "../../elements/SectionTitle";

class SectionContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <section id="content" className="section section-content">
                    <div className="section-wrapper">
                        <br/>
                        {this.props.backLink ? <p className="mb-4 mt-4"><Link to={this.props.backLink} className="has-text-primary"><b><span role="img" aria-label="<">👈</span> back to all works</b></Link></p> : <br/> }
                        <SectionTitle title="Work Title"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit vehicula odio. Morbi feugiat eleifend elit id aliquam. Sed dapibus ullamcorper ante, quis sollicitudin augue ornare aliquam. Curabitur erat nisl, eleifend id rhoncus ut, pharetra id sem. Cras euismod diam laoreet urna dignissim, vitae dictum arcu aliquam. Donec semper ornare arcu, a pretium turpis volutpat nec. Quisque sed dictum mi. Quisque fringilla, lectus eget posuere malesuada, augue mi ornare mauris, in lacinia justo urna vitae metus. Fusce ipsum orci, tincidunt quis quam quis, pulvinar lobortis ipsum. Maecenas malesuada dictum laoreet. Sed semper fermentum nulla, quis aliquam enim consequat ac. Sed fringilla eu ligula sit amet venenatis. Nunc vulputate quam in condimentum bibendum. Fusce ut malesuada dolor.</p>
                    </div>
                </section>
            </>
        )
    }
}

export default SectionContent;
