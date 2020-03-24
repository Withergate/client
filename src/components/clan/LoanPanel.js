import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { GameIcon } from '../shared/GameIcon';
import { processLoan } from '../../actions/actionActions';
import { CAPS, LARGE, SMALL, FAME } from '../../constants/constants';

class LoanPanel extends React.Component {
    render() {
        return <Card className="mt-4">
            <Card.Body>
                <Card.Title>
                    <Translate id="labels.loan" />
                </Card.Title>
                <Row className="mt-2">
                    <Col md={10}>
                        <p>
                            <Translate id="labels.loanText" />
                        </p>
                        <p className="text-muted">
                            <small><Translate id="labels.loanDescription" /></small>
                        </p>         
                    </Col>
                    <Col>
                        <GameIcon type={CAPS} size={LARGE} value={this.props.properties.loanCaps} />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant={this.props.clan.activeLoan ? "outline-success" : "outline-warning"}
                    onClick={() => this.props.processLoan()} >
                    { this.props.clan.activeLoan ?
                        <div className="inline">
                            <Translate id="labels.loanPay" />&nbsp;
                            <GameIcon type={CAPS} size={SMALL} value={this.props.properties.loanPayback} />
                        </div>
                        : <div className="inline">
                            <Translate id="labels.loanTake" />&nbsp;
                            <GameIcon type={FAME} size={SMALL} value={this.props.properties.loanFame} />
                        </div>
                    }
                </Button>
            </Card.Footer>
        </Card>
    }
}

LoanPanel.propTypes = {
    clan: PropTypes.object.isRequired,
    properties: PropTypes.object.isRequired,
    processLoan: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const clan = state.clan.clan;
    const properties = state.game.properties;
   
    return { clan, properties };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        processLoan
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoanPanel);