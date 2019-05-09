import React from 'react';
import PropTypes from 'prop-types';

import ClanOfferListItem from './ClanOfferListItem';
import { Translate } from 'react-localize-redux';

const createOffer = (item) => {
    const offer = {
        itemId: item.id,
        details: item.details
    }
    return offer;
}

const renderList = (weapons, outfits, gear, consumables, publishOffer) => (
    <div>
        <h5><Translate id="labels.trade.offers" /></h5>
        {
            weapons.length === 0 && outfits.length === 0 && gear.length === 0 && consumables.length === 0 &&
            <Translate id="labels.noItems" />
        }
        {   weapons.length > 0 &&
                weapons.map(weapon => renderListItem(createOffer(weapon), publishOffer))
        }
        {   outfits.length > 0 &&
                outfits.map(outfit => renderListItem(createOffer(outfit), publishOffer))
        }
        {   gear.length > 0 &&
                gear.map(gear => renderListItem(createOffer(gear), publishOffer))
        }
        {   consumables.length > 0 &&
                consumables.map(consumable => renderListItem(createOffer(consumable), publishOffer))
        }
    </div>
);

const renderListItem = (offer, publishOffer) => (
    <div key={offer.details.itemType + offer.itemId}>
        <ClanOfferListItem offer={offer} publishOffer={publishOffer} />
    </div>
);

const ClanOfferList = (props) => (
    <div>
        {renderList(props.weapons, props.outfits, props.gear, props.consumables, props.publishOffer)}
    </div>
);

ClanOfferList.propTypes = {
    weapons: PropTypes.array.isRequired,
    outfits: PropTypes.array.isRequired,
    gear: PropTypes.array.isRequired,
    consumables: PropTypes.array.isRequired,
    publishOffer: PropTypes.func.isRequired
};

export default ClanOfferList;