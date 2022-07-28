import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
function App() {
  return (
    <div className="App">
      <input type="checkbox" name='' id='sidebar-toggle' />

      <Sidebar />
      <Main />      
    </div>
  );
}

export default App;

// https://icons8.com/line-awesome/howto