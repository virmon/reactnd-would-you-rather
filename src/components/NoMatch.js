import React from 'react'

const NoMatch = ({location}) => {
    return (
        <h1>404 Not Found <br/> Page <code>{location.pathname}</code> not found.</h1>
    )
}

export default NoMatch