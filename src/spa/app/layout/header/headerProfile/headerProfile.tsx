import * as React from 'react';
import Icon from 'icon/icon';
import PopOver from 'popOver/popOver';
import { PopOverCallback } from 'types/modalTypes';
import HeaderProfileContent from './headerProfileContent';
import * as styles from './headerProfile.module.less';

const HeaderProfile: React.FC = () => {
  const [hidePopOver, setHidePopOver] = React.useState<PopOverCallback['hidePopOver']>(null);

  const handleCallback = (props: PopOverCallback): void => {
    if (!hidePopOver) {
      setHidePopOver(props.hidePopOver);
    }
  };

  return (
    <PopOver
      Content={<HeaderProfileContent hidePopOver={hidePopOver} />}
      callback={handleCallback}
      placement="bottom-right"
    >
      <div className={styles.div}>
        {/* <Icon iconName="avatar" size={40} /> */}
      </div>
    </PopOver>
  );
};

export default HeaderProfile;
