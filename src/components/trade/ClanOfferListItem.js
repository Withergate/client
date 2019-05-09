import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image, Form, InputGroup, FormControl } from 'react-bootstrap';

import capsIcon from '../../images/caps.png';

class ClanOfferListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            validated: false,
            caps: this.props.offer.details.price
        };

        this.handleCapsChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleCapsChange(event) {
        this.setState({ 
           caps: parseInt(event.target.value)
        });
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          this.setState({ validated: true });
        } else {
            this.props.publishOffer(this.props.offer.itemId, this.props.offer.details.itemType, this.state.caps)
        }
      }

    render() {
        return<Card className="mb-4">
            <Card.Body>
                <Card.Title>
                    {getTranslatedText(this.props.offer.details.name)}
                </Card.Title>
                <Row>
                    <Col md={4}>
                        <Image rounded src={this.props.offer.details.imageUrl} width="120px" />
                    </Col>
                    <Col md={8}>
                        <p>{getTranslatedText(this.props.offer.details.description)} </p>
                        <b><Translate id="labels.trade.price" />: </b> {this.props.offer.details.price} <Image height="20" src={capsIcon} />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Form 
                    noValidate
                    validated={this.state.validated}
                    onSubmit={e => this.handleSubmit(e)} >
                    <Row>
                        <Col md={4}>
                            <Button
                                variant="outline-dark"
                                className="button-classic"
                                type="submit" >
                                <Translate id="labels.offer" />
                            </Button>
                        </Col>
                        <Col md={8}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="caps-trade"><Image className="mr-1" height="20" src={capsIcon} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="caps"
                                    type="number"
                                    min={this.props.offer.details.price}
                                    value={this.state.caps}
                                    aria-describedby="caps-trade"
                                    onChange={e => this.handleCapsChange(e)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    <Translate id="labels.invalidPrice" />
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </Card.Footer>
        </Card>
    }
};

ClanOfferListItem.propTypes = {
    offer: PropTypes.object.isRequired,
    publishOffer: PropTypes.func.isRequired
};

export default ClanOfferListItem;