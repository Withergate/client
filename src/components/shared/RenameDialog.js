import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { GameIcon } from './GameIcon';
import { LARGE } from '../../constants/constants';

class RenameDialog extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
    
        this.props.onConfirm(data.get('nameText'));
      }

    render() {
        return (
        <Modal show={this.props.show} centered >
            <Form onSubmit={this.handleSubmit}>
                <Modal.Header>
                    <Modal.Title className="inline">
                        { this.props.premiumType && <GameIcon type={this.props.premiumType} size={LARGE} noPadding /> }
                        <Translate id={this.props.heading} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formRename">
                        <Form.Label><Translate id="basic.name" /></Form.Label>
                        <Form.Control type="text" placeholder="..." name="nameText" />
                        <Form.Text className="text-muted">
                            <Translate id={this.props.text} />
                        </Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button-classic" variant="outline-danger" type="submit" >
                        <Translate id="labels.confirm" />
                    </Button>
                    <Button className="button-classic" variant="outline-dark" onClick={() => this.props.onClose()} >
                        <Translate id="labels.close" />
                    </Button>
                </Modal.Footer>
            </Form>
            
        </Modal>
        )
    }

}

RenameDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    premiumType: PropTypes.string
};
  
export default RenameDialog;