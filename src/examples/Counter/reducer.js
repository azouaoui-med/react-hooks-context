import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER
} from './constants';

export const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state === 0 ? 0 : state - 1;

    case RESET_COUNTER:
      return 0;

    default:
      return state;
  }
};

export default reducer;
