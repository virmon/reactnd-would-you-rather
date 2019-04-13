import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
    function logout () {
        props.handleLogout()
    }
    return (
        <nav className='nav'>
            <ul>
                <li className='nav-item'>
                    <NavLink to='/home/unanswered' activeStyle={{color:'#42A5F5'}}>
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/create' activeStyle={{color:'#42A5F5'}}>
                        New Question
                    </NavLink>
                </li>
                <li className='nav-item account'>
                    <NavLink to='/leaderboard' activeStyle={{color:'#42A5F5'}}>
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