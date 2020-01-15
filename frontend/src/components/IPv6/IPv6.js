import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from 'mdbreact'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import config from './../../config'
import {getHeaders} from './../../utils/getHeaders'

class IPv6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ipdata: [],
          isLoading: true,
          requestFailed: false
        };
      }
    
      componentDidMount() {
        const { ip } = this.props.match.params;
        axios.get(`${config.BASE_URL}/user/geoipv6/${ip}`, { headers: getHeaders()})         
        .then(res => {
            const ipdata = res.data;
            console.log(ipdata);
            this.setState({ ipdata, isLoading: false})
              }).catch(error=> {this.setState({isLoading:false})});
      }

  render() {
    console.log(this.state.ipdata);
    const { ipdata, isLoading } = this.state;
    const { ip } = this.props.match.params;
    while (isLoading)
      return (
        <Fragment>
          <CssBaseline />
          <Container>
            <Typography component="div" style={{ backgroundColor: 'transparent', height: '10vh' }} />
          </Container>
          <CssBaseline />
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 4 }}>
                  <h3 >Ipv6 Data</h3>
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
    if (ipdata.length===0)
      return (
        <Fragment>
          <CssBaseline />
          <Container>
            <Typography component="div" style={{ backgroundColor: 'transparent', height: '10vh' }} />
          </Container>
          <CssBaseline />
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron style={{ padding: 4 }}>
                  <h1>IP input not valid</h1>
                  <h3>Try with something else.</h3>
                  <br />
                  <Link to="../ipv6lookup">
                    <button name="action"><h4 style={{ color: 'white' }}>Return</h4>
                    </button>
                  </Link>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        </Fragment>)
    else {
      return (
      <Fragment>

<MDBContainer className="mt-5 text-center">
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <td colSpan="2"><h2>IPv6 Info</h2></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><h5>IP</h5></td>
        <td>{ip}</td>
      </tr>
      <tr>
        <td><h5>Country</h5></td>
        <td>{ipdata.country}</td>
      </tr>
      <tr>
        <td><h5>Country short</h5></td>
        <td>{ipdata.country_short}</td>
      </tr>
      <tr>
        <td><h5>Region</h5></td>
        <td>{ipdata.region}</td>
      </tr>
      <tr>
        <td><h5>City</h5></td>
        <td>{ipdata.city}</td>
      </tr>
      <tr>
        <td><h5>Latitude</h5></td>
        <td>{ipdata.lat}</td>
      </tr>
      <tr>
        <td><h5>Longitude</h5></td>
        <td>{ipdata.lon}</td>
      </tr>
      <tr>
        <td><h5>Zip code</h5></td>
        <td>{ipdata.zipcode}</td>
      </tr>
    </tbody>
  </Table>
</MDBContainer>
</Fragment>
      )
    }
  }
}

export default withRouter(IPv6); 

