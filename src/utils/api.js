import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA'

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getTweets(),
    ]).then(([users, polls]) => ({
        users,
        polls,
    }))
}

export function savePoll (info) {
    return _saveQuestion(info)
}

export function savePollAnswer (info) {
    return _saveQuestionAnswer(info)
}