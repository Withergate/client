import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Row, Col } from 'react-bootstrap';
import { orderBy } from "lodash";
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';
import { Translate } from 'react-localize-redux';

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
                    <Col md={2} xs={4} key={achievement.id} data-tip data-for={achievement.details.identifier} >
                        <Image src={achievement.details.imageUrl} width="80px" />
                        <ReactTooltip id={achievement.details.identifier} effect="solid" className="tooltip-multiline">
                            <Row><Col><b>{getTranslatedText(achievement.details.name)}</b></Col></Row>
                            <Row><Col>{getTranslatedText(achievement.details.description)}</Col></Row>
                        </ReactTooltip>
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