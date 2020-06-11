import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { changeDefaultAction } from '../../actions/actionActions';
import { REST, EXPLORE_NEIGHBORHOOD } from '../../constants/constants';

class DefaultActionSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            defaultAction: props.character.defaultAction,
            preferDisaster: props.character.preferDisaster,
        };

        this.handleActionChange.bind(this);
        this.handleDisasterChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.changeDefaultAction(this.state.defaultAction, this.state.preferDisaster, this.props.character.id);
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
        return <div>
            <h5>
                <Translate id="labels.defaultAction" />
            </h5>
            <Row className="mt-2">
                <Col md={4}>
                    <Translate>
                        {({ translate }) =>
                            <Form.Control as="select" value={this.state.defaultAction} onChange={e => this.handleActionChange(e)}>
                                <option value ={EXPLORE_NEIGHBORHOOD}>{translate("defaultAction.explore")}</option>
                                <option value={REST}>{translate("defaultAction.rest")}</option>
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
            <Row>
                <Col>
                <Button
                    className="button-classic"
                    variant="dark"
                    checked={this.preferDisaster}
                    onClick={() => this.handleSubmit()} >
                    <Translate id="labels.save" />
                </Button>
                </Col>
            </Row>
        </div>
    }
}

DefaultActionSettings.propTypes = {
    character: PropTypes.object.isRequired,
    changeDefaultAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        changeDefaultAction
    }, dispatch)
);

export default connect(() => {}, mapDispatchToProps)(DefaultActionSettings);