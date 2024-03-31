// App.js
import React from 'react';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import HomePage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Background />
      <NavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
