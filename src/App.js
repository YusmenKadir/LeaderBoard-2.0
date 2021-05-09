import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import ColumnHeader from "./components/ColumnHeader";
import PlayerRow from "./components/PlayerRow";

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("leaderboard.json")
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.players);
      })
      .catch((err) => console.log(err));
  }, []);

  const onPointsClickHandler = useCallback(() => {
    fetch("leaderboard.json")
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.players.sort((a, b) => b.points - a.points));
      })
      .catch((err) => console.log(err));
  }, []);

  const onHashClickHandler = useCallback(() => {
    fetch("leaderboard.json")
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.players.sort((a, b) => a.points - b.points));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="topLevel">
      <div className="mainHeader">Leaderboard</div>
      <ColumnHeader
        onPointsClickHandler={onPointsClickHandler}
        onHashClickHandler={onHashClickHandler}
      />
      {players?.map((player, i) => (
        <PlayerRow
          key={player.points}
          rank={i + 1}
          name={player.name}
          points={player.points}
        />
      ))}
      <h2>*Note*</h2>
      <p>Initially players are ordered in a messy format</p>
      <p>Click on Points to sort players in descending order</p>
      <p>Click on # to sort players in back in ascending order</p>
    </div>
  );
};

export default App;
