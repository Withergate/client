import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from "react-localize-redux";

const ConsumableListItem = ({consumable, selectedCharacter, useConsumable}) => (
    <div className="m-4 p-2 rounded bg-light" key={consumable.id}>
        <div className="row">
            <div className="col-12 col-md-4">
                <img className="w-100" src={consumable.details.imageUrl} alt={consumable.details.name} />
            </div>
            <div className="col-12 col-md-8">
                <b><Translate id={consumable.details.name} /></b>
                <p className="mt-2">
                    <Translate id={consumable.details.description} />
                </p>
                <small>{consumable.details.effect}</small>
            </div>
        </div>
        <div className="row p-3">
            { selectedCharacter !== undefined ? 
                <button 
                    className="btn btn-secondary button-classic" 
                    onClick={() => useConsumable(consumable.id, selectedCharacter.id)}>
                    <Translate id="labels.use" />
                </button> 
                : <small className="text-muted"><Translate id="labels.noCharacter" /></small>
            }
        </div>
    </div>
);

ConsumableListItem.propTypes = {
    consumable: PropTypes.object.isRequired,
    selectedCharacter: PropTypes.object,
    useConsumable: PropTypes.func.isRequired
};

export default ConsumableListItem;