import React, { Component, Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Unanswered from './Unanswered'
import NoMatch from './NoMatch'

class Dashboard extends Component {
    state = {
        selected: 'unanswered'
    }
    handleClick = () => {
        if (this.state.selected === 'unanswered') {
            this.setState({
                selected: 'answered'
            })
        } else {
            this.setState({
                selected: 'unanswered'
            })
        }
        
    }
    render() {
        const { authedUser, answeredPollIds, unansweredPollIds } = this.props
        // console.log(this.props)
        if (authedUser === null) {
            return <NoMatch authedUser={authedUser} />
        }
        return (
            <Fragment>
                <div className='dashboard' role='navigation'>
                    <ul className='poll-nav'>
                        <li className='nav-item'><Link to='/home/unanswered' onClick={this.handleClick} style={this.state.selected === 'unanswered' ? {color:'#42A5F5'} : {color:'black'}}>Unanswered Questions</Link></li>
                        <li className='nav-item'><Link to='/home/answered' onClick={this.handleClick} style={this.state.selected === 'answered' ? {color:'#42A5F5'} : {color:'black'}}>Answered Questions</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path='/home/unanswered' render={() => unansweredPollIds.length !== 0 ? <Unanswered data={unansweredPollIds}/> : <p align='center'>0 questions found</p>} />
                    <Route path='/home/answered' render={() => answeredPollIds.length !== 0 ? <Unanswered data={answeredPollIds} /> : <p align='center'>You have not answered any questions yet.</p>} />
                </Switch>
            </Fragment>
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