//Reducer constants
import {SET_USER, LOG_OUT} from './Constants/constants';
//Data context
import createDataContext from '../CreateDataContext/createDataContext';

//Reducers
const userReducer = (state: unknown, action) => {
  switch (action.type) {
    case SET_USER:
      return {state: {user: action.payload}};
    case LOG_OUT:
      return {state: {}};
    default:
      return state;
  }
};

//Helper functions login new user
const setUser = dispatch => {
  return payload => {
    dispatch({type: SET_USER, payload});
  };
};

//Helper functions log out user
const logOut = dispatch => {
  return () => {
    dispatch({type: LOG_OUT});
  };
};

//Call to create context and export the context and provider
export const {Context, Provider} = createDataContext(
  userReducer,
  {setUser, logOut},
  {state: {}},
);
