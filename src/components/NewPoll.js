import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import NoMatch from './NoMatch'
import { handleAddPoll } from '../actions/polls'
import { connect } from 'react-redux'

class NewPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }
    handleSubmit = (e) => {
        e.preventDefault()
        
        const { optionOne, optionTwo } = this.state

        this.props.handleAddPoll(optionOne, optionTwo)

        this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: true
        })

    }
    render () {
        const { authedUser } = this.props
        if (authedUser === null) {
            return <NoMatch authedUser={authedUser} />
        } 
        if (this.state.toHome) {
            return <Redirect to='/home/unanswered' />
        }
        return (
            <div className='poll'>
                <div className='form'>
                    <h2 style={{textAlign:'center'}}>Create New Question</h2>
                    <i>Complete the question:</i>
                    <h3>Would You Rather ...</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='optionOne' value={this.state.optionOne} onChange={this.handleChange} placeholder='Enter option one text here' />
                            <p align='center'>OR</p>
                        <input type='text' name='optionTwo' value={this.state.optionTwo} onChange={this.handleChange} placeholder='Enter option two text here' />
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handleAddPoll: (optionOne, optionTwo) => dispatch(handleAddPoll({ optionOne, optionTwo }))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPoll)