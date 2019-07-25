import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip'

import { getTranslatedText } from '../../translations/translationUtils';

import ready from '../../images/ready-icon.png';
import busy from '../../images/busy-icon.png';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import WeaponTooltip from '../item/WeaponTooltip';
import GearTooltip from '../item/GearTooltip';
import OutfitTooltip from '../item/OutfitTooltip';

function renderState(state) {
    switch(state) {
        case 'READY': 
            return <img height="25" src={ready} alt="Ready" />;
        default:
            return <img height="25" src={busy} alt="Busy" />;
    }
}

function renderTrait(trait) {
    return <Row key={trait.id}><Col><TraitItem trait={trait} /></Col></Row>
}

const CharacterListItem = ({character, unequipItem, restWithCharacter}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>
                {renderState(character.state)} {character.name} ({character.level})
            </Card.Title>
            <Row>
                <Col md={2}>
                    <Row>
                        <Col><Image rounded width="120px" src={character.imageUrl} /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                data-tip
                                data-for={character.id + "rest"}
                                className="button-classic"
                                size="sm"
                                variant="dark"
                                disabled={character.state !== "READY"}
                                onClick={() => restWithCharacter(character.id)}>
                                <Translate id="labels.rest" />
                            </Button>
                            <ReactTooltip id={character.id + "rest"} effect="solid" place="right">
                                <Translate id="labels.restTooltip" />
                            </ReactTooltip>
                        </Col>
                    </Row>
                </Col>
                <Col md={5}>
                    <div className="mb-2">
                        <AttributeBar name="basic.combat" value={character.combat} />
                        <AttributeBar name="basic.scavenge" value={character.scavenge} />
                        <AttributeBar name="basic.craftsmanship" value={character.craftsmanship} />
                        <AttributeBar name="basic.intellect" value={character.intellect} /> 
                    </div>
                    <Row className="row">
                        <Col md={6}>
                            <b><Translate id="basic.health" /></b>
                        </Col>
                        <Col md={6}>
                            <ProgressBar
                                variant={character.hitpoints < character.maxHitpoints ? "danger" : "success"}
                                min={0}
                                max={character.maxHitpoints}
                                now={character.hitpoints}
                                label={`${character.hitpoints}/${character.maxHitpoints}`} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <b><Translate id="basic.experience" /></b>
                        </Col>
                        <Col md={6}>
                            <ProgressBar
                                min={0}
                                max={character.nextLevel}
                                now={character.experience}
                                label={`${character.experience}/${character.nextLevel}`}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={4}> 
                    <Row className="mb-1">
                        <Col>
                        { character.weapon != null ?
                            <div data-tip data-for={character.weapon.details.identifier}>
                                <b>{getTranslatedText(character.weapon.details.name)}</b>
                                <ReactTooltip id={character.weapon.details.identifier} effect="solid" place="left">
                                    <WeaponTooltip weapon={character.weapon} />
                                </ReactTooltip>
                                <Button
                                    variant="outline-dark"
                                    size="sm"
                                    className="ml-2 button-small" 
                                    onClick={() => unequipItem(character.weapon.id, 'WEAPON', character.id)}>
                                    <Translate id="labels.unequip" />
                                </Button> 
                            </div>
                            : <Translate id="basic.unarmed" /> }
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col>
                        { character.outfit != null ?
                            <div data-tip data-for={character.outfit.details.identifier}>
                                <b>{getTranslatedText(character.outfit.details.name)}</b>
                                <ReactTooltip id={character.outfit.details.identifier} effect="solid" place="left">
                                    <OutfitTooltip outfit={character.outfit} />
                                </ReactTooltip>
                                <Button
                                    variant="outline-dark"
                                    size="sm"
                                    className="ml-2 button-small" 
                                    onClick={() => unequipItem(character.outfit.id, 'OUTFIT', character.id)}>
                                    <Translate id="labels.unequip" />
                                </Button> 
                            </div>
                        : <Translate id="basic.noOutfit" /> }
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col>
                        { character.gear != null ?
                            <div data-tip data-for={character.gear.details.identifier}>
                                <b>{getTranslatedText(character.gear.details.name)}</b>
                                <ReactTooltip id={character.gear.details.identifier} effect="solid" place="left">
                                    <GearTooltip gear={character.gear} />
                                </ReactTooltip>
                                <Button
                                    variant="outline-dark"
                                    size="sm"
                                    className="ml-2 button-small" 
                                    onClick={() => unequipItem(character.gear.id, 'GEAR', character.id)}>
                                    <Translate id="labels.unequip" />
                                </Button> 
                            </div>
                            : <Translate id="basic.noGear" /> }
                        </Col>
                    </Row>
                </Col>
                <Col md={1}>
                    { 
                        character.traits.length > 0 && 
                            character.traits.map(trait => renderTrait(trait))
                    }
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

CharacterListItem.propTypes = {
    character: PropTypes.object.isRequired,
    unequipItem: PropTypes.func.isRequired,
    restWithCharacter: PropTypes.func.isRequired
};

export default CharacterListItem;