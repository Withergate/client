import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import { orderBy } from "lodash";

import { Translate } from 'react-localize-redux';
import Achievement from './Achievement';

const sort = (list) => {
    return orderBy(list, ['date'], ['desc']);
}

const AchievementsPanel = ({achievements}) => (
    <Card className="p-3 mb-4" border="none">
        <h5><Translate id="profile.achievementsUnlocked" /></h5>
        <Row>
            { achievements.length < 1 && <Col><Translate id="profile.noAchievements" /></Col> }
            {
                sort(achievements).map(achievement =>
                    <Col md={2} xs={4} key={achievement.id}>
                        <Achievement achievement={achievement} badge />
                    </Col>
                )
            }
        </Row>
    </Card>
);

AchievementsPanel.propTypes = {
    achievements: PropTypes.array.isRequired
};

export default AchievementsPanel;