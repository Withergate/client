import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Row, Col, Button, FormControl, InputGroup, Image, Card } from 'react-bootstrap';

import junk from '../../images/junk.png';
import food from '../../images/food.png';

class ResourceTradePanel extends React.Component {
    constructor(props) {
        super(props);
        
        this.foodInput = React.createRef();
        this.junkInput = React.createRef();
    }

    render() {
        return <Card>
            <Card.Body>
                <Card.Title>
                    <Translate id="labels.resourceTrade" />
                </Card.Title>
                <Row>
                    <Col md={2}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="junk-trade"><Image className="mr-1" height="20" src={junk} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                ref={this.junkInput}
                                type="number"
                                min={0}
                                max={10}
                                placeholder={0}
                                aria-describedby="junk-trade"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={2}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="food-trade"><Image className="mr-1" height="20" src={food} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                ref={this.foodInput}
                                type="number"
                                min={0}
                                max={10}
                                placeholder={0}
                                aria-describedby="food-trade"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                { this.props.selectedCharacter !== undefined ? 
                    <div>
                        <Button
                            variant="dark"
                            className="mr-2 button-classic" 
                            onClick={() => this.props.onTrade(this.props.selectedCharacter.id, this.foodInput.current.value, this.junkInput.current.value, "BUY")}
                            disabled={this.props.selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.buy" />
                        </Button>
                        <Button
                            variant="dark"
                            className="button-classic" 
                            onClick={() => this.props.onTrade(this.props.selectedCharacter.id, this.foodInput.current.value, this.junkInput.current.value, "SELL")}
                            disabled={this.props.selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.sell" />
                        </Button>
                    </div>
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