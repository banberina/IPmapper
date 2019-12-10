import React, { Component } from 'react'
import Link from 'react-router'

class NotFound extends Component {
    render() {
        return (
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">404: Page Not Found</span>
                            <h4>Oops it seems you're on a wrong place.</h4>
                        </div>
                        <div class="card-action">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;