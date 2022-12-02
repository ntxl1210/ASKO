import Table from '../Table';
import Title from './components/Title';

import { columns, data } from '../../utils';
import classes from './Main.module.css';

export default function Main() {
  return (
    <div className={classes.container}>
      <Title />
      <Table columns={columns} data={data} />
    </div>
  );
}
