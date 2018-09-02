import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WeaponList from './item/WeaponList';
import { Error } from './shared/Error';

import { fetchClan, equipWeapon } from '../actions/clanActions';

class ItemsPage extends Component {

    componentDidMount() {
        this.props.fetchClan();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <div>
                        <WeaponList 
                            weapons={this.props.clan.weapons}
                            equipWeapon={this.props.equipWeapon}
                            selectedCharacter={this.props.selectedCharacter} />
                    </div>
                }
                {
                    this.props.fetching && <div>Loading...</div>
                }
                {
                    this.props.failed && <Error message={this.props.error} />
                }
            </div>
        );
    }
}

ItemsPage.propTypes = {
    fetchClan: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    clan: PropTypes.object.isRequired,
    equipWeapon: PropTypes.func.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error, clan, selectedCharacter } = state.clan;

    return { fetching, fetched, failed, error, clan, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClan, equipWeapon }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);