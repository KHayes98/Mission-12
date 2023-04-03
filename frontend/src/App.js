import React from 'react';
import './App.css';
import Heading from './components/Heading';
import TeamCardList from './components/TeamCardList';
import teamsData from './teams.json';

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamCardList teams={teamsData.teams} />
    </div>
  );
}

export default App;