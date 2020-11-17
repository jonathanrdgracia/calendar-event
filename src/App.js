import React from 'react';

import './App.css';
import CalendarScreen from './components/calendar/CalendarScreen';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { index } from './store';

function App() {
  return (
    <div className="App">
    
     <Provider store={index}>
      <AppRouter/>
     </Provider>
    </div>
  );
}

export default App;
