import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Nav from './Nav'
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
      <Router>
        <Nav authedUser={this.props.authedUser} />
        <Switch>
          <Route path='/signin' component={SignIn}/>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/poll/:id' component={Poll}/>
          <Route path='/poll/result/:id' component={PollResult}/>
          <Route path='/create' component={NewPoll}/>
          <Route path='/leaderboard' component={Leaderboard}/>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
