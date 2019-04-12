import React, { Component } from 'react'
import { Link, Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'

class Dashboard extends Component {
    render() {
        const { authedUser, answeredPollIds, unansweredPollIds } = this.props
        // console.log(this.props)
        if (authedUser === null) {
            return <Redirect to='/' />
        }
        return (
            <div className='dashboard' role='navigation'>
                <ul className='poll-nav'>
                    <li className='nav-item'><Link to='/home/unanswered'>Unanswered Questions</Link></li>
                    <li className='nav-item'><Link to='/home/answered'>Answered Questions</Link></li>
                </ul>
                <Switch>
                    <Route path='/home/unanswered' render={() => <Unanswered data={unansweredPollIds}/>} />
                    <Route path='/home/answered' render={() => <Unanswered data={answeredPollIds} />} />
                </Switch>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, polls }) {
    const pollId = Object.keys(polls).sort((a,b) => polls[b].timestamp - polls[a].timestamp)
    const answeredPollIds = users[authedUser] ? Object.keys(users[authedUser].answers).sort((a,b) => polls[b].timestamp - polls[a].timestamp) : null
    const unansweredPollIds = authedUser ? pollId.filter((id) => !answeredPollIds.includes(id)) : null

    return {
        authedUser,
        answeredPollIds,
        unansweredPollIds
    }
}

export default connect(mapStateToProps)(Dashboard)