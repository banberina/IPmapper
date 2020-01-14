import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class LogOutButton extends Component {
    constructor(props) {
        super(props);
    }

    /* Remove the token from the storage, and reload the page; */
    /* If you are on an "authorized" (PrivateRoute) page, you should be redirected to the home route. */
    logOut = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    render() {
        return (
            <Button onClick={this.logOut} style={{ marginLeft: 10 }}><h4>Sign out</h4></Button>
        )
    }
}

export default LogOutButton;