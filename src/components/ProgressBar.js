import React from 'react'

const ProgressBar = ({score}) => {
    const percent = score
    return (
        <div className='progress-bar'>
            <div 
                className='fill'
                style={{width:`${percent}%`}}
            >
                {percent}%
            </div>
        </div>
    )
}

export default ProgressBar