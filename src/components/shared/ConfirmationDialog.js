import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationDialog = (props) => (
    <Modal show={props.show} centered >
        <Modal.Header>
            <Modal.Title>
            <Translate id={props.heading} />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Translate id={props.text} />
        </Modal.Body>
        <Modal.Footer>
            <Button className="button-classic" variant="outline-danger" onClick={() => props.onConfirm()} >
                <Translate id="labels.confirm" />
            </Button>
            <Button className="button-classic" variant="outline-dark" onClick={() => props.onClose()} >
                <Translate id="labels.close" />
            </Button>
        </Modal.Footer>
      </Modal>
);

  ConfirmationDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
};
  
export default ConfirmationDialog;