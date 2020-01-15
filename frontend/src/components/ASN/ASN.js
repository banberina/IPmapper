import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from 'mdbreact'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import {getHeaders} from '../../utils/getHeaders'
import config from '../../config'

class ASN extends Component {
    constructor(props) {
        super(props);
        this.state = {
          asndata: [],
          isLoading: true,
          requestFailed: false
        };
      }
    
      componentDidMount() {
        const { ip } = this.props.match.params;
        axios.get(`${config.BASE_URL}/user/asn/${ip}`, { headers: getHeaders() })          
        .then(res => {
            const asndata = res.data;
            console.log(asndata);
            this.setState({ asndata, isLoading: false})
              }).catch(error=> {this.setState({isLoading:false})});
      }

  render() {
    console.log(this.state.asndata);
    const { asndata, isLoading } = this.state;
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
                  <h3 >ASN Data</h3>
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
    if (asndata.length===0)
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
                  <Link to="../asnlookup">
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
                  <td colSpan="2"><h2>ASN Data</h2></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h5>IP</h5></td>
                  <td>{asndata.ip}</td>
                </tr>
                <tr>
                  <td><h5>ASN</h5></td>
                  <td>{asndata.asn}</td>
                </tr>
                <tr>
                  <td><h5>Company</h5></td>
                  <td>{asndata.company}</td>
                </tr>
              </tbody>
            </Table>
          </MDBContainer>
        </Fragment>
      )
    }
  }
}

export default withRouter(ASN); 

