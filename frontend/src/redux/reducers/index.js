import { combineReducers } from "redux";

import * as product from "./productReducers";
import * as cart from "./cartReducers";
import * as user from "./userReducers";
import * as order from "./orderReducers";

const rootReducer = combineReducers({
  productList: product.productListReducer,
  productDetails: product.productDetailsReducer,
  productDelete: product.productDeleteReducer,
  productCreate: product.productCreateReducer,
  productUpdate: product.productUpdateReducer,
  productReviewCreate: product.productReviewCreateReducer,
  productTopRated: product.productTopRatedReducer,

  cart: cart.cartReducer,

  userLogin: user.userLoginReducer,
  userRegister: user.userRegisterReducer,
  userDetails: user.userDetailsReducer,
  userUpdateProfile: user.userUpdateProfileReducer,
  userList: user.userListReducer,
  userDelete: user.userDeleteReducer,
  userUpdate: user.userUpdateReducer,

  orderCreate: order.orderCreateReducer,
  orderDetails: order.orderDetailsReducer,
  orderPay: order.orderPayReducer,
  orderListMy: order.orderListMyReducer,
});

export default rootReducer;
