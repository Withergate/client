import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, Form, InputGroup, FormControl, Row, Col, ToggleButtonGroup, ToggleButton, FormLabel } from 'react-bootstrap';
import { updateGlobalNotification, fetchGlobalNotification} from '../../actions/dataActions';

import spinner from '../../images/spinner.gif';
import { Translate } from 'react-localize-redux';

class NotificationPanel extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { 
            message: this.props.message,
            active: this.props.active
        };
    }

    componentDidMount() {
        this.props.fetchGlobalNotification();
    }

    handleMessageChange(event) {
        this.setState({ 
            message: event.target.value
        });
    }

    handleActiveChange(event) {
        this.setState({ 
            active: event
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateGlobalNotification(this.state.message, this.state.active)
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <Card>
                        <Form
                            className="p-4"
                            id="form"
                            onSubmit={e => this.handleSubmit(e)}>
                            <Row className="mb-3">
                                <Col md={1}>
                                    <FormLabel>
                                        <Translate id="admin.message" />
                                    </FormLabel>
                                </Col>
                                <Col md={11}>
                                    <InputGroup>
                                        <FormControl
                                            name="message"
                                            type="text"
                                            value={this.state.message}
                                            onChange={e => this.handleMessageChange(e)} />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={1}>
                                    <FormLabel>
                                        <Translate id="admin.state" />
                                    </FormLabel>
                                </Col>
                                <Col md={11}>
                                    <ToggleButtonGroup
                                        type="radio"
                                        name = "active"
                                        defaultValue={this.state.active}
                                        onChange={e => this.handleActiveChange(e)}>
                                        <ToggleButton variant="outline-warning" value={true}><Translate id="admin.active" /></ToggleButton>
                                        <ToggleButton variant="outline-warning" value={false}><Translate id="admin.hidden" /></ToggleButton>
                                    </ToggleButtonGroup>
                                </Col>
                            </Row>
                        </Form>
                        <Card.Footer>
                            <Button
                                form="form"
                                variant="warning"
                                className="button-large"
                                type="submit">
                                <Translate id="labels.confirm" />
                            </Button>
                        </Card.Footer>
                    </Card>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        );
    }
}

NotificationPanel.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, message, active } = state.notifications.global;

    return { fetching, fetched, message, active };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ updateGlobalNotification, fetchGlobalNotification }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel);