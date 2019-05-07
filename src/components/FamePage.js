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

class FamePage extends Component {

    componentDidMount() {
        this.props.fetchClans(this.props.clans.number);
    }

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error message={this.props.error} />
                }
                {
                    this.props.fetched && 
                    <div className="m-4">
                        <h5><Translate id="labels.page" /> {this.props.clans.number + 1}</h5>
                        <Paginator
                            number={this.props.clans.number}
                            max={this.props.clans.totalPages - 1}
                            min={0}
                            onNext={this.props.fetchClans}
                            onPrevious={this.props.fetchClans} />
                        <Table className="mt-4" striped bordered hover>
                            <thead>
                                <tr>
                                    <th><Translate id="basic.clan" /></th>
                                    <th><Translate id="basic.fame" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.clans.content.map(clan =>
                                    <tr key={clan.id}>
                                        <td>{clan.name}</td>
                                        <td>{clan.fame}</td>
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
            </div>
        );
    }
}

FamePage.propTypes = {
    fetchClans: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    clans: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, clans } = state.data;


    return { fetching, fetched, failed, error, clans };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClans }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FamePage);