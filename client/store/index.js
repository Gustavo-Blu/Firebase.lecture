import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import AllPokemon from './allPokemon'

const reducer = combineReducers({ AllPokemon })
const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collasped: true }))
)

const store = createStore(reducer, middleware);

export default store;
