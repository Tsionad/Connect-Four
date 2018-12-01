import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';


export default class Board extends React.Component {

  render() {

    let {
      rows,
      winPositions,
      onClick
    } = this.props;

    let boardRows = rows.map((positions, i) => (
      <Row
        key={i}
        index={i}
        positions={positions}
        winPositions={winPositions}
        onClick={onClick}
      />
    ));

    return (
      <div className="board">
        {boardRows}
      </div>
    );
  }
}

Board.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  winPositions: PropTypes.arrayOf(PropTypes.shape({
    row: PropTypes.number,
    column: PropTypes.number
  })),
  onClick: PropTypes.func
};
