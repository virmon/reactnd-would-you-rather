import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
    console.log(props)
    return (
        <nav className='nav'>
            <ul>
            <NavLink to='/' exact activeClassName='active'><li>
                    
                        Home
                    
                </li></NavLink>
                <li>
                    <NavLink to='/create' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li className='account'>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li>
                    Hello, {props.authedUser}
                </li>
                <li>
                    <NavLink to='/signin' activeClassName='active'>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}