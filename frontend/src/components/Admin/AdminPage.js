import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from "mdbreact";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { CardBody } from "react-bootstrap/Card";
import {  Header, Icon, Image, Modal } from 'semantic-ui-react'

export default class AdminPage extends Component {


  render() {
    return (
      <div>
        <Fragment>
          <CssBaseline />
          <Container>
            <Typography component="div" style={{ backgroundColor: 'transparent', height: '5vh' }} />
          </Container>
          <CssBaseline />
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 4 }}>
                  <h3 className="h1 display-3">ASN</h3>
                  <div style={{ color: "red" }}>
                    <Button style={{ background: "blue" }}>create</Button>
                    <Button style={{ background: "lightseagreen" }}>edit</Button>
                    <Button style={{ background: "red" }}>delete</Button>
                  </div>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Fragment>
      </div>
    );
  }
}
