import * as React from 'react';
import { Alert as AntAlert } from 'antd';
import AlertAnimation from 'framerMotion/alertAnimation';
import Icon from 'icons/icon/icon';
import * as styles from './alert.module.less';
import './alert.less';

interface Props {
  message: string;
  showAlert: boolean;
}

const Alert: React.FC<Props> = ({ message, showAlert }) => (
  <AlertAnimation showAlert={showAlert}>
    <AntAlert
      className={styles.alert}
      message={message}
      icon={(
        <Icon
          color="orange"
          iconName="warning"
          size={16}
          strokeWidth={4.5}
        />
      )}
      showIcon
      type="warning"
    />
  </AlertAnimation>
);

export default Alert;
