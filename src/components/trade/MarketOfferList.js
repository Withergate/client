import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ItemFilter from '../item/ItemFilter';

import MarketOfferListItem from './MarketOfferListItem';

import { ALL } from '../../constants/constants';

const renderList = (offers, selectedCharacter, onBuy, onCancel, filter, changeFilter) => (
    <div>
        <ItemFilter filter={filter} onChange={changeFilter} />
        {
            offers
                .filter(offer => (offer.details.itemType === filter || filter === ALL))
                .map(offer => renderListItem(offer, selectedCharacter, onBuy, onCancel))
            }
    </div>
);

const renderListItem = (offer, selectedCharacter, onBuy, onCancel) => (
    <div key={offer.id}>
        <MarketOfferListItem offer={offer} selectedCharacter={selectedCharacter} onBuy={onBuy} onCancel={onCancel} />
    </div>
);

const MarketOfferList = (props) => (
    <div>
        <h5><Translate id="basic.marketplace" /></h5>
        { props.offers.length ? 
            renderList(props.offers, props.selectedCharacter, props.onBuy, props.onCancel, props.filter, props.changeFilter)
            : <Translate id="labels.noOffers" />
        }
    </div>
);

MarketOfferList.propTypes = {
    offers: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    onBuy: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};

export default MarketOfferList;