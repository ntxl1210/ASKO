import Navbar from '../Navbar';

import classes from './LeftHeader.module.css';
import Logo from '../../../../assets/Logo.png';

export default function LeftHeader() {
  return (
    <div className={classes.container}>
      <img src={Logo} alt="logo" />
      <Navbar />
    </div>
  );
}
