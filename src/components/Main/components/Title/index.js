import classes from './Title.module.css';
import addIcon from '../../../../assets/Add-user.png';

export default function Title() {
  return (
    <div className={classes.container}>
      <div className={classes.leftTitle}>
        <span className={classes.title}>List of doctors</span>
        <span className={classes.subtitle}>345 available doctors</span>
      </div>
      <div>
        <button className={classes.addBtn}>
          <img src={addIcon} alt="add icon" />
          Add new doctor
        </button>
      </div>
    </div>
  );
}
