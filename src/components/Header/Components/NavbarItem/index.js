import classes from './NavbarItem.module.css';

export default function NavbarItem({ data }) {
  return <span className={classes.container}>{data}</span>;
}
