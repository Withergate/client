import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';
import TraitItem from './TraitItem';
import { Row, Col, Image } from 'react-bootstrap';

function renderState(state) {
    switch(state) {
        case 'READY': 
            return <img height="15" src={ready} alt="Ready" />;
        case 'BUSY':
            return <img height="15" src={busy} alt="Busy" />;
        default:
            return <img height="15" src={ready} alt="Ready" />;
    }
}

const CharacterDetails = ({character}) => (
    <small>
        <Row>
            <Col md={3} sm={12}>
                <b>{renderState(character.state)} {character.name}</b>
                <Image rounded width="60px" src={character.imageUrl} />
                <p>
                    <b><Translate id="basic.health" /></b>: {character.hitpoints}/{character.maxHitpoints}
                </p>
            </Col>
            <Col md={3} sm={12}>
                <b><Translate id="basic.combat" /></b>: {character.combat} <br />
                <b><Translate id="basic.scavenge" /></b>: {character.scavenge} <br />
                <b><Translate id="basic.craftsmanship" /></b>: {character.craftsmanship} <br />
                <b><Translate id="basic.intellect" /></b>: {character.intellect} <br />
            </Col>
            <Col md={3} sm={12}>
                { character.weapon != null ? <b>{getTranslatedText(character.weapon.details.name)}</b>
                    : <Translate id="basic.unarmed" />}
                <br />
                { character.outfit != null ? <b>{getTranslatedText(character.outfit.details.name)}</b>
                        : <Translate id="basic.noOutfit" />}
                <br />
                { character.gear != null ? <b>{getTranslatedText(character.gear.details.name)}</b>
                        : <Translate id="basic.noGear" />}
            </Col>
            <Col md={3} sm={12}>
                {character.traits.length > 0 && 
                    character.traits.map(trait => 
                        <div key={trait.id} className="mb-1">
                            <TraitItem trait={trait} />
                        </div>) 
                }
            </Col>
        </Row>
    </small>
);

CharacterDetails.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterDetails;