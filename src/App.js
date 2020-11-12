import React from 'react';

import './App.css';
import CalendarScreen from './components/calendar/CalendarScreen';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
    
      <AppRouter/>
    </div>
  );
}

export default App;
