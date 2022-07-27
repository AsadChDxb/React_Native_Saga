import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './src/container/reducers'
import mySaga from './src/container/sagas'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Mount it on the Store
export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// Then run the saga
sagaMiddleware.run(mySaga)