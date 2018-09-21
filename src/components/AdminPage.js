import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Error } from './shared/Error';
import spinner from '../images/spinner.gif';

class AdminPage extends Component {

    render() {
        return (
            <div>
                {
                    this.props.failed && <Error message={this.props.error} />
                }
                {
                    this.props.principal.role !== 'ADMIN' && <Error message="Only administrators can access this page!" />
                }
                {
                    this.props.principal.role === 'ADMIN' && this.props.fetched && 
                    <div className="m-4">
                        Admin dashboard
                    </div>
                    
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        );
    }
}

AdminPage.propTypes = {
    principal: PropTypes.object.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, principal } = state.auth;


    return { fetching, fetched, failed, error, principal };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);