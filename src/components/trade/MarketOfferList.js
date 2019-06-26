import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ItemFilter from '../item/ItemFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MarketOfferListItem from './MarketOfferListItem';

import { publishOffer, deleteOffer, tradeItem } from '../../actions/actionActions';
import { changeMarketOfferFilter } from '../../actions/uiActions';
import { fetchMarketOffers } from '../../actions/dataActions';

import spinner from '../../images/spinner.gif';

import { ALL } from '../../constants/constants';

class MarketOfferList extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchMarketOffers();
        }
    }

    render() {
        return ( 
            <div>
                { this.props.fetched &&
                    <div>
                        <h5><Translate id="basic.marketplace" /></h5>
                        { this.props.offers.length ? 
                            renderList(this.props.offers, this.props.selectedCharacter, this.props.tradeItem, this.props.deleteOffer, this.props.filter, this.props.changeMarketOfferFilter, this.props.clanId)
                            : <Translate id="labels.noOffers" />
                        }
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        )
    }
};

const renderList = (offers, selectedCharacter, onBuy, onCancel, filter, changeFilter, clanId) => (
    <div>
        <ItemFilter filter={filter} onChange={changeFilter} />
        {
            offers
                .filter(offer => (offer.details.itemType === filter || filter === ALL))
                .map(offer => renderListItem(offer, selectedCharacter, onBuy, onCancel, clanId))
            }
    </div>
);

const renderListItem = (offer, selectedCharacter, onBuy, onCancel, clanId) => (
    <div key={offer.id}>
        <MarketOfferListItem offer={offer} selectedCharacter={selectedCharacter} onBuy={onBuy} onCancel={onCancel} clanId={clanId} />
    </div>
);

MarketOfferList.propTypes = {
    offers: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object,
    filter: PropTypes.string.isRequired,
    clanId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const clanId = state.clan.clan.id;
    const offers = state.data.offers.data;

    const fetching = state.data.offers.fetching;
    const fetched = state.data.offers.fetched;
    const failed = state.data.offers.failed;
    const filter = state.ui.filter.marketOffers;

    return { fetching, fetched, failed, offers, clanId, selectedCharacter, filter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        publishOffer,
        changeMarketOfferFilter,
        deleteOffer,
        tradeItem,
        fetchMarketOffers
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MarketOfferList);