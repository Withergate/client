import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchDisaster } from '../../actions/dataActions';
import { handleDisaster } from '../../actions/actionActions';

import spinner from '../../images/spinner.gif';
import { Translate } from 'react-localize-redux';
import DisasterInfo from './DisasterInfo';
import DisasterSolution from './DisasterSolution';

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
                        <DisasterInfo
                            disaster={this.props.disaster}
                            progress={this.props.progress}
                            partialThreshold={this.props.partialThreshold}
                            failureThreshold={this.props.failureThreshold}
                        />

                        { this.props.progress < 100 && 
                            <div>
                                <h5><Translate id="labels.disasterAction" /></h5>
                                <p><Translate id="labels.disasterActionText" /></p>
                                {
                                    this.props.disaster.details.solutions.map(solution =>
                                        <DisasterSolution
                                            key={solution.identifier}
                                            solution={solution} 
                                            selectedCharacter={this.props.selectedCharacter}
                                            disasterAction={this.props.handleDisaster} />
                                    )
                                }
                            </div>
                        }
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
    progress: PropTypes.number.isRequired,
    selectedCharacter: PropTypes.object
};

const mapStateToProps = state => {
    const { selectedCharacter } = state.clan;
    const progress = state.clan.clan.disasterProgress;
    const disaster = state.data.disaster.data;

    const fetching = state.data.disaster.fetching;
    const fetched = state.data.disaster.fetched;
    const failed = state.data.disaster.failed;

    const partialThreshold = state.game.properties.disasterPartialSuccessThreshold;
    const failureThreshold = state.game.properties.disasterFailureThreshold;

    return { fetching, fetched, failed, disaster, selectedCharacter, progress, partialThreshold, failureThreshold };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchDisaster,
        handleDisaster
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DisasterPanel);