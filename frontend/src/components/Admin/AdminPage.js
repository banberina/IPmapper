import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from 'mdbreact'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipdata: [],
      isLoading: true,
      requestFailed: false
    };
  }

  componentDidMount() {
    let lookupURl;
    lookupURl = `https://ipmapper.herokuapp.com/geo/`;

    axios.get(lookupURl)
      .then(res => {
        const ipdata = res.data.data[0];
        console.log(ipdata);
        this.setState({ ipdata, isLoading: false})
      }).catch(error=> {this.setState({isLoading:false})});


  }

  render() {
    console.log(this.state.ipdata);
    const { ipdata, isLoading } = this.state;
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
                  <h3 >IP Details</h3>
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
                  <Link to="../details">
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
                  <td colSpan="2"><h2>IP Details</h2></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h5>IP</h5></td>
                  <td>{ipdata.ip}</td>
                </tr>
                <tr>
                  <td><h5>Type</h5></td>
                  <td>{ipdata.type}</td>
                </tr>
                <tr>
                  <td><h5>Is proxy?</h5></td>
                  <td>{ipdata.is_proxy.toString()}</td>
                </tr>
                <tr>
                  <td><h5>Proxy type</h5></td>
                  <td>{ipdata.proxy_type}</td>
                </tr>
                <tr>
                  <td><h5>Country</h5></td>
                  <td>{ipdata.country}</td>
                </tr>
                <tr>
                  <td><h5>Country code 2</h5></td>
                  <td>{ipdata.country_code_2}</td>
                </tr>
                <tr>
                  <td><h5>Country code 3</h5></td>
                  <td>{ipdata.country_code_3}</td>
                </tr>
                <tr>
                  <td><h5>Region</h5></td>
                  <td>{ipdata.region}</td>
                </tr>
                <tr>
                  <td><h5>Region code 2</h5></td>
                  <td>{ipdata.region_code}</td>
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
                  <td>{ipdata.lng}</td>
                </tr>
                <tr>
                  <td><h5>Zip code</h5></td>
                  <td>{ipdata.zip_code}</td>
                </tr>
                <tr>
                  <td><h5>ISP</h5></td>
                  <td>{ipdata.isp}</td>
                </tr>
                <tr>
                  <td><h5>Domain</h5></td>
                  <td>{ipdata.domain}</td>
                </tr>
              </tbody>
            </Table>
          </MDBContainer>
        </Fragment>
      )
    }
  }
}

export default withRouter(AdminPage); 