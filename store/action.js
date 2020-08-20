import * as ActionTypes from './actionTypes';

export const addUserLocation = (location) => {
return {
  type: ActionTypes.ADD_USER_LOCATION,
  payload: location
}

}
export const addUserPhone = (phone) => {
  return {
    type: ActionTypes.ADD_USER_PHONE,
    payload: phone
  }
};
export const logOut = () => {
  return{
    type: ActionTypes.LOG_OUT,
    payload:[]
  }
}
export const logIn = (value) => {
  return {
    type: ActionTypes.LOG_IN,
    payload: value
  }
};
export const addName = (name) => {
  return {
    type: ActionTypes.ADD_NAME,
    payload: name
  }
};
export const addMail = (mail) => {
  return {
    type: ActionTypes.ADD_MAIL,
    payload: mail
};
};
export const addOtp = (otp) => {
  return {
    type: ActionTypes.ADD_OTP,
    payload: otp,
  };
};

export const addBasketItem = (basketItem) => {
  return {
    type: ActionTypes.ADD_BASKET,
    payload: basketItem,
  };
};

export const deleteBasketItem = ({itemId, productId}) => {
  return {
    type: ActionTypes.REMOVE_BASKET,
    payload: {itemId, productId},
  };
};

export const removeBasket = () => {
  return {
    type: ActionTypes.REMOVE,
    payload:[]
  };
};
