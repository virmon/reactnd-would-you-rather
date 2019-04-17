import React from 'react'

const User = ({ name, avatarURL, answerCount, questionCount }) => {
    return (
        <div className='poll'>
            {/* <div className='leaderboard-medal' style={{backgroundColor: medal}}></div> */}
            <div className='poll-content'>
                <img src={avatarURL} alt={name} className='avatar'/>
                <div className='poll-text'>
                    <h3 style={{margin:'10px', padding:'10px'}}>{name}</h3>
                    <p>Answered questions: {answerCount}</p>
                    <p>Created questions: {questionCount}</p>
                    <div className='total-score'>
                        Total: {answerCount + questionCount}
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default User