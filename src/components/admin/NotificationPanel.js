import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Card, Form, InputGroup, FormControl, Row, Col, ToggleButtonGroup, ToggleButton, FormLabel, Image } from 'react-bootstrap';
import { updateGlobalNotification, fetchGlobalNotification} from '../../actions/dataActions';

import { Translate } from 'react-localize-redux';
import enIcon from '../../images/lang/english.png';
import czIcon from '../../images/lang/czech.png';

class NotificationPanel extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { 
            message: this.props.message,
            active: this.props.active
        };
    }

    handleMessageChange(event, lang) {
        this.setState({ 
            message: {
                ...this.state.message,
                [lang]: {
                    lang: lang,
                    text: event.target.value
                }
            }
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
            <Card className="mb-4">
                <Form
                    className="p-4"
                    id="form"
                    onSubmit={e => this.handleSubmit(e)}>
                    <Row className="mb-3">
                        <Col md={1}>
                            <FormLabel>
                                <Image src={enIcon} width="24px" />
                            </FormLabel>
                        </Col>
                        <Col md={11}>
                            <InputGroup>
                                <FormControl
                                    name="message"
                                    type="text"
                                    value={this.state.message.en.text}
                                    onChange={e => this.handleMessageChange(e, 'en')} />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={1}>
                            <FormLabel>
                                <Image src={czIcon} width="24x" />
                            </FormLabel>
                        </Col>
                        <Col md={11}>
                            <InputGroup>
                                <FormControl
                                    name="message"
                                    type="text"
                                    value={this.state.message.cs.text}
                                    onChange={e => this.handleMessageChange(e, 'cs')} />
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
        );
    }
}

NotificationPanel.propTypes = {
    message: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { message, active } = state.notifications.global;

    return { message, active };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ updateGlobalNotification, fetchGlobalNotification }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPanel);