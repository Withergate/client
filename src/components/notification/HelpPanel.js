import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Button } from 'react-bootstrap';

import { displayHelp } from '../../actions/uiActions';

class HelpPanel extends React.Component {
    render() {
        return (
            this.props.helpDisplayed && this.props.profile.help &&
            <Card className="mb-4" border="primary">
                <Card.Body>
                    <Card.Title>
                        <Translate id="help.header" />
                    </Card.Title>
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
    helpDisplayed: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    displayHelp: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const profile = state.profile.profile.data;
    const helpDisplayed = state.ui.helpDisplayed;
   
    return { profile, helpDisplayed };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        displayHelp
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HelpPanel);