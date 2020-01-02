import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchClanStatistics } from '../../actions/dataActions';
import { dismissError } from '../../actions/uiActions';

import { Error } from '../shared/Error';
import spinner from '../../images/spinner.gif';
import { XAxis, YAxis, Tooltip, Area, AreaChart, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Translate } from 'react-localize-redux';
import { Row, Image, Card, Col } from 'react-bootstrap';

import fameIcon from '../../images/fame.png';
import junkIcon from '../../images/junk.png';
import foodIcon from '../../images/food.png';

class ClanStatisticsPanel extends React.Component {
    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchClanStatistics();
        }
    }

    render() {
        return ( 
            <div>
                {
                    this.props.fetched && this.props.statistics.length > 2 ?
                        <div className="mt-3 mr-3">
                            <h5 className="ml-3 mt-3"><Translate id="statistics.fameTitle" /></h5>
                            <ResponsiveContainer width="100%" height={300} className="mt-4">
                            <AreaChart data={this.props.statistics} >
                                <XAxis dataKey="turnId" />
                                <YAxis />
                                <Tooltip content={renderFame} />
                                <Area type="monotone" dataKey="fame" />
                            </AreaChart>
                            </ResponsiveContainer>

                            <h5 className="ml-3 mt-3"><Translate id="statistics.resourcesTitle" /></h5>
                            <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={this.props.statistics} >
                                <XAxis dataKey="turnId" />
                                <YAxis />
                                <Tooltip content={renderFoodJunk}/>
                                <Line type="monotone" dataKey="food" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="junk" stroke="#784212" />
                            </LineChart>
                            </ResponsiveContainer>  

                            <h5 className="ml-3 mt-3"><Translate id="statistics.assetsTitle" /></h5>
                            <ResponsiveContainer width="100%" height={300} className="mt-4">
                            <LineChart data={this.props.statistics} >
                                <XAxis dataKey="turnId" />
                                <YAxis />
                                <Tooltip content={renderBuildingsResearch} />
                                <Line type="monotone" dataKey="buildings" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="research" stroke="#8884d8" />
                            </LineChart>
                            </ResponsiveContainer>
                        </div>
                    : <Translate id="statistics.noData" />
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        )
    }
};

const renderFoodJunk = (payload) => {
    return <Card border="dark">
        <Card.Body>
            <Row>
                <Col>
                    <Translate id="header.turn" />: &nbsp;
                    {payload && payload.payload[0] && payload.payload[0].payload.turnId}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Image src={foodIcon} width="24px" className="mr-2" />
                    {payload && payload.payload[0] && payload.payload[0].payload.food}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Image src={junkIcon} width="24px" className="mr-2" />
                    {payload && payload.payload[1] && payload.payload[1].payload.junk}
                </Col>
            </Row>
        </Card.Body>
    </Card>
}

const renderFame = (payload) => {
    return <Card border="dark">
        <Card.Body>
            <Row>
                <Col>
                    <Translate id="header.turn" />: &nbsp;
                    {payload && payload.payload[0] && payload.payload[0].payload.turnId}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Image src={fameIcon} width="24px" className="mr-2" />
                    {payload && payload.payload[0] && payload.payload[0].payload.fame}
                </Col>
            </Row>
        </Card.Body>
    </Card>
}

const renderBuildingsResearch = (payload) => {
    return <Card border="dark">
        <Card.Body>
            <Row>
                <Col>
                    <Translate id="header.turn" />: &nbsp;
                    {payload && payload.payload[0] && payload.payload[0].payload.turnId}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Translate id="statistics.buildings" />: &nbsp;
                    {payload && payload.payload[0] && payload.payload[0].payload.buildings}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Translate id="statistics.research" />: &nbsp;
                    {payload && payload.payload[1] && payload.payload[1].payload.research}
                </Col>
            </Row>
        </Card.Body>
    </Card>
}

ClanStatisticsPanel.propTypes = {
    statistics: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const { fetched, fetching, failed, error } = state.clan.statistics;
    const statistics = state.clan.statistics.data;

    return { fetching, fetched, failed, error, statistics };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchClanStatistics,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanStatisticsPanel);