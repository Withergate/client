import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import MarketOfferListItem from './MarketOfferListItem';

const renderList = (offers, selectedCharacter, onBuy, onCancel) => (
    <div>
        <h5><Translate id="basic.marketplace" /></h5>
        {offers.map(offer => renderListItem(offer, selectedCharacter, onBuy, onCancel))}
    </div>
);

const renderListItem = (offer, selectedCharacter, onBuy, onCancel) => (
    <div key={offer.id}>
        <MarketOfferListItem offer={offer} selectedCharacter={selectedCharacter} onBuy={onBuy} onCancel={onCancel} />
    </div>
);

const MarketOfferList = (props) => (
    <div>
        { props.offers.length ? 
            renderList(props.offers, props.selectedCharacter, props.onBuy, props.onCancel)
            : <Translate id="labels.noOffers" />
        }
    </div>
);

MarketOfferList.propTypes = {
    offers: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    onBuy: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default MarketOfferList;