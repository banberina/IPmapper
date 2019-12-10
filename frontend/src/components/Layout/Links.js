import React from 'react'
import {NavLink} from 'react-router-dom'
const Links = () => {
    return (
        <ul className="left">
            <li><NavLink to='/' className="btn-floating btn-large waves-effect waves-light grey"><i class="material-icons">my_location</i></NavLink></li>
        </ul>

    )
}

export default Links