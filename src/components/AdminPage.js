import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { restartGame, endTurn } from '../actions/authActions';

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
                        <h5>Admin dashboard</h5>
                        <div className="mb-4">
                            <p>
                                This action ends the current turn.
                            </p>
                            <button 
                                className="btn btn-dark" 
                                onClick={() => this.props.endTurn()}>
                                End turn
                            </button> 
                        </div>
                        <div>
                            <p className="text-danger">
                                This action deletes all game-related data from the database and starts the whole game over.
                            </p>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => this.props.restartGame()}>
                                Restart game
                            </button> 
                        </div>
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
    error: PropTypes.string.isRequired,
    restartGame: PropTypes.func.isRequired,
    endTurn: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, principal } = state.auth;


    return { fetching, fetched, failed, error, principal };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ restartGame, endTurn }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);