import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from 'mdbreact'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class ProxyInput extends Component {

    state = {
        ip: '',
    }
    handleChange = (e) => {
        this.setState({
            ip: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/proxy/${this.state.ip}`);
        console.log(this.state);

    }
    render() {
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
                            <MDBJumbotron style={{  padding: 4 }}>
                                <h3 className="h1 display-3">Proxy</h3>
                                
                                    <h5>Get proxy data about an IP address</h5>
                                <hr className="my-2" />
                                <form name="id" onSubmit={this.handleSubmit}>
                                    <input type="text" id="ip" name="ip" onChange={this.handleChange}  required />
                                    <br />
                                    <br />
                                   
                                    <p className="lead">
                                        <button name="action"><h4 style={{color:'white'}}>Search</h4>
                                        </button>

                                    </p>
                                </form>


                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </Fragment>



        )
    }

}

export default withRouter(ProxyInput);

