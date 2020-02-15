import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Row, Col } from 'react-bootstrap';

import profileIcon from '../../images/profile.png'; 
import { Translate } from 'react-localize-redux';
import AchievementStats from './AchievementStats';

const ProfilePanel = ({profile}) => (
    <Card className="p-3" border="none">
        <h5><Image src={profileIcon} width="32px" className="mr-2" />{profile.name}</h5>
        <Row>
            <Col md={4} xs={12}>
                <Row>
                    <Col><b><Translate id="profile.score" />: </b></Col>
                    <Col>{profile.ranking}</Col>
                </Row>
                <Row>
                    <Col><b><Translate id="profile.numGames" />: </b></Col>
                    <Col>{profile.numGames}</Col>
                </Row>
                <Row>
                    <Col><b><Translate id="profile.accountType" />: </b></Col>
                    <Col>
                        { profile.premiumType ? 
                            <Translate id={"basic." + profile.premiumType} />
                            : <Translate id="profile.basic" />
                        }
                    </Col>
                </Row>
            </Col>
            <Col md={4} xs={12}>
                <Row>
                    <Col><b><Translate id="profile.achievements" />: </b></Col>
                    <Col><AchievementStats stats={profile.achievementStats} /></Col>
                </Row>
            </Col>
        </Row>
    </Card>
);

ProfilePanel.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfilePanel;