import React, { Component } from 'react'
import PollItem from './PollItem'
import { connect } from 'react-redux'

class Poll extends Component {
    render () {
        const id = this.props.match.params.id
        console.log('props', this.props)
        return (
            <div>
                <PollItem id={id} view={'unanswered'} />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Poll)