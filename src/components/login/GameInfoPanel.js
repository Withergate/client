import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Row, Col, Image, Table } from 'react-bootstrap';

import { fetchGameInfo, fetchGlobalNotification } from '../../actions/dataActions';
import spinner from '../../images/spinner.gif';
import { GameIcon } from '../shared/GameIcon';
import { FAME, LARGE, GLOBAL } from '../../constants/constants';
import { GlobalNotification } from '../notification/GlobalNotification';
import TurnTimer from '../shared/TurnTimer';

class GameInfoPanel extends React.Component {
    componentDidMount() {
        this.props.fetchGameInfo();
        this.props.fetchGlobalNotification(GLOBAL);
    }

    render() {
        return (
            <Card border="success">
                { this.props.fetched && 
                    <Card.Body>
                        <h5><Translate id="login.gameInfo" /></h5>
                        <Row>
                            <Col md={8} xs={8}>
                                <b><Translate id="login.currentTurn" /></b>
                            </Col>
                            <Col>
                                { this.props.info.currentTurn.turnId <= this.props.info.maxTurns ?
                                    <span>{this.props.info.currentTurn.turnId} / {this.props.info.maxTurns}</span>
                                    : <Translate id="labels.end" />
                                }
                                
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
                        { this.props.global.fetched && this.props.global.GLOBAL.active &&
                            <GlobalNotification message={this.props.global.GLOBAL.message} />
                        }
                        <TurnTimer />
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
    const global = state.notifications.global;
   
    return { info, fetched, fetching, failed, error, global };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchGameInfo,
        fetchGlobalNotification
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GameInfoPanel);