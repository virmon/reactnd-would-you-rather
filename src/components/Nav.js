import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
    console.log(props)
    function logout () {
        props.handleLogout()
    }
    return (
        <nav className='nav'>
            <ul>
                <li className='nav-item'>
                    <NavLink to='/home' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/create' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li className='nav-item account'>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                {
                    props.authedUser 
                        ?   <Fragment>
                                <li className=''>
                                    Hello, {props.user.name}
                                </li>
                                <li>
                                    <img src={props.user.avatarURL} alt={props.authedUser} className='avatar' style={{width:'25px',height:'25px'}} />
                                </li>
                                <li className='nav-item' onClick={logout}>
                                    <NavLink to='/' activeClassName='active'>
                                        Logout
                                    </NavLink>
                                </li>
                            </Fragment>
                            
                        : null
                }
            </ul>
        </nav>
    )
}