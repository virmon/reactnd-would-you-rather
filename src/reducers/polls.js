import { RECEIVE_POLLS, ADD_POLL, ANSWER_POLL } from '../actions/polls'

export default function polls (state = {}, action) {
    switch(action.type) {
        case RECEIVE_POLLS :
            return {
                ...state,
                ...action.polls
            }
        case ADD_POLL :
            return {
                ...state,
                [action.poll.id]: action.poll
            }
        case ANSWER_POLL :
            const { poll } = action

            return {
                ...state,
                [action.poll.qid]: {
                    ...state[action.poll.qid],
                    [poll.answer]: {
                        ...state[poll.qid][poll.answer],
                        votes: state[poll.qid][poll.answer].votes.concat([poll.authedUser])
                    }
                }
            }
        default :
            return state
    }
} 