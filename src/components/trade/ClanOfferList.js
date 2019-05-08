import React from 'react';
import PropTypes from 'prop-types';

import ClanOfferListItem from './ClanOfferListItem';
import { Translate } from 'react-localize-redux';

const createOffer = (item) => {
    const offer = {
        itemId: item.id,
        type: item.details.itemType,
        details: item.details
    }
    return offer;
}

const renderList = (weapons, outfits, gear, consumables) => (
    <div>
        <h5><Translate id="labels.trade.offers" /></h5>
        {
            weapons.length === 0 && outfits.length === 0 && gear.length === 0 && consumables.length === 0 &&
            <Translate id="labels.noItems" />
        }
        {   weapons.length > 0 &&
                weapons.map(weapon => renderListItem(createOffer(weapon)))
        }
        {   outfits.length > 0 &&
                outfits.map(outfit => renderListItem(createOffer(outfit)))
        }
        {   gear.length > 0 &&
                gear.map(gear => renderListItem(createOffer(gear)))
        }
        {   consumables.length > 0 &&
                consumables.map(consumable => renderListItem(createOffer(consumable)))
        }
    </div>
);

const renderListItem = (offer) => (
    <div key={offer.type + offer.itemId}>
        <ClanOfferListItem offer={offer} />
    </div>
);

const ClanOfferList = (props) => (
    <div>
        {renderList(props.weapons, props.outfits, props.gear, props.consumables)}
    </div>
);

ClanOfferList.propTypes = {
    weapons: PropTypes.array.isRequired,
    outfits: PropTypes.array.isRequired,
    gear: PropTypes.array.isRequired,
    consumables: PropTypes.array.isRequired,
};

export default ClanOfferList;