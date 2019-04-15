import React, { Component } from 'react'

class ProgressBar extends Component {
    render () {
        const { score }  = this.props
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
}

export default ProgressBar