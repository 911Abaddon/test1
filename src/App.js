import React from 'react';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Homepage from './pages/Homepage'; // Import the Homepage component

function App() {
  return (
    <div className="App">
      <Background />
      <NavigationBar />
      <Homepage /> {/* Render the Homepage component */}
    </div>
  );
}

export default App;
