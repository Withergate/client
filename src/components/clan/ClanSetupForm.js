import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, InputGroup, FormControl, FormLabel, Row, Col } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

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
            <Form className="p-4" onSubmit={this.handleSubmit}>
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
                <Button className="btn btn-dark" type="submit">
                    <Translate id="clanSetup.button" />
                </Button>
            </Form>
        );
    }
}

ClanSetupForm.propTypes = {
    createClan: PropTypes.func.isRequired
};

export default ClanSetupForm;