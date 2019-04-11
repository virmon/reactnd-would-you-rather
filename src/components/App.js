import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import Poll from './Poll'
import PollResult from './PollResult'
import NewPoll from './NewPoll'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <SignIn />
        <Dashboard />
        <Poll />
        <PollResult />
        <NewPoll />
        <Leaderboard />
      </div>
    );
  }
}

export default connect()(App);
