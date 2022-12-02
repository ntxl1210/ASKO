import TableRowItem from '../TableRowItem';

export default function TableRow({ columns, data }) {
  return (
    <>
      {data.map((item, index) => (
        <TableRowItem
          key={`table-body-${index}`}
          columns={columns}
          item={item}
        />
      ))}
    </>
  );
}
