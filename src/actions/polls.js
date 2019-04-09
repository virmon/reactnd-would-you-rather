import { savePoll } from '../utils/api'

export const RECEIVE_POLL = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ANSWER_POLL = 'ANSWER_POLL'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function addPoll (poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

export function handleAddPoll (poll) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        savePoll({
            poll,
            author: authedUser
        })
            .then((poll) => dispatch(addPoll(poll)))
    }
}

export function answerPoll ({ id, authedUser, answer }) {
    return {
        type: ANSWER_POLL,
        id,
        authedUser,
        answer
    }
}