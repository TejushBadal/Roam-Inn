import React from 'react';
import logo from './logo.svg';
import './styling/App.css';
import Sidebar from './components/testComponent.tsx'; // Adjust the path based on where Sidebar.tsx is located

function App() {
  return (
    <div className="App">
      <Sidebar /> {/* Sidebar Component */}
      <div className="App-content"> {/* Adjust layout for content next to sidebar */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
