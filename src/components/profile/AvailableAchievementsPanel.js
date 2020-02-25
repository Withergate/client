import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Row, Col, Card, Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

import { getTranslatedText } from '../../translations/translationUtils';
import { fetchAchievements } from '../../actions/profileActions';
import spinner from '../../images/spinner.gif';
import { GameIcon } from '../shared/GameIcon';
import { SILVER, LARGE } from '../../constants/constants';

class AvailableAchievementsPanel extends React.Component {
    componentDidMount() {
        this.props.fetchAchievements();
    }

    render() {
        return ( 
            <div>
                { this.props.fetched &&
                    <Card className="p-3" border="none">
                        <h5 className="inline">
                            <GameIcon type={SILVER} size={LARGE} noPadding /><Translate id="profile.achievementsAvailable" />
                        </h5>
                        <Row>
                            { this.props.achievements.length < 1 && <Col><Translate id="profile.noAchievements" /></Col> }
                            {
                                this.props.achievements.map(achievement =>
                                    <Col md={2} xs={4} key={achievement.identifier} data-tip data-for={achievement.identifier} >
                                        <Image src={achievement.imageUrl} width="80px" className="image-faded" />
                                        <ReactTooltip id={achievement.identifier} effect="solid" className="tooltip-multiline">
                                            <Row><Col><b>{getTranslatedText(achievement.name)}</b></Col></Row>
                                            <Row><Col>{getTranslatedText(achievement.description)}</Col></Row>
                                        </ReactTooltip>
                                    </Col>
                                )
                            }
                        </Row>
                    </Card>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        )
    }
};

AvailableAchievementsPanel.propTypes = {
    achievements: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const achievements = state.profile.achievements.data;

    const { fetching, fetched, failed, error } = state.profile.achievements;

    return { fetching, fetched, failed, error, achievements };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchAchievements
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AvailableAchievementsPanel);