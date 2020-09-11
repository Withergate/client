import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Table } from 'react-bootstrap';

import { Error } from '../shared/Error';
import { Paginator } from '../shared/Paginator';
import spinner from '../../images/spinner.gif';

import { fetchProfileResults } from '../../actions/profileActions';
import { dismissError } from '../../actions/uiActions';
import { GameIcon } from '../shared/GameIcon';
import { FAME, LARGE } from '../../constants/constants';

class ProfileResultsLadder extends Component {

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchProfileResults(this.props.results.number);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && this.props.results.content.length < 1 && <Translate id="profile.noHistory" />
                }
                {
                    this.props.fetched && this.props.results.content.length > 0 &&
                    <div>
                        <Paginator
                            number={this.props.results.number}
                            max={this.props.results.totalPages - 1}
                            min={0}
                            onNext={this.props.fetchProfileResults}
                            onPrevious={this.props.fetchProfileResults}>
                            <Translate id="labels.page" /> {this.props.results.number + 1}
                        </Paginator>
                        <Table className="mt-4" striped borderless hover responsive>
                            <thead>
                                <tr>
                                    <th><Translate id="profile.place" /></th>
                                    <th><Translate id="basic.clan" /></th>
                                    <th className="centered"><GameIcon type={FAME} size={LARGE} /></th>
                                    <th><Translate id="profile.gameEnded" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.results.content.map(result =>
                                    <tr key={result.id}>
                                        <td>{result.place} / {result.numClans}</td>
                                        <td>{result.clanName}</td>
                                        <td className="centered">{result.fame}</td>
                                        <td >{result.gameEnded}</td>
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
                    this.props.failed && <Error error={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        );
    }
}

ProfileResultsLadder.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.object,
    results: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error } = state.profile.results;
    const results = state.profile.results.data;

    return { fetching, fetched, failed, error, results };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchProfileResults, dismissError }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileResultsLadder);