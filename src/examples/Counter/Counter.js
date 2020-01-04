import React, { useContext } from 'react';
import { Typography, Button } from 'antd';
import { incrementCounter, decrementCounter, resetCounter } from './actions';
import { CounterContext } from './context';

const { Title } = Typography;
const Counter = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 5
  };
  const buttonStyle = {
    margin: 5
  };

  const { counter, dispatch } = useContext(CounterContext);

  const handleIncrementClick = () => {
    dispatch(incrementCounter());
  };

  const handleDecrementClick = () => {
    dispatch(decrementCounter());
  };

  const handleResetClick = () => {
    dispatch(resetCounter());
  };

  return (
    <div
      style={{
        ...styles,
        flexDirection: 'column'
      }}
    >
      <div style={styles}>
        <Title level={4}>
          A simple counter example using react hooks and context api
        </Title>
      </div>
      <div style={styles}>
        <Title level={1}>{counter}</Title>
      </div>
      <div style={styles}>
        <Button
          type='primary'
          style={buttonStyle}
          onClick={handleIncrementClick}
        >
          Increment
        </Button>
        <Button
          type='primary'
          style={buttonStyle}
          onClick={handleDecrementClick}
        >
          Decrement
        </Button>
        <Button type='default' style={buttonStyle} onClick={handleResetClick}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
