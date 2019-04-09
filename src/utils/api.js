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

export function saveQuestion (info) {
    return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}