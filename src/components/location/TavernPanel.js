import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Card } from 'react-bootstrap';

import { visitTavern } from '../../actions/actionActions';
import { fetchTavernOffers } from '../../actions/dataActions';
import { dismissError } from '../../actions/uiActions';

import TavernOfferList from './TavernOfferList';
import { Error } from '../shared/Error';

import spinner from '../../images/spinner.gif';

class TavernPanel extends React.Component {
    componentDidMount() {
        this.props.fetchTavernOffers();
    }

    render() {
        return ( 
            <div>
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
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
    const { selectedCharacter } = state.clan;
    const offers = state.clan.tavernOffers.data;

    const fetching = state.clan.tavernOffers.fetching || state.action.fetching;
    const fetched = state.clan.tavernOffers.fetched;
    const failed = state.clan.tavernOffers.failed || state.action.failed;

    const error = state.clan.tavernOffers.error || state.action.error;

    return { fetching, fetched, failed, error, offers, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        visitTavern,
        fetchTavernOffers,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TavernPanel);