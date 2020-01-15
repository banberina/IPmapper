import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from 'mdbreact'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const NotFound = () => {
    return(
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
                                <h3 className="h6 display-3">Error 404</h3>

                                <h3>Oops you're on a wrong place.</h3>
                                <hr className="my-2" />
                                <Link to="/">
                    <button name="action"><h4 style={{ color: 'white' }}>HomePage</h4>
                    </button>
                    </Link>
                            </MDBJumbotron>
                            
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </Fragment>
    )} ;

    export default (NotFound);