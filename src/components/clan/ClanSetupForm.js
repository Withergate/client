import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, InputGroup, FormControl, FormLabel, Row, Col, Image } from 'react-bootstrap';
import { Translate } from "react-localize-redux";
import { Error } from '../shared/Error';

import { createClan } from '../../actions/actionActions';
import { dismissError } from '../../actions/uiActions';

import spinner from '../../images/spinner.gif';

class ClanSetupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({name: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.props.createClan(this.state.name);
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
                                <InputGroup className="form-group">
                                    <Row>
                                        <Col md={5}>
                                            <FormLabel>
                                                <Translate id="clanSetup.name" />
                                            </FormLabel>
                                        </Col>
                                        <Col md={7}>
                                            <FormControl 
                                                name="clan-name"
                                                type="text"
                                                value={this.state.value}
                                                onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                </InputGroup>
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