import logo from './logo.svg';
import './App.css';
import React from 'react';

import HomeTab from './tabs/HomeTab';
import HumanTab from './tabs/HumanTab';



function App() {

  const [tab, setTab] = React.useState("Home")

  return (
    <div className="App">
      <img id="siege-logo" src="https://i.imgur.com/4pkTPT9.jpeg"></img>
      <div className="site-header">
        
        <h2 className={`${tab === 'Home' ? 'selectedTab' : 'tab'}`} onClick={() => setTab("Home")}>Home</h2>
        <h2 className={`${tab === 'Humans' ? 'selectedTab' : 'tab'}`} onClick={() => setTab("Humans")}>Staff</h2>
        <a href="https://www.linkedin.com/groups/14490201"><img id="linked-in-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"></img></a>
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
