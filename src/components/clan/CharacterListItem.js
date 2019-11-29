import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import ItemTooltip from '../item/ItemTooltip';
import { COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, HEALTH, EXPERIENCE_STAT, LARGE } from '../../constants/constants';
import ActionButton from './ActionButton';
import CharacterHeader from './CharacterHeader';

class CharacterListItem extends Component {
    render() {
        const {character, unequipItem, selectCharacter} = this.props;
    
        return <Card className="mb-4">
            <Card.Body>
                <Card.Title>
                    <CharacterHeader character={character} size={LARGE} />
                </Card.Title>
                <Row>
                    <Col md={2} xs={5}>
                        <Row>
                            <Col><Image rounded width="120px" src={character.imageUrl} /></Col>
                        </Row>
                        <Row className="mt-1">
                            <Col>
                                <ActionButton
                                    pendingAction={character.action}
                                    character={character}
                                    selectCharacter={selectCharacter} />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} xs={7}>
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
                    <Col md={4} xs={12}> 
                        { character.weapon != null ?
                            <Row className="mb-1">
                                <Col data-tip data-for={character.weapon.details.identifier}>
                                    <b>{getTranslatedText(character.weapon.details.name)}</b>
                                    <ReactTooltip id={character.weapon.details.identifier} effect="solid" place="left">
                                        <ItemTooltip item={character.weapon} />
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
                                        <ItemTooltip item={character.outfit} />
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
                                        <ItemTooltip item={character.gear} />
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
                    <Col md={2} xs={12}>
                        <Row className="mb-2">
                            <Col><b><Translate id="basic.level" />: </b>{character.level}</Col>
                        </Row>
                        {character.traits.filter(trait => trait.active).length > 0 ? 
                            <ul className="list-inline">
                            {
                                character.traits.filter(trait => trait.active)
                                .map(trait => 
                                    <li className="list-inline-item">
                                        <TraitItem trait={trait} />
                                    </li>)
                            }
                            </ul>
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