import { getInitialData, savePollAnswer } from '../utils/api'
import { receivePolls, answerPoll } from './polls'
import { receiveUsers, saveAnsweredPoll } from './users'
// import { setAuthedUser } from './authedUser';

// const AUTHED_ID = 'sarahedo'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({polls, users}) => {
                // dispatch(setAuthedUser(AUTHED_ID))
                dispatch(receiveUsers(users))
                dispatch(receivePolls(polls))
            })
    }
}

export function handleAnswerPoll (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        console.log(authedUser, qid, answer)
        savePollAnswer({
            authedUser,
            qid,
            answer
        })
            .then(() => {
                dispatch(answerPoll({authedUser, qid, answer}))
                dispatch(saveAnsweredPoll({authedUser, qid, answer}))
            })
    }
}