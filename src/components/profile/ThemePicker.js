import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTheme } from '../../actions/profileActions';
import { Form, Card, InputGroup } from 'react-bootstrap';
import { Translate } from 'react-localize-redux';
import { LIGHT, DARK, SILVER, SMALL } from '../../constants/constants';
import { GameIcon } from '../shared/GameIcon';

class ThemePicker extends Component {
    render() {
        return (
            <Card className="p-3 mb-4">
                <p><Translate id="profile.changeTheme" /></p>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="theme"><GameIcon type={SILVER} size={SMALL} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                            as="select"
                            value={this.props.profile.theme ? this.props.profile.theme : LIGHT} 
                            onChange={e => this.props.changeTheme(e.target.value)}>
                            <option value ={LIGHT}>{LIGHT}</option>
                            <option value={DARK}>{DARK}</option>
                        </Form.Control>
                    </InputGroup>
            </Card>
        );
    }
}

ThemePicker.propTypes = {
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const profile = state.profile.profile.data;

    return { profile };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ changeTheme }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ThemePicker);