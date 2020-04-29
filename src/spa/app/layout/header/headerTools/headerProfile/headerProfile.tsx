import * as React from 'react';
import Icon from 'icons/icon/icon';
import Popover from 'shared/modals/popover/popover';
import profilePhoto from 'assets/profilePhoto.jpg';
import HeaderProfilePopoverContent from './headerProfilePopoverContent';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => (
  <Popover
    content={<HeaderProfilePopoverContent />}
    hideTip
    overlayClassName={styles.popover}
    placement="bottomLeft"
    title="Profile Settings"
  >
    <div className={styles.div}>
      <img alt="profile img" className={styles.img} src={profilePhoto} />
      <Icon iconName="downArrow" size={10} />
    </div>
  </Popover>
);

export default HeaderProfile;