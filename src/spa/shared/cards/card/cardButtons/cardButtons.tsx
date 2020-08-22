import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import CardContentButtonsAnimation from 'framerMotion/cardContentButtonsAnimation';
import CardMenuButton from 'buttons/cardMenuButton/cardMenuButton';
import FavoriteButton from 'buttons/favoriteButton/favoriteButton';
import { TOGGLE_CARD_FILTER } from 'context/dashboardCardsContext/dashboardCardsReducerTypes';
import { TOGGLE_FAVORITE_USER_CARD_MUTATION, UserCard } from 'schema/card';
import { useDashboardCardsContext } from 'context/dashboardCardsContext/dashboardCardsContext';
import { useMultiSelectCardContext } from 'context/multiSelectCardContext/multiSelectCardContext';

interface Props {
  userCard: UserCard;
}

const CardButtons: React.FC<Props> = ({ userCard }) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(userCard.isFavorite);
  const [toggleFavoriteUserCard] = useMutation(TOGGLE_FAVORITE_USER_CARD_MUTATION);
  const { activeCard, canMultiEdit } = useMultiSelectCardContext();
  const { dispatch } = useDashboardCardsContext();

  const handleFavorite = async (): Promise<void> => {
    setIsFavorite((prevState) => !prevState);
    dispatch({ type: TOGGLE_CARD_FILTER, filter: 'favorite', id: userCard.id });
    await toggleFavoriteUserCard({
      variables: {
        cardId: userCard.id,
      },
    });
  };

  const showButtons = !canMultiEdit && activeCard.id !== userCard.id;

  return (
    <CardContentButtonsAnimation showButtons={showButtons}>
      <FavoriteButton
        isFavorite={isFavorite}
        onClick={handleFavorite}
        size={25}
      />
      <CardMenuButton userCard={userCard} />
    </CardContentButtonsAnimation>
  );
};

export default CardButtons;