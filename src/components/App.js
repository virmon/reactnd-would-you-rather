import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
// import SignIn from './SignIn'
// import Dashboard from './Dashboard'
import Poll from './Poll'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Poll />
      </div>
    );
  }
}

export default connect()(App);
