import USER from '../Constant';

export const filterData = filteredData => async dispatch => {
  // console.log('filteredData..........',filteredData);
  dispatch({
    type: USER.FILTERED_DATA,
    payload: filteredData,
  });
};

export const addToCart = addToCartData => async dispatch => {
  console.log('addToCartDataaddToCartData aaaaaaaaa', addToCartData);
  dispatch({
    type: USER.CART_DATA,
    payload: addToCartData,
  });
};

export const deleteToCart = (item) =>async (dispatch, getState) => {
  const { cart } = getState();

  const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingCartItem) {
    if (existingCartItem.qty > 1) {
      dispatch({ type: USER.IDC_CART, payload: item });
    } else {
      // If the quantity is 1, remove the item from the cart
      dispatch(removeToCart(item));
    }
  }
};

export const removeToCart = RemovedData => async dispatch => {
  dispatch({
    type: USER.REMOVE_CART,
    payload: RemovedData,
  });
};

export const requestUsers = data => async dispatch => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      // type: USER.LOAD_SUCCESS,
      type: USER.LOAD,
      usersData: [],
      isError: true,
    });
  }
};
