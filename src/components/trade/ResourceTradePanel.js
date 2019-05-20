import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { 
    Button,
    FormControl,
    InputGroup,
    Image,
    Card,
    Form,
    Row,
    Col,
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap';

import junk from '../../images/junk.png';
import food from '../../images/food.png';
import caps from '../../images/caps.png';

class ResourceTradePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            validated: false,
            caps: 0,
            junk: 0,
            food: 0,
            trade: "BUY"
        };

        this.handleResourceChange.bind(this);
        this.handleTradeChange.bind(this);
        this.updateCaps.bind(this);
        this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
        this.setState({ validated: true });
      } else {
        this.props.onTrade(this.props.selectedCharacter.id, this.state.food, this.state.junk, this.state.trade);
        this.setState({ 
            validated: false,
            caps: 0
        });
      }
    }

    handleResourceChange(event) {
        this.setState({ 
            [event.target.name]: parseInt(event.target.value)
        }, ()=> this.updateCaps());
    }

    handleTradeChange(event) {
        this.setState({ 
            trade: event
        }, ()=> this.updateCaps());
    }

    updateCaps() {
        var capsInfo = 0;
        const junk = parseInt(this.state.junk);
        const food = parseInt(this.state.food);
        if (this.state.trade === "BUY") {
            capsInfo = (junk + food) * 2;
        } else if (this.state.trade === "SELL") {
            capsInfo = junk + food;
        };

        this.setState({ 
            caps: capsInfo
        });
    }

    render() {
        return <Card>
            <Card.Body>
                <Card.Title>
                    <Translate id="labels.resourceTrade" />
                </Card.Title>
                <Form 
                    id="resourceForm"
                    noValidate
                    validated={this.state.validated}
                    onSubmit={e => this.handleSubmit(e)} >
                    <Row>
                        <Col md={3}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="junk-trade"><Image className="mr-1" height="20" src={junk} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="junk"
                                    type="number"
                                    min={0}
                                    max={20 - this.state.food}
                                    value={this.state.junk}
                                    aria-describedby="junk-trade"
                                    onChange={e => this.handleResourceChange(e)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    <Translate id="labels.resourceLimitExceeded" />
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col md={3}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="food-trade"><Image className="mr-1" height="20" src={food} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="food"
                                    ref={this.foodInput}
                                    type="number"
                                    min={0}
                                    max={20 - this.state.junk}
                                    value={this.state.food}
                                    aria-describedby="food-trade"
                                    onChange={e => this.handleResourceChange(e)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    <Translate id="labels.resourceLimitExceeded" />
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                        <Col md={3}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="caps-trade"><Image className="mr-1" height="20" src={caps} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="number"
                                    disabled
                                    value={this.state.caps}
                                    aria-describedby="caps-trade"
                                />
                            </InputGroup>
                        </Col>
                        <Col md={3}>
                            <ToggleButtonGroup type="radio" name="trade" defaultValue={this.state.trade} onChange={e => this.handleTradeChange(e)}>
                                <ToggleButton variant="outline-dark" value="BUY"><Translate id="labels.buy" /></ToggleButton>
                                <ToggleButton variant="outline-dark" value="SELL"><Translate id="labels.sell" /></ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
            <Card.Footer>
                { this.props.selectedCharacter !== undefined ? 
                    <Button
                        form="resourceForm"
                        type="submit"
                        variant="dark"
                        className="mr-2 button-classic" 
                        disabled={this.props.selectedCharacter.state !== 'READY'}>
                        <Translate id="labels.trade" />
                    </Button>
                    : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </Card.Footer>
        </Card>
    }
};

ResourceTradePanel.propTypes = {
    selectedCharacter: PropTypes.object,
    onTrade: PropTypes.func.isRequired
};

export default ResourceTradePanel;