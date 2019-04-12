import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollItem from './PollItem'

class PollResult extends Component {
    render () {
        const { id } = this.props

        return (
            <PollItem id={id} view={'result'} />
        )
    }
}

function mapStateToProps ({ authedUser, users, polls }, { optionOne, optionTwo, answers }) {
    const id = this.props.match.params
    const pollIds = Object.keys(polls)


    return {
        id,
        optionOne,
        optionTwo,
        answers,
        voteOne: polls[pollIds]
    }
}

export default connect(mapStateToProps)(PollResult)