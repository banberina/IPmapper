import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from 'mdbreact'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'

class Proxy extends Component {
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
    //console.log(ip);
    let lookupURl;
    //lookupURl = `https://ip2geo-api.tribeos.io/proxy/${ip}`;

    axios.get(lookupURl, { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjM5NTIxOTUsImRhdGEiOnsidXNlcl9pZCI6IjVjZTNjMjM1ZjA4NGQ1MDAxMzVhMGUwMyIsImFjY291bnRfaWQiOiI1Y2UzYzIzNWYwODRkNTAwMTM1YTBlMDIiLCJuYW1lIjoiQWRuYW4gTWlsamtvdmnEhyIsImlzX21hc3Rlcl9wYXNzd29yZCI6dHJ1ZX0sInNjb3BlcyI6eyJ0cmliZW9zX2FkdiI6IjVjZTNjMjQ2ODE1MjJlMDAxNjAxYWFkMiIsInRyaWJlb3NfcHViIjoiNWQwYTA1OTI2NmY3ZDIwMDEzN2U5NjRjIn19.NrsrOoaJNw1rAUAlbLx8EdUGd_TI6iJFi9PrW953hao' } })
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
                  <h3 >IP Proxy Info:</h3>
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
                  <Link to="../proxy">
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
                  <td colSpan="2"><h2>Proxy Info</h2></td>
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
                  <td><h5>Proxy Type</h5></td>
                  <td>{ipdata.proxy_type}</td>
                </tr>
              </tbody>
            </Table>
          </MDBContainer>
        </Fragment>
      )
    }
  }
}

export default withRouter(Proxy); 

