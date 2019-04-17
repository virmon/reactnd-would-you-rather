import React from 'react'
import PollItem from './PollItem'

const Unanswered = (props) => {
    return (
        <div>
            {
                props.data && props.data.map((id) => (
                    <PollItem key={id} id={id} />
                ))
            }
        </div>
    )
}

export default Unanswered