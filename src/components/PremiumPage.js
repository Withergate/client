import React, { Component } from 'react';
import { Translate } from "react-localize-redux";
import { GameIcon } from './shared/GameIcon';
import { SILVER, LARGE, GOLD } from '../constants/constants';
import { Row, Col, Badge } from 'react-bootstrap';

class PremiumPage extends Component {
    render() {
        return (
            <div className="m-4">
                <h3><Translate id="premium.header" /></h3>
                <p><Translate id="premium.text" /></p>

                <Row className="mb-4">
                    <Col>
                        <h5 className="inline"><GameIcon type={SILVER} size={LARGE} noPadding /> Silver</h5>
                        <p><Translate id="premium.silverText" /></p>
                        <ul>
                            <li><Translate id="premium.silver1" /></li>
                            <li><Translate id="premium.silver2" /></li>
                            <li><Translate id="premium.silver3" /></li>
                            <li><Translate id="premium.silver4" /></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="inline"><GameIcon type={GOLD} size={LARGE} noPadding /> Gold</h5>
                        <p><Translate id="premium.goldText" /></p>
                        <ul>
                            <li><Translate id="premium.gold1" /></li>
                            <li><Translate id="premium.gold2" /></li>
                            <li><Translate id="premium.gold3" /></li>
                            <li><b><Translate id="premium.goldSilver" /></b></li>
                        </ul>
                    </Col>
                </Row>
                <div className="centered">
                    <a href="https://www.patreon.com/withergate" target="_blank" rel="noopener noreferrer">
                        <h1><Badge variant="success"><Translate id="premium.purchasePatreon" /></Badge></h1>
                    </a>
                </div>
            </div>
        );
    }
}

export default PremiumPage;