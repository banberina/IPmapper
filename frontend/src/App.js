import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home'
//import Particles from 'react-particles-js'
//import Lookup from './components/Lookup/Lookup.jsx'
//import ParticlesBg from 'particles-bg'
import NotFound from './components/404/NotFound.jsx'


 export default class App extends Component {
  render() {
    return (
   
        <BrowserRouter>
          {/* <ParticlesBg type="cobweb" bg={true}/> */}
          <Switch>
            {/* <Route exact path='/' component={Home}/>
            <Route path='/lookup' component={Lookup}/> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    )
  }
}