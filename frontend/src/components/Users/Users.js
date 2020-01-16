import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'
import { MDBContainer, MDBJumbotron, MDBRow, MDBCol } from 'mdbreact'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import config from '../../config'
import { getHeaders } from './../../utils/getHeaders'

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true,
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get(`${config.BASE_URL}/admin/users`, { headers: getHeaders() }).then(res => {
            const users = res.data;
            console.log(users);
            this.setState({ users, isLoading: false })

        }).catch(error => { this.setState({ isLoading: false }) });
    }
    render() {
        const { users = [] } = this.state;
        return (
             <Fragment>
             <MDBContainer className="mt-5 text-center">
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th><h6>Name</h6></th>
                    <th><h6>E-mail</h6></th>
                    <th><h6>Signup Time</h6></th>
                    <th><h6>Role</h6></th>
                  </tr>
                </thead>
                <tbody>
                {users.length ? 
                  users.map(users => (
                    <tr>
                      <td><h7>{users.name}</h7></td>
                      <td><h7>{users.email}</h7></td>
                      <td><h7>{users.signup_time}</h7></td>
                      <td><h7>{users.type}</h7></td>
                    </tr>
                  ))
                  : 
                  (<tr>
                    <td><h7>-</h7></td>
                    <td><h7>-</h7></td>
                    <td><h7>-</h7></td>
                    <td><h7>-</h7></td>
                  </tr>)
                }
                </tbody>
              </Table>
            </MDBContainer>
            </Fragment>
        );
      }


   
    
}
