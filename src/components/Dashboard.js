import React, { Component } from 'react'
import PollItem from './PollItem'
import { connect } from 'react-redux'
// import  { getUserIds } from '../utils/helper' 

class Dashboard extends Component {
    render() {
        const { answeredPollIds } = this.props
        // console.log(this.props)
        return (
            <div className='dashboard' role='navigation'>
                <ul className='poll-nav'>
                    <li><span>Unanswered Questions</span></li>
                    <li><span>Answered Questions</span></li>
                </ul>
                {
                    answeredPollIds && answeredPollIds.map((id) => (
                        <PollItem key={id} id={id} />
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, polls }) {
    // const pollId = Object.keys(polls)
    const answeredPollIds = users[authedUser] ? Object.keys(users[authedUser].answers) : null
    return {
        answeredPollIds
    }
}

export default connect(mapStateToProps)(Dashboard)