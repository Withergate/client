import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Row, Col, Image, Table } from 'react-bootstrap';

import { fetchGameInfo } from '../../actions/dataActions';
import spinner from '../../images/spinner.gif';
import { GameIcon } from '../shared/GameIcon';
import { FAME, LARGE } from '../../constants/constants';

class GameInfoPanel extends React.Component {
    componentDidMount() {
        this.props.fetchGameInfo();
    }

    render() {
        return (
            <Card>
                { this.props.fetched && 
                    <Card.Body>
                        <h5><Translate id="login.gameInfo" /></h5>
                        <Row>
                            <Col md={8} xs={8}>
                                <b><Translate id="login.currentTurn" /></b>
                            </Col>
                            <Col>
                                {this.props.info.currentTurn.turnId}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8} xs={8}>
                                <b><Translate id="login.clanNum" /></b>
                            </Col>
                            <Col>
                                {this.props.info.clanNum}
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={8} xs={8}>
                                <b><Translate id="login.profileNum" /></b>
                            </Col>
                            <Col>
                                {this.props.info.profileNum}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th><Translate id="basic.clan" /></th>
                                            <th className="centered"><GameIcon type={FAME} size={LARGE} /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.props.info.topClans.map(clan =>
                                            <tr key={clan.id} className={clan.id === this.props.clanId ? "text-success" : ""}>
                                                <td>{clan.name}</td>
                                                <td className="centered">{clan.fame}</td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Card.Body>
                }
                {
                    this.props.fetching && <Image src={spinner} />
                }
                {
                    this.props.failed && <Card.Body><Translate id="login.noGameInfo" /></Card.Body>
                }
                
            </Card>
        )
    }
}

GameInfoPanel.propTypes = {
    info: PropTypes.object.isRequired,
    fetched: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const info = state.game.info.data;
    const { fetched, failed, fetching, error } = state.game.info;
   
    return { info, fetched, fetching, failed, error };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchGameInfo
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GameInfoPanel);