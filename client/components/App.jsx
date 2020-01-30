import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'



import Home from './Home'
import Login from './Login'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      name: '',
      errMsg: null
    }

    handleChange = (e) => {
      this.setState({
        if(this.state.name == ) {

        } else {
          [e.target.name]: e.target.value
        }
      })
    }

    handleSubmit =(e) => {
      e.preventDefault
    }
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>Overwatch Team Matcher!</h1>
          <Route exact path='/' component={Home} />
          <Route path='/:Login' component={Login} />
        </React.Fragment>
      </Router>
    )
  }

}

export default App
