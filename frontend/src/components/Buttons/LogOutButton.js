import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import '../../css/google-button.css';


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
            <div  >
            <Button onClick={this.logOut} style={{ marginLeft: 10 }} variant='default'><h4>Sign out</h4></Button>
            </div>
        )
    }
}

export default LogOutButton;