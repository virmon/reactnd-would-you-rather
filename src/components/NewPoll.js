import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { handleAddPoll } from '../actions/polls'
import { connect } from 'react-redux'

class NewPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
        isDisabled: true,
        borderColor: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }
    handleSubmit = (e) => {
        e.preventDefault()
        
        const { optionOne, optionTwo } = this.state

        if (optionOne !== '' && optionTwo !== '') {
            this.props.handleAddPoll(optionOne, optionTwo)

            this.setState({
                optionOne: '',
                optionTwo: '',
                toHome: true
            })
        } else {
            alert('Complete the question.');
            this.setState({
                borderColor: 'red'
            })
        }

    }
    render () {
        const { authedUser } = this.props
        const { borderColor } = this.state
        if (authedUser === null) {
            return <Redirect to={{pathname:'/', state:{redirectUrl: this.props.location}}} />
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
                        <input 
                            type='text' 
                            name='optionOne' 
                            value={this.state.optionOne} 
                            onChange={this.handleChange} 
                            placeholder='Enter option one text here'
                            style={{borderColor}}
                        />
                        <p align='center'>OR</p>
                        <input 
                            type='text' 
                            name='optionTwo' 
                            value={this.state.optionTwo} 
                            onChange={this.handleChange} 
                            placeholder='Enter option two text here'
                            style={{borderColor}} 
                        />
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