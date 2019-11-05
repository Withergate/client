import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Table } from 'react-bootstrap';

import { Error } from './shared/Error';
import { Paginator } from './shared/Paginator';
import spinner from '../images/spinner.gif';

import { fetchClans } from '../actions/dataActions';
import { dismissError } from '../actions/uiActions';

// get formatted date time
const getFormattedTime = (datetime) => {
    return datetime.replace('T', ' ').substring(0, 16);
}

class FamePage extends Component {

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchClans(this.props.clans.number);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <div className="m-4">
                        <Paginator
                            number={this.props.clans.number}
                            max={this.props.clans.totalPages - 1}
                            min={0}
                            onNext={this.props.fetchClans}
                            onPrevious={this.props.fetchClans}>
                            <Translate id="labels.page" /> {this.props.clans.number + 1}
                        </Paginator>
                        <Table className="mt-4" striped bordered hover>
                            <thead>
                                <tr>
                                    <th><Translate id="basic.clan" /></th>
                                    <th><Translate id="basic.fame" /></th>
                                    <th><Translate id="labels.numCharacters" /></th>
                                    <th><Translate id="labels.lastActivity" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.clans.content.map(clan =>
                                    <tr key={clan.id} className={clan.id === this.props.clanId ? "text-success" : ""}>
                                        <td>{clan.name}</td>
                                        <td>{clan.fame}</td>
                                        <td>{clan.numCharacters}</td>
                                        <td>{getFormattedTime(clan.lastActivity)}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        );
    }
}

FamePage.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    clans: PropTypes.object.isRequired,
    clanId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error } = state.data.clans;
    const clans = state.data.clans.data;
    const clanId = state.clan.clan.id;

    return { fetching, fetched, failed, error, clans, clanId };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClans, dismissError }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FamePage);