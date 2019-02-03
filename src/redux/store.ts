import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2,
//   whitelist: ['auth']
// }

const sagaMiddleware = createSagaMiddleware()

function configureStore (reducer) {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)

  return store
}

// const pReducer = persistReducer(persistConfig, rootReducer)
// export const store = configureStore(pReducer)
export const store = configureStore(rootReducer)
// export const persistor = persistStore(store)
