import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

const LocationListItem = ({location, selectedCharacter, onVisit}) => (
    <div className="m-4 p-2 rounded bg-light" key={location.location}>
        <div className="row">
            <div className="col-12 col-md-6">
                <img className="mb-2" src={location.imageUrl} height="200px" alt={location.location} />
            </div>
            <div className="col-12 col-md-6">
                <h5><Translate id={location.name} /></h5>
                <p><Translate id={location.description} /></p>
                <p><small className="text-muted"><Translate id={location.info} /></small>
                </p>
            </div>
        </div>
        <div className="row p-3">
            { selectedCharacter !== undefined ? 
                <button 
                    className="btn btn-dark" 
                    onClick={() => onVisit(selectedCharacter.id, location.location)}
                    disabled={selectedCharacter.state !== 'READY'}>
                    Visit
                </button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </div>
    </div>
);

LocationListItem.propTypes = {
    location: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    onVisit: PropTypes.func.isRequired
};

export default LocationListItem;