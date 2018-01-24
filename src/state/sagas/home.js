
import {call, put} from 'redux-saga/effects'
import axios from 'axios'

import {hydrateTitles} from 'actions'

// @NOTE In a larger application a generic API function would be in utils, pulled in with an ENV
// for URLS, and leveraged in more than one saga depending on our needs. In this case due to the
// simplicity of the call and needs for the application we'll keep everything here.
const API_URL = 'https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7'
const HEADER_KEY = 'ws-api'
const HEADER_VALUE = '2.1'

const getTitles = () => axios.get(API_URL, {
  headers: {
    [HEADER_KEY]: HEADER_VALUE
  }
})

export function * init () {
  yield console.log('Home Data is Loaded')
  const {data} = yield call(getTitles)
  yield put(hydrateTitles(data))
  yield console.log(data)
}
