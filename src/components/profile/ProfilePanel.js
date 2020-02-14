import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Row, Col } from 'react-bootstrap';

import profileIcon from '../../images/profile.png'; 
import { Translate } from 'react-localize-redux';

const ProfilePanel = ({profile}) => (
    <Card className="p-3" border="none">
        <h5><Image src={profileIcon} width="32px" className="mr-2" />{profile.name}</h5>
        <Row>
            <Col md={2} xs={6}><b><Translate id="profile.score" />: </b></Col>
            <Col md={2} xs={6}>{profile.ranking}</Col>
        </Row>
        <Row>
            <Col md={2} xs={6}><b><Translate id="profile.numGames" />: </b></Col>
            <Col md={2} xs={6}>{profile.numGames}</Col>
        </Row>
        <Row>
            <Col md={2} xs={6}><b><Translate id="profile.accountType" />: </b></Col>
            <Col md={2} xs={6}>
                { profile.premiumType ? 
                    <Translate id={"basic." + profile.premiumType} />
                    : <Translate id="profile.basic" />
                }
            </Col>
        </Row>
    </Card>
);

ProfilePanel.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfilePanel;