import React, { Component } from 'react'

import '../../css/google-button.css';
import config from '../../config';
import axios from 'axios';

class GoogleSignInButton extends Component {
    constructor(props) {
        super(props);
    }

    /* Go to the login endpoint */
    signIn = async () => {
        window.location = `${config.BASE_URL}/login`;
        window.location.replace(`${config.BASE_URL}/login`);
    }

    render() {
        return (
            <div className="google-btn" onClick={this.signIn}>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><h6>Google Sign in</h6></p>
            </div>
        )
    }
}

export default GoogleSignInButton;
