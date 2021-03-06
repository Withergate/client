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

import { ALL } from '../../constants/constants';

const createOffer = (item) => {
    const offer = {
        itemId: item.id,
        details: item.details
    }
    return offer;
}

const renderList = (items, publishOffer, filter, changeFilter, profile) => (
    <div>
        <ItemFilter filter={filter} onChange={changeFilter} />
        {   (filter === ALL) ?
                items.map(item => renderListItem(createOffer(item), publishOffer, profile))
            : items.filter(item => item.details.itemType === filter)
                .map(item => renderListItem(createOffer(item), publishOffer, profile))
        }
    </div>
);

const renderListItem = (offer, publishOffer, profile) => (
    <div key={offer.details.itemType + offer.itemId}>
        <ClanOfferListItem offer={offer} publishOffer={publishOffer} profile={profile} />
    </div>
);

const ClanOfferList = (props) => (
    <div>
        <h5><Translate id="labels.trade.offers" /></h5>
        {
            props.items.length === 0 ?
                <Translate id="labels.noItems" />
            : renderList(props.items, props.publishOffer, props.filter, props.changeClanOfferFilter, props.profile)
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
    const profile = state.profile.profile.data;

    return { items, filter, profile };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        publishOffer,
        changeClanOfferFilter
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanOfferList);