import React from 'react';

const Scoreboard = (props) => {
  let currentScore = props.currentScore;
  return (
    <div className="score">
      <div>{` Score: ${currentScore}`}</div>
    </div>
  )
};

export default Scoreboard
