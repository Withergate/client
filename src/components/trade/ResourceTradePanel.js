import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Row, Col, Button, FormControl, InputGroup } from 'react-bootstrap';

import junk from '../../images/junk.png';
import food from '../../images/food.png';

class ResourceTradePanel extends React.Component {
    constructor(props) {
        super(props);
        
        this.foodInput = React.createRef();
        this.junkInput = React.createRef();
    }

    render() {
        return <div className="p-3 rounded bg-light">
            <Row>
                <h4 className="ml-3"><Translate id="labels.resourceTrade" /></h4>
            </Row>
            <Row>
                <Col md={2}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="junk-trade"><img className="mr-1" height="20" src={junk} alt="" /></InputGroup.Text>
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
                            <InputGroup.Text id="food-trade"><img className="mr-1" height="20" src={food} alt="" /></InputGroup.Text>
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
            <Row className="ml-1">
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
            </Row>
        </div>
    }
};

ResourceTradePanel.propTypes = {
    selectedCharacter: PropTypes.object,
    onTrade: PropTypes.func.isRequired
};

export default ResourceTradePanel;