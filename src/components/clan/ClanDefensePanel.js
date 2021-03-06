import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import { Card, Image } from 'react-bootstrap';
import { SILVER } from '../../constants/constants';
import editIcon from '../../images/edit.png';
import { checkPremium } from '../profile/premiumUtils';
import { renameDefender } from '../../actions/actionActions';
import RenameDialog from '../shared/RenameDialog';
import DefenderDetail from './DefenderDetail';

class ClanDefensePanel extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { 
            renameModal: false
        };
    }

    render() {
        return (
        <Card className="mt-4">
            <Card.Body>
                <Card.Title>
                    <Translate id="labels.clanDefense" />
                </Card.Title>
                <p><Translate id="labels.clanDefenseInfo1" /></p>
                <p><Translate id="labels.clanDefenseInfo2" /></p>

                <p className="inline">
                    <b><Translate id="basic.name" />: &nbsp;</b>{this.props.defender.name}
                    { checkPremium(this.props.profile.premiumType, SILVER) &&
                        <Image src={editIcon} width="24px" onClick={() => this.setState({ renameModal: true })}/> 
                    }
                </p>

                <DefenderDetail defender={this.props.defender} />

                <RenameDialog
                    show={this.state.renameModal}
                    text="labels.defenderNameConstraints"
                    heading="labels.rename"
                    premiumType={SILVER}
                    onClose={() => this.setState({ renameModal: false })}
                    onConfirm={this.props.renameDefender}
                    placeholder={this.props.defender.name} />
            </Card.Body>
        </Card>
        )
    }
};

ClanDefensePanel.propTypes = {
    defender: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const profile = state.profile.profile.data;
    const defender = state.clan.clan.defender;

    return { profile, defender };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ renameDefender }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ClanDefensePanel);