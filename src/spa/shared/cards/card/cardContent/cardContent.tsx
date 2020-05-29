import * as React from 'react';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import LikeButton from 'buttons/likeButton/likeButton';
import * as styles from './cardContent.module.less';

interface Props {
  Content: React.FC;
  isLiked: boolean;
  setIsLiked: () => void;
}

const CardContent: React.FC<Props> = ({
  Content,
  isLiked,
  setIsLiked,
}) => (
  <div className={styles.container}>
    <div className={styles.buttonsContainer}>
      <LikeButton
        isLiked={isLiked}
        onClick={setIsLiked}
        size={25}
      />
      <CardMenuButton onClick={() => console.log('foo')} />
    </div>
    <Content />
  </div>
);

export default CardContent;
