import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import WeaponTooltip from '../item/WeaponTooltip';
import GearTooltip from '../item/GearTooltip';
import OutfitTooltip from '../item/OutfitTooltip';
import { COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, HEALTH, EXPERIENCE_STAT, INJURY_INFO, LARGE } from '../../constants/constants';
import ActionButton from './ActionButton';
import { GameIcon } from '../shared/GameIcon';


function renderTrait(trait) {
    return <Row key={trait.id}><Col><TraitItem trait={trait} /></Col></Row>
}

class CharacterListItem extends Component {
    render() {
        const {character, unequipItem, selectCharacter} = this.props;
    
        return <Card className="mb-4">
            <Card.Body>
                <Card.Title>
                    <ul className="list-inline">
                        { character.hitpoints < (character.maxHitpoints * 2 / 3.0) && 
                            <li className="list-inline-item">
                                <GameIcon type={INJURY_INFO} size={LARGE} noPadding />
                            </li> 
                        }
                        <li className="list-inline-item">{character.name} ({character.level})</li>
                    </ul>
                </Card.Title>
                <Row>
                    <Col md={2} sm={12}>
                        <Row>
                            <Col><Image rounded width="120px" src={character.imageUrl} /></Col>
                        </Row>
                        <Row>
                            <Col>
                                <ActionButton
                                    pendingAction={character.action}
                                    character={character}
                                    selectCharacter={selectCharacter} />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} sm={12}>
                        <AttributeBar name="basic.combat" value={character.combat} iconType={COMBAT} />
                        <AttributeBar name="basic.scavenge" value={character.scavenge} iconType={SCAVENGE} />
                        <AttributeBar name="basic.craftsmanship" value={character.craftsmanship} iconType={CRAFTSMANSHIP} />
                        <AttributeBar name="basic.intellect" value={character.intellect} iconType={INTELLECT} />
                        <AttributeBar 
                            name="basic.health"
                            value={character.hitpoints} 
                            iconType={HEALTH}
                            max={character.maxHitpoints}
                            variant={character.hitpoints < character.maxHitpoints ? "danger" : "success"} />
                        <AttributeBar 
                            name="basic.experience"
                            value={character.experience} 
                            iconType={EXPERIENCE_STAT}
                            max={character.nextLevel}
                            variant="primary" />
                    </Col>
                    <Col md={4} sm={12}> 
                        { character.weapon != null ?
                            <Row className="mb-1">
                                <Col data-tip data-for={character.weapon.details.identifier}>
                                    <b>{getTranslatedText(character.weapon.details.name)}</b>
                                    <ReactTooltip id={character.weapon.details.identifier} effect="solid" place="left">
                                        <WeaponTooltip weapon={character.weapon} />
                                    </ReactTooltip>
                                </Col>
                                <Col>
                                    <Button
                                        variant="outline-success"
                                        size="sm"
                                        className="ml-2 button-small" 
                                        onClick={() => unequipItem(character.weapon.id, character.id)}>
                                        <Translate id="labels.unequip" />
                                    </Button> 
                                </Col>
                            </Row>
                            : <Row className="mb-1"><Col><Translate id="basic.unarmed" /></Col></Row> 
                        }
                        { character.outfit != null ?
                            <Row className="mb-1">
                                <Col data-tip data-for={character.outfit.details.identifier}>
                                    <b>{getTranslatedText(character.outfit.details.name)}</b>
                                    <ReactTooltip id={character.outfit.details.identifier} effect="solid" place="left">
                                        <OutfitTooltip outfit={character.outfit} />
                                    </ReactTooltip>
                                </Col>
                                <Col>
                                    <Button
                                        variant="outline-success"
                                        size="sm"
                                        className="ml-2 button-small" 
                                        onClick={() => unequipItem(character.outfit.id, character.id)}>
                                        <Translate id="labels.unequip" />
                                    </Button> 
                                </Col>
                            </Row>
                            : <Row className="mb-1"><Col><Translate id="basic.noOutfit" /></Col></Row>  
                        }
                        { character.gear != null ?
                            <Row className="mb-1">
                                <Col data-tip data-for={character.gear.details.identifier}>
                                    <b>{getTranslatedText(character.gear.details.name)}</b>
                                    <ReactTooltip id={character.gear.details.identifier} effect="solid" place="left">
                                        <GearTooltip gear={character.gear} />
                                    </ReactTooltip>
                                </Col>
                                <Col>
                                    <Button
                                        variant="outline-success"
                                        size="sm"
                                        className="ml-2 button-small" 
                                        onClick={() => unequipItem(character.gear.id, character.id)}>
                                        <Translate id="labels.unequip" />
                                    </Button> 
                                </Col>
                            </Row>
                            : <Row className="mb-1"><Col><Translate id="basic.noGear" /></Col></Row> 
                        }
                    </Col>
                    <Col md={2} sm={12}>
                        { 
                            character.traits.length > 0 ?
                                character.traits.map(trait => renderTrait(trait))
                            : <Translate id="basic.noTraits" />
                        }
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    }
};

CharacterListItem.propTypes = {
    character: PropTypes.object.isRequired,
    unequipItem: PropTypes.func.isRequired,
    selectCharacter: PropTypes.func.isRequired
};

export default CharacterListItem;