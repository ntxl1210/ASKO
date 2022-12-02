import LeftHeader from './Components/LeftHeader';
import RightHeader from './Components/RightHeader';

import classes from './Header.module.css';

export default function Header() {
  return (
    <div className={classes.container}>
      <LeftHeader />
      <RightHeader />
    </div>
  );
}
