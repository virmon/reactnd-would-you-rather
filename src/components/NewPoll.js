import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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
        const { dispatch } = this.props

        dispatch(handleAddPoll({ optionOne, optionTwo }))

        this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: true
        })

    }
    render () {
        if (this.props.authedUser === null) {
            return <Redirect to='/' />
        } 
        if (this.state.toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <div className='poll'>
                <div className='form'>
                    <h2 style={{textAlign:'center'}}>Create New Question</h2>
                    <i>Complete the question:</i>
                    <h3>Would You Rather ...</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='optionOne' value={this.state.optionOne} onChange={this.handleChange} placeholder='Enter option one text here' />
                            <p>OR</p>
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

export default connect(mapStateToProps)(NewPoll)