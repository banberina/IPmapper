import React, { Component, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from "mdbreact";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import config from './../../config'
import { getHeaders } from './../../utils/getHeaders'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipfrom: "",
      ipto: "",
      asn: "",
      company: "",
      country_short: "",
      country: "",
      region: "",
      city: "",
      lat: "",
      lon: "",
      zipcode: "",
      proxytype: "",
      isp: "",
      domain: "",
      usagetype: ""
    };
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  createASN = (event) => {
    axios.post(`${config.BASE_URL}/admin/asn`,
      { ipfrom: this.state.ipfrom, ipto: this.state.ipto, asn: this.state.asn, company: this.state.company },
      { headers: getHeaders() })
      .then(response => {
        console.log('successfully added.');
        window.location.reload();
      }).catch(error => {
        console.log(error.response);
      }).finally(() => {
        console.log('Request completed.');
      });
  }

  createIPv4 = (event) => {
    axios.post(`${config.BASE_URL}/admin/geo`,
      {
        ipfrom: this.state.ipfrom, ipto: this.state.ipto, country_short: this.state.country_short, country: this.state.country,
        region: this.state.region,
        city: this.state.city,
        lat: this.state.lat,
        lon: this.state.lon,
        zipcode: this.state.zipcode,
      },
      { headers: getHeaders() })
      .then(response => {
        console.log('successfully added.');
        window.location.reload();
      }).catch(error => {
        console.log(error.response);
      }).finally(() => {
        console.log('Request completed.');
      });
  }

  createIPv6 = (event) => {
    event.preventDefault();
    axios.post(`${config.BASE_URL}/admin/geoipv6`,
      {
        ipfrom: this.state.ipfrom, ipto: this.state.ipto, country_short: this.state.country_short, country: this.state.country,
        region: this.state.region,
        city: this.state.city,
        lat: this.state.lat,
        lon: this.state.lon,
        zipcode: this.state.zipcode,
      },
      { headers: getHeaders() })
      .then(response => {
        console.log('successfully added.');
        window.location.reload();
      }).catch(error => {
        console.log(error.response);
      }).finally(() => {
        console.log('Request completed.');
      });
  }

  createProxy = (event) => {
    event.preventDefault();
    axios.post(`${config.BASE_URL}/admin/geoipv6`,
      {
        ipfrom: this.state.ipfrom, ipto: this.state.ipto, country_short: this.state.country_short, country: this.state.country,
        region: this.state.region,
        city: this.state.city,
        proxytype: this.state.proxytype,
        isp: this.state.isp,
        domain: this.state.domain,
        usagetype: this.state.usagetype
      },
      { headers: getHeaders() })
      .then(response => {
        console.log('successfully added.');
        window.location.reload();
      }).catch(error => {
        console.log(error.response);
      }).finally(() => {
        console.log('Request completed.');
      });
  }

  render() {
    return (
      <div>
        <Container>
        </Container>
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
                  <h3 className="h1 display-3">IPv4</h3>
                  <div >
                    <Form onSubmit={this.createIPv4}>
                      <Form.Group>
                        <Form.Label>from IP:</Form.Label>
                        <Form.Control name='ipfrom' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>to IP:</Form.Label>
                        <Form.Control name='ipto' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Country:</Form.Label>
                        <Form.Control name='country' onChange={this.handleChange} type="text" placeholder="Enter country" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Country Short:</Form.Label>
                        <Form.Control name='country_short' onChange={this.handleChange} type="text" placeholder="Enter country short" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Region:</Form.Label>
                        <Form.Control name='region' onChange={this.handleChange} type="text" placeholder="Enter region" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>City:</Form.Label>
                        <Form.Control name='city' onChange={this.handleChange} type="text" placeholder="Enter city" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Latitude:</Form.Label>
                        <Form.Control name='lat' onChange={this.handleChange} type="text" placeholder="Enter lan" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Longitude:</Form.Label>
                        <Form.Control name='lon' onChange={this.handleChange} type="text" placeholder="Enter lon" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Zipcode:</Form.Label>
                        <Form.Control name='zipcode' onChange={this.handleChange} type="text" placeholder="Enter zipcode" />
                      </Form.Group>

                      <Button style={{ background: "lightseagreen" }} onClick={this.createIPv4}><h6>Create new record </h6></Button>
                    </Form>

                  </div>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Fragment>
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
                  <div >
                    <Form onSubmit={this.createASN}>
                      <Form.Group>
                        <Form.Label>from IP:</Form.Label>
                        <Form.Control name='ipfrom' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>to IP:</Form.Label>
                        <Form.Control name='ipto' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>ASN:</Form.Label>
                        <Form.Control name='asn' onChange={this.handleChange} type="text" placeholder="Enter asn" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Company:</Form.Label>
                        <Form.Control name='company' onChange={this.handleChange} type="text" placeholder="Enter company name" />
                      </Form.Group>
                      <Button style={{ background: "lightseagreen" }} onClick={this.createASN}><h6>Create new record </h6></Button>
                    </Form>

                  </div>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Fragment>
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
                  <h3 className="h1 display-3">IPv6</h3>
                  <div >
                    <Form onSubmit={this.createIPv6}>
                      <Form.Group>
                        <Form.Label>from IP:</Form.Label>
                        <Form.Control name='ipfrom' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>to IP:</Form.Label>
                        <Form.Control name='ipto' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Country:</Form.Label>
                        <Form.Control name='country' onChange={this.handleChange} type="text" placeholder="Enter country" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Country Short:</Form.Label>
                        <Form.Control name='country_short' onChange={this.handleChange} type="text" placeholder="Enter country short" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Region:</Form.Label>
                        <Form.Control name='region' onChange={this.handleChange} type="text" placeholder="Enter region" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>City:</Form.Label>
                        <Form.Control name='city' onChange={this.handleChange} type="text" placeholder="Enter city" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Latitude:</Form.Label>
                        <Form.Control name='lat' onChange={this.handleChange} type="text" placeholder="Enter lan" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Longitude:</Form.Label>
                        <Form.Control name='lon' onChange={this.handleChange} type="text" placeholder="Enter lon" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Zipcode:</Form.Label>
                        <Form.Control name='zipcode' onChange={this.handleChange} type="text" placeholder="Enter zipcode" />
                      </Form.Group>

                      <Button style={{ background: "lightseagreen" }} onClick={this.createIPv6}><h6>Create new record </h6></Button>
                    </Form>
                  </div>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Fragment>

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
                  <h3 className="h1 display-3">Proxy</h3>
                  <div >
                    <Form onSubmit={this.createProxy}>
                      <Form.Group>
                        <Form.Label>from IP:</Form.Label>
                        <Form.Control name='ipfrom' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>to IP:</Form.Label>
                        <Form.Control name='ipto' onChange={this.handleChange} type="number" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Country:</Form.Label>
                        <Form.Control name='country' onChange={this.handleChange} type="text" placeholder="Enter country" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Country Short:</Form.Label>
                        <Form.Control name='country_short' onChange={this.handleChange} type="text" placeholder="Enter country short" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Region:</Form.Label>
                        <Form.Control name='region' onChange={this.handleChange} type="text" placeholder="Enter region" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>City:</Form.Label>
                        <Form.Control name='city' onChange={this.handleChange} type="text" placeholder="Enter city" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Proxy type:</Form.Label>
                        <Form.Control name='proxytype' onChange={this.handleChange} type="text" placeholder="Enter proxy type" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Domain:</Form.Label>
                        <Form.Control name='domain' onChange={this.handleChange} type="text" placeholder="Enter domain" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Usage Type:</Form.Label>
                        <Form.Control name='usagetype' onChange={this.handleChange} type="text" placeholder="Enter usage type" />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>ISP:</Form.Label>
                        <Form.Control name='isp' onChange={this.handleChange} type="text" placeholder="Enter ISP" />
                      </Form.Group>

                      <Button style={{ background: "lightseagreen" }} onClick={this.createProxy}><h6>Create new record </h6></Button>
                    </Form>

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
export default (AdminPage);