import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import User from './User'
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render () {
        const { authedUser, users, userIds } = this.props
        // console.log(this.props)
        if (authedUser === null) {
            return <Redirect to='/' />
        }
        return (
            <div className='leaderboard'>
               {
                   userIds.map((id) => (
                        <User 
                            key={id}
                            name={users[id].name}
                            avatarURL={users[id].avatarURL}
                            answerCount={Object.keys(users[id].answers).length}
                            questionCount={users[id].questions.length} 
                        />
                   ))
               }
            </div>
        ) 
    }
}

function mapStateToProps ({ authedUser, users }) {
    const userIds = Object.keys(users)
                        .sort((a, b) => 
                            (Object.keys(users[b].answers).length+users[b].questions.length) - (Object.keys(users[a].answers).length+users[a].questions.length))

    return {
        authedUser,
        users,
        userIds
    }
}

export default connect(mapStateToProps)(Leaderboard)