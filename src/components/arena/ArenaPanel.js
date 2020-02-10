import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";

import { visitArena } from '../../actions/actionActions';
import { dismissError } from '../../actions/uiActions';
import { fetchArenaStats } from '../../actions/dataActions';

import { Row, Col, Card, Table } from 'react-bootstrap';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';
import ActionButton from '../shared/ActionButton';

class ArenaPanel extends React.Component {
    componentDidMount() {
        this.props.fetchArenaStats()
    }

    render() {
        return (
            <div>
                <Card className="mb-4">
                    <Card.Img variant="top" width="600px" src="https://storage.googleapis.com/withergate-images/locations/arena.png" />
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <p><Translate id="arena.description" /></p>
                                <p><small><Translate id="arena.info" /></small></p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        { this.props.selectedCharacter !== undefined ? 
                            <Row>
                                <ActionButton
                                    character={this.props.selectedCharacter}
                                    action={() => this.props.visitArena(this.props.selectedCharacter.id)}
                                    buttonText="labels.visit"
                                    tooltip="arena.tooltip" />
                            </Row>
                            : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                        }
                    </Card.Footer>
                </Card>

                {
                    this.props.fetched && this.props.stats.length > 0 &&
                
                    <Table className="mt-4" striped borderless hover>
                        <thead>
                            <tr>
                                <th><Translate id="basic.character" /></th>
                                <th><Translate id="basic.clan" /></th>
                                <th><Translate id="labels.numWins" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.stats.map(stats =>
                                <tr key={stats.id}>
                                    <td>{stats.characterName}</td>
                                    <td>{stats.clanName}</td>
                                    <td>{stats.stats}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                }
                {
                    this.propsfetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        )
    }
};

ArenaPanel.propTypes = {
    selectedCharacter: PropTypes.object,
    stats: PropTypes.array.isRequired,
    visitArena: PropTypes.func.isRequired,
    fetchArenaStats: PropTypes.func.isRequired,
    error: PropTypes.string
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const stats = state.data.arenaStats.data;
    const fetching = state.data.arenaStats.fetching;
    const fetched = state.data.arenaStats.fetched;
    const failed = state.data.arenaStats.failed;
    const error = state.data.arenaStats.error;

    return { selectedCharacter, stats, fetching, fetched, failed, error};
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        visitArena,
        fetchArenaStats,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ArenaPanel);