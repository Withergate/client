import React, { Component } from 'react';
import { Translate } from "react-localize-redux";
import { GameIcon } from './shared/GameIcon';
import { SILVER, LARGE, GOLD } from '../constants/constants';
import { Image, Row, Col } from 'react-bootstrap';

import PatreonIcon from '../images/patreon.png';

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
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="inline"><GameIcon type={GOLD} size={LARGE} noPadding /> Gold</h5>
                        <p><Translate id="premium.goldText" /></p>
                        <ul>
                            <li><Translate id="premium.gold1" /></li>
                            <li><Translate id="premium.gold2" /></li>
                            <li><b><Translate id="premium.goldSilver" /></b></li>
                        </ul>
                    </Col>
                </Row>
                <p>
                    <a href="https://www.patreon.com/withergate" target="_blank" rel="noopener noreferrer">Patreon</a>
                    <Image src={PatreonIcon} width="25px" className="ml-2" />
                </p>
            </div>
        );
    }
}

export default PremiumPage;