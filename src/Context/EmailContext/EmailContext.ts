//Data context
import createDataContext from '../CreateDataContext/createDataContext';

//Reducers
const emailReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return {state: {email: action.payload}};
    case 'RM_EMAIL':
      return {state: {}};
  }
};

//Helper functions
const setEmail = dispatch => {
  return payload => {
    dispatch({type: 'SET_EMAIL', payload});
  };
};

const removeEmail = dispatch => {
  return () => {
    dispatch({type: 'RM_EMAIL'});
  };
};

//Call to create context
export const {Context, Provider} = createDataContext(
  emailReducer,
  {setEmail, removeEmail},
  {state: {}},
);
