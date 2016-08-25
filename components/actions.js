'use strict';

function addColumn () {
  const updatedTable = this.state.table
    .map(row => [...row, '']);

  this.setState({
    table: updatedTable
  });
}

function addRow () {
  this.setState({
    table: [
      ...this.state.table,
      this.state.table[0].map(() => '')
    ]
  });
}

function changeCell (rowIndex, columnIndex, cellValue) {
  this.setState({
    table: this.state.table.map((row, index) => {
      if (index === rowIndex) {
        row[columnIndex] = cellValue;
      }

      return row;
    })
  });
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  });
}

function blurCell () {
  this.setState({
    focused: null
  });
}

function removeRow () {
  if (this.state.table.length > 1) {
    const updatedTable = this.state.table
      .slice(0, -1);

    this.setState({
      table: updatedTable
    })
  }
}

function removeColumn () {
  if (this.state.table[0].length > 1) {
    const updatedTable = this.state.table
      .map(row => row.slice(0, -1));

    this.setState({
      table: updatedTable
    })
  }
}

module.exports = {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
