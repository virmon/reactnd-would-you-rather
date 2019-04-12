import React, { Component } from 'react'
import PollItem from './PollItem'
import { connect } from 'react-redux'

class Poll extends Component {
    render () {
        const { id } = this.props
        // console.log('props', this.props)
        return (
            <div>
                <PollItem id={id} view={'unanswered'} />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    const id = this.props.match.params

    return {
        id,
        authedUser
    }
}

export default connect(mapStateToProps)(Poll)