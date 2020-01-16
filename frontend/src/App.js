import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Lookup from './components/Lookup/Lookup'
import ASN from './components/ASN/ASN'
import ASNInput from './components/ASN/ASNInput'
import AdminPage from './components/Admin/AdminPage'
import ProxyInfo from './components/Proxy/Proxy'
import ProxyInput from './components/Proxy/ProxyInput'
import IPv6 from './components/IPv6/IPv6'
import IPv6Input from './components/IPv6/IPv6Input'
import ParticlesBg from 'particles-bg'
import NotFound from './components/404/NotFound'
import Particles from 'react-particles-js'
import IPinput from './components/Home/IPinput'
import CurrentIP from './components/Lookup/CurrentIP'
import { hasValidJwt } from './utils/jwtValidator';
import { isAdmin } from './utils/isAdmin'
import Auth from './components/Authorization/Auth'
import Users from './components/Users/Users'

/* Private routes - if the user is authenticated, render component; otherwise redirect to home page */
const UserRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    hasValidJwt() === true ? <Component {...props} /> : <Redirect to='/' />
  )} />
)

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAdmin() === true ? <Component {...props} /> : <Redirect to='/' />
  )} />
)
class App extends Component {
  render() {
    return (
      <header>
        <BrowserRouter>
          <Navbar />
          <ParticlesBg type="cobweb" bg={true} />
          <Switch>
            <Route exact path='/' component={IPinput} />
            <Route exact path='/auth' component={Auth} />
            <Route path='/lookup/:ip' component={Lookup} />
            <Route path='/current' component={CurrentIP} />
            <Route path='/proxy/:ip' component={ProxyInfo} />
            <Route path='/proxy/' component={ProxyInput} />
            <UserRoute path='/asnlookup/:ip' component={ASN} />
            <UserRoute path='/asnlookup' component={ASNInput} />
            <UserRoute path='/ipv6lookup/:ip' component={IPv6} />
            <UserRoute path='/ipv6lookup' component={IPv6Input} />
            <AdminRoute path='/admin' component={AdminPage} />
            <AdminRoute path='/users' component={Users} />
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
 export default App;