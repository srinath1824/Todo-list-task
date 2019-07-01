import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddItem extends Component {
  render() {
    console.log("qsd");
    console.log(this.props.show);
    console.log(this.props.toggleState());
    return (
      <Modal show={this.props.show} onHide={this.props.toggleState()}>
        <Modal.Title>Thank You, Visit Again</Modal.Title>
        <Modal.Header />
        <Modal.Body />
        <Modal.Footer>
          <Button onClick={this.props.toggleState()}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddItem;
