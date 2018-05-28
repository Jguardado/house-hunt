import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux/root-reducer';

const middleWare = [
  thunkMiddleware
];

const initialState = {
  recentSearches: {},
  savedHomes: {},
  preference: {},
  user: {}
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(
//   rootReducer,
//   initialState,
//   composeEnhancer(
//     applyMiddleware(thunkMiddleware)
//   )
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(
    applyMiddleware(thunkMiddleware)
  )
);


export default store;
