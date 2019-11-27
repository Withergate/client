import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Row, Col, Card, Button } from 'react-bootstrap';

import { visitTavern, refreshTavern } from '../../actions/actionActions';
import { fetchTavernOffers } from '../../actions/dataActions';

import TavernOfferList from './TavernOfferList';

import spinner from '../../images/spinner.gif';
import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE } from '../../constants/constants';

class TavernPanel extends React.Component {
    componentDidMount() {
        this.props.fetchTavernOffers();
    }

    render() {
        return ( 
            <div>
                { this.props.fetched &&
                    <div>
                        <Card className="mb-4">
                            <Card.Img variant="top" width="600px" src="https://storage.googleapis.com/withergate-images/locations/tavern.png" />
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <p><Translate id="tavern.description" /></p>
                                        <p><small><Translate id="tavern.info" /></small></p>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant="outline-success"
                                    onClick={() => this.props.refreshTavern()}>
                                    <Translate id="tavern.refresh" /><GameIcon type={CAPS} size={LARGE} value={this.props.refreshCost} noPadding />
                                </Button>
                            </Card.Footer>
                        </Card>
                        <TavernOfferList 
                            offers={this.props.offers}
                            selectedCharacter={this.props.selectedCharacter}
                            visitTavern={this.props.visitTavern} />
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        )
    }
};

TavernPanel.propTypes = {
    offers: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const offers = state.clan.tavernOffers.data;
    const refreshCost = state.game.properties.tavernRefreshPrice;

    const fetching = state.clan.tavernOffers.fetching;
    const fetched = state.clan.tavernOffers.fetched;
    const failed = state.clan.tavernOffers.failed;

    return { fetching, fetched, failed, offers, selectedCharacter, refreshCost };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        visitTavern,
        refreshTavern,
        fetchTavernOffers
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TavernPanel);