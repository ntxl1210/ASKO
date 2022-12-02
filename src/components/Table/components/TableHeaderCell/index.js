import classes from './TableHeaderCell.module.css';

export default function TableHeaderCell({ children, style }) {
  return (
    <th className={classes.headerCell} style={style}>
      {children}
    </th>
  );
}
