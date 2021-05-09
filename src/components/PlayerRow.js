import React from "react";

const PlayerRow = ({ rank, name, points }) => {
  return (
    <div className="row playerRow">
      <div>{rank}</div>
      <div>{name}</div>
      <div>{points}</div>
    </div>
  );
};

export default PlayerRow;
