import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormControl, FormLabel, Row, Col, Image } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import { Error } from '../shared/Error';

import { createClan } from '../../actions/actionActions';
import { dismissError } from '../../actions/uiActions';

import spinner from '../../images/spinner.gif';
import { BALANCED, ECONOMY, SMART, RANDOM } from '../../constants/constants';

class ClanSetupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            type: BALANCED
        };
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTypeChange(event) {
        this.setState({type: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.props.createClan(this.state.name, this.state.type);
    }
  
    render() {
        return (
            <div>
                {
                    this.props.error && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
                {   !this.props.fetching &&
                    <Row className="p-4">
                        <Col md={2} xs={12}>
                            <Image src="https://storage.googleapis.com/withergate-images/misc/clan.png" className="w-100" />
                        </Col>
                        <Col md={10} xs={12}>
                            <Form onSubmit={this.handleSubmit}>
                                <p>
                                    <Translate id="clanSetup.text" />
                                </p>
                                <Row className="mb-2">
                                    <Col md={2}>
                                        <FormLabel>
                                            <b><Translate id="clanSetup.name" /></b>
                                        </FormLabel>
                                    </Col>
                                        
                                    <Col md={3}>
                                        <FormControl 
                                            name="clan-name"
                                            type="text"
                                            value={this.state.value}
                                            onChange={this.handleNameChange} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={2}>
                                        <FormLabel>
                                            <b><Translate id="clanSetup.clanType" /></b>
                                        </FormLabel>
                                    </Col>
                                    <Col md={3} className="mb-2">
                                        <Translate>
                                            {({ translate }) =>
                                                <Form.Control as="select" value={this.state.typen} onChange={e => this.handleTypeChange(e)}>
                                                    <option value ={BALANCED}>{translate("clanSetup.type.BALANCED")}</option>
                                                    <option value ={ECONOMY}>{translate("clanSetup.type.ECONOMY")}</option>
                                                    <option value ={SMART}>{translate("clanSetup.type.SMART")}</option>
                                                    <option value ={RANDOM}>{translate("clanSetup.type.RANDOM")}</option>
                                                </Form.Control>
                                            }
                                        </Translate>
                                    </Col>
                                    <Col md={7} className="mb-2">
                                        <Translate id={"clanSetup.type.description".concat(this.state.type)} />
                                    </Col>
                                </Row>
                                <Button className="button-large" variant="dark" type="submit">
                                    <Translate id="clanSetup.button" />
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
            
        );
    }
}

ClanSetupForm.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { fetched, fetching, failed, error } = state.clan.clanCreation;

    return { fetching, fetched, failed, error };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        createClan,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanSetupForm);