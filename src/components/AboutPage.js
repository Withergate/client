import React, { Component } from 'react';
import { Translate } from "react-localize-redux";

class AboutPage extends Component {
    render() {
        return (
            <div className="m-4">
                <p>
                    <Translate id="about.text" />
                </p>
                <p>
                    <Translate id="about.contribution" />
                </p>
            </div>
        );
    }
}

AboutPage.propTypes = {
};

export default AboutPage;