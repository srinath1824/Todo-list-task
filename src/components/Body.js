import React, { Component } from "react";
import "./Body.css";
import { ButtonGroup, Button } from "react-bootstrap";
import TableView from "./Table";
import AddItem from "./AddItem";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false
    };
  }

  stateChange() {
    this.setState({ modalShow: true });
  }
  stateChangeFalse() {
    console.log("eeee");
    this.setState({ modalShow: false });
  }
  render() {
    return (
      <div>
        <div>
          <a
            style={{
              display: "inline-block",
              top: "8px",
              border: "3px solid blue",
              padding: "10px",
              textDecoration: "none"
            }}
            href="/"
          >
            The Workitem
          </a>
          <a
            style={{
              display: "inline-block",
              right: "30px",
              border: "3px solid blue",
              position: "absolute",
              padding: "10px",
              textDecoration: "none"
            }}
            href="/"
          >
            Number of work item:{" "}
          </a>
        </div>
        <br />
        <div style={{ right: "30px", position: "absolute" }}>
          <ButtonGroup>
            <Button style={{ marginRight: "16px", borderRadius: "10px" }}>
              Upload to google spreadsheet
            </Button>
            <Button
              style={{ marginRight: "16px", borderRadius: "10px" }}
              onClick={() => this.setState({ modalShow: true })}
            >
              Add new Item
            </Button>
          </ButtonGroup>
        </div>
        <br />
        <br />
        <TableView />
        {this.state.modalShow ? (
          <AddItem
            show={this.state.modalShow}
            changeState={() => this.stateChange}
            toggleState={() => this.stateChangeFalse}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Body;
