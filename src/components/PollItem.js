import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollItem extends Component {
    render () {
        const { name, avatarURL, text } = this.props
        // console.log('props', this.props)
        return (
            <div className='poll'>
                <h5 style={{margin:'10px', padding:'10px'}}>{name} asks:</h5>
                <div className='poll-content'>
                    <img src={avatarURL} alt={name} className='avatar'/>
                    <div className='poll-text'>
                        <b>Would you rather...</b>
                        <p>{text}</p>
                        <button className='btn'>View Poll</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, polls }, {id}) {
    const poll = id ? polls[id] : null
    const text = poll ? polls[id].optionOne.text : ''

    return {
        poll,
        name: poll ? users[poll.author].name : null,
        avatarURL: poll ? users[poll.author].avatarURL : null,
        text: text ? `...${text.substring(text.length/2, text.length)}...` : null
    }
}

export default connect(mapStateToProps)(PollItem)