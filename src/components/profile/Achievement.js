import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image, Badge } from 'react-bootstrap';

import { getTranslatedText } from '../../translations/translationUtils';
import { Translate } from 'react-localize-redux';
import ReactTooltip from 'react-tooltip';
import { isToday } from '../../services/timeUtils';
import { SMALL } from '../../constants/constants';

const Achievement = ({achievement, size, badge}) => (
    <div data-tip data-for={achievement.details.identifier} >
        <Image src={achievement.details.imageUrl} width={size === SMALL ? "40px" : "80px"} />
        { isToday(achievement.date) && badge && <Badge variant="danger" className="corner-align"><Translate id="labels.new" /></Badge> }                
        <ReactTooltip id={achievement.details.identifier} effect="solid" className="tooltip-multiline">
            <Row><Col><b>{getTranslatedText(achievement.details.name)}</b></Col></Row>
            <Row><Col>{getTranslatedText(achievement.details.description)}</Col></Row>
        </ReactTooltip>
    </div>
);

Achievement.propTypes = {
    achievement: PropTypes.object.isRequired,
    size: PropTypes.string,
    badge: PropTypes.bool
};

export default Achievement;