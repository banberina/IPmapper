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
import {
  FormGroup,
  FormLabel,
  Input,
  Button,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import { CardBody } from "react-bootstrap/Card";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipdata: [],
      asn: [],
      isLoading: true,
      requestFailed: false
    };
  }

  componentDidMount() {
    let lookupURl;
    lookupURl = `https://ipmapper.herokuapp.com/admin`;

    axios
      .get(`${lookupURl}/geo`)
      .then(res => {
        const ipdata = res.data.data[0];
        console.log(ipdata);
        this.setState({ ipdata, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false });
      });

    axios
      .get("https://ipmapper.herokuapp.com/asn")
      .then(res => this.setState({ asn: res.data.data[0] }));
  }

  render() {
    console.log(this.state.asn);
    console.log(this.state.ipdata);
    const { ipdata, isLoading } = this.state;
    while (isLoading)
      return (
        <Fragment>
          <CssBaseline />
          <Container>
            <Typography
              component="div"
              style={{ backgroundColor: "transparent", height: "10vh" }}
            />
          </Container>
          <CssBaseline />
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 4 }}>
                  <h3>IP Details</h3>
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="secondary" />
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Fragment>
      );
    if (ipdata.length === 0)
      return (
        <Fragment>

          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 4 }}>
                  <h1>ASN</h1>
                  <Form>
                    <MDBRow>
                      <MDBCol md={6}>
                        <FormGroup>
                          <FormLabel>IP From:</FormLabel>
                          <Input />
                        </FormGroup>
                      </MDBCol>
                      <MDBCol md={6}>
                        <FormGroup>
                          <FormLabel>IP To:</FormLabel>
                          <Input />
                        </FormGroup>
                      </MDBCol>
                    </MDBRow>
                    <FormGroup>
                      <FormLabel>ASN:</FormLabel>
                      <Input />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>Company:</FormLabel>
                      <Input />
                    </FormGroup>
                    <Button style={{ background: "blue", color: "white" }}>
                      Add ASN
                    </Button>
                  </Form>
                  <hr />
                  <MDBCol>
                    <Card>
                      <CardHeader>ipfrom - ipto</CardHeader>
                      <CardContent>
                        <MDBRow style={{ justifyContent: "space-between" }}>
                          <div>
                            asn
                            <br />
                            company
                          </div>
                          <div style={{ color: "red" }}>
                            <Button style={{ background: "red" }}>
                              delete
                            </Button>
                            <Button style={{ background: "lightseagreen" }}>
                              edit
                            </Button>
                          </div>
                        </MDBRow>
                      </CardContent>
                    </Card>
                    {this.state.asn.map((asn, key) => {
                      return (
                        <Card>
                          <CardHeader>
                            {asn.ipfrom} - {asn.ipto}
                          </CardHeader>
                          <CardContent>
                            <MDBRow>
                              <div>
                                {asn.asn}
                                <br />
                                {asn.company}
                              </div>
                              <div>
                                <Button>delete</Button>
                                <Button>edit</Button>
                              </div>
                            </MDBRow>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </MDBCol>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Fragment>
      );
    }
  }


export default withRouter(AdminPage);