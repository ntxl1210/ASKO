import NavbarItem from '../NavbarItem';

import { navbar } from '../../../../utils';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={classes.container}>
      {navbar.map(item => (
        <NavbarItem key={item} data={item} />
      ))}
    </div>
  );
}
