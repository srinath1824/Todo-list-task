import React, { Component } from "react";
import { Table, Image } from "react-bootstrap";

export default class TableView extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>WorkItem</th>
              <th>Due Date</th>
              <th>No. Resources Needed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Start Templating</td>
              <td>23rd may 2018</td>
              <td>3</td>
              <td>
                <a href="/">
                  <Image
                    style={{ width: "30px", height: "30px" }}
                    src="/images/edit.jpg"
                  />
                </a>
                <a href="/">
                  <Image
                    style={{ width: "30px", height: "30px" }}
                    src="/images/delete.jpg"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
