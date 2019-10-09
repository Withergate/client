import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";

import { visitArena } from '../../actions/actionActions';
import { fetchArenaStats } from '../../actions/dataActions';

import { Row, Col, Button, Card, Table } from 'react-bootstrap';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';

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
                                <Button
                                    variant="dark"
                                    className="m-2 button-classic" 
                                    onClick={() => this.props.visitArena(this.props.selectedCharacter.id)}
                                    disabled={this.props.selectedCharacter.state !== 'READY'}>
                                    <Translate id="labels.visit" />
                                </Button>
                            </Row>
                            : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                        }
                    </Card.Footer>
                </Card>

                {
                    this.props.fetched &&
                
                    <Table className="mt-4" striped bordered hover>
                        <thead>
                            <tr>
                                <th><Translate id="basic.clan" /></th>
                                <th><Translate id="basic.character" /></th>
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
                    this.props.failed && <Error message={this.props.error} />
                }
            </div>
        )
    }
};

ArenaPanel.propTypes = {
    selectedCharacter: PropTypes.object,
    stats: PropTypes.array.isRequired,
    visitArena: PropTypes.func.isRequired,
    fetchArenaStats: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const selectedCharacter = state.clan.selectedCharacter;
    const stats = state.data.arenaStats.data;
    const fetching = state.data.arenaStats.fetching;
    const fetched = state.data.arenaStats.fetched;
    const failed = state.data.arenaStats.failed;
    const error = state.data.error;

    return { selectedCharacter, stats, fetching, fetched, failed, error};
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        visitArena,
        fetchArenaStats
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ArenaPanel);