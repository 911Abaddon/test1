import React from 'react';
import NavigationBar from './components/NavigationBar'; // Adjust the path as necessary
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <NavigationBar />
      {/* Other components or content */}
    </div>
  );
}

export default App;
