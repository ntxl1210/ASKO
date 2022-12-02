import Header from '../Header';
import Main from '../Main';
import SubHeader from '../SubHeader';

import classes from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={classes.container}>
      <Header />
      <SubHeader />
      <Main />
    </div>
  );
}
