import React, { useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Homepage from './pages/Homepage';
import useExternalScript from './utils/useExternalScript'; // Import the useExternalScript hook

function App() {
  // Call the useExternalScript hook directly inside the App component
  useExternalScript('https://olympianstorage.blob.core.windows.net/olympian-container/loader.js');

  return (
    <div className="App">
      <Background />
      <NavigationBar />
      <Homepage />
    </div>
  );
}

export default App;
