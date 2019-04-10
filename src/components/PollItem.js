import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollItem extends Component {
    render () {
        const { name, avatarURL, text, open, optionOne, optionTwo } = this.props
        // console.log('props', this.props)
        return (
            <div className='poll'>
                <h5 style={{margin:'10px', padding:'10px'}}>{name} asks:</h5>
                <div className='poll-content'>
                    <img src={avatarURL} alt={name} className='avatar'/>
                    
                        {
                            open !== true
                                ?   <div className='poll-text'>
                                        <b>Would you rather...</b>
                                        <p>{text}</p>
                                        <button className='btn'>View Poll</button>
                                    </div>
                                :   <div className='poll-text'>
                                        <b>Would you rather...</b>
                                        <p><input type='radio' name='poll' value={optionOne}/> {optionOne}</p>
                                        <p><input type='radio' name='poll' value={optionTwo}/> {optionTwo}</p>
                                        <button className='btn'>Submit</button>
                                    </div>
                        }
                       
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, polls }, {id, open}) {
    const poll = id ? polls[id] : null
    const text = poll ? polls[id].optionOne.text : ''

    return {
        open,
        poll,
        name: poll ? users[poll.author].name : null,
        avatarURL: poll ? users[poll.author].avatarURL : null,
        text: text ? `...${text.substring(text.length/2, text.length)}...` : null,
        optionOne: poll ? polls[id].optionOne.text : '',
        optionTwo: poll ? polls[id].optionTwo.text : ''
    }
}

export default connect(mapStateToProps)(PollItem)