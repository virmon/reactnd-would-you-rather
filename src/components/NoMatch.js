import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = ({ authedUser }) => {
    if (!authedUser) {
        return (
            <div>
                <h1>You are not signed in.</h1>
                <p><Link to='/'>Go to sign in</Link></p>
            </div>
        )
    }
    return (
        <h1>404 Not Found <br/> Page  not found.</h1>
    )
}

export default NoMatch