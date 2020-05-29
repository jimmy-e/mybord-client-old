import * as React from 'react';
import Icon from 'icons/icon/icon';
import * as styles from './cardFooter.module.less';

const CardFooter: React.FC = () => (
  <div className={styles.container}>
    <hr className={styles.hr} />
    <div>
      <Icon iconName="heart" size={16} />
      <Icon iconName="star" size={16} />
    </div>
  </div>
);

export default CardFooter;