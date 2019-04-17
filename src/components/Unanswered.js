import React from 'react'
import PollItem from './PollItem'

const Unanswered = ({ data }) => {
    return (
        <div>
            {
                data && data.map((id) => (
                    <PollItem key={id} id={id} />
                ))
            }
        </div>
    )
}

export default Unanswered