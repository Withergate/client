import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClanOfferListItem from './ClanOfferListItem';
import { Translate } from 'react-localize-redux';
import ItemFilter from '../item/ItemFilter';

import { 
    publishOffer
} from '../../actions/actionActions';
import {
    changeClanOfferFilter
} from '../../actions/uiActions';

import { ALL, WEAPON, OUTFIT, GEAR, CONSUMABLE } from '../../constants/constants';

const createOffer = (item) => {
    const offer = {
        itemId: item.id,
        details: item.details
    }
    return offer;
}

const renderList = (weapons, outfits, gear, consumables, publishOffer, filter, changeFilter) => (
    <div>
        <ItemFilter filter={filter} onChange={changeFilter} />
        {   weapons.length > 0 && (filter === ALL || filter === WEAPON) &&
                weapons.map(weapon => renderListItem(createOffer(weapon), publishOffer))
        }
        {   outfits.length > 0 && (filter === ALL || filter === OUTFIT) &&
                outfits.map(outfit => renderListItem(createOffer(outfit), publishOffer))
        }
        {   gear.length > 0 && (filter === ALL || filter === GEAR) &&
                gear.map(gear => renderListItem(createOffer(gear), publishOffer))
        }
        {   consumables.length > 0 && (filter === ALL || filter === CONSUMABLE) &&
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
        <h5><Translate id="labels.trade.offers" /></h5>
        {
            (props.weapons.length === 0 && props.outfits.length === 0 && props.gear.length === 0 && props.consumables.length === 0) ?
            <Translate id="labels.noItems" />
            : renderList(props.weapons, props.outfits, props.gear, props.consumables, props.publishOffer, props.filter, props.changeClanOfferFilter)
        }
    </div>
);

ClanOfferList.propTypes = {
    weapons: PropTypes.array.isRequired,
    outfits: PropTypes.array.isRequired,
    gear: PropTypes.array.isRequired,
    consumables: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    const { weapons, outfits, gear, consumables } = state.clan.clan;
    const filter = state.ui.filter.clanOffers;

    return { weapons, outfits, gear, consumables, filter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        publishOffer,
        changeClanOfferFilter
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanOfferList);