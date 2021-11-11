
import React from 'react';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from './redux';
import Container from './components/Container';

const App = () => {

  const {store} = createStore();

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Container/>
      </BrowserRouter>
    </ReduxProvider>
  )
}

export default App;