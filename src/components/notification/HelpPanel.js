import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Button } from 'react-bootstrap';

import { displayHelp } from '../../actions/uiActions';
import { getTips } from './helpTips';

class HelpPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            tips: getTips(props.clan, props.turn, props.disaster)
        };
    }

    render() {
        return (
            this.props.helpDisplayed && this.props.profile.help && this.state.tips.length > 0 &&
            <Card className="mb-4" border="primary">
                <Card.Body>
                    <Card.Title>
                        <Translate id="help.header" />
                    </Card.Title>
                    <ul>
                        {
                            this.state.tips.map(tip => <li key={tip}><Translate id={tip} /></li>)
                        }
                    </ul>
                    <p><small><Translate id="help.settings" /></small></p>
                </Card.Body>
                <Card.Footer>
                    <Button
                        className="button-classic"
                        variant="outline-primary"
                        onClick={() => this.props.displayHelp(false)} >
                        <Translate id="labels.closeDetails" />
                    </Button>
                </Card.Footer>
            </Card>
        )
    }
}
HelpPanel.propTypes = {
    helpDisplayed: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired,
    displayHelp: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const profile = state.profile.profile.data;
    const helpDisplayed = state.ui.helpDisplayed;
    const turn = state.turn.turn.turnId;
    const clan = state.clan.clan;
    const disaster = state.data.disaster.data;
   
    return { profile, helpDisplayed, turn, clan, disaster };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        displayHelp
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HelpPanel);