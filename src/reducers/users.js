import { RECEIVE_USERS, SAVE_ANSWERED_POLL } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case SAVE_ANSWERED_POLL :
            const { poll } = action
            
            return {
                ...state,
                [poll.authedUser]: {
                    ...state[poll.authedUser],
                    answers: {
                        ...state[poll.authedUser].answers,
                        [poll.qid]: poll.answer
                    }
                }
            }
        default :
            return state
    }
} 