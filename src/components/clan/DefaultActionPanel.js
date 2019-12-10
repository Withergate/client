import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import { changeDefaultAction } from '../../actions/actionActions';
import { REST, EXPLORE_NEIGHBORHOOD } from '../../constants/constants';

class DefaultActionPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            defaultAction: props.clan.defaultAction,
            preferDisaster: props.clan.preferDisaster,
        };

        this.handleActionChange.bind(this);
        this.handleDisasterChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.changeDefaultAction(this.state.defaultAction, this.state.preferDisaster);
    }

    handleActionChange(event) {
        this.setState({ 
            defaultAction: event.target.value
        });
    }

    handleDisasterChange(event) {
        this.setState({ 
            preferDisaster: event.target.value
        })
    }

    render() {
        return <Card className="mt-4">
            <Card.Body>
                <Row>
                    <Col>
                        <Translate id="labels.defaultAction" />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={4}>
                        <Translate>
                            {({ translate }) =>
                                <Form.Control as="select" value={this.state.defaultAction} onChange={e => this.handleActionChange(e)}>
                                    <option value ={EXPLORE_NEIGHBORHOOD}>{translate(EXPLORE_NEIGHBORHOOD)}</option>
                                    <option value={REST}>{translate(REST)}</option>
                                </Form.Control>
                            }
                        </Translate>
                    </Col>
                    <Col md={8} className="mt-2">
                        <Translate id="defaultAction.actionDescription" />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col md={4}>
                        <Translate>
                            {({ translate }) =>
                                <Form.Control as="select" value={this.state.preferDisaster} onChange={e => this.handleDisasterChange(e)}>
                                    <option value ={true}>{translate("defaultAction.preferDisasterYes")}</option>
                                    <option value={false}>{translate("defaultAction.preferDisasterNo")}</option>
                                </Form.Control>
                            }
                        </Translate>
                    </Col>
                    <Col md={8} className="mt-2">
                        <Translate id="defaultAction.disasterDescription" />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant="dark"
                    checked={this.preferDisaster}
                    onClick={() => this.handleSubmit()} >
                    <Translate id="labels.save" />
                </Button>
            </Card.Footer>
        </Card>
    }
}

DefaultActionPanel.propTypes = {
    clan: PropTypes.object.isRequired,
    changeDefaultAction: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const clan = state.clan.clan;
   
    return {clan };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        changeDefaultAction
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DefaultActionPanel);