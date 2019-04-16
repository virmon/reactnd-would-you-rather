import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux'
import Nav from './Nav'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import Poll from './Poll'
import PollResult from './PollResult'
import NewPoll from './NewPoll'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  }
  render() {
    const { authedUser, user } = this.props
    return (
      <Router>
        <Nav authedUser={authedUser ? authedUser : null} user={user} handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path='/' component={SignIn}/>
          <Route path='/home' component={Dashboard}/>
          <Route path='/poll/:id' component={Poll}/>
          <Route path='/result/:id' component={PollResult}/>
          <Route path='/create' component={NewPoll}/>
          <Route path='/leaderboard' component={Leaderboard}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(App);
