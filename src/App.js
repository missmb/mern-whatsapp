import React from 'react';
import './App.css';
import Chat from './component/Chat';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app_body">
      {/* Sidebar */}
      <Sidebar/>
      {/* Chat Component */}
      <Chat/>
      </div>
    </div>
  );
}

export default App;
