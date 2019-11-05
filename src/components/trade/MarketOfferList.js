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
import { fetchMarketOffers } from '../../actions/dataActions';
import { dismissError } from '../../actions/uiActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';

import { ALL } from '../../constants/constants';

class MarketOfferList extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchMarketOffers(this.props.offers.number);
        }
    }

    render() {
        return ( 
            <div>
                { this.props.fetched &&
                    <div>
                        <h5><Translate id="basic.marketplace" /></h5>
                        <ItemFilter filter={this.props.filter} onChange={this.props.changeMarketOfferFilter} />
                        <Paginator
                            number={this.props.offers.number}
                            max={this.props.offers.totalPages - 1}
                            min={0}
                            onNext={this.props.fetchMarketOffers}
                            onPrevious={this.props.fetchMarketOffers}>
                            <Translate id="labels.page" /> {this.props.offers.number + 1}
                        </Paginator>

                        { this.props.offers.content.length ? 
                            renderList(this.props.offers.content, this.props.selectedCharacter, this.props.tradeItem, this.props.deleteOffer, this.props.filter, this.props.clanId)
                            : <Translate id="labels.noOffers" />
                        }
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        )
    }
};

const renderList = (offers, selectedCharacter, onBuy, onCancel, filter, clanId) => (
    <div className="mt-2">
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
    offers: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    filter: PropTypes.string.isRequired,
    clanId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const clanId = state.clan.clan.id;
    const offers = state.data.offers.data;

    const { fetched, fetching, failed, error } = state.data.offers;
    const filter = state.ui.filter.marketOffers;

    return { fetching, fetched, failed, error, offers, clanId, selectedCharacter, filter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        publishOffer,
        changeMarketOfferFilter,
        deleteOffer,
        tradeItem,
        fetchMarketOffers,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MarketOfferList);