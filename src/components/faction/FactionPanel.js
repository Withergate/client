import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { dismissError } from '../../actions/uiActions';
import { handleFactionAction } from '../../actions/actionActions';
import { fetchFactionsOverview } from '../../actions/dataActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';
import FactionDescription from './FactionDescription';
import { Card, Row, Col } from 'react-bootstrap';
import FactionAid from './FactionAid';
import FactionsOverview from './FactionsOverview';
import FactionsLeaderboard from './FactionsLeaderboard';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';

class FactionPanel extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchFactionsOverview();
        }
    }

    render() {
        return ( 
            <div>
                {
                    this.props.fetched &&
                        <div>
                            <Card className="mb-4">
                                <FactionDescription faction={this.props.clan.faction} />
                            </Card>
                            <Row className="mt-4">
                                <Col md={6} className="mb-4">
                                    <Card>
                                        <Card.Body>
                                        { 
                                            this.props.clan.faction.factionAids.map(aid => 
                                            <FactionAid
                                                key={aid.identifier}
                                                aid={aid}
                                                selectedCharacter={this.props.selectedCharacter}
                                                factionAction={this.props.handleFactionAction} />)
                                        }
                                        </Card.Body>
                                    </Card>
                                    <p className="mt-4 text-danger">
                                        <Translate id="factions.attackLink"
                                            data={{ link: <Link to='/fame'><Translate id="header.fame" /></Link> }} />
                                    </p>
                                </Col>
                                <Col md={6}>
                                    <FactionsOverview overview={this.props.overview} turns={this.props.factionTurns} />
                                    <FactionsLeaderboard clans={this.props.overview.clans} />
                                </Col>
                            </Row>
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

FactionPanel.propTypes = {
    clan: PropTypes.object.isRequired,
    factionTurns: PropTypes.array.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { clan, selectedCharacter } = state.clan;
    const overview = state.data.factionsOverview.data;
    const factionTurns = state.game.properties.factionTurns;

    const { fetched, fetching, failed, error } = state.data.factionsOverview;

    return { fetching, fetched, failed, error, overview, clan, selectedCharacter, factionTurns };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        dismissError,
        fetchFactionsOverview,
        handleFactionAction
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FactionPanel);