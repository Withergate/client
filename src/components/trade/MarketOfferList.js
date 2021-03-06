import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ItemFilter from '../item/ItemFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MarketOfferListItem from './MarketOfferListItem';
import { Paginator } from '../shared/Paginator';

import { publishOffer, deleteOffer, tradeItem } from '../../actions/actionActions';
import { changeMarketOfferFilter } from '../../actions/uiActions';
import { fetchMarketOffers, fetchPendingMarketOffers } from '../../actions/dataActions';
import { dismissError } from '../../actions/uiActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';

import { ALL } from '../../constants/constants';
import { InfoIcon } from '../shared/InfoIcon';
import PendingMarketOfferListItem from './PendingMarketOfferListItem';

class MarketOfferList extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchMarketOffers(this.props.offers.number);
            this.props.fetchPendingMarketOffers(0, 1000);
        }
    }

    render() {
        return ( 
            <div>
                { this.props.fetched &&
                    <div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><h5><Translate id="basic.marketplace" /></h5></li>
                            <li className="list-inline-item"><h5><InfoIcon textKey="labels.marketplaceInfo" /></h5></li>
                        </ul>                        
                        <ItemFilter filter={this.props.filter} onChange={this.props.changeMarketOfferFilter} />
                        <Paginator
                            number={this.props.offers.number}
                            max={this.props.offers.totalPages - 1}
                            min={0}
                            onNext={this.props.fetchMarketOffers}
                            onPrevious={this.props.fetchMarketOffers}>
                            <Translate id="labels.page" /> {this.props.offers.number + 1}
                        </Paginator>
                        <div className="mt-3">
                            { this.props.offers.content.length ? 
                                renderList(this.props.offers.content, this.props.tradeItem, this.props.deleteOffer, this.props.filter, this.props.clanId)
                                : <Translate id="labels.noOffers" />
                            }
                        </div>
                        <div className="mt-4">
                            <h5 className="mb-4"><Translate id="labels.pendingOffers" /></h5>
                            { this.props.pendingOffers.content.length ? 
                                renderPendingList(this.props.pendingOffers.content)
                                : <Translate id="labels.noOffers" />
                            }
                        </div>
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error error={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        )
    }
};

const renderList = (offers, onBuy, onCancel, filter, clanId) => (
        offers
            .filter(offer => (offer.item.details.itemType === filter || filter === ALL))
            .map(offer => renderListItem(offer, onBuy, onCancel, clanId))
);

const renderPendingList = (offers) => (
    offers.map(offer => 
        <div key={offer.id}>
            <PendingMarketOfferListItem offer={offer} />
        </div>)
);

const renderListItem = (offer, onBuy, onCancel, clanId) => (
    <div key={offer.id}>
        <MarketOfferListItem offer={offer} onBuy={onBuy} onCancel={onCancel} clanId={clanId} />
    </div>
);

MarketOfferList.propTypes = {
    offers: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    clanId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const clanId = state.clan.clan.id;
    const offers = state.data.offers.data;
    const pendingOffers = state.data.pendingOffers.data;

    const fetched = state.data.offers.fetched && state.data.pendingOffers.fetched;
    const fetching = state.data.offers.fetching || state.data.pendingOffers.fetching;
    const failed = state.data.offers.failed || state.data.pendingOffers.failed;
    const error = state.data.offers.error || state.data.pendingOffers.error;
    const filter = state.ui.filter.marketOffers;

    return { fetching, fetched, failed, error, offers, pendingOffers, clanId, filter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        publishOffer,
        changeMarketOfferFilter,
        deleteOffer,
        tradeItem,
        fetchMarketOffers,
        fetchPendingMarketOffers,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MarketOfferList);