import { combineReducers, legacy_createStore as createStore } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'

const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* 

Пакет redux-devtools устарел. Теперь нужно просто установить расширение в браузере, а стору обозначить как 
const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

*/


/* 

const devToolRedux = window._REDUX_DEVTOOLS_EXTENSION_ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
const store = createStore(
	rootReducer,
	devToolRedux
)

*/

/* 

export default createStore(combineReducers(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

*/


/* 

const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
})

export const store = createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__());

*/


/* 

const rootReducer = {
	cash: cashReducer,
	customers: customerReducer,
}

export const store = createStore(combineReducers(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

*/