import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { LOGOUT_USER_QUERY } from 'schema/user';
import { PopOverCallback } from 'types/modalTypes';
import { useAuthenticationContext } from 'context/authenticationContext/authenticationContext';
import * as styles from './headerProfile.module.less';

interface Props {
  hidePopOver: PopOverCallback['hidePopOver'];
}

const HeaderProfileContent: React.FC<Props> = ({ hidePopOver }) => {
  const [LogoutUserQuery] = useLazyQuery(LOGOUT_USER_QUERY);
  const { setAuthenticationStatus } = useAuthenticationContext();

  const handleClick = async (): Promise<void> => {
    await LogoutUserQuery();
    setAuthenticationStatus(false);
  };

  const AboutIconContent: React.FC = () => <Icon color="blue" iconName="about" size={18} />;
  const LogoutIconContent: React.FC = () => <Icon color="blue" iconName="logout" size={18} />;

  return (
    <ul className={styles.ul}>
      <li>
        <Typography
          Content={LogoutIconContent}
          onClick={handleClick}
          size="three"
          text="Logout"
        />
      </li>
      <li>
        <Typography
          Content={AboutIconContent}
          link="about"
          size="three"
          text="About MyBord"
          onClick={hidePopOver}
        />
      </li>
    </ul>
  );
};

export default HeaderProfileContent;