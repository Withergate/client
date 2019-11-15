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

const renderList = (items, publishOffer, filter, changeFilter) => (
    <div>
        <ItemFilter filter={filter} onChange={changeFilter} />
        {   (filter === ALL || filter === WEAPON) &&
                items.filter(item => item.details.itemType === WEAPON)
                .map(weapon => renderListItem(createOffer(weapon), publishOffer))
        }
        {   (filter === ALL || filter === OUTFIT) &&
                items.filter(item => item.details.itemType === OUTFIT)
                .map(outfit => renderListItem(createOffer(outfit), publishOffer))
        }
        {   (filter === ALL || filter === GEAR) &&
                items.filter(item => item.details.itemType === GEAR)
                .map(gear => renderListItem(createOffer(gear), publishOffer))
        }
        {   (filter === ALL || filter === CONSUMABLE) &&
                items.filter(item => item.details.itemType === CONSUMABLE)
                .map(consumable => renderListItem(createOffer(consumable), publishOffer))
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
            props.items.length === 0 ?
                <Translate id="labels.noItems" />
            : renderList(props.items, props.publishOffer, props.filter, props.changeClanOfferFilter)
        }
    </div>
);

ClanOfferList.propTypes = {
    items: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    const { items } = state.clan.clan;
    const filter = state.ui.filter.clanOffers;

    return { items, filter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        publishOffer,
        changeClanOfferFilter
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanOfferList);