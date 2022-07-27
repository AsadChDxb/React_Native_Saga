import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {REQUEST_API_DATA,recieve_Api_Data} from '../Actions';

import {fetchData} from '../APIS/api';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
   try {
      const data = yield call(fetchData);
      yield put(recieve_Api_Data(data));
   } catch (e) {
      console.log(`err in getApiData ${e}`);
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}