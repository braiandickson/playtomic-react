import { RootStateOrAny } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware, AnyAction } from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({});
const middlewares = [thunk];
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));

const rootReducer = (state: RootStateOrAny, action: AnyAction) => {
    if (action.type === '@@INIT') {
      return reducers(undefined, action);
    }
  
    // if (action.type === authActions.LOGOUT) {
    //   return reducers(undefined, action);
    // }
  
    return reducers(state, action);
  };

let store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;