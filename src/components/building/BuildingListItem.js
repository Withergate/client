import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { Translate } from "react-localize-redux";

const BuildingListItem = ({building, selectedCharacter, constructBuilding}) => (
    <div className="m-4 p-2 rounded bg-light">
        <div className="row">
            <div className="col-12 col-md-4">
                <img src={building.details.imageUrl} height="120px" alt={building.details.name} />
            </div>
            <div className="col-12 col-md-8">
                <b><Translate id={building.details.name} /></b>
                <p><Translate id={building.details.description} /></p>
                <b><Translate id="basic.level" />: </b> {building.level}
                <div className="row">
                    <div className="col-12 col-md-6">
                        <b><Translate id="basic.progress" /></b>: {building.progress}/{building.nextLevel}
                    </div>
                    <div className="col-12 col-md-6">
                        <ProgressBar min={0} max={building.nextLevel} now={building.progress} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row p-3">
            { selectedCharacter !== undefined ? 
                <button 
                    className="btn btn-dark" 
                    onClick={() => constructBuilding(building.details.identifier, selectedCharacter.id, 'CONSTRUCT')}
                    disabled={selectedCharacter.state !== 'READY'}>
                    Construct
                </button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </div>
    </div>
);

BuildingListItem.propTypes = {
    building: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    constructBuilding: PropTypes.func.isRequired
};

export default BuildingListItem;