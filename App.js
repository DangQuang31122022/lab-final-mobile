import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ToDoScreen from './TodoScreen';

export default function App() {
  return (
    <Provider store={store}>
      <ToDoScreen />
    </Provider>
  );
}