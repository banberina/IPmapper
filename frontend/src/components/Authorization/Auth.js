import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    /* Check the validity of the JWT  */
    componentDidMount = () => {
        /* If a token is already set, redirect to (logged in) homepage */
        if (localStorage.getItem('jwtToken')) {
            this.props.history.push('/');
            //window.location.reload();
        } else {
            /* Otherwise, take the token from the URL, store it and then redirect to the appropriate page */
            let token = (new URL(document.location)).hash.split('#jwt=')[1];
            if (!token) { // no token (in case someone tries to manully access the /auth route)
                this.props.history.push('/');
            } else {
                localStorage.setItem('jwtToken', token);
                this.props.history.push('/');
                window.location.reload();
            }
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default withRouter(Auth);