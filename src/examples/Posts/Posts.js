import React, { useEffect, useContext } from 'react';
import { Card, Typography, Divider } from 'antd';
import { fetchPosts } from './actions';
import { PostContext } from './context';
import { getPosts } from './services';

const { Title } = Typography;

const Posts = () => {
  const { post, dispatch } = useContext(PostContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPosts();
        dispatch(fetchPosts(response.data));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div>
        <Title level={4}>
          This example uses react hooks and context api to fetch a list of posts
          from a fake api
        </Title>
      </div>
      <Divider />
      <div>
        {post.posts.map(post => (
          <Card style={{ margin: 5 }} key={post.id}>
            <Title level={4}> {post.title}</Title>
            <p> {post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Posts;
