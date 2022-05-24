import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Form } from '../components/Form'
import Navbar from '../components/NavBar'
import Property from '../components/Property'
import ListContainer from '../containers/ListContainer'


export default class AppRouter extends Component {
  render() {
    return (
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<ListContainer/>} />
                <Route path='/property' element={<Property/>} />
                <Route path='/form' element={<Form/>} />
            </Routes>
        </Router>
    )
  }
}
