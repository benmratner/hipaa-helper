import { combineReducers } from 'redux'
import { reducers as pageReducers } from '#/actions/pages'

export default combineReducers({
    ...pageReducers
})