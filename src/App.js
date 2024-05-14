import logo from './logo.svg';
import './App.css';
import React from 'react';

import HomeTab from './tabs/HomeTab';
import HumanTab from './tabs/HumanTab';



function App() {

  const [tab, setTab] = React.useState("Home")

  return (
    <div className="App">
      <div className="site-header">
        <h2 className={`${tab === 'Home' ? 'selectedTab' : ''}`} onClick={() => setTab("Home")}>Home</h2>
        <h2 className={`${tab === 'Humans' ? 'selectedTab' : ''}`} onClick={() => setTab("Humans")}>Staff</h2>
        <a href="https://www.linkedin.com/in/sunny0/"><img id="linked-in-logo" src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Squircle-Dark.png"></img></a>
      </div>

      <div className="site-content">
        
        <div className={`${tab === 'Home' ? '' : 'hiddenTab'}`}>
          <HomeTab ></HomeTab>
        </div>

        <div className={`${tab === 'Humans' ? '' : 'hiddenTab'}`}>
          <HumanTab ></HumanTab>
        </div>
        
        

      </div>
    </div>
  );
}

export default App;
