import React from 'react';

const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>{team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
};

export default TeamCard;