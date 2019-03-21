import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BootstrapTable from 'react-bootstrap-table-next';
import { Translate } from "react-localize-redux";

import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';

import { fetchClans } from '../actions/clanActions';

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        hidden: true
    }, {
        dataField: 'name',
        text: <Translate id="basic.clan" />
    }, {
        dataField: 'fame',
        text: <Translate id="basic.fame" />
    }
];

class FamePage extends Component {

    componentDidMount() {
        this.props.fetchClans(0);
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
                        <BootstrapTable 
                            keyField="id"
                            bordered={false}
                            data={this.props.clansPage.content}
                            columns={columns} />
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
    clansPage: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, clansPage } = state.clan;


    return { fetching, fetched, failed, error, clansPage };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClans }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FamePage);