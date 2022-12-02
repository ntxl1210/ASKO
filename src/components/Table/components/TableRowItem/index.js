import TableRowCell from '../TableRowCell';

import classes from './TableRowItem.module.css';

export default function TableRowItem({ columns, item }) {
  return (
    <tr className={classes.rowItem}>
      {columns.map((column, index) => (
        <TableRowCell
          key={`table-row-cell-${index}`}
          item={item}
          column={column}
        />
      ))}
    </tr>
  );
}
