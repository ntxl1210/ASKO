import blocks from '../../../../assets/Layout-4-blocks.png';
import equalizer from '../../../../assets/Equalizer.png';
import groupChat from '../../../../assets/Group-chat.png';
import classes from './RightHeader.module.css';

export default function RightHeader() {
  return (
    <div className={classes.container}>
      <img src={blocks} alt="blocks" />
      <img src={equalizer} alt="equalizer" />
      <img src={groupChat} alt="groupChat" />
      <div className={classes.info}>
        <span className={classes.name}>Marvin abdfs</span>
        <span className={classes.role}>admin</span>
      </div>
      <span className={classes.avatar}>M</span>
    </div>
  );
}
