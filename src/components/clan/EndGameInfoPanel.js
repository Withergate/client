import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Row, Col, Image } from 'react-bootstrap';

import { getTranslatedText } from '../../translations/translationUtils';
import { fetchGameInfo } from '../../actions/dataActions';
import spinner from '../../images/spinner.gif';

class EndGameInfoPanel extends React.Component {
    componentDidMount() {
        this.props.fetchGameInfo();
    }

    render() {
        return (
            <Card className="m-3" border="danger">
                { this.props.fetched && 
                    <Card.Body>
                        <h5><Translate id="endgame.header" /></h5>
                        <Row className="mb-4">
                            <Col md={6} xs={12} className="mb-4"><Translate id="endgame.text" /></Col>
                            <Col>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.winner" />:</b>
                                    </Col>
                                    <Col>{this.props.info.topClans[0].name}</Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.faction" />:</b>
                                    </Col>
                                    <Col>{getTranslatedText(this.props.info.faction.name)}</Col>
                                </Row>
                            </Col>
                        </Row>
                        <h5><Translate id="endgame.clanHeader" /></h5>
                        <Row className="mb-4">
                            <Col md={6} xs={12} className="mb-4"><Translate id="endgame.clanText" /></Col>
                            <Col>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.starvations" />:</b> 
                                    </Col>
                                    <Col>{this.props.clan.statistics.starvations}</Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.failedDisasters" />:</b>
                                    </Col>
                                    <Col>{this.props.clan.statistics.failedDisasters}</Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.craftedItems" />:</b>
                                    </Col>
                                    <Col>{this.props.clan.statistics.craftedItems}</Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.incomingAttacks" />:</b>
                                    </Col>
                                    <Col>{this.props.clan.statistics.incomingAttacks} / {this.props.clan.statistics.incomingAttacksSuccess}</Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.outcomingAttacks" />:</b>
                                    </Col>
                                    <Col>{this.props.clan.statistics.outcomingAttacks} / {this.props.clan.statistics.outcomingAttacksSuccess}</Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        <b><Translate id="endgame.encounters" />:</b>
                                    </Col>
                                    <Col>{this.props.clan.statistics.encounters} / {this.props.clan.statistics.encountersSuccess}</Col>
                                </Row>
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

EndGameInfoPanel.propTypes = {
    clan: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired,
    fetched: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const info = state.game.info.data;
    const clan = state.clan.clan;
    const { fetched, failed, fetching, error } = state.game.info;
   
    return { info, clan, fetched, fetching, failed, error };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchGameInfo
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EndGameInfoPanel);