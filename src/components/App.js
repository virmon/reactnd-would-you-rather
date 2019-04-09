import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux';
import SignIn from './SignIn'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default connect()(App);
