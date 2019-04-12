export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWERED_POLL = 'SAVE_ANSWERED_POLL'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function saveAnsweredPoll (poll) {
    return {
        type: SAVE_ANSWERED_POLL,
        poll
    }
}