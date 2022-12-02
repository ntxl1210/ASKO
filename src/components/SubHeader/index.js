import classes from './SubHeader.module.css';
import { subHeader } from '../../utils';
import Dots from '../../assets/Dots.png';

export default function SubHeader() {
  return (
    <div className={classes.container}>
      {subHeader.map(item => (
        <span key={item} className={classes.subHeaderItem}>
          {item === 'more' ? <img src={Dots} alt={item} /> : item}
        </span>
      ))}
    </div>
  );
}
