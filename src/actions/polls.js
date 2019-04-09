export const RECEIVE_POLL = 'RECEIVE_POLLS'

export function receivePolls (poll) {
    return {
        type: RECEIVE_POLLS,
        poll
    }
}
