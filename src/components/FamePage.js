import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Translate } from "react-localize-redux";
import { Table, Image } from 'react-bootstrap';

import { Error } from './shared/Error';
import { Paginator } from './shared/Paginator';
import spinner from '../images/spinner.gif';
import intel from '../images/intel.png';
import { GameIcon } from './shared/GameIcon';

import { fetchClans, fetchClanIntel } from '../actions/dataActions';
import { displayIntel } from '../actions/uiActions';
import { dismissError } from '../actions/uiActions';
import { FAME, LARGE } from '../constants/constants';
import ClanIntelDialog from './intel/ClanIntelDialog';

// get formatted date time
const getFormattedTime = (datetime) => {
    return datetime.replace('T', ' ').substring(0, 16);
}

class FamePage extends Component {

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchClans(this.props.clans.number);
        }
    }

    displayIntel(clanId) {
        this.props.displayIntel(true);
        this.props.fetchClanIntel(clanId);
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && 
                    <div className="m-4">
                        <Paginator
                            number={this.props.clans.number}
                            max={this.props.clans.totalPages - 1}
                            min={0}
                            onNext={this.props.fetchClans}
                            onPrevious={this.props.fetchClans}>
                            <Translate id="labels.page" /> {this.props.clans.number + 1}
                        </Paginator>
                        <Table className="mt-4" striped borderless hover responsive>
                            <thead>
                                <tr>
                                    <th><Translate id="basic.clan" /></th>
                                    <th className="centered"><GameIcon type={FAME} size={LARGE} /></th>
                                    <th className="centered"><Translate id="basic.faction" /></th>
                                    <th><Translate id="labels.lastActivity" /></th>
                                    <th className="centered"><Translate id="basic.intel" /></th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.props.clans.content.map(clan =>
                                    <tr key={clan.id} className={clan.id === this.props.clanId ? "text-success" : ""}>
                                        <td>{clan.name}</td>
                                        <td className="centered">{clan.fame}</td>
                                        <td className="centered">{clan.faction && <Image src={clan.faction.iconUrl} width="24px" />}</td>
                                        <td>{getFormattedTime(clan.lastActivity)}</td>
                                        <td className="centered">
                                            { this.props.clanId !== clan.id &&
                                                <Image 
                                                    src={intel}
                                                    width="24px"
                                                    style={{cursor:'pointer'}}
                                                    onClick={() => this.displayIntel(clan.id)}
                                                />
                                            }
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </Table>

                        <ClanIntelDialog />
                    </div>
                    
                }
                {
                    this.props.fetching && <img className="spinner" src={spinner} alt="Loading..." />
                }
                {
                    this.props.failed && <Error message={this.props.error} dismiss={this.props.dismissError} />
                }
            </div>
        );
    }
}

FamePage.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    error: PropTypes.string.isRequired,
    clans: PropTypes.object.isRequired,
    clanId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, error } = state.data.clans;
    const clans = state.data.clans.data;
    const clanId = state.clan.clan.id;

    return { fetching, fetched, failed, error, clans, clanId };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchClans, dismissError, fetchClanIntel, displayIntel }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FamePage);