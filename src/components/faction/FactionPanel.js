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
                                <Col md={6}>
                                    { 
                                        this.props.clan.faction.factionAids.map(aid => 
                                        <FactionAid
                                            key={aid.id}
                                            aid={aid}
                                            selectedCharacter={this.props.selectedCharacter}
                                            factionAction={this.props.handleFactionAction} />)
                                    }
                                </Col>
                                <Col md={6}>
                                    <FactionsOverview overview={this.props.overview} />
                                    <FactionsLeaderboard clans={this.props.overview.clans} />
                                </Col>
                            </Row>
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

FactionPanel.propTypes = {
    clan: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { clan, selectedCharacter } = state.clan;
    const overview = state.data.factionsOverview.data;

    const { fetched, fetching, failed, error } = state.data.factionsOverview;

    return { fetching, fetched, failed, error, overview, clan, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        dismissError,
        fetchFactionsOverview,
        handleFactionAction
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FactionPanel);