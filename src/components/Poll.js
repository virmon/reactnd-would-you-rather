import React, { Component } from 'react'
import PollItem from './PollItem'
import { connect } from 'react-redux'

class Poll extends Component {
    render () {
        const { id } = this.props
        // console.log('props', this.props)
        return (
            <div>
                <PollItem id={id} open={true} />
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    const id = '6ni6ok3ym7mf1p33lnez'

    return {
        id,
        authedUser
    }
}

export default connect(mapStateToProps)(Poll)