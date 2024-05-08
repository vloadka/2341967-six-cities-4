import { store } from '../store/index';
import { Offer } from './offer';
import { ReviewType } from './review';

export type AuthorizationUserProcess = {
  authorizationStatus: string;
  userEmail: string;
}

export type OffersData = {
  isOffersDataLoading: boolean;
  offers: Offer[];
  filteredOffers: Offer[];
  cityName: string;
}

export type PageEvents = {
   currentOfferId: string | null;
   sortType: string;
}

export type CurrentOfferData = {
   isCurrentOfferDataLoading: boolean;
   offerInfo: Offer | null;
   comments: ReviewType[];
   nearbyOffers: Offer[];
}

export type UserReview = {
   isCommentDataSending: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FavoriteOffersData = {
  isFavoriteOffersDataLoading: boolean;
  favoriteOffers: Offer[];
}

