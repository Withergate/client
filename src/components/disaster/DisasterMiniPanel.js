import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'react-bootstrap';

import { getTranslatedText } from '../../translations/translationUtils';
import { fetchDisaster } from '../../actions/dataActions';

import spinner from '../../images/spinner.gif';
import { Translate } from 'react-localize-redux';

class DisasterMiniPanel extends React.Component {
    componentDidMount() {
        this.props.fetchDisaster();
    }

    render() {
        return ( 
            <div>
                { this.props.fetched && this.props.disaster && this.props.progress < 100 &&
                    <Card className="m-3 p-1" border="warning">
                        <Card.Body>
                            <Translate id="disaster.disasterInfo" data={{ name: getTranslatedText(this.props.disaster.details.name), 
                                turn: this.props.disaster.turn }}/>
                        </Card.Body>
                    </Card>
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
            </div>
        )
    }
};

DisasterMiniPanel.propTypes = {
    disaster: PropTypes.object,
    progress: PropTypes.number
};

const mapStateToProps = state => {
    const progress = state.clan.clan.disasterProgress;
    const disaster = state.data.disaster.data;

    const fetching = state.data.disaster.fetching;
    const fetched = state.data.disaster.fetched;
    const failed = state.data.disaster.failed;

    return { fetching, fetched, failed, disaster, progress };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        fetchDisaster,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DisasterMiniPanel);