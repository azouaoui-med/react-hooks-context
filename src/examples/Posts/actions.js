import { FETCH_POSTS } from './constants';

export function fetchPosts(posts) {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
}
