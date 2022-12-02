import TableHeaderCell from '../TableHeaderCell';

export default function TableHeader({ columns }) {
  return (
    <tr>
      {columns.map((column, index) => (
        <TableHeaderCell
          key={`table-head-cell-${column?.key ?? index}`}
          style={{ width: column.width }}>
          {column.title}
        </TableHeaderCell>
      ))}
    </tr>
  );
}
