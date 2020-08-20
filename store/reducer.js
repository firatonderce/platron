import * as ActionTypes from './actionTypes';

const initialState = {
  userMail: [],
  userName: [],
  phone: [],
  otp: [],
  basket: [],
  location: [],
  login: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case ActionTypes.ADD_USER_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case ActionTypes.LOG_IN:
      return {
        ...state,
        login: action.payload,
      };
    case ActionTypes.LOG_OUT:
      return {
        ...state,
        otp:[],
        login: false,
        phone: [],
        userName: [],
        userMail: [],
      };
    case ActionTypes.ADD_OTP:
      return {
        ...state,
        otp: action.payload,
      };
    case ActionTypes.ADD_NAME:
      return {
        ...state,
        userName: action.payload
      };
    case ActionTypes.ADD_MAIL:
      return {
        ...state,
        userMail: action.payload
      }
    case ActionTypes.ADD_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
      case ActionTypes.REMOVE:
        return {
          ...state,
          basket: [],
        };

    case ActionTypes.REMOVE_BASKET:
      const alteredBasket = [...state.basket];
      const removedIndex = state.basket.findIndex(
        (basketItem = {}) =>
          basketItem.itemId === action.payload.itemId &&
          basketItem.productId === action.payload.productId,
      );
      alteredBasket.splice(removedIndex, 1);
      return {
        ...state,
        basket: alteredBasket,
      };
    default:
      return state;
  }
};
