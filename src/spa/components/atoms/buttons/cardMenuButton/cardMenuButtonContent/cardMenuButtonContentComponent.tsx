// *1: adding an `onClick` turns this into a typography button, which enforces our intended styling

import * as React from 'react';
import Checkbox from 'inputs/checkbox/checkbox';
import Icon from 'icon/icon';
import PopConfirm from 'molecules/popConfirm/popConfirm';
import Toggle from 'inputs/toggle/toggle';
import Typography from 'typography/typography';
import * as styles from './cardMenuButtonContent.module.less';

interface Props {
  handleDelete: () => void;
  isToDo: boolean;
  toggleToDo: () => void;
}

const CardMenuButtonContentComponent: React.FC<Props> = ({
  handleDelete,
  isToDo,
  toggleToDo,
}) => {
  const DeleteIconContent: React.FC = () => (
    <div className={styles.contentDiv}>
      <Icon
        color="blue"
        fill="blue"
        iconName="delete"
        size={16}
      />
    </div>
  );

  const ToDoCheckboxContent: React.FC = () => (
    <div className={styles.contentDiv}>
      <Checkbox checked={isToDo} />
    </div>
  );

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Typography
          Content={ToDoCheckboxContent}
          onClick={toggleToDo}
          size="two"
          text="to do"
        />
      </li>
      <li className={styles.li}>
        <PopConfirm
          onConfirm={handleDelete}
          onMouseDown={() => console.log('pop confirm has been clicked')}
          text="Are you sure you want to delete?"
        >
          <Typography
            Content={DeleteIconContent}
            onClick={() => {}} // *1
            size="two"
            text="delete"
          />
        </PopConfirm>
      </li>
    </ul>
  );
};

export default CardMenuButtonContentComponent;
