
import {combineReducers} from 'redux'
import {curiReducer as location} from '@curi/redux'

import {reducer as titles} from 'state/reducers/titles'

export const reducers = combineReducers({
  location,
  titles
})
