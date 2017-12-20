export const createBlankMatrix = (rows, columns) => {
  const rowsArr = new Array(rows).fill(0);
  const columnsArr = new Array(columns).fill(0);

  return rowsArr.map((row, rowIndex) => columnsArr.map((col, colIndex) => {
    const width = 100;
    const height = 100;
    const x = colIndex * width;
    const y = rowIndex * height;

    return {
      x, y, width, height, click: 0,
    };
  }));
};

export default {
  createBlankMatrix,
};
