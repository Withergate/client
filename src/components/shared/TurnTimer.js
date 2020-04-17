import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTimeToNextTurn } from "../../services/timeUtils";
import { Translate } from "react-localize-redux";

class TurnTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  render() {
    return (
        this.props.fetched && this.props.turn.turnId <= this.props.maxTurns &&
        <div>
            <b><Translate id="header.timeRemaining" />: </b>{ getTimeToNextTurn(this.props.turn, this.props.turnTimes) }
        </div>
    )
  }
}

TurnTimer.propTypes = {
    turn: PropTypes.object.isRequired,
    maxTurns: PropTypes.number.isRequired,
    turnTimes: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { turn } = state.turn;
    const { maxTurns, turnTimes } = state.game.properties;

    const fetching = state.game.fetching || state.turn.fetching;
    const fetched = state.game.fetched && state.turn.fetched;
    const failed = state.game.failed || state.turn.failed;

    return { fetching, fetched, failed, turn, maxTurns, turnTimes };
};

export default connect(mapStateToProps)(TurnTimer);