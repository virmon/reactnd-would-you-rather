import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard' role='navigation'>
                <ul className='poll-nav'>
                    <li><span>Unanswered Questions</span></li>
                    <li><span>Answered Questions</span></li>
                </ul>
                {/* Question items here */}
            </div>
        )
    }
}

export default Dashboard