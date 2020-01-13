import React, {Component} from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Lookup from './components/Lookup/Lookup'
import ASN from './components/ASN/ASN'
import ASNInput from './components/ASN/ASNInput'
import Details from './components/Details/Details'
import ProxyInfo from './components/Proxy/Proxy'
import ProxyInput from './components/Proxy/ProxyInput'
import ParticlesBg from 'particles-bg'
import NotFound from './components/404/NotFound'
import Particles from 'react-particles-js'
import IPinput from './components/Home/IPinput'
import CurrentIP from './components/Lookup/CurrentIP'
import { hasValidJwt } from './utils/jwtValidator';
import Auth from './components/Authorization/Auth'

/* Private routes - if the user is authenticated, render component; otherwise redirect to home page */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      hasValidJwt() === true ? <Component {...props} /> : <Redirect to='/' />
  )} />
)

 export default class App extends Component {
  render() {
    return (
      <header>
        <BrowserRouter>
        <Navbar/>
          <ParticlesBg type="cobweb" bg={true}/>
          <Switch>
            <Route exact path='/' component={IPinput}/>
            <Route exact path='/auth' component={Auth} />
            <Route path='/lookup/:ip' component={Lookup}/>
            <Route path='/lookup' component={CurrentIP}/>
            <Route path='/proxy/:ip' component={ProxyInfo}/>
            <Route path='/proxy/' component={ProxyInput}/>
            <PrivateRoute path='/asnlookup/:ip' component={ASN}/>
            <PrivateRoute path='/asnlookup' component={ASNInput}/>
            <Route path='/details' component={Details}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
        <Particles params={{
        "particles": {
          "number": {
            "value": 120
          },
          "size": {
            "value": 4
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      }} />
        </header>
    )
  }
}
