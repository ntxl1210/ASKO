import classes from './TableRowCell.module.css';

export default function TableRowCell({ column, item }) {
  return (
    <td className={classes.rowCell}>
      {column?.render ? column.render(column, item) : item[column.key]}
    </td>
  );
}
