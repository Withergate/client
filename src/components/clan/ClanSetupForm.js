import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClanSetupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({name: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.props.createClan(this.state.name);
    }
  
    render() {
        return (
            <form className="p-4" onSubmit={this.handleSubmit}>
                <p>
                    Welcome to Withergate! It seems that you are a new wastelander. This is a dangerous place to roam alone
                    so let`s begin with setting up a clan.
                </p>
                <div className="form-group">
                    <label htmlFor="clan-name">
                        Clan name:
                    </label>
                    <input 
                        className="form-control"
                        name="clan-name"
                        type="text"
                        style={{width: 200}}
                        value={this.state.value}
                        onChange={this.handleChange} />
                </div>
                <input className="btn btn-dark" type="submit" value="Submit" />
            </form>
        );
    }
}

ClanSetupForm.propTypes = {
    createClan: PropTypes.func.isRequired
};

export default ClanSetupForm;