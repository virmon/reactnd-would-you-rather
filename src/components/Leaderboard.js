import React, { Component } from 'react'
import User from './User'
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render () {
        const { users, userIds } = this.props
        // console.log(this.props)
        return (
            <div className=''>
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

function mapStateToProps ({ users }) {
    const userIds = Object.keys(users)
    return {
        users,
        userIds
    }
}

export default connect(mapStateToProps)(Leaderboard)