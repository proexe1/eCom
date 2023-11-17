import {Products} from '../../Helpers/JsonData';
import USER from '../Constant';

const initialState = {
  usersData: Products?.products,
  isLoading: false,
  isError: false,
  filterData: [],
  cart: [],
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: action?.usersData,
        filterData: action?.payload,
        cart: [],
      };
    case USER.CART_DATA:
      const itemToAdd = action.payload;
      const existingItemIndex = state?.cart?.findIndex(
        item => item.id === itemToAdd.id,
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          qty: updatedCart[existingItemIndex].qty + 1,
        };

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, {...itemToAdd, qty: 1}],
        };
      }

    case USER.DECREASE_CART:
      const itemToDecrease = action.payload;
      const existingItemIndexDecrease = state?.cart?.findIndex(
        item => item.id === itemToDecrease.id,
      );

      if (existingItemIndexDecrease !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndexDecrease] = {
          ...updatedCart[existingItemIndexDecrease],
          qty:
            updatedCart[existingItemIndexDecrease].qty <= 1
              ? 1
              : updatedCart[existingItemIndexDecrease].qty - 1,
        };

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, {...itemToDecrease, qty: 1}],
        };
      }

    case USER.FILTERED_DATA:
      return {
        ...state,
        filterData: action?.payload,
      };

    case USER.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default Reducers;
