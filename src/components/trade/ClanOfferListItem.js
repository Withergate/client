import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image, Form, InputGroup, FormControl } from 'react-bootstrap';
import TooltipWrapper from '../shared/TooltipWrapper';

import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE } from '../../constants/constants';
import capsIcon from '../../images/caps.png';
import { getRarityTextColor } from '../item/itemUtils';

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
                <Card.Title className={getRarityTextColor(this.props.offer.details.rarity)}>
                    {getTranslatedText(this.props.offer.details.name)}
                </Card.Title>
                <Row>
                    <Col md={4}>
                        <Image rounded src={this.props.offer.details.imageUrl} width="120px" />
                    </Col>
                    <Col md={8}>
                        <p>{getTranslatedText(this.props.offer.details.description)} </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <TooltipWrapper textKey="labels.marketPrice"><b><Translate id="labels.trade.price" />: </b></TooltipWrapper>
                            </li>
                            <li className="list-inline-item">
                                <GameIcon type={CAPS} size={LARGE} value={this.props.offer.details.price} />
                            </li>
                        </ul>    
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
                            <TooltipWrapper textKey="labels.offerTooltip">
                                <Button
                                    variant="outline-success"
                                    className="button-classic"
                                    type="submit" >
                                    <Translate id="labels.offer" />
                                </Button>
                            </TooltipWrapper>
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