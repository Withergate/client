import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import TooltipWrapper from '../shared/TooltipWrapper';
import { Row, Col, Image, ProgressBar } from 'react-bootstrap';

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
                <Row>
                    <Col><b>{renderState(character.state)} {character.name}</b></Col>
                </Row>
                <Row>
                    <Col><Image rounded width="60px" src={character.imageUrl} /></Col>
                </Row>
            </Col>
            <Col md={4} sm={12}>
                <AttributeBar name="basic.combat" value={character.combat} hideText />
                <AttributeBar name="basic.scavenge" value={character.scavenge} hideText />
                <AttributeBar name="basic.craftsmanship" value={character.craftsmanship} hideText />
                <AttributeBar name="basic.intellect" value={character.intellect} hideText />
                <TooltipWrapper textKey="basic.health" value={character.hitpoints + "/" + character.maxHitpoints}>
                    <ProgressBar
                        variant={character.hitpoints < character.maxHitpoints ? "danger" : "success"}
                        min={0}
                        max={character.maxHitpoints}
                        now={character.hitpoints} />
                </TooltipWrapper>
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
            <Col md={2} sm={12}>
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