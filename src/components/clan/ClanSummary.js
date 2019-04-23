import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { ProgressBar, Row, Col, Card } from 'react-bootstrap';

import junk from '../../images/junk.png';
import food from '../../images/food.png';
import caps from '../../images/caps.png';
import fame from '../../images/fame.png';
import information from '../../images/information.png';
import characters from '../../images/person.png';

const ClanSummary = ({clan}) => (
    <Card>
        <Card.Body>
            <Card.Title>
                {clan.name}
            </Card.Title>
            <Row>
                <Col md={2}>
                    <img height="20" src={caps} alt="caps" /> <b><Translate id="basic.caps" /></b>: {clan.caps}
                </Col>
                <Col md={2}>
                    <img height="20" src={junk} alt="junk" /> <b><Translate id="basic.junk" /></b>: {clan.junk}
                </Col>
                <Col md={2}>
                    <img height="20" src={food} alt="food" /> <b><Translate id="basic.food" /></b>: {clan.food}
                </Col>
                <Col md={2}>
                    <img height="20" src={fame} alt="fame" /> <b><Translate id="basic.fame" /></b>: {clan.fame}
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <img height="20" src={characters} alt="" /> <b><Translate id="basic.characters" />: {clan.characters.length}/{clan.populationLimit}</b>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <img height="20" src={information} alt="information" /> <b><Translate id="basic.informationLevel" /></b>: {clan.informationLevel}
                </Col>
                <Col md={8}>
                    <ProgressBar className="mt-2" min={0} max={clan.nextInformationLevel} now={clan.information} label={`${clan.information}/${clan.nextInformationLevel}`}/>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

ClanSummary.propTypes = {
    clan: PropTypes.object.isRequired
};

export default ClanSummary;