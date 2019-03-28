import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";
import ReactTooltip from 'react-tooltip';

const LocationListItem = ({location, selectedCharacter, onVisit}) => (
    <div className="m-4 p-2 rounded bg-light" key={location.location}>
        <div className="row">
            <div className="col-12 col-md-4">
                <img className="mb-2" src={location.imageUrl} height="200px" alt={location.location} />
            </div>
            <div className="col-12 col-md-6">
                <h5><Translate id={location.name} /></h5>
                <p><Translate id={location.description} /></p>
                <p><small className="text-muted"><Translate id={location.info} /></small>
                </p>
            </div>
            <div className="col-12 col-md-2">
                { selectedCharacter !== undefined ? 
                    <div>
                        <button
                            data-tip data-for="visitButton"
                            className="btn btn-dark m-2 button-classic" 
                            onClick={() => onVisit(selectedCharacter.id, location.location, "VISIT")}
                            disabled={selectedCharacter.state !== 'READY'}>
                            <Translate id="labels.visit" />
                        </button>
                        <ReactTooltip id="visitButton" effect="solid" place="right">
                            <Translate id="labels.locationVisit" />
                        </ReactTooltip>
                        { 
                            location.scouting && 
                            <div>
                                <button
                                    data-tip data-for="scoutButton"
                                    className="btn btn-dark m-2 button-classic" 
                                    onClick={() => onVisit(selectedCharacter.id, location.location, "SCOUT")}
                                    disabled={selectedCharacter.state !== 'READY'}>
                                    <Translate id="labels.scout" />
                                </button>
                                <ReactTooltip id="scoutButton" effect="solid" place="right">
                                    <Translate id="labels.locationScout" />
                                </ReactTooltip>
                            </div>
                        }
                    </div>
                    : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
                }
            </div>
        </div>
    </div>
);

LocationListItem.propTypes = {
    location: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    onVisit: PropTypes.func.isRequired
};

export default LocationListItem;