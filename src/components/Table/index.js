import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';

export default function Table({ columns, data, height, width }) {
  return (
    <div style={{ overflow: 'auto', height: height, width: width || '100%' }}>
      <table>
        <thead>
          <TableHeader columns={columns} />
        </thead>
        <tbody>
          <TableRow columns={columns} data={data} />
        </tbody>
      </table>
    </div>
  );
}
