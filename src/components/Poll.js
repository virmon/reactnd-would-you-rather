import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import NoMatch from './NoMatch'
import ProgressBar from './ProgressBar'
import { handleAnswerPoll } from '../actions/shared' 
import { connect } from 'react-redux'

class Poll extends Component {
    state = {
        selectedOption: '',
        toHome: false,
        isExisting: false
    }
    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    handleSubmitAnswer = (e) => {
        e.preventDefault()

        const qid = this.props.match.params.id
        const answer = this.state.selectedOption

        // console.log('You have selected:', qid, answer);
        this.props.handleAnswerPoll(qid, answer)
        

        this.setState({
            selectedOption: '',
            toResult: true
        })
        
    }
    handlePollView (optionOne, optionTwo, voteOne, voteTwo, vote) {
        if (vote === undefined) {
            return <div className='poll-text'>
                        <b>Would you rather...</b>
                        <form onSubmit={this.handleSubmitAnswer}>
                            <p>
                                <input 
                                    type='radio' 
                                    value={'optionOne'} 
                                    onChange={this.handleChange} 
                                    checked={this.state.selectedOption === 'optionOne'}
                                /> 
                                {optionOne}
                            </p>
                            <p>
                                <input 
                                    type='radio' 
                                    value={'optionTwo'} 
                                    onChange={this.handleChange} 
                                    checked={this.state.selectedOption === 'optionTwo'}
                                /> 
                                {optionTwo}
                            </p>
                            <button type='submit' className='btn'>Submit</button>
                        </form>
                    </div>
        } else if (vote !== undefined) {
            return <div className='poll-text'>
                        <b>Results:</b>
                        <div className={'option-result ' + (vote === 'optionOne' ? 'vote' : '')}>
                            <div className='your-vote' style={vote === 'optionOne' ? {display:'block'} : {display:'none'}}><p>Your<br/>Vote</p></div>
                            <p>Would you rather {optionOne}</p>
                            <ProgressBar score={(voteOne/(voteOne+voteTwo)*100).toFixed(2)} />
                            <b><p align='center'>{voteOne} out of {voteOne + voteTwo} votes</p></b>
                        </div>
                        <div className={'option-result ' + (vote === 'optionTwo' ? 'vote' : '')}>
                            <div className='your-vote' style={vote === 'optionTwo' ? {display:'block'} : {display:'none'}}><p>Your<br/>Vote</p></div>
                            <p>Would you rather {optionTwo}</p>
                            <ProgressBar score={(voteTwo/(voteOne+voteTwo)*100).toFixed(2)} />
                            <b><p align='center'>{voteTwo} out of {voteOne + voteTwo} votes</p></b>
                        </div>
                    </div>
        } else {
            this.setState({ isExisting: false })
        }
    }
    render () {
        // console.log('props', this.props)
        const { authedUser, name, avatarURL, optionOne, optionTwo, voteOne, voteTwo, vote, allIds } = this.props
        if (allIds.includes(this.props.match.params.id) && authedUser !== null) {
            return (
                <div className='poll'>
                    <h5 style={{margin:'10px', padding:'10px'}}>{name} asks:</h5>
                    <div className='poll-content'>
                        <img src={avatarURL} alt={name} className='avatar'/>
                        {
                            this.handlePollView(optionOne, optionTwo, voteOne, voteTwo, vote)
                        }
                    </div>
                </div>
            )
        } else {
            return <NoMatch authedUser={authedUser} />
        }
    }
}

function mapStateToProps ({ authedUser, polls, users }, ownProps) {
    const id = ownProps.match.params.id
    const poll = id ? polls[id] : null
    const allIds = polls ? Object.keys(polls) : []

    return {
        id,
        authedUser,
        name: poll ? users[poll.author].name : null,
        avatarURL: poll ? users[poll.author].avatarURL : null,
        optionOne: poll ? polls[id].optionOne.text : '',
        optionTwo: poll ? polls[id].optionTwo.text : '',
        voteOne: poll ? polls[id].optionOne.votes.length : 0,
        voteTwo: poll ? polls[id].optionTwo.votes.length : 0,
        vote: users[authedUser] ? users[authedUser].answers[id] : '',
        allIds
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handleAnswerPoll: (qid, answer) => dispatch(handleAnswerPoll(qid, answer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Poll)