import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Image, Button, Collapse } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';

import AttributeBar from './AttributeBar';
import TraitItem from './TraitItem';
import ItemTooltip from '../item/ItemTooltip';
import { COMBAT, SCAVENGE, CRAFTSMANSHIP, INTELLECT, HEALTH, EXPERIENCE_STAT, LARGE, GOLD } from '../../constants/constants';
import CharacterActionButton from './CharacterActionButton';
import CharacterHeader from './CharacterHeader';

import editIcon from '../../images/edit.png';
import { checkPremium } from '../profile/premiumUtils';
import RenameDialog from '../shared/RenameDialog';
import DefaultActionSettings from './DefaultActionSettings';

class CharacterListItem extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { 
            renameModal: false,
            open: false
        };
    }

    handleCollapseChange(value) {
        this.setState({
            ...this.state,
            open: value
        });
    }

    render() {
        const {character, unequipItem, selectCharacter, cancelAction, profile, renameCharacter} = this.props;
    
        return <Card className="mb-4">
            <Card.Body>
                <Card.Title>
                    <div className="inline">
                        <CharacterHeader character={character} size={LARGE} />
                        { checkPremium(profile.premiumType, GOLD) &&
                            <Image src={editIcon} className="ml-1" width="24px" onClick={() => this.setState({ renameModal: true })}/> 
                        }
                    </div>
                </Card.Title>
                <Row>
                    <Col md={2} xs={5}>
                        <Row>
                            <Col><Image rounded className="w-100" src={character.imageUrl} /></Col>
                        </Row>
                        <Row className="mt-1">
                            <Col>
                                <CharacterActionButton
                                    pendingAction={character.action}
                                    character={character}
                                    selectCharacter={selectCharacter}
                                    cancelAction={cancelAction}
                                    profile={profile} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant="outline-dark" size="sm"
                                    className="w-100 mt-1 mb-1"
                                    onClick={() => this.handleCollapseChange(!this.state.open)}>
                                    {
                                        this.state.open ?
                                            <Translate id="labels.closeDetails" />
                                        : <Translate id="labels.settings" />
                                    }
                                </Button>
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
                                    <li className="list-inline-item" key={trait.id}>
                                        <TraitItem trait={trait} />
                                    </li>)
                            }
                            </ul>
                            : <Translate id="basic.noTraits" />
                        }
                    </Col>
                </Row>

                <RenameDialog
                    show={this.state.renameModal}
                    text="labels.characterNameConstraints"
                    heading="labels.rename"
                    premiumType={GOLD}
                    onClose={() => this.setState({ renameModal: false })}
                    onConfirm={(name) => renameCharacter(character.id, name)}
                    placeholder={character.name} />
            </Card.Body>
            <Collapse in={this.state.open}>
                <Card.Footer>
                    <DefaultActionSettings character={character} />  
                </Card.Footer>
            </Collapse>
        </Card>
    }
};

CharacterListItem.propTypes = {
    character: PropTypes.object.isRequired,
    unequipItem: PropTypes.func.isRequired,
    cancelAction: PropTypes.func.isRequired,
    renameCharacter: PropTypes.func.isRequired,
    selectCharacter: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

export default CharacterListItem;