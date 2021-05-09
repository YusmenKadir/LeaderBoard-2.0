import React from "react";

const ColumnHeader = ({ onPointsClickHandler, onHashClickHandler }) => {
  return (
    <div className="row colHeader">
      <div onClick={() => onHashClickHandler()}>#</div>
      <div>Name</div>
      <div onClick={() => onPointsClickHandler()}>Points</div>
    </div>
  );
};

export default ColumnHeader;
