import React from 'react';
import PropTypes from 'prop-types';
import { GameIcon } from '../shared/GameIcon';
import { ACH_COMMON, SMALL, ACH_RARE, ACH_EPIC } from '../../constants/constants';
import { Row, Col } from 'react-bootstrap';

const AchievementStats = ({stats}) => (
    <Row>
        <Col>
        { stats.COMMON > 0 &&
            <li className="list-inline-item"><GameIcon type={ACH_COMMON} size={SMALL} value={stats.COMMON} noPadding /></li>
        }
        { stats.RARE > 0 &&
            <li className="list-inline-item"><GameIcon type={ACH_RARE} size={SMALL} value={stats.RARE} noPadding /></li>
        }
        { stats.EPIC > 0 &&
            <li className="list-inline-item"><GameIcon type={ACH_EPIC} size={SMALL} value={stats.EPIC} noPadding /></li>
        }
        </Col>
    </Row>
);

AchievementStats.propTypes = {
    stats: PropTypes.object.isRequired
};

export default AchievementStats;