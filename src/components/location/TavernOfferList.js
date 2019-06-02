import React from 'react';
import PropTypes from 'prop-types';

import TavernOfferListItem from './TavernOfferListItem';

const renderList = (offers, visitTavern, selectedCharacter) => (
    <div>
        {offers.map(offer => renderListItem(offer, visitTavern, selectedCharacter))}
    </div>
);

const renderListItem = (offer, visitTavern, selectedCharacter) => (
    <div key={offer.id}>
        <TavernOfferListItem offer={offer} selectedCharacter={selectedCharacter} visitTavern={visitTavern} />
    </div>
);

const TavernOfferList = (props) => (
    <div>
        {renderList(props.offers, props.visitTavern, props.selectedCharacter)}
    </div>
);

TavernOfferList.propTypes = {
    offers: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    visitTavern: PropTypes.func.isRequired
};

export default TavernOfferList;