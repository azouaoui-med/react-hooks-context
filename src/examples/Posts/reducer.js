import { FETCH_POSTS } from './constants';

export const initialState = {
  posts: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
