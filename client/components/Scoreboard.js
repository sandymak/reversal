import React from 'react';

const Scoreboard = (props) => {
  let currentScore = props.currentScore;
  return (
    <div className="score">
      <h3>{`Score: ${currentScore}`}</h3>
    </div>
  )
};

export default Scoreboard
