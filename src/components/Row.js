import React from 'react';
import PropTypes from 'prop-types';
import Position from './Position';


export default class Row extends React.Component {

  render() {

    let {
      index,
      positions,
      winPositions,
      onClick
    } = this.props;

    let row = positions.map((value, i) => (
      <Position
        key={index-i}
        rowIndex={index}
        colIndex={i}
        value={value}
        winPositions={winPositions}
        onClick={onClick}
      />
    ));

    return (
      <div className="row">
        {row}
      </div>
    );
  }
}

Row.propTypes = {
  index: PropTypes.number,
  positions: PropTypes.arrayOf(PropTypes.number),
  winPositions: PropTypes.arrayOf(PropTypes.shape({
    row: PropTypes.number,
    column: PropTypes.number
  })),
  onClick: PropTypes.func
}

