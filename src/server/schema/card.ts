import gql from 'graphql-tag';
import { YoutubeVideoData } from 'types/youtubeTypes';

// ----- MUTATIONS ----- //

export const CREATE_YOUTUBE_CARD = gql`
  mutation createYoutubeCard($videoUrl: String!) {
    createYoutubeCard(data: {videoUrl: $videoUrl}) {
      id
      type
      cardData{
        youtubeCardData{
          channelThumbnail
          channelTitle
          duration
          likes
          publishedAt
          videoId
          videoThumbnail
          videoTitle
          views
        }
      }
    }
  }
`;

export const DELETE_USER_CARD = gql`
  mutation deleteUserCard($cardId: String!) {
    deleteUserCard(data: {cardId: $cardId}) {
      id
    }
  }
`;

export const TOGGLE_FAVORITE_USER_CARD = gql`
  mutation toggleFavoriteUserCard($cardId: String!) {
    toggleFavoriteUserCard(data: {cardId: $cardId}) {
      id
      isFavorite
    }
  }
`;

// ----- QUERIES ----- //

export const USER_CARDS_QUERY = gql`
  query {
    userCards{
      id
      isFavorite
      isToDo
      type
      cardData{
        youtubeCardData{
          channelThumbnail
          channelTitle
          duration
          likes
          publishedAt
          videoId
          videoThumbnail
          videoTitle
          views
        }
      }
    }
  }
`;

// ----- SUBSCRIPTIONS ----- //

export const DELETED_USER_CARD_SUBSCRIPTION = gql`
  subscription deletedUserCard {
    deletedUserCard {
      id
    }
  }
`;


export const USER_CARD_SUBSCRIPTION = gql`
  subscription userCard {
    userCard {
      id
      type
      cardData{
        youtubeCardData{
          channelThumbnail
          channelTitle
          duration
          likes
          publishedAt
          videoId
          videoThumbnail
          videoTitle
          views
        }
      }
    }
  }
`;

// ----- RESPONSE INTERFACES ----- //

export interface UserCard {
  id: string;
  isFavorite: boolean;
  isToDo: boolean;
  type: 'Youtube';
  cardData: {
    youtubeCardData: YoutubeVideoData;
  };
}

export interface UserCardsQueryResponse {
  userCards: UserCard[];
}
