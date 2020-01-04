import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import { CounterContextProvider } from './examples/Counter';
import { PostContextProvider } from './examples/Posts';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CounterContextProvider>
          <PostContextProvider>
            <Layout />
          </PostContextProvider>
        </CounterContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
