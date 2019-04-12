import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class SignIn extends Component {
    state = {
        toHome: false
    }
    handleSignIn (e) {
        e.preventDefault();

        const authedId = this.refs.user.value;

        if (authedId) {
            this.props.dispatch(setAuthedUser(authedId));
            this.setState({
                toHome: true
            })
        }
    }
    render () {
        if (this.state.toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <div className='sign-in'>
                <h3 style={{margin:'10px auto 100px', textAlign:'center'}}>Sign In</h3>
                <select ref='user' className='option'>
                    {
                        this.props.userIds.map((id) => (
                            <option key={id} value={id}>
                                {this.props.users[id].name}
                            </option>
                        ))
                    }
                </select>
                <button className='btn' onClick={(e) => this.handleSignIn(e)}>Sign in</button>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users,
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(SignIn)