import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import { changeProfileSettings } from '../../actions/profileActions';

class ProfileSettingsPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            help: props.profile.help
        };

        this.handleHelpChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.changeProfileSettings(this.state.help);
    }

    handleHelpChange(event) {
        this.setState({ 
            help: event.target.value
        });
    }

    render() {
        return <Card className="mt-4">
            <Card.Body>
                <Card.Title>
                    <Translate id="profile.settings" />
                </Card.Title>
                <Row className="mt-2">
                    <Col md={6}>
                        <Translate>
                            {({ translate }) =>
                                <Form.Control as="select" value={this.state.help} onChange={e => this.handleHelpChange(e)}>
                                    <option value ={true}>{translate("profile.helpYes")}</option>
                                    <option value={false}>{translate("profile.helpNo")}</option>
                                </Form.Control>
                            }
                        </Translate>
                    </Col>
                    <Col md={6} className="mt-2">
                        <Translate id="profile.helpDescription" />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Button
                    className="button-classic"
                    variant="dark"
                    checked={this.preferDisaster}
                    onClick={() => this.handleSubmit()} >
                    <Translate id="labels.save" />
                </Button>
            </Card.Footer>
        </Card>
    }
}

ProfileSettingsPanel.propTypes = {
    profile: PropTypes.object.isRequired,
    changeProfileSettings: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const profile = state.profile.profile.data;
   
    return { profile };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        changeProfileSettings
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsPanel);