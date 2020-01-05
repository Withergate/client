import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { dismissError } from '../../actions/uiActions';
import { handleFactionAction } from '../../actions/actionActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';
import FactionDescription from './FactionDescription';
import { Card, Row, Col } from 'react-bootstrap';
import FactionAid from './FactionAid';

class FactionPanel extends React.Component {

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
    const factions = state.data.factions.data;

    const { fetched, fetching, failed, error } = state.clan;

    return { fetching, fetched, failed, error, factions, clan, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        dismissError,
        handleFactionAction
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FactionPanel);