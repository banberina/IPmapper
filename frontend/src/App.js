import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
/* import Lookup from './components/Lookup/Lookup'
import ReverseDNS from './components/ReverseDNS/ReverseDNS'
import ReverseDNSInput from './components/ReverseDNS/ReverseDNSInput'
import Details from './components/Details/Details'
import DetailsInput from './components/Details/DetailsInput'
import ProxyInfo from './components/Proxy/Proxy'
import ProxyInput from './components/Proxy/ProxyInput' */
import ParticlesBg from 'particles-bg'
import NotFound from './components/404/NotFound'
import Particles from 'react-particles-js'
import IPinput from './components/Home/IPinput'


 export default class App extends Component {
  render() {
    return (
      <header>
        <BrowserRouter>
          <ParticlesBg type="cobweb" bg={true}/>
          <Switch>
            <Route exact path='/' component={IPinput}/>
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
