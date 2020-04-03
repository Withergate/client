import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { getRarityTextColor } from './itemUtils';
import { Row, Col, Card, Image } from 'react-bootstrap';
import ItemDetails from './ItemDetails';

import { GameIcon } from '../shared/GameIcon';
import { LARGE, JUNK } from '../../constants/constants';
import ActionButton from '../shared/ActionButton';

const getCost = (item, character) => {
    if (!character) {
        return item.craftingCost;
    } else {
        const cost = item.craftingCost - character.crafting;
        if (cost < 1) {
            return 1;
        }
        return cost;
    }
}

const CraftingListItem = ({item, selectedCharacter, craftItem}) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title className={getRarityTextColor(item.rarity)}>
                {getTranslatedText(item.name)}
            </Card.Title>
            <Row>
                <Col md={4} className="mb-2">
                    <Image rounded className="w-100" src={item.imageUrl} />
                </Col>
                <Col md={8}>
                    <p>{getTranslatedText(item.description)}</p>
                    <ItemDetails details={item} />
                    <div className="mt-4 inline">
                        <b><Translate id="basic.price" />: </b>
                        <GameIcon type={JUNK} size={LARGE} value={getCost(item, selectedCharacter)} />
                    </div>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            { selectedCharacter !== undefined ? 
                <Row>
                    <ActionButton
                        character={selectedCharacter}
                        action={() => craftItem(selectedCharacter.id, item.identifier)}
                        buttonText="labels.craftItem"
                        tooltip="labels.craftItemTooltip" />
                </Row>
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </Card.Footer>
    </Card>
);

CraftingListItem.propTypes = {
    item: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    craftItem: PropTypes.func.isRequired
};

export default CraftingListItem;