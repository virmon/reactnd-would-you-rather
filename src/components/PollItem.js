import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import { connect } from 'react-redux'
import { handleAnswerPoll } from '../actions/shared' 

class PollItem extends Component {
    state = {
        selectedOption: '',
        toHome: false
    }
    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    handleSubmitAnswer = (e) => {
        e.preventDefault()

        const qid = this.props.id 
        const answer = this.state.selectedOption

        console.log('You have selected:', qid, answer);
        this.props.dispatch(handleAnswerPoll(qid, answer))
        

        this.setState({
            selectedOption: '',
            toHome: true
        })
    }
    handlePollView (id, view, text, optionOne, optionTwo, voteOne, voteTwo, vote) {
        switch (view) {
            case 'unanswered' :
                return  <div className='poll-text'>
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
            case 'result' :
                return  <div className='poll-text'>
                            <b>Results:</b>
                            <div className={'option-result ' + (vote === 'optionOne' ? 'vote' : '')}>
                                <p>Would you rather {optionOne}</p>
                                <ProgressBar score={(voteOne/(voteOne+voteTwo)*100).toFixed(2)} />
                                <b><p align='center'>{voteOne} out of {voteOne + voteTwo} votes</p></b>
                            </div>
                            <div className={'option-result ' + (vote === 'optionTwo' ? 'vote' : '')}>
                                <p>Would you rather {optionTwo}</p>
                                <ProgressBar score={(voteTwo/(voteOne+voteTwo)*100).toFixed(2)} />
                                <b><p align='center'>{voteTwo} out of {voteOne + voteTwo} votes</p></b>
                            </div>
                        </div>
            default :
                return  <div className='poll-text'>
                            <b>Would you rather...</b>
                            <p>{text}</p>
                            <Link to={vote === undefined ? '/poll/'+id : '/result/'+id}><button className='btn'>View Poll</button></Link>
                        </div>
        }
    }
    render () {
        const { id, name, avatarURL, text, view, optionOne, optionTwo, voteOne, voteTwo, vote } = this.props
        const { toHome } = this.state
        // console.log('props', this.props)
        if (toHome === true) {
            return <Redirect to='/home/unanswered' />
        }
        return (
            <div className='poll'>
                <h5 style={{margin:'10px', padding:'10px'}}>{name} asks:</h5>
                <div className='poll-content'>
                    <img src={avatarURL} alt={name} className='avatar'/>
                        {
                            this.handlePollView(id, view, text, optionOne, optionTwo, voteOne, voteTwo, vote) 
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
        vote: users[authedUser] ? users[authedUser].answers[id] : ''
    }
}

export default connect(mapStateToProps)(PollItem)