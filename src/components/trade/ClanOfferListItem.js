import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

import { getTranslatedText } from '../../translations/translationUtils';
import { Row, Button, Card, Col, Image, Form, InputGroup, FormControl } from 'react-bootstrap';
import TooltipWrapper from '../shared/TooltipWrapper';

import { checkPremium } from '../profile/premiumUtils';
import { GameIcon } from '../shared/GameIcon';
import { CAPS, LARGE, GOLD, SMALL } from '../../constants/constants';
import { getRarityTextColor } from '../item/itemUtils';
import ItemDetails from '../item/ItemDetails';
import { InfoIcon } from '../shared/InfoIcon';

class ClanOfferListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            validated: false,
            caps: this.props.offer.details.price,
            intelligent: false
        };

        this.handleCapsChange.bind(this);
        this.handleIntelligentChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleCapsChange(event) {
        this.setState({ 
           caps: parseInt(event.target.value)
        });
    }
    handleIntelligentChange(event) {
        console.log(event.target.checked)
        this.setState({ 
           intelligent:event.target.checked
        });
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          this.setState({ validated: true });
        } else {
            this.props.publishOffer(this.props.offer.itemId, this.props.offer.details.itemType, this.state.caps, this.state.intelligent)
        }
      }

    render() {
        return<Card className="mb-4">
            <Card.Body>
                <Card.Title className={getRarityTextColor(this.props.offer.details.rarity)}>
                    {getTranslatedText(this.props.offer.details.name)}
                </Card.Title>
                <Row>
                    <Col md={4} className="mb-2">
                        <Image rounded src={this.props.offer.details.imageUrl} className="w-100" />
                    </Col>
                    <Col md={8}>
                        <p>{getTranslatedText(this.props.offer.details.description)} </p>
                        <ItemDetails details={this.props.offer.details} />
                        <ul className="list-inline mt-2">
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
                        <Col md={8} className="mb-2">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="caps-trade"><GameIcon type={CAPS} size={SMALL} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    name="caps"
                                    type="number"
                                    min={this.props.offer.details.price}
                                    max={this.props.offer.details.price * 2}
                                    value={this.state.caps}
                                    aria-describedby="caps-trade"
                                    onChange={e => this.handleCapsChange(e)}
                                />
                                { checkPremium(this.props.profile.premiumType, GOLD) && 
                                <>
                                    <InputGroup.Text className="ml-2">
                                        <GameIcon type={GOLD} size={SMALL} />
                                        <InfoIcon textKey="labels.offerSmartTooltip" />
                                    </InputGroup.Text>
                                    <FormControl
                                        name="intelligent"
                                        type="checkbox"
                                        checked={this.state.intelligent}
                                        aria-describedby="intelligent"
                                        onChange={e => this.handleIntelligentChange(e)}
                                    />
                                </>
                                }
                                <Form.Control.Feedback type="invalid">
                                    <Translate id="labels.invalidPrice" />
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Col>
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
                    </Row>
                </Form>
            </Card.Footer>
        </Card>
    }
};

ClanOfferListItem.propTypes = {
    offer: PropTypes.object.isRequired,
    publishOffer: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

export default ClanOfferListItem;