import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollItem extends Component {
    handlePollView (view, text, optionOne, optionTwo, voteOne, voteTwo, vote) {
        switch (view) {
            case 'unanswered' :
                return  <div className='poll-text'>
                            <b>Would you rather...</b>
                            <p><input type='radio' name='poll' value={optionOne}/> {optionOne}</p>
                            <p><input type='radio' name='poll' value={optionTwo}/> {optionTwo}</p>
                            <button className='btn'>Submit</button>
                        </div>
            case 'result' :
                return  <div className='poll-text'>
                            <b>Results:</b>
                            <div className={'option-result ' + (vote === 'optionOne' ? 'vote' : '')}>
                                <p>Would you rather {optionOne}</p>
                                <p>{voteOne/(voteOne+voteTwo)*100}%</p>
                                <b>{voteOne} out of {voteOne + voteTwo} votes</b>
                            </div>
                            <div className={'option-result ' + (vote === 'optionTwo' ? 'vote' : '')}>
                                <p>Would you rather {optionTwo}</p>
                                <p>{voteTwo/(voteOne+voteTwo)*100}%</p>
                                <b>{voteTwo} out of {voteOne + voteTwo} votes</b>
                            </div>
                        </div>
            default :
                return  <div className='poll-text'>
                            <b>Would you rather...</b>
                            <p>{text}</p>
                            <button className='btn'>View Poll</button>
                        </div>
        }
    }
    render () {
        const { name, avatarURL, text, view, optionOne, optionTwo, voteOne, voteTwo, vote } = this.props
        console.log('props', this.props)
        return (
            <div className='poll'>
                <h5 style={{margin:'10px', padding:'10px'}}>{name} asks:</h5>
                <div className='poll-content'>
                    <img src={avatarURL} alt={name} className='avatar'/>
                        {
                            this.handlePollView(view, text, optionOne, optionTwo, voteOne, voteTwo, vote) 
                        }
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, polls }, {id, view}) {
    const poll = id ? polls[id] : null
    const text = poll ? polls[id].optionOne.text : ''

    return {
        view,
        poll,
        name: poll ? users[poll.author].name : null,
        avatarURL: poll ? users[poll.author].avatarURL : null,
        text: text ? `...${text.substring(text.length/2, text.length)}...` : null,
        optionOne: poll ? polls[id].optionOne.text : '',
        optionTwo: poll ? polls[id].optionTwo.text : '',
        voteOne: poll ? polls[id].optionOne.votes.length : 0,
        voteTwo: poll ? polls[id].optionTwo.votes.length : 0,
        vote: users[authedUser] ? users[authedUser].answers[id] : null
    }
}

export default connect(mapStateToProps)(PollItem)