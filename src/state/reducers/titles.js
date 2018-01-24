
import {map} from 'redux-data-structures'

import {HYDRATED_TITLES} from 'types'

// Hydrate our store with repos from a pull. Destructive action, wipes out existing state.
const hydrateTitles = (titles) => ({
  byId: titles.reduce((byId, title) => Object.assign({}, byId, {[title.titleId]: title}), {}),
  allIds: titles.map(title => title.titleId)
})

// redux-data-structures handles most use-cases for adding and removing items well, but
// has no concept of a hydrate action that setups an entire store in one go. Here we
// extend the reducer to allow for that.
export const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATED_TITLES:
      return hydrateTitles(action.payload)
    default:
      return map({
        keyGetter: action => action.payload.titleId
      })(state, action)
  }
}
