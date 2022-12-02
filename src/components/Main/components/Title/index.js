import classes from './Title.module.css';

export default function Title() {
  return (
    <div className={classes.container}>
      <div className={classes.leftTitle}>
        <span>List of doctors</span>
        <span>345 available doctors</span>
      </div>
      <div>
        <button>Add new doctor</button>
      </div>
    </div>
  );
}
