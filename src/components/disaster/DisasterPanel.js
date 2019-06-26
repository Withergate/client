import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDisaster } from '../../actions/dataActions';
import { dismissError } from '../../actions/uiActions';

import spinner from '../../images/spinner.gif';
import { Translate } from 'react-localize-redux';
import DisasterInfo from './DisasterInfo';

class DisasterPanel extends React.Component {
    componentDidMount() {
        this.props.fetchDisaster();
    }

    render() {
        return ( 
            <div>
                {
                    this.props.fetched && !this.props.disaster &&
                    <Translate id="labels.noDisaster" />
                }
                { this.props.fetched && this.props.disaster &&
                    <div>
                        <DisasterInfo disaster={this.props.disaster} />
                    </div>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        )
    }
};

DisasterPanel.propTypes = {
    disaster: PropTypes.object,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { selectedCharacter } = state.clan;
    const disaster = state.data.disaster.data;

    const fetching = state.data.disaster.fetching;
    const fetched = state.data.disaster.fetched;
    const failed = state.data.disaster.failed;

    return { fetching, fetched, failed, disaster, selectedCharacter };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchDisaster,
        dismissError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DisasterPanel);