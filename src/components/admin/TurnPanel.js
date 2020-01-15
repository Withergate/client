import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { setTurnStart } from '../../actions/dataActions';

import { Translate } from 'react-localize-redux';
import ReactDatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css')

class TurnPanel extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { 
            startDate: Date.parse(this.props.turn.startDate)
        };
    }

    handleDateChange(date) {
        this.setState({ 
            startDate: date
        });
    }

    render() {
        return (
            <Card className="mb-4">
                <Card.Body>
                    <Row>
                        <Col>
                            { this.props.turn.startDate ?
                                <Translate id="admin.startDate" data={{ date: this.props.turn.startDate }} />
                                : <Translate id="admin.startNow" />
                            } 
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-2">
                            <ReactDatePicker
                                showPopperArrow={false}
                                selected={this.state.startDate ? this.state.startDate : Date.now()}
                                dateFormat="yyyy-MM-dd"
                                minDate={Date.now()}
                                onChange={date => this.handleDateChange(date)}
                            />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Button
                        className="button-large"
                        variant="warning"
                        onClick={() => this.props.setTurnStart(this.state.startDate)} >
                        <Translate id="labels.confirm" />
                    </Button> 
                </Card.Footer>
             </Card>
        );
    }
}

TurnPanel.propTypes = {
    turn: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { turn } = state.turn;

    return { turn };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ setTurnStart }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TurnPanel);