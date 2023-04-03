import React from 'react';
import TeamCard from './TeamCard';

function TeamCardList({ teams }) {
  return (
    <div className="TeamCardList">
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

export default TeamCardList;